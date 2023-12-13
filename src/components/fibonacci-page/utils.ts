import { setNumArrayArgumentType } from "../../types/types"
import { setStateWithPause } from "../../utils/utils"

export async function getFibonacci(num: string, setNumArray: React.Dispatch<React.SetStateAction<setNumArrayArgumentType>>) {
  
  let initialNumber = parseInt(num)
  let result: setNumArrayArgumentType = []

  //Добавляем первый элемент
  result.push({
    value: '1',
    index: 0
  })
  await setStateWithPause(setNumArray, 500, result)
  
  // Добавляем остальные элементы пока не достигнуто заданное число итераций
  let thirst = 0
  let second = 1
  let current = 0

  for(let i = 1; i <= initialNumber; i++) {
    current = thirst + second

    result.push({
      value: current.toString(),
      index: i
    })
    
    thirst = second
    second = current

    //Рендерим новый элемент массива
    await setStateWithPause(setNumArray, 500, result)

  }
  
  setStateWithPause(setNumArray, 500, result)
  
}