import { useState,useEffect } from "react";
import { getHeroesByPublisher } from "../../api/heroes/heroesApi";
import HeroeItem from "./HeroeItem";
export const HeroeList = ({publisher}) => {

    const [heroeList, setHeroeList] = useState([]);

    useEffect(() => {
      getHeroesByPublisher(publisher).then(({data}) => setHeroeList(data.heroes));

    }, [heroeList]);
  
  return (
    <div>
      <div className="d-flex-nowrap row col-12 justify-content-evenly">
        {heroeList.map((hero) => (
          <HeroeItem hero={hero} />
        ))}
      </div>
    </div>
  );
}
