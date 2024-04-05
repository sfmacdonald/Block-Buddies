const db = require('../config/connection');
const { User, Set } = require('../models');
const userSeeds = require('./userSeeds.json');
const setSeeds = require('./setSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Set', 'sets');

    await cleanDB('User', 'users');

    await User.create(userSeeds);

    for (let i = 0; i < setSeeds.length; i++) {
      const { _id, setAuthor } = await Set.create(setSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: setAuthor },
        {
          $addToSet: {
            sets: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
