import { 
  setStrArrayArgumentType, 
  setNumArrayArgumentType,
  setArrayArgumentType,
  SortingObjectType,
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

// Функция генерации случайного массива для страницы сортировки
export const getRandomArr = () => {

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

//Функция поиска индекса элемента в массиве со state=modified

export const findIndexModified = (array: SortingObjectType[], currentIndex: number) => {
  let indexOfEl
  const element = array.find((item, index) => {
    if (item.state === ElementStates.Modified && index > currentIndex) {
      indexOfEl = index
      return item
    }
  })

  return indexOfEl
}


// Функция генерации случайного массива
export const getRandomStringArr = (min: number, max: number) => {

  //Определяем количество элементов массива
  const elementsTotal = getRandomInt(min, max)
  
  let randomArray: string[] = []

  //Добавляем в массив случайные элементы
  for(let i = 0; i <= elementsTotal; i++) {
    randomArray.push(getRandomInt(0, 100).toString())
  }
  
  return randomArray
}
