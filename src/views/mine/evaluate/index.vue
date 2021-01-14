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
  <wrap-page class="comment-container">
    <p class="tips">最新评价（3）</p>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="(item, i) in list" :key="i">
        <template #title>
          <div class="comment">
            <img :src="item.pic" alt="">
            <div class="user-comment">
              <div class="user">
                <span>{{item.name}}</span><span class="time">{{item.date}}</span>
              </div>
              <p class="content">{{item.comment}}</p>
              <div class="rate"><span>服务评价：超极满意</span><van-rate readonly color="#FF8F1F" v-model="list[i].rate" /></div>
              <p class="diagnosis">医生诊断：{{item.diagnosis}}</p>
              <p class="cure">治疗方式：{{item.cure}}</p>
            </div>
          </div>
        </template>
      </van-cell>
    </van-list>
  </wrap-page>
</template>

<script>
import { WrapPage } from '@/components';
import { Rate, List, Cell } from 'vant';

export default {
  name: 'Evaluate',
  components: {
    [Rate.name]: Rate,
    [List.name]: List,
    [Cell.name]: Cell,
    WrapPage,
  },
  data() {
    return {
      loading: true,
      finished: true,
      list: [
        {
          name: '白雪冰冰',
          date: '2020-07-12',
          pic: require('../../../assets/img/avatar.jpg'),
          comment: '非常耐心！很专业，态度也很好哦！',
          rate: 5,
          diagnosis: '消化不良',
          cure: '药物',
        },
        {
          name: '飞天小猪猪',
          date: '2020-07-12',
          pic: require('../../../assets/img/avatar.jpg'),
          comment: '医生好有耐心，给的建议很好',
          rate: 5,
          diagnosis: '扁桃体发炎',
          cure: '药物',
        },
      ],
      rate: 5,
    };
  },
  methods: {
    onLoad() {},
  },
  mounted() {},
};
</script>
<style lang='scss' scoped>
.comment-container{
  .tips{
    margin: 0;
    font-size: 14px;
    color: $light-black2;
    background: #fff;
    padding: 16px 16px 0;
  }
  .comment{
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid #E9E9E9;
    &:last-child{
      border-bottom: none;
    }
    img{
      border-radius: 50%;
      margin-right: 10px;
      height: 18px;
      width: 18px;
    }
    .user-comment{
      width: 100%;
      font-size: 12px;
      color: #606266;
      >p{
        margin: 0;
      }
    }
    .user{
      display: flex;
      justify-content: space-between;
      .time{
        color: #909399;
      }
    }
    .content{
      color: #000;
      font-size: 14px;
      font-weight: bold;
    }
    .rate{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .van-list{
    flex: 1;
    overflow: auto;
  }
  ::v-deep .van-cell{
    padding: 0 15px;
  }
  .van-rate{
    font-size: 14px;
  }
}
</style>
