import {Request,Response} from 'express';
import { createMenuObjects } from '../helpers/createMenuObjects';
import {Pet} from '../models/Pet'


export const home = (req:Request,res:Response) =>{

    let list = Pet.getAll();

    res.render('pages/page',{
    menu:createMenuObjects('t'),
    banner:{
        titulo:'todos os animais aqui',
        background:'allanimals.jpg'
    },
    list
})

}

export const dogs = (req:Request,res:Response) =>{

    let list = Pet.retonarDoTipo('dog');

    res.render('pages/caes',{
        menu:createMenuObjects('d'),
        banner:{
        titulo:'todos os caes',
        background:'banner_dog.jpg'},
        list
})
    
}

export const cats = (req:Request,res:Response) =>{

    let list = Pet.retonarDoTipo('cat');

    res.render('pages/cats',{
        menu:createMenuObjects('c'),
        banner:{
        titulo:'todos os gatos',
        background:'banner_cat.jpg'},
        list
})

}


export const fish = (req:Request,res:Response) =>{

    let list = Pet.retonarDoTipo('fish');

    res.render('pages/fish',{
        menu:createMenuObjects('f'),
        banner:{
        titulo:'todos os peixes',
        background:'banner_fish.jpg'},
        list
})

}

