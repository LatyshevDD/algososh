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
  const[addLoader, setAddLoader] = useState(false)
  const[deleateLoader, setDeleteLoader] = useState(false)
  const[clearLoader, setClearLoader] = useState(false)
  const[queueElements, setQueueElements] = useState(queue.getElements())
  const[tail, setTail] = useState(-1)
  const[head, setHead] = useState(-1)
  const[addState, setAddState] = useState(-1)
  const[deleteState, setDeleteState] = useState(-1)


  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
    setAddLoader(true)
    e.preventDefault()
    queue.enqueue(string)
    setTail(queue.getTail())
    setHead(queue.getHead())
    setAddState(queue.getTail())
    await pause(500)
    setAddState(-1)
    setQueueElements(queue.getElements())
    setString('')
    setAddLoader(false)
  }

  const handleDeleteButton = async() => {
    setDeleteLoader(true)
    setDeleteState(queue.getHead())
    await pause(500)
    setDeleteState(-1)
    queue.dequeue()
    setHead(queue.getHead())
    setTail(queue.getTail())
    setQueueElements(queue.getElements())
    setDeleteLoader(false)
  }

  const handleClearButton = () => {
    setClearLoader(true)
    queue.clear()
    setTail(queue.getTail())
    setHead(queue.getHead())
    setQueueElements(queue.getElements())
    setClearLoader(false)
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
              isLoader={deleateLoader}
              disabled={addLoader || clearLoader}
            />
          </form>
            <Button 
              type='button' 
              text='Очистить'
              onClick={handleClearButton}
              isLoader={clearLoader}
              disabled={addLoader || deleateLoader}
            />
        </div>
        <ul className={styles.circles}>
          {
              queueElements.map((item, index) => {
                return (
                  <Circle 
                    letter={item ? item: ''} 
                    key={index}
                    head={index === head ? 'head' : null}
                    index={index}
                    state={(index === addState || index === deleteState) ? ElementStates.Changing : ElementStates.Default}
                    tail={index === tail ? 'tail' : null} 
                  />)
              })
            }
        </ul>
      </main>
    </SolutionLayout>
  );
};
