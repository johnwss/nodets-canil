type MenuOptions = ''|'t'|'d'|'c'|'f';

export const createMenuObjects = (activeMenu:MenuOptions) =>{
let objetoRetornado = {
t:false,
d:false,
c:false,
f:false
};

if(activeMenu != ''){
    objetoRetornado[activeMenu] = true;
};

return objetoRetornado

}