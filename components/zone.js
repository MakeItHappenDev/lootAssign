import React from 'react'

import Boss from './boss'

export default (props) => {
  return(
    <article>
      <h1>{props.name}</h1>
      {props.bosses.map(b => <Boss key={`bossFilter-${b.name}`}{...b}/>)}
    </article>
  )
}