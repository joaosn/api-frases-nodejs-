import { Model,DataTypes } from "sequelize";
import { sequelize } from "../database/pg";

try{
   sequelize.authenticate();
}catch(err){
   console.log(err);
}
export interface FrasesInstance extends Model {
  id: number,
  author: string,
  text:string,
}

export const Frases = sequelize.define<FrasesInstance>('frases',{
   
   id:{
       primaryKey:true,
       autoIncrement:true,
       type:DataTypes.INTEGER
   },
   author:{
      type:DataTypes.STRING
   },
   text:{
    type:DataTypes.STRING
   }
},{
    tableName:'frases',
    timestamps:false
});