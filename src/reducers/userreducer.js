import { MARK_NOTIFICATIONS_READ } from '.././actions/types.js';

const initialState = {
  notifications: []
}

export default function(state = initialState, action) {
  switch (action.type) {
      case MARK_NOTIFICATIONS_READ:
        state.notification.forEach(not => not.read = true);
        return {
          ...state
        }
           default:
            return state;
       }
}