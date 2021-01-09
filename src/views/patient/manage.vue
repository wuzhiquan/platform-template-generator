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
  <wrap-page :menu="menu" :popoverClick="popoverClick">
    <div class="manage-inner">
      <div class="cell-box" v-for="item in list" :key="item.id">
        <van-checkbox v-if="mutipleChecked" v-model="item.checked"/>
        <van-cell :title="item.name">
          <template #right-icon v-if="!mutipleChecked">
            <van-icon name="ellipsis" class="ellipsis-icon" @click="editItem(item.id)"/>
          </template>
        </van-cell>
      </div>
    </div>
    <div class="button-area" v-if="mutipleChecked">
      <van-button icon="delete-o" type="info" @click="handleItem">删除</van-button>
      <van-button icon="cross" plain type="info" @click="cancelCheck">取消</van-button>
    </div>
    <van-action-sheet v-model="showSheet">
      <ul class="sheet-content">
        <li @click="handleItem('rename')">
          <van-icon name="edit" color="#1678FF"/>
          <span>重命名</span>
        </li>
        <li @click="handleItem">
          <van-icon name="delete" color="#FB0200"/>
          <span>删除组</span>
        </li>
      </ul>
    </van-action-sheet>
  </wrap-page>
</template>

<script>
import { Cell, ActionSheet, Checkbox, Button } from 'vant';
import { WrapPage } from '@/components';

export default {
  name: '',
  components: {
    [Cell.name]: Cell,
    [ActionSheet.name]: ActionSheet,
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    WrapPage,
  },
  data() {
    return {
      mutipleChecked: false,
      showSheet: false,
      thisId: null,
      rename: '',
      list: [
        { name: '未分组', id: 1, checked: false },
        { name: '亲戚朋友', id: 2, checked: false },
        { name: '内分泌失调', id: 3, checked: false },
        { name: '多囊卵巢', id: 4, checked: false },
        { name: '二胎', id: 5, checked: false },
      ],
      menu: [
        { text: '添加组', icon: 'add-o' },
        { text: '选择', icon: 'passed' },
      ],
      dialogTitle: '',
    };
  },
  methods: {
    editItem(id) {
      this.showSheet = true;
      this.thisId = id;
    },
    handleItem(type) {
      this.showSheet = false;
      if (type === 'rename') {
        console.log(this.thisId);
        this.dialogTitle = '重新命名';
        this.openDialog();
      } else {
        this.$dialog.confirm({
          message: '确定删除所选分组？',
          confirmButtonColor: '#1678FF',
          beforeClose: this.beforeClose,
          closeOnClickOverlay: true,
        }).catch(() => {});
      }
    },
    beforeClose(action, done) {
      if (action === 'confirm') {
        if (document.getElementById('rename')) {
          console.log(console.log(document.getElementById('rename').value));
        }
        setTimeout(done, 500);
      } else {
        done();
      }
    },
    openDialog() {
      this.$dialog.confirm({
        title: this.dialogTitle,
        message: `<input
            id="rename"
            placeholder="请输入组名称"
            style ="height: 40px;
                    border: 1px solid #f5f5f5;
                    border-radius: 6px;
                    padding-left: 6px;
                    width: 100%;
                    transition: .5s;"
            onBlur="this.style.borderColor='#f5f5f5';"
            onclick="this.style.borderColor='#1678FF';"
          />`,
        confirmButtonColor: '#1678FF',
        beforeClose: this.beforeClose,
        closeOnClickOverlay: true,
      }).catch(() => {});
    },
    popoverClick(action) {
      console.log(action);
      if (action.icon === 'add-o') {
        this.dialogTitle = '新建分组';
        this.openDialog();
      } else {
        this.mutipleChecked = true;
      }
    },
    // 取消多选
    cancelCheck() {
      this.mutipleChecked = false;
      this.list = this.list.map(item => ({
        ...item,
        checked: false,
      }));
    },
  },
  mounted() {},
};
</script>
<style lang='scss' scoped>
.manage-inner{
  padding-left: 16px;
  background: #fff;
  .ellipsis-icon{
    font-size: 20px;
    line-height: inherit;
    color: $light-black2;
  }
  .cell-box{
    display: flex;
  }
  .van-cell{
    padding-left: 0;
    border-bottom: 1px solid $border-color;
  }
  .van-checkbox{
    width: 30px;
  }
}
.sheet-content{
  font-size: 14px;
  color: $light-black;
  li{
    padding-left: 16px;
    display: flex;
    align-items: center;
  }
  span{
    display: inline-block;
    flex: 1;
    border-bottom: 1px solid $border-color;
    line-height: 50px;
    height: 50px;
  }
  .van-icon{
    font-size: 16px;
    margin-right: 12px;
  }
}
.button-area{
  position: fixed;
  bottom: 0;
  width: 100%;
  .van-button{
    width: 50%;
  }
}
::v-deep .van-popup--bottom.van-popup--round{
  border-radius: 0;
}
</style>
