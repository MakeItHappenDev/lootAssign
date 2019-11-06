import React from 'react'

export default (props) => {
  return (
    <p className={props.classFilters.includes(props.name)?props.selected:null} onClick={()=>props.toggleClassFilter([props.name])}>{props.name}</p>
  )
}