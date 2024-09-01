const { Sequelize } = require('sequelize');
const config = require('../config/database'); 

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  define: {
    timestamps: config.define.timestamps,
    underscored: config.define.underscored
  }
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
})();

module.exports = sequelize;
