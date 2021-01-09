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
    <div class="message">
      <header-search :title="'消息'" message/>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="~ 没有更多了~"
          @load="onLoad"
        >
          <van-cell v-for="(item, i) in list" :key="i">
            <person-card
              :class="`message-person message-person${i+1}`"
              :imgSrc="item.headIcon"
              :name="item.spanTitle"
              :stateContent="item.isConsultation ? '问诊' : ''"
              :bottomLeft="item.spanMessage"
              :topRight="item.spanTime"
              :badge="item.unread !== 0 ? item.unread : null"
              :round="false"
              @click.native="cardClick(item)"
            />
          </van-cell>
        </van-list>
      </van-pull-refresh>
    </div>
  </wrap-page>
</template>

<script>
import { List, Cell, PullRefresh, Toast } from 'vant';
import { WrapPage, HeaderSearch, PersonCard } from '@/components';

export default {
  name: 'Home',
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    [PullRefresh.name]: PullRefresh,
    WrapPage,
    HeaderSearch,
    PersonCard,
  },
  data() {
    return {
      list: [
        {
          headIcon: require('../../assets/img/followUp.png'),
          spanTitle: '随访提醒',
          spanTime: '上午 11:45',
          spanMessage: '您近期有2个随访任务',
          unread: 2,
          isConsultation: false,
        },
        {
          headIcon: require('../../assets/img/report.png'),
          spanTitle: '检验报告已发布',
          spanTime: '上午 11:42',
          spanMessage: '患者【袁春红】检验项目【血常规四项】已...',
          unread: 0,
          isConsultation: false,
        },
        {
          headIcon: require('../../assets/img/zhongyi.png'),
          spanTitle: '开药提醒',
          spanTime: '上午 11:45',
          spanMessage: '您有一份按方开药申请，请尽快处理',
          unread: 2,
          isConsultation: false,
        },
        {
          headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
          spanTitle: '刘晓月',
          spanTime: '上午 11:41',
          spanMessage: '多谢医生',
          unread: 100,
          isConsultation: true,
        },
        {
          headIcon: 'https://img.yzcdn.cn/vant/cat.jpeg',
          spanTitle: '张桂花',
          spanTime: '上午 10:21',
          spanMessage: '好的好的，已收到',
          unread: 0,
          isConsultation: true,
        },
      ],
      isLoading: false,
      loading: false,
      finished: false,
    };
  },
  mounted() {},
  methods: {
    cardClick(item) {
      if (item.isConsultation) {
        this.$router.push({
          name: 'ServiceDetails',
          query: {
            contact: item.spanTitle,
          },
        });
      }
      if (item.spanTitle === '随访提醒') {
        this.$router.push('/home/visitor');
      }
      if (item.spanTitle === '开药提醒') {
        this.$router.push('/message/prescription');
      }
    },
    onLoad() {
      setTimeout(() => {
        this.loading = false;
        this.finished = true;
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
      }, 500);
    },
  },
};
</script>
<style lang='scss' scoped>
$green: #15D044;
.message {
  height: calc(100vh - 50px);
  @include flexCol();
  .van-pull-refresh {
    flex: 1;
    overflow: auto;
  }
  .van-cell {
    padding: 0;
    ::v-deep .message-person{
      line-height: normal;
      .person_img{
        width: 54px;
        height: 54px;
        margin-bottom: 11px;
      }
      .person_info_top{
        .name{
          font-weight: bold;
          color: $light-black;
          font-size: 18px;
          line-height: 21px;
        }
      }
      .person_info_bottom{
        margin-top: 10px;
        .bottom_left{
          max-width: calc(100vw - 24px - 66px);
        }
      }
    }
    ::v-deep .message-person1,
    ::v-deep .message-person2,
    ::v-deep .message-person3{
      .person_img{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        img{
          width: 40px;
          height: 40px;
        }
      }
    }
    ::v-deep .message-person1{
      .person_img{
        background: #8AD0FF;
      }
    }
    ::v-deep .message-person2{
      .person_img{
        background: #5EDC90;
      }
    }
    ::v-deep .message-person3{
      .person_img{
        background: #B4B6FF;
      }
    }
  }
}
</style>
