const mongoose = require('mongoose');

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.DATABASE_URL);
        console.log('Database connected');
    } catch (e) {
        console.log(e);
    }
}

module.exports = dbConnect;