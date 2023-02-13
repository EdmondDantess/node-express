const {Router} = require('express')
const router = Router()
const Model = require('../models/model')

router.get('/', async (req, res) => {
    const models = await Model.getAll()
    res.render('models', {
        title: 'Models',
        isModels: true,
        models
    })
})

router.get('/:id', async (req, res) => {
    const model = await Model.getById(req.params.id)
    res.render('model', {
        title: `Model ${model.title}`,
        model
    })
})

module.exports = router