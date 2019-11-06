import React from 'react'

export default (props) => {
  return(
    <p className={props.bossFilters.includes(props.name)?props.selected:null} onClick={()=>props.toggleBossFilter([props.name])}>{props.name}</p>
  )
}