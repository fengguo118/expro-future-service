var request = require('request')

function Collection(pathname) {
  var urlObj = {
		protocol:'http',
		hostname:'localhost',
		port:'2403',
		pathname:'/'+pathname
	}
	this.url = require('url').format(urlObj)
}

Collection.prototype.request = function (options, fn) {
  var url = this.url

  options.url = url + (options.url || '')
	console.log(options)
  request(options, fn);
}

Collection.prototype.post = function (options, fn) {
	options.method = 'POST'
	this.request(options, fn)
}

Collection.prototype.get = function (options, fn) {
	options.method = 'GET'
	this.request(options, fn)
}

Collection.prototype.put = function (options, fn) {
	options.method = 'PUT'
	this.request(options, fn)
}

Collection.prototype.del = function (options, fn) {
	options.method = 'DELETE'
	this.request(options, fn)
}

exports = module.exports = Collection