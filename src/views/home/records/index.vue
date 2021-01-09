<template>
  <wrap-page hasSearch :searchPlaceholder="'病例/病例集'" @querySearch="getSearch">
    <template #headerRight>
      <van-icon name="replay" size="20" color="#666"/>
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
import { TreeSelect } from 'vant';
import { WrapPage } from '@/components';

export default {
  components: {
    [TreeSelect.name]: TreeSelect,
    WrapPage,
  },
  data() {
    return {
      activeIndex: 0,
      activeId: 1,
      items: [
        {
          text: '女性生殖（15）',
          children: [
            { id: 10, text: '宫颈（1）', path: '/home/recordsList' },
            { id: 12, text: '子宫（5）' },
            { id: 13, text: '卵巢（2）' },
            { id: 14, text: '胎盘（3）' },
          ],
        },
        {
          text: '消化',
          children: [
            { id: 20, text: '2普外科' },
            { id: 21, text: '2泌尿外科' },
            { id: 22, text: '2胸外科' },
            { id: 23, text: '2整形外科' },
            { id: 24, text: '2泌尿外科' },
            { id: 25, text: '2烧伤与创面修复' },
            { id: 26, text: '2肝移植外科' },
            { id: 27, text: '2神经外科' },
            { id: 28, text: '2麻醉科' },
            { id: 29, text: '2手术室' },
          ],
        },
        {
          text: '头颅',
          children: [
          ],
        },
        {
          text: '乳腺',
          children: [
          ],
        },
        {
          text: '皮肤',
          children: [
          ],
        },
        {
          text: '头颅',
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
    flex: 2;
  }
  .van-tree-select__content{
    flex: 3;
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
