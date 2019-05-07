const mongoose = require('mongoose');

const Docente = mongoose.model('Docente', {
    profesor: String
});

const Ausencia = mongoose.model('Ausencia', {
    fecha: Date,
    hora: String,
    nombre: String,
    curso: String
});

module.exports = {
    Docente,
    Ausencia
};