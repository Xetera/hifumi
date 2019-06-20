<template>
    <div class="images-search-bar">
      <BTooltip label="Search feature coming soon!" style="width: 100%;">
      <MagnifyIcon size="16" class="icon" />
      <input
        disabled
        placeholder="Search through tags, channels and users..."
        class="images-search-bar-input"
      />
      </BTooltip>
    </div>
</template>

<script>
import MagnifyIcon from "vue-material-design-icons/Magnify";
import BTooltip from "buefy/src/components/tooltip/Tooltip";
export default {
  name: "SearchBar",
  components: { BTooltip, MagnifyIcon }
};
</script>

<style scoped lang="scss">
.images-search-bar {
  padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;
  width: 100%;
  background: linear-gradient(90deg, #262727 0%, #232323 100%);
  /*background: green;*/
}
.images-search-bar-input {
  cursor: not-allowed;
  outline: none;
  color: white;
  &::placeholder {
    color: #858383;
    font-weight: 300;
  }
  font-size: 20px;
  line-height: 24px;
  width: 100%;
  margin-left: 10px;
}
</style>
