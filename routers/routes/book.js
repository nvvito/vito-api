const router = require('express').Router()
const controller = require('../../controllers/book').controller

//router
router.get('/', controller.getAll)
router.get('/:id', controller.getOneById)
router.post('/', controller.createOne)
router.put('/:id', controller.updateOneById)
router.delete('/:id', controller.deleteOneById)
//custom method

//export
module.exports = router