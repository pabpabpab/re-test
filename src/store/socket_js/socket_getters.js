export default {
  /* eslint-disable */
  socketMessage: (state) => {
    return { ...state.socket.message };
  },
  socketConnected: (state) => state.socket.isConnected,
  socketReconnectError: (state) => state.socket.reconnectError,
};
