
import express from "express";
import Recipe from "../recipe.js";


const router = express.Router();




router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  console.log("Received data:", req.body); // Log the received data
  const { name, description, difficulty, ingredients, steps } = req.body;

  const recipe = new Recipe({
    name,
    description,
    difficulty,
    ingredients,
    steps
  });

  try {
    const savedRecipe = await recipe.save();
    res.status(201).json(savedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    if (req.body.name !== undefined) {
        recipe.name = req.body.name;
    }
    if (req.body.description !== undefined) {
        recipe.description = req.body.description;
    }
    if (req.body.difficulty !== undefined) {
        recipe.difficulty = req.body.difficulty;
    }
    if (req.body.ingredients !== undefined) {
        recipe.ingredients = req.body.ingredients;
    }
    if (req.body.steps !== undefined) {
        recipe.steps = req.body.steps;
    }
    

    const updatedRecipe = await recipe.save();
    res.json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    await Recipe.deleteOne({ _id: req.params.id });
    res.json({ message: 'Recipe deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
