<template>
  <wrap-page>
    <div class="success">
      <van-icon name="checked" />
      <div class="first_line">已发送，审核中</div>
      <div class="second_line">您的处方已发送，需审核后才能发送给患者。</div>
      <van-button @click="onClick">我知道了</van-button>
    </div>
  </wrap-page>
</template>
<script>
import { WrapPage } from '@/components';
import { Button } from 'vant';

export default {
  components: {
    'van-button': Button,
    WrapPage,
  },
  data() {
    return {};
  },
  methods: {
    onClick() {
      this.$router.push({
        name: 'ServiceDetails',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.success {
  text-align: center;
  .van-icon {
    margin-top: 60px;
    font-size: 72px;
    color: rgb(9 187 7);
  }
  .first_line {
    margin-top: 15px;
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }
  .second_line {
    margin-top: 10px;
    font-size: 14px;
    color: #999;
  }
  .van-button {
    margin-top: 30px;
    width: 230px;
    background-color: #999;
    color: #fff;
    font-size: 16px;
  }
}
</style>
