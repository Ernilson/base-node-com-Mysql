import Sequelize from "sequelize";

import db from "../db/dbConfig";

const User = db.define(
    'user',{
    id: { 
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
     },
    name:{ 
        type: Sequelize.STRING,
        allowNull: false,

     },
    email:{ 
        type: Sequelize.STRING,
        allowNull: false,
     },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    }

    },
    {}
);

export default User;