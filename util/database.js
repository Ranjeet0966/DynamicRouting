const mysql = require('mysql2');

const sequelize =  new Sequelize('node-complete', 'root', 'nodecomplete',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;