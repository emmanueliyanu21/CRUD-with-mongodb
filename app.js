const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;
    const object = new ObjectId();
    console.log(object);
    console.log('CONNECTED');

    // creating our database
    const db = client.db('animals');

    // inserting our databse
    // db.collection('mammals').insertOne({
    //     name: 'horse',
    //     leg: 4
    // }, (err, result) => {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log('inserted');
    // })

    db.collection('mammals').find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result)
    });

    // updating our database
    // db.collection('mammals').findOneAndUpdate({
    //     _id: newObjectId('...')
    // }, {
    //     $set: {name: 'updated'}
    // }).then(result =>{
    //         console.log(result)
    // }).catch(err => {
    //         console.log(err)
    //     });

    // deleting our database
    // db.collection('mammals').deleteMany({ name: 'Emmanuel Iyanu' });

    // db.collection('mammals').deleteOne({ name: 'Emmanuel Iyanu' });

    // db.collection('mammals').deleteAndFind({ name: 'Emmanuel Iyanu' });

    // db.collection('mammals').findOneAndDelete({
    //     _id: newObjectId('...')
    // }).then(result => {
    //     console.log(result);
    // });


})