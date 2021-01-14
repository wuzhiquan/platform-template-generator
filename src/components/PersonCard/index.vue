<template>
  <div class="person_card" @click="cardClick">
    <van-badge :content="badge" max="99">
      <van-image class="person_img" :round="round" :src="imgSrc" />
    </van-badge>
    <div class="person_info">
      <div class="person_info_top">
        <span class="name">{{ name }}</span>
        <span class="state_content" v-if="stateContent">{{
          stateContent
        }}</span>
        <span class="top_right" v-if="topRight">{{ topRight }}</span>
      </div>
      <div class="person_info_bottom">
        <span class="bottom_left">{{ bottomLeft }}</span>
        <span class="bottom_right" v-if="bottomRight">{{ bottomRight }}</span>
      </div>
    </div>
    <van-icon name="arrow" v-if="arrowIcon" color="#969799"/>
  </div>
</template>

<script>
import { Badge, Image } from 'vant';

export default {
  components: {
    'van-image': Image,
    'van-badge': Badge,
  },
  props: {
    imgSrc: String,
    name: String,
    stateContent: String,
    bottomLeft: String,
    bottomRight: String,
    topRight: String,
    badge: Number,
    round: {
      type: Boolean,
      default: true,
    },
    arrowIcon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    cardClick() {
      this.$emit('cardClick');
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang='scss' scoped>
.person_card {
  background-color: #fff;
  display: flex;
  padding-left: 12px;
  .van-icon{
    display: flex;
    align-items: center;
    padding-right: 12px;
    font-size: 16px;
  }
}
.person_img {
  margin-top: 16px;
  height: 40px;
  width: 40px;
  margin-right: 12px;
}
.person_info {
  padding: 16px 12px 16px 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #ebedf0;
  font-size: 14px;
  .person_info_top {
    .state_content {
      font-size: 12px;
      padding: 0 5px;
      margin-left: 12px;
      border-radius: 3px;
      color: $health-color;
      border: 1px solid $health-color;
      height: 16px;
      line-height: 16px;
      display: inline-block;
    }
    .top_right {
      float: right;
      color: #999;
    }
  }
  .person_info_bottom {
    color: #999;
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    font-size: 12px;
    .bottom_left {
      max-width: calc(100vw - 36px - 40px);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
::v-deep .van-badge--fixed {
  top: 16px;
  right: 12px;
}
</style>
