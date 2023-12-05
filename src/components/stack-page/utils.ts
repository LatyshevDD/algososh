import { ElementStates } from "../../types/element-states"
import { StackObjectType } from "../../types/types"
import { setStateWithPause } from "../../utils/utils"


export const push = async(item: string, stack: StackObjectType[], setStack: React.Dispatch<React.SetStateAction<StackObjectType[]>>) => {
  
  let newStack = stack
  
  //  убираем маркер head у предыдущих элементов stack
  if(newStack.length > 0) {
    newStack = newStack.map((item, index) => {
      return {...item, head: null}
    })
    setStack(newStack)
  }
  
  // добавляем в stack новый элемент на короткое время изменяем цвет нового элемента
  newStack.push({value: item, state: ElementStates.Changing, head: 'top', index: stack.length})
  setStack(newStack)

  //Возвращаем новому элементу цвет default
  newStack = newStack.map((item, index, array) => {
    if(index === array.length - 1) {
      return {...item, state: ElementStates.Default}
    }
    return item
  })

  //добавляем в stack новый элемент
  await setStateWithPause(
    setStack,
    500,
    newStack
  )
}