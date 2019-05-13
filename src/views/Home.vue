<template>
  <div>
    <!-- Add MuseUI navbar -->
    <mu-appbar title="Dashboard" color="blue"></mu-appbar>

    <!-- Add button -->
    <mu-button id="add-button" fab color="teal" @click="addTodo">
      <mu-icon value="add"></mu-icon>
    </mu-button>

    <!-- Add Todo component -->
    <Todo title="Any title" />

    <!-- Using data binding -->
    <Todo :title="title" />

    <!-- Conditional Rendering using v-if -->
    <Todo
      v-if="titleIf === 'Rendered as the conditional is true'"
      :title="titleIf"
    />
    <Todo v-if="false" :title="titleElse" />

    <!-- Render Todo items using v-for -->
    <Todo v-for="item in todoItems" :key="item.key" :title="item.title" />
  </div>
</template>

<script>
// @ is an alias to /src
import Todo from "@/components/Todo";

export default {
  name: "home",
  components: {
    Todo
  },
  data() {
    return {
      title: "Using data binding",
      titleIf: "Rendered as the conditional is true",
      titleElse: "Not rendered as the conditional is false",
      todoItems: [
        {
          key: 1,
          title: "Title 1"
        },
        {
          key: 2,
          title: "Title 2"
        }
      ]
    };
  },
  methods: {
    addTodo() {
      var key = 3;
      for (var item of this.todoItems) {
        if (key === item.key) {
          key++;
        }
      }
      this.todoItems.push({ key: key, title: "Title " + key });
    }
  }
};
</script>

<style scoped>
#add-button {
  /* Styling for the id add-button */
  position: fixed;
  bottom: 40px;
  right: 40px;
}
</style>
