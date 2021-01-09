<template>
   <div class="flex">
    <van-icon :name="show?'star-o':'star'"
    @click="show = !show"
    :color="show?'black':'yellow'"
    class="flex-icon"
    size="20px"/>
    <p class="flex-content">{{show?'收藏':'已收藏' }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>
<style lang="scss" scoped>
.flex {
  position: absolute;
  right: 20px;
  width: 40PX;
  .flex-icon {
    left: 10px;
  }
  .flex-content {
    margin: 0;
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    color: #666666;
    text-align: center;
  }
}
</style>
