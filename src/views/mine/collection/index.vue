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
  <wrap-page>
    <cell-list :list="collectionList" @cellClick="linkFn"/>
  </wrap-page>
</template>

<script>
import { CellList, WrapPage } from '@/components';

export default {
  name: '',
  components: {
    CellList,
    WrapPage,
  },
  data() {
    return {
      collectionList: [
        // { title: '病历', name: 'medicalRecord', icon: 'jiuzhenren', color: '#00BFD0', rightValue: 15 },
        { title: '医案库', name: 'article', icon: 'yianku', color: '#5EDC90', rightValue: 9 },
        { title: '药品库', name: 'drugs', icon: 'yaopinku', color: '#7FCCFF', rightValue: 6 },
        // { title: '其他', name: 'other', icon: 'kanzhenjilu', color: '#00B578', rightValue: 0 },
      ],
    };
  },
  methods: {
    linkFn(name) {
      console.log(name);
      if (name === 'article') {
        this.$router.push('/home/recordsList');
      } else if (name === 'drugs') {
        this.$router.push('/home/medicineList');
      }
    },
  },
  mounted() {},
};
</script>
<style lang='scss' scoped>
</style>
