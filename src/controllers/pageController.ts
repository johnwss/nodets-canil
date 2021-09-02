import {Request,Response} from 'express';

export const home = (req:Request,res:Response) =>{
    res.render('pages/page')
}

export const dogs = (req:Request,res:Response) =>{
    res.send('pagina caes')
}

export const cats = (req:Request,res:Response) =>{
    res.send('pagina cats')
}

export const fishs = (req:Request,res:Response) =>{
    res.send('pagina peixes')
}

