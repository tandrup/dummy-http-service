var Express = require('express')

var dummyApp = Express()
var dummyAppPort = 5000

dummyApp.use(function (req, res) {
  res.send('Hello world!')
})

dummyApp.listen(dummyAppPort, function () {
  console.log('The dummy HTTP service is listening on port %d', dummyAppPort)
})
