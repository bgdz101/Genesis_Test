require('dotenv').config();
const DATABASE = process.env.DATABASE;

const config = {
  mongodb: {

    url: DATABASE,
    databaseName: "test",

  },

  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
  useFileHash: false,
  moduleSystem: 'commonjs',
};

module.exports = config;
