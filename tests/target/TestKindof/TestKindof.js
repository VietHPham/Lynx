var kindOf = require('kind-of');
var path = require('path');
var utils = require("../TestcaseUtils.js");
var fs = require('fs');
var inputs = JSON.parse(fs.readFileSync('./TestCases.json', 'utf8'));

function test(userJson){
       var Lynx_ret = kindOf(userJson);
}

for (var i=0; i < inputs.length; i++) {
  utils.entry(test, inputs[i]);
}
