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
    <person-card
      arrowIcon
      :imgSrc="patient.headIcon"
      :name="patient.name"
      :bottomLeft="gender[patient.gender] + '，' + patient.age + '岁'"
      @click.native="goDetail"
    />
    <cell-list :list="collectionList" @cellClick="linkFn" class="cell-list"/>
    <van-cell title="重点关注">
      <template #icon>
        <van-icon class-prefix="my-icon" name="zhongdianguanzhu" color="#00B7F4" size="18"/>
      </template>
      <template>
        <van-switch v-model="follow" size="20"/>
      </template>
    </van-cell>
  </wrap-page>
</template>

<script>
import { mapGetters } from 'vuex';
import { Cell, Switch } from 'vant';
import { WrapPage, PersonCard, CellList } from '@/components';

export default {
  name: 'PatientInfo',
  components: {
    WrapPage,
    PersonCard,
    CellList,
    [Cell.name]: Cell,
    [Switch.name]: Switch,
  },
  computed: {
    ...mapGetters(['patient']),
  },
  data() {
    return {
      gender: {
        1: '男',
        2: '女',
      },
      collectionList: [
        { title: '最近就诊', name: 'lately', icon: 'icon-', color: '#7FCCFF', rightValue: '内分泌失调' },
        { title: '健康档案', name: 'archives', icon: 'ku', color: '#5EDC90' },
        { title: '随访管理', name: 'manage', icon: 'suifangguanli', color: '#FF8F1F' },
      ],
      follow: false,
    };
  },
  methods: {
    goDetail() {
      this.$router.push({ name: 'PatientDetail' });
    },
    linkFn(name) {
      console.log(name);
    },
  },
  mounted() {},
};
</script>
<style lang='scss' scoped>
.cell-list{
  margin: 10px 0;
}
.van-cell__value{
  line-height: normal;
}
.my-icon{
  margin-right: 6px;
}
.van-cell{
  padding: 10px 12px;
  display: flex;
  align-items: center;
}
::v-deep .person_info{
  border-bottom: none;
}
</style>
