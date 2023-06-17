// 开发环境使用配置，发布模式配置请去config.json修改
let CONFIG = {
  LOGIN_SERVER: 'http://121.37.108.243:85/auth-server',
  UUMS_SERVER: 'http://121.37.108.243:85/license-operations',
  DSS_SERVER: 'http://121.37.108.243:8000/license-share',
  DOWNLOAD_SERVER: 'http://121.37.108.243:85/nationalestate-server/',
  MONITOR_SERVER: '/auth/',
  FMSURL: 'http://121.37.108.243:85/fms',
  OFD_URI: 'http://121.37.108.243:85/ofd_viewer/index.html',
  APP_KEY: 'BDC_GXXT',
  APP_INFO: {
    areaCode: 150000, // 省级区域代码
    systemNameCN: '不动产登记电子证照信息共享系统',
    systemNameEN:
      'Realestate Registration Electronic License Data Sharing System',
    comparyName: '****科技有限公司'
  }
};

// 生产环境下，通过异步请求的方式调取config.json文件中的配置
if (process.env.NODE_ENV === 'production') {
  let pXmlRequest;
  let pResponseData;
  if (window.XMLHttpRequest) {
    pXmlRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // IE6, IE5 浏览器执行代码
    pXmlRequest = new window.ActiveXObject();
  }
  if (pXmlRequest) {
    pXmlRequest.open('GET', 'config.json', false);
    pXmlRequest.send(null);
    if (pXmlRequest.status === 200 && pXmlRequest.responseText) {
      pResponseData = JSON.parse(pXmlRequest.responseText);
      CONFIG = pResponseData;
    }
  }
}

export default CONFIG;
