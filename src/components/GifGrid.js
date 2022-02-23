import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {


    // const [imgs, setImgs] = useState([])

   

    const {data:images, loading} = useFetchGifs(category);
    
    return (
      <>
          <h3>{category}</h3>
          {loading && <p>Cargando...</p>}
          <div className='card-grid'>
              {
                  images.map((img) => (
                    <GifGridItem 
                        key={img.id}  
                        img={img} />  
                  ))
              }
            </div>
      </>
  )
}

GifGrid.propTypes = {}

export default GifGrid