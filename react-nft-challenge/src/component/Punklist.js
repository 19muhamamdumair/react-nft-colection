import React from 'react';
import './Punklist.css'
import CollectionCard from './CollectionCard';
/*getting data from open sea
store into punkList data variable
for every single punk it build a collectioncard
component*/
const Punklist = ({punkListData,setSelectedPunk}) => {
  return (
  <div className='punkList'>
      {punkListData.sort((a, b) => a.itemM - b.itemM).map(punk=>(
          <div onClick={()=>setSelectedPunk(punk.token_id)}>

              <CollectionCard
              key={punk.token_id}
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_preview_url}
              />
            </div>
      ))}
  </div>
    )
};

export default Punklist;
