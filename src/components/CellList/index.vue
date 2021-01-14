<!--
警告：
  本源代码所有权归广州慧扬健康科技有限公司(下称“本公司”)所有，已采取保密措施加以保护。  受《中华人民共和国刑法》、
  《反不正当竞争法》和《国家工商行政管理局关于禁止侵犯商业秘密行为的若干规定》等相关法律法规的保护。未经本公司书面
  许可，任何人披露、使用或者允许他人使用本源代码，必将受到相关法律的严厉惩罚。
Warning:
  The ownership of this source code belongs to Guangzhou Wisefly Technology Co., Ltd.(hereinafter referred to as "the company"),
  which is protected by the criminal law of the People's Republic of China, the anti unfair competition law and the
  provisions of the State Administration for Industry and Commerce on prohibiting the infringement of business secrets, etc.
  Without the written permission of the company, anyone who discloses, uses or allows others to use this source code
  will be severely punished by the relevant laws.
-->
<template>
  <div class="menu">
    <van-cell  v-for="i in list" :key="i.name" :title="i.title" :value="i.rightValue || ''" is-link @click="$emit('cellClick', i.name)">
      <template #icon>
        <van-icon class-prefix="my-icon" :name="i.icon" :color="i.color"/>
      </template>
    </van-cell>
  </div>
</template>

<script>
import { Cell } from 'vant';

export default {
  name: 'CellList',
  components: {
    [Cell.name]: Cell,
  },
  props: {
    list: Array,
  },
  data() {
    return {
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style lang='scss' scoped>
.menu{
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #fff;
}
.my-icon{
  margin-right: 6px;
  font-size: 18px;
}
.van-cell{
  padding: 12px;
  display: flex;
  align-items: center;
}
</style>
