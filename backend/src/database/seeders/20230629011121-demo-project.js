module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(
      'Projects',
      [
        {
          id: 1,
          name: 'Trybe Futebol Clube',
          image: 'http://localhost:3001/images/trybe-futebol-clube.gif',
          url: 'https://tfc-vercel-mu.vercel.app/leaderboard',
          type: 'back-end',
          github: 'https://github.com/iskandarzero/trybe-futebol-clube',
        },
        {
          id: 2,
          name: 'Delivery App',
          image: 'http://localhost:3001/images/delivery-app.gif',
          url: 'https://delivery-app-vercel.vercel.app/login',
          type: 'full stack',
          github: 'https://github.com/iskandarzero/delivery-app',
        },
        {
          id: 3,
          name: "Recipes App",
          image: 'http://localhost:3001/images/recipes-app.gif',
          url: 'https://recipes-app-ochre-mu.vercel.app/',
          type: 'front-end',
          github: 'https://github.com/iskandarzero/recipes-app',
        },
      ],
    );
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Projects', null, {});
  },
};
