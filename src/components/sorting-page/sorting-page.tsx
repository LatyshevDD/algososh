import React from "react"
import { Button } from "../ui/button/button"
import { RadioInput } from "../ui/radio-input/radio-input"
import styles from './sorting-page.module.css'
import { SolutionLayout } from "../ui/solution-layout/solution-layout"
import { useState } from "react"
import { Direction } from "../../types/direction"

export const SortingPage: React.FC = () => {

  const [sortAlgorithm, setSortAlgorithm] = useState('Выбор')


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
            />
          </div>
        </div>
      </main>
    </SolutionLayout>
  );
};
