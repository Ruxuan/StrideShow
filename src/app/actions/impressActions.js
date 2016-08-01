import * as names from '../constants/actionNames';

export const impressNext = () => {
  return {
    type: names.IMPRESS_NEXT
  }
}

export const impressPrev = () => {
  return {
    type: names.IMPRESS_PREV
  }
}

export const impressGoto = () => {
  return {
    type: names.IMPRESS_GOTO
  }
}
