import {Request,Response} from 'express';

export const home = (req:Request,res:Response) =>{
    res.render('pages/page',{banner:{
        titulo:'todos os animais aqui',
        background:'allanimals.jpg'
    }
})

}

export const dogs = (req:Request,res:Response) =>{
    res.render('pages/caes',{banner:{
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

