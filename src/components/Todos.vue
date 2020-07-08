<template>
  <div>
    <div v-if="!showAll" class="todos-container">
      <div v-for="Todo in incompleteTasks" :key="Todo.id">
        <TodoItem :todo="Todo" />
      </div>
    </div>
    <div v-else class="todos-container">
      <div v-for="Todo in completedTasks" :key="Todo.id">
        <TodoItem :todo="Todo" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
import { mapState, mapGetters } from "vuex";

export default {
  name: "Todos",
  data() {
    return {
      // route: this.$route,
    };
  },
  computed: {
    ...mapState(["Todos"]),
    ...mapGetters(["completedTasks", "incompleteTasks"]),
    showAll() {
      return this.$route.path === "/incomplete";
    }
  },
  components: { TodoItem }
};
</script>

<style scoped></style>
