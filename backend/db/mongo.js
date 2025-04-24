const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/herve_chat', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connecté'))
.catch((err) => console.error('Erreur MongoDB', err));
