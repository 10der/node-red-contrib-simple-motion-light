module.exports = function (RED) {
  function Test(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on("input", function (msg) {
      //msg.motion_event = config.userValue;
      //node.send(msg);
    });
  }
  RED.nodes.registerType("motion-light-test", Test);
};
