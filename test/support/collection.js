var request = require('request')
, user = {
	username:'18912345678',
	password:'123456',
	roles:['consumer','employe', 'administrator']
}

function Collection(resource) {
	this.resource = resource
  this.urlObj = {
		protocol:'http',
		hostname:'localhost',
		port:'2403',
		pathname:'/'+resource
	}
	this.url = require('url').format(this.urlObj)
	this.json = true
}

Collection.prototype.request = function (options, fn) {
  var url = this.url

  options.url = url + (options.url || '')
	options.json = options.json||this.json
	// console.log(options)
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

Collection.prototype.login = function(fn) {
	this.urlObj.pathname = 'users/login'
	var url = require('url').format(this.urlObj)
  request({url:url, json:user, method:'POST'}, function(err, res, body){
		if(res.statusCode !== 200) console.log(body)
		res.should.have.status(200)
		if(fn) fn()
  })	
}

exports = module.exports = Collection