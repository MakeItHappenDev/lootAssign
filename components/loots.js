import React from 'react'
import Loot from './loot'

import styles from './loots.module.scss'

export default (props) => {
  return(
    <section className={styles.loots}>
      <article><h1>Item</h1><p>Roles</p><p>Assigns</p><p>Got it</p><p>Pool</p></article>
      {props.loots.map(l=><Loot key={`loot-${l.id}`} {...l}/>)}
    </section>
  )
}