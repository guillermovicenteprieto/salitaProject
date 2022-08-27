import {Sequelize} from 'sequelize';

const calendarioDB = new Sequelize('calendario', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default calendarioDB;
