<template>
  <wrap-page :headerTitle="`患者${contact}问诊小结`">
    <template #headerRight>
      <van-button type="info" size="small" @click="sendClick">发送</van-button>
    </template>
    <summary-item
      v-for="(item, index) in items"
      :key="index"
      :label="item.label"
      :isRequire="item.require"
      :rightText="item.rightText"
      :placeholder="item.placeholder"
      :dialogData="item.template"
      :checkbox="item.checkbox"
      :formKey="item.formKey"
    />
    <div class="prescription">
      <div class="prescription_top">
        <div>
          <span class="label">处方</span>
          <span class="require">必填</span>
        </div>
      </div>
      <div class="prescription_middle">
        <div v-if="form.prescription.length===0" class="no-data">~ 暂无处方 ~</div>
        <div v-for="(item,index) in form.prescription" :key="index" class="prescription_item">
          <div class="prescription_text">{{index+1}}、{{ item }}</div>
          <van-icon name="delete-o" @click="deletePrescription(index)" />
        </div>
      </div>
      <div class="prescription_bottom">
        <van-button plain hairline type="info" @click="addClick">添加处方</van-button>
      </div>
    </div>
  </wrap-page>
</template>
<script>
import { Button } from 'vant';
import { WrapPage } from '@/components';
import summaryItem from './components/summaryItem';

console.log('summaryItem', summaryItem);
export default {
  components: {
    'van-button': Button,
    summaryItem,
    WrapPage,
  },
  data() {
    return {
      contact: this.$route.query.contact || '刘晓月', // 联系人
      items: [
        {
          label: '病情描述',
          require: true,
          rightText: '病情模版',
          placeholder: '请描述患者病情',
          template: [
            '腹胀，腹痛，饭后饱胀，反酸，嗳气甚至恶心呕吐',
            '上腹隐痛有烧灼，容易发怒，吐黏液，腹痛无法入睡',
            '胃痛且背也疼、涨，全身酸软无力',
          ],
          checkbox: false,
          formKey: 'description',
        },
        {
          label: '诊断',
          require: true,
          rightText: '诊断模版',
          placeholder: '请填写患者诊断',
          template: ['慢性胃炎', '胃痛，胃胀', '脾虚失统症', '气血两亏症'],
          checkbox: true,
          formKey: 'diagnosis',
        },
        {
          label: '医生建议',
          require: false,
          rightText: '建议模版',
          placeholder: '请填写叮嘱',
          template: [
            '忌服辛辣刺激性食物，不可过饱，不可过饥，注意规律饮食，2餐之间不可隔太久，忌烟酒',
            '建议营养均衡，保持良好情绪，作息规律，避免紧张',
            '建议少食多餐，低脂肪，清淡饮食，多运动',
          ],
          checkbox: false,
          formKey: 'suggestion',
        },
      ],
      form: {
        description: null,
        diagnosis: null,
        suggestion: null,
        prescription: ['胃痛宁片，1盒，每天3次，每次1片，口服'],
      },
    };
  },
  methods: {
    deletePrescription(index) {
      this.form.prescription.splice(index, 1);
    },
    addClick() {
      this.$router.push({
        name: 'ServicePrescription',
      });
    },
    sendClick() {
      this.$router.push({
        name: 'ServiceSuccess',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  padding-bottom: 15px;
  flex: 1;
  overflow: auto;
  // height: calc(100vh - 46px);
}
.prescription {
  width: 100%;
  background-color: #fff;
  margin-top: 15px;
  padding: 15px;
  .prescription_top {
    height: 44px;
    line-height: 44px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    .require {
      color: #999;
      font-size: 12px;
      margin-left: 12px;
    }
  }
  .prescription_middle {
    .no-data {
      text-align: center;
      font-size: 16px;
      color: #999;
    }
    .prescription_item {
      color: #666;
      display: flex;
      justify-content: space-between;
      .prescription_text {
        font-size: 14px;
        line-height: 20px;
      }
      .van-icon {
        font-size: 20px;
      }
    }
  }
  .prescription_bottom {
    text-align: center;
    margin-top: 15px;
  }
  .van-button {
    width: 99%;
  }
}
::v-deep .van-button--small {
  width: 60px;
}
</style>
