const mongoose = require('mongoose');

mongoose.set('strictQuery', true)

mongoose.connect(process.env.DATABASE_URL)