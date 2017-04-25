var rest = require('./bower_components/rest/browser');
var mime = require('./bower_components/rest/interceptor/mime');
var errorCode = require('./bower_components/rest/interceptor/errorCode');
window.RestClient = rest.wrap(mime).wrap(errorCode, { code: 500 });;
