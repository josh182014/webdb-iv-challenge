const express = require('express')

const recipeRouter = require('./recipes/recipe_router')

const server = express();
server.use(express.json());

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);

server.get('/', (req, res) => {
    res.status(200).json("Hello, World.")
})
server.use('/api/recipes', recipeRouter);