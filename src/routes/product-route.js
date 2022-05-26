'use strict'

const express = require('express');
const router = express.Router();

// http codes responses
// 200 - ok
// 201 - created
// 400 - bad response
// 401 - not authenticated
// 403 - access denied
// 500 - internal server error

router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

router.put('/:id', (req, res, next) => {
    let id = req.params.id; // pegando parametro da URL método PUT
    res.status(200).send({
        id: id,
        item: req.body
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});

module.exports = router;