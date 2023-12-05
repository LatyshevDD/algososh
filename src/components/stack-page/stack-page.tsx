import React, { useState } from "react"
import { SolutionLayout } from "../ui/solution-layout/solution-layout"
import styles from './stack-page.module.css'
import { Input } from "../ui/input/input"
import { Button } from "../ui/button/button"
import { Circle } from "../ui/circle/circle"
import { ElementStates } from "../../types/element-states"
import { StackObjectType } from "../../types/types"
import { push } from "./utils"


export const StackPage: React.FC = () => {

  const[string, setString] = useState('')
  const[isLoader, setIsLoader] = useState(false)
  const[stack, setStack] = useState<StackObjectType[]>([])

  // const push = async(item: string) => {
  //   let newStack = stack
  
  //   if(newStack.length > 0) {
  //     newStack = newStack.map((item, index) => {
  //       return {...item, head: null}
  //     })
  //     await setStack(newStack)
  //   }
  //   setStack([...newStack, {value: item, state: ElementStates.Default, head: 'top', index: stack.length}])
  // }

  // console.log(stack)

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    push(string, stack, setStack)
    setString('')
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
            />
          </form>
            <Button 
              type='button' 
              text='Очистить'
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
