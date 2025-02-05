import React from "react";
import { SolutionLayout } from "../ui/solution-layout/solution-layout";
import styles from './lis-page.module.css';
import { Input } from "../ui/input/input";
import { Button } from "../ui/button/button";
import { useState, useEffect, useRef } from "react";
import { Circle } from "../ui/circle/circle";
import { ArrowIcon } from "../ui/icons/arrow-icon";
import { getRandomStringArr } from "../../utils/utils";
import { LinkedList } from "./list-page_class";
import { pause } from "../../utils/utils";
import { ElementStates } from "../../types/element-states";

export const ListPage: React.FC = () => {

  const[string, setString] = useState('')
  const[index, setIndex] = useState<number>(-1)
  const[array, setArray] = useState<string[]>([])
  const[headNode, setHeadNode] = useState(-1)
  const[modifiedState, setModifiedState] = useState(-1)
  const[changingState, setChangingState] = useState(-1)
  const[tailNode, setTailNode] = useState(-1)
  const[addTailLoader, setAddTailLoader] = useState(false)
  const[addHeadLoader, setAddHeadLoader] = useState(false)
  const[deleteHeadLoader, setDeleteHeadLoader] = useState(false)
  const[deleteTailLoader, setDeleteTailLoader] = useState(false)
  const[addByIndexLoader, setAddByIndexLoader] = useState(false)
  const[deleteByIndexLoader, setDeleteByIndexLoader] = useState(false)
  const[disableInterface, setDisableInterface] = useState(false)

  const linkedList = new LinkedList(array)

  useEffect(
    () => {
      setArray(getRandomStringArr(3, 3))
    }, 
    []
  )

  const handleAddTail = async() => {
    if(string.length === 0) {
      return
    }
    setAddTailLoader(true)
    setDisableInterface(true)
    setHeadNode(linkedList.getSize() - 1)
    await pause(500)
    setString('')
    setHeadNode(-1)
    linkedList.append(string)
    setArray(linkedList.toArray())
    setModifiedState(linkedList.getSize() - 1)
    await pause(500)
    setModifiedState(-1)
    setAddTailLoader(false)
    setDisableInterface(false)
  }

  const handleAddHead = async() => {
    if(string.length === 0) {
      return
    }
    setAddHeadLoader(true)
    setDisableInterface(true)
    setHeadNode(0)
    await pause(500)
    setString('')
    setHeadNode(-1)
    linkedList.prepend(string)
    setArray(linkedList.toArray())
    setModifiedState(0)
    await pause(500)
    setModifiedState(-1)
    setAddHeadLoader(false)
    setDisableInterface(false)
  }

  const handleDeleteHead = async() => {
    setDeleteHeadLoader(true)
    setDisableInterface(true)
    setTailNode(0)
    await pause(500)
    setTailNode(-1)
    linkedList.deleteHead()
    setArray(linkedList.toArray())
    setDeleteHeadLoader(false)
    setDisableInterface(false)
  }

  const handleDeleteTail = async() => {
    setDeleteTailLoader(true)
    setDisableInterface(true)
    setTailNode(linkedList.getSize() - 1)
    await pause(500)
    setTailNode(-1)
    linkedList.deleteTail()
    setArray(linkedList.toArray())
    setDeleteTailLoader(false)
    setDisableInterface(false)
  }

  const handleAddByIndex = async() => {
    if(string.length === 0 || index < 0) {
      return
    }
    setAddByIndexLoader(true)
    setDisableInterface(true)
    let currentIndex = -1
    while(currentIndex <= index) {
      setHeadNode(currentIndex)
      setChangingState(currentIndex)
      await pause(500)
      currentIndex++
    }
    setHeadNode(-1)
    setChangingState(-1)
    linkedList.addByIndex(string, index)
    setArray(linkedList.toArray())
    setModifiedState(index)
    await pause(500)
    setModifiedState(-1)
    setString('')
    setIndex(-1)
    setAddByIndexLoader(false)
    setDisableInterface(false)
  }

  const handleDeleteByIndex = async() => {
    if(index < 0) {
      return
    }
    setDeleteByIndexLoader(true)
    setDisableInterface(true)
    let currentIndex = -1
    while(currentIndex <= index) {
      setChangingState(currentIndex)
      await pause(500)
      currentIndex++
    }
    setChangingState(-1)
    setTailNode(index)
    await pause(500)
    setTailNode(-1)
    linkedList.deleteByIndex(index)
    setArray(linkedList.toArray())
    setIndex(-1)
    setDeleteByIndexLoader(false)
    setDisableInterface(false)
  }

  return (
    <SolutionLayout title="Связный список">
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.input_container}>
            <Input 
              value={string}
              placeholder = "Введите текст"
              type = "text"
              maxLength = {4}
              isLimitText = {true}
              extraClass={styles.text_input}
              onChange={(e) => setString(e.currentTarget.value)}
              disabled={disableInterface}
            />
            <Button 
              type='button' 
              text='Добавить в head'
              onClick={handleAddHead}
              isLoader={addHeadLoader}
              disabled={disableInterface || !string.length}
            />
            <Button 
              type='button' 
              text='Добавить в tail'
              onClick={handleAddTail}
              isLoader={addTailLoader}
              disabled={disableInterface || !string.length}
            />
            <Button 
              type='button' 
              text='Удалить из head'
              onClick={handleDeleteHead}
              isLoader={deleteHeadLoader}
              disabled={disableInterface}
            />
            <Button 
              type='button' 
              text='Удалить из tail'
              onClick={handleDeleteTail}
              isLoader={deleteTailLoader}
              disabled={disableInterface}
            />
          </div>
          <div className={styles.input_container}>
            <Input 
              value={index >= 0 ? index : ''}
              placeholder = "Введите индекс"
              type = "number"
              maxLength = {1}
              extraClass={styles.text_input}
              onChange={(e) => setIndex(parseInt(e.currentTarget.value))}
              disabled={disableInterface}
            />
            <Button 
              type='button' 
              text='Добавить по индексу'
              extraClass={styles.flex_grow}
              onClick={handleAddByIndex}
              isLoader={addByIndexLoader}
              disabled={disableInterface || index < 0 || !string.length}
            />
            <Button 
              type='button' 
              text='Удалить по индексу'
              extraClass={styles.flex_grow}
              onClick={handleDeleteByIndex}
              isLoader={deleteByIndexLoader}
              disabled={disableInterface || index < 0}
            />
          </div>
          <div className={styles.circles}>
            {
              array.map((item, index, array) => {
                if(index === array.length - 1) {
                  return (
                    <Circle 
                      letter={index === tailNode ? '' : item}
                      key={index}
                      index={index}
                      head={
                        index === headNode ? <Circle letter = {string ? string : item} isSmall={true} state={ElementStates.Changing}/> : undefined
                        || index === 0 ? 'head' : undefined
                      }
                      state={
                        (index === modifiedState && ElementStates.Modified)
                        || ((changingState >= 0 && index <= changingState) && ElementStates.Changing)
                        || ElementStates.Default
                      }
                      tail={
                        index === tailNode ? <Circle letter = {item} isSmall={true} state={ElementStates.Changing}/> : undefined
                        || index === array.length - 1 ? 'tail' : undefined
                      }
                    />
                  )
                }
                return (
                  <div className={styles.circle_content} key={index}>
                    <Circle 
                      letter={index === tailNode ? '' : item}
                      index={index}
                      head={
                        index === headNode ? <Circle letter = {string ? string : item} isSmall={true} state={ElementStates.Changing}/> : undefined
                        || index === 0 ? 'head' : undefined
                      }
                      state={
                        (index === modifiedState && ElementStates.Modified)
                        || ((changingState >= 0 && index <= changingState) && ElementStates.Changing)
                        || ElementStates.Default
                      }
                      tail={
                        index === tailNode ? <Circle letter = {item} isSmall={true} state={ElementStates.Changing}/> : undefined
                        || index === array.length - 1 ? 'tail' : undefined
                      }
                    />
                    <ArrowIcon />
                  </div>
                )
              })
            }
          </div>
        </div>
      </main>
    </SolutionLayout>
  );
};
