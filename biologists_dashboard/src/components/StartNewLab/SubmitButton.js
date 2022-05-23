import React from 'react'
import styles from './SubmitButton.module.css';

function SubmitButton({submit}) {
  return (
    <div id={styles.container}>
        <div id={styles.button} onClick={submit}>
            <a id={styles.buttonLabel}>Start Lab</a>
        </div>
    </div>
  )
}

export default SubmitButton