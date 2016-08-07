import * as names from '../constants/actionNames';

export const newProject = () => {
  return {
    type: names.NEW_PROJECT
  }
};

export const deleteProject = (id) => {
  return {
    type: names.DELETE_PROJECT
  }
};

export const editProject = (id) => {
  return {
    type: names.EDIT_PROJECT
  }
};

export const playProject = (id) => {
  return {
    type: names.PLAY_PROJECT
  }
};

export const shareProject = (id) => {
  return {
    type: names.SHARE_PROJECT
  }
};

export const selectProject = (id) => {
  return {
    type: names.SELECT_PROJECT,
    id: id
  }
};
