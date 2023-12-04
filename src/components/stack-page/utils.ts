import { ElementStates } from "../../types/element-states"
import { StackObjectType } from "../../types/types"


export const push = async(item: string, stack: StackObjectType[], setStack: React.Dispatch<React.SetStateAction<StackObjectType[]>>) => {
  
  let newStack = stack
  
  if(newStack.length > 0) {
    newStack = newStack.map((item, index) => {
      return {...item, head: null}
    })
    setStack(newStack)
  }
  setStack([...newStack, {value: item, state: ElementStates.Default, head: 'top', index: stack.length}])
}