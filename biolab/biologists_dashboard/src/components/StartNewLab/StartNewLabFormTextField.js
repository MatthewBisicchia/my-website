import React from 'react'
import styles from './StartNewLab.module.css';

function StartNewLabFormTextField({field, onchange}) {

  return (
    <div className={styles.textField}>
        <div className={styles.textFieldLabel}>{field.name}</div>
        <div className={styles.textFieldInput}>
          <input name={field.name} style={{height: '25px', width: '500px'}} onChange={onchange}></input>
        </div>
    </div>
  )
}

export default StartNewLabFormTextField;
