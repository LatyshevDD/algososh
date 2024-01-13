import React, { useState } from "react"
import { SolutionLayout } from "../ui/solution-layout/solution-layout"
import styles from './stack-page.module.css'
import { Input } from "../ui/input/input"
import { Button } from "../ui/button/button"
import { Circle } from "../ui/circle/circle"
import { Stack } from "./stack-page_class"
import { pause } from "../../utils/utils"
import { ElementStates } from "../../types/element-states"

const stack = new Stack<string>()

export const StackPage: React.FC = () => {

  const[string, setString] = useState('')
  const[stackArray, setStackArray] = useState<(string | undefined)[]>([])
  const[top, setTop] = useState(-1)
  const[changingState, setChangingState] = useState(-1)
  const[addLoader, setAddLoader] = useState(false)
  const[deleateLoader, setDeleteLoader] = useState(false)
  const[clearLoader, setClearLoader] = useState(false)

  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await setAddLoader(true)
    stack.push(string)
    setTop(stack.getTop())
    setChangingState(stack.getTop())
    setStackArray(stack.getElements())
    await pause(500)
    setChangingState(-1)
    setStackArray(stack.getElements())
    setString('')
    setAddLoader(false)
  }

  const handleDeleteButton = async() => {
    setDeleteLoader(true)
    setChangingState(stack.getTop())
    setStackArray(stack.getElements())
    await pause(500)
    stack.pop()
    setTop(stack.getTop())
    setStackArray(stack.getElements())
    setDeleteLoader(false)
  }

  const handleClearButton = () => {
    setClearLoader(true)
    stack.clear()
    setTop(stack.getTop())
    setStackArray(stack.getElements())
    setClearLoader(false)
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
              disabled={addLoader || deleateLoader || clearLoader}
            />
            <Button 
              type='submit' 
              text='Добавить'
              isLoader={addLoader}
              disabled={deleateLoader || clearLoader || !string.length}
            />
            <Button 
              type='button' 
              text='Удалить'
              onClick={handleDeleteButton}
              disabled={addLoader || clearLoader}
              isLoader={deleateLoader}
            />
          </form>
            <Button 
              type='button' 
              text='Очистить'
              onClick={handleClearButton}
              disabled={addLoader || deleateLoader}
              isLoader={clearLoader}
            />
        </div>
        <ul className={styles.circles}>
          {
              stackArray.length > 0 &&
              stackArray.map((item, index) => {
                return (
                  <Circle 
                    letter={item} 
                    key={index}
                    head={index === top ? 'top' : undefined}
                    index={index}
                    state={index === changingState ? ElementStates.Changing : ElementStates.Default} 
                  />)
              })
            }
        </ul>
      </main>
    </SolutionLayout>
  );
};
