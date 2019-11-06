import React, {useState} from 'react'
import Loot from './loot'
import Filters from './filters'

import styles from './loots.module.scss'

export default (props) => {

  const [bossFilters,setBossFilters] = useState([])
  const [classFilters,setClassFilters] = useState([])

  const toggleBossFilter = (names) => {
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

  let loots = props.loots
  if(bossFilters.length > 0){
    const isSelected = (boss) => {
      console.log(bossFilters,boss.name)
      return bossFilters.includes(boss.name)
    }
    loots = loots.filter(l=>{
      return l.from.some(isSelected)
    })
  }

  return(
    <>
      <Filters {...props} {...{bossFilters,toggleBossFilter,classFilters,toggleClassFilter}}/>
      <section className={styles.loots}>
        <article><h1>Item</h1><div>classes</div><div>Assigns</div><div>Got it</div><div>Pool</div></article>
        {loots.map(l=><Loot key={`loot-${l.name}`} {...l}/>)}
      </section>
    </>
  )
}