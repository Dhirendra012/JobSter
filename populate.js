require('dotenv').config();

const mockData = require('./mock_data.json');
const job = require('./models/Job');
const connectDB = require('./db/connect');
const Job = require('./models/Job');

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        await job.create(mockData);
        console.log('Success ?');
        process.exit(0);
    }
    catch ( error )
    {
        console.log(error);
        process.exit(1);
    }
}

start();