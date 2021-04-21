const addOneItem = (state, todoItem) => {
  const obj = { completed: false, item: todoItem };
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
};

const removeOneItem = (state, payload) => {
  const { todoItem, idx } = payload;

  localStorage.removeItem(todoItem.item);
  state.todoItems.splice(idx, 1);
};

const toggleOneItem = (state, payload) => {
  const { todoItem, idx } = payload;
  state.todoItems[idx].completed = !state.todoItems[idx].completed;
  localStorage.removeItem(todoItem.item);
  localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
};

const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };
