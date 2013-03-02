var Collection = require('./support/collection')
, c = new Collection('users')
, user = {
	username:'18912345678',
	password:'123456',
	roles:['consumer','employe', 'administrator']
}

var login = function(done) {
	console.info('#login')
  c.post({url:'/login', json:user}, function(err, res, body){
		res.should.have.status(200)
		console.info('#login done')
		if(done) done()
  })
}

before(function(done){
  c.post({json:user}, function(err, res, body){
		res.should.have.status(200)
		user.id = body.id;
		done()
  })
})

after(function(done){
	login(function(){
	  c.del({url:'/'+user.id}, function(err, res){
			res.should.have.status(200)
			done()
	  })
	})
})

describe('User', function(){
	before(function(done){
	  login(done)
	})
  it('should success got Current user', function(done){
    c.get({url:'/me'}, function(err, res, body){
			console.log(body)
			body = JSON.parse(body)
			res.should.have.status(200)
			user.id.should.eql(body.id)
			user.username.should.eql(body.username)
			done()
    })
  })
	it('should GET Users List by authroization', function(){
			  
	})
	it('should GET User by ID', function(){
			  
	})
	it('should UPDATE User by ID', function(){
			  
	})
	after(function(done){
		console.info('#logout')
		c.post({url:'/logout'}, function(err, res, body){
			res.should.have.status(200)
			console.info('#logout done')
			if(done) done()
		})
	})
})


