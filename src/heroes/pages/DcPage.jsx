import { Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { getHeroesByPublisher } from '../../api/heroes/heroesApi';
import { HeroeList } from '../components/HeroeList';
export const DCPage = () => {

  

  return (
    <>
      <h1>Dc Comics</h1>
      <Divider/>

      <div>
       <HeroeList publisher={'DC Comics'}/>
      </div>
    </>
  )
}
