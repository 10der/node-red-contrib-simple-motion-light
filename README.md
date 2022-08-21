# node-red-contrib-simple-motion-light 
node-red for simpe motion light based on time / lux

## Installation
npm -g install node-red-contrib-simple-motion-light 

## Features


## Example


**With an inject node and a debug node.**

```
[
    {
        "id": "399b0ad93e2ac0a2",
        "type": "motion-light",
        "z": "0796626139fe6cc1",
        "name": "hallway",
        "lat": "48.42687",
        "lon": "35.01336",
        "attributes": [
            {
                "lux": 1,
                "brightness": 50,
                "timeout": 10,
                "id": "day",
                "time": "sunrise..sunset"
            },
            {
                "brightness": 254,
                "timeout": 10,
                "id": "evening",
                "time": "sunset..23:00"
            },
            {
                "brightness": 1,
                "timeout": 2,
                "id": "night",
                "time": "23:00..sunrise"
            }
        ],
        "x": 540,
        "y": 620,
        "wires": [
            [
                "7871f78fab510250"
            ]
        ]
    },
    {
        "id": "e535f9dce083cd8f",
        "type": "inject",
        "z": "0796626139fe6cc1",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "binary_sensor.motion_sensor_hallway_occupancy",
        "payload": "on",
        "payloadType": "str",
        "x": 150,
        "y": 600,
        "wires": [
            [
                "5bf8d66f6a3a6ad6"
            ]
        ]
    },
    {
        "id": "b06b2d103b867ed8",
        "type": "inject",
        "z": "0796626139fe6cc1",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "binary_sensor.motion_sensor_hallway_occupancy",
        "payload": "off",
        "payloadType": "str",
        "x": 150,
        "y": 640,
        "wires": [
            [
                "5bf8d66f6a3a6ad6"
            ]
        ]
    },
    {
        "id": "5bf8d66f6a3a6ad6",
        "type": "switch",
        "z": "0796626139fe6cc1",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nnull"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 330,
        "y": 620,
        "wires": [
            [
                "399b0ad93e2ac0a2"
            ]
        ]
    },
    {
        "id": "7871f78fab510250",
        "type": "debug",
        "z": "0796626139fe6cc1",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "true",
        "targetType": "full",
        "statusVal": "",
        "statusType": "auto",
        "x": 690,
        "y": 620,
        "wires": []
    },
    {
        "id": "8a9025e820df5d94",
        "type": "inject",
        "z": "0796626139fe6cc1",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "hall_lamps",
        "payload": "on",
        "payloadType": "str",
        "x": 170,
        "y": 440,
        "wires": [
            [
                "fac1c4cc1562ed65"
            ]
        ]
    },
    {
        "id": "48c59309aa201b79",
        "type": "inject",
        "z": "0796626139fe6cc1",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "hall_lamps",
        "payload": "off",
        "payloadType": "str",
        "x": 170,
        "y": 480,
        "wires": [
            [
                "fac1c4cc1562ed65"
            ]
        ]
    },
    {
        "id": "03183bf62d754027",
        "type": "inject",
        "z": "0796626139fe6cc1",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "tv_1234",
        "payload": "on",
        "payloadType": "str",
        "x": 160,
        "y": 300,
        "wires": [
            [
                "4cf8a35846c8c76e"
            ]
        ]
    },
    {
        "id": "1750a05ace6e07c1",
        "type": "inject",
        "z": "0796626139fe6cc1",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "tv_1234",
        "payload": "off",
        "payloadType": "str",
        "x": 160,
        "y": 340,
        "wires": [
            [
                "4cf8a35846c8c76e"
            ]
        ]
    },
    {
        "id": "629334a4ea20363b",
        "type": "comment",
        "z": "0796626139fe6cc1",
        "name": "Motion sensor",
        "info": "",
        "x": 110,
        "y": 560,
        "wires": []
    },
    {
        "id": "3dc708a2bfee9c43",
        "type": "comment",
        "z": "0796626139fe6cc1",
        "name": "Hall lamps",
        "info": "",
        "x": 100,
        "y": 400,
        "wires": []
    },
    {
        "id": "69e8014ec0bff166",
        "type": "comment",
        "z": "0796626139fe6cc1",
        "name": "TV",
        "info": "",
        "x": 90,
        "y": 260,
        "wires": []
    },
    {
        "id": "fac1c4cc1562ed65",
        "type": "switch",
        "z": "0796626139fe6cc1",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nnull"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 330,
        "y": 460,
        "wires": [
            [
                "233c6fc73feaedab"
            ]
        ]
    },
    {
        "id": "4cf8a35846c8c76e",
        "type": "switch",
        "z": "0796626139fe6cc1",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nnull"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 330,
        "y": 320,
        "wires": [
            [
                "233c6fc73feaedab"
            ]
        ]
    },
    {
        "id": "5d2a0baa06584a4b",
        "type": "inject",
        "z": "0796626139fe6cc1",
        "name": "lux 10",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "sensor.motion_sensor_hallway_illuminance_lux",
        "payload": "10",
        "payloadType": "num",
        "x": 350,
        "y": 720,
        "wires": [
            [
                "6116ece76a85a89a"
            ]
        ]
    },
    {
        "id": "ceee0b3dacf91cf3",
        "type": "inject",
        "z": "0796626139fe6cc1",
        "name": "lux 1",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "sensor.motion_sensor_hallway_illuminance_lux",
        "payload": "1",
        "payloadType": "num",
        "x": 350,
        "y": 780,
        "wires": [
            [
                "6116ece76a85a89a"
            ]
        ]
    },
    {
        "id": "93ad36afd6cf7966",
        "type": "inject",
        "z": "0796626139fe6cc1",
        "name": "lux 0",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "sensor.motion_sensor_hallway_illuminance_lux",
        "payload": "0",
        "payloadType": "num",
        "x": 350,
        "y": 840,
        "wires": [
            [
                "6116ece76a85a89a"
            ]
        ]
    },
    {
        "id": "233c6fc73feaedab",
        "type": "motion-light-event",
        "z": "0796626139fe6cc1",
        "name": "",
        "userValue": "exclude",
        "x": 520,
        "y": 400,
        "wires": [
            [
                "399b0ad93e2ac0a2"
            ]
        ]
    },
    {
        "id": "6116ece76a85a89a",
        "type": "motion-light-event",
        "z": "0796626139fe6cc1",
        "name": "",
        "userValue": "lux",
        "x": 510,
        "y": 760,
        "wires": [
            [
                "399b0ad93e2ac0a2"
            ]
        ]
    }
]
```
