'use strict';

module.exports = {
    "apiTests": [
        {
            "parameters": [
                [
                    "string",
                    "http://www.url.com"
                ]
            ]
        },
        {
            "parameters": [
                [
                    "string",
                    "noturl"
                ]
            ]
        }
    ],
    pipeline: {
        exec:{
            after: result => result.toString()
        }
    }
};