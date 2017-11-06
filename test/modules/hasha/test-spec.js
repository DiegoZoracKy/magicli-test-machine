'use strict';

module.exports = {
    "apiTests": [
        {
            "parameters": [
                [
                    "input",
                    "unicorn"
                ],
                [
                    "opts",
                    ""
                ]
            ]
        },
        {
            "method": "fromFile",
            "parameters": [
                [
                    "fp",
                    "package.json"
                ],
                [
                    "opts",
                    ""
                ]
            ]
        },
        {
            "method": "fromFileSync",
            "parameters": [
                [
                    "fp",
                    "package.json"
                ],
                [
                    "opts",
                    ""
                ]
            ]
        }
    ]
};