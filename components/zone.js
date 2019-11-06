import React,{useState} from 'react'

import Boss from './boss'

export default (props) => {
  const [selected,setSelected] = useState(false)
  const toggleSelected = (selected) => {
    let bossesToToggle = []
    if(!selected){
      //Add all bosses
      props.bosses.forEach(b=>{
        if(!props.bossFilters.includes(b.name)){
          //Not selected => selected
          bossesToToggle.push(b.name)
        }
      })
    }
    else{
      //Remove all bosses
      props.bosses.forEach(b=>{
        if(props.bossFilters.includes(b.name)){
          //selected => not selected
          bossesToToggle.push(b.name)
        }
      })

    }

    props.toggleBossFilter(bossesToToggle)
    setSelected(!selected)
  }

  return(
    <article>
      <h1 onClick={()=>toggleSelected(selected)} className={selected?props.selected:null}>{props.name}</h1>
      {props.bosses.map(b => <Boss key={`bossFilter-${b.name}`} {...b} toggleBossFilter={props.toggleBossFilter} bossFilters={props.bossFilters} selected={props.selected}/>)}
    </article>
  )
}