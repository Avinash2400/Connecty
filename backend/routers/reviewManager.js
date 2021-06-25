const Model = require('../models/reviewModel');
const router = require('express').Router();

router.post('/add', (req, res) => {
    new Model(req.body).save()
        .then(data => {
            console.log('user data added');
            res.status(200).json({ message: 'success' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})


router.get('/getbyid/:id', (req, res) => {

    Model.findById(req.params.id)
        .then(data => {
            console.log('reviews fetched by id');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getbyuser/:id', (req, res) => {

    Model.find({ user: req.params.id })
        .then(data => {
            console.log('reviews fetched by user');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.delete('/delete/:id', (req, res) => {

    Model.findByIdAndDelete(req.params.id)
        .then(data => {
            console.log('reviews deleted ');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.put('/update/:id', (req, res) => {

    Model.findByIdAndUpdate(req.params.id, req.body)
        .then(data => {
            console.log('reviews updated ');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.put('/pushupdate/:id', (req, res) => {

    Model.findByIdAndUpdate(req.params.id, { $push: req.body })
        .then(data => {
            console.log('reviews updated ');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get('/getall', (req, res) => {

    Model.find({})
        .then(data => {
            console.log('reviews fetched');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

module.exports = router;