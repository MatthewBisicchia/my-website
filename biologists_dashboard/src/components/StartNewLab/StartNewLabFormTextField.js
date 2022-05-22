import React from 'react'
import styles from './StartNewLab.module.css';


function StartNewLabFormTextField({field}) {
  return (
    <div className={styles.textField}>
        <div className={styles.textFieldLabel}>{field.label}</div>
        <div className={styles.textFieldInput}><input style={{height: '25px', width: '500px'}}></input></div>
    </div>
  )
}

export default StartNewLabFormTextField
