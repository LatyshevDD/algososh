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


export const ListPage: React.FC = () => {

  const[string, setString] = useState('')
  const[index, setIndex] = useState<number | undefined>()
  const[array, setArray] = useState<string[]>([])

  const linkedList = new LinkedList(array)

  // Для проверки
  console.log(linkedList.toArray())
  
  useEffect(
    () => {
      setArray(getRandomStringArr(3, 3))
    }, 
    []
  )

  const handleAddTail = () => {
    linkedList.append(string)
    setArray(linkedList.toArray())
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
            />
            <Button 
              type='button' 
              text='Добавить в tail'
              onClick={handleAddTail}
            />
            <Button 
              type='button' 
              text='Удалить из head'
            />
            <Button 
              type='button' 
              text='Удалить из tail'
            />
          </div>
          <div className={styles.input_container}>
            <Input 
              value={index}
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
            />
            <Button 
              type='button' 
              text='Удалить по индексу'
              extraClass={styles.flex_grow}
            />
          </div>
          <div className={styles.circles}>
            {
              array.map((item, index, array) => {
                if(index === array.length - 1) {
                  return (
                    <Circle 
                      letter={item}
                      key={index}
                      index={index}
                      head={index === 0 ? 'head' : undefined}
                      tail={index === array.length - 1 ? 'tail' : undefined}
                    />
                  )
                }
                return (
                  <div className={styles.circle} key={index}>
                    <Circle 
                      letter={item}
                      index={index}
                      head={index === 0 ? 'head' : undefined}
                      tail={index === array.length - 1 ? 'tail' : undefined}
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
