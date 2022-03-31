const { Router } = require('express');
const pessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/', pessoaController.obtemPessoas);

module.exports = router;