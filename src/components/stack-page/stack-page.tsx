import React, { useState } from "react"
import { SolutionLayout } from "../ui/solution-layout/solution-layout"
import styles from './stack-page.module.css'
import { Input } from "../ui/input/input"
import { Button } from "../ui/button/button"
import { Circle } from "../ui/circle/circle"
import { StackObjectType } from "../../types/types"
import { push, pop } from "./utils"


export const StackPage: React.FC = () => {

  const[string, setString] = useState('')
  const[isLoader, setIsLoader] = useState(false)
  const[stack, setStack] = useState<StackObjectType[]>([])

  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    await setIsLoader(true)
    e.preventDefault()
    await push(string, stack, setStack)
    setString('')
    setIsLoader(false)
  }

  const handleDeleteButton = async() => {
    await setIsLoader(true)
    await pop(stack, setStack)
    setIsLoader(false)
  }

  return (
    <SolutionLayout title="Стек">
      <main className={styles.main}>
        <div className={styles.container}>
          <form 
            className={styles.form}
            onSubmit={handleSubmit}
          > 
            <Input 
              value={string}
              placeholder = "Введите текст"
              type = "text"
              maxLength = {4}
              isLimitText = {true}
              extraClass={styles.input}
              onChange = {(e) => setString(e.currentTarget.value)}
            />
            <Button 
              type='submit' 
              text='Добавить'
              isLoader={isLoader}
            />
            <Button 
              type='button' 
              text='Удалить'
              onClick={handleDeleteButton}
              disabled={isLoader}
            />
          </form>
            <Button 
              type='button' 
              text='Очистить'
              onClick={() => setStack([])}
              disabled={isLoader}
            />
        </div>
        <ul className={styles.circles}>
          {
              stack.length > 0 &&
              stack.map((item, index) => {
                return (
                  <Circle 
                    letter={item.value} 
                    key={index}
                    head={item.head}
                    index={item.index}
                    state={item.state} 
                  />)
              })
            }
        </ul>
      </main>
    </SolutionLayout>
  );
};
