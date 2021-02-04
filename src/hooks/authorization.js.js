// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

async function isBoardOwner(context) {
  // Note, get and update will deliver data which will have boardID inside
  let  boardId = context.params.query.boardId || context.data.boardId;

  /*
  console.log('DEBUG context has query?', context.params.query != null);
  console.log('DEBUG: - query: ', context.params.query);
  console.log('DEBUG context has data?', context.data != null);
  console.log('DEBUG: - data: ', context.data);
  console.log('DEBUG - BoardId:', boardId);
  */

  if (!boardId) {
    console.log('DEBUG: No BoardId');
    const lists = context.app.service('lists');
    console.log('lists');
    return context;  // FIX LATER
  }
  const { id } = context.params.user;

  const boards = context.app.service('boards');
  const board = await boards.get(boardId);

  console.log(board);

  // When pulling a list, if the given use isn't an owner, it can't be pulled
  if (board) {
    if (board.ownerId == id) {
      console.log('Correct Board owner');
      return context;
    } else {
      console.log('Incorrect Board owner');
      return Promise.reject(new Error('Un-Authorized'));
    }
  }
  return context; // Do we need this still ?
}

module.exports = { 
  isBoardOwner
};
