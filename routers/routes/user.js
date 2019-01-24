const router = require('express').Router()
//model
const method = require('../../controllers/user').method
//router
router.get('/', method.getAll)
router.get('/:id', method.getOneById)
router.post('/', method.createOne)
router.put('/:id', method.updateOneById)
router.delete('/:id', method.deleteOneById)
//custom method
router.post('/phone', method.findByPhoneNumber)
//export
module.exports = router