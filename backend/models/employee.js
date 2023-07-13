const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  birthDate: { type: String, required: false },
  startDate: { type: String, required: false },
  street: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  zipCode: { type: Number, required: false },
  department: { type: String, required: false },
});

module.exports = mongoose.model('employee', employeeSchema);