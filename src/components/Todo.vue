<template>
  <div>
    <!-- Muse-ui card component -->
    <mu-card raised>
      <mu-flex class="to-do-wrapper" justify-content="start">
        <!-- Muse-ui checkbox component -->
        <mu-flex
          class="to-do-checkbox"
          justify-content="start"
          align-self="center"
        >
          <mu-checkbox v-model="isDone" value="done"></mu-checkbox>
        </mu-flex>
        <mu-flex
          class="to-do-title"
          justify-content="start"
          align-self="center"
        >
          <span>{{ title }}</span>
        </mu-flex>
      </mu-flex>
    </mu-card>
  </div>
</template>

<script>
export default {
  name: "todo",
  props: {
    title: String
  },
  // Data for checkbox
  data() {
    return {
      isDone: []
    };
  }
};
</script>

<style scoped>
.mu-card {
  margin: 20px;
  height: 50px;
}

.to-do-wrapper {
  width: 100%;
  height: 50px;
}

.to-do-checkbox {
  margin: 0px 20px;
}

.to-do-title {
  margin: 0px 20px;
}
</style>
