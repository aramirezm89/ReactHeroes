import { useState,useEffect } from "react";
import { getHeroesByPublisher } from "../../api/heroes/heroesApi";
import HeroeItem from "./HeroeItem";
import { LoadingComponent } from "./LoadingComponent";
export const HeroeList = ({publisher}) => {

    const [heroeList, setHeroeList] = useState([]);

    useEffect(() => {
      getHeroesByPublisher(publisher).then(({data}) => setHeroeList(data.heroes));

    }, [heroeList]);
  
  return (
    <div>
     {heroeList.length ===0 && <LoadingComponent/>}
      <div className="d-flex-nowrap row col-12 justify-content-evenly">
        {heroeList.map((hero) => (
          <HeroeItem hero={hero} />
        ))}
      </div>
    </div>
  );
}
