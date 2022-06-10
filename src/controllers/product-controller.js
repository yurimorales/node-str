'use strict';

// HTTP CODES RESPONSES
// 200 - ok
// 201 - created
// 400 - bad response
// 401 - not authenticated
// 403 - access denied
// 500 - internal server error

exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};

exports.put = (req, res, next) => {
    let id = req.params.id; // pegando parametro da URL método PUT
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};
