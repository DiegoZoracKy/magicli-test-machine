'use strict';

const magicliTestMachine = require('../lib/magicli-test-machine.js');
const path = require('path');
const fs = require('fs');
const assert = require('assert');

const defaultTests = new Set([
    'execMethod',
    'execMethodViaCli',
    'compareExecMethodWithExecMethodViaCli'
]);

const modulesSpecPath = path.resolve(__dirname, './modules');
const modules = fs.readdirSync(modulesSpecPath);

modules.forEach(moduleName => {
	const testSpec = magicliTestMachine.prepareTestSpec(`${modulesSpecPath}/${moduleName}`);
	const tests = testSpec.tests && new Set(testSpec.tests) || defaultTests;

	describe(`${testSpec.name}`, function() {
		const { requiredModule, magicliPath } = magicliTestMachine.prepareModuleToBeTested(testSpec);

		testSpec.apiTests.forEach((apiTest, i) => {
			describe(`Test: ${apiTest.name || i}`, function() {

				const method = apiTest.method ? requiredModule[apiTest.method] : requiredModule;

				let execResult;
				if(tests.has('execMethod')){
					it(`"${apiTest.method || 'default'}" execution`, function() {
						return magicliTestMachine.testExecMethod(method, apiTest.parameters)
							.then(result => execResult = result);
					});
				}

				let execResultViaCli;
				if(tests.has('execMethodViaCli')){
					it(`"${apiTest.method || 'default'}" execution via CLI`, function() {
						return magicliTestMachine.testExecMethodViaCli(magicliPath, apiTest.method, apiTest.parameters)
							.then(result => execResultViaCli = result);
					});
				}

				if(tests.has('compareExecMethodWithExecMethodViaCli')){
					it(`"${apiTest.method || 'default'}" results must match`, function() {
						const pipeAfter = (apiTest.pipeline && apiTest.pipeline.exec && apiTest.pipeline.exec.after) || (testSpec.pipeline && testSpec.pipeline.exec && testSpec.pipeline.exec.after)
						if(pipeAfter){
							execResult = pipeAfter(execResult);
						}

						assert.equal(execResult, execResultViaCli);
					});
				}
			});
		});
	});
});