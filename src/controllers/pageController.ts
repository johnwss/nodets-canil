import {Request,Response} from 'express';
import { createMenuObjects } from '../helpers/createMenuObjects';


export const home = (req:Request,res:Response) =>{
    res.render('pages/page',{
    menu:createMenuObjects('t'),
    banner:{
        titulo:'todos os animais aqui',
        background:'allanimals.jpg'
    }
})

}

export const dogs = (req:Request,res:Response) =>{
    res.render('pages/caes',{
        menu:createMenuObjects('d'),banner:{
        titulo:'todos os caes',
        background:'banner_dog.jpg'
    }
})
}

export const cats = (req:Request,res:Response) =>{
    res.send('pagina cats')
}

export const fishs = (req:Request,res:Response) =>{
    res.send('pagina peixes')
}

