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


