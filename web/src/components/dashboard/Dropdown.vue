<template>
  <label>
    <select class="dropdown">
      <option
        v-for="option in options"
        :key="option"
        class="dropdown-selection"
      >
        {{ option }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    options: Array,
    placeholder: String
  }
};
</script>

<style scoped lang="scss">
.dropdown-selection {
  border: 0 !important;
  background: #36393f;
  color: white;
}
.dropdown {
}
</style>
