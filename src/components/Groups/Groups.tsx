import React from 'react'
import styles from "./Groups.module.css";
import { useNavigate } from 'react-router-dom';
import Teams from '../Teams/Teams';

export default function Groups({ groupLetter, setGroupClicked, matches }: any) {

  const navigate = useNavigate();

  const onGroupClick = () => {
    setGroupClicked(`GROUP_${groupLetter}`);
    navigate('/tabela-jogos')
  };

  return (
    <div className={styles.groupContainer}>
      <h2 className={styles.groupHeader} onClick={onGroupClick}>Grupo {groupLetter}</h2>
      <div className={styles.groupTeams}>
        <Teams matches={matches} groupLetter={groupLetter} />
      </div>
    </div>
  );
};

