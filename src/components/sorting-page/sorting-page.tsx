import React from "react"
import { Button } from "../ui/button/button"
import { RadioInput } from "../ui/radio-input/radio-input"
import { Column } from "../ui/column/column"
import styles from './sorting-page.module.css'
import { SolutionLayout } from "../ui/solution-layout/solution-layout"
import { useState, useEffect } from "react"
import { Direction } from "../../types/direction"
import { randomArr } from "../../utils/utils"
import { setArrayArgumentType } from "../../types/types"
import { ascendingBubleSort, descendingBubleSort, ascendingSelectSort, descendingSelectSort } from "./utils"

export const SortingPage: React.FC = () => {

  const [sortAlgorithm, setSortAlgorithm] = useState('Выбор')
  const [array, setArray] = useState<setArrayArgumentType>([])

  useEffect(() => setArray(randomArr()), [])

  const handleAscendingSort = () => {
    if(sortAlgorithm === 'Пузырек') {
      ascendingBubleSort(array, setArray)
    }

    if(sortAlgorithm === 'Выбор') {
      ascendingSelectSort(array, setArray)
    }
  }

  const handleDescendingSort = () => {
    if(sortAlgorithm === 'Пузырек') {
      descendingBubleSort(array, setArray)
    }

    if(sortAlgorithm === 'Выбор') {
      descendingSelectSort(array, setArray)
    }
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
              />
              <RadioInput 
                label='Пузырек'
                checked={sortAlgorithm === 'Пузырек'}
                onChange={() => setSortAlgorithm('Пузырек')}   
              />
            </div>
            <div className={styles.sort_buttons}>
              <Button
                text="По возрастанию"
                type = 'button'
                sorting={Direction.Ascending}
                onClick={handleAscendingSort} 
              />
              <Button
                text='По убыванию' 
                type = 'button'
                sorting={Direction.Descending}
                onClick={handleDescendingSort}  
              />
            </div>
            <Button 
              text="Новый массив"
              type="button"
              onClick={() => setArray(randomArr())}
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
