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
    setHeadNode(linkedList.getSize() - 1)
    await pause(500)
    setString('')
    setHeadNode(-1)
    linkedList.append(string)
    setArray(linkedList.toArray())
    setModifiedState(linkedList.getSize() - 1)
    await pause(500)
    setModifiedState(-1)
  }

  const handleAddHead = async() => {
    if(string.length === 0) {
      return
    }
    setHeadNode(0)
    await pause(500)
    setString('')
    setHeadNode(-1)
    linkedList.prepend(string)
    setArray(linkedList.toArray())
    setModifiedState(0)
    await pause(500)
    setModifiedState(-1)
  }

  const handleDeleteHead = () => {
    linkedList.deleteHead()
    setArray(linkedList.toArray())
  }

  const handleDeleteTail = () => {
    linkedList.deleteTail()
    setArray(linkedList.toArray())
  }

  const handleAddByIndex = async() => {
    if(string.length === 0 || index < 0) {
      return
    }
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
  }

  const handleDeleteByIndex = async() => {
    if(index < 0) {
      return
    }
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
            />
            <Button 
              type='button' 
              text='Добавить в head'
              onClick={handleAddHead}
            />
            <Button 
              type='button' 
              text='Добавить в tail'
              onClick={handleAddTail}
            />
            <Button 
              type='button' 
              text='Удалить из head'
              onClick={handleDeleteHead}
            />
            <Button 
              type='button' 
              text='Удалить из tail'
              onClick={handleDeleteTail}
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
            />
            <Button 
              type='button' 
              text='Добавить по индексу'
              extraClass={styles.flex_grow}
              onClick={handleAddByIndex}
            />
            <Button 
              type='button' 
              text='Удалить по индексу'
              extraClass={styles.flex_grow}
              onClick={handleDeleteByIndex}
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
                        index === headNode ? <Circle letter = {string} isSmall={true} state={ElementStates.Changing}/> : undefined
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
                  <div className={styles.circle} key={index}>
                    <Circle 
                      letter={index === tailNode ? '' : item}
                      index={index}
                      head={
                        index === headNode ? <Circle letter = {string} isSmall={true} state={ElementStates.Changing}/> : undefined
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
