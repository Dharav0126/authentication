const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/hotels', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch(err => {
//     console.error('Failed to connect to MongoDB', err);
// });
mongoose.connect('mongodb+srv://dharav0126:dharav0126@cluster0.tdmdxk9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

module.exports = mongoose.connection;
