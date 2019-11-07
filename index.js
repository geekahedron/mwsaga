const express = require('express')
	const app = express()
	const server=require('http').createServer(app)

	app.use(function(req,res,next)
	{
		let out = "This is a new test page (" + app.get('env') + "," + req.path + ")"
		res.send(out)
	})

	// Start server
	let port = process.env.PORT || 3000
	server.listen(port, function () {
	  console.log('Express server listening on port %d in %s mode', port, app.get('env'))
	})