import { setStrArrayArgumentType } from "../types/types";

export const pause = async (ms: number) => {
  return new Promise((res) => setTimeout(res, ms));
}

export const setStateWithPause = async (
  setState: React.Dispatch<React.SetStateAction<setStrArrayArgumentType>>,
  delay: number,
  argument: setStrArrayArgumentType
) => {
  await pause(delay)
  setState([...argument])
}