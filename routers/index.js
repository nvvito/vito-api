const router = require('express').Router()
const path = require('path')
//route 
const user = require('./routes/user')
const book = require('./routes/book')
//index
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/build/index.html'))
})
// user Routes
router.use('/api/user', user)
// user Routes
router.use('/api/book', book)

//export 
module.exports = router
