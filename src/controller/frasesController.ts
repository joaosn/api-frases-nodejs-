import {Request ,Response} from 'express';
import { Frases } from '../models/Frases';
import sequelize from 'sequelize';

export const ping = (req:Request, res:Response) => {
    res.json({pong: true});
}

export const radom = (req:Request, res:Response) => {
   let n:number = Math.floor( Math.random() * 100);
   res.json({number: n});
};

export const nome = (req:Request, res:Response) => {
    let nome:string = req.params.nome;
    res.json({nome});
}

export const criarFrase = async (req:Request, res:Response) => {
   let { author,text } = req.body;
   let novaFrase = await Frases.create({author,text});
   res.status(201).json({id:novaFrase,author,text});
}

export const listFrases = async (req:Request, res:Response) => {
    let parm = req.body;
    let result = await Frases.findAll();
    res.status(201).json({result});
}

export const getfrase = async (req:Request, res:Response) => {
    let id = req.params.id;
    let frase = await Frases.findByPk(id);
    let result = (frase)?frase:'Frase não encontrada';
    res.status(201).json({result});
}

export const editfrase = async (req:Request, res:Response) => {
    let result;
    let { id } = req.params;
    let { author,text } = req.body;
    let frase = await Frases.findByPk(id);
    if(frase){
        frase.author = author;
        frase.text = text;
        await frase.save();
        result = frase;
    }else{
        result = 'Frase não encontrada';
    }

    res.status(201).json({result});
}

export const remove = async (req:Request, res:Response) => {
    let result;
    let { id } = req.params;
    let frase = await Frases.findByPk(id);
    if(frase){
        await frase.destroy();
        result = 'Frase Removida!!';
    }else{
        result = 'Frase não encontrada';
    }
    res.status(201).json({result});
}

export const fraseRadon = async (req:Request, res:Response) => {

    let result = await Frases.findOne({
        order:[
            sequelize.fn('RAND')
        ]
    })
    res.status(201).json({result});
}