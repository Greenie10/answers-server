export default questionSchema = new Schema({
  Question: String,
  Location: String,
  Zone: String,
  Date: String,
  Answers: [{ Gardener: String, AnAnswer: String }]
});
