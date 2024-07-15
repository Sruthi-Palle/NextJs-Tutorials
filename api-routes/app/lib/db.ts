import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }
  if (connectionState === 2) {
    console.log("connecting ...");
    return;
  }
  // if above conditions fail, then we need to connect to our database
  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "next14restapi",
      bufferCommands: true,
    });
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};
//we need to access this connect funtion in api routefiles
export default connect;
