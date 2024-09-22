const express = require('express');
const router = express.Router();
const hp = require('../controller/HpController');

router.get('/', hp.nom);              
router.get('/about', hp.about);       
router.get('/contact', hp.contact);  
router.get('/services', hp.services);
router.get('/projects', hp.projects);


router.get('/lans', hp.lans);
router.get('/2about', hp.about2);
router.get('/2pracarea', hp.pracarea2);
router.get('/2attorney', hp.attorney2);
router.get('/2contact', hp.contact2);



module.exports = router;
