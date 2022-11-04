import React from 'react'
import styles from './Grupos.module.css';

type Country = { flag: string; name: string; team_overall: string; standing: string; };
type Group = Country[];

const groups: Group[] = [
  [
    { flag: 'Qatar', name: "Qatar", team_overall: '89', standing: '0' },
    { flag: 'Ecuador', name: "Ecuador", team_overall: '89', standing: '0' },
    { flag: 'Senegal', name: "Senegal", team_overall: '81', standing: '0' },
    { flag: 'Nederland', name: "Nederland", team_overall: '89', standing: '0' }
  ],
  [
    { flag: 'England', name: "England", team_overall: '90', standing: '0' },
    { flag: 'Iran', name: "Iran", team_overall: '73', standing: '0' },
    { flag: 'USA', name: "USA", team_overall: '89', standing: '0' },
    { flag: 'Wales', name: "Wales", team_overall: '79', standing: '0' }
  ]
]

export default function Grupos() {
  const groupsWrapper = document.querySelector(".groupsWrapper");
  if (groupsWrapper) {
    groupsWrapper.innerHTML = "";
    groups.forEach((item) => {item.forEach((item) => {
      groupsWrapper.innerHTML += `
      <div className={styles.groupDiv} ><h1>'${item.team_overall}'</h1></div>
    `;
    })});
}

  return (
    <div className={styles.container}>
      <div className={styles.worldCupLogoContainer}>
        <img src="./worldCup-Logo.png" />
      </div>
      <h1 className={styles.title}>Groups WorldCup 2022</h1>
      <div className={styles.groupsWrapper}>
      </div>
    </div>
  )
}
