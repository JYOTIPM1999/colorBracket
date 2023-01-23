const { mongoose } = require("mongoose");

const recipeSchema = mongoose.Schema({
  name: { type: String, require: true },
  desc: { type: String, require: true },
  image_url: { type: String, require: true },
});

const RecipeModel = mongoose.model("recipe", recipeSchema);
module.exports = RecipeModel;
