<template>
  <div id="app">
    <TodoHeader />
    <TodoInput />
    <TodoList />
    <TodoFooter />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoFooter from './components/TodoFooter';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

export default {
  name: 'App',
  components: { TodoHeader, TodoFooter, TodoList, TodoInput },
};
</script>

<style>
body {
  text-align: center;
  background: #f6f6f6;
}
input {
  box-sizing: border-box;
  padding: 0.5rem;
  width: 100%;
  border-style: none;
}
button {
  border-style: none;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
