const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    enum: ['Cardiologist', 'Dermatologist', 'Pediatrician', 'Psychiatrist'],
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // Set a default value if needed
    required: true,
  },
  slots: {
    type: Number,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
});

const AppointmentModel = mongoose.model('Appointment', appointmentSchema);

module.exports = AppointmentModel;
