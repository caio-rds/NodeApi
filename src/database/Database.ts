import mongoose from 'mongoose';

const mongo_uri = process.env.MONGO_URL;
const options = { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFiendAndModify: false
};

export default function connectToMongoDB(): void {
    if (mongo_uri) {
        mongoose.connect(mongo_uri, options, () => console.log('Connected to MongoDB'))
    } else {
        console.log('Connected to MongoDB')
    }

}
