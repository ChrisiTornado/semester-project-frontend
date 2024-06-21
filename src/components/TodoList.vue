<template>
  <ul>
    <li>
      <TodoInput @new-todo="post" />
    </li>
    <li v-for="(todo, i) in sortedTodos" :key="todo.id">
      <Todo :todo="todo"
            @done="done"
            @undone="undone"
      />
    </li>
  </ul>
</template>

<script>
import Todo from "@/components/Todo.vue";
import TodoInput from "@/components/TodoInput.vue";
import { createTodo, doneTodo, readTodos, undoneTodo } from "@/api";

export default {
  name: "TodoList",
  components: { TodoInput, Todo },
  data() {
    return {
      todos: []
    };
  },
  computed: {
    sortedTodos() {
      // Sort todos so that undone todos come first
      return this.todos.sort((a, b) => {
        if (a.done && !b.done) return 1; // b (unfinished) comes before a (finished)
        if (!a.done && b.done) return -1; // a (unfinished) comes before b (finished)
        return 0; // Same status or both done/undone
      });
    }
  },
  methods: {
    async getAll() {
      this.todos = await readTodos();
    },
    async post(name) {
      var todo = await createTodo(name);
      this.todos.push(todo);
    },
    async done(id) {
      var todo = await doneTodo(id);
      this.update(id, todo);
    },
    async undone(id) {
      var todo = await undoneTodo(id);
      this.update(id, todo);
    },
    update(id, updatedTodo) {
      // Update the specific todo in the list
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1, updatedTodo);
      }
      // Sort the todos after updating
      this.todos = this.sortedTodos;
    }
  },
  created() {
    this.getAll();
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>

