var should = require('should')
var request = require('request')
, url = require('url')
, urlObj = {
	protocol:'http',
	hostname:'localhost',
	port:'2403',
	pathname:'/users'
}
, r = request.defaults({url:urlObj})

describe('#User', function(){
	before(function(done){
		urlObj.pathname = '/users/login'
		r.post({url:url.format(urlObj),json:{username:'13357828347', password:'123456'}}, function(err, res, body){
			should.not.exist(err)
			res.should.have.status(200)
			console.info('login before');
			done()
		})
	})
  it('should success got Current user', function(done){
		urlObj.pathname = '/users/me'
    r.get({url:url.format(urlObj)}, function(err, res, body){
			should.not.exist(err)
			res.should.have.status(200)
			done()
    })
  })
	after(function(done){
	  console.info('should logout success')
		urlObj.pathname = '/users/logout'
		r.post({url:url.format(urlObj)}, function(err, res, body){
			should.not.exist(err)
			res.should.have.status(200)
			console.info('logout after');
			done()
		})
	})
})
