const express = require('express')
const { createContact } = require('../controllers/auth-controller')
const router = express.Router()


router.post('/createContact',createContact)


module.exports = router