import React from 'react'
import styles from './Grupos.module.css';

export default function Grupos() {
  return (
    <div className={styles.container}>
      <h1>Grupos</h1>
      <div className={styles.worldCupLogoContainer}>
        <img src="./worldCup-Logo.png" />
      </div>
    </div>
  )
}
