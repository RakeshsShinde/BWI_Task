import mongoose from "mongoose";

async function connectToDB(mongourl) {
    try {
        await mongoose.connect(mongourl, {
            dbName: 'bwi_task_db'
        })
        console.log("database connected successfully !");
    } catch (err) {
        console.log(err);
    }
}


export default connectToDB;