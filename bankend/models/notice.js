// models/Notice.js

const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['parking', 'covid', 'maintenance'],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const NoticeModel = mongoose.model("notice",noticeSchema);

exports.module = {
  NoticeModel
}
