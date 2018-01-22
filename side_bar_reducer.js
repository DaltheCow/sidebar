import { SIDEBAR_TOGGLED, WINDOW_RESIZE, COMPONENT_MOUNT } from '../actions/side_bar_actions';

const defaultState = {
  
  //state determines if it is currently being displayed or not
  sidebarState: false,

  //response determines if sidebar should open/close when screen is widened
  sidebarResponse: true,

  //types are flex and overlay
  //flex sits next to main content, overlay lies over content like a modal
  sidebarType: 'flex',
};


//if you are reading this file I encourage you to play around with the sidebar on blutube.herokuapp.com
//and see how the sidebar behaves. It has strange and complex state management
const SideBarReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SIDEBAR_TOGGLED: {
      if (!state.sidebarState) {
        if (action.windowWidth === 'overlay') {
          const newState = { sidebarState: true, sidebarType: 'overlay' };
          return Object.assign({}, state, newState);
        } else {
          return { sidebarState: true, sidebarType: 'flex', sidebarResponse: true };
        }
      } else {
        if (action.windowWidth === 'overlay') {
          const newState = { sidebarState: false, sidebarType: 'flex' };
          return Object.assign({}, state, newState);
        } else {
          const newState = { sidebarState: false, sidebarResponse: false };
          return Object.assign({}, state, newState);
        }
      }
    }
    case WINDOW_RESIZE: {
      if (action.windowDirection === 'widen') {
        if (state.sidebarType === 'overlay') {
          return Object.assign({}, state, { sidebarType: 'flex', sidebarResponse: true });
        }
        else if (state.sidebarResponse) {
          return Object.assign({}, state, { sidebarState: true });
        }
      } else if (state.sidebarType === 'flex') {
        return Object.assign({}, state, { sidebarState: false });
      }
      return state;
    }
    case COMPONENT_MOUNT: {
      //when video watching page or video upload form mount turn off sidebar
      const newSideBarState = !['video_show', 'video_form'].includes(action.component) && window.innerWidth >= 1277;
      return Object.assign({}, state, { sidebarState: newSideBarState });
    }
    default: return state;
  }
};

export default SideBarReducer;
