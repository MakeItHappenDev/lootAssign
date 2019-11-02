import React from 'react'

import styles from './char.module.scss'

export default (props) => {

  return(
    <p className={styles.para}>
      <span className={styles[props.class.id]}>{props.name}</span> 
      {props.assign && <>
        <button>Got it</button>
        <button>remove Assign</button>
      </>}
      {props.gotIt && <><button>remove Got It</button></>}
      {!props.assign && !props.gotIt && <>
        <button>Got it</button>
        <button>Assign it</button>
      </>}
    </p>
  )
}