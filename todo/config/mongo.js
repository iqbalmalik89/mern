const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo').then((response) => {
    console.log("Database is Connected");
}).catch((err) => {
    console.log(err);
});
