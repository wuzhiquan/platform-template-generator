<template>
  <wrap-page class="chat-view" :headerTitle="`患者${contact}在线问诊`" :menu="menu" :popoverClick="popoverClick">
    <div class="countdown">剩余时间：48小时</div>
    <div class="tips">
      根据国家互联网诊疗相关规定，请仔细阅读<span>《互联网诊疗风险告知及知情同意书》</span>。如非复诊，我们仅提供医疗咨询服务，继续咨询即表示您已知悉相关规则与风险并同意相关条款。
    </div>
    <div class="window" ref="window">
      <div class="chat-list" ref="list">
        <ChatItem
          v-for="(item, index) in chatList"
          :key="index"
          :chat="item"
          :contactHead="contactHead"
          :ownerHead="ownerHead"
        />
      </div>
    </div>
    <footer>
      <div class="flex">
        <van-icon class="chat-icon" class-prefix="my-icon" name="yuyin" />
        <input type="text" v-model="message" />
        <van-uploader multiple :after-read="afterRead">
          <van-icon class="chat-icon icon-photo" name="photograph" />
        </van-uploader>
        <van-icon
          class="chat-icon"
          name="add-o"
          @click="show = true"
          v-if="message === ''"
        />
        <span class="send" v-else @click="send">发送</span>
      </div>
    </footer>
    <van-popup v-model="show" position="bottom">
      <ul class="more">
        <li
          v-for="item in moreList"
          :key="item.label"
          @click="handleMethods(item.method)"
        >
          <div class="icon" :style="{background: item.bgc}">
            <van-icon v-if="item.vanIcon" :name="item.vanIcon" />
            <van-icon v-if="item.icon" class-prefix="my-icon" :name="item.icon" />
          </div>
          <p class="text">{{ item.label }}</p>
        </li>
      </ul>
    </van-popup>
  </wrap-page>
</template>

<script>
import { Uploader, Icon, Popup, Popover } from 'vant';
import { WrapPage } from '@/components/index';
import ChatItem from './components/chatItem';

