const uuid = require('uuid');

class Task {
  constructor({
    id = uuid(),
    title = 'Task',
    order = 'Order',
    description = 'Description',
    userId = 'userId',
    boardId = 'boardId',
    columnId = 'columnId'
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
