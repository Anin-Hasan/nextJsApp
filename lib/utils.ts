import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const mongo = process.env.MONGO as string;

const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const connection: { isConnected?: boolean } = {};

// export const connectToDb = mongoose
//   .connect(mongo, options)
//   .then((res) => {
//     if (res) {
//       console.log(`Database connection succeffully to mongo`);
//     }
//   })
//   .catch((err) => {
//     console.log(err);
//   });

export const connectToDb = async () => {
  console.log("connectToDb called");
  try {
    if (connection.isConnected) {
      console.log("Using Existing Connection.");
      return;
    }
    if (!mongo) {
      throw new Error("MONGO environment variable is not defined");
    }
    const db = await mongoose.connect(mongo, options);
    connection.isConnected = db.connections[0].readyState === 1;
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting to db", error);
    throw new Error(String(error));
  }
};
