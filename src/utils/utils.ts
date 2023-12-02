import { setStrArrayArgumentType, setNumArrayArgumentType } from "../types/types";

export const pause = async (ms: number) => {
  return new Promise((res) => setTimeout(res, ms));
}

export const setStateWithPause = async (
  setState: React.Dispatch<React.SetStateAction<any>>,
  delay: number,
  argument: setStrArrayArgumentType | setNumArrayArgumentType
) => {
  await pause(delay)
  setState([...argument])
}

export const randomArr = () => {
  
}