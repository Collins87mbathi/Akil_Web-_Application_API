const router = require('express').Router()
const upload = require('../middlewares/uploadImage');
const Uploader = require('../controllers/UploadController');



router.post('/post_product',upload, Uploader);

module.exports = router

