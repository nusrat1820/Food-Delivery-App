
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://nusratborna:borna3308@cluster0.dlkboot.mongodb.net/gofood'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = mongoose.connection.db.collection("foodData2");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (ERR, catData) {
                    if (err) console.log(err);
                    else {
                        global.foodData2 = data;
                        global.foodCategory = catData;

                    }
                })

                // if(err) console.log(err);
                // else{
                //     global.foodData2 = data;

                // }
            })
        }

    });
}

module.exports = mongoDB;


