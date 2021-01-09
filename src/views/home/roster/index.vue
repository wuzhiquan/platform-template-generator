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
    <div class="time-header">
      <div class="current-time">
        <div class="month">{{month + '月'}}</div>
        <div class="other-time">
          <div>{{week}}</div>
          <div>{{year + '年'}}</div>
        </div>
      </div>
      <div class="time-select">
        <van-button :type="timeType===1 ? 'info' :  'default'" size="small" @click="changeTimeType(1)">月</van-button>
        <van-button :type="timeType===2 ? 'info' :  'default'" size="small" @click="changeTimeType(2)">周</van-button>
      </div>
    </div>
    <div class="week-title">
      <span>一</span>
      <span>二</span>
      <span>三</span>
      <span>四</span>
      <span>五</span>
      <span>六</span>
      <span>日</span>
    </div>
    <div class="calendar-month">
      <div class="calendar-content" :class="{'active': item.active, 'today': item.today}" v-for="(item, i) in curTimeType" :key="i" >
        <div class="day">{{item.day}}</div>
        <div class="duty" v-if="item.today">今天</div>
        <div class="duty" :style="{'color': item.active ? '#28d453' : '#bff2cc'}" v-else-if="i % 7 === 6">休</div>
        <div class="duty" v-else>班</div>
      </div>
    </div>
    <div class="nowDay">
      <div class="solar"><span>{{nowDay}}</span><span class="status">正常上班</span></div>
      <div class="lunar">{{lunar}}</div>
    </div>
  </wrap-page>
</template>

<script>
import { WrapPage } from '@/components';
import { Button } from 'vant';
import dayjs from 'dayjs';
import solarLunar from 'solarlunar';

const weekObj = {
  0: '周日',
  1: '周一',
  2: '周二',
  3: '周三',
  4: '周四',
  5: '周五',
  6: '周六',
};

export default {
  components: {
    WrapPage,
    [Button.name]: Button,
  },
  data() {
    return {
      timeType: 1, // 1为月，2为周
      year: '',
      month: '',
      week: '',
      days: [],
      lunar: '',
      nowDay: '',
      curTimeType: [],
    };
  },
  created() {
    this.initTime();
    this.getCalendar();
    this.getLunlar();
  },
  methods: {
    changeTimeType(type) {
      this.timeType = type;
      const index = this.days.findIndex(item => item.today === true);
      const curIndex = parseInt(index / 7, 10);
      if (type === 2) {
        this.curTimeType = this.days.slice(curIndex * 7, (curIndex + 1) * 7);
      } else {
        this.curTimeType = this.days.slice();
      }
    },
    // 初始化时间
    initTime() {
      this.year = dayjs().year();
      this.month = dayjs().month() + 1;
      this.week = weekObj[dayjs().day()];
    },
    // 获取日历
    getCalendar() {
      const days = [];
      // 获取当前时间戳
      const curTime = Date.now();
      // 得到当前时间距离本月1号的天数
      const date = dayjs(curTime).date() - 1;
      // 计算出1号的时间戳
      const tempTime = curTime - (date * 24 * 60 * 60 * 1000);
      const startTime = dayjs(tempTime);
      const week = startTime.day();
      const firstDay = new Date(tempTime).getTime();
      // 标记是否为本月日期
      let isCurMonth = true;
      let lastDay;
      for (let i = 0; i < week; i++) {
        const day = dayjs(firstDay - (i * 24 * 60 * 60 * 1000)).date();
        const time = {
          day,
          active: day === 1,
        };
        days.unshift(time);
      }
      for (let i = 1; i <= 42 - week; i++) {
        const day = dayjs(firstDay + (i * 24 * 60 * 60 * 1000)).date();
        const time = { day };
        if (day <= lastDay) {
          if (isCurMonth) {
            isCurMonth = false;
          }
        }
        if (i === date) {
          time.today = true;
        }
        time.active = !!isCurMonth;
        days.push(time);
        lastDay = day;
      }
      // console.log(days);
      this.days = days;
      this.curTimeType = days.slice();
    },
    // 获取公历和农历时间
    getLunlar() {
      // 获取公历时间
      const day = dayjs();
      this.nowDay = `${day.format('YYYY年MM月DD日')},${weekObj[day.day()]}`;
      // 获取农历时间
      const monthObj = {
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六',
        7: '七',
        8: '八',
        9: '九',
        10: '十',
        11: '十一',
        12: '十二',
      };
      const solar2lunar = solarLunar.solar2lunar(this.year, this.month, day.date());
      const { yearCn, lMonth, dayCn } = solar2lunar;
      this.lunar = `农历${yearCn}${monthObj[lMonth]}月${dayCn}`;
    },
  },
};
</script>
<style lang='scss' scoped>
::v-deep .main{
  padding: 15px 10px;
  background: #fff !important;
}
.time-header{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.time-select{
  display: flex;
  border-radius: 8px;
  overflow: hidden;
}
.current-time{
  display: flex;
  font-size: 14px;
  color:#737373;
  .month{
    font-size: 28px;
    color: black;
  }
}
.week-title{
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 14px;
  color: #b8b8b8;
  border-bottom: 1px solid #f3f3f3;
}
.calendar-month{
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  font-size: 16px;
}
.calendar-content{
  width: 14%;
  text-align: center;
  margin: 8px 0;
  color: #d4d4d7;
  .duty{
    margin-top: 3px;
    font-size: 14px;
    color: #bfe5ff;
  }
  &.active{
    position: relative;
    color: #000;
    .duty{
      color: #28a9ff;
    }
    &.today{
      z-index: 1;
      color: #fff;
      .duty{
        color: #fff;
      }
    }
    &.today::before{
      content: '';
      display: inline-block;
      position: absolute;
      top: -3px;
      left: 2px;
      width: 45px;
      height: 45px;
      z-index: -1;
      border-radius: 50%;
      background-image: linear-gradient($light-blue, $deep-blue);
    }
  }
}
.nowDay{
  height: 80px;
  font-size: 15px;
  background-color: #f4f4f4;
  padding: 15px 10px;
  margin-top: 20px;
  border-radius: 6px;
  color: #636363;
  .solar{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .status{
      color: #2397ef;
    }
  }
  .lunar{
    color: #a9a9a9;
  }
}
</style>
