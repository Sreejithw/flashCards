import mongoose from "mongoose";


const Schema = mongoose.Schema;
//const ObjectId = mongoose.Types.ObjectId;

const IndexDeckSchema = new Schema({
  title: String,
});

const IndexDeckModel = mongoose.model('IndexDeck', IndexDeckSchema);

export default IndexDeckModel; 