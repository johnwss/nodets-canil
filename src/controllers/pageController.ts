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
    res.render('pages/cats',{
        menu:createMenuObjects('c'),banner:{
        titulo:'todos os gatos',
        background:'banner_cat.jpg'
    }
})
}


export const fish = (req:Request,res:Response) =>{
    res.render('pages/fish',{
        menu:createMenuObjects('f'),banner:{
        titulo:'todos os peixes',
        background:'banner_fish.jpg'
    }
})
}

