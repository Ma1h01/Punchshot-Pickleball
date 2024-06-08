import mongoose, { SchemaType, SchemaTypes } from "mongoose";

const Schema = mongoose.Schema;

const leagueSchema = new Schema({
  LeagueName: {
    type: String,
    required: true,
    unique: true,
  },
  LeagueOwner: {
    type: String,
    required: true,
  },
  LeagueOwnerEmail: {
    type: String,
    required: true,
  },
  Teams: [
    {
      TeamName: {
        type: String,
        required: true,
      },
      TeamCaptain: {
        type: String, // SchemaTypes.ObjectId when users functionality complete
        required: true,
      },
      CaptainEmail: {
        type: String,
        required: true,
      },
      TeamMembers: [
        String, // SchemaTypes.ObjectId when users functionality complete
      ],
      PotentialTeamMembers: [
        String, // SchemaTypes.ObjectId when users functionality complete
      ],
      HomeCourtAddress: {
        type: String,
        required: true,
      },
      TeamFee: Number,
    },
  ],
  StartDate: {
    type: Date,
    required: true,
  },
  EndDate: {
    type: Date,
    required: true,
  },
  TeamRegistrationDate: {
    type: Date,
    required: true,
  },
  Status: {
    type: String,
    enum: ["PENDING", "ONGOING", "COMPLETED"],
  },
  SkillLevel: {
    type: String,
    enum: ["Novice", "Intermediate", "Advanced"],
    required: true,
  },
  Division: {
    type: String,
    enum: ["Male", "Female", "Mixed"],
    required: true,
  },
  Latitude: {
    type: String,
    required: true,
  },
  Longitude: {
    type: String,
    required: true,
  },
  Radius: {
    type: Number,
    required: true,
  },
  MatchDay: {
    type: String,
    required: true,
  },
  MatchTime: {
    type: String,
    required: true,
  },

  Matches: [Object],

  Private: {
    type: Boolean,
    required: false,
  },
  AccessCode: {
    type: String,
    required: true,
  },
});

export default mongoose.model("League", leagueSchema);
