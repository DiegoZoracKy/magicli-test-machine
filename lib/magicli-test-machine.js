'use strict';

const assert = require('assert');
const path = require('path');
const fs = require('fs');
const findUp = require('find-up');
const { exec } = require('child_process');

const magicliTemplatePath = path.resolve(__dirname, `./magicli-template.js`);

function prepareTestSpec(moduleSpecPath) {
	const [name] = moduleSpecPath.match(/[^/]+$/);
	const { apiTests, pipeline, tests } = require(`${moduleSpecPath}/test-spec.js`);
	const localMagicliPath = `${moduleSpecPath}/magicli.js`;
	const specMagicliPath = fs.existsSync(localMagicliPath) ? localMagicliPath : undefined;

	return { name, apiTests, pipeline, tests, specMagicliPath };
}

function prepareModuleToBeTested(testSpec) {
	// Require module
	const requiredModule = require(testSpec.name);

	// Get module's absolute path
	const modulePath = findUp.sync('package.json', { cwd: require.resolve(testSpec.name) }).replace(/package\.json$/, '');

	// MagiCLI path
	const magicliPath = `${modulePath}magicli.js`;

	// Get MagiCLI's content
	let magicliTemplateContent;
	if (testSpec.specMagicliPath) {
		// Get local spec MagiCLI's content
		magicliTemplateContent = fs.readFileSync(testSpec.specMagicliPath, 'utf8');
	} else {
		// Get MagiCLI's template content
		magicliTemplateContent = fs.readFileSync(magicliTemplatePath, 'utf8');
	}

	// Inject MagiCLI's into module path
	fs.writeFileSync(magicliPath, magicliTemplateContent);

	return { magicliPath, requiredModule };
}

function testCompareExecMethodWithExecMethodViaCli(cliPath, method, methodStringPath, parameters, pipeline) {
	return Promise.all([
		testExecMethod(method, parameters),
		testExecMethodViaCli(cliPath, methodStringPath, parameters)
	]).then(([result, resultViaCli]) => {
		const pipelineAfter = (pipeline && pipeline.exec && pipeline.exec.after);
		if (pipelineAfter) {
			result = pipelineAfter(result);
		}

		assert.equal(result, resultViaCli);
		return { result, resultViaCli };
	});
}

function testExecMethodViaCli(cliPath, method, parameters) {
	let execResultViaCli;
	return execMethodViaCli(cliPath, method, parameters)
		.then(result => {
			execResultViaCli = result;
			assert(typeof(execResultViaCli) !== 'undefined');
			return execResultViaCli;
		});
}

function testExecMethod(method, parameters) {
	let execResult;
	return execMethod(method, parameters)
		.then(result => {
			execResult = result;
			assert(typeof(execResult) !== 'undefined');
			return execResult;
		});
}

function execMethod(method, parameters) {
	return new Promise((resolve, reject) => {
		let methodReturn = method(...parameters.map(p => p[1]));
		if (methodReturn && methodReturn.then) {
			return methodReturn.then(data => resolve(data));
		} else {
			return resolve(methodReturn);
		}
	});
}

function execMethodViaCli(cliPath, method, parameters) {
	let options = parameters.map(parameter => {
		const [name, value] = parameter;
		return `${name.length === 1 ? '-' : '--'}${name}="${value}"`;
	}).join(' ');

	return execCli(cliPath, method, options);
}

function execCli(cliPath, method = '', options) {
	return new Promise((resolve, reject) => {
		exec(`node ${cliPath} ${method} ${options}`, (err, stdout, stderr) => {
			if (err || stderr) {
				return reject(err || stderr);
			}

			stdout = stdout.replace(/\n$/, '');
			resolve(stdout);
		}).stdin.end();
	});
}

module.exports = {
	prepareTestSpec,
	prepareModuleToBeTested,
	execMethod,
	testExecMethod,
	execMethodViaCli,
	testExecMethodViaCli,
	testCompareExecMethodWithExecMethodViaCli,
	execCli
};