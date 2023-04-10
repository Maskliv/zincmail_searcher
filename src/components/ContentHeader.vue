<template>
  <div
    className="bg-dark-500 flex flex-row items-center py-6 px-8 mb-2 ml-2 mr-2 mt-2 rounded-3xl"
  >
    <font-awesome-icon
      :icon="['fass', 'magnifying-glass']"
      style="color: #d5d6df"
      size="xl"
    />
    <input
      placeholder="Search..."
      className="w-11/12 mr-auto ml-4 bg-transparent outline-none text-light-300"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContentHeader",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
