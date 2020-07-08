<template>
  <div>
    <form @submit.prevent="addTodo">
      <input
        type="text"
        v-model="formData.title"
        name="title"
        placeholder="Add Todo..."
      />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import { uuid } from "vue-uuid";
import axios from "axios";

export default {
  name: "AddTodo",
  data() {
    return {
      formData: {
        title: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions(["addTask"]),
    addTodo() {
      const { title, completed } = this.formData;
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(response => this.addTask(response.data))
        .catch(error => console.log(error));

      //updating state directly without api call

      // const newTodo = {
      // 	id: this.uuid,
      // 	title: this.title,
      // 	completed: false,
      // };
      // console.log(newTodo);
      // // Send up to store
      // this.addTask(newTodo);

      this.title = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  margin-top: 2px;
}

input[type="text"] {
  flex: 10;
  padding: 5px;
  height: 4em;
}

input[type="submit"] {
  flex: 2;
}
</style>
