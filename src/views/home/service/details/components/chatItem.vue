<template>
  <div class="chat-item">
    <p class="time" v-if="chat.time"><span v-text="chat.time"></span></p>
    <div :class="chat.contact===0?'right':'left'">
      <img class="avatar" width="36" height="36" :src="chat.contact===0?ownerHead:contactHead" />
      <div class="message">
        <!-- 选择就诊人 -->
        <span class="patient text" v-if="chat.type===5">
          <p>您好！感谢您购买在线问诊服务！我是为您服务的医生：陈剑秋，请您选择就诊人</p>
          <ul class="select-patient">
            <li v-for="(item, index) in chat.message" :key="index">{{`${item.name} ${item.sex?'男':'女'} ${item.age}岁`}}</li>
            <li class="add-patient">添加就诊人</li>
          </ul>
        </span>
        <!-- 填写问诊单 -->
        <span class="write-list text" v-if="chat.type===6">
          <p>为了准备判断您的病情，请您按照真实情况填写以下问诊单：</p>
          <div class="flex1">
            <van-icon name="photo" size="50" class="photo" />
            <div>
              <div class="title">请填写问诊单</div>
              <span>点击填写</span>
            </div>
          </div>
        </span>
        <!-- 上传舌面图 -->
        <span class="tongue-map text" v-if="chat.type===7">
          <div class="flex1">
            <van-icon name="photo" size="50" class="photo" />
            <div>
              <div class="title">请上传舌面图</div>
              <span>点击上传</span>
            </div>
          </div>
        </span>
        <!-- 问诊小结 -->
        <span class="summary text" v-if="chat.type===8">
          <div class="flex1">
            <van-icon name="photo" size="50" class="photo" />
            <div>
              <div class="title">问诊小结</div>
              <span>点击查看</span>
            </div>
          </div>
        </span>
        <!-- 问诊评价 -->
        <span class="assess text" v-if="chat.type===9">
          <p>本次问诊已结束，请您对本次服务进行评价</p>
          <div class="flex1">
            <van-icon name="photo" size="50" class="photo" />
            <div>
              <div class="title">问诊服务评价</div>
              <span>点击填写</span>
            </div>
          </div>
        </span>
        <!-- 查看问诊评价 -->
        <span class="check-assess text" v-if="chat.type===10">
          <p>【问诊服务已评价】</p>
          <van-button class="check-btn" size="small" color="#333333">查看评价</van-button>
        </span>
        <!-- 问诊结束 -->
        <span class="tongue-map text" v-if="chat.type===11">
          <p>系统提示：问诊已结束，您的问诊费用将会在7个工作日内原路退回。</p>
          <van-button class="know-btn" color="#333333">请确认知晓</van-button>
        </span>
        <!-- 聊天文本 -->
        <span class="text" v-if="chat.type===1" v-text="chat.message"></span>
        <!-- 聊天图片 -->
        <img :src="chat.message" v-else-if="chat.type===2" alt="聊天图片" />
        <!-- 视频 -->
        <video :src="chat.message" v-else-if="chat.type===3"></video>
        <!-- 语音 -->
        <audio :src="chat.message" v-else-if="chat.type===4"></audio>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'vant';

export default {
  components: {
    'van-button': Button,
  },
  props: {
    chat: {
      key: Object,
      default: () => {},
    }, // 聊天内容
    ownerHead: {
      key: String,
      default: '',
    }, // 自己头像
    contactHead: {
      key: String,
      default: '',
    }, // 联系人头像
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.chat-item {
  font-size: 13px;
  line-height: 1.3;
  .time {
    font-size: 10px;
    color: #999;
    text-align: center;
    margin-bottom: 15px;
  }
  .message {
    margin-bottom: 15px;
  }
  .check-btn,.know-btn {
    width: 100%;
    border-radius: 0.21333rem;
    font-size: 16px;
    height: 32px;
    margin-top: 5px;
  }
  .know-btn {
    color: #FFF;
  }
  .text {
    position: relative;
    display: inline-block;
    padding: 7px 9px;
    margin-top: 2px;
    border-radius: 10px;
    max-width: 240px;
    .select-patient {
      padding-left: 15px;
      list-style: disc;
      li {
        list-style: disc;
        line-height: 2;
        color: #FFFF00;
      }
    }
    .photo {
      margin-right: 5px;
    }
    .title {
      font-size: 14px;
      color: #FFFF00;
      margin-bottom: 5px;
    }
    // &::before {
    //   content: " ";
    //   position: absolute;
    //   top: 12px;
    //   border: 6px solid transparent;
    //   border-top-width: 3px;
    //   border-bottom-width: 3px;
    // }
  }
  img {
    max-width: 240px;
  }
  .left {
    .avatar {
      float: left;
      margin-right: 8px;
      border-radius: 50%;
    }
    .message {
      float: left;
      .text {
        background: #FFF;
        border-radius: 0 10px 10px 10px;
        color: #C0C4CC;
        // &::before {
        //   right: 100%;
        //   border-right-color: #F6F6F6;
        // }
      }
    }
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
  .right {
    .avatar {
      float: right;
      margin-left: 8px;
      border-radius: 50%;
    }
    .message {
      float: right;
      .text {
        background: #0066ff;
        color: #FFF;
        border-radius: 10px 0 10px 10px;
        // &::before {
        //   left: 100%;
        //   border-left-color: #DFEDFF;
        // }
      }
    }
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
}
.flex1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
p {
  margin: 0;
}
</style>
