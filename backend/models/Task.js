import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: Date,
  assignedTo: String,
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Done'],
    default: 'Pending',
  },
  createdBy: String,
});

export default mongoose.model('Task', TaskSchema);
