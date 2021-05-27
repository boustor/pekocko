require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const saucesRoutes = require('./routes/sauces');


app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));


// connexion à la base de données
mongoose.connect('mongodb+srv://'+process.env.BASE_USER+':'+process.env.BASE_PASSWD+'@'+process.env.CLUSTER+'.mongodb.net/'+process.env.BASE+'?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  app.use(express.json());
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use('/api/auth', authRoutes);
  app.use('/api/sauces', saucesRoutes);
  

  module.exports = app;