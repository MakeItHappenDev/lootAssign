import React from 'react'

import styles from './char.module.scss'

export default (props) => {

  return(
    <p>
    <span className={styles[props.class]}>{props.name}</span> - 
    {props.assign && <><span>Got it</span>/<span>remove Assign</span></>}
    {props.gotIt && <><span>remove Got It</span></>}
    {!props.assign && !props.gotIt && <><span>Got it</span>/<span>Assign it</span></>}
    </p>
  )
}