export default {
  name: 'ChatView',
  components: {
    [Popover.name]: Popover,
    [Icon.name]: Icon,
    [Uploader.name]: Uploader,
    [Popup.name]: Popup,
    WrapPage,
    ChatItem,
  },
  data() {
    return {
      moreList: [
        { label: '问诊单', method: 'inquiry', icon: 'icon-', bgc: '#81cbff' },
        { label: '舌面照', method: 'tongue', icon: 'photo', bgc: '#5fdb8f' },
        { label: '问诊小结', method: 'summary', vanIcon: 'completed', bgc: '#adb0ff' },
        { label: '问诊评价', method: 'comment', icon: 'pingjia1', bgc: '#ffb24e' },
        { label: '结束问诊', method: 'end', icon: 'jieshu', bgc: '#ffb24e' },
      ],
      show: false,
      contact: this.$route.query.contact || '陈剑秋', // 联系人
      message: '', // 发送消息
      contactHead: require('@/assets/img/avatar.jpg'), // 联系人头像
      ownerHead: require('@/assets/img/avatar.png'), // 个人头像
      chatList: [],
      menu: [
        { text: '拒诊', icon: 'close' },
        { text: '取消自动问诊', icon: 'user-circle-o' },
      ],
    };
  },
  watch: {
    chatList() {
      console.log(this.$refs.window.scrollTop, this.$refs.list.clientHeight);
      setTimeout(() => {
        this.$refs.window.scrollTop = this.$refs.list.clientHeight;
      }, 0);
    },
  },
  mounted() {
    this.$refs.window.scrollTop = this.$refs.list.clientHeight;
    const selectPatient = {
      id: 0,
      contact: 0,
      type: 5,
      message: [
        { name: '刘晓燕', sex: 0, age: 24 },
        { name: '刘晓明', sex: 1, age: 28 },
      ],
      time: '10:20',
    };
    this.chatList.push(selectPatient);

    const patient = {
      id: 1,
      contact: 1,
      type: 1,
      message: '【刘晓燕 女 24岁】',
      time: '',
    };
    setTimeout(() => {
      this.chatList.push(patient);
    }, 1000);
  },
  methods: {
    // 发送消息
    send() {
      // 创建新聊天内容
      const chatItem = {
        id: this.chatList.length + 1,
        contact: 0,
        type: 1,
        message: this.message,
        time: new Date().toLocaleString(),
      };
      this.sends(chatItem);
      this.message = '';
    },
    // 发送图片
    afterRead(file) {
      console.log(file);
      // 创建新聊天内容
      const chatItem = {
        id: this.chatList.length + 1,
        contact: 0,
        type: 2,
        message: file.content,
        time: new Date().toLocaleString(),
      };
      this.sends(chatItem);
    },
    // 发送内容
    sends(chatItem) {
      // 将新聊天内容存放到聊天列表里
      this.chatList.push(chatItem);
      // 聊天窗口始终在最底部
      setTimeout(() => {
        this.$refs.window.scrollTop = this.$refs.list.clientHeight;
      }, 0);
    },
    handleMethods(method) {
      this[method]();
      this.show = false;
    },
    // 问诊单
    inquiry() {
      const data = {
        a1: { contact: 0, type: 6, message: '', time: '' },
        q1: { contact: 1, type: 1, message: '【问诊单已填写】', time: '' },
      };
      this.sendAuto(data);
    },
    // 舌面照
    tongue() {
      const data = {
        a2: { contact: 0, type: 7, message: '', time: '' },
        q2: { contact: 1, type: 1, message: '【舌面照已上传】', time: '' },
      };
      this.sendAuto(data);
    },
    // 问诊小结
    summary() {
      this.$router.push({
        name: 'ServiceSummary',
        query: {
          contact: this.contact,
        },
      });
    },
    // 问诊评价
    comment() {
      const data = {
        a6: { id: 1, contact: 0, type: 9, message: '', time: '' }, // 问诊评价
        q3: { id: 1, contact: 1, type: 10, message: '', time: '' }, // 查看问诊评价
      };
      this.sendAuto(data);
    },
    // 结束问诊
    end() {
      const data = {
        a7: { id: 1, contact: 0, type: 1, message: '您好！我的问诊时段已满，不方便再为您服务，建议您选择其他医师，感谢您的支持！', time: '' },
        a8: { id: 1, contact: 0, type: 1, message: '您好！您的情况不适合在线问诊，建议您来院就诊，感谢您的支持！', time: '' },
        a9: { id: 1, contact: 0, type: 11, message: '', time: '' }, // 问诊结束
        q4: { id: 1, contact: 1, type: 1, message: '【我已确认知晓】', time: '' },
      };
      this.sendAuto(data);
    },
    sendAuto(data) {
      Object.values(data).forEach((v, i) => {
        setTimeout(() => {
          this.chatList.push(v);
        }, (i) * 1000);
      });
    },
    popoverClick(action) {
      console.log(action);
    },
  },
};
</script>

<style lang="scss" scoped>
.chat-view {
  font-size: 14px;
  line-height: 1.2;
  .countdown {
    background-color: #f8eae1;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #ff3b30;
  }
  .tips {
    color: #909399;
    padding: 15px;
    span {
      color: $blue;
    }
  }
  .window {
    width: 100%;
    flex: 1;
    padding: 15px;
    overflow: auto;
  }
  footer {
    background-color: #eee;
    padding: 8px 12px;
    color: $text-color-gray;
    box-sizing: border-box;
    box-shadow: 0px -2px 10px rgba(82, 104, 147, 0.2);
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    input {
      margin: 0 15px;
      flex-grow: 1;
      border: none;
      height: 32px;
      background: $background-color;
      border-radius: 4px;
      font-size: 15px;
      text-indent: 5px;
    }
    .send {
      width: 40px;
      height: 24px;
      text-align: center;
      line-height: 24px;
      background: $blue;
      color: #fff;
      font-size: 14px;
      border-radius: 4px;
    }
    .chat-icon {
      vertical-align: middle;
      &.icon-photo {
        margin-right: 15px;
      }
      &.my-icon-yuyin {
        font-weight: 700;
      }
    }
  }
}
.van-popup {
  height: 120px;
  background-color: #fff;
}
.more {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  li {
    font-size: 12px;
    color: $light-black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .van-icon,
    .my-icon {
      color: #fff;
      font-size: 26px;
    }
    .icon {
      background-color: #fff;
      height: 48px;
      width: 48px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .text {
      margin: 12px 0 0 0;
    }
  }
}
.van-icon{
  font-size: 22px;
}
</style>
