<template>
  <wrap-page hasSearch :searchPlaceholder="'药品名称/症状'" @querySearch="getSearch">
    <template #headerRight>
      <van-icon name="replay" color="#666"/>
    </template>
    <van-tree-select
      class="records"
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
      height="100%"
      @click-nav="getNum"
      @click-item="getData"
      selected-icon="arrow">
      <template #content>
        <ul class="right-content">
          <li v-for="(item,index) in items[activeIndex].children"
          :key="index"
          @click="onSelect(item.path)">
            {{item.text}}
            <van-icon name="arrow" />
          </li>
        </ul>
      </template>
    </van-tree-select>
  </wrap-page>
</template>
<script>
import { TreeSelect, Search } from 'vant';
import { WrapPage } from '@/components';

export default {
  components: {
    [TreeSelect.name]: TreeSelect,
    [Search.name]: Search,
    WrapPage,
  },
  data() {
    return {
      activeIndex: 0,
      activeId: 1,
      items: [
        {
          text: '消化用药',
          children: [
            { id: 10, text: '口腔科用药', path: '/home/medicineList' },
            { id: 12, text: '抗酸药及治疗消化性溃疡和胃肠胀...' },
            { id: 13, text: '胃肠解痉要，抗胆碱药和胃动力药' },
            { id: 14, text: '止吐要和止恶心药' },
            { id: 14, text: '胆肝疾病治疗药' },
            { id: 12, text: '泻药' },
            { id: 13, text: '止泻药，肠道抗炎/抗感染药' },
            { id: 14, text: '抗肥胖药，不包括饮食制品' },
            { id: 13, text: '消化药，包括酶制剂' },
            { id: 14, text: '糖尿病用药' },
          ],
        },
        {
          text: '血液用药',
          children: [
          ],
        },
        {
          text: '心血管用药',
          children: [
          ],
        },
        {
          text: '皮肤病用药',
          children: [
          ],
        },
        {
          text: '生殖泌尿',
          children: [
          ],
        },
        {
          text: '全身激素药',
          children: [
          ],
        },
        {
          text: '心血管用药',
          children: [
          ],
        },
        {
          text: '抗肿瘤用药',
          children: [
          ],
        },
        {
          text: '神肌肉骨骼',
          children: [
          ],
        },
        {
          text: '神经系统',
          children: [
          ],
        },
      ],
    };
  },
  methods: {
    getSearch(val) {
      console.log('getSearch', val);
    },
    getNum(index) {
      console.log(index);
    },
    getData(data) {
      // this.$router.push({ path: '/selectDoctor', params: { roomId: data.id } });
      console.log(data);
    },
    onSelect(path) {
      console.log(path);
      this.$router.push(path);
    },
    onListen() {
      console.log('listen');
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep .records{
  .van-sidebar-item--select::before{
    background-color: transparent;
  }
  .van-sidebar-item__text {
    margin: 0;
    color: #888888;
    font-size: 14px;
    text-indent: 14px;
    text-align: left;
    line-height: 40px;
    flex: 2;
  }
  .van-tree-select__item {
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #888888;
    text-align: left;
    text-indent: 14px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 400;
    box-shadow: 0 0.5px 0 #e9e9e9;
  }
  .van-tree-select__nav-item {
    padding: 0;
  }
  .van-tree-select__nav{
    flex: 3;
  }
  .van-tree-select__content{
    flex: 8;
  }

  li, li>.van-icon {
    margin: 0;
    color: #888888;
    font-size: 14px;
    text-indent: 14px;
    text-align: left;
    line-height: 40px;
    position: relative;
  }

  li>.van-icon {
    position: absolute;
    right: 20px;
  }
}
</style>
