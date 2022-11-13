import { Divider } from '@mui/material';
import React from 'react';

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
