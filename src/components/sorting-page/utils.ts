import { setStateWithPause } from "../../utils/utils"
import { setArrayArgumentType } from "../../types/types"
import { ElementStates } from "../../types/element-states"
import { findIndexModified } from "../../utils/utils"

// Пузырьковая сортировка по возрастанию
export async function ascendingBubleSort (array: setArrayArgumentType, setArray: React.Dispatch<React.SetStateAction<setArrayArgumentType>>) {

  let sortedArray = array
  
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length - 1; j++) {
        sortedArray[j].state = ElementStates.Changing
        sortedArray[j+1].state = ElementStates.Changing
        await setStateWithPause(setArray, 1000, sortedArray)

        if (sortedArray[j + 1].index < sortedArray[j].index) {
            let tmp = sortedArray[j].index
            sortedArray[j].index = sortedArray[j+1].index
            sortedArray[j+1].index = tmp
            sortedArray[j+1].state = ElementStates.Modified
            await setStateWithPause(setArray, 1000, sortedArray)

        }
        sortedArray[j].state = ElementStates.Default
        sortedArray[j+1].state = ElementStates.Default
        await setStateWithPause(setArray, 1000, sortedArray)
    }
  }

  setArray([...sortedArray])
}

// Пузырьковая сортировка по убыванию
export async function descendingBubleSort (array: setArrayArgumentType, setArray: React.Dispatch<React.SetStateAction<setArrayArgumentType>>) {

  let sortedArray = array
  
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length - 1; j++) {
      sortedArray[j].state = ElementStates.Changing
      sortedArray[j+1].state = ElementStates.Changing
      await setStateWithPause(setArray, 1000, sortedArray)

        if (sortedArray[j + 1].index > sortedArray[j].index) {
            let tmp = sortedArray[j].index
            sortedArray[j].index = sortedArray[j+1].index
            sortedArray[j+1].index = tmp
            sortedArray[j+1].state = ElementStates.Modified
            await setStateWithPause(setArray, 1000, sortedArray)
        }
        sortedArray[j].state = ElementStates.Default
        sortedArray[j+1].state = ElementStates.Default
        await setStateWithPause(setArray, 1000, sortedArray)
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
          sortedArray[j].state = ElementStates.Changing
          sortedArray[i].state = ElementStates.Changing
          await setStateWithPause(setArray, 1000, sortedArray)

          if (sortedArray[j].index < sortedArray[indexMin].index) {
              indexMin = j

              // Предыдущим минимальным элементам устанавливаем state default
              let modifiedElement = findIndexModified(sortedArray, i)

              if(modifiedElement) {
                sortedArray[modifiedElement].state = ElementStates.Default
              }

              //Устанавливаем modified для минимального элемента
              sortedArray[j].state = ElementStates.Modified
              await setStateWithPause(setArray, 1000, sortedArray)
          }
          
          if(j !== indexMin) {
            sortedArray[j].state = ElementStates.Default
          }
          
          await setStateWithPause(setArray, 1000, sortedArray)

      }
      let tmp = sortedArray[i]
      sortedArray[i] = sortedArray[indexMin]
      sortedArray[indexMin] = tmp
      sortedArray[i].state = ElementStates.Modified
      sortedArray[indexMin].state = ElementStates.Default
      await setStateWithPause(setArray, 1000, sortedArray)
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


// let arrayTest = [
//   {
//     index: 1,
//     state: ElementStates.Default
//   },
//   {
//     index: 1,
//     state: ElementStates.Modified
//   },
//   {
//     index: 1,
//     state: ElementStates.Default
//   },
//   {
//     index: 1,
//     state: ElementStates.Default
//   },
//   {
//     index: 1,
//     state: ElementStates.Default
//   }
// ]

// console.log(findIndexModified(arrayTest, 1))