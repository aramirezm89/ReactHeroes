

export const imgRoute = (ruta) => {

  const heroImgImageIds = [
    "dc-batman","dc-superman","dc-flash","dc-green","dc-arrow","dc-wonder","dc-martian",
"dc-robin","dc-blue","dc-black","marvel-spider","marvel-captain","marvel-iron","marvel-thor","marvel-hulk",
"marvel-wolverine","marvel-daredevil","marvel-hawkeye","marvel-cyclops","marvel-silver"

  ]

  if (ruta === undefined || ruta ===null || ruta.length === 0) {
    return "https://www.pngitem.com/pimgs/m/499-4992374_sin-imagen-de-perfil-hd-png-download.png";
  }

  if (ruta.includes("http")) {
    return ruta;
  } 

  const validate = heroImgImageIds.includes(ruta)
  if(validate){
    return  require(`../../assets/heroes/${ruta}.jpg`);
  }




  return 'https://www.pngitem.com/pimgs/m/499-4992374_sin-imagen-de-perfil-hd-png-download.png"';

};
