import React, { useState } from "react"
import { SolutionLayout } from "../ui/solution-layout/solution-layout"
import { Input } from "../ui/input/input"
import { Button } from "../ui/button/button"
import { Circle } from "../ui/circle/circle"
import styles from './queue-page.module.css'
import { ElementStates } from "../../types/element-states"
import { Queue } from "./queue-page_class"
import { pause } from "../../utils/utils"

let queue = new Queue<string>()

export const QueuePage: React.FC = () => {

  const[string, setString] = useState('')
  const[isLoader, setIsLoader] = useState(false)
  const[queueElements, setQueueElements] = useState(queue.getElements())
  const[tail, setTail] = useState(0)

  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    await setIsLoader(true)
    e.preventDefault()
    queue.enqueue(string)
    setTail(queue.getTail())
    await pause(500)
    setTail(0)
    setQueueElements(queue.getElements())
    setString('')
    setIsLoader(false)
  }

  const handleDeleteButton = async() => {
    await setIsLoader(true)

    setIsLoader(false)
  }


  return (
    <SolutionLayout title="Очередь">
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
              // onClick={() => setQueue([])}
              disabled={isLoader}
            />
        </div>
        <ul className={styles.circles}>
          {
              queueElements.map((item, index) => {
                return (
                  <Circle 
                    letter={item ? item : ''} 
                    key={index}
                    // head={item.head}
                    index={index}
                    state={index === tail - 1 && tail ? ElementStates.Changing : ElementStates.Default}
                    tail={index === tail - 1 && tail ? 'tail' : null} 
                  />)
              })
            }
        </ul>
      </main>
    </SolutionLayout>
  );
};
