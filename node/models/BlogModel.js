//importando conexión a la base de datos
import db from '../database/db.js';
//importando sequelize
import  DataType  from 'sequelize';

//defino el modelo y lo asigno a una variable
const BlogModel = db.define('blog', {
    title: {type: DataType.STRING},
    content: {type: DataType.STRING},
    // image: {type: DataType.STRING},
    // date: {type: DataType.DATE},
});

export default BlogModel