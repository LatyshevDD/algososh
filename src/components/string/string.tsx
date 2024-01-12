import React, { useState } from "react"
import { Button } from "../ui/button/button"
import { Circle } from "../ui/circle/circle"
import { Input } from "../ui/input/input"
import { SolutionLayout } from "../ui/solution-layout/solution-layout"
import styles from './string.module.css'
import { revertString } from "./utils"
import { setStrArrayArgumentType } from "../../types/types"
import { ElementStates } from "../../types/element-states"

export const StringComponent: React.FC = () => {

  const [str, setStr] = useState('')
  const [strArray, setStrArray] = useState<setStrArrayArgumentType>([])
  const [isLoader, setIsLoader] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoader(true)
    await revertString(str, setStrArray)
    setIsLoader(false)
  }

  return (
    <SolutionLayout title="Строка">
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            value={str} 
            placeholder = "Введите текст"
            type = "text"
            maxLength = {11}
            isLimitText = {true}
            onChange = {(e) => setStr(e.currentTarget.value)}
          />
          <Button
            type='submit' 
            text='Развернуть'
            isLoader={isLoader}
            disabled={str.length ? false : true}
          />
        </form>
        <ul className={styles.circles}>
          {
            strArray.length > 0 &&
            strArray.map((item, index) => {
              let state = 
                item.state === 'default' ? ElementStates.Default : undefined ||
                item.state === 'changing' ? ElementStates.Changing : undefined ||
                item.state === 'modified' ? ElementStates.Modified : undefined

              return (
                <Circle 
                  letter={item.value} 
                  key={index} 
                  state = {state}
                />)
            })
          }
        </ul>
      </main>
    </SolutionLayout>
  );
};
