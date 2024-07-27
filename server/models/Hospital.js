const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema(
  {
    hospitalName: { type: String, required: true },
    hospitalLocation: { type: String, required: true },
    hospitalContactNumber: { type: String, required: true },
    hospitalEmail: { type: String, required: true},
    pincode: { type: String },
    organType: { type: String },
    organTimeWindow: { type: String },
    organDescription: { type: String },
    organStatus: { type: String },
    organCategory: { type: String },
    organUnitsAvailable: { type: Number },
    organDonors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrganDonor' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hospital", hospitalSchema);
