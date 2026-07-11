/**
 * 互动古文教学平台 - 《病牛》简答题特训题库
 */

const shortQData = [
    {
        id: "Q1",
        qZh: "何以见得诗中老牛的遭遇悲惨？[3分]",
        qPy: "hé yǐ jiàn dé shī zhōng lǎo niú de zāo yù bēi cǎn [3 fēn]",
        qEn: "How does the poem demonstrate that the old ox's plight is tragic? [3 marks]",
        sZh: [
            "1. 第一步：老牛一生做了什么？付出了多少劳动？",
            "2. 第二步：它现在的身体状况如何？",
            "3. 第三步：人们是怎么对待它的？是否有人同情它？"
        ],
        sPy: [
            "dì yī bù lǎo niú yī shēng zuò le shén me fù chū le duō shǎo láo dòng",
            "dì èr bù tā xiàn zài de shēn tǐ zhuàng kuàng rú hé",
            "dì sān bù rén men shì zěn me duì dài tā de shì fǒu yǒu rén tóng qíng tā"
        ],
        sEn: "Step 1: What has the ox done its whole life? How much toil has it given?<br>Step 2: What is its current physical condition?<br>Step 3: How do people treat it? Does anyone pity it?",
        aZh: "它一生劳累，耗尽力气、筋疲力尽地为人们耕田种粮（2分），却得不到人们的同情、关心、怜惜（1分）。",
        aPy: "tā yī shēng láo lèi hào jìn lì qì jīn pí lì jìn dì wéi rén men gēng tián zhòng liáng （2 fēn） què dé bù dào rén men de tóng qíng guān xīn lián xī （1 fēn）",
        aEn: "It toiled all its life, exhausting all its strength to plow and farm for people (2 marks), yet it receives no sympathy, care, or pity from anyone (1 mark)."
    },
    {
        id: "Q2",
        qZh: "老牛的付出换来什么成果？[4分]",
        qPy: "lǎo niú de fù chū huàn lái shén me chéng guǒ [4 fēn]",
        qEn: "What achievements result from the old ox's toil? [4 marks]",
        sZh: [
            "1. 第一步：第一句中的“实千箱”说明了什么？",
            "2. 第二步：第三句中的“众生皆得饱”又说明了什么？"
        ],
        sPy: [
            "dì yī bù dì yī jù zhōng de shí qiān xiāng shuō míng le shén me",
            "dì èr bù dì sān jù zhōng de zhòng shēng jiē dé bǎo yòu shuō míng le shén me"
        ],
        sEn: "Step 1: What does 'fill thousands of granaries' in the first line indicate?<br>Step 2: What does 'all people get enough to eat' in the third line indicate?",
        aZh: "病牛的辛勤劳动换来了千座装满米谷的粮仓（2分），让百姓都能够温饱（2分）。",
        aPy: "bìng niú de xīn qín láo dòng huàn lái le qiān zuò zhuāng mǎn mǐ gǔ de liáng cāng （2 fēn） ràng bǎi xìng dōu néng gòu wēn bǎo （2 fēn）",
        aEn: "The sick ox's labor results in thousands of granaries filled with grain (2 marks), ensuring that all people have enough to eat and stay warm (2 marks)."
    },
    {
        id: "Q3",
        qZh: "诗中的老牛有什么品质值得我们赞赏？[3分]",
        qPy: "shī zhōng de lǎo niú yǒu shén me pǐn zhì zhí dé wǒ men zàn shǎng [3 fēn]",
        qEn: "What qualities of the old ox are worthy of our admiration? [3 marks]",
        sZh: [
            "1. 第一步：老牛辛劳一生却无人怜惜，它是抱怨还是继续奉献？",
            "2. 第二步：它即使病弱到了极点，依然愿意做什么？"
        ],
        sPy: [
            "dì yī bù lǎo niú xīn láo yī shēng què wú rén lián xī tā shì bào yuàn hái shì jì xù fèng xiàn",
            "dì èr bù tā jí shǐ bìng ruò dào le jí diǎn yī rán yuàn yì zuò shén me"
        ],
        sEn: "Step 1: Though toiling all life without appreciation, does the ox complain or continue to give?<br>Step 2: Even when utterly weak and ill, what is it still willing to do?",
        aZh: "任劳任怨、甘心奉献（3分）。它不惜牺牲自己，也要造福他人。",
        aPy: "rèn láo rèn yuàn gān xīn fèng xiàn （3 fēn） tā bù xī xī shēng zì jǐ yě yào zào fú tā rén",
        aEn: "It is duty-bound without complaint and selflessly devoted (3 marks). It sacrifices itself to benefit others."
    }
];

console.log("成功加载：shortq 简答题数据包");
