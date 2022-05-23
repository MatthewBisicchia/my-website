import React from 'react'
import styles from './Header.module.css'

function Header({text}) {
  return (
    <div id={styles.header}>{text}</div>
  )
}

export default Header