import mongoose from "mongoose";

/* One document per user — everything that used to live only in the
 * frontend's React state (done steps, checked documents, notification
 * preferences, activity feed, in-app notifications) now persists here. */
const progressSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    done: { type: [String], default: [] }, // completed PROCEDURE step ids
    checked: { type: [String], default: [] }, // checked-off DOCUMENTS ids
    profile: { type: mongoose.Schema.Types.Mixed, default: null }, // Smart Generator answers
    prefs: {
      email: { type: Boolean, default: true },
      sms: { type: Boolean, default: true },
      push: { type: Boolean, default: true },
      docUpdates: { type: Boolean, default: true },
      news: { type: Boolean, default: false },
    },
    activity: {
      type: [{ title: String, at: { type: Date, default: Date.now } }],
      default: [],
    },
    notifications: {
      type: [{ title: String, body: String, read: { type: Boolean, default: false }, at: { type: Date, default: Date.now } }],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Progress", progressSchema);
