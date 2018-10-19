// import HOME from '../containers/HOME/Index.vue';
// import YYGH from '../containers/YYGH/Index.vue';
import YSLB from '../containers/YSLB/Index.vue';
import YYXX from '../containers/YYXX/Index.vue';
import KSXX from '../containers/KSXX/Index.vue';
import YSZY from '../containers/YSZY/Index.vue';
import GRZX from '../containers/GRZX/Index.vue';
import WDGH from '../containers/WDGH/Index.vue';
import GHXQ from '../containers/GHXQ/Index.vue';
import YYXQ from '../containers/YYXQ/Index.vue';
// import WDYY from '../containers/WDYY/Index.vue';
import JFJL from '../containers/JFJL/Index.vue';
import DCLB from '../containers/DCLB/Index.vue';
import JKDA from '../containers/JKDA/Index.vue';
import JCBG from '../containers/JCBG/Index.vue';
import GRXX from '../containers/GRXX/Index.vue';
import SCKP from '../containers/SCKP/Index.vue';
import KPBL from '../containers/KPBL/Index.vue';
import JCXX from '../containers/JCXX/Index.vue';
import HZLB from '../containers/HZLB/Index.vue';
import SFLR from '../containers/SFLR/Index.vue';
import WDSC from '../containers/WDSC/Index.vue';
import YYJJ from '../containers/YYJJ/Index.vue';
import JZTM from '../containers/JZTM/Index.vue';
import SFYZ from '../containers/SFYZ/Index.vue';
import SMKS from '../containers/SMKS/Index.vue';

const HOME = r => require.ensure([], () => r(require('../containers/HOME/Index.vue')));
const YYGH = r => require.ensure([], () => r(require('../containers/YYGH/Index.vue')));
const WDYY = r => require.ensure([], () => r(require('../containers/WDYY/Index.vue')));

export default {
  HOME,
  YYGH,
  YSLB,
  YYXX,
  KSXX,
  YSZY,
  GRZX,
  WDGH,
  GHXQ,
  YYXQ,
  WDYY,
  JFJL,
  DCLB,
  JKDA,
  JCBG,
  GRXX,
  SCKP,
  KPBL,
  JCXX,
  HZLB,
  SFLR,
  WDSC,
  YYJJ,
  JZTM,
  SFYZ,
  SMKS
};
