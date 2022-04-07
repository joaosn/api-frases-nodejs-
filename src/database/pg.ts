import{ Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
    process.env.PG_DB    as string,
    process.env.PG_USER  as string,
    process.env.PG_PASS  as string,
    {
        dialect:'mysql',
        port:+(process.env.PG_PORT as string),
        host: 'localhost'
    }
);

sequelize.authenticate().then(() => {
        console.log('Connection has been established successfully.');
    }).catch((err) => {
        console.log('Unable to connect to the database:', err);
    });
