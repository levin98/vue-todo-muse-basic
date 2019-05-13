<template>
  <div>
    <!-- Add MuseUI navbar -->
    <mu-appbar title="Dashboard" color="blue"></mu-appbar>

    <!-- Add button -->
    <mu-button id="add-button" fab color="teal">
      <mu-icon value="add"></mu-icon>
    </mu-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
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
