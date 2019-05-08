const mongoose = require('mongoose');

const Docente = mongoose.model('docentes', {
    profesor: String
});

const Ausencias = mongoose.model('ausencias', {
    fecha: String,
    hora: Number,
    nombre: String,
    curso: String
});

module.exports = {
    Docente,
    Ausencias
};