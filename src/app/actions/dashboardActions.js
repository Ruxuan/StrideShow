import * as names from '../constants/actionNames';

export const newPresentation = () => {
  return {
    type: names.NEW_PRESENTATION
  }
}

export const deletePresentation = (id) => {
  return {
    type: names.DELETE_PRESENTATION
  }
}

export const editPresentation = (id) => {
  return {
    type: names.EDIT_PRESENTATION
  }
}

export const playPresentation = (id) => {
  return {
    type: names.PLAY_PRESENTATION
  }
}

export const selectPresentation = (id) => {
  return {
    type: names.SELECT_PRESENTATION
  }
}
