<template>
  <van-nav-bar class="navbar" :title="title" left-arrow @click-left="onClickLeft">
    <template #left>
      <slot name="left" />
    </template>
    <template #right>
      <slot name="right">
        <van-popover
          v-model="showPopover"
          theme="dark"
          placement="bottom-end"
          trigger="click"
          :actions="menu"
          @select="onSelect"
        >
          <template #reference>
            <van-icon name="ellipsis" color="#909399" />
          </template>
        </van-popover>
      </slot>
    </template>
  </van-nav-bar>
</template>

<script>
import { NavBar, Search, Popover } from 'vant';

export default {
  name: 'Header',
  components: {
    [NavBar.name]: NavBar,
    [Search.name]: Search,
    [Popover.name]: Popover,
  },
  props: {
    title: String, // 中间标题
    menu: {
      type: Array,
      default() {
        return [
          { text: '首页', icon: 'wap-home-o', path: '/home' },
          { text: '消息', icon: 'chat-o', path: '/message' },
        ];
      },
    },
    popoverClick: {
      type: Function,
      default(action) {
        console.log(action);
        if (action.path) {
          this.$router.push(action.path);
        }
      },
    },
  },
  data() {
    return {
      showPopover: false,
    };
  },
  methods: {
    // 返回箭头
    onClickLeft() {
      this.$router.go(-1);
    },
    onSelect(action) {
      this.popoverClick(action);
      // console.log(action);
      // this.$router.push(action.path);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar{
  background: #FFF;
  ::v-deep .van-nav-bar__text {
    color: #FFF;
    font-weight: bold;
    font-size: 14px;
  }
  ::v-deep .van-search {
    padding: 0;
    .van-cell {
      padding: 3px;
    }
  }
}
::v-deep .van-icon-arrow-left {
  color: #666;
  font-size: 20px;
}
.van-icon{
  font-size: 24px;
}
</style>
<style lang="scss">
.van-popover__action {
  width: auto;
}
</style>
