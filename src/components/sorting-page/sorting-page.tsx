import React from "react"
import { Button } from "../ui/button/button"
import { RadioInput } from "../ui/radio-input/radio-input"
import { Column } from "../ui/column/column"
import styles from './sorting-page.module.css'
import { SolutionLayout } from "../ui/solution-layout/solution-layout"
import { useState } from "react"
import { Direction } from "../../types/direction"
import { randomArr } from "../../utils/utils"
import { setArrayArgumentType } from "../../types/types"

export const SortingPage: React.FC = () => {

  const [sortAlgorithm, setSortAlgorithm] = useState('Выбор')
  const [array, setArray] = useState<setArrayArgumentType>([])


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
              />
              <Button
                text='По убыванию' 
                type = 'button'
                sorting={Direction.Descending}  
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
              array.map(item => (
                <Column 
                  index={item.index}
                  state={item.state}
                />
              ))
            }
          </div>
        </div>
      </main>
    </SolutionLayout>
  );
};
