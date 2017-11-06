#!/usr/bin/env node

require('magicli')({
	pipe: {
		after: JSON.stringify
	}
});