var Collection = require('./support/collection')
, c = new Collection('users')
, user = {
	username:'18912345678',
	password:'123456',
	roles:['consumer','employe', 'administrator']
}

before(function(done){
  c.post({json:user}, function(err, res, body){
		// console.log(body)
		res.should.have.status(200)
		user.id = body.id;
		done()
  })
})

after(function(done){
	c.login(function(){
	  c.del({url:'/'+user.id}, function(err, res){
			res.should.have.status(200)
			done()
	  })
	})
})

describe('User', function(){
	before(function(done){
	  c.login(done)
	})
  it('should success got Current user', function(done){
    c.get({url:'/me'}, function(err, res, body){
			res.should.have.status(200)
			user.id.should.eql(body.id)
			user.username.should.eql(body.username)
			done()
    })
  })
	it('should GET Users List by authroization', function(done){
		c.get({}, function(err,res, body){
			// console.log(body)
			res.should.have.status(200)
			body.should.be.an.instanceOf(Array)
			body.length.should.above(0)
			done()
		})
	})
	it('should GET User by ID', function(done){
		c.get({url:'/'+user.id}, function(err, res, body){
			res.should.have.status(200)
			body.should.include({id:user.id, username:user.username})
			done()
		})	  
	})
	it('should UPDATE User by ID', function(done){
		var data = {displayName:'gbo'}
		c.put({url:'/'+user.id, json:data}, function(err, res, body){
			res.should.have.status(200)
			body.should.include(data)
			done()
		})
	})
	after(function(done){
		c.post({url:'/logout'}, function(err, res, body){
			res.should.have.status(200)
			if(done) done()
		})
	})
})


