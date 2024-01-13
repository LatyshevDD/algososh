import React, { useState } from "react"
import { SolutionLayout } from "../ui/solution-layout/solution-layout"
import styles from './fibonacci-page.module.css'
import { Button } from "../ui/button/button"
import { Circle } from "../ui/circle/circle"
import { Input } from "../ui/input/input"
import { getFibonacci } from "./utils"
import { FibonacciObjectType } from "../../types/types"

export const FibonacciPage: React.FC = () => {

  const [num, setNum] = useState<string>('')
  const [numArray, setNumArray] = useState<FibonacciObjectType[]>([])
  const [isLoader, setIsLoader] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
      await setIsLoader(true)
      await getFibonacci(num, setNumArray)
      setIsLoader(false)
  }

  return (
    <SolutionLayout title="Последовательность Фибоначчи">
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input 
            placeholder = "Введите число"
            type = "number"
            max = {19}
            min={1}
            isLimitText={true}
            maxLength={2}
            onChange = {(e) => setNum(e.currentTarget.value)}
          />
          <Button
            type='submit' 
            text='Рассчитать'
            isLoader={isLoader}
            disabled={num.length ? false : true}
          />
        </form>
        <ul className={styles.circles}>
          {
            numArray.length > 0 &&
            numArray.map((item, index) => {
              return (
                <Circle 
                  letter={item.value} 
                  key={index} 
                  index = {item.index}
                />)
            })
          }
        </ul>
      </main>
    </SolutionLayout>
  );
};
