const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const carSchema = new mongoose.Schema({
  name: { type: 'String', required: true },
  year: { type: 'Number'}
  
  
});

mongoose.model('Cars', carSchema);