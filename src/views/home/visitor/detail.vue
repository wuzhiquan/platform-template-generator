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
      :imgSrc="data.person.headIcon"
      :name="data.person.name"
      :bottomLeft="data.person.age + '岁，' + data.person.desc"
      class="person-card-border"
    />
    <div class="detail-list">
      <div v-for="(item, index) in data.info" :key="index">
        <div class="top">
          <i class="point"/>
          <div class="date-font border-soild">{{item.date}}</div>
        </div>
        <div v-for="(list, index2) in item.List" :key="index2"
        @click= "list.status === 1?getHint(list.title):''">
          <div class="font-message"
          :style="{backgroundColor: list.status === 1 ? 'rgba(232, 232, 232, 1)': '#fff'}">
            <div class="font-message-left">
              <span class="font-message-left-top" :style="{color:list.status === 2 ? '#FFB24E' :'#666666' }">{{list.day}}</span><br>
              <span>{{list.week}}</span>
            </div>
            <div class="font-message-right">
              <span class="font-message-right-top" :style="{color:list.status === 2 ? '#FFB24E' : list.status === 1 ? '#666666' : '#000000' }">{{list.title}}</span>
              <span :style="{color:list.status === 2 ? '#FFB24E' :'#000000', display: 'inline-block', paddingLeft: '100px'}">{{list.message}}</span><br>
              <span>{{list.desc}}</span>
            </div>
            </div>
          <div v-show="index2 != item.List.length - 1" class="across border-soild"></div>
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '140px' }">
      <div class="footer">
        <div class="footer-title">{{title}}</div>
        <div style="position: relative">
          <van-icon name="delete-o" size="20px" class="footer-icon"/>
          <span class="footer-select" @click="deletePlan">删除此计划</span>
        </div>
        <div style="position: relative">
          <van-icon name="add-o" size="20px" class="footer-icon"/>
          <span class="footer-select" @click="addPlan">添加此计划</span>
          <span class="footer-select-right">(在此计划的下方添加)</span>
        </div>
      </div>
    </van-popup>
     <van-popup v-model="wramShow" :style="{height: '170px', width: '300px',}" class="raduis">
       <div class="warn">
         <div class="warn-header">
           <p class="warn-title">确认删除选中计划吗?</p>
           <p class="warn-message">删除后将不能恢复</p>
         </div>
         <div class="warn-message">
           <span class="warn-footer" @click="concel">取消</span>
           <span class="warn-footer" @click="confirm">确认删除</span>
         </div>
       </div>
     </van-popup>
  </wrap-page>
</template>
<script>
import { WrapPage, PersonCard } from '@/components';
import { Popup, Toast } from 'vant';

export default {
  components: {
    [WrapPage.name]: WrapPage,
    [Popup.name]: Popup,
    [Toast.name]: Toast,
    PersonCard,
  },
  data() {
    return {
      title: '',
      show: false,
      wramShow: false,
      data: {
        person: {
          headIcon: require('@/assets/img/avatar.png'),
          name: '袁春红',
          age: 32,
          desc: '高危孕妇产前随访',
        },
        info: [
          {
            date: '2018年12月',
            List: [
              {
                day: 7,
                week: '周五',
                title: '产检（1）',
                desc: '孕12周，请来院办理《孕妇健康手册》',
                status: 0,
              },
              {
                day: 28,
                week: '周五',
                title: '产检（2）',
                desc: '孕16周，唐氏综合症筛查',
                status: 2,
                message: '请做好产检准备',
              },
            ],
          },
          {
            date: '2019年1月',
            List: [
              {
                day: 25,
                week: '周五',
                title: '产检（3）',
                desc: '孕20周，宫腹超声检查',
                status: 1,
              },
            ],
          },
          {
            date: '2019年2月',
            List: [
              {
                day: 22,
                week: '周五',
                title: '产检（4）',
                desc: '孕24周，妊娠糖尿病筛检（需空腹）',
                status: 1,
              },
            ],
          },
          {
            date: '2019年3月',
            List: [
              {
                day: 22,
                week: '周五',
                title: '产检（5）',
                desc: '孕28周，检量血压、尿蛋白、胎心',
                status: 1,
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    getHint(data) {
      this.title = data;
      console.log(this.title);
      this.show = !this.show;
    },
    deletePlan() {
      this.wramShow = !this.wramShow;
      this.show = !this.show;
    },
    addPlan() {
      this.$router.push('/home/visitorPlan');
    },
    concel() {
      this.wramShow = !this.wramShow;
    },
    confirm() {
      this.wramShow = !this.wramShow;
      Toast({
        message: '操作成功!',
        className: 'visitor-Toastspace',
        duration: 1500,
        icon: 'sign',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.border-soild {
   border-left: 1px #e4e4e4 solid;
}
.date-font {
  font-size: 14px;
  color: #B2B2B2;
  text-align: left;
  display: inline-block;
  padding-left: 10px;
}
.top {
  height: 40px;
  padding-left: 10px;
  line-height: 40px;
  position: relative;
  font-size: 0;
}
.font-message {
  font-size: 12px;
  color: #999999;
  height: 80px;
  line-height: 20px;
  background-color: rgba(232, 232, 232, 1);
  border-radius: 7px;
  padding: 20px 0;
}
.font-message-left {
  text-align: center;
  width: 40px;
  display: inline-block;
}
.font-message-left-top, .font-message-right-top {
  font-size: 18px;
}
.font-message-right-top {
  color: #000000;
}
.font-message-right {
  padding-left: 30px;
  text-align: center;
  width: 300px;
  display: inline-block;
  text-align: left;
}
.detail-list {
  flex: 1;
  padding: 0 10px 20px;
  overflow: auto;
  .point{
    display: inline-block;
    width: 7px;
    height: 7px;
    background: #e4e4e4;
    border-radius: 50%;
    position: absolute;
    left: 7px;
    top: 17px;
  }
}
.footer {
  height: 140px;
  padding-left: 15px;
}
.footer-title{
  font-size: 16px;
  color: rgb(30, 30, 30);
  text-align: left;
  height: 44px;
  line-height: 44px;
}
.footer-icon {
  position: absolute;
  top: 10px;
}
.footer-select {
  font-size: 16px;
  color: rgb(102, 102, 102);
  text-align: left;
  height: 44px;
  line-height: 44px;
  padding-left: 30px;
}
.footer-select-right {
  font-size: 14px;
  color: #BCBCBC;
  padding-left: 20px;
}
.warn-message {
  font-size: 14px;
  color: #888888;
}
.warn-title {
  font-size: 18px;
  color: #353535;
}
.warn {
  text-align: center;
}
.warn-header {
  padding: 20px 0 0 0;
  height: 126px;
}
.warn-footer {
  display: inline-block;
  height: 44px;
  width: 50%;
  line-height: 44px;
}
.warn-footer:hover {
 color:#FFB24E;
}
.raduis {
  border-radius: 20px;
}
::v-deep .person_info {
  border-bottom: 0;
}
.across {
  height: 10px;
  margin: 0 0 0 10px;
}
</style>

<style lang="scss">
.visitor-Toastspace {
  top:93%;
  min-height: 40px;
  width: 140px;
  border-radius: 20px;
  padding: 0;
  flex-direction: row;
  animation-name: toast;
  animation-duration: 1.5s;
  .van-toast__text {
    font-size: 14px;
    margin: 0;
    padding-left: 10px;
  }
  .van-toast__icon {
    font-size: 20px;
  }
}
</style>
