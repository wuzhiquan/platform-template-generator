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
  <wrap-page :headerTitle="patient.name">
    <template #headerRight>
      <van-icon name="success" color="#1678FF"/>
    </template>
    <van-cell title="姓名" :value="patient.name" />
    <van-cell title="性别" :value="+patient.gender === 1 ? '男' : '女'" />
    <van-cell title="年龄" :value="patient.age" />
    <van-cell title="证件类型" value="身份证" />
    <van-cell title="证件号码" value="441781**********12" />
    <van-cell title="手机号码" value="134****5678" />
    <van-field v-model="remark" rows="2" label="备注" type="textarea" placeholder="请输入备注" />
  </wrap-page>
</template>

<script>
import { mapGetters } from 'vuex';
import { WrapPage } from '@/components';
import { Cell, CellGroup, Field } from 'vant';

export default {
  name: 'Personal',
  components: {
    WrapPage,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
  },
  computed: {
    ...mapGetters(['patient']),
  },
  data() {
    return {
      remark: '',
    };
  },
  methods: {
  },
  mounted() {},
};
</script>
<style lang='scss' scoped>
.van-field{
  margin-top: 10px;
}
.van-icon{
  font-size: 24px;
}
::v-deep .van-field__label{
  width: 40px;
}
</style>
