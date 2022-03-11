import { Dispatch, SetStateAction } from "react";

export const handleOnClickSearchButton = (setState: Dispatch<SetStateAction<string>>, locationInput: string) => {
  setState(locationInput);
}