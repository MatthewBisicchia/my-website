import React from 'react'
import styles from './Lab.module.css'

const Lab = ({lab}) => {
  return (
    <a className={styles.link}> 
        <div className={styles.parent}>
            <div className={styles.item}>

                <div className={styles.itemTitle}><p>{lab.name}</p></div>

                <div className={styles.itemDescription}><p>{lab.details}</p></div>
                
            </div>
        </div>
    </a>
  );
}

export default Lab;