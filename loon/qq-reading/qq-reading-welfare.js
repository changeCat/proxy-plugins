const welfarePage = 'uniteqqreader://webpage/fullscreen/https://yuedu.reader.qq.com/event/welfare/';
const video = $argument === 'video';

$notification.post(
  'QQ 阅读',
  video ? '看小视频领好礼' : '每日签到提醒',
  video
    ? '点按进入福利页，在「看小视频领好礼」中选择「立即观看」。奖励以页面显示为准。'
    : '点按进入福利页，查看今天的签到格。显示「今日已签」即已完成签到。',
  { openUrl: welfarePage }
);
$done();
