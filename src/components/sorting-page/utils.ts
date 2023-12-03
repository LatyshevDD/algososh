import { setStateWithPause } from "../../utils/utils"
import { setArrayArgumentType } from "../../types/types"

// Пузырьковая сортировка по возрастанию
export async function ascendingBubleSort (array: setArrayArgumentType, setArray: React.Dispatch<React.SetStateAction<setArrayArgumentType>>) {

  let sortedArray = array
  
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length - 1; j++) {
        if (sortedArray[j + 1].index < sortedArray[j].index) {
            let tmp = sortedArray[j].index
            sortedArray[j].index = sortedArray[j+1].index
            sortedArray[j+1].index = tmp
        }
    }
  }

  setArray([...sortedArray])
}

// Пузырьковая сортировка по убыванию
export async function descendingBubleSort (array: setArrayArgumentType, setArray: React.Dispatch<React.SetStateAction<setArrayArgumentType>>) {

  let sortedArray = array
  
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length - 1; j++) {
        if (sortedArray[j + 1].index > sortedArray[j].index) {
            let tmp = sortedArray[j].index
            sortedArray[j].index = sortedArray[j+1].index
            sortedArray[j+1].index = tmp
        }
    }
  }

  setArray([...sortedArray])
}

//Сортировка выбором по возрастанию

export async function ascendingSelectSort (array: setArrayArgumentType, setArray: React.Dispatch<React.SetStateAction<setArrayArgumentType>>) {
  
  let sortedArray = array
  
  for (let i = 0; i < sortedArray.length; i++) {
      let indexMin = i
      for (let j = i+1; j < sortedArray.length; j++) {
          if (sortedArray[j].index < sortedArray[indexMin].index) {
              indexMin = j
          }
      }
      let tmp = sortedArray[i]
      sortedArray[i] = sortedArray[indexMin]
      sortedArray[indexMin] = tmp
  }

  setArray([...sortedArray])
}

//Сортировка выбором по возрастанию
export async function descendingSelectSort (array: setArrayArgumentType, setArray: React.Dispatch<React.SetStateAction<setArrayArgumentType>>) {
  
  let sortedArray = array
  
  for (let i = 0; i < sortedArray.length; i++) {
      let indexMax = i
      for (let j = i+1; j < sortedArray.length; j++) {
          if (sortedArray[j].index > sortedArray[indexMax].index) {
              indexMax = j
          }
      }
      let tmp = sortedArray[i]
      sortedArray[i] = sortedArray[indexMax]
      sortedArray[indexMax] = tmp
  }

  setArray([...sortedArray])
}