import { setStateWithPause } from "../../utils/utils"
import { setArrayArgumentType } from "../../types/types"
import { ElementStates } from "../../types/element-states"

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