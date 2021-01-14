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
  <wrap-page isIndex>
    <div class="patient">
      <header-search :title="'患者'"/>
      <ul class="quick">
        <li v-for="item in quickList" :key="item.label" @click="openQuick(item.value)">
          <div :style="`background: ${item.bg};`" class="icon">
            <van-icon class-prefix="my-icon" :name="item.icon" />
          </div>
          <p class="text">{{item.label}}</p>
        </li>
      </ul>
      <van-cell-group class="cell-group">
        <van-cell title="患者分组" value="管理" is-link @click="$router.push('/patient/manage')">
          <template #icon>
            <span class="cell-icon" style="background: #8AD0FF;">
              <van-icon class-prefix="my-icon" name="yonghuzu" />
            </span>
          </template>
        </van-cell>
        <van-cell v-for="(item, index) in groupList" :key="index" is-link @click="$router.push('/home/service')">
          <template #title>
            {{item.name}}<span class="tips">（{{item.num}}）</span>
          </template>
          <template v-if="item.hasDot">
            <em class="dot"/>
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </wrap-page>
</template>

<script>
import { Cell, CellGroup } from 'vant';
import { WrapPage, HeaderSearch } from '@/components';

export default {
  name: 'Home',
  components: {
    WrapPage,
    HeaderSearch,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
  },
  data() {
    return {
      quickList: [
        { label: '门诊患者', value: 'order', icon: 'menzhenhuanzhe', bg: '#5EDC90' },
        { label: '住院患者', value: 'service', icon: 'zhuyuanhuanzhe', bg: '#8AD0FF' },
        { label: '转诊患者', value: 'setting', icon: 'zhuanzhenhuanzhe', bg: '#FFB85D' },
        { label: '重点关注', value: 'setting', icon: 'zhongdianguanzhu', bg: '#B4B6FF' },
      ],
      groupList: [
        { name: '未分组', hasDot: true, num: 6 },
        { name: '亲戚朋友', hasDot: false, num: 12 },
        { name: '内分泌失调', hasDot: false, num: 17 },
        { name: '多囊卵巢', hasDot: false, num: 28 },
        { name: '二胎', hasDot: false, num: 19 },
      ],
    };
  },
  mounted() {},
  methods: {
    openQuick(val) {
      console.log(val);
      this.$router.push('/home/service');
    },
  },
};
</script>
<style lang='scss' scoped>
.patient{
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  .quick{
    display: grid;
    background: #fff;
    padding: 20px 0 25px;
    grid-template-columns: repeat(4, 25%);
    li{
      font-size: 12px;
      color: $light-black;
      display: flex;
      flex-direction: column;
      align-items: center;
      .my-icon{
        color: #fff;
        font-size: 26px;
      }
      .icon{
        height: 48px;
        width: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }
      .text{
        margin: 12px 0 0 0;
      }
    }
  }
  .cell-group{
    margin-top: 10px;
    flex: 1;
    overflow: auto;
    .cell-icon{
      color: #fff;
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      text-align: center;
      line-height: normal;
      margin: 2px 8px 0 0;
      .my-icon{
        font-size: 14px;
        width: 14px;
        height: 14px;
        position: relative;
        top: 1px;
      }
    }
    .dot{
      width: 7px;
      height: 7px;
      border-radius: 50%;;
      background: $danger-color;
      display: inline-block;
      position: relative;
      top: -1px;
      margin-right: 2px;
    }
    .tips{
      font-size: 12px;
      color: $light-black2;
    }
  }
}
</style>
