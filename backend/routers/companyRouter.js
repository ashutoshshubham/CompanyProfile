const { Router } = require('express');
const Model = require('../models/companyModel');
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

// router.post('/add', (req, res) => {
//     console.log(req.body);
//     new Model({
//         name: req.body.name,
//         type: req.body.type,
//         departments: req.body.departments,
//         working: req.body.working,
//         address: req.body.address,
//         contact: req.body.contact,
//         email: req.body.email,
//         photo: req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename,
//     }).save()
//         .then((result) => {
//             res.json(result);
//         }).catch((err) => {
//             console.log(err);
//             res.status(500).json(err)
//         });
// })

router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
})

router.delete('/delete/:compId', (req, res) => {
    Model.findByIdAndDelete(req.params.compId)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            res.status(500).json(err);
        });
})









module.exports = router;