

export const imgRoute =  (ruta) =>{
  
if(ruta.includes('http')){
    return ruta;
}else{
    return require(`/assets/heroes/${ruta}.jpg`);
}
}