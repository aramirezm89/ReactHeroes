import React, { useState } from 'react'
import { HeroeList } from '../components/HeroeList'

export const SearchPage = () => {

  const [hero,setHero]=useState("")

  const handleOnChange = ({target}) =>{
    const value = target.value;
    setHero(value)
  }


  return (
    <>
      <div className="container-fluid  justify-content-center">
        <h1>Buscar héroe por nombre</h1>
        <hr />

        <div className="col mb-2">
          <input
            className="form-control"
            placeholder="Ingresa el nombre del superheroe"
            onChange={handleOnChange}
          />
        </div>

        <div className="  justify-content-center">
          <HeroeList superhero={hero} />
        </div>
      </div>
    </>
  );
}
