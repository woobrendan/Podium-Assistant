import { ResultInterface } from "../models/result_models";

const resultBuilder = (result: ResultInterface) => {
  const { firstPlace, secondPlace, thirdPlace } = result;
  return {
    ...result,
    firstPlace: { ...firstPlace },
    ...(secondPlace ? { secondPlace: { ...secondPlace } } : {}),
    ...(thirdPlace ? { thirdPlace: { ...thirdPlace } } : {}),
  };
};

export { resultBuilder };
