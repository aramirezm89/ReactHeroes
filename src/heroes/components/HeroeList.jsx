import { useState,useEffect } from "react";
import { getHeroesByPublisher, getHeroesBySuperHero } from "../../api/heroes/heroesApi";
import HeroeItem from "./HeroeItem";
import { LoadingComponent } from "./LoadingComponent";
import { SearchNoResults } from "./SearchNoResults";


export const HeroeList = ({ publisher, superhero }) => {
  
  const [heroeList, setHeroeList] = useState([]);
 const [reload,setReload] = useState(false)

 const onReload = (valor) =>{
 setReload(valor);
 }
  useEffect(() => {
    try {
      publisher &&
        getHeroesByPublisher(publisher).then(({ data }) =>{
           setHeroeList(data.heroes);
           setReload(!reload)
        });

      superhero &&
        getHeroesBySuperHero(superhero).then(({ data }) => {
          console.log(superhero)
          setHeroeList(data.heroes);
         
        });
    } catch (error) {
      console.log(error);
      throw new Error("Error al realizar petición");
    }
  }, [publisher, superhero,reload]);

  return (
    <div>
      {heroeList.length === 0 && publisher && <LoadingComponent />}
      {heroeList.length === 0 && superhero && (
        <SearchNoResults termino={superhero} />
      )}
      <div className="d-flex-nowrap row  justify-content-evenly">
        {heroeList.map((hero) => (
          <HeroeItem key={hero.superhero} hero={hero} onReload={onReload} />
        ))}
      </div>
    </div>
  );
};
