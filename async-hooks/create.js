'use strict';
const asyncHooks = require('async_hooks');

function init(id, type, triggerAsyncId, resource) {
  //   print(`${id} :: ${type} :: ${triggerAsyncId}`);
  //   print(resource.args);
}

function before(id) {
  print({ stage: 'before', id });
}

function after(id) {
  print({ stage: 'after', id });
}

function ontimeout() {
  print('User callback fired');
}

function print(values) {
  console.log(values);
}

const hook = asyncHooks.createHook({ init });
hook.enable();
setTimeout(() => {}, 10);
