'use strict';

module.exports = {
  up: async (queryInterface) => {
    const classTypes = [
      {
        name: 'Yoga 101',
        description: 'A class that focuses on breaking down postures, emphasising form and alignment, providing options for every level of practitioners looking to refine your fundamental technique and take things back to basics.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Yoga Essentials',
        description: 'This is the ultimate feel good flow that focuses on form and alignment. This class will provide you with the opportunity to refine your fundamental technique; a great option for beginners looking to take your practice to the next level.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Yoga Sculpt',
        description: 'SCULPT classes incorporate weights and bands in intervals to take your total body burn to the next level. Flow through repeated sequences of yoga poses as you match music to targeted movement and breath, while increasing stamina and strength.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Barre 101',
        description: 'This class is your perfect barre playground. Expect usage of props in this class. Expect lots of big smiles and big burns. Expect a seamless class filled with fun transitions. Designed to serve barre practitioners of all levels.',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Barre Burn & Stretch',
        description: 'Our favourite half and half class. We start off with power class to get the barre burn and sweat going and finish off with a yummy stretch session to leave you feeling balanced.',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert("classes", classTypes);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("classes", null, {});
  },
};