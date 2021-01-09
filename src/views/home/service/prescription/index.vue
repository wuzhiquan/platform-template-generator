<template>
  <wrap-page hasSearch :searchPlaceholder="'药品名称'" @querySearch="getSearch">
    <template #headerRight>
      <van-button type="info" size="small" @click="addClick">完成</van-button>
    </template>
    <div class="inner">
      <div class="item" v-for="(item, index) in data" :key="index">
        <div class="item_top">
          <div class="name">{{ item.title }}</div>
          <van-icon name="delete-o" @click="deletePrescription(item)" />
        </div>
        <div>
          <div v-if="item.value.length===0" class="no-data">~ 暂无{{ item.title }} ~</div>
          <van-tag v-for="(element,index) in item.value" :key="index" round size="large" color="#e4e4e4" text-color="#666">{{ element }}</van-tag>
        </div>
      </div>
    </div>
  </wrap-page>
</template>
<script>
import { WrapPage } from '@/components';
import { Tag, Button } from 'vant';

export default {
  components: {
    'van-tag': Tag,
    'van-button': Button,
    WrapPage,
  },
  data() {
    return {
      data: [
        {
          title: '常用药',
          value: [
            '蒙脱石散',
            '吗丁啉',
            '雷尼替丁',
            '奥美拉唑肠溶胶囊',
            '地衣芽孢杆菌活菌胶囊',
            '双岐杆菌冲剂',
            '妈咪爱',
          ],
        },
        {
          title: '搜索历史',
          value: [
            '布拉氏酵母菌散',
            '枸橼酸泌钾',
            '妈咪爱',
            '吗丁啉',
            '多潘立',
            '培菲康',
          ],
        },
      ],
    };
  },
  methods: {
    getSearch(val) {
      console.log('getSearch', val);
    },
    deletePrescription(item) {
      item.value = [];
    },
    addClick() {
      this.$router.push({
        name: 'ServiceSummary',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.inner {
  flex: 1;
  overflow: auto;
  padding: 15px;
  .item {
    margin-bottom: 60px;
  }
  .item_top {
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    .name {
      color: #333;
      font-size: 14px;
      line-height: 20px;
    }
    .van-icon {
      font-size: 20px;
      color: #666;
    }
  }
  .van-tag {
    padding: 5px 10px;
    font-size: 12px;
    margin-right: 10px;
    margin-bottom: 12px;
  }
  .no-data {
    text-align: center;
    font-size: 16px;
    color: #999;
  }
}
::v-deep .van-button--small {
  width: 60px;
}
</style>
