import { 
  setStrArrayArgumentType, 
  setNumArrayArgumentType,
  setArrayArgumentType,
  SortingObjectType
} from "../types/types"

import { ElementStates } from "../types/element-states"

export const pause = async (ms: number) => {
  return new Promise((res) => setTimeout(res, ms));
}

export const setStateWithPause = async (
  setState: React.Dispatch<React.SetStateAction<any>>,
  delay: number,
  argument: setStrArrayArgumentType | setNumArrayArgumentType | setArrayArgumentType
) => {
  await pause(delay)
  setState([...argument])
}

export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const randomArr = () => {

  //Определяем количество элементов массива
  const elementsTotal = getRandomInt(3, 17)
  
  let randomArray: number[] = []
  let result: SortingObjectType[] = []

  //Добавляем в массив случайные числа
  for(let i = 0; i <= elementsTotal; i++) {
    randomArray.push(getRandomInt(0,100))
  }

  //На основе полученного массива формируем новый массив объектов
  result = randomArray.map(item => {
    return {
      index: item,
      state: ElementStates.Default
    }
  })
  
  return result
}
