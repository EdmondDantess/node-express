const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('models', {
        title: 'Models',
        isModels: true
    })
})

module.exports = router