const bcrypt = require('bcrypt');

module.exports = {
  createSlug: schema => {
    schema.pre('save', function (str, next) {
      const str = this;
      const clean = str.replace(/[^a-zA-Z0-9 ]/g, '').toLowerCase();
      next();
    });
  },

  createIndexes: async (schema, indexes = []) => {
    try {
      if (!Array.isArray(indexes) || indexes.length === 0) {
        console.log('No indexes provided to create');
        return;
      }

      indexes.forEach(async element => {
        await schema.index(element);
      });

      // Create each index
      // for (const index of indexes) {
      //   await schema.index(index);
      // }
      console.log('Successfully created all indexes');
    } catch (error) {
      console.error('Error creating indexes:', error.message);
      throw error;
    }
  },
};
