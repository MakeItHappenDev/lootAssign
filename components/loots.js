import React, {useState} from 'react'
import Loot from './loot'
import Filters from './filters'

import styles from './loots.module.scss'
import { isArray } from 'util'

export default (props) => {

  const [bossFilters,setBossFilters] = useState([])
  const [classFilters,setClassFilters] = useState([])

  const toggleBossFilter = (names) => {
    console.log("toggleBossFilter",names)
    let finalFilter = bossFilters
    names.forEach(n=>{
      if(bossFilters.includes(n)){
        finalFilter = finalFilter.filter(b => b !== n)
      }
      else{
        finalFilter = [...finalFilter,n]
      }
    })
    setBossFilters(finalFilter)
  }

  const toggleClassFilter = (name) => {
    if(classFilters.includes(name)){
      setClassFilters(classFilters.filter(c => c !== name))
    }
    else{
      setClassFilters([...classFilters,name])
    }
  }

  return(
    <>
      <Filters {...props} {...{bossFilters,toggleBossFilter,classFilters,toggleClassFilter}}/>
      <section className={styles.loots}>
        <article><h1>Item</h1><div>classes</div><div>Assigns</div><div>Got it</div><div>Pool</div></article>
        {props.loots.map(l=><Loot key={`loot-${l.name}`} {...l}/>)}
      </section>
    </>
  )
}