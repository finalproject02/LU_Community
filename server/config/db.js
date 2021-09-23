import mongoose from "mongoose";

const DatabaseConnection = async () => {
    try {
       await mongoose.connect(process.env.MONGOURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });

        console.log('Database connected:')
    } catch (error) {
        console.log(error.message)
    }

}

export default DatabaseConnection;