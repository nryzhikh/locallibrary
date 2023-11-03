// router.get('/:id', (req, res, next) => {
//   // if the user ID is 0, skip to the next router
//   if (req.params.id === '0') next('route')
//   // otherwise pass control to the next middleware function in this stack
//   else next()
// }, (req, res, next) => {
//   // render a regular page
//   res.render('index', { title: 'Regular' })
// })

// router.get('/:id', (req, res, next) => {
//   console.log(req.params.id)
//   res.render('index' , { title: 'special' });
// })

router.get('/:id', (req, res) => {
  res.send('hello, user!')
})

router.use('/admin', router, (req, res) => {
  res.sendStatus(401)
})

// app.use((req, res, next) => {
//   console.log('Hello from the middleware 👋');
//   next()
// })


// app.use('/users/:id', (req, res, next) => {
//   console.log('Request URL:', req.originalUrl)
//   next()
// }, (req, res, next) => {
//   console.log('Request Type:', req.method)
//   next()
// })

// app.get('/users/:id', (req, res, next) => {
//   // if the user ID is 0, skip to the next route
//   if (req.params.id === '0') next('route')
//   // otherwise pass the control to the next middleware function in this stack
//   else next()
// }, (req, res, next) => {
//   // send a regular response
//   res.send('regular')
// })

// handler for the /user/:id path, which sends a special response
// app.get('/users/:id', (req, res, next) => {
//   res.send('special')
// })



