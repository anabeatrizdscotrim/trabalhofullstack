const express = require('express');
const router = express.Router();
const pessoasController = require('../controllers/pessoasController');

router.post('/pessoas', pessoasController.createPessoa);
router.get('/pessoas', pessoasController.getAllPessoas);
router.get('/pessoas/:id', pessoasController.getPessoaById);
router.put('/pessoas/:id', pessoasController.updatePessoa);
router.delete('/pessoas/:id', pessoasController.deletePessoa);

module.exports = router;