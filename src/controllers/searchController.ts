import {Request,Response} from 'express';
import { Pet } from '../models/Pet';
import { createMenuObjects } from '../helpers/createMenuObjects';



export const busca = (req:Request,res:Response) =>{
let query:string = req.query.q as string;

if(!query){
    res.redirect('/');
    return
}

let list = Pet.retornarDeNome(query);

    res.render('pages/page',{menu:createMenuObjects(''),
    list,
    query}
    );
}