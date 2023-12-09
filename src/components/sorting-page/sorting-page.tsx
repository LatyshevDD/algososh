import React from "react"
import { Button } from "../ui/button/button"
import { RadioInput } from "../ui/radio-input/radio-input"
import { Column } from "../ui/column/column"
import styles from './sorting-page.module.css'
import { SolutionLayout } from "../ui/solution-layout/solution-layout"
import { useState, useEffect } from "react"
import { Direction } from "../../types/direction"
import { getRandomArr } from "../../utils/utils"
import { setArrayArgumentType } from "../../types/types"
import { ascendingBubleSort, descendingBubleSort, ascendingSelectSort, descendingSelectSort } from "./utils"

export const SortingPage: React.FC = () => {

  const [sortAlgorithm, setSortAlgorithm] = useState('Выбор')
  const [array, setArray] = useState<setArrayArgumentType>([])
  const [ascendingButtonActive, setAscendingButtonActive] = useState(false)
  const [descendingButtonActive, setDescendingButtonActive] = useState(false)

  useEffect(() => setArray(getRandomArr()), [])

  const handleAscendingSort = async() => {

    await setAscendingButtonActive(true)

    if(sortAlgorithm === 'Пузырек') {
      await ascendingBubleSort(array, setArray)
    }

    if(sortAlgorithm === 'Выбор') {
      await ascendingSelectSort(array, setArray)  
    }

    setAscendingButtonActive(false)
}

  const handleDescendingSort = async() => {

    await setDescendingButtonActive(true)

    if(sortAlgorithm === 'Пузырек') {
      await descendingBubleSort(array, setArray)
    }

    if(sortAlgorithm === 'Выбор') {
      await descendingSelectSort(array, setArray)
    }

    setDescendingButtonActive(false)
  }

  return (
    <SolutionLayout title="Сортировка массива">
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.buttons}>
            <div className={styles.radio_buttons}>
              <RadioInput 
                label='Выбор'
                checked={sortAlgorithm === 'Выбор'}
                onChange={() => setSortAlgorithm('Выбор')}
                disabled={ascendingButtonActive || descendingButtonActive} 
              />
              <RadioInput 
                label='Пузырек'
                checked={sortAlgorithm === 'Пузырек'}
                onChange={() => setSortAlgorithm('Пузырек')}
                disabled={ascendingButtonActive || descendingButtonActive}   
              />
            </div>
            <div className={styles.sort_buttons}>
              <Button
                text="По возрастанию"
                type = 'button'
                sorting={Direction.Ascending}
                onClick={handleAscendingSort}
                isLoader={ascendingButtonActive}
                disabled={descendingButtonActive} 
              />
              <Button
                text='По убыванию' 
                type = 'button'
                sorting={Direction.Descending}
                onClick={handleDescendingSort}
                disabled={ascendingButtonActive}
                isLoader={descendingButtonActive}  
              />
            </div>
            <Button 
              text="Новый массив"
              type="button"
              onClick={() => setArray(getRandomArr())}
              disabled={ascendingButtonActive || descendingButtonActive}
            />
          </div>
          <div className={styles.array}>
            {
              array.length > 0 &&
              array.map((item, index) => {
                return (<Column 
                  index={item.index}
                  state={item.state}
                  key={index}
                />)
              })
            }
          </div>
        </div>
      </main>
    </SolutionLayout>
  );
};
