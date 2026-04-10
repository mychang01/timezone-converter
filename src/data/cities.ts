export interface City {
  name: string;
  slug: string;
  tz: string;
  flag: string;
  country: string;
}

export const TAIPEI: City = {
  name: '台北',
  slug: 'taipei',
  tz: 'Asia/Taipei',
  flag: '🇹🇼',
  country: '台灣',
};

export const CITIES: City[] = [
  TAIPEI,
  { name: '東京', slug: 'tokyo', tz: 'Asia/Tokyo', flag: '🇯🇵', country: '日本' },
  { name: '首爾', slug: 'seoul', tz: 'Asia/Seoul', flag: '🇰🇷', country: '韓國' },
  { name: '上海', slug: 'shanghai', tz: 'Asia/Shanghai', flag: '🇨🇳', country: '中國' },
  { name: '香港', slug: 'hong-kong', tz: 'Asia/Hong_Kong', flag: '🇭🇰', country: '香港' },
  { name: '新加坡', slug: 'singapore', tz: 'Asia/Singapore', flag: '🇸🇬', country: '新加坡' },
  { name: '曼谷', slug: 'bangkok', tz: 'Asia/Bangkok', flag: '🇹🇭', country: '泰國' },
  { name: '胡志明市', slug: 'ho-chi-minh', tz: 'Asia/Ho_Chi_Minh', flag: '🇻🇳', country: '越南' },
  { name: '馬尼拉', slug: 'manila', tz: 'Asia/Manila', flag: '🇵🇭', country: '菲律賓' },
  { name: '雅加達', slug: 'jakarta', tz: 'Asia/Jakarta', flag: '🇮🇩', country: '印尼' },
  { name: '吉隆坡', slug: 'kuala-lumpur', tz: 'Asia/Kuala_Lumpur', flag: '🇲🇾', country: '馬來西亞' },
  { name: '加爾各答', slug: 'kolkata', tz: 'Asia/Kolkata', flag: '🇮🇳', country: '印度' },
  { name: '杜拜', slug: 'dubai', tz: 'Asia/Dubai', flag: '🇦🇪', country: '阿聯酋' },
  { name: '伊斯坦堡', slug: 'istanbul', tz: 'Europe/Istanbul', flag: '🇹🇷', country: '土耳其' },
  { name: '莫斯科', slug: 'moscow', tz: 'Europe/Moscow', flag: '🇷🇺', country: '俄羅斯' },
  { name: '雅典', slug: 'athens', tz: 'Europe/Athens', flag: '🇬🇷', country: '希臘' },
  { name: '赫爾辛基', slug: 'helsinki', tz: 'Europe/Helsinki', flag: '🇫🇮', country: '芬蘭' },
  { name: '羅馬', slug: 'rome', tz: 'Europe/Rome', flag: '🇮🇹', country: '義大利' },
  { name: '巴黎', slug: 'paris', tz: 'Europe/Paris', flag: '🇫🇷', country: '法國' },
  { name: '柏林', slug: 'berlin', tz: 'Europe/Berlin', flag: '🇩🇪', country: '德國' },
  { name: '阿姆斯特丹', slug: 'amsterdam', tz: 'Europe/Amsterdam', flag: '🇳🇱', country: '荷蘭' },
  { name: '馬德里', slug: 'madrid', tz: 'Europe/Madrid', flag: '🇪🇸', country: '西班牙' },
  { name: '蘇黎世', slug: 'zurich', tz: 'Europe/Zurich', flag: '🇨🇭', country: '瑞士' },
  { name: '布魯塞爾', slug: 'brussels', tz: 'Europe/Brussels', flag: '🇧🇪', country: '比利時' },
  { name: '維也納', slug: 'vienna', tz: 'Europe/Vienna', flag: '🇦🇹', country: '奧地利' },
  { name: '華沙', slug: 'warsaw', tz: 'Europe/Warsaw', flag: '🇵🇱', country: '波蘭' },
  { name: '倫敦', slug: 'london', tz: 'Europe/London', flag: '🇬🇧', country: '英國' },
  { name: '都柏林', slug: 'dublin', tz: 'Europe/Dublin', flag: '🇮🇪', country: '愛爾蘭' },
  { name: '里斯本', slug: 'lisbon', tz: 'Europe/Lisbon', flag: '🇵🇹', country: '葡萄牙' },
  { name: '紐約', slug: 'new-york', tz: 'America/New_York', flag: '🇺🇸', country: '美國東岸' },
  { name: '芝加哥', slug: 'chicago', tz: 'America/Chicago', flag: '🇺🇸', country: '美國中部' },
  { name: '丹佛', slug: 'denver', tz: 'America/Denver', flag: '🇺🇸', country: '美國山區' },
  { name: '洛杉磯', slug: 'los-angeles', tz: 'America/Los_Angeles', flag: '🇺🇸', country: '美國西岸' },
  { name: '溫哥華', slug: 'vancouver', tz: 'America/Vancouver', flag: '🇨🇦', country: '加拿大' },
  { name: '多倫多', slug: 'toronto', tz: 'America/Toronto', flag: '🇨🇦', country: '加拿大' },
  { name: '墨西哥城', slug: 'mexico-city', tz: 'America/Mexico_City', flag: '🇲🇽', country: '墨西哥' },
  { name: '聖保羅', slug: 'sao-paulo', tz: 'America/Sao_Paulo', flag: '🇧🇷', country: '巴西' },
  { name: '布宜諾斯艾利斯', slug: 'buenos-aires', tz: 'America/Argentina/Buenos_Aires', flag: '🇦🇷', country: '阿根廷' },
  { name: '雪梨', slug: 'sydney', tz: 'Australia/Sydney', flag: '🇦🇺', country: '澳洲' },
  { name: '墨爾本', slug: 'melbourne', tz: 'Australia/Melbourne', flag: '🇦🇺', country: '澳洲' },
  { name: '奧克蘭', slug: 'auckland', tz: 'Pacific/Auckland', flag: '🇳🇿', country: '紐西蘭' },
  { name: '檀香山', slug: 'honolulu', tz: 'Pacific/Honolulu', flag: '🇺🇸', country: '夏威夷' },
  { name: '開羅', slug: 'cairo', tz: 'Africa/Cairo', flag: '🇪🇬', country: '埃及' },
  { name: '奈洛比', slug: 'nairobi', tz: 'Africa/Nairobi', flag: '🇰🇪', country: '肯亞' },
  { name: '約翰尼斯堡', slug: 'johannesburg', tz: 'Africa/Johannesburg', flag: '🇿🇦', country: '南非' },
];

export const OTHER_CITIES = CITIES.filter((c) => c.tz !== TAIPEI.tz);

export function cityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}
