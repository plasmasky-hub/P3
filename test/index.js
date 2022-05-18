var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://PlasmaSky:sSUktlL0KUf1d5uG@bookinglet.78fqj.mongodb.net/Bookinglet?retryWrites=true&w=majority');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    // we're connected!
    // var kittySchema = mongoose.Schema({
    //     name: String
    // });

    // var Kitten = mongoose.model('Kitten', kittySchema);
    // var felyne = new Kitten({ name: 'Felyne' });
    // console.log(felyne.name); // 'Felyne'
    // felyne.speak();

    // 译者注：注意了， method 是给 document 用的
    // NOTE: methods must be added to the schema before compiling it with mongoose.model()
    // kittySchema.methods.speak = function () {
    //     var greeting = this.name
    //     ? "Meow name is " + this.name
    //     : "I don't have a name";
    //     console.log(greeting);
    // }

    // var Kitten = mongoose.model('Kitten', kittySchema);
    // var fluffy = new Kitten({ name: 'fluffy' });
    // fluffy.speak(); // "Meow name is fluffy"
    // felyne.speak();

    // fluffy.save(function (err, fluffy) {
    //     if (err) return console.error(err);
    //     // fluffy.speak();
    // });

    // Kitten.find(function (err, kittens) {
    //     if (err) return console.error(err);
    //     console.log('Kitten:');
    //     console.log(kittens);
    // })

    // var findSchema = mongoose.Schema({
    //     name : String
    // });
    // var newFinder = mongoose.model('Kitten', kittySchema);

    // newFinder.find(function (err, kittens) {
    //     if (err) return console.error(err);
    //     console.log('Finder:');
    //     console.log(kittens);
    // })


    let shopSchema = mongoose.Schema({
            id : String ,
            password: String,
            name : String,
            address:{
                country: String,
                state: String,
                city: String,
                street: String,
                number: String
                },
            tel: String,
            service:{
                shop:{
                    mon: Boolean,
                    tue: Boolean,
                    wed: Boolean
                }
            },
    
            stars:{
                user1: {
                    rate: Number
                },
                user2: {
                    rate: Number
                },
                user3: {
                    rate: Number
                }
            }
    });

    var newSchema = mongoose.Schema({
        name : String,
        address : String,
        tel : String,
        email : String,
        service : String
    })

    var shop = mongoose.model('Shop', newSchema);

    var coles = new shop({
        name : 'ColesRM',
        address : 'Rundle Mall',
        tel : '1234567',
        email : 'coles@gmail.com',
        service : 'shopping'
    })

    var mayer = new shop({
        name : 'MayerRM',
        address : 'Rundle Mall',
        tel : '7654311',
        email : 'mayer@gmail.com',
        service : 'shopping'
    })

    // mayer.save(function (err, mayer){
    //     if (err) console.error(err);
    // })

    // coles.save(function (err, coles) {
    //     if (err) console.error(err);
    // })

    shop.find(function (err, shops) {
        if (err) return console.error(err);
        console.log(shops);
    })

});
