import { injectGlobal } from 'styled-components';

injectGlobal`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1539523065577'); /* IE9*/
  src: url('./iconfont.eot?t=1539523065577#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1539523065577') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1539523065577#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
