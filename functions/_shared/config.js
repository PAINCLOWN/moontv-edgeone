// 共享配置文件 - 从 config.json 和 src/lib/config.ts 迁移而来

export const API_CONFIG = {
  search: {
    path: '?ac=videolist&wd=',
    pagePath: '?ac=videolist&wd={query}&pg={page}',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      Accept: 'application/json',
    },
  },
  detail: {
    path: '?ac=videolist&ids=',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      Accept: 'application/json',
    },
  },
};

// API站点配置 - 从 config.json 复制
export const API_SITES = {
  "cache_time": 7200,
  "api_site": {
    "dyttzy": {
      "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
      "name": "电影天堂资源",
      "detail": "http://caiji.dyttzyapi.com"
    },
    "heimuer": {
      "api": "https://www.heimuer.tv/api.php/provide/vod",
      "name": "黑木耳|点播",
      "detail": "https://heimuer.tv"
    },
    "ruyi": {
      "api": "http://cj.rycjapi.com/api.php/provide/vod",
      "name": "如意资源"
    },
    "bfzy": {
      "api": "https://bfzyapi.com/api.php/provide/vod/",
      "name": "暴风|点播"
    },
    "tyyszy": {
      "api": "https://tyyszy.com/api.php/provide/vod",
      "name": "天涯资源"
    },
    "ffzy": {
      "api": "http://ffzy5.tv/api.php/provide/vod",
      "name": "非凡影视",
      "detail": "http://ffzy5.tv"
    },
    "zy360": {
      "api": "https://360zy.com/api.php/provide/vod/",
      "name": "360|点播"
    },
    "maotaizy": {
      "api": "https://caiji.maotaizy.cc/api.php/provide/vod",
      "name": "茅台资源"
    },
    "wolong": {
      "api": "https://collect.wolongzyw.com/api.php/provide/vod/",
      "name": "卧龙|点播"
    },
    "jisu": {
      "api": "https://jszyapi.com/api.php/provide/vod",
      "name": "极速|点播",
      "detail": "https://jszyapi.com"
    },
    "dbzy": {
      "api": "https://dbzy.tv/api.php/provide/vod",
      "name": "豆瓣资源"
    },
    "mozhua": {
      "api": "https://mozhuazy.com/api.php/provide/vod",
      "name": "魔爪资源"
    },
    "mdzy": {
      "api": "https://caiji.moduapi.cc/api.php/provide/vod/",
      "name": "魔都|点播"
    },
    "zuid": {
      "api": "http://zuidazy.me/api.php/provide/vod/",
      "name": "最大|点播"
    },
    "yinghua": {
      "api": "https://m3u8.apiyhzy.com/api.php/provide/vod/",
      "name": "樱花|点播"
    },
    "wujin": {
      "api": "https://api.wujinapi.com/api.php/provide/vod/",
      "name": "无尽|点播"
    },
    "wwzy": {
      "api": "https://wwzy.tv/api.php/provide/vod",
      "name": "旺旺短剧"
    },
    "ikun": {
      "api": "https://ikunzyapi.com/api.php/provide/vod/",
      "name": "ikun|点播"
    },
    "lzi": {
      "api": "https://cj.lziapi.com/api.php/provide/vod/",
      "name": "量子|点播"
    },
    "xiaomaomi": {
      "api": "https://zy.xmm.hk/api.php/provide/vod",
      "name": "小猫咪资源"
    },
    "qiqi": {
      "api": "https://www.qiqidys.com/api.php/provide/vod",
      "name": "七七资源"
    },
    "hongniu": {
      "api": "https://www.hongniuzy2.com/api.php/provide/vod/",
      "name": "红牛|点播"
    },
    "kaifang": {
      "api": "http://vod-demo.onrender.com/pubdovod.php",
      "name": "開放電影"
    },
    "youzhi": {
      "api": "http://api.1080zyku.com/inc/api.php/provide/vod",
      "name": "优质资源库"
    },
    "sanshijiu": {
      "api": "http://39kan.com/api.php/provide/vod",
      "name": "39影視"
    },
    "tiantang": {
      "api": "http://vipmv.cc/api.php/provide/vod",
      "name": "天堂资源"
    },
    "lehuo": {
      "api": "http://lehootv.com/api.php/provide/vod",
      "name": "乐活影视"
    },
    "tangrenjie": {
      "api": "http://tangrenjie.tv/api.php/provide/vod/at/xm",
      "name": "唐人街"
    },
    "kudian": {
      "api": "http://api.kuapi.cc/api.php/provide/vod",
      "name": "酷点资源"
    },
    "senlin": {
      "api": "http://slapibf.com/api.php/provide/vod",
      "name": "森林资源"
    },
    "yingku": {
      "api": "http://api.ykapi.net/api.php/provide/vod",
      "name": "影库资源网"
    },
    "kuache": {
      "api": "https://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8/",
      "name": "快车|点播"
    },
    "tantan": {
      "api": "http://apittzy.com/api.php/provide/vod",
      "name": "探探资源"
    },
    "shandian": {
      "api": "http://sdzyapi.com/api.php/provide/vod/",
      "name": "闪电|点播"
    },
    "jinying": {
      "api": "http://jyzyapi.com/provide/vod/from/jinyingm3u8",
      "name": "金鹰资源"
    },
    "guangsu": {
      "api": "http://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8",
      "name": "光速资源"
    },
    "aosika": {
      "api": "http://aosikazy.com/api.php/provide/vod",
      "name": "奥斯卡资源网"
    },
    "laoya": {
      "api": "http://api.apilyzy.com/api.php/provide/vod",
      "name": "老鸭资源采集"
    },
    "uku": {
      "api": "https://api.ukuapi.com/api.php/provide/vod/",
      "name": "U酷|点播"
    },
    "beidouxing": {
      "api": "http://m3u8.bdxzyapi.com/api.php/provide/vod",
      "name": "北斗星资源"
    },
    "feisu": {
      "api": "https://www.feisuzyapi.com/api.php/provide/vod/",
      "name": "飞速|点播"
    },
    "kuaibo": {
      "api": "http://www.kuaibozy.com/api.php/provide/vod",
      "name": "快播资源"
    },
    "baidu": {
      "api": "https://api.apibdzy.com/api.php/provide/vod/",
      "name": "百度|点播"
    },
    "aidan": {
      "api": "http://lovedan.net/api.php/provide/vod",
      "name": "艾旦影视"
    },
    "piaohua": {
      "api": "http://www.ahjiuman.com/api.php/provide/vod/at/json",
      "name": "飘花|点播"
    },
    "wangmin": {
      "api": "http://prinevillesda.org/api.php/provide/vod",
      "name": "网民电影"
    },
    "siwa": {
      "api": "http://siwazyw.cc/api.php/provide/vod",
      "name": "丝袜资源"
    },
    "tiankong": {
      "api": "http://m3u8.tiankongapi.com/api.php/provide/vod/from/tkm3u8",
      "name": "天空資源"
    },
    "haiwaikan": {
      "api": "https://haiwaikan.com/api.php/provide/vod/",
      "name": "海外看|点播🪜"
    },
    "citong": {
      "api": "http://ys9.cttv.vip/api.php/provide/vod/",
      "name": "刺桐|点播"
    },
    "guanwang": {
      "api": "http://gwcms.cttv.vip/api.php/provide/vod/",
      "name": "官网|点播"
    },
    "yeyu": {
      "api": "https://yyff.540734621.xyz/api.php/provide/vod/",
      "name": "业余|点播"
    },
    "huaweiba": {
      "api": "https://hw8.live/api.php/provide/vod/",
      "name": "华为吧|点播"
    },
    "xiaohuangren": {
      "api": "https://iqyi.xiaohuangrentv.com/api.php/provide/vod/",
      "name": "小黄人|点播"
    },
    "niuniu": {
      "api": "https://api.niuniuzy.me/api.php/provide/vod/",
      "name": "牛牛|点播"
    },
    "yaya": {
      "api": "https://cj.yayazy.net/api.php/provide/vod/",
      "name": "丫丫|点播"
    },
    "haohua": {
      "api": "https://hhzyapi.com/api.php/provide/vod/",
      "name": "火狐|点播"
    },
    "sijiu": {
      "api": "https://49zyw.com/api.php/provide/vod/",
      "name": "四九|点播"
    },
    "suoni": {
      "api": "https://suoniapi.com/api.php/provide/vod/",
      "name": "索尼|点播"
    },
    "feifan": {
      "api": "http://cj.ffzyapi.com/api.php/provide/vod/",
      "name": "非凡|点播"
    },
    "kuaiikan": {
      "api": "https://www.kuaikan-api.com/api.php/provide/vod/",
      "name": "快看|点播"
    },
    "xiongzhang": {
      "api": "https://xzcjz.com/api.php/provide/vod/",
      "name": "熊掌|点播"
    },
    "tianyi": {
      "api": "https://www.911ysw.top/tianyi.php/provide/vod/",
      "name": "天翼|点播"
    },
    "huya": {
      "api": "https://www.huyaapi.com/api.php/provide/vod/",
      "name": "虎牙|点播"
    },
    "piaoling": {
      "api": "https://p2100.net/api.php/provide/vod/",
      "name": "飘零|点播"
    },
    "subo": {
      "api": "https://subocaiji.com/api.php/provide/vod/",
      "name": "速博|点播"
    },
    "qihu": {
      "api": "https://caiji.qhzyapi.com/api.php/provide/vod/",
      "name": "奇虎|点播"
    },
    "xinlang": {
      "api": "https://api.xinlangapi.com/xinlangapi.php/provide/vod/",
      "name": "新浪|点播"
    },
    "kuaiyun": {
      "api": "https://www.kuaiyunzy.com/api.php/provide/vod/",
      "name": "快云|点播"
    }
  }
};



// 缓存时间配置
export const CACHE_TIME = 7200; // 2小时

// 获取API站点列表
export function getApiSites() {
  return Object.entries(API_SITES).map(([key, site]) => ({
    ...site,
    key,
  }));
}

// 获取缓存时间
export function getCacheTime() {
  return CACHE_TIME;
}

// 清理HTML标签的函数
export function cleanHtmlTags(html) {
  if (!html) return '';
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&[^;]+;/g, ' ')
    .trim();
}
