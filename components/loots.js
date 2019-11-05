import React, {useState} from 'react'
import Loot from './loot'
import Filters from './filters'

import styles from './loots.module.scss'

export default (props) => {

  const [filters,setFilters] = useState([])

  return(
    <>
      <Filters {...props} setFilters={setFilters}/>
      <section className={styles.loots}>
        <article><h1>Item</h1><div>classes</div><div>Assigns</div><div>Got it</div><div>Pool</div></article>
        {props.loots.map(l=><Loot key={`loot-${l.name}`} {...l}/>)}
      </section>
    </>
  )
}