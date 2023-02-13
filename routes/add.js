const {Router} = require('express')
const Model = require('../models/model')
const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Add phone',
        isAdd: true
    })
})

router.post('/', async (req, res) => {
    const model = new Model(req.body.title, req.body.price, req.body.img)

    await model.save()
    res.redirect('/models')
})


module.exports = router