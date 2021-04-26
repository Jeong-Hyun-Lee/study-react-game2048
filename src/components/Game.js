import React, { useState } from 'react'
import { MAX_POS } from '../constant'
import times from 'lodash/times'
import { getInitTileListt } from '../util/tile'
import useMoveTile from '../hook/useMoveTile'
import Tile from './Tile'

export default function Game({ setScore }) {
  const [ tileList, setTileList ] = useState(getInitTileListt)
  // up, down, left, right
  useMoveTile({ tileList, setTileList, setScore })
  return (
    <div className="game-container">
      <div className="grid-container">
        {times(MAX_POS, index => (
          <div 
            key={index} 
            className="grid-row"
          >
            {times(MAX_POS, index2 => (
              <div 
                key={index2} 
                className="grid-cell"
              ></div>
            ))}
        </div>
        ))}
      </div>

      <div className="tile-container">
        {tileList.map(item => (
          <Tile key={item.id} {...item}/>
        ))}
      </div>
    </div>
  )
}
