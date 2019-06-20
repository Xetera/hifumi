<template>
  <div>
    <Label>Sort by</Label>
    <Dropdown :options="options" />
  </div>
</template>

<script>
import Label from "@/components/dashboard/Label";
import Dropdown from "../../Dropdown";
export default {
  name: "Sort",
  components: { Dropdown, Label },
  data() {
    return {
      options: ["Date", "Stars"]
    };
  }
};
</script>

<style scoped></style>
