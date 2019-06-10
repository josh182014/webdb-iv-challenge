module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipe_new.db3'
    },
    useNullAsDefault: true,
  },
};
