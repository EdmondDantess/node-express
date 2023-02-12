const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Add phone',
        isAdd: true
    })
})

module.exports = router