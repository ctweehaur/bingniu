/**
 * 互动古文教学平台 - 《病牛》客观题数据包
 */

const quizQuestions = [
    {
        id: 1,
        text: "“力尽筋疲谁复伤”中“伤”字最准确的含义是什么？",
        py: "lì jìn jīn pí shuí fù shāng zhōng shāng zì zuì zhǔn què de hán yì shì shí me",
        en: "What is the most accurate meaning of '伤' in 'strength exhausted, muscles weary, who would pity?'",
        options: [
            {
                text: "哀怜、同情",
                py: "āi lián tóng qíng",
                en: "To pity, to sympathize",
                correct: true,
                explanation: "正确！一个“伤”字道尽了病牛无人问津、无人同情的孤苦境遇，也暗含了诗人自身被贬后的愤懑与悲哀。",
                explanationPy: "zhèng què yí gè shāng zì dào jìn le bìng niú wú rén wèn jīn wú rén tóng qíng de gū kǔ jìng yù yě àn hán le shī rén zì shēn bèi biǎn hòu de fèn mèn yǔ bēi āi",
                explanationEn: "Correct! This character captures the ox's utter isolation and lack of sympathy, subtly reflecting the poet's own feelings after being wrongfully exiled."
            },
            {
                text: "伤害、受伤",
                py: "shāng hài shòu shāng",
                en: "To hurt, to injure",
                correct: false,
                explanation: "干扰项分析：这是现代汉语中最常见的义项，但古诗中“伤”常通“慯”，表示哀伤、哀怜之意，此处并非指身体受伤。",
                explanationPy: "gān rǎo xiàng fēn xī zhè shì xiàn dài hàn yǔ zhōng zuì cháng jiàn de yì xiàng dàn gǔ shī zhōng shāng cháng tōng shāng biǎo shì āi shāng āi lián zhī yì cǐ chù bìng fēi zhǐ shēn tǐ shòu shāng",
                explanationEn: "Distractor: In modern usage this means physical injury, but in classical poetry '伤' often conveys grief or pity, not bodily harm."
            },
            {
                text: "忧伤、悲痛",
                py: "yōu shāng bēi tòng",
                en: "To be grieved, sorrowful",
                correct: false,
                explanation: "干扰项分析：“伤”确有忧伤义，但此处是反问“谁复伤”，指向“谁会哀怜我”，强调的是他人对自己的态度，而非自己忧伤的情绪。",
                explanationPy: "gān rǎo xiàng fēn xī shāng què yǒu yōu shāng yì dàn cǐ chù shì fǎn wèn shuí fù shāng zhǐ xiàng shuí huì āi lián wǒ qiáng diào de shì tā rén duì zì jǐ de tài dù ér fēi zì jǐ yōu shāng de qíng xù",
                explanationEn: "Distractor: While '伤' can mean sorrow, the rhetorical question 'who would pity' focuses on others' attitude toward the ox, not the ox's own emotions."
            },
            {
                text: "伤感、惆怅",
                py: "shāng gǎn chóu chàng",
                en: "Sentimental, melancholic",
                correct: false,
                explanation: "干扰项分析：过度弱化了词义。“伤”在此处是外化的“被同情”，而不是内化的“自伤感”，方向完全不同。",
                explanationPy: "gān rǎo xiàng fēn xī guò dù ruò huà le cí yì shāng zài cǐ chù shì wài huà de bèi tóng qíng ér bù shì nèi huà de zì shāng gǎn fāng xiàng wán quán bù tóng",
                explanationEn: "Distractor: This overly weakens the meaning. Here '伤' denotes external reception of pity, not internal melancholy."
            }
        ]
    },
    {
        id: 2,
        text: "“但得众生皆得饱”中的“众生”指的是谁？",
        py: "dàn dé zhòng shēng jiē dé bǎo zhōng de zhòng shēng zhǐ de shì shuí",
        en: "Who does 'all living beings' refer to in the poem?",
        options: [
            {
                text: "天下百姓、所有人",
                py: "tiān xià bǎi xìng suǒ yǒu rén",
                en: "All people across the land",
                correct: true,
                explanation: "正确！“众生”在佛家指一切有情生命，此处化用为天下黎民百姓。诗人笔下的老牛甘愿牺牲自己，只为让所有人都能吃饱。",
                explanationPy: "zhèng què zhòng shēng zài fó jiā zhǐ yī qiè yǒu qíng shēng mìng cǐ chù huà yòng wéi tiān xià lí mín bǎi xìng shī rén bǐ xià de lǎo niú gān yuàn xī shēng zì jǐ zhǐ wèi ràng suǒ yǒu rén dōu néng chī bǎo",
                explanationEn: "Correct! 'Sentient beings' in Buddhist context refers to all living things; here it's used to mean all common people. The ox willingly sacrifices itself so everyone can have enough to eat."
            },
            {
                text: "诗人自己",
                py: "shī rén zì jǐ",
                en: "The poet himself",
                correct: false,
                explanation: "干扰项分析：将“众生”狭隘化为“自我”，完全违背了李纲这首诗以天下为己任的博大胸怀与托物言志的宏阔格局。",
                explanationPy: "gān rǎo xiàng fēn xī jiāng zhòng shēng xiá ài huà wéi zì wǒ wán quán wéi bèi le lǐ gāng zhè shǒu shī yǐ tiān xià wéi jǐ rèn de bó dà xiōng huái yǔ tuō wù yán zhì de hóng kuò gé jú",
                explanationEn: "Distractor: Narrowing 'all beings' to just oneself contradicts the poem's grand spirit of bearing the world's burdens."
            },
            {
                text: "诗人支持的同僚",
                py: "shī rén zhī chí de tóng liáo",
                en: "The poet's supporters and colleagues",
                correct: false,
                explanation: "干扰项分析：没有文本依据。全诗没有任何暗示指向“同僚”或“朋党”，将“众生”降格为小团体是过度政治化的误读。",
                explanationPy: "gān rǎo xiàng fēn xī méi yǒu wén běn yī jù quán shī méi yǒu rèn hé àn shì zhǐ xiàng tóng liáo huò péng dǎng jiāng zhòng shēng jiàng gé wèi xiǎo tuán tǐ shì guò dù zhèng zhì huà de wù dú",
                explanationEn: "Distractor: No textual support. Reducing 'all beings' to a faction misreads the poem's universal compassion."
            },
            {
                text: "佛教信徒",
                py: "fó jiào xìn tú",
                en: "Buddhist believers",
                correct: false,
                explanation: "干扰项分析：“众生”虽是佛教术语，但在此诗语境中已经世俗化，指的是全体人民，而非特指佛教徒。",
                explanationPy: "gān rǎo xiàng fēn xī zhòng shēng suī shì fó jiào shù yǔ dàn zài cǐ shī yǔ jìng zhōng yǐ jīng shì sú huà zhǐ de shì quán tǐ rén mín ér fēi tè zhǐ fó jiào tú",
                explanationEn: "Distractor: Although a Buddhist term, here it is secularized to mean all people, not exclusively Buddhists."
            }
        ]
    },
    {
        id: 3,
        text: "“不辞羸病卧残阳”中“残阳”象征什么？",
        py: "bù cí léi bìng wò cán yáng zhōng cán yáng xiàng zhēng shén me",
        en: "What does 'setting sun' symbolize in this line?",
        options: [
            {
                text: "晚年/生命的最后时光",
                py: "wǎn nián shēng mìng de zuì hòu shí guāng",
                en: "Old age / the final period of life",
                correct: true,
                explanation: "正确！“残阳”即夕阳，象征着老牛（以及诗人自己）生命接近终点的晚年。但它即便到了暮年，依然甘愿奉献，令人动容。",
                explanationPy: "zhèng què cán yáng jí xī yáng xiàng zhēng zhe lǎo niú yǐ jí shī rén zì jǐ shēng mìng jiē jìn zhōng diǎn de wǎn nián dàn tā jí biàn dào le mù nián yī rán gān yuàn fèng xiàn lìng rén dòng róng",
                explanationEn: "Correct! The setting sun symbolizes old age and life's end. Even in old age, the ox (and poet) still willingly sacrifices itself."
            },
            {
                text: "战乱/国家危亡",
                py: "zhàn luàn guó jiā wēi wáng",
                en: "War / national crisis",
                correct: false,
                explanation: "干扰项分析：“残阳”在中晚唐诗中常用于暗示国运衰微，但本诗中并无战乱背景。全诗主题是托物言志，而非忧国忧时。",
                explanationPy: "gān rǎo xiàng fēn xī cán yáng zài zhōng wǎn táng shī zhōng cháng yòng yú àn shì guó yùn shuāi wēi dàn běn shī zhōng bìng wú zhàn luàn bèi jǐng quán shī zhǔ tí shì tuō wù yán zhì ér fēi yōu guó yōu shí",
                explanationEn: "Distractor: Later Tang poetry uses 'setting sun' to suggest dynastic decline, but this poem lacks any war context. Its theme is self-metaphor and ideals, not national crisis."
            },
            {
                text: "美丽的景色",
                py: "měi lì de jǐng sè",
                en: "A beautiful landscape",
                correct: false,
                explanation: "干扰项分析：将“残阳”仅仅视为写景，完全忽略了诗歌的托物言志传统和象征手法。这里的“残阳”是情感与生命的符号。",
                explanationPy: "gān rǎo xiàng fēn xī jiāng cán yáng jǐn jǐn shì wèi xiě jǐng wán quán hū lüè le shī gē de tuō wù yán zhì chuán tǒng hé xiàng zhēng shǒu fǎ zhè lǐ de cán yáng shì qíng gǎn yǔ shēng mìng de fú hào",
                explanationEn: "Distractor: Reducing 'setting sun' to mere landscape ignores the tradition of expressing ideals through imagery. Here it's a symbol of life and emotion."
            },
            {
                text: "朝代的终结",
                py: "cháo dài de zhōng jié",
                en: "The end of a dynasty",
                correct: false,
                explanation: "干扰项分析：过度政治化解读。李纲此诗写于个人被贬之际，并非王朝覆灭之时，“残阳”不涉及朝代更替。",
                explanationPy: "gān rǎo xiàng fēn xī guò dù zhèng zhì huà jiě dú lǐ gāng cǐ shī xiě yú gè rén bèi biǎn zhī jì bìng fēi wáng cháo fù miè zhī shí cán yáng bù shè jí cháo dài gēng tì",
                explanationEn: "Distractor: Over-politicized interpretation. The poem was written during the poet's personal exile, not during dynastic collapse, so 'setting sun' does not signify a regime change."
            }
        ]
    },
    {
        id: 4,
        text: "这首咏物诗最突出的写作手法是什么？",
        py: "zhè shǒu yǒng wù shī zuì tū chū de xiě zuò shǒu fǎ shì shén me",
        en: "What is the most prominent writing technique of this poem?",
        options: [
            {
                text: "托物言志/借物喻人",
                py: "tuō wù yán zhì jiè wù yù rén",
                en: "Expressing ideals through imagery / using objects to metaphorize people",
                correct: true,
                explanation: "正确！李纲借病牛的悲惨遭遇与无私奉献，来比喻自己虽遭贬谪却依然心系百姓、甘愿牺牲的崇高人格，是典型的托物言志。",
                explanationPy: "zhèng què lǐ gāng jiè bìng niú de bēi cǎn zāo yù yǔ wú sī fèng xiàn lái bǐ yù zì jǐ suī zāo biǎn zhé què yī rán xīn xì bǎi xìng gān yuàn xī shēng de chóng gāo rén gé shì diǎn xíng de tuō wù yán zhì",
                explanationEn: "Correct! Li Gang uses the sick ox's tragic fate and selfless dedication to metaphorize his own lofty character: wrongly exiled yet still caring for all people."
            },
            {
                text: "借景抒情",
                py: "jiè jǐng shū qíng",
                en: "Expressing emotion through scenery",
                correct: false,
                explanation: "干扰项分析：全诗以“病牛”这一物象为核心，而非以“景”为核心，因此不属于借景抒情。",
                explanationPy: "gān rǎo xiàng fēn xī quán shī yǐ bìng niú zhè yī wù xiàng wèi hé xīn ér fēi yǐ jǐng wèi hé xīn yīn cǐ bù shǔ yú jiè jǐng shū qíng",
                explanationEn: "Distractor: The entire poem centers on the 'sick ox' as an object, not on scenery. Thus it's not classified as 'expressing through landscape.'"
            },
            {
                text: "直抒胸臆",
                py: "zhí shū xiōng yì",
                en: "Direct expression of feelings",
                correct: false,
                explanation: "干扰项分析：诗人并未直接说“我如何如何”，而是通过老牛的形象间接传达自己的情感与志向，属于间接抒情而非直抒胸臆。",
                explanationPy: "gān rǎo xiàng fēn xī shī rén bìng wèi zhí jiē shuō wǒ rú hé rú hé ér shì tōng guò lǎo niú de xíng xiàng jiān jiē chuán dá zì jǐ de qíng gǎn yǔ zhì xiàng shǔ yú jiān jiē shū qíng ér fēi zhí shū xiōng yì",
                explanationEn: "Distractor: The poet does not directly say 'I...'; he conveys his feelings indirectly through the ox's image, so it is indirect, not direct."
            },
            {
                text: "对比衬托",
                py: "duì bǐ chèn tuō",
                en: "Contrast and contrastive expression",
                correct: false,
                explanation: "干扰项分析：诗中确实有“勤劳”与“悲惨”、“奉献”与“病弱”的内在张力，但最核心的写作手法并非对比，而是以物喻人的托物言志。",
                explanationPy: "gān rǎo xiàng fēn xī shī zhōng què shí yǒu qín láo yǔ bēi cǎn fèng xiàn yǔ bìng ruò de nèi zài zhāng lì dàn zuì hé xīn de xiě zuò shǒu fǎ bìng fēi duì bǐ ér shì yǐ wù yù rén de tuō wù yán zhì",
                explanationEn: "Distractor: While contrasts do exist internally, the core technique remains self-metaphor through an object, not contrast for its own sake."
            }
        ]
    }
];

console.log("成功加载：bingniu_quiz 客观题数据包");
