import { setStrArrayArgumentType } from "../../types/types"
import { setStateWithPause } from "../../utils/utils"

export async function revertString(str: string, setStrArray: React.Dispatch<React.SetStateAction<setStrArrayArgumentType>>) {
  
  // На основе входящей строки формируем массив объектов
  const array = str.split('').map(item => {
    let circle = {
      value: item,
      state: 'default'
    }
    return circle
  })

  //Рендерим изначальный массив
  await setStateWithPause(setStrArray, 1000, array)

    let half = Math.floor(array.length / 2)
    for (let i = 0; i < half; i++) {

      //Меняем местами элементы массива
      let thirst = array[i]
      let second = array[(array.length - 1) - i]
      array[i] = second
      array[(array.length - 1) - i] = thirst
      
      
      //Подкрашиваем кружки которые были переставлены
      array[i].state = 'modified'
      array[(array.length - 1) - i].state = 'modified'
      await setStateWithPause(setStrArray, 1000, array) 

      
      //Подкрашиваем кружки которые будут переставляться на следующей итерации
      if ((i+1) < half) {
        array[i+1].state = 'changing'
        array[(array.length - 1) - (i+1)].state = 'changing'
        await setStateWithPause(setStrArray, 1000, array) 
      }
    }

  //Подкрашиваем кружки в итоговом массиве
  let result = array.map(item => {
    item.state = 'default'
    return item
  })
  
  // Рендерим итоговый массив
  setStateWithPause(setStrArray, 1000, result)
}