'use strict';

module.exports = {
    "apiTests": [
        {
            "method": "noCase",
            "parameters": [
                [
                    "str",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ],
                [
                    "replacement",
                    "__"
                ]
            ]
        },
        {
            "method": "no",
            "parameters": [
                [
                    "str",
                    "test string"
                ]
            ]
        },
        {
            "method": "dotCase",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "dot",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "swapCase",
            "parameters": [
                [
                    "str",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "swap",
            "parameters": [
                [
                    "str",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "pathCase",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "path",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "upperCase",
            "parameters": [
                [
                    "str",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "upper",
            "parameters": [
                [
                    "str",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "lowerCase",
            "parameters": [
                [
                    "str",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "lower",
            "parameters": [
                [
                    "str",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "camelCase",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ],
                [
                    "mergeNumbers",
                    ""
                ]
            ]
        },
        {
            "method": "camel",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ],
                [
                    "mergeNumbers",
                    ""
                ]
            ]
        },
        {
            "method": "snakeCase",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "snake",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "titleCase",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "title",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "paramCase",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "param",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "headerCase",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "header",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "pascalCase",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ],
                [
                    "mergeNumbers",
                    ""
                ]
            ]
        },
        {
            "method": "pascal",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ],
                [
                    "mergeNumbers",
                    ""
                ]
            ]
        },
        {
            "method": "constantCase",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "constant",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "sentenceCase",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "sentence",
            "parameters": [
                [
                    "value",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ],
            pipeline: {
                exec:{
                    after: result => result.toString()
                }
            }
        },
        {
            "method": "isUpperCase",
            "parameters": [
                [
                    "string",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ],
            pipeline: {
                exec:{
                    after: result => result.toString()
                }
            }
        },
        {
            "method": "isUpper",
            "parameters": [
                [
                    "string",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ],
            pipeline: {
                exec:{
                    after: result => result.toString()
                }
            }
        },
        {
            "method": "isLowerCase",
            "parameters": [
                [
                    "string",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ],
            pipeline: {
                exec:{
                    after: result => result.toString()
                }
            }
        },
        {
            "method": "isLower",
            "parameters": [
                [
                    "string",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ],
            pipeline: {
                exec:{
                    after: result => result.toString()
                }
            }
        },
        {
            "method": "upperCaseFirst",
            "parameters": [
                [
                    "str",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "ucFirst",
            "parameters": [
                [
                    "str",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "lowerCaseFirst",
            "parameters": [
                [
                    "str",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        },
        {
            "method": "lcFirst",
            "parameters": [
                [
                    "str",
                    "test string"
                ],
                [
                    "locale",
                    ""
                ]
            ]
        }
    ]
};