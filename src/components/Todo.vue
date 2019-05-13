<template>
  <div>
    <!-- Muse-ui card component -->
    <mu-card raised>
      <mu-flex class="to-do-wrapper" justify-content="start">
        <mu-flex
          class="to-do-checkbox"
          justify-content="start"
          align-self="center"
        >
          <mu-checkbox v-model="isDone" @change="toggleDone"></mu-checkbox>
        </mu-flex>
        <mu-flex
          class="to-do-title"
          justify-content="start"
          align-self="center"
        >
          <span>Title</span>
        </mu-flex>
      </mu-flex>
    </mu-card>
  </div>
</template>

<script>
export default {
  name: "todo"
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
