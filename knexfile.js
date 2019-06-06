module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipe.db3'
    },
    useNullAsDefault: true,
  },
};
