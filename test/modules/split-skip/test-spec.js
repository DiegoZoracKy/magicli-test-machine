'use strict';

module.exports = {
    "apiTests": [
        {
            "parameters": [
                [
                    "str",
                    "a,b,c,d"
                ],
                [
                    "separator",
                    ","
                ]
            ]
        }
    ],
    pipeline:{
        exec:{
            after: JSON.stringify
        }
    }
};