import mongoose from "mongoose";

interface IConnection {
  isConnected?: number;
}

const connection: IConnection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URI!, {
    useNewUrlParser: true,
    useUnifedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
