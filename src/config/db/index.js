const mongoose = require('mongoose');

async function connect(){

    try {
        
        await mongoose.connect('mongodb://localhost:27017/education_dev');
        console.log('Okay')
    } catch (error) {
        console.log('deo ket noi duoc voi db')
    }

}

module.exports = {connect}
