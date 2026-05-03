import { match } from "assert";
import mongoose, { Schema } from "mongoose";
import { type } from "os";

const contactSchema = new Schema({
    firstname: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [60, 'Name cannot exceed 60 characters']
    },
    lastname: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [60, 'Name cannot exceed 60 characters']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
    },
    phone:{
      type: String,
      match: [/^\+[1-9]\d{6, 14}$/, 'Please fill a valid E.164 phone number'],
      default: null
    },
    subject: {
      type: String,
      required: true,
      enum: ['Select a subject...', 'Freelance Project', 'Full-time Opportunity', 'Collaboration', 'General Enquiry'],
      default: 'Select a subject...'
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      minlength: [10, 'Message must be at least 10 characters'],
      maxlength: [2000, 'Message cannot exceed 2000 characters']
    },
    ip: {
      type: String,
      default: null
    }
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;