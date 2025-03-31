
import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true
  },
  ingredients: [{
    type: String
  }],
  steps: [{
    type: String
  }]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
