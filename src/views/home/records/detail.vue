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
  <wrap-page>
    <template #headerRight>
      <van-icon name="replay" size="20" color="#666"/>
    </template>
    <div class="title">
      <stars></stars>
    <h4 class="font-header">{{items[0].title}}</h4>
    </div>
    <div class="container">
      <div class="box-size">
        <div class="name">
          <span class="font-name">性别：</span>
          <b class="font-describe">{{items[0].sex}}</b>
        </div>
        <div class="describe">
          <div class="desc-age">
            <span class="font-name">年龄：</span>
            <b class="font-describe">{{items[0].age}}</b>
          </div>
          <div class="desc-case">
            <span class="font-name">病历号：</span>
            <b class="font-describe">{{items[0].caseNumber}}</b>
          </div>
        </div>
      </div>
      <div class="box-size">
        <div class="name">
          <span class="font-name">病例摘要：</span>
        </div>
        <div class="describe">
          <b class="font-describe">{{items[0].casedesc}}</b>
        </div>
      </div>
      <div class="box-size">
        <div class="name">
          <span class="font-name">临床诊断：</span>
        </div>
        <div class="describe">
          <b class="font-describe">{{items[0].clinicalDiagnosis}}</b>
        </div>
      </div>
      <div class="box-size">
        <div class="name">
           <span class="font-name">大体所见：</span>
        </div>
        <div class="describe">
          <b class="font-describe">{{items[0].view}}</b>
        </div>
      </div>
      <div class="box-size">
        <div class="name">
           <span class="font-name">诊断结果：</span>
        </div>
        <div class="describe">
          <b class="font-describe">{{items[0].Diagnosis}}</b>
        </div>
      </div>
      <div class="box-size">
        <div class="name">
          <span class="font-name">提供单位：</span>
        </div>
        <div class="describe">
          <b class="font-describe">{{items[0].unit}}</b>
        </div>
      </div>
    </div>
    <div class="footer-img">
      <p class="font-name" style="line-height: 50px">切片（1张）</p>
      <img width="139" height="129" src="@/assets/img/case.png" />
       <p class="font-name" style="line-height: 50px">切片（1张）</p>
      <img width="139" height="129" src="@/assets/img/case.png" />
       <p class="font-name" style="line-height: 50px">切片（1张）</p>
      <img width="139" height="129" src="@/assets/img/case.png" />
       <p class="font-name" style="line-height: 50px">切片（1张）</p>
      <img width="139" height="129" src="@/assets/img/case.png" />
    </div>
  </wrap-page>
</template>

<script>
import { Image } from 'vant';
import { WrapPage } from '@/components';
import Stars from '@/views/home/records/components/stars';

export default {
  components: {
    [WrapPage.name]: WrapPage,
    [Image.name]: Image,
    Stars,
  },
  data() {
    return {
      items: [
        {
          title: 'HPV感染',
          sex: '女',
          age: '61岁',
          caseNumber: '484',
          casedesc: '发现HPV53阳性数天',
          clinicalDiagnosis: 'HPV感染',
          view: '(宫颈-活检)灰白色组织4粒，直径0.2-0.5cm。',
          Diagnosis: '(宫颈-活检)局灶鳞状上皮不典型增生，P16显示病变上皮弥漫性阳性（核、浆），但是Ki-67基本上呈阴性表达，提示为HPV引起的退行性细胞学改变，建议随诊。',
          unit: '阳江市人民医院',
          pic: require('@/assets/img/case.png'),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.name, .describe,
.desc-age, .desc-case {
  display: inline-block;
  vertical-align: text-top;
}
.desc-age {
  width: 150px;
}
.name {
  width: 23%;
}
.describe {
  width: 75%;
}
.box-size{
  margin-bottom: 10px;
}
.container {
  padding: 10px 14px;
  background: #fff;
}
.font-header{
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  text-align: left;
  line-height: 44px;
  text-indent: 12px;
}
.font-name {
  margin: 0;
  font-size: 14px;
  color: #666666;
  text-align: left;
  height: 50px;
}
.font-describe {
  font-weight: 400;
  font-size: 13px;
  color: #000000;
  text-align: left;;
  width: auto;
}
.title {
  position: relative;
  border-bottom: 1px $border-color solid;
  background: #fff;
  padding: 4px 0;
}
.footer-img {
  padding: 0 14px;
  margin-top: 10px;
  background: #fff;
  padding-bottom: 10px;
}
</style>
