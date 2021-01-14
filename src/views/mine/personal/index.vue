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
    <template #headerRight>
      <van-icon name="success" color="#1678FF"/>
    </template>
    <van-cell-group>
      <van-cell title="头像" is-link>
        <template>
          <img src="../../../assets/img/avatar.png" class="avatar"/>
        </template>
      </van-cell>
      <van-cell title="姓名" value="陈剑秋" />
      <van-cell title="职称" value="主任医师" />
      <van-cell title="科室" value="妇科" />
    </van-cell-group>
    <van-field v-model="goodAt" rows="3" label="擅长" type="textarea" placeholder="请输入" />
  </wrap-page>
</template>

<script>
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
  data() {
    return {
      goodAt: '擅处理病理产科问题，处理异常产程及各种病理产科状况，可进行孕前、产前咨询，胎儿异常的早期诊断等。',
    };
  },
  methods: {
  },
  mounted() {},
};
</script>
<style lang='scss' scoped>
.avatar{
  width: 30px;
  height: 30px;
}
.van-cell-group{
  margin: 10px 0;
}
.van-cell__value{
  line-height: normal;
}
.van-cell__right-icon{
  position: relative;
  top: 4px;
}
.van-icon{
  font-size: 24px;
}
::v-deep .van-field__label{
  width: 40px;
}
</style>
