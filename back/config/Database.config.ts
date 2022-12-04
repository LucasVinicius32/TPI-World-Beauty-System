import { Sequelize } from "sequelize";

const db = new Sequelize('gerson', 'root', 'admin',{
    host: 'localhost',
    dialect:'mysql'
});

export default db;