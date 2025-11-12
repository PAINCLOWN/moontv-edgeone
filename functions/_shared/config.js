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
