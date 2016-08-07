import * as socketActions from './socketActions';
import * as mobileActions from './mobileActions';
import * as internetActions from './internetActions';

// Combine actions
const networkActions = {
  socketActions,
  mobileActions,
  internetActions
};

export default networkActions;
