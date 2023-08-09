module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert(
      'Projects',
      [
        {
          id: 1,
          name: 'Trybe Futebol Clube',
          image: 'https://portifolio-k6gn.onrender.com/images/trybe-futebol-clube.gif',
          url: 'https://tfc-vercel-mu.vercel.app/leaderboard',
          type: 'back-end',
          github: 'https://github.com/iskandarzero/trybe-futebol-clube',
        },
        {
          id: 2,
          name: 'Delivery App',
          image: 'https://portifolio-k6gn.onrender.com/images/delivery-app.gif',
          url: 'https://delivery-app-vercel.vercel.app/login',
          type: 'full stack',
          github: 'https://github.com/iskandarzero/delivery-app',
        },
        {
          id: 3,
          name: "Recipes App",
          image: 'https://portifolio-k6gn.onrender.com/images/recipes-app.gif',
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
