module.exports = {
	apiTests: [{
		"parameters": [
			["a", "{"],
			["b", "}"],
			["str", "pre{in{nested}}post"]
		],
		pipeline: {
			exec: {
				after: JSON.stringify
			}
		}
	}, {
		method: 'range',
		"parameters": [
			["a", "}"],
			["b", "{"],
			["str", "pre}in{nested}{post"]
		]
	}],
	pipeline: {
		exec: {
			after: JSON.stringify
		}
	}
};