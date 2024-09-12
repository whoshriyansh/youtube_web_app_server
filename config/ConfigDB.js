import mongoose from "mongoose";

const ConnectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`MONGO DB is successfully Connected`);
    })
    .catch((err) => {
      console.log(`Error while connecting to the Database : ${err}`);
    });
};

export default ConnectDB;
