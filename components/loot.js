import React from 'react'

export default (props) => {

  const basePool = props.roles.map(r => r.chars.map(c => c.name)).reduce((acc, val) => acc.concat(val), []);
  const pool = basePool.filter(p => !props.assign.map(a=>a.name).includes(p))
  const pool2 = pool.filter(p => !props.gotIt.map(a=>a.name).includes(p))

  return(
    <article>
      <h1>{props.name}</h1>
      <p>{props.roles.map(r => r.name)}</p>
      <p>{props.assign.map(a => a.name)}</p>
      <p>{props.gotIt.map(g => g.name)}</p>
      <p>{pool2.join(', ')}</p>
    </article>
  )
}