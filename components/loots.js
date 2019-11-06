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

  const toggleClassFilter = (classes) => {
    let finalFilter = classFilters
    classes.forEach(c=>{
      if(classFilters.includes(c)){
        finalFilter = finalFilter.filter(b => b !== c)
      }
      else{
        finalFilter = [...finalFilter,c]
      }
    })
    setClassFilters(finalFilter)
  }

  let loots = props.loots
  if(bossFilters.length > 0){
    const isSelected = (boss) => {
      return bossFilters.includes(boss.name)
    }
    loots = loots.filter(l=>{
      return l.from.some(isSelected)
    })
  }
  if(classFilters.length > 0){
    const isSelected = (clas) => {
      return classFilters.includes(clas.name)
    }
    loots = loots.filter(l=>{
      return l.classes.some(isSelected)
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