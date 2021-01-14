<template>
  <div class="page-wapper">
    <my-header v-if="!isIndex" :title="headerTitle || $route.meta.title" :menu="menu" :popoverClick="popoverClick">
      <template #right>
        <slot name="headerRight"/>
      </template>
    </my-header>
    <div :class="{'page-inner': true, main: !isIndex}">
      <van-search v-if="hasSearch" v-model="searchValue" :placeholder="searchPlaceholder" @input="querySearch">
        <template #right-icon>
          <van-icon class-prefix="my-icon" name="yuyin1" color="#ccc" @click="voiceClick" />
        </template>
      </van-search>
      <slot/>
    </div>
    <van-tabbar v-if="isIndex" v-model="active" route @change="onChange">
      <van-tabbar-item v-for="(item, index) in tabbars" :key="index" :to="item.path" :badge="item.badge" replace>
        <span>
          {{ item.title }}
        </span>
        <template #icon="props">
          <img :src="props.active ? item.active : item.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import _ from 'lodash';
import { Tabbar, TabbarItem, Search } from 'vant';
import MyHeader from '../Header';

export default {
  name: 'WrapPage',
  components: {
    'van-tabbar': Tabbar,
    'van-tabbar-item': TabbarItem,
    [Search.name]: Search,
    MyHeader,
  },
  props: {
    // 是否有搜索
    hasSearch: {
      type: Boolean,
      default: false,
    },
    searchPlaceholder: {
      type: String,
      default: '请输入',
    },
    // 是否是主页面，包括首页、患者、消息、我的
    isIndex: {
      type: Boolean,
      default: false,
    },
    headerTitle: {
      type: String,
      default: '',
    },
    menu: Array,
    popoverClick: Function,
  },
  data() {
    return {
      searchValue: '',
      active: '',
      tabbars: [
        {
          title: '首页',
          active: require('@/assets/img/home-full.png'),
          inactive: require('@/assets/img/home.png'),
          path: '/home',
        }, {
          title: '患者',
          active: require('@/assets/img/patient-full.png'),
          inactive: require('@/assets/img/patient.png'),
          path: '/patient',
        }, {
          title: '消息',
          active: require('@/assets/img/message-full.png'),
          inactive: require('@/assets/img/message.png'),
          path: '/message',
        }, {
          title: '我的',
          active: require('@/assets/img/mine-full.png'),
          inactive: require('@/assets/img/mine.png'),
          path: '/mine',
        },
      ],
    };
  },
  methods: {
    onChange() {
      console.log(1);
    //   this.UPDATE_CURPOSITION({ scrollTop: 0, curPage: 1 }); // 初始化滚动条
      // this.SET_PATIENTLIST([]); // 初始化病人列表数据
      // this.SET_ADVICELIST([]); // 初始化医嘱列表数据
    },
    // eslint-disable-next-line func-names
    querySearch: _.debounce(function (val) {
      this.$emit('querySearch', val);
    }, 300),
    voiceClick() {
      console.log('语音搜索');
    },
  },
};
</script>

<style lang="scss" scoped>
.page-wapper{
  position: relative;
  .page-inner{
    @include scrollHeight(50px);
    background-color: $background-color;
  }
  .main{
    @include scrollHeight(46px);
    @include flexCol();
  }
  .van-tabbar-item__text {
    font-size: 9px;
  }
  .van-tabbar {
    z-index: 6;
  }
  .iconfont {
    font-size: 19px;
    margin-bottom: 6px;
  }
  .van-search__content{
    border-radius: 6px;
  }
  .van-nav-bar{
    z-index: 3000;
  }
  .my-icon{
    font-size: 14px;
  }
}
</style>
