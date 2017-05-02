import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
 	userid: { type: 'Number', required: true }
});



export default mongoose.model('User', userSchema);