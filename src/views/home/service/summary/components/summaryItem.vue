<template>
  <div class="summary-item">
    <div class="top">
      <div>
        <span class="label">{{ label }}</span>
        <span class="require">{{ isRequire?'必填':'选填' }}</span>
      </div>
      <span class="rightText" @click="show = true">{{ rightText }}</span>
    </div>
    <van-field
      v-model="$parent.$parent.form[formKey]"
      type="textarea"
      :placeholder="placeholder"
      :autosize="{ minHeight: 110 }"
    />
    <van-dialog
      v-model="show"
      :title="rightText"
      show-cancel-button
      confirmButtonColor="#2d40ff"
      @confirm="onConfirm"
    >
      <van-checkbox-group v-model="checkboxData" v-if="checkbox">
        <van-checkbox v-for="(item,index) in dialogData" :key="index" :name="item">{{ item }}</van-checkbox>
      </van-checkbox-group>
      <van-radio-group v-model="radioData" v-else>
        <van-radio v-for="(item,index) in dialogData" :key="index" :name="item">{{ item }}</van-radio>
      </van-radio-group>
    </van-dialog>
  </div>
</template>

<script>
import { Field, Dialog, RadioGroup, Radio, Checkbox, CheckboxGroup } from 'vant';

export default {
  props: {
    label: String,
    isRequire: Boolean,
    rightText: String,
    placeholder: String,
    formKey: String,
    dialogData: {
      type: Array,
      default() {
        return [];
      },
    },
    checkbox: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    'van-checkbox-group': CheckboxGroup,
    'van-checkbox': Checkbox,
    'van-radio-group': RadioGroup,
    'van-radio': Radio,
    [Dialog.Component.name]: Dialog.Component,
    [Field.name]: Field,
  },
  data() {
    return {
      show: false,
      radioData: null,
      checkboxData: [],
    };
  },
  computed: {
    requireText() {
      return this.isRequire ? '必填' : '选填';
    },
  },
  methods: {
    onConfirm() {
      let data;
      if (this.checkbox) {
        data = this.checkboxData.join('，');
      } else {
        data = this.radioData;
      }
      this.$parent.$parent.form[this.formKey] = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.summary-item {
  width: 100%;
  background-color: #fff;
  margin-top: 15px;
  padding: 15px;
  .top {
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
    .rightText {
      color: $deep-blue;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
::v-deep .van-cell {
  background-color: #f6f6f6;
}
::v-deep .van-dialog__header {
  padding: 0;
  height: 46px;
  position: relative;
  line-height: 46px;
  overflow: hidden;
  &::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border: 1px solid #ebedf0;
    -webkit-transform: scale(.5);
    transform: scale(.5);
  }
}
::v-deep .van-dialog__content {
  padding: 15px;
}
::v-deep .van-radio {
  margin-bottom: 12px;
  .van-radio__label {
    font-size: 14px;
  }
  &:last-child {
    margin-bottom: 0;
  }
  .van-icon {
    font-size: 14px;
  }
}

::v-deep .van-checkbox {
  margin-bottom: 12px;
  .van-checkbox__label {
    font-size: 14px;
  }
  &:last-child {
    margin-bottom: 0;
  }
  .van-icon {
    font-size: 14px;
  }
}
</style>
