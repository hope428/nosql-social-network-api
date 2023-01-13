const connection = require('../config/connection');
const { User } = require('../models');

connection.on('error', (err) => err)

connection.once('open', async() => {
    await User.deleteMany({});

    await User.collection.insertOne({
        username: 'Sheldon',
        email: 'sheldon@bark.com'
    })

    
  console.info('Seeding complete! 🌱');
  process.exit(0)
})