<template>
  <wrap-page>
    <div class="main_top">服务开通设置</div>
      <div v-for="(item,index) in setting" :key="index" class="setting_box">
        <div class="setting_left">
          <van-image class="setting_img" :src="item.img" />
          <span class="setting_name">{{ item.name }}</span>
        </div>
        <van-switch class="setting_right" size="22px" v-model="data[item.key]" />
      </div>
  </wrap-page>
</template>
<script>
import { WrapPage } from '@/components';
import { Switch, Image } from 'vant';

export default {
  components: {
    WrapPage,
    'van-switch': Switch,
    'van-image': Image,
  },
  data() {
    return {
      data: {
        registered: true,
        inquiry: false,
      },
      setting: [
        {
          name: '网上预约挂号',
          img: require('@/assets/img/register.png'),
          key: 'registered',
        },
        {
          name: '在线问诊服务',
          img: require('@/assets/img/onLine.png'),
          key: 'inquiry',
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.main_top {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  padding-left: 15px;
  background-color: #fff;
  border-bottom: 1px solid#ebedf0;
}
.setting_box {
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid#ebedf0;
  padding: 0 15px;
  .setting_left {
    .setting_img {
      height: 30px;
      width: 30px;
      vertical-align: top;
      margin: 10px 5px;
    }
    .setting_name {
      font-size: 14px;
      vertical-align: top;
      margin-left: 15px;
      display: inline-block;
    }
  }
  .setting_right {
    margin-top: 13px;
  }
}
</style>
