<template>
  <div>
    <van-loading
      type="spinner"
      color="#1989fa"
      class="my-loading"
    />
  </div>
</template>

<script>
import { Loading } from 'vant';

export default {
  name: 'Loading',
  components: {
    [Loading.name]: Loading,
  },
  props: {},
  data() {
    return {
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang='scss' scoped>
.my-loading{
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.1);
}
</style>
