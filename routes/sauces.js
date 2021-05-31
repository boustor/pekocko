const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');
const auth = require('../middleware/auth');
const owner = require('../middleware/isOwner');
const saucesCtrl = require('../controllers/sauces');


router.get('/', auth, saucesCtrl.getAllSauces);
router.get('/:id', auth, saucesCtrl.getOneSauces);
router.post('/', auth, multer, saucesCtrl.createSauces);
router.put('/:id', auth, owner, multer, saucesCtrl.modifySauces);
router.delete('/:id', auth, owner, saucesCtrl.deleteSauces);
router.post('/:id/like', auth, saucesCtrl.likeSauces);


module.exports = router;