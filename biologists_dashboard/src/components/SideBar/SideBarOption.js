import React from 'react'
import styles from './SideBarOption.module.css';
import { Link } from 'react-router-dom';

function SideBarOption({option}) {
  return (
    <Link to={option.route} className={styles.link}><li className={styles.listItem}>{option.optionName}</li></Link>
  )
}

export default SideBarOption