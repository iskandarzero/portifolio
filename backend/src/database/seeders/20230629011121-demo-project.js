module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(
      'Projects',
      [
        {
          id: 1,
          name: 'Trybe Futebol Clube',
          image: 'teste',
          url: 'https://tfc-vercel-mu.vercel.app/leaderboard',
          github: 'https://github.com/iskandarzero/trybe-futebol-clube',
          description: 'placeholder'
        },
        {
          id: 2,
          name: 'Delivery App',
          image: 'teste',
          url: 'https://delivery-app-vercel.vercel.app/login',
          github: 'https://github.com/iskandarzero/delivery-app',
          description: 'placeholder'
        },
      ],
    );
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Projects', null, {});
  },
};
