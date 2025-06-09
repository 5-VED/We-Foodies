const bcrypt = require('bcrypt');

module.exports = {
  applyHooks: schema => {
    schema.pre('save', function (next) {
      const user = this;
      if (!user.isModified('password')) return next();
      user.password = bcrypt.hashSync(user.password, 10);
      next();
    });
  },

  createIndexes: async (schema, indexes = []) => {
    try {
      if (!Array.isArray(indexes) || indexes.length === 0) {
        console.log('No indexes provided to create');
        return;
      }

      // Create each index
      for (const index of indexes) {
        await schema.index(index);
      }

      console.log('Successfully created all indexes');
    } catch (error) {
      console.error('Error creating indexes:', error.message);
      throw error; // Re-throw the error to handle it in the calling code
    }
  },
};
