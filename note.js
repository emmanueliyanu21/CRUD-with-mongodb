const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/animals', { useMongoClient: true })
mongoose.connection
    .once('open', () => console.log('CONNECTED'))
    .on('error', (err) => {
        console.log(`could not connect`, err)
    });

// download mongodb
//install mongoose-compass
//npm install mongodb
//npm install mongoose 
// const MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
//     if (err) throw err;
//     console.log('connected')
//     // db.collection('mammals').find().toArray(function (err, result) {
//     //     if (err) throw err;
//     //     console.log(result);
//     // })
// })