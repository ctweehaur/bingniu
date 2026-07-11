/**
 * 互动古文教学平台 - 《病牛》原文核心词解数据包
 */

const poemData = [
    // 第一句：耕犁千亩实千箱，
    { text: "耕", py: "gēng", zh: "耕作、犁地。指老牛用犁翻松土地，准备播种。", en: "to plow / to till" },
    { text: "犁", py: "lí", zh: "犁地。指用农具翻土。", en: "to plow" },
    { text: "千亩", py: "qiān mǔ", zh: "形容耕种的面积非常广阔，并非确指一千亩，而是极言其多。", en: "thousands of acres (figuratively: vast farmland)", exam: true },
    { text: "实", py: "shí", zh: "充实、装满。指粮仓被谷物填满。", en: "to fill / to pack full" },
    { text: "千箱", py: "qiān xiāng", zh: "形容收获的粮食极多，装满了成千上万的粮仓。箱：粮仓。", en: "thousands of granaries (figuratively: abundant harvest)", exam: true },
    { text: "，", punc: true },

    // 第二句：力尽筋疲谁复伤？
    { text: "力尽", py: "lì jìn", zh: "力气已经完全耗尽、用光。", en: "strength completely exhausted" },
    { text: "筋疲", py: "jīn pí", zh: "筋骨极度疲劳，浑身没有力气。", en: "muscles utterly fatigued" },
    { text: "谁复", py: "shuí fù", zh: "又有谁会再……呢？（反问语气，表示没有人会）", en: "who would still...?" },
    { text: "伤", py: "shāng", zh: "哀怜、同情、怜悯。", en: "to pity / to sympathize", exam: true },
    { text: "？", punc: true },

    // 第三句：但得众生皆得饱，
    { text: "但得", py: "dàn dé", zh: "只要能够、只希望。", en: "as long as / if only" },
    { text: "众生", py: "zhòng shēng", zh: "一切有生命的众生，这里指天下百姓、所有人。", en: "all living beings / all people", exam: true },
    { text: "皆得", py: "jiē dé", zh: "都能够获得。", en: "all can get / all are able to" },
    { text: "饱", py: "bǎo", zh: "吃饱、温饱。", en: "to be full / to have enough to eat" },
    { text: "，", punc: true },

    // 第四句：不辞羸病卧残阳。
    { text: "不辞", py: "bù cí", zh: "不推辞、不逃避、心甘情愿地承受。", en: "not to refuse / willingly to bear" },
    { text: "羸", py: "léi", zh: "瘦弱、衰弱。指老牛因劳累过度而身体瘦弱。", en: "weak / emaciated", exam: true },
    { text: "病", py: "bìng", zh: "生病、病倒。", en: "ill / sick" },
    { text: "卧", py: "wò", zh: "躺卧、趴着。", en: "to lie down" },
    { text: "残阳", py: "cán yáng", zh: "夕阳、落日。象征晚年、生命的最后时光。", en: "setting sun / twilight (symbolizing old age)", exam: true },
    { text: "。", punc: true }
];

console.log("成功加载：bingniu_text 原文数据包");
