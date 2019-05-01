const express = require('express');
const { Docente, Ausencias } = require('./models');

const router = express.Router();

// ver todos los profesores
router.get('/docentes', (req, res) => {
    Docente.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// ver todas las ausencias
router.get('/ausencias', (req, res) => {
    Ausencias.find({}, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// ver un profesor
router.get('/docentes/:id', (req, res) => {
    Docente.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

/*
router.get('/docentes/:nombre', (req, res) => {
    Docente.findOne({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});
*/

// ver una ausencia
router.get('/ausencias/:id', (req, res) => {
    Ausencias.findOne({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

/*
router.get('/ausencias/:fecha/:hora', (req, res) => {
    Ausencias.findOne({ fecha: req.params.fecha, hora: req.params.hora }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});
*/

// ---------------------------------------------------------------
// Comentado porque no se va a usar (COMENTAR DESPUES ESTE BLOQUE)
// ---------------------------------------------------------------



// eliminar un profesor
router.delete('/docentes/:id', (req, res) => {
    Docente.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

/*
router.delete('/docentes/:nombre', (req, res) => {
    Docente.findOneAndRemove({ nombre: req.params.nombre }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});
*/

// eliminar una ausencia
router.delete('/ausencias/:id', (req, res) => {
    Ausencias.findOneAndRemove({ _id: req.params.id }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

/*
router.delete('/ausencias/:fecha/:hora', (req, res) => {
    Ausencias.findOneAndRemove({ fecha: req.params.fecha, hora: req.params.hora }, (err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});
*/

// actualizar un profesor
router.put('/docentes/:id', (req, res) => {
    Docente.findOneAndUpdate({ _id: req.params.id },
        { $set: { nombre: req.body.nombre
                } 
            },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
});

/*
router.put('/docentes/:nombre', (req, res) => {
    Docente.findOneAndUpdate({ nombre: req.params.nombre },
        { $set: { nombre: req.body.nombre
                } 
            },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
});
*/

// actualizar una ausencia
router.put('/ausencias/:id', (req, res) => {
    Ausencias.findOneAndUpdate({ _id: req.params.id },
        { $set: { fecha: req.body.fecha,
                  hora: req.body.hora,
                  nombre: req.body.nombre,
                  curso: req.body.curso
                } 
            },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
});

/*
router.put('/ausencias/:fecha/:hora', (req, res) => {
    Ausencias.findOneAndUpdate({ hora: req.params.hora },
        { $set: { fecha: req.body.fecha//,
                  //hora: req.body.hora,
                  //nombre: req.body.nombre,
                  //curso: req.body.curso
                } 
            },
        (err, data) => {
            if (err) res.json({ error: err });
            else res.json(data);
        });
});
*/

// insertar un profesor
router.post('/docentes', (req, res) => {
    const docente = new Docente({
        nombre: req.body.nombre
    });
    docente.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});

// insertar una ausencia
router.post('/ausencias', (req, res) => {
    const ausencias = new Ausencias({
        fecha: req.body.fecha,
        hora: req.body.hora,
        nombre: req.body.nombre,
        curso: req.body.curso
    });
    ausencias.save((err, data) => {
        if (err) res.json({ error: err });
        else res.json(data);
    });
});



module.exports = router;