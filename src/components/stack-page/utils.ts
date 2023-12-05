import { ElementStates } from "../../types/element-states"
import { StackObjectType } from "../../types/types"
import { setStateWithPause, pause } from "../../utils/utils"


export const push = async(item: string, stack: StackObjectType[], setStack: React.Dispatch<React.SetStateAction<StackObjectType[]>>) => {
  // если поле ввода пустое ничего не добавляем в stack
  if(item.length === 0) {
    return
  }

  let newStack = stack
  
  //  убираем маркер head у предыдущих элементов stack, если таковые есть
  if(newStack.length > 0) {
    newStack = newStack.map((item, index) => {
      return {...item, head: null}
    })
    setStack(newStack)
  }
  
  // добавляем в stack новый элемент и на короткое время изменяем цвет нового элемента
  newStack.push({value: item, state: ElementStates.Changing, head: 'top', index: stack.length})
  setStack(newStack)

  //Возвращаем новому элементу цвет default
  newStack = newStack.map((item, index, array) => {
    if(index === array.length - 1) {
      return {...item, state: ElementStates.Default}
    }
    return item
  })

  //рендерим в stack новый элемент
  await setStateWithPause(
    setStack,
    500,
    newStack
  )
}

export const pop = async(stack: StackObjectType[], setStack: React.Dispatch<React.SetStateAction<StackObjectType[]>>) => {
  // если stack пустой, то ничего не удаляем
  if(stack.length === 0) {
    return
  }

  let newStack = stack

  //  выделяем цветом элемент, который будет удален
  newStack = newStack.map((item, index, array) => {
    if(index === array.length - 1) {
      return {...item, state: ElementStates.Modified}
    }
    return item
  })
  setStack(newStack)
  
  
  // удаляем элемент
  await pause(500)

  //удаляем элемент и перемещаем указатель head на предыдущий элемент
  newStack.pop()
  newStack = newStack.map((item, index, array) => {
    if(array.length > 0 && index === array.length - 1) {
      return {...item, head: 'top'}
    }
    return item
  })

  //рендерим итоговый массив
  await setStateWithPause(
    setStack,
    500,
    newStack
  )
}