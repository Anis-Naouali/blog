import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URL);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

// import mongoose from "mongoose";
// export async function connect() {
//     if (mongoose.connection.readyState >= 1) {
//       return mongoose.connection.asPromise();
//     }
//   return  await mongoose.connect(process.env.MONGODB_URL);
// }
