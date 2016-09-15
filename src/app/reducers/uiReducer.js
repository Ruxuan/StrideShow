import * as actions from '../constants/actionNames';

const UIprojectReducer = (state, action) => {
  switch(action.type) {
    case actions.SELECT_PROJECT:
      return {
        id: state.id,
        selected: action.id==state.id
      };
    default:
      return state;
  }
};

const UIprojectGridReducer = (state, action) => {
  switch (action.type) {
    case actions.SELECT_PROJECT:
      return state.map((project) => {
        return UIprojectReducer(project, action);
      });
    default:
      return state;
  }
};

const UIactiveProjectReducer = (state, action) => {
  switch (action.type) {
    case actions.SELECT_PROJECT:
      return action.id;
    default:
      return state;
  }
};

const uiReducer = (state={}, action) => {
  switch(action.type) {
    case actions.SELECT_PROJECT:
      var newUIprojectGrid   = UIprojectGridReducer(state.UIprojectGrid, action);
      var newUIactiveProject = UIactiveProjectReducer(state.UIactiveProject, action);

      return {
        UIprojectGrid: newUIprojectGrid,
        UIactiveProject: newUIactiveProject
      };
    default:
      return state;
  }
};

export default uiReducer;
