var custom = [
    {
        "name": "body",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 12.0, -2.0 ],
            "size": [ 8, 12, 4 ],
            "uv": [ 16, 16 ]
          }
        ]
      },

      {
        "name": "waist",
        "neverRender": true,
        "pivot": [ 0.0, 12.0, 0.0 ]
      },

      {
        "name": "head",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 24.0, -4.0 ],
            "size": [ 8, 8, 8 ],
            "uv": [ 0, 0 ]
          }
        ]
      },

      {
        "name": "hat",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 24.0, -4.0 ],
            "size": [ 8, 8, 8 ],
            "uv": [ 32, 0 ],
            "inflate": 0.5
          }
        ],
        "neverRender": true
      },

      {
        "name": "rightArm",
        "pivot": [ -5.0, 22.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -8.0, 12.0, -2.0 ],
            "size": [ 4, 12, 4 ],
            "uv": [ 40, 16 ]
          }
        ]
      },

      {
        "name": "rightItem",
        "pivot": [ -6, 15, 1 ],
        "neverRender": true,
        "parent": "rightArm"
      },

      {
        "name": "leftArm",
        "pivot": [ 5.0, 22.0, 0.0 ],
        "cubes": [
          {
            "origin": [ 4.0, 12.0, -2.0 ],
            "size": [ 4, 12, 4 ],
            "uv": [ 40, 16 ]
          }
        ],
        "mirror": true
      },

      {
        "name": "rightLeg",
        "pivot": [ -1.9, 12.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -3.9, 0.0, -2.0 ],
            "size": [ 4, 12, 4 ],
            "uv": [ 0, 16 ]
          }
        ]
      },

      {
        "name": "leftLeg",
        "pivot": [ 1.9, 12.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -0.1, 0.0, -2.0 ],
            "size": [ 4, 12, 4 ],
            "uv": [ 0, 16 ]
          }
        ],
        "mirror": true
      },

      {
        "name": "helmet",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "neverRender": true
      },
      {
        "name": "rightArmArmor",
        "pivot": [ -5.0, 22.0, 0.0 ],
        "parent": "rightArm"
      },
      {
        "name": "leftArmArmor",
        "pivot": [ 5.0, 22.0, 0.0 ],
        "parent": "leftArm",
        "mirror": true
      },
      {
        "name": "rightLegging",
        "pivot": [ -1.9, 12.0, 0.0 ],
        "parent": "rightLeg"
      },
      {
        "name": "leftLegging",
        "pivot": [ 1.9, 12.0, 0.0 ],
        "parent": "leftLeg",
        "mirror": true
      },
      {
        "name": "rightBoot",
        "pivot": [ -1.9, 12.0, 0.0 ],
        "parent": "rightLeg"
      },
      {
        "name": "leftBoot",
        "pivot": [ 1.9, 12.0, 0.0 ],
        "parent": "leftLeg",
        "mirror": true
      },
      {
        "name": "rightSock",
        "pivot": [ -1.9, 12.0, 0.0 ],
        "parent": "rightLeg"
      },
      {
        "name": "leftSock",
        "pivot": [ 1.9, 12.0, 0.0 ],
        "parent": "leftLeg",
        "mirror": true
      },
      {
        "name": "bodyArmor",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "parent": "body"
      },
      {
        "name": "belt",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "parent": "body"
      }
]
var customSlim = [
    {
        "name": "root",
        "pivot": [ 0.0, 0.0, 0.0 ]
      },
      {
        "name": "waist",
        "parent": "root",
        "pivot": [ 0.0, 12.0, 0.0 ]
      },
      {
        "name": "body",
        "parent": "waist",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 12.0, -2.0 ],
            "size": [ 8, 12, 4 ],
            "uv": [ 16, 16 ]
          }
        ]
      },
      {
        "name": "head",
        "parent": "body",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 24.0, -4.0 ],
            "size": [ 8, 8, 8 ],
            "uv": [ 0, 0 ]
          }
        ]
      },
      {
        "name": "hat",
        "parent": "head",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 24.0, -4.0 ],
            "size": [ 8, 8, 8 ],
            "uv": [ 32, 0 ],
            "inflate": 0.5
          }
        ]
      },
      {
        "name": "rightLeg",
        "parent": "root",
        "pivot": [ -1.9, 12.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -3.9, 0.0, -2.0 ],
            "size": [ 4, 12, 4 ],
            "uv": [ 0, 16 ]
          }
        ]
      },
      {
        "name": "rightPants",
        "parent": "rightLeg",
        "pivot": [ -1.9, 12.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -3.9, 0.0, -2.0 ],
            "size": [ 4, 12, 4 ],
            "uv": [ 0, 32 ],
            "inflate": 0.25
          }
        ]
      },

      {
        "name": "leftLeg",
        "parent": "root",
        "pivot": [ 1.9, 12.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -0.1, 0.0, -2.0 ],
            "size": [ 4, 12, 4 ],
            "uv": [ 16, 48 ]
          }
        ],
        "mirror": true
      },
      {
        "name": "leftPants",
        "parent": "leftLeg",
        "pivot": [ 1.9, 12.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -0.1, 0.0, -2.0 ],
            "size": [ 4, 12, 4 ],
            "uv": [ 0, 48 ],
            "inflate": 0.25
          }
        ]
      },

      {
        "name": "leftArm",
        "parent": "body",
        "pivot": [ 5.0, 21.5, 0.0 ],
        "cubes": [
          {
            "origin": [ 4.0, 11.5, -2.0 ],
            "size": [ 3, 12, 4 ],
            "uv": [ 32, 48 ]
          }
        ]
      },
      {
        "name": "leftSleeve",
        "parent": "leftArm",
        "pivot": [ 5.0, 21.5, 0.0 ],
        "cubes": [
          {
            "origin": [ 4.0, 11.5, -2.0 ],
            "size": [ 3, 12, 4 ],
            "uv": [ 48, 48 ],
            "inflate": 0.25
          }
        ]
      },
      {
        "name": "leftItem",
        "pivot": [ 6, 14.5, 1 ],
        "parent": "leftArm"
      },
      {
        "name": "rightArm",
        "parent": "body",
        "pivot": [ -5.0, 21.5, 0.0 ],
        "cubes": [
          {
            "origin": [ -7.0, 11.5, -2.0 ],
            "size": [ 3, 12, 4 ],
            "uv": [ 40, 16 ]
          }
        ]
      },
      {
        "name": "rightSleeve",
        "parent": "rightArm",
        "pivot": [ -5.0, 21.5, 0.0 ],
        "cubes": [
          {
            "origin": [ -7.0, 11.5, -2.0 ],
            "size": [ 3, 12, 4 ],
            "uv": [ 40, 32 ],
            "inflate": 0.25
          }
        ]
      },
      {
        "name": "rightItem",
        "pivot": [ -6, 14.5, 1 ],
        "locators": {
          "lead_hold": [ -6, 14.5, 1 ]
        },
        "parent": "rightArm"
      },

      {
        "name": "jacket",
        "parent": "body",
        "pivot": [ 0.0, 24.0, 0.0 ],
        "cubes": [
          {
            "origin": [ -4.0, 12.0, -2.0 ],
            "size": [ 8, 12, 4 ],
            "uv": [ 16, 32 ],
            "inflate": 0.25
          }
        ]
      },

      {
        "name": "cape",
        "pivot": [ 0.0, 24, -3.0 ],
        "parent": "body"
      }
]