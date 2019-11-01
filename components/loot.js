import React from 'react'

import Char from './char'

export default (props) => {

  const basePool = props.roles.map(r => r.chars).reduce((acc, val) => acc.concat(val), []);
  const pool = basePool.filter(p => !props.assign.map(a=>a.name).includes(p.name))
  const pool2 = pool.filter(p => !props.gotIt.map(a=>a.name).includes(p.name))

  return(
    <article>
      <h1>{props.name}<br/>({props.zone.name} / {props.from.map(b=>b.name).join(', ')})</h1>
      <div>{props.roles.map(r => r.name)}</div>
      <div>{props.assign.map(a => <Char key={`assign-${props.id}-${a.id}`} assign={true} {...a}/>)}</div>
      <div>{props.gotIt.map(g => <Char key={`got-${props.id}-${g.id}`} gotIt={true} {...g}/>)}</div>
      <div>{pool2.map(p => <Char key={`pool-${props.id}-${p.id}`} {...p}/>)}</div>
    </article>
  )
}