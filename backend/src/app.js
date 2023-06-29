const express = require('express');
const mongoose = require('mongoose');

const Employee = require('../models/employee');

const app = express();

mongoose.connect('<Add mongodb connection>',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json()); // access to req body

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.post('/api/employee', (req, res, next) => {
    delete req.body._id;
    const employee = new Employee({
      ...req.body
    });
    employee.save()
      .then(() => res.status(201).json({ message: 'Employee enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });

  app.put('/api/employees/:id', (req, res, next) => {
    Employee.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Employee modifié !'}))
      .catch(error => res.status(400).json({ error }));
  });

  app.delete('/api/employees/:id', (req, res, next) => {
    Employee.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Employee supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });

  /**
   * GET /api/stuff/{stuffId}
   * @summary Returns a stuff by ID 2
   * @pathParam {int64} stuffId - The stuff's ID
   * @response 200 - OK
  */
  app.get('/api/employees/:id', (req, res, next) => {
    Employee.findOne({ _id: req.params.id })
      .then(employee => res.status(200).json(employee))
      .catch(error => res.status(404).json({ error }));
  });

   /**
   * GET /api/stuff
   * @summary Returns all employees
   * @response 200 - OK
  */

  app.get('/api/employee', (req, res, next) => {
    Employee.find()
      .then(employees => res.status(200).json(employees))
      .catch(error => res.status(400).json({ error }));
  });

module.exports = app;