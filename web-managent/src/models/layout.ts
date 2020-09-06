export default {
  namespace: 'layout',
  state: {
    collapsed: false,
    isRemovedSidebar: false,
    rem: 0,
    clientHeight: 0
  },
  reducers: {
    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },
    toggleSidebar(state, { payload }) {
      return {
        ...state,
        collapsed: !payload.collapsed,
      };
    },
    resize(state, { payload }) {
      return {
        ...state,
        rem: payload.rem,
        clientHeight: payload.clientHeight,
      };
    },
    removeSidebar(state) {
      return {
        ...state,
        isRemovedSidebar: true,
      };
    },
  },
  effects: {},
};
