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
    <template #headerRight><span/></template>
    <div style="position: relative" class="medicine-page">
      <div v-for="(item, index) in items.slice(0,1)" :key="index"
      class="drugs-for-details medicine-page-title">
        <h6 class="font-title">{{item.title}}</h6>
        <p>
          <span v-html="item.desc" class="font-content"></span>
        </p>
      </div>
      <stars style="top: 15px" />
      <div v-for="(item, index2) in items.slice(1)"
      :key="index2 + 'index'"
      class="drugs-for-details">
        <h6 class="font-title">{{item.title}}</h6>
        <p>
          <span v-html="item.desc" class="font-content"></span>
        </p>
      </div>
    </div>
  </wrap-page>
</template>

<script>
import { WrapPage } from '@/components';
import { Toast } from 'vant';
import Stars from '@/views/home/records/components/stars';

export default {
  components: {
    [Toast.name]: Toast,
    WrapPage,
    Stars,
  },
  data() {
    return {
      show: false,
      items: [
        { title: '玫满', desc: '通用名 | 盐酸米诺环素胶囊<br>英文名 | Minocycline Hydrochloride' },
        { title: '| 成分', desc: '本品主要成分为盐酸米诺环素。' },
        { title: '| 适应症', desc: '本品适用于因葡萄球菌、链球菌、肺炎球菌、淋病奈瑟菌、痢疾杆菌、大肠埃希菌、克雷伯氏菌、变形杆菌、绿脓杆菌、梅毒螺旋体及衣原体等对本品敏感的病原体引起的下列感染：尿道炎、男性非淋菌性尿道炎(NGU)、前...' },
        { title: '| 用法用量', desc: '口服。<br>成人：首次剂量为0.2g，以后每12或24小时再服用0.1g，或遵医嘱。寻常性痤疮每次50mg， 一日2次，6周为一疗程。<br>肾功能损害患者：24小时内的日总剂量不应超过200mg。' },
        { title: '| 禁忌', desc: '对任何四环素类药物或本品中的任一成分过敏者禁用' },
        { title: '| 副作用', desc: '根据MedDRA系统/器官分类，用CIOMS频率种类，将不良反应列表如下：常见：≥1%不常见：≥0.1%且＜1%罕见：≥0.01%且＜0.1%非常罕见： ＜0.01% 上市后，在接受米诺环素治疗的患者...' },
        { title: '| 孕妇及哺乳期妇女用药', desc: '动物研究结果表明四环素类药物可通过胎盘，可在胎儿组织中发现而对胎儿的发育产生毒性作用（通常与骨骼发育的延迟有关）。在动物怀孕早期接受治疗可出现胚胎中毒的迹象。<br>盐酸米诺环素，和其它四环素类抗生素一样，可通过胎盘，孕妇服用后可引致胎儿损害。如果在怀孕期间服用盐酸米诺环素或在服药期间怀孕，应告知患者药物对胎儿的潜在危险。<br>牙齿发育期间（孕后期）使用四环素类可引起牙齿的永久变色。牙釉质的发育不全亦有报道。<br>在妊娠的后三个月服用四环素类药物可在胎儿骨骼中形成稳定的钙复合物。在未发育完全的婴幼儿中服用四环素类药物（每6小时25mg/kg）可观察到腓骨生长速度的降低。腓骨生长速度的变化在停药后可恢复。<br>在上市后临床经验报道中，有先天性畸形，包括四肢减少的发生。<br>盐酸米诺环素可在人乳中分泌；因此，应决定是停止哺乳还是停止用药。' },
        { title: '| 儿童用药', desc: '由于本品可引起牙齿永久性变色，牙釉质发育不良，并抑制骨骼的发育生长，故不推荐用于8岁以下的儿童，除非预期的利益高于可能的危险。' },
        { title: '| 老年用药', desc: '本品的临床试验没有包括足够多的65岁以上的患者，所以不能判断老年人用药后的反应是否和年轻人相同。老年患者的剂量选择要谨慎，通常从最小剂量开始，因为老年人出现肝脏、肾脏或心脏功能降低的可能较高，并可能同时患有其它疾病或正在使用其它药物治疗。' },
        { title: '| 药物相互作用', desc: '1. 由于四环素能降低凝血酶原的活性，故本品与抗凝血药合用时，应降低抗凝血药的剂量。<br> 2. 由于制酸药（如碳酸氢钠、铝、钙、镁）可与四环素类药物合用形成不溶性络合物而使四环素类药物的吸收减少、活性降低，故盐酸米诺环素与制酸药应避免同时服用。含铁的制剂可削弱盐酸米诺环素的吸收。<br>3. 降血脂药物考来烯胺（cholestyramine）或考来替泊（colestipol）与本品合用时，可能影响本品的吸收...' },
        { title: '| 国内注射剂体外配伍', desc: '' },
        { title: '| 药品配对信息', desc: '' },
        { title: '| 给药途径配对信息', desc: '' },
      ],
    };
  },
  methods: {
    onCollect() {
      this.show = !this.show;
    },
  },
};
</script>
<style lang="scss" scoped>
.drugs-for-details {
  margin:16px 12px 0px;
}
.medicine-page{
  background: #fff;
  div:nth-of-type(2) h6:nth-of-type(1){
    font-size: 16px;
  }
  h6, p{
    margin: 0;
  }
}
.font-title {
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  text-align: left;
  line-height: 30px;
  color: #333333;
}
.font-content {
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #666666;
  text-align: justify;
  text-align-last:left;
}
.medicine-page-title {
  // $border-color
  border-bottom: 2px $border-color solid;
}
</style>
