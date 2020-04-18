// A separate module for managing the shared state of the game

// Objects to keep track of sockets, rooms and players
let SOCKET_LIST = {}
let ROOM_LIST = {}
let PLAYER_LIST = {}


export const storeSocket = (id, socket) => SOCKET_LIST[id] = socket
export const getSocket = id => SOCKET_LIST[id]
export const deleteSocket = id => delete SOCKET_LIST[socket.id]
