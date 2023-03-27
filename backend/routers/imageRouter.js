const { Router } = require('express');
const Model = require('../models/imageModel');
const router = Router();

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
})

router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
})

router.delete('/delete/:imgId', (req, res) => {
    Model.findByIdAndDelete(req.params.imgId)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
})

module.exports = router;