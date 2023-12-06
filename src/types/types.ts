import { ElementStates } from "./element-states"

// string
export type StringObject = {
  value: string
  state?: string
}

export type setStrArrayArgumentType = StringObject[]

//fibonacci
export type FibonacciObjectType = {
  value?: string
  index?: number
}

export type setNumArrayArgumentType = FibonacciObjectType[]

//sorting
export type SortingObjectType = {
  index: number
  state: ElementStates
}

export type setArrayArgumentType = SortingObjectType[]

//stack
export type StackObjectType = {
  value: string,
  state?: ElementStates | undefined,
  head?: string | null,
  index?: number
}

export type setStackArgumentType = StackObjectType[]

//queue
// export type QueueObjectType = {
//   value: string,
//   state?: ElementStates | undefined,
//   index?: number,
//   head?: string,
//   tail?: string,
// }

// export type setQueueArgumentType = QueueObjectType[]


