import React from 'react'

import Zone from './zone'
import Class from './class'

import styles from './filters.module.scss'

export default (props) => {
  return (
    <section className={styles.filters}>
      {props.zones.map(z=><Zone {...z} key={`zoneFilter-${z.name}`}/>)}
      <article>
        <h1>Classes</h1>
        {props.classes.map(c => <Class key={`classFilter-${c.name}`} {...c}/>)}
      </article>
    </section>
  )
}