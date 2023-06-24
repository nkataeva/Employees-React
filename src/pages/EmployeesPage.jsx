import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { getData } from '../data/getData.js';
import styles from './EmployeesPage.module.scss';
import Table from "../components/Table.jsx";
import Group from "../components/Group.jsx";
import Cards from "../components/Cards.jsx";
import { ClassNames } from "@emotion/react";

export default function EmployeesPage() {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [showTable, setShowTable] = React.useState(false);
  const [showCards, setShowCards] = React.useState(false);
  const [showGroup, setShowGroup] = React.useState(false);

  React.useEffect(() => {
    const Data = async () => {
      setData(await getData());
      setIsLoading(false);
    }
    Data();
  }, []);

  const handleTable = () => {
    setShowTable(!showTable);
    setShowCards(false);
    setShowGroup(false);
  };

  const handleCards = () => {
    setShowCards(!showCards);
    setShowTable(false);
    setShowGroup(false);
  };

  const handleGroup = () => {
    setShowGroup(!showGroup);
    setShowTable(false);
    setShowCards(false);
  };

  return (
    <>
    <div className={styles.buttons}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group" id={styles.Button}>
        <Button onClick={handleTable}>Таблица</Button>
        <Button onClick={handleCards}>Карточки</Button>
        <Button onClick={handleGroup}>Группы</Button>
      </ButtonGroup>
    </div>
      
      {isLoading ? (<p id={styles.loading}>Loading...</p>) : (
        <>
          {showTable && <Table data={data} />}
          {showCards && <Cards />}
          {showGroup && <Group />}
        </>
      )}
    </>
  )
}