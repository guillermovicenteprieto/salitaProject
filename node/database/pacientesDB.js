import {Sequelize} from 'sequelize';

const pacientesDB = new Sequelize('consultorio', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default pacientesDB;
