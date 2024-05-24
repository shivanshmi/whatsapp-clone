import mongoose from "mongoose";

const Connection = async () => {
  const URL =
    "mongodb://shivansh:mishra123@ac-g2jx9tn-shard-00-00.t7aoecb.mongodb.net:27017,ac-g2jx9tn-shard-00-01.t7aoecb.mongodb.net:27017,ac-g2jx9tn-shard-00-02.t7aoecb.mongodb.net:27017/?ssl=true&replicaSet=atlas-okvw1o-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Whatsapp-clone";
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to Database", error.message);
  }
};
export default Connection;
