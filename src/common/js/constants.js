const APP_FUNC_RESPONSE_CALLBACK = 'appFuncResponseCallback';

const appFuncNameMap = {
  GET_ACCOUNTINFO: 'getAccountInfo', // 获取用户信息，token之类的
  CLEARCACHE: 'clearCache', // 清楚浏览器缓存
  TAKEPHOTO: 'takePhoto', // 拍照功能
  HANDWRITING: 'handWriting', // 手写版功能
  RECORDSOUND: 'recordSound', // 录音功能
  RECORDVIDEO: 'recordVideo', // 录像功能
  PREVIEWIMG: 'previewImg', // 预览图片功能
  PLAYSOUND: 'playSound', // 播放录音功能
  PLAYVIDEO: 'playVideo', // 播放视频功能
  OPENSCAN: 'openScan', // 扫码功能
};

const mineMenu = [
  [
    { title: '我的订单', name: 'account', icon: 'icon-', color: '#7FCCFF' },
    { title: '个人资料', name: 'personal', icon: 'gerenziliao', color: '#5EDC90' },
    { title: '我的评价', name: 'evaluate', icon: 'pingjia1', color: '#FFB24E' },
    { title: '我的收藏', name: 'collection', icon: 'shoucangjia', color: '#5EDC90' },
  ],
  [
    { title: '帮助与反馈', name: 'help', icon: 'bangzhu', color: '#5EDC90' },
    { title: '设置', name: 'setting', icon: 'xitongshezhi', color: '#7FCCFF' },
  ],
];

export {
  APP_FUNC_RESPONSE_CALLBACK,
  appFuncNameMap,
  mineMenu,
};
