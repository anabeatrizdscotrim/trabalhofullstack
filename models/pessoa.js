const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');

const Pessoa = sequelize.define('Pessoa', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false, 
  tableName: 'Pessoas'
});

module.exports = Pessoa;
