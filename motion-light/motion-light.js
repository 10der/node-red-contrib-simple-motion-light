"use strict";

var Configurator = require("./configurator");

module.exports = function (RED) {
  function MotionLightNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    // local vars
    var timer = false;
    var map = new Map();
    var exclude = false;
    // configs vars
    var rulesJSON = config.attributes || {};
    var configurator = new Configurator(rulesJSON, config.lat, config.lon);
    var timeout = 10 * 1000;
    var brightness = 254;
    var request_lux = 0;
    var current_lux = 0;

    function onAction(msg) {
      var rule = configurator.getActiveRule();
      if (rule) {
        request_lux = rule.lux || 0;
        timeout = (rule.timeout || 10) * 1000;
        brightness = rule.brightness || 254;
      }

      if (msg.motion_event) {
        if (msg.motion_event == "lux") {
          current_lux = msg.payload;
        }
        if (msg.motion_event == "exclude") {
          map.set(msg.topic, msg.payload);
          exclude = checkExcludes();
          if (exclude) {
            if (timer) {
              clearTimeout(timer);
            }
            node.send({ payload: false, brightness: 0 });
            node.status({
              fill: "blue",
              shape: "ring",
              text: "blocked by excludes",
            });
          }
        }
        return;
      }

      switch (msg.payload) {
        case "off":
          if (timer) {
            clearTimeout(timer);
          }
          node.status({ fill: "yellow", shape: "ring", text: "waiting" });
          timer = setTimeout(() => {
            node.send({ payload: false, brightness: 0 });
            timer = false;
            node.status({ fill: "red", shape: "ring", text: "off" });
          }, timeout);
          break;
        case "on":
          if (timer) {
            clearTimeout(timer);
            timer = false;
          }

          if (rule === null) {
            node.status({
              fill: "blue",
              shape: "ring",
              text: "no active rule",
            });
            break;
          }

          if (exclude) {
            node.status({
              fill: "blue",
              shape: "ring",
              text: "blocked by excludes",
            });
            break;
          }

          if (current_lux > request_lux) {
            node.status({
              fill: "blue",
              shape: "ring",
              text: "blocked by lux rule",
            });
            break;
          }
          node.send({ payload: true, brightness: brightness });
          node.status({
            fill: "green",
            shape: "dot",
            text: `on - ${rule.id} : ${rule.interval.join("..")}`,
          });
          break;
      }
    }

    function checkExcludes() {
      var exclude = false;
      map.forEach((value, key, map) => {
        if (value == "on") {
          exclude = true;
        }
      });
      return exclude;
    }

    this.on("input", function (msg) {
      onAction(msg);
    });
  }
  RED.nodes.registerType("motion-light", MotionLightNode);
};