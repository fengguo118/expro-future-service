var Collection = require('./support/collection')
, c = new Collection('products')
, product = {
	code:'21233128912345678',
	name:'iPhone 4S CDMA'
}

describe('Product', function(){
  before(function(done){
    c.login(done)
  })
	describe('#Create', function(){
		it('should success', function(done){
			c.post({json:product},function(err, res, body){
				res.should.have.status(200)
				product = body
				done()
			})
		})
	})
})