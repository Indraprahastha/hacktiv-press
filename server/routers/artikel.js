let express = require('express')
let router = express.Router()
let artikel = require('../controllers/artikel')
let helper = require('../helpers/helper.js')

router.get('/all',artikel.getArtikel)
router.post('/',artikel.addArtikel)
router.get('/:id',artikel.findArtikel)
router.put('/:id',artikel.editArtikel)
router.delete('/:id',artikel.deleteArtikel)
router.get('/',helper.auth,artikel.getPersonalArtikel)

module.exports = router
