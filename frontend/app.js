const viewTitles = {
  selector: "智能选型",
  test: "打法性格测试",
  equipment: "器材评分库",
  champions: "冠军装备",
  community: "球友文字帖",
  profile: "个人资料",
  data: "数据可信度"
};

const levelNames = {
  beginner: "初级",
  intermediate: "中级",
  advanced: "高级",
  professional: "专业"
};

const officialBladeSpecs = {
  "fzd-alc": {
    brand: "蝴蝶 Butterfly",
    series: "Fan Zhendong",
    model: "ALC",
    officialName: "Fan Zhendong ALC",
    keywords: ["樊振东 ALC", "蝴蝶 樊振东 ALC", "Fan Zhendong ALC"],
    material: "5层木 + 2层 Arylate-Carbon",
    structure: "5-ply wood + 2 Arylate-Carbon",
    layers: "5+2",
    layerCount: 7,
    placement: "外置纤维",
    thickness: "5.8 mm",
    headSize: "157×150 mm",
    reaction: "11.8",
    vibration: "10.3",
    sourceName: "Butterfly Global 官方产品页",
    sourceUrl: "https://www.butterfly-global.com/en/products/detail/37221.html",
    verified: "官方参数已核"
  },
  "bty-timo-boll-alc": {
    brand: "蝴蝶 Butterfly",
    series: "Timo Boll",
    model: "ALC",
    officialName: "Timo Boll ALC",
    keywords: ["波尔 ALC", "蝴蝶 波尔 ALC", "Timo Boll ALC"],
    material: "5层木 + 2层 Arylate-Carbon",
    structure: "5-ply wood + 2 Arylate-Carbon",
    layers: "5+2",
    layerCount: 7,
    placement: "外置纤维",
    thickness: "5.8 mm",
    headSize: "157×150 mm",
    reaction: "11.8",
    vibration: "10.3",
    sourceName: "Butterfly Global 官方产品页",
    sourceUrl: "https://www.butterfly-global.com/en/products/detail/35861.html",
    verified: "官方参数已核"
  },
  "bty-viscaria": {
    brand: "蝴蝶 Butterfly",
    series: "Viscaria",
    model: "Viscaria",
    officialName: "Viscaria",
    keywords: ["维斯卡利亚", "蝴蝶 Viscaria", "Viscaria"],
    material: "5层木 + 2层 Arylate-Carbon",
    structure: "5-ply wood + 2 Arylate-Carbon",
    layers: "5+2",
    layerCount: 7,
    placement: "外置纤维",
    thickness: "5.8 mm",
    headSize: "157×150 mm",
    reaction: "11.8",
    vibration: "10.3",
    sourceName: "Butterfly Global 官方产品页",
    sourceUrl: "https://www.butterfly-global.com/en/products/detail/30041.html",
    verified: "官方参数已核"
  },
  "bty-innerforce-layer-alc": {
    brand: "蝴蝶 Butterfly",
    series: "Innerforce Layer",
    model: "ALC",
    officialName: "Innerforce Layer ALC",
    keywords: ["Innerforce Layer ALC", "蝴蝶 Innerforce Layer ALC", "内置 ALC"],
    material: "5层木 + 2层 Arylate-Carbon",
    structure: "5-ply wood + 2 Arylate-Carbon [Innerfiber]",
    layers: "5+2",
    layerCount: 7,
    placement: "内置纤维",
    thickness: "6.0 mm",
    headSize: "157×150 mm",
    reaction: "10.7",
    vibration: "9.4",
    sourceName: "Butterfly Global 官方产品页",
    sourceUrl: "https://www.butterfly-global.com/en/products/detail/36701.html",
    verified: "官方参数已核"
  },
  "bty-lin-yun-ju-szlc": {
    brand: "蝴蝶 Butterfly",
    series: "Lin Yun-Ju",
    model: "Super ZLC",
    officialName: "Lin Yun-Ju Super ZLC",
    keywords: ["林昀儒 Super ZLC", "林昀儒 SZLC", "Lin Yun-Ju Super ZLC"],
    material: "5层木 + 2层 Super ZL-Carbon",
    structure: "5-ply wood + 2 Super ZL-Carbon",
    layers: "5+2",
    layerCount: 7,
    placement: "外置纤维",
    thickness: "5.6 mm",
    headSize: "157×150 mm",
    reaction: "12.3",
    vibration: "11.1",
    sourceName: "Butterfly Global 官方产品页",
    sourceUrl: "https://www.butterfly-global.com/en/products/detail/37131.html",
    verified: "官方参数已核"
  },
  "bty-harimoto-super-alc": {
    brand: "蝴蝶 Butterfly",
    series: "Harimoto Tomokazu Innerforce",
    model: "Super ALC",
    officialName: "Harimoto Tomokazu Innerforce Super ALC",
    keywords: ["张本智和 Super ALC", "Harimoto Tomokazu Innerforce Super ALC"],
    material: "5层木 + 2层 Super ALC",
    structure: "5-ply wood + 2 Super ALC [Innerfiber]",
    layers: "5+2",
    layerCount: 7,
    placement: "内置纤维",
    thickness: "5.9 mm",
    headSize: "158×152 mm",
    reaction: "11.4",
    vibration: "9.5",
    sourceName: "Butterfly Global 官方产品页",
    sourceUrl: "https://www.butterfly-global.com/en/products/detail/37331.html",
    verified: "官方参数已核"
  },
  "stiga-cybershape-carbon": {
    brand: "斯帝卡 STIGA",
    series: "Cybershape",
    model: "Carbon CWT Truls Edition",
    officialName: "Cybershape Carbon CWT Truls Edition",
    keywords: ["Cybershape Carbon", "斯帝卡 Cybershape Carbon", "赛博六边形"],
    material: "5+2层 CCF 碳纤维结构",
    structure: "5+2-ply blade based on CCF technology",
    layers: "5+2",
    layerCount: 7,
    placement: "Close Core Fibre",
    thickness: "官网页未在参数表公开",
    headSize: "异形 Cybershape 拍面",
    reaction: "官网页未在参数表公开",
    vibration: "官网页未在参数表公开",
    sourceName: "STIGA 官方产品页",
    sourceUrl: "https://www.stigasports.com/en/product/cybershape-carbon-cwt-truls-edition",
    verified: "官方参数已核"
  },
  "stiga-clipper-wood": {
    brand: "斯帝卡 STIGA",
    series: "Clipper",
    model: "Clipper Wood",
    officialName: "Clipper Wood",
    keywords: ["CL 七夹", "斯帝卡 CL", "Clipper Wood", "斯帝卡 CL 七夹"],
    material: "7层纯木",
    structure: "layers: 7",
    layers: "7",
    layerCount: 7,
    placement: "纯木",
    thickness: "官网页未在参数表公开",
    headSize: "官网页未在参数表公开",
    reaction: "官网 speed 8.2",
    vibration: "官网 control 4.9",
    sourceName: "STIGA 官方产品页",
    sourceUrl: "https://www.stigasports.com/en/product/clipper-wood",
    verified: "官方参数已核"
  }
};

const bladeSpecAliases = {
  "blade-bty-fzd-alc": "fzd-alc",
  "viscaria": "bty-viscaria",
  "blade-bty-viscaria": "bty-viscaria",
  "blade-bty-harimoto-salc": "bty-harimoto-super-alc",
  "harimoto-super-alc": "bty-harimoto-super-alc",
  "stiga-cybershape-carbon": "stiga-cybershape-carbon",
  "blade-stiga-clipper": "stiga-clipper-wood",
  "clipper": "stiga-clipper-wood"
};

const equipment = [
  {
    id: "fzd-alc",
    name: "樊振东 ALC",
    brand: "蝴蝶 Butterfly",
    type: "底板",
    rating: 9.4,
    tags: ["外置 ALC", "高上限", "A 级证据"],
    style: "两面弧圈",
    price: "高",
    summary: "速度和支撑明确，适合发力完整的快弧打法。",
    photo: "./assets/product-photos/optimized/butterfly_fzd_alc.jpg",
    photoSource: "Butterfly 官方产品页",
    comments: [
      { user: "近台不退", text: "借力很爽，小球要有手上控制。", likes: 18 },
      { user: "正手还得练", text: "正手国套能压住，反手外套更舒服。", likes: 11 }
    ]
  },
  {
    id: "d09c",
    name: "蝴蝶 Dignics 09C",
    brand: "蝴蝶 Butterfly",
    type: "胶皮",
    rating: 9.5,
    tags: ["粘弹", "旋转", "A 级证据"],
    style: "正手弧圈",
    price: "高",
    summary: "摩擦和弧线强，发力门槛高于普通涩套。",
    photo: "./assets/product-photos/optimized/butterfly_d09c.jpg",
    photoSource: "Butterfly 官方产品页",
    comments: [
      { user: "拧拉科研员", text: "台内质量很好，退台需要主动发力。", likes: 21 },
      { user: "省钱失败", text: "贵是真的贵，质量也是真的质量。", likes: 16 }
    ]
  },
  {
    id: "dhs-301x",
    name: "红双喜 301X",
    brand: "红双喜 DHS",
    type: "底板",
    rating: 8.8,
    tags: ["进阶", "国套友好", "待补参"],
    style: "弧圈快攻",
    price: "中高",
    summary: "适合从纯木升级到纤维板的进阶球友。",
    photo: "./assets/product-photos/optimized/dhs_301x.jpg",
    photoSource: "DHS Canada 公开产品页",
    comments: [
      { user: "每周三练", text: "正手狂飙能吃住，反手别配太硬。", likes: 14 }
    ]
  },
  {
    id: "h3neo",
    name: "狂飙3 NEO",
    brand: "红双喜 DHS",
    type: "胶皮",
    rating: 9.0,
    tags: ["粘性", "正手", "待补参"],
    style: "正手弧圈",
    price: "中高",
    summary: "经典正手方案，动作和发力越完整越能打出质量。",
    photo: "./assets/product-photos/optimized/dhs_h3neo.jpg",
    photoSource: "DHS Canada 公开产品页",
    comments: [
      { user: "退台半步", text: "不主动发力会觉得闷，练起来很值。", likes: 24 }
    ]
  },
  {
    id: "fastarc-g1",
    name: "尼塔库 Fastarc G-1",
    brand: "尼塔库 Nittaku",
    type: "胶皮",
    rating: 8.9,
    tags: ["反手", "旋转", "待补参"],
    style: "均衡弧圈",
    price: "中高",
    summary: "反手稳定、旋转充足，也能放在正手做均衡配置。",
    photo: "./assets/product-photos/optimized/nittaku_fastarc_g1.jpg",
    photoSource: "Nittaku 官方产品页",
    comments: [
      { user: "反手先上台", text: "比想象中扎实，不是无脑弹。", likes: 9 }
    ]
  },
  {
    id: "clipper",
    name: "CL 七夹（Clipper Wood）",
    brand: "斯帝卡 STIGA",
    type: "底板",
    rating: 8.7,
    tags: ["七夹纯木", "近台", "待补参"],
    style: "近台快攻",
    price: "中高",
    summary: "近台压迫和连续快攻很顺，弧线需要胶皮配合。",
    photo: "./assets/product-photos/optimized/stiga_clipper_wood.jpg",
    photoSource: "STIGA 官方产品页",
    comments: [
      { user: "老学校快攻", text: "七夹味道很足，借力很直接。", likes: 12 }
    ]
  },
  {
    id: "rakza7",
    name: "亚萨卡 Rakza 7",
    brand: "亚萨卡 Yasaka",
    type: "胶皮",
    rating: 8.5,
    tags: ["均衡", "进阶", "待补参"],
    style: "控制弧圈",
    price: "中",
    summary: "上手友好，适合不想一上来就被高硬度惩罚的球友。",
    photo: "./assets/product-photos/optimized/yasaka_rakza7.jpg",
    photoSource: "Yasaka 官网 CDN",
    comments: [
      { user: "别飞就行", text: "反手够稳，正手也不虚。", likes: 8 }
    ]
  },
  {
    id: "defense-board",
    name: "松下浩二防守板",
    brand: "VICTAS",
    type: "底板",
    rating: 8.6,
    tags: ["削球", "控制", "待补参"],
    style: "削防",
    price: "中高",
    summary: "削球和防反分支的代表候选，适合特殊打法单独建模。",
    photo: "./assets/product-photos/optimized/victas_koji_matsushita_defensive.jpg",
    photoSource: "VICTAS 官方产品页",
    comments: [
      { user: "削一板再说", text: "底劲够，防守区间清楚。", likes: 7 }
    ]
  }
];

const gearCatalog = [
  { id: "blade-dhs-long5", type: "blade", name: "红双喜 狂飙龙5", shortName: "狂飙龙5", brand: "红双喜 DHS", style: ["arc", "power"], level: ["advanced", "professional"], price: [1180, 1680], photo: "./assets/product-photos/optimized/dhs_long5.jpg", source: "DHS Canada 公开产品页", notes: "持球深、正手弧圈质量高，适合主动发力。" },
  { id: "blade-dhs-long5x", type: "blade", name: "红双喜 狂飙龙5X", shortName: "狂飙龙5X", brand: "红双喜 DHS", style: ["arc", "fast"], level: ["advanced", "professional"], price: [980, 1480], photo: "./assets/product-photos/optimized/dhs_long5x.jpg", source: "DHS Canada 公开产品页", notes: "比龙5更利落，适合想要速度但仍保留持球的打法。" },
  { id: "blade-dhs-301x", type: "blade", name: "红双喜 301X", shortName: "301X", brand: "红双喜 DHS", style: ["arc", "control"], level: ["intermediate", "advanced"], price: [500, 850], photo: "./assets/product-photos/optimized/dhs_301x.jpg", source: "DHS Canada 公开产品页", notes: "预算和性能平衡，正手国套友好。" },
  { id: "blade-bty-fzd-alc", type: "blade", name: "蝴蝶 樊振东 ALC", shortName: "樊振东 ALC", brand: "Butterfly", style: ["arc", "fast"], level: ["advanced", "professional"], price: [1180, 1680], photo: "./assets/product-photos/optimized/butterfly_fzd_alc.jpg", source: "Butterfly 官方产品页", notes: "外置 ALC，速度和支撑明确。" },
  { id: "blade-bty-viscaria", type: "blade", name: "蝴蝶 Viscaria 维斯卡利亚", shortName: "维斯卡利亚", brand: "Butterfly", style: ["arc", "fast"], level: ["advanced", "professional"], price: [1080, 1580], photo: "./assets/product-photos/optimized/butterfly_viscaria.jpg", source: "Butterfly 官方产品页", notes: "经典外置 ALC 快弧模板，反手借力舒服。" },
  { id: "blade-bty-harimoto-inner", type: "blade", name: "蝴蝶 张本智和 Innerforce ALC", shortName: "张本智和 Innerforce ALC", brand: "Butterfly", style: ["arc", "control"], level: ["intermediate", "advanced", "professional"], price: [1180, 1680], photo: "./assets/product-photos/optimized/butterfly_harimoto_inner_alc.jpg", source: "Butterfly Global 官方产品页", notes: "内置 ALC，持球更深，适合重视旋转和相持。" },
  { id: "blade-bty-harimoto-salc", type: "blade", name: "蝴蝶 张本智和 Super ALC", shortName: "张本智和 Super ALC", brand: "Butterfly", style: ["arc", "power"], level: ["advanced", "professional"], price: [1680, 2380], photo: "./assets/product-photos/optimized/butterfly_harimoto_super_alc.jpg", source: "Butterfly Global 官方产品页", notes: "支撑更强，上限更高，对发力完整度要求更高。" },
  { id: "blade-bty-zjk-alc", type: "blade", name: "蝴蝶 张继科 ALC", shortName: "张继科 ALC", brand: "Butterfly", style: ["fast", "arc"], level: ["advanced", "professional"], price: [1180, 1680], photo: "./assets/product-photos/optimized/butterfly_zjk_alc.jpg", source: "Butterfly 官方产品页", notes: "外置 ALC 快弧分支；红张别名先单独待核，避免和多尼克张继科线混淆。" },
  { id: "blade-stiga-clipper", type: "blade", name: "斯帝卡 CL 七夹", shortName: "CL 七夹", brand: "STIGA", style: ["fast"], level: ["intermediate", "advanced"], price: [450, 780], photo: "./assets/product-photos/optimized/stiga_clipper_wood.jpg", source: "STIGA 官方产品页", notes: "七夹纯木，近台速度和连续压迫强。" },
  { id: "blade-yasaka-resonate", type: "blade", name: "亚萨卡 Resonate GI", shortName: "Resonate GI", brand: "Yasaka", style: ["control", "arc"], level: ["intermediate", "advanced"], price: [480, 680], photo: "./assets/product-photos/optimized/yasaka_206554.jpg", source: "Yasaka 官网 CDN", notes: "上手友好，适合控制弧圈和中级进阶。" },
  { id: "fh-h3-commercial", type: "rubber", side: "fh", name: "红双喜 普狂3 NEO", shortName: "普狂3 NEO", brand: "红双喜 DHS", style: ["arc", "control"], level: ["intermediate", "advanced"], price: [120, 160], photo: "./assets/product-photos/optimized/dhs_h3neo.jpg", source: "DHS Canada 公开产品页", sponge: "橙海绵", degrees: ["38", "39", "40"], notes: "性价比高，适合作为正手国套入门。" },
  { id: "fh-h2-neo", type: "rubber", side: "fh", name: "红双喜 狂飙2 NEO", shortName: "狂飙2 NEO", brand: "红双喜 DHS", style: ["fast", "spin"], level: ["intermediate", "advanced"], price: [135, 190], photo: "./assets/product-photos/optimized/dhs_hurricane_2_neo.jpg", source: "DHS 公开产品图", sponge: "橙海绵", degrees: ["39", "40"], notes: "出球更直接，适合近台抢冲和更快节奏。" },
  { id: "fh-h3-50", type: "rubber", side: "fh", name: "红双喜 狂飙3-50", shortName: "狂飙3-50", brand: "红双喜 DHS", style: ["control", "arc"], level: ["beginner", "intermediate"], price: [150, 210], photo: "./assets/product-photos/optimized/dhs_hurricane_3_50.jpg", source: "DHS 公开产品图", sponge: "柔弹海绵", degrees: ["35", "37"], notes: "比传统狂飙更容易打透，适合力量不足或重视容错。" },
  { id: "fh-h8", type: "rubber", side: "fh", name: "红双喜 狂飙8", shortName: "狂飙8", brand: "红双喜 DHS", style: ["arc", "control"], level: ["intermediate", "advanced"], price: [165, 230], photo: "./assets/product-photos/optimized/dhs_hurricane_8.jpg", source: "DHS 公开产品图", sponge: "高弹海绵", degrees: ["39", "40"], notes: "粘性国套里更容易借力，训练频率不高也更友好。" },
  { id: "fh-h8-80", type: "rubber", side: "fh", name: "红双喜 狂飙8-80", shortName: "狂飙8-80", brand: "红双喜 DHS", style: ["arc", "control"], level: ["beginner", "intermediate", "advanced"], price: [175, 240], photo: "./assets/product-photos/optimized/dhs_hurricane_8_80.jpg", source: "DHS 公开产品图", sponge: "80 号高弹海绵", degrees: ["37", "38", "39"], notes: "弹性和容错更好，适合正手轻发力或反手粘性路线。" },
  { id: "fh-h3-prov-orange", type: "rubber", side: "fh", name: "红双喜 省狂3 NEO 橙海绵", shortName: "省狂橙海绵", brand: "红双喜 DHS", style: ["arc", "spin"], level: ["advanced", "professional"], price: [255, 330], photo: "./assets/product-photos/optimized/dhs_h3neo.jpg", source: "DHS Canada 公开产品页", sponge: "橙海绵", degrees: ["39", "40", "41"], notes: "比普狂更扎实，39 度均衡，40 度更吃发力。" },
  { id: "fh-h3-prov-blue", type: "rubber", side: "fh", name: "红双喜 省狂3 NEO 蓝海绵", shortName: "省狂蓝海绵", brand: "红双喜 DHS", style: ["arc", "power"], level: ["advanced", "professional"], price: [380, 480], photo: "./assets/product-photos/optimized/dhs_h3neo.jpg", source: "DHS Canada 公开产品页", sponge: "蓝海绵", degrees: ["39", "40"], notes: "底劲更足，适合正手主动发力和中远台质量。" },
  { id: "fh-h3-national-blue", type: "rubber", side: "fh", name: "红双喜 国狂3 蓝海绵", shortName: "国狂蓝海绵", brand: "红双喜 DHS", style: ["arc", "power"], level: ["professional"], price: [820, 1050], photo: "./assets/product-photos/optimized/dhs_h3neo.jpg", source: "DHS Canada 公开产品页", sponge: "蓝海绵", degrees: ["39", "40", "41"], notes: "价格和真伪门槛高，专业或强发力用户再考虑。" },
  { id: "fh-donic-bluegrip-j1", type: "rubber", side: "fh", name: "多尼克 BlueGrip J1", shortName: "BlueGrip J1", brand: "DONIC", style: ["arc", "spin"], level: ["advanced", "professional"], price: [285, 360], photo: "./assets/product-photos/optimized/donic_bluegrip_j1.jpg", source: "DONIC 官方产品页", notes: "粘弹路线，适合作为正手外套化的旋转方案。" },
  { id: "fh-d09c", type: "rubber", side: "fh", name: "蝴蝶 Dignics 09C", shortName: "Dignics 09C", brand: "Butterfly", style: ["arc", "spin"], level: ["advanced", "professional"], price: [500, 560], photo: "./assets/product-photos/optimized/butterfly_d09c.jpg", source: "Butterfly 官方产品页", notes: "粘弹高质量，台内和弧线强。" },
  { id: "fh-rakza-z", type: "rubber", side: "fh", name: "亚萨卡 Rakza Z", shortName: "Rakza Z", brand: "Yasaka", style: ["arc", "spin"], level: ["intermediate", "advanced"], price: [245, 330], photo: "./assets/product-photos/optimized/yasaka_rakza_z.jpg", source: "Yasaka 公开产品图", notes: "粘性外套路线，容错比高硬国套更好。" },
  { id: "fh-rakza7", type: "rubber", side: "fh", name: "亚萨卡 Rakza 7", shortName: "Rakza 7", brand: "Yasaka", style: ["control", "arc"], level: ["beginner", "intermediate", "advanced"], price: [190, 250], photo: "./assets/product-photos/optimized/yasaka_rakza7.jpg", source: "Yasaka 官网 CDN", notes: "均衡涩套，正手上手友好，也方便后期升级。" },
  { id: "fh-fastarc-g1", type: "rubber", side: "fh", name: "尼塔库 Fastarc G-1", shortName: "Fastarc G-1", brand: "Nittaku", style: ["arc", "spin"], level: ["intermediate", "advanced"], price: [245, 330], photo: "./assets/product-photos/optimized/nittaku_fastarc_g1.jpg", source: "Nittaku 官方产品页", notes: "旋转稳定，适合作为正手均衡外套路线。" },
  { id: "fh-stiga-dna-h", type: "rubber", side: "fh", name: "斯帝卡 DNA Platinum H", shortName: "DNA Platinum H", brand: "STIGA", style: ["fast", "arc"], level: ["advanced", "professional"], price: [315, 410], photo: "./assets/product-photos/optimized/stiga_dna_platinum_h.jpg", source: "STIGA 官方产品图", notes: "速度和支撑强，适合近台快弧和反手强压打法。" },
  { id: "fh-tibhar-k3", type: "rubber", side: "fh", name: "挺拔 Hybrid K3", shortName: "Hybrid K3", brand: "TIBHAR", style: ["arc", "spin"], level: ["advanced", "professional"], price: [360, 460], photo: "./assets/product-photos/optimized/tibhar_hybrid_k3.jpg", source: "TIBHAR 公开产品图", notes: "粘弹混合路线，正手质量和容错之间更平衡。" },
  { id: "fh-omega7-pro", type: "rubber", side: "fh", name: "骄猛 Omega VII Pro", shortName: "Omega VII Pro", brand: "XIOM", style: ["fast", "arc"], level: ["intermediate", "advanced"], price: [285, 380], photo: "./assets/product-photos/optimized/xiom_omega7_pro.jpg", source: "XIOM 公开产品图", notes: "弹性和速度明显，适合不想灌胶的进阶正手。" },
  { id: "bh-d05", type: "rubber", side: "bh", name: "蝴蝶 Dignics 05", shortName: "Dignics 05", brand: "Butterfly", style: ["fast", "arc"], level: ["advanced", "professional"], price: [500, 560], photo: "./assets/product-photos/optimized/butterfly_d05.jpg", source: "Butterfly 官方产品页", notes: "反手上限高，借力和主动摩擦都强。" },
  { id: "bh-tenergy19", type: "rubber", side: "bh", name: "蝴蝶 Tenergy 19", shortName: "Tenergy 19", brand: "Butterfly", style: ["arc", "spin"], level: ["advanced", "professional"], price: [470, 540], photo: "./assets/product-photos/optimized/butterfly_tenergy_19.jpg", source: "Butterfly 官方产品页", notes: "咬球和弧线更细腻，反手拧拉和连续更友好。" },
  { id: "bh-glayzer", type: "rubber", side: "bh", name: "蝴蝶 Glayzer", shortName: "Glayzer", brand: "Butterfly", style: ["control", "arc"], level: ["intermediate", "advanced"], price: [300, 380], photo: "./assets/product-photos/optimized/butterfly_glayzer.jpg", source: "Butterfly 官方产品页", notes: "比顶级外套更省预算，反手容错和耐用性更平衡。" },
  { id: "bh-rozena", type: "rubber", side: "bh", name: "蝴蝶 Rozena", shortName: "Rozena", brand: "Butterfly", style: ["control", "arc"], level: ["intermediate", "advanced"], price: [270, 320], photo: "./assets/product-photos/optimized/butterfly_rozena.jpg", source: "Butterfly 官方产品页", notes: "容错好，反手进阶友好。" },
  { id: "bh-rakza7", type: "rubber", side: "bh", name: "亚萨卡 Rakza 7", shortName: "Rakza 7", brand: "Yasaka", style: ["control", "arc"], level: ["intermediate", "advanced"], price: [190, 250], photo: "./assets/product-photos/optimized/yasaka_rakza7.jpg", source: "Yasaka 官网 CDN", notes: "均衡稳定，适合反手先上台。" },
  { id: "bh-fastarc-g1", type: "rubber", side: "bh", name: "尼塔库 Fastarc G-1", shortName: "Fastarc G-1", brand: "Nittaku", style: ["arc", "spin"], level: ["intermediate", "advanced"], price: [245, 330], photo: "./assets/product-photos/optimized/nittaku_fastarc_g1.jpg", source: "Nittaku 官方产品页", notes: "反手旋转和稳定性兼顾，也可正手均衡配置。" },
  { id: "bh-vega-europe", type: "rubber", side: "bh", name: "骄猛 Vega Europe", shortName: "Vega Europe", brand: "XIOM", style: ["control", "arc"], level: ["beginner", "intermediate"], price: [150, 220], photo: "./assets/product-photos/optimized/xiom_vega_europe.jpg", source: "XIOM 公开产品图", notes: "软弹容错好，反手过渡和借力上台友好。" },
  { id: "bh-v15-extra", type: "rubber", side: "bh", name: "VICTAS V15 Extra", shortName: "V15 Extra", brand: "VICTAS", style: ["fast", "arc"], level: ["advanced", "professional"], price: [280, 360], photo: "./assets/product-photos/optimized/victas_v15_extra.jpg", source: "VICTAS 官方产品图", notes: "反手速度和支撑强，适合快撕快带。" },
  { id: "bh-bluestorm-z1", type: "rubber", side: "bh", name: "多尼克 Bluestorm Z1 Turbo", shortName: "Bluestorm Z1 Turbo", brand: "DONIC", style: ["fast"], level: ["advanced", "professional"], price: [285, 360], photo: "./assets/product-photos/optimized/donic_bluestorm_z1_turbo.jpg", source: "DONIC 官方产品页", notes: "反手速度和弹性强，适合近台快撕。" },
  { id: "bh-victas-curl-p1v", type: "rubber", side: "bh", name: "VICTAS Curl P1V", shortName: "Curl P1V", brand: "VICTAS", style: ["defense"], level: ["intermediate", "advanced", "professional"], price: [190, 280], photo: "./assets/product-photos/optimized/victas_curl_p1v.jpg", source: "VICTAS 官方产品页", notes: "削防和颗粒分支候选，适合长胶防守与节奏变化。" }
];

const hurricaneVariants = [
  { id: "auto", label: "按水平自动选择", gearId: "" },
  { id: "commercial-38", label: "红双喜 普狂3 NEO 38度，控制优先", gearId: "fh-h3-commercial", degree: "38" },
  { id: "commercial-39", label: "红双喜 普狂3 NEO 39度，均衡入门", gearId: "fh-h3-commercial", degree: "39" },
  { id: "commercial-40", label: "红双喜 普狂3 NEO 40度，主动发力", gearId: "fh-h3-commercial", degree: "40" },
  { id: "h2-neo-40", label: "红双喜 狂飙2 NEO 40度，近台快冲", gearId: "fh-h2-neo", degree: "40" },
  { id: "h3-50-37", label: "红双喜 狂飙3-50 37度，轻发力容错", gearId: "fh-h3-50", degree: "37" },
  { id: "h8-39", label: "红双喜 狂飙8 39度，粘性易上手", gearId: "fh-h8", degree: "39" },
  { id: "h8-80-38", label: "红双喜 狂飙8-80 38度，弹性容错", gearId: "fh-h8-80", degree: "38" },
  { id: "prov-orange-39", label: "红双喜 省狂3 NEO 橙海绵 39度，进阶均衡", gearId: "fh-h3-prov-orange", degree: "39" },
  { id: "prov-orange-40", label: "红双喜 省狂3 NEO 橙海绵 40度，正手质量", gearId: "fh-h3-prov-orange", degree: "40" },
  { id: "prov-blue-39", label: "红双喜 省狂3 NEO 蓝海绵 39度，旋转底劲", gearId: "fh-h3-prov-blue", degree: "39" },
  { id: "prov-blue-40", label: "红双喜 省狂3 NEO 蓝海绵 40度，高阶发力", gearId: "fh-h3-prov-blue", degree: "40" },
  { id: "national-blue-40", label: "红双喜 国狂3 蓝海绵 40度，专业上限", gearId: "fh-h3-national-blue", degree: "40" },
  { id: "butterfly-d09c", label: "蝴蝶 Dignics 09C，粘弹高质量", gearId: "fh-d09c", degree: "" },
  { id: "yasaka-rakza-z", label: "亚萨卡 Rakza Z，粘性外套", gearId: "fh-rakza-z", degree: "" },
  { id: "yasaka-rakza7", label: "亚萨卡 Rakza 7，均衡涩套", gearId: "fh-rakza7", degree: "" },
  { id: "nittaku-g1", label: "尼塔库 Fastarc G-1，旋转均衡", gearId: "fh-fastarc-g1", degree: "" },
  { id: "donic-bluegrip-j1", label: "多尼克 BlueGrip J1，粘弹旋转", gearId: "fh-donic-bluegrip-j1", degree: "" },
  { id: "stiga-dna-h", label: "斯帝卡 DNA Platinum H，速度支撑", gearId: "fh-stiga-dna-h", degree: "" },
  { id: "tibhar-k3", label: "挺拔 Hybrid K3，混合粘弹", gearId: "fh-tibhar-k3", degree: "" },
  { id: "xiom-omega7-pro", label: "骄猛 Omega VII Pro，高弹快弧", gearId: "fh-omega7-pro", degree: "" }
];

const backhandPreferences = [
  { id: "auto", label: "按水平自动选择", gearId: "" },
  { id: "vega-europe-soft", label: "骄猛 Vega Europe，中软容错", gearId: "bh-vega-europe", hardness: "中软" },
  { id: "rakza7-medium", label: "亚萨卡 Rakza 7，中等硬度", gearId: "bh-rakza7", hardness: "中等" },
  { id: "rozena-medium", label: "蝴蝶 Rozena，中等偏软", gearId: "bh-rozena", hardness: "中等偏软" },
  { id: "glayzer-medium", label: "蝴蝶 Glayzer，中等偏硬", gearId: "bh-glayzer", hardness: "中等偏硬" },
  { id: "fastarc-g1-medium-hard", label: "尼塔库 Fastarc G-1，中硬旋转", gearId: "bh-fastarc-g1", hardness: "中硬" },
  { id: "tenergy19-high", label: "蝴蝶 Tenergy 19，高弹咬球", gearId: "bh-tenergy19", hardness: "高弹" },
  { id: "d05-hard", label: "蝴蝶 Dignics 05，高硬高弹", gearId: "bh-d05", hardness: "偏硬" },
  { id: "v15-extra-hard", label: "VICTAS V15 Extra，偏硬快撕", gearId: "bh-v15-extra", hardness: "偏硬" },
  { id: "bluestorm-z1-hard", label: "多尼克 Bluestorm Z1 Turbo，高弹偏硬", gearId: "bh-bluestorm-z1", hardness: "偏硬" },
  { id: "curl-p1v-pips", label: "VICTAS Curl P1V，长胶颗粒", gearId: "bh-victas-curl-p1v", hardness: "颗粒" }
];

const channelPriceSnapshots = {
  "blade-dhs-long5": { range: [1280, 1480], source: "渠道采集价快照" },
  "blade-dhs-long5x": { range: [1080, 1280], source: "渠道采集价快照" },
  "blade-dhs-301x": { range: [620, 720], source: "渠道采集价快照" },
  "blade-bty-fzd-alc": { range: [1390, 1590], source: "渠道采集价快照" },
  "blade-bty-viscaria": { range: [1280, 1480], source: "渠道采集价快照" },
  "blade-bty-harimoto-inner": { range: [1280, 1480], source: "渠道采集价快照" },
  "blade-bty-harimoto-salc": { range: [1880, 2180], source: "渠道采集价快照" },
  "blade-bty-zjk-alc": { range: [1280, 1480], source: "渠道采集价快照" },
  "blade-stiga-clipper": { range: [520, 680], source: "渠道采集价快照" },
  "blade-yasaka-resonate": { range: [520, 620], source: "渠道采集价快照" },
  "premade-dhs-4002": { range: [110, 170], source: "渠道采集价快照" },
  "premade-dhs-6002": { range: [190, 280], source: "渠道采集价快照" },
  "premade-palio-expert-3": { range: [150, 230], source: "渠道采集价快照" },
  "premade-joola-infinity-edge": { range: [220, 320], source: "渠道采集价快照" }
};

equipment.push(
  {
    id: "dhs-long5",
    name: "红双喜 狂飙龙5",
    brand: "红双喜 DHS",
    type: "底板",
    rating: 9.2,
    tags: ["内置纤维", "正手质量", "待补图"],
    style: "两面弧圈",
    price: "高",
    summary: "正手持球和弧线质量突出，适合主动发力的弧圈打法。",
    photo: "./assets/product-photos/optimized/dhs_long5.jpg",
    photoSource: "DHS Canada 公开产品页",
    comments: [{ user: "正手发力党", text: "配省狂更有底劲，反手别选太难打的。", likes: 17 }]
  },
  {
    id: "dhs-long5x",
    name: "红双喜 狂飙龙5X",
    brand: "红双喜 DHS",
    type: "底板",
    rating: 9.0,
    tags: ["龙5分支", "更利落", "待补图"],
    style: "弧圈快攻",
    price: "高",
    summary: "相对龙5更利落，适合想提高速度但仍保留持球的球友。",
    photo: "./assets/product-photos/optimized/dhs_long5x.jpg",
    photoSource: "DHS Canada 公开产品页",
    comments: [{ user: "中近台拉冲", text: "比龙5出球干脆，正手硬度要拿捏。", likes: 9 }]
  },
  {
    id: "harimoto-inner-alc",
    name: "张本智和 Innerforce ALC",
    brand: "蝴蝶 Butterfly",
    type: "底板",
    rating: 9.1,
    tags: ["内置 ALC", "相持", "待补图"],
    style: "控制弧圈",
    price: "高",
    summary: "持球感更深，适合旋转、相持和台内控制优先的配置。",
    photo: "./assets/product-photos/optimized/butterfly_harimoto_inner_alc.jpg",
    photoSource: "Butterfly Global 官方产品页",
    comments: [{ user: "内置党", text: "没有外置那么弹，连续性很舒服。", likes: 13 }]
  },
  {
    id: "zjk-alc-red",
    name: "张继科 ALC",
    brand: "蝴蝶 Butterfly",
    type: "底板",
    rating: 9.0,
    tags: ["外置 ALC", "近台快弧", "别名待核"],
    style: "近台快攻",
    price: "高",
    summary: "偏快弧和近台压迫；“红张”别名先不强绑定，避免和多尼克张继科新底板混淆。",
    photo: "./assets/product-photos/optimized/butterfly_zjk_alc.jpg",
    photoSource: "Butterfly 官方产品页",
    aliases: ["张继科 ALC", "蝴蝶张继科", "红张待确认"],
    catalogStatus: "别名需结合球友语境和官方型号继续校准。",
    comments: [{ user: "贴台抢点", text: "正手用国套能压住速度，反手可以配弹一点。", likes: 15 }]
  },
  {
    id: "viscaria",
    name: "维斯卡利亚 Viscaria",
    brand: "蝴蝶 Butterfly",
    type: "底板",
    rating: 9.3,
    tags: ["外置 ALC", "经典快弧", "待补图"],
    style: "两面弧圈",
    price: "高",
    summary: "经典外置 ALC 模板，速度、支撑和反手借力都很明确。",
    photo: "./assets/product-photos/optimized/butterfly_viscaria.jpg",
    photoSource: "Butterfly 官方产品页",
    comments: [{ user: "维斯老用户", text: "反手舒服，正手胶皮别太弹就好。", likes: 22 }]
  },
  {
    id: "h3-prov-orange",
    name: "省狂3 NEO 橙海绵",
    brand: "红双喜 DHS",
    type: "胶皮",
    rating: 9.1,
    tags: ["39/40度", "进阶正手", "待补参"],
    style: "正手弧圈",
    price: "中高",
    summary: "比普狂更扎实，39 度均衡，40 度更吃主动发力。",
    photo: "./assets/product-photos/optimized/dhs_h3neo.jpg",
    photoSource: "DHS Canada 公开产品页",
    comments: [{ user: "省狂39", text: "进阶够用了，不必一上来国狂。", likes: 19 }]
  },
  {
    id: "h3-prov-blue",
    name: "省狂3 NEO 蓝海绵",
    brand: "红双喜 DHS",
    type: "胶皮",
    rating: 9.2,
    tags: ["蓝海绵", "底劲", "待补参"],
    style: "正手弧圈",
    price: "高",
    summary: "底劲和支撑更强，适合正手主动发力和更高训练频率。",
    photo: "./assets/product-photos/optimized/dhs_h3neo.jpg",
    photoSource: "DHS Canada 公开产品页",
    comments: [{ user: "蓝海绵入坑", text: "不发力就一般，发出来质量确实高。", likes: 14 }]
  },
  {
    id: "h3-national-blue",
    name: "国狂3 蓝海绵",
    brand: "红双喜 DHS",
    type: "胶皮",
    rating: 9.4,
    tags: ["国狂", "专业上限", "真伪门槛"],
    style: "正手弧圈",
    price: "高",
    summary: "价格、真伪和发力门槛都高，更适合作为专业阶段候选。",
    photo: "./assets/product-photos/optimized/dhs_h3neo.jpg",
    photoSource: "DHS Canada 公开产品页",
    comments: [{ user: "别盲冲国狂", text: "没有稳定训练和发力，收益不一定比省狂高。", likes: 31 }]
  },
  {
    id: "donic-bluegrip-j1",
    name: "多尼克 BlueGrip J1",
    brand: "DONIC",
    type: "胶皮",
    rating: 8.9,
    tags: ["粘弹", "正手", "官方图"],
    style: "正手弧圈",
    price: "中高",
    summary: "偏粘弹路线，适合作为国套之外的正手旋转方案。",
    photo: "./assets/product-photos/optimized/donic_bluegrip_j1.jpg",
    photoSource: "DONIC 官方产品页",
    comments: [{ user: "外套正手", text: "比纯粘套省力，旋转和速度更均衡。", likes: 12 }]
  },
  {
    id: "donic-bluestorm-z1-turbo",
    name: "多尼克 Bluestorm Z1 Turbo",
    brand: "DONIC",
    type: "胶皮",
    rating: 8.8,
    tags: ["速度", "反手", "官方图"],
    style: "近台快攻",
    price: "中高",
    summary: "弹性和出球速度强，适合反手快撕、弹击和近台压迫。",
    photo: "./assets/product-photos/optimized/donic_bluestorm_z1_turbo.jpg",
    photoSource: "DONIC 官方产品页",
    comments: [{ user: "反手速度党", text: "借力很爽，台内要注意别冒。", likes: 10 }]
  },
  {
    id: "victas-curl-p1v",
    name: "VICTAS Curl P1V",
    brand: "VICTAS",
    type: "胶皮",
    rating: 8.7,
    tags: ["长胶", "削防", "官方图"],
    style: "削防颗粒",
    price: "中高",
    summary: "长胶削防和节奏变化分支候选，适合特殊打法单独建模。",
    photo: "./assets/product-photos/optimized/victas_curl_p1v.jpg",
    photoSource: "VICTAS 官方产品页",
    comments: [{ user: "削防分支", text: "颗粒不能按普通反胶逻辑推荐，单独建模是对的。", likes: 8 }]
  }
);

equipment.push(
  {
    id: "donic-zjk-new-era",
    name: "多尼克 张继科 New Era",
    brand: "多尼克 DONIC",
    type: "底板",
    rating: 8.8,
    tags: ["张继科线", "新底板", "公开零售图"],
    style: "两面快弧",
    price: "高",
    summary: "与蝴蝶张继科 ALC 分开维护，避免把球友口中的“红张”直接混同到同一型号。",
    photo: "./assets/product-photos/optimized/donic_zhang_jike_new_era.jpg",
    photoSource: "TableTennisStore 公开零售图",
    aliases: ["张继科 New Era", "DONIC Zhang Jike New Era", "多尼克张继科", "红张待核"],
    catalogStatus: "已接入公开零售图；红张口径继续和蝴蝶张继科 ALC 分开待核。",
    comments: [{ user: "别名校准", text: "这条应和蝴蝶张继科 ALC 分开看，红张到底指谁要靠球友语境确认。", likes: 6 }]
  },
  {
    id: "bty-timo-boll-alc",
    name: "蝴蝶 波尔 ALC",
    brand: "蝴蝶 Butterfly",
    type: "底板",
    rating: 9.2,
    tags: ["外置 ALC", "经典", "官方图"],
    style: "两面弧圈",
    price: "高",
    summary: "经典外置 ALC 模板，速度、支撑和稳定性都很均衡。",
    photo: "./assets/product-photos/optimized/butterfly_timo_boll_alc.jpg",
    photoSource: "Butterfly Global 官方产品页",
    aliases: ["Timo Boll ALC", "波尔 ALC", "TBS 后继"],
    catalogStatus: "已接入官方实物图，价格待接入授权渠道实时维护。",
    comments: [{ user: "外置模板", text: "维斯和波尔 ALC 都是快弧常见参照。", likes: 18 }]
  },
  {
    id: "bty-innerforce-layer-alc",
    name: "蝴蝶 Innerforce Layer ALC",
    brand: "蝴蝶 Butterfly",
    type: "底板",
    rating: 9.0,
    tags: ["内置 ALC", "持球", "官方图"],
    style: "控制弧圈",
    price: "高",
    summary: "内置纤维代表，适合重视持球、台内和连续相持的打法。",
    photo: "./assets/product-photos/optimized/butterfly_innerforce_layer_alc.jpg",
    photoSource: "Butterfly Global 官方产品页",
    aliases: ["Innerforce ALC", "内置 ALC"],
    catalogStatus: "已接入官方实物图，价格待接入授权渠道实时维护。",
    comments: [{ user: "内置相持", text: "不想外置太弹可以先看这类。", likes: 12 }]
  },
  {
    id: "bty-lin-yun-ju-szlc",
    name: "蝴蝶 林昀儒 Super ZLC",
    brand: "蝴蝶 Butterfly",
    type: "底板",
    rating: 9.1,
    tags: ["Super ZLC", "高上限", "官方图"],
    style: "快弧压迫",
    price: "顶配",
    summary: "高弹高上限路线，对控制和发力完整度要求更高。",
    photo: "./assets/product-photos/optimized/butterfly_lin_yun_ju_super_zlc.jpg",
    photoSource: "Butterfly Global 官方产品页",
    aliases: ["林昀儒 SZLC", "Lin Yun-Ju Super ZLC"],
    catalogStatus: "已接入官方实物图，价格待接入授权渠道实时维护。",
    comments: [{ user: "别盲冲顶配", text: "很爽也很挑人，推荐逻辑要限制水平门槛。", likes: 10 }]
  },
  {
    id: "dhs-w968",
    name: "红双喜 W968",
    brand: "红双喜 DHS",
    type: "底板",
    rating: 9.5,
    tags: ["职业线", "龙5上位", "真伪门槛"],
    style: "正手弧圈",
    price: "顶配",
    summary: "职业线和收藏属性强，正式推荐前必须做真伪、渠道和价格分级。",
    photo: "./assets/product-photos/optimized/dhs_w968.jpg",
    photoSource: "DHS Canada 公开产品页",
    aliases: ["W968", "968", "国手龙5"],
    catalogStatus: "高风险条目：需授权渠道、版本与真伪校验。",
    comments: [{ user: "渠道优先", text: "这种不能只看名字，版本和来源很关键。", likes: 28 }]
  },
  {
    id: "dhs-fangbo-b2x",
    name: "红双喜 方博 B2X",
    brand: "红双喜 DHS",
    type: "底板",
    rating: 8.7,
    tags: ["国产纤维", "国套友好", "官方图"],
    style: "弧圈快攻",
    price: "中高",
    summary: "常见国产进阶纤维板，适合预算有限但想上纤维的用户。",
    photo: "./assets/product-photos/optimized/dhs_b2x.jpg",
    photoSource: "DHS Canada 公开产品页",
    aliases: ["方博 B2X", "Fang Bo B2X"],
    catalogStatus: "已接入公开产品图，价格待接入授权渠道实时维护。",
    comments: [{ user: "预算进阶", text: "和 301X 一起做国产纤维候选很合适。", likes: 11 }]
  },
  {
    id: "stiga-cybershape-carbon",
    name: "斯帝卡 Cybershape Carbon",
    brand: "斯帝卡 STIGA",
    type: "底板",
    rating: 8.9,
    tags: ["异形板", "碳素", "官方图"],
    style: "快弧压迫",
    price: "高",
    summary: "异形拍面带来更大的甜区体验，但握持和适应成本也要单独提示。",
    photo: "./assets/product-photos/optimized/stiga_cybershape_carbon.jpg",
    photoSource: "STIGA 官方产品页",
    aliases: ["赛博六边形", "Cybershape"],
    catalogStatus: "已接入官方实物图，价格待接入授权渠道实时维护。",
    comments: [{ user: "新鲜感很强", text: "必须把握持适应写进推荐理由。", likes: 9 }]
  },
  {
    id: "stiga-carbonado-145",
    name: "斯帝卡 Carbonado 145",
    brand: "斯帝卡 STIGA",
    type: "底板",
    rating: 8.8,
    tags: ["碳素", "力量", "公开零售图"],
    style: "弧圈快攻",
    price: "高",
    summary: "Carbonado 系列代表之一，适合追求支撑和速度的进阶用户。",
    photo: "./assets/product-photos/optimized/stiga_carbonado_145.jpg",
    photoSource: "STIGA Polska 公开零售图",
    aliases: ["碳素145", "Carbonado 145"],
    catalogStatus: "已接入公开零售图，待补全球官网详情页与实时价格。",
    comments: [{ user: "力量板", text: "要区分 45、145、190 的手感差异。", likes: 8 }]
  },
  {
    id: "nittaku-acoustic",
    name: "尼塔库 Acoustic",
    brand: "尼塔库 Nittaku",
    type: "底板",
    rating: 8.9,
    tags: ["五夹纯木", "手感", "公开零售图"],
    style: "控制弧圈",
    price: "高",
    summary: "纯木手感代表，适合重视持球、弧线和控制的打法。",
    photo: "./assets/product-photos/optimized/nittaku_acoustic.jpg",
    photoSource: "E&J Table Tennis 公开零售图",
    aliases: ["小提琴系列 Acoustic", "阿库斯蒂克"],
    catalogStatus: "已接入公开零售图，待补 Nittaku 官方详情页与实时价格。",
    comments: [{ user: "纯木党", text: "不能只推纤维板，纯木也要有路线。", likes: 16 }]
  },
  {
    id: "yasaka-ma-lin-extra-offensive",
    name: "亚萨卡 马林加强木",
    brand: "亚萨卡 Yasaka",
    type: "底板",
    rating: 8.7,
    tags: ["五夹纯木", "控制", "公开零售图"],
    style: "控制弧圈",
    price: "中",
    summary: "上手友好、控制清楚，是中级进阶和预算控制的常见候选。",
    photo: "./assets/product-photos/optimized/yasaka_ma_lin_extra_offensive.jpg",
    photoSource: "Rodney's Table Tennis 公开零售图",
    aliases: ["YEO", "Ma Lin Extra Offensive", "马琳加强木"],
    catalogStatus: "已接入公开零售图，待补 Yasaka 官方详情页与实时价格。",
    comments: [{ user: "经典入门进阶", text: "配 Rakza 7 或普狂都能讲清楚。", likes: 13 }]
  },
  {
    id: "xiom-hugo-hal",
    name: "骄猛 Hugo HAL",
    brand: "骄猛 XIOM",
    type: "底板",
    rating: 8.8,
    tags: ["内置纤维", "相持", "待补官方图"],
    style: "两面弧圈",
    price: "高",
    summary: "骄猛高阶底板代表，适合纳入内置/相持候选池。",
    photo: "",
    photoSource: "",
    aliases: ["雨果 HAL", "Hugo HAL"],
    catalogStatus: "已进入市场索引，待接入官方图与实时价格。",
    comments: [{ user: "骄猛线也要有", text: "不能只做蝴蝶和红双喜。", likes: 10 }]
  },
  {
    id: "victas-zx-gear-out",
    name: "VICTAS ZX-Gear OUT",
    brand: "VICTAS",
    type: "底板",
    rating: 8.7,
    tags: ["外置纤维", "速度", "公开零售图"],
    style: "快弧压迫",
    price: "高",
    summary: "VICTAS 纤维板分支，适合补齐非主流品牌的高阶候选。",
    photo: "./assets/product-photos/optimized/victas_zx_gear_out.jpg",
    photoSource: "TableTennisStore 公开零售图",
    aliases: ["ZX Gear OUT", "ZX-Gear"],
    catalogStatus: "已接入公开零售图，待补 VICTAS 官方详情页与实时价格。",
    comments: [{ user: "品牌补全", text: "做器材库一定要让冷门一点的也搜得到。", likes: 7 }]
  },
  {
    id: "bty-tenergy-05",
    name: "蝴蝶 Tenergy 05",
    brand: "蝴蝶 Butterfly",
    type: "胶皮",
    rating: 9.3,
    tags: ["涩套", "经典", "官方图"],
    style: "两面弧圈",
    price: "高",
    summary: "经典高弹涩套，适合正反手弧圈和借力转换。",
    photo: "./assets/product-photos/optimized/butterfly_tenergy_05.jpg",
    photoSource: "Butterfly Global 官方产品页",
    aliases: ["T05", "特内吉05", "大巴05"],
    catalogStatus: "已接入官方实物图，价格待接入授权渠道实时维护。",
    comments: [{ user: "老经典", text: "必须收录，很多搭配都绕不开。", likes: 25 }]
  },
  {
    id: "bty-tenergy-19",
    name: "蝴蝶 Tenergy 19",
    brand: "蝴蝶 Butterfly",
    type: "胶皮",
    rating: 8.9,
    tags: ["涩套", "持球", "官方图"],
    style: "弧圈相持",
    price: "高",
    summary: "相对更强调持球和弧线，可作为 05 之外的细分候选。",
    photo: "./assets/product-photos/optimized/butterfly_tenergy_19.jpg",
    photoSource: "Butterfly Global 官方产品页",
    aliases: ["T19", "特内吉19"],
    catalogStatus: "已接入官方实物图，价格待接入授权渠道实时维护。",
    comments: [{ user: "05 替代线", text: "要按持球和控制去分，不只看品牌。", likes: 8 }]
  },
  {
    id: "bty-glayzer",
    name: "蝴蝶 Glayzer",
    brand: "蝴蝶 Butterfly",
    type: "胶皮",
    rating: 8.4,
    tags: ["进阶涩套", "容错", "官方图"],
    style: "均衡弧圈",
    price: "中高",
    summary: "比 Dignics 和 Tenergy 更容易上手，适合进阶用户控制预算。",
    photo: "./assets/product-photos/optimized/butterfly_glayzer.jpg",
    photoSource: "Butterfly Global 官方产品页",
    aliases: ["格雷泽", "Glayzer 09C"],
    catalogStatus: "已接入官方实物图，价格待接入授权渠道实时维护。",
    comments: [{ user: "预算替代", text: "这类应该在预算不够 D 系列时出现。", likes: 9 }]
  },
  {
    id: "dhs-goldarc8",
    name: "红双喜 金弓8",
    brand: "红双喜 DHS",
    type: "胶皮",
    rating: 8.5,
    tags: ["涩套", "国产", "公开零售图"],
    style: "反手快弧",
    price: "中",
    summary: "国产涩套候选，适合反手借力和预算友好的配置。",
    photo: "./assets/product-photos/optimized/dhs_goldarc_8.jpg",
    photoSource: "Megaspin 公开零售图",
    aliases: ["GoldArc 8", "金弓八"],
    catalogStatus: "已接入公开零售图，待补 DHS 官方详情页与实时价格。",
    comments: [{ user: "国产涩套", text: "反手别只给外套，也要有国产选择。", likes: 14 }]
  },
  {
    id: "dhs-hurricane-8",
    name: "红双喜 狂飙8",
    brand: "红双喜 DHS",
    type: "胶皮",
    rating: 8.6,
    tags: ["粘性", "进阶国套", "官方图"],
    style: "正反手弧圈",
    price: "中",
    summary: "比传统狂飙3更偏易打和连续，适合想要粘套旋转但不想太闷的用户。",
    photo: "./assets/product-photos/optimized/dhs_hurricane_8.jpg",
    photoSource: "DHS Canada 公开产品页",
    aliases: ["Hurricane 8", "H8", "狂飙8"],
    catalogStatus: "已接入公开产品图；狂飙8-80需另建条目继续核对。",
    comments: [{ user: "更易打", text: "不能把所有粘套都按普狂逻辑推荐。", likes: 12 }]
  },
  {
    id: "dhs-hurricane-2-neo",
    name: "红双喜 狂飙2 NEO",
    brand: "红双喜 DHS",
    type: "胶皮",
    rating: 8.7,
    tags: ["粘性", "低弧线", "公开图"],
    style: "正手快弧",
    price: "中",
    summary: "比狂飙3更偏速度和低弧线，容错更窄，适合主动压迫型正手。",
    photo: "./assets/product-photos/optimized/dhs_hurricane_2_neo.jpg",
    photoSource: "DHS Canada 公开产品页",
    aliases: ["Hurricane 2 Neo", "H2 Neo", "狂2 NEO"],
    catalogStatus: "已接入公开产品图，后续需补硬度/海绵版本。",
    comments: [{ user: "低弧线提醒", text: "狂2不能按狂3那套稳定弧圈逻辑直接推。", likes: 13 }]
  },
  {
    id: "dhs-hurricane-3-50",
    name: "红双喜 狂飙3-50",
    brand: "红双喜 DHS",
    type: "胶皮",
    rating: 8.5,
    tags: ["粘性", "弹性海绵", "公开图"],
    style: "正反手弧圈",
    price: "中",
    summary: "比普通狂飙更容易打透，可作为粘套入门和反手粘套化分支。",
    photo: "./assets/product-photos/optimized/dhs_hurricane_3_50.jpg",
    photoSource: "DHS Canada 公开产品页",
    aliases: ["Hurricane 3-50", "H3-50", "狂飙3-50"],
    catalogStatus: "已接入公开产品图，后续需补厚度/硬度版本。",
    comments: [{ user: "更容易打透", text: "适合不想一上来就普狂硬闷的用户。", likes: 9 }]
  },
  {
    id: "dhs-hurricane-9",
    name: "红双喜 狂飙9",
    brand: "红双喜 DHS",
    type: "胶皮",
    rating: 8.4,
    tags: ["粘性", "新分支", "公开图"],
    style: "旋转弧圈",
    price: "中高",
    summary: "狂飙系列新分支之一，正式推荐前需进一步区分颜色、硬度和目标打法。",
    photo: "./assets/product-photos/optimized/dhs_hurricane_9.jpg",
    photoSource: "DHS Canada 公开产品页",
    aliases: ["Hurricane 9", "H9", "狂飙9"],
    catalogStatus: "已接入公开产品图，版本细分待补。",
    comments: [{ user: "新分支待测", text: "先能搜到，后续要靠试打和用户反馈调权重。", likes: 7 }]
  },
  {
    id: "dhs-hurricane-8-80",
    name: "红双喜 狂飙8-80",
    brand: "红双喜 DHS",
    type: "胶皮",
    rating: 8.4,
    tags: ["粘性", "8-80", "公开零售图"],
    style: "正反手弧圈",
    price: "中",
    summary: "用户常提的狂飙细分型号，需继续核对官方图、硬度和海绵参数后再进入主推。",
    photo: "./assets/product-photos/optimized/dhs_hurricane_8_80.jpg",
    photoSource: "Megaspin 公开零售图",
    aliases: ["Hurricane 8-80", "H8-80", "狂飙8-80"],
    catalogStatus: "已接入公开零售图；仍需核对官方在售状态、海绵硬度和版本差异。",
    comments: [{ user: "版本区分", text: "8 和 8-80 要分开，不要混成一个 SKU。", likes: 10 }]
  },
  {
    id: "xiom-vega-europe",
    name: "骄猛 Vega Europe",
    brand: "骄猛 XIOM",
    type: "胶皮",
    rating: 8.4,
    tags: ["反手", "容错", "公开零售图"],
    style: "控制弧圈",
    price: "中",
    summary: "常见进阶反手胶皮，容错和稳定性友好。",
    photo: "./assets/product-photos/optimized/xiom_vega_europe.jpg",
    photoSource: "Rodney's Table Tennis 公开零售图",
    aliases: ["Vega Europe", "唯佳欧洲"],
    catalogStatus: "已接入公开零售图，待补 XIOM 官方详情页与实时价格。",
    comments: [{ user: "反手稳定", text: "适合反手先上台的用户。", likes: 10 }]
  },
  {
    id: "xiom-omega-vii-pro",
    name: "骄猛 Omega VII Pro",
    brand: "骄猛 XIOM",
    type: "胶皮",
    rating: 8.8,
    tags: ["高弹涩套", "速度", "公开零售图"],
    style: "快弧压迫",
    price: "中高",
    summary: "速度和支撑更强，适合反手快弧或正手外套路线。",
    photo: "./assets/product-photos/optimized/xiom_omega7_pro.jpg",
    photoSource: "Operatt 公开零售图",
    aliases: ["Omega 7 Pro", "欧米茄7 Pro"],
    catalogStatus: "已接入公开零售图，待补 XIOM 官方详情页与实时价格。",
    comments: [{ user: "快弧外套", text: "高弹涩套也要按控制门槛分级。", likes: 8 }]
  },
  {
    id: "tibhar-evolution-mxp",
    name: "挺拔 Evolution MX-P",
    brand: "挺拔 TIBHAR",
    type: "胶皮",
    rating: 9.0,
    tags: ["高弹涩套", "力量", "官方图"],
    style: "两面弧圈",
    price: "中高",
    summary: "高弹涩套代表，适合反手爆发和正手外套化打法。",
    photo: "./assets/product-photos/optimized/tibhar_evolution_mxp.jpg",
    photoSource: "TIBHAR 官方产品页",
    aliases: ["MX-P", "变革 MXP"],
    catalogStatus: "已接入官方实物图，价格待接入授权渠道实时维护。",
    comments: [{ user: "外套党", text: "MX-P 必须能搜到。", likes: 19 }]
  },
  {
    id: "tibhar-hybrid-k3",
    name: "挺拔 Hybrid K3",
    brand: "挺拔 TIBHAR",
    type: "胶皮",
    rating: 8.9,
    tags: ["粘弹", "混动", "官方图"],
    style: "正手弧圈",
    price: "中高",
    summary: "粘弹混动路线，适合想要粘套旋转但不想太闷的用户。",
    photo: "./assets/product-photos/optimized/tibhar_hybrid_k3.jpg",
    photoSource: "TIBHAR 官方产品页",
    aliases: ["K3", "混动 K3"],
    catalogStatus: "已接入官方实物图，价格待接入授权渠道实时维护。",
    comments: [{ user: "粘弹路线", text: "这类要和狂飙、D09C 放在一组比较。", likes: 12 }]
  },
  {
    id: "andro-rasanter-r48",
    name: "岸度 Rasanter R48",
    brand: "岸度 ANDRO",
    type: "胶皮",
    rating: 8.7,
    tags: ["反手", "高弹", "公开零售图"],
    style: "快弧压迫",
    price: "中高",
    summary: "反手速度和稳定兼顾，适合中高级反手主动打法。",
    photo: "./assets/product-photos/optimized/andro_rasanter_r48.jpg",
    photoSource: "EZ Table Tennis 公开零售图",
    aliases: ["R48", "Rasanter R48"],
    catalogStatus: "已接入公开零售图，待补 ANDRO 官方详情页与实时价格。",
    comments: [{ user: "反手快撕", text: "和 G-1、Rozena 要分不同手感。", likes: 7 }]
  },
  {
    id: "victas-v15-extra",
    name: "VICTAS V>15 Extra",
    brand: "VICTAS",
    type: "胶皮",
    rating: 8.8,
    tags: ["涩套", "速度", "公开零售图"],
    style: "快弧压迫",
    price: "中高",
    summary: "速度和攻击性强，适合反手快撕或正手外套打法。",
    photo: "./assets/product-photos/optimized/victas_v15_extra.jpg",
    photoSource: "Rodney's Table Tennis 公开零售图",
    aliases: ["V15 Extra", "V>15"],
    catalogStatus: "已接入公开零售图，待补 VICTAS 官方详情页与实时价格。",
    comments: [{ user: "曾经热门", text: "有图再放到推荐主视觉里更稳。", likes: 9 }]
  },
  {
    id: "yasaka-rakza-z",
    name: "亚萨卡 Rakza Z",
    brand: "亚萨卡 Yasaka",
    type: "胶皮",
    rating: 8.6,
    tags: ["粘弹", "旋转", "官方图"],
    style: "正手弧圈",
    price: "中高",
    summary: "Rakza 系列粘弹分支，适合想要更多旋转和咬球的配置。",
    photo: "./assets/product-photos/optimized/yasaka_rakza_z.jpg",
    photoSource: "Yasaka 官方产品页",
    aliases: ["Rakza Z", "雷煞 Z"],
    catalogStatus: "已接入官方实物图，价格待接入授权渠道实时维护。",
    comments: [{ user: "亚萨卡粘弹", text: "Rakza 7 和 Z 不能混着推。", likes: 8 }]
  },
  {
    id: "stiga-dna-platinum-h",
    name: "斯帝卡 DNA Platinum H",
    brand: "斯帝卡 STIGA",
    type: "胶皮",
    rating: 8.8,
    tags: ["高硬度", "攻击", "公开零售图"],
    style: "快弧压迫",
    price: "中高",
    summary: "高硬涩套路线，适合主动发力和较高训练频率用户。",
    photo: "./assets/product-photos/optimized/stiga_dna_platinum_h.jpg",
    photoSource: "TableTennisStore 公开零售图",
    aliases: ["DNA 白金 H", "DNA Platinum"],
    catalogStatus: "已接入公开零售图，待补 STIGA 官方详情页与实时价格。",
    comments: [{ user: "硬度分级", text: "要和狂飙度数一样做硬度输入。", likes: 11 }]
  },
  {
    id: "premade-dhs-6002",
    name: "红双喜 6002 成品拍",
    brand: "红双喜 DHS",
    type: "成品拍",
    rating: 7.8,
    tags: ["入门", "成品拍", "公开图"],
    style: "新手练习",
    price: "低",
    summary: "适合入门体验和家庭娱乐，进阶训练建议尽快转自选底板胶皮。",
    photo: "./assets/product-photos/optimized/dhs_h6002.jpg",
    photoSource: "DHS Canada 公开产品页",
    aliases: ["DHS 6002", "双面反胶成品拍"],
    catalogStatus: "已接入公开产品图，价格待接入授权渠道实时维护。",
    comments: [{ user: "入门提醒", text: "成品拍要讲清楚适用边界。", likes: 9 }]
  },
  {
    id: "premade-dhs-4002",
    name: "红双喜 4002 成品拍",
    brand: "红双喜 DHS",
    type: "成品拍",
    rating: 7.5,
    tags: ["入门", "成品拍", "公开图"],
    style: "新手练习",
    price: "低",
    summary: "入门常见型号，用于低预算和非系统训练场景。",
    photo: "./assets/product-photos/optimized/dhs_h4002.jpg",
    photoSource: "DHS Canada 公开产品页",
    aliases: ["DHS 4002", "红双喜四星"],
    catalogStatus: "已接入公开产品图，价格待接入授权渠道实时维护。",
    comments: [{ user: "低预算", text: "新手能先打，但别和专业配置混算。", likes: 7 }]
  },
  {
    id: "premade-stiga-pro-carbon",
    name: "斯帝卡 Pro Carbon 成品拍",
    brand: "斯帝卡 STIGA",
    type: "成品拍",
    rating: 7.9,
    tags: ["成品拍", "碳素", "待补官方图"],
    style: "休闲进阶",
    price: "中",
    summary: "海外市场常见成品拍，适合休闲进阶，不等同于自选专业配置。",
    photo: "",
    photoSource: "",
    aliases: ["STIGA Pro Carbon"],
    catalogStatus: "成品拍模块首批索引，待接入官方图与渠道价格。",
    comments: [{ user: "别混专业拍", text: "成品拍模块单独放是对的。", likes: 11 }]
  },
  {
    id: "premade-palio-expert-3",
    name: "拍里奥 Expert 3 成品拍",
    brand: "拍里奥 Palio",
    type: "成品拍",
    rating: 7.7,
    tags: ["入门", "成品拍", "待补官方图"],
    style: "新手练习",
    price: "低",
    summary: "入门阶段常见成品拍候选，适合先建立基础手感。",
    photo: "",
    photoSource: "",
    aliases: ["Palio Expert 3", "拍里奥专家3"],
    catalogStatus: "成品拍模块首批索引，待接入官方图与渠道价格。",
    comments: [{ user: "新手友好", text: "可以给非训练用户一个低门槛选项。", likes: 8 }]
  },
  {
    id: "premade-joola-infinity-edge",
    name: "优拉 Infinity Edge 成品拍",
    brand: "优拉 JOOLA",
    type: "成品拍",
    rating: 7.6,
    tags: ["成品拍", "休闲", "公开零售图"],
    style: "休闲进阶",
    price: "中",
    summary: "休闲进阶成品拍候选，适合商城模块单独维护库存与评价。",
    photo: "./assets/product-photos/optimized/joola_infinity_edge.jpg",
    photoSource: "Megaspin 公开零售图",
    aliases: ["JOOLA Infinity Edge"],
    catalogStatus: "已接入公开零售图，待接入官方图与渠道价格。",
    comments: [{ user: "商城入口", text: "成品拍以后可以和电商 SKU 绑定。", likes: 6 }]
  },
  {
    id: "premade-killerspin-jet800",
    name: "Killerspin JET800 成品拍",
    brand: "Killerspin",
    type: "成品拍",
    rating: 7.8,
    tags: ["成品拍", "海外", "待补官方图"],
    style: "休闲进阶",
    price: "中",
    summary: "海外市场常见成品拍，适合补齐跨境搜索和参考。",
    photo: "",
    photoSource: "",
    aliases: ["JET800", "Killerspin Jet 800"],
    catalogStatus: "成品拍模块首批索引，待接入官方图与渠道价格。",
    comments: [{ user: "海外补充", text: "搜索覆盖要能容纳跨境品牌。", likes: 5 }]
  }
);

const comboRules = [
  {
    key: "premade-low",
    category: "premade",
    name: "低预算成品拍过渡方案",
    premade: "红双喜 4002 / 6002 成品拍",
    blade: "成品拍一体整拍",
    fh: "原厂正手反胶",
    bh: "原厂反手反胶",
    premadePrice: "主推约 110-280 元",
    bladePrice: "已包含在整拍内",
    fhPrice: "已包含在整拍内",
    bhPrice: "已包含在整拍内",
    totalPrice: "主推约 110-280 元",
    visual: {
      premade: "红双喜 4002 成品拍",
      premadePhoto: "./assets/product-photos/optimized/dhs_h4002.jpg",
      blade: "红双喜 4002 成品拍",
      fh: "正手：原厂反胶",
      bh: "反手：原厂反胶",
      bladePhoto: "./assets/product-photos/optimized/dhs_h4002.jpg",
      fhPhoto: "",
      bhPhoto: "",
      source: "图片来自 DHS Canada 公开产品页；价格为渠道采集价快照"
    },
    min: 100,
    max: 500,
    score: 82,
    reasons: [
      "当前预算不足以稳定覆盖自选底板 + 正手胶皮 + 反手胶皮。",
      "入门阶段可先用成品拍建立握拍、发球、搓球和基础相持。",
      "如果每周系统训练，后续预算到 800 元以上再升级自选底板和两面胶皮。"
    ]
  },
  {
    key: "beginner",
    name: "入门进阶容错方案",
    blade: "亚萨卡 Resonate GI / 红双喜 301X",
    fh: "亚萨卡 Rakza 7 / 红双喜 狂飙3 NEO 38度",
    bh: "亚萨卡 Rakza 7 / 蝴蝶 Rozena",
    bladePrice: "主推约 520-620 元",
    fhPrice: "主推约 190-250 元",
    bhPrice: "主推约 270-320 元",
    totalPrice: "主推约 980-1190 元",
    visual: {
      blade: "亚萨卡 Resonate GI",
      fh: "正手：Rakza 7",
      bh: "反手：Rozena",
      bladePhoto: "./assets/product-photos/optimized/yasaka_206554.jpg",
      fhPhoto: "./assets/product-photos/optimized/yasaka_rakza7.jpg",
      bhPhoto: "./assets/product-photos/optimized/butterfly_rozena.jpg",
      source: "图片来自 Yasaka 与 Butterfly 官方/公开产品页"
    },
    min: 850,
    max: 1250,
    score: 86,
    reasons: ["预算友好，后期换胶皮成本低", "整体速度不过分，方便建立动作", "重量更容易控制"]
  },
  {
    key: "control",
    name: "进阶控制弧圈方案",
    blade: "亚萨卡 Resonate GI（控制弧圈）",
    fh: "红双喜 狂飙3 NEO / 亚萨卡 Rakza 7",
    bh: "亚萨卡 Rakza 7 / 骄猛 Vega Europe",
    bladePrice: "主推约 520-620 元",
    fhPrice: "主推约 120-160 元",
    bhPrice: "主推约 190-250 元",
    totalPrice: "主推约 830-1030 元",
    visual: {
      blade: "亚萨卡 Resonate GI",
      fh: "正手：狂飙3 NEO",
      bh: "反手：Rakza 7",
      bladePhoto: "./assets/product-photos/optimized/yasaka_206554.jpg",
      fhPhoto: "./assets/product-photos/optimized/dhs_h3neo.jpg",
      bhPhoto: "./assets/product-photos/optimized/yasaka_rakza7.jpg",
      source: "图片来自 Yasaka 官网 CDN 与 DHS 加拿大公开产品页"
    },
    min: 800,
    max: 1150,
    score: 89,
    reasons: ["台内控制和连续上台优先", "正反手硬度差不会太极端", "适合训练频率稳定的中级阶段"]
  },
  {
    key: "arc",
    name: "国套正手 + 外套反手方案",
    blade: "红双喜 301X / 方博 B2X",
    fh: "红双喜 狂飙3 NEO",
    bh: "亚萨卡 Rakza 7 / 尼塔库 Fastarc G-1",
    bladePrice: "主推约 620-720 元",
    fhPrice: "主推约 120-160 元",
    bhPrice: "主推约 190-250 元",
    totalPrice: "主推约 930-1130 元",
    visual: {
      blade: "红双喜 301X",
      fh: "正手：狂飙3 NEO",
      bh: "反手：Rakza 7",
      bladePhoto: "./assets/product-photos/optimized/dhs_301x.jpg",
      fhPhoto: "./assets/product-photos/optimized/dhs_h3neo.jpg",
      bhPhoto: "./assets/product-photos/optimized/yasaka_rakza7.jpg",
      source: "图片来自 DHS 加拿大公开产品页与 Yasaka 官网 CDN"
    },
    min: 900,
    max: 1300,
    score: 91,
    reasons: ["正手质量和反手稳定兼顾", "比顶级外置 ALC 更容易控制预算", "后续升级路径清晰"]
  },
  {
    key: "fast",
    name: "近台快攻压迫方案",
    blade: "斯帝卡 CL 七夹 / CL CR",
    fh: "红双喜 狂飙3 NEO / 斯帝卡 DNA 白金版",
    bh: "多尼克 Bluestorm Z1 Turbo / 蝴蝶 Rozena",
    bladePrice: "主推约 520-680 元",
    fhPrice: "主推约 120-160 元",
    bhPrice: "主推约 285-360 元",
    totalPrice: "主推约 925-1200 元",
    visual: {
      blade: "斯帝卡 CL 七夹",
      fh: "正手：狂飙3 NEO",
      bh: "反手：Bluestorm Z1 Turbo",
      bladePhoto: "./assets/product-photos/optimized/stiga_clipper_wood.jpg",
      fhPhoto: "./assets/product-photos/optimized/dhs_h3neo.jpg",
      bhPhoto: "./assets/product-photos/optimized/donic_bluestorm_z1_turbo.jpg",
      source: "图片来自 STIGA、DHS Canada 与 DONIC 官方/公开产品页"
    },
    min: 900,
    max: 1300,
    score: 88,
    reasons: ["出球直接，适合贴台抢节奏", "反手借力和快撕表现更优先", "小球需要靠手感压住"]
  },
  {
    key: "premium",
    name: "经典高阶快弧方案",
    blade: "蝴蝶 维斯卡利亚 / 樊振东 ALC",
    fh: "红双喜 狂飙3 NEO / 蝴蝶 Dignics 09C",
    bh: "蝴蝶 Dignics 05 / Tenergy 05 / Rozena",
    bladePrice: "主推约 1390-1590 元",
    fhPrice: "主推约 500-560 元",
    bhPrice: "主推约 500-560 元",
    totalPrice: "主推约 2390-2710 元",
    visual: {
      blade: "蝴蝶 樊振东 ALC",
      fh: "正手：Dignics 09C",
      bh: "反手：Dignics 05",
      bladePhoto: "./assets/product-photos/optimized/butterfly_fzd_alc.jpg",
      fhPhoto: "./assets/product-photos/optimized/butterfly_d09c.jpg",
      bhPhoto: "./assets/product-photos/optimized/butterfly_d05.jpg",
      source: "图片来自 Butterfly 官方产品页"
    },
    min: 2300,
    max: 2850,
    score: 94,
    reasons: ["上限更高，适合发力完整的高级球友", "职业装备证据更容易交叉验证", "需要接受更高预算和更高控制门槛"]
  },
  {
    key: "defense",
    name: "削防与颗粒分支方案",
    blade: "VICTAS 松下浩二 / 防守型底板",
    fh: "控制型反胶 / 粘性反胶",
    bh: "VICTAS Curl P1V / 长胶",
    bladePrice: "主推约 720-880 元",
    fhPrice: "主推约 270-320 元",
    bhPrice: "主推约 190-280 元",
    totalPrice: "主推约 1180-1480 元",
    visual: {
      blade: "VICTAS 松下浩二",
      fh: "正手：控制型反胶",
      bh: "反手：Curl P1V",
      bladePhoto: "./assets/product-photos/optimized/victas_koji_matsushita_defensive.jpg",
      fhPhoto: "./assets/product-photos/optimized/butterfly_rozena.jpg",
      bhPhoto: "./assets/product-photos/optimized/victas_curl_p1v.jpg",
      source: "图片来自 VICTAS 与 Butterfly 官方产品页"
    },
    min: 1100,
    max: 1600,
    score: 87,
    reasons: ["削球、防反和颗粒打法需要单独候选池", "底板控制和持球优先于暴力速度", "建议结合教练或实战视频二次确认"]
  },
  {
    key: "long5",
    name: "龙5正手质量方案",
    blade: "红双喜 狂飙龙5",
    fh: "红双喜 省狂3 NEO 橙海绵 39/40度",
    bh: "尼塔库 Fastarc G-1 / 蝴蝶 Rozena",
    bladePrice: "主推约 1280-1480 元",
    fhPrice: "主推约 255-330 元",
    bhPrice: "主推约 245-330 元",
    totalPrice: "主推约 1780-2140 元",
    visual: {
      blade: "红双喜 狂飙龙5",
      fh: "正手：省狂3 NEO",
      bh: "反手：Fastarc G-1",
      bladePhoto: "./assets/product-photos/optimized/dhs_long5.jpg",
      fhPhoto: "./assets/product-photos/optimized/dhs_h3neo.jpg",
      bhPhoto: "./assets/product-photos/optimized/nittaku_fastarc_g1.jpg",
      source: "图片来自 DHS Canada 与 Nittaku 官方/公开产品页"
    },
    min: 1700,
    max: 2250,
    score: 93,
    reasons: ["正手持球和弧线质量优先", "省狂橙海绵比普狂更扎实，仍比国狂更可控", "反手用 Fastarc G-1 或 Rozena 保持稳定"]
  },
  {
    key: "harimoto-inner",
    name: "张本智和内置相持方案",
    blade: "蝴蝶 张本智和 Innerforce ALC",
    fh: "红双喜 省狂3 NEO / 蝴蝶 Dignics 09C",
    bh: "蝴蝶 Dignics 05 / 亚萨卡 Rakza 7",
    bladePrice: "主推约 1280-1480 元",
    fhPrice: "主推约 500-560 元",
    bhPrice: "主推约 500-560 元",
    totalPrice: "主推约 2280-2600 元",
    visual: {
      blade: "张本智和 Innerforce ALC",
      fh: "正手：Dignics 09C",
      bh: "反手：Dignics 05",
      bladePhoto: "./assets/product-photos/optimized/butterfly_harimoto_inner_alc.jpg",
      fhPhoto: "./assets/product-photos/optimized/butterfly_d09c.jpg",
      bhPhoto: "./assets/product-photos/optimized/butterfly_d05.jpg",
      source: "图片来自 Butterfly Global 与 Butterfly 官方产品页"
    },
    min: 2200,
    max: 2750,
    score: 92,
    reasons: ["内置纤维更重持球和连续相持", "适合不想外置 ALC 太弹的弧圈用户", "正手可走粘性国套或 D09C 粘弹路线"]
  },
  {
    key: "zjk-red",
    name: "张继科 ALC 近台快弧方案",
    blade: "蝴蝶 张继科 ALC",
    fh: "红双喜 普狂3 NEO / 省狂3 NEO",
    bh: "多尼克 Bluestorm Z1 Turbo / 蝴蝶 Rozena",
    bladePrice: "主推约 1280-1480 元",
    fhPrice: "主推约 120-160 元",
    bhPrice: "主推约 285-360 元",
    totalPrice: "主推约 1685-2000 元",
    visual: {
      blade: "张继科 ALC",
      fh: "正手：狂飙3 NEO",
      bh: "反手：Bluestorm Z1 Turbo",
      bladePhoto: "./assets/product-photos/optimized/butterfly_zjk_alc.jpg",
      fhPhoto: "./assets/product-photos/optimized/dhs_h3neo.jpg",
      bhPhoto: "./assets/product-photos/optimized/donic_bluestorm_z1_turbo.jpg",
      source: "图片来自 Butterfly、DHS Canada 与 DONIC 官方/公开产品页"
    },
    min: 1600,
    max: 2100,
    score: 90,
    reasons: ["更偏近台快弧和反手压迫", "红张别名先作为待核信息处理，避免和多尼克张继科新底板混淆", "正手狂飙压住外置速度，反手可以选择更弹的涩套", "适合训练频率较高、想提节奏的球友"]
  },
  {
    key: "viscaria",
    name: "维斯外置快弧方案",
    blade: "蝴蝶 Viscaria 维斯卡利亚",
    fh: "红双喜 省狂3 NEO 蓝海绵 / Dignics 09C",
    bh: "蝴蝶 Dignics 05 / Fastarc G-1",
    bladePrice: "主推约 1280-1480 元",
    fhPrice: "主推约 380-480 元",
    bhPrice: "主推约 500-560 元",
    totalPrice: "主推约 2160-2520 元",
    visual: {
      blade: "蝴蝶 Viscaria",
      fh: "正手：省狂蓝海绵",
      bh: "反手：Dignics 05",
      bladePhoto: "./assets/product-photos/optimized/butterfly_viscaria.jpg",
      fhPhoto: "./assets/product-photos/optimized/dhs_h3neo.jpg",
      bhPhoto: "./assets/product-photos/optimized/butterfly_d05.jpg",
      source: "图片来自 Butterfly、DHS Canada 官方/公开产品页"
    },
    min: 2100,
    max: 2650,
    score: 93,
    reasons: ["外置 ALC 速度和反手借力更直接", "蓝海绵或 D09C 都能提高正手上限", "适合高级两面弧圈和快弧转换"]
  }
];

const quizQuestions = [
  ["10:8 领先且你有发球权，你更想怎么处理？", [["发短下旋抢第三板", "attack"], ["发奔球偷袭", "risk"], ["先保证不失误", "control"], ["发别扭位等他先急", "tactic"]]],
  ["反手被连续压住时，你第一反应是什么？", [["拧起来抢主动", "risk"], ["快撕快带顶回去", "attack"], ["先挡稳找落点", "control"], ["退半步拉质量", "spin"]]],
  ["你最享受赢球的方式是？", [["发抢一套带走", "attack"], ["多拍磨到对方崩", "defense"], ["变化旋转骗失误", "spin"], ["防住以后反击", "control"]]],
  ["新球拍到手第一天，你会先测什么？", [["爆冲上限", "risk"], ["小球和台内", "control"], ["反手借力", "attack"], ["连续拉稳定性", "spin"]]],
  ["比分胶着时，你会更愿意？", [["坚持强项", "attack"], ["临时变化套路", "tactic"], ["降低失误率", "control"], ["看对手表情调整", "tactic"]]],
  ["对手搓得很转很低，你会？", [["强行拧/挑", "risk"], ["劈长到底线", "tactic"], ["摆短等机会", "control"], ["高吊先上台", "spin"]]],
  ["选择正手胶皮最看重？", [["旋转和咬球", "spin"], ["速度和通透", "attack"], ["容错和控制", "control"], ["轻松出质量", "risk"]]],
  ["选择底板最怕？", [["太肉打不穿", "attack"], ["太弹小球飞", "control"], ["太重手腕累", "defense"], ["手感太虚", "spin"]]],
  ["一周训练频率是？", [["4 次以上", "risk"], ["2-3 次", "spin"], ["1 次左右", "control"], ["偶尔打打", "defense"]]],
  ["你更像哪种站位？", [["贴台压迫", "attack"], ["中近台相持", "spin"], ["中远台拉冲", "risk"], ["退台削防", "defense"]]],
  ["看到对方反手弱，你会？", [["一直打到他崩", "attack"], ["几板后突然变正手", "tactic"], ["先打稳", "control"], ["旋转节奏折磨", "spin"]]],
  ["你更讨厌哪类失误？", [["发力出界", "control"], ["吃发球", "tactic"], ["相持掉链子", "spin"], ["错过主动进攻", "attack"]]],
  ["你对器材重量的态度？", [["重一点也行", "risk"], ["必须轻快", "defense"], ["看平衡", "control"], ["肩肘舒服优先", "defense"]]],
  ["别人说你打球像什么？", [["节奏快，压迫强", "attack"], ["旋转多，线路贼", "spin"], ["稳，不容易送", "control"], ["很会耗", "defense"]]],
  ["如果预算翻倍，你最想升级？", [["底板上限", "risk"], ["正手质量", "attack"], ["反手稳定", "control"], ["先请教练", "tactic"]]]
];

const championEquipment = [
  {
    player: "马龙",
    country: "中国",
    titles: "奥运单打 2016/2020；世乒赛单打 2015/2017/2019",
    period: "2015-2021 公开主力期",
    blade: "红双喜 W968 / 狂飙龙5特制线",
    fh: "红双喜 狂飙3 国套蓝海绵",
    bh: "红双喜 狂飙3 / 外套化反手配置随时期变化",
    evidence: "B",
    note: "国手特制器材公开信息多为采访、照片和经销商交叉证据，需按时期继续拆分。",
    source: "公开照片/采访/经销商交叉证据"
  },
  {
    player: "樊振东",
    country: "中国",
    titles: "奥运单打 2024；世乒赛单打 2021/2023",
    period: "2024-2026 Butterfly 赞助页时期",
    blade: "蝴蝶 樊振东 ALC",
    fh: "蝴蝶 Dignics 09C",
    bh: "蝴蝶 Dignics 系列公开资料待细分",
    evidence: "A",
    note: "Butterfly 官方赞助页可核验当前主装备，历史 DHS 时期需另建版本。",
    source: "Butterfly Global sponsoring"
  },
  {
    player: "张继科",
    country: "中国",
    titles: "奥运单打 2012；世乒赛单打 2011/2013",
    period: "2011-2016 主力期",
    blade: "蝴蝶 Viscaria / 张继科 ALC 分时期待核",
    fh: "红双喜 狂飙3 国套蓝海绵",
    bh: "蝴蝶 Tenergy 系列",
    evidence: "B",
    note: "后期多尼克张继科线需单独维护，不能和蝴蝶张继科 ALC 混为一条。",
    source: "公开照片/品牌资料/球友资料交叉"
  },
  {
    player: "王皓",
    country: "中国",
    titles: "世乒赛单打 2009；世界杯多冠",
    period: "2004-2012 直板横打代表期",
    blade: "红双喜 狂飙皓 / 特制直板线",
    fh: "红双喜 狂飙3",
    bh: "反手横打外套/国套分时期待核",
    evidence: "C",
    note: "直板横打配置变化较多，首版仅做名将索引，不进入自动推荐。",
    source: "公开图片与球友资料待复核"
  },
  {
    player: "王励勤",
    country: "中国",
    titles: "世乒赛单打 2005/2007",
    period: "2004-2008 主力期",
    blade: "红双喜狂飙王/王励勤相关底板线",
    fh: "红双喜狂飙系列",
    bh: "反手配置待核",
    evidence: "C",
    note: "早期资料需要照片和采访逐年核对。",
    source: "历史公开资料待复核"
  },
  {
    player: "马琳",
    country: "中国",
    titles: "奥运单打 2008；世界杯多冠",
    period: "2004-2008 直板主力期",
    blade: "亚萨卡 马林碳 / 马林加强木分时期待核",
    fh: "红双喜狂飙系列",
    bh: "直板反面配置待核",
    evidence: "C",
    note: "直板器材时期差异明显，需做年份版本。",
    source: "历史公开资料待复核"
  },
  {
    player: "柳承敏",
    country: "韩国",
    titles: "奥运单打 2004",
    period: "2004 奥运冠军期",
    blade: "日式直板特制线",
    fh: "正手反胶配置待核",
    bh: "无传统反手胶皮分支",
    evidence: "C",
    note: "日直配置需单独建打法模型。",
    source: "历史公开资料待复核"
  },
  {
    player: "王楚钦",
    country: "中国",
    titles: "世乒赛单打 2025；奥运团体/混双冠军",
    period: "2024-2026 公开主力期",
    blade: "红双喜 W968 / 王楚钦特制线待核",
    fh: "红双喜狂飙3国套蓝海绵",
    bh: "反手配置待核",
    evidence: "C",
    note: "冠军头衔已纳入，装备需以官方/多源照片继续核对。",
    source: "赛事结果 + 公开装备资料待复核"
  },
  {
    player: "张怡宁",
    country: "中国",
    titles: "奥运单打 2004/2008；世乒赛单打 2005/2009",
    period: "2004-2009 大满贯时期",
    blade: "蝴蝶/红双喜相关特制线待核",
    fh: "红双喜狂飙系列",
    bh: "反手外套配置待核",
    evidence: "C",
    note: "历史女子国手装备公开资料需要逐年补证。",
    source: "历史公开资料待复核"
  },
  {
    player: "丁宁",
    country: "中国",
    titles: "奥运单打 2016；世乒赛单打 2011/2015/2017",
    period: "2011-2017 主力期",
    blade: "红双喜/特制底板线待核",
    fh: "红双喜狂飙系列",
    bh: "反手配置待核",
    evidence: "C",
    note: "先收录冠军头衔，装备进入待补证池。",
    source: "历史公开资料待复核"
  },
  {
    player: "李晓霞",
    country: "中国",
    titles: "奥运单打 2012；世乒赛单打 2013",
    period: "2012-2013 主力期",
    blade: "红双喜/蝴蝶相关配置待核",
    fh: "红双喜狂飙系列",
    bh: "反手外套配置待核",
    evidence: "C",
    note: "需补充公开照片和采访证据。",
    source: "历史公开资料待复核"
  },
  {
    player: "陈梦",
    country: "中国",
    titles: "奥运单打 2020/2024",
    period: "2020-2024 奥运冠军期",
    blade: "红双喜/特制底板线待核",
    fh: "红双喜狂飙系列",
    bh: "反手配置待核",
    evidence: "C",
    note: "装备需继续以官方/图片证据核对。",
    source: "赛事结果 + 公开装备资料待复核"
  },
  {
    player: "孙颖莎",
    country: "中国",
    titles: "世乒赛单打 2023/2025；奥运混双/团体冠军",
    period: "2023-2026 主力期",
    blade: "红双喜 W968 / 孙颖莎特制线待核",
    fh: "红双喜狂飙3国套蓝海绵",
    bh: "反手配置待核",
    evidence: "C",
    note: "赛事头衔已纳入，装备按用户提交和多源证据继续补。",
    source: "赛事结果 + 公开装备资料待复核"
  },
  {
    player: "王曼昱",
    country: "中国",
    titles: "世乒赛单打 2021；奥运团体冠军",
    period: "2021-2026 主力期",
    blade: "红双喜/特制底板线待核",
    fh: "红双喜狂飙系列",
    bh: "反手配置待核",
    evidence: "C",
    note: "待补官方/多源装备证据。",
    source: "赛事结果 + 公开装备资料待复核"
  },
  {
    player: "波尔 Timo Boll",
    country: "德国",
    titles: "世界杯冠军；世锦赛/奥运奖牌名将",
    period: "Butterfly 当前赞助页时期",
    blade: "蝴蝶 Timo Boll ALC",
    fh: "蝴蝶 Dignics 05",
    bh: "蝴蝶 Dignics 05 / 系列待核",
    evidence: "A",
    note: "Butterfly 官方赞助页可核验当前配置。",
    source: "Butterfly Global sponsoring"
  },
  {
    player: "张本智和",
    country: "日本",
    titles: "世界杯冠军；世界团体/混合团体冠军名将",
    period: "Butterfly 当前赞助页时期",
    blade: "蝴蝶 张本智和 Super ALC",
    fh: "蝴蝶 Zyre 03",
    bh: "蝴蝶 Zyre 03 / 系列待核",
    evidence: "A",
    note: "官方页显示当前主装备，历史 Innerforce ALC 时期另建版本。",
    source: "Butterfly Global sponsoring"
  },
  {
    player: "刘诗雯",
    country: "中国",
    titles: "世乒赛单打 2019；世界杯多冠",
    period: "2015-2019 主力期",
    blade: "蝴蝶 Liu Shiwen / Innerforce 系列待核",
    fh: "蝴蝶 Tenergy / DHS 分时期待核",
    bh: "蝴蝶 Tenergy 系列待核",
    evidence: "C",
    note: "女队历史配置需按年份拆分。",
    source: "历史公开资料待复核"
  },
  {
    player: "平野美宇",
    country: "日本",
    titles: "世界杯单打 2016",
    period: "2016-2024 主力期",
    blade: "VICTAS / Butterfly 分时期待核",
    fh: "反胶配置待核",
    bh: "反胶配置待核",
    evidence: "C",
    note: "非中国名将也纳入，但当前装备需进一步核对。",
    source: "历史公开资料待复核"
  }
];

const championPhotos = {
  "马龙": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Ma_Long_ATTC2017_29.jpeg?width=720",
    caption: "2017 亚洲锦标赛赛场照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ma_Long_ATTC2017_29.jpeg"
  },
  "樊振东": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/ITTF_World_Tour_2017_German_Open_Fan_Zhendong_03.jpg?width=720",
    caption: "2017 德国公开赛赛场照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:ITTF_World_Tour_2017_German_Open_Fan_Zhendong_03.jpg"
  },
  "张继科": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mondial_Ping_-_Men%27s_Singles_-_Final_-_Zhang_Jike_vs_Wang_Hao_-_40.jpg?width=720",
    caption: "2013 世乒赛男单决赛赛场照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mondial_Ping_-_Men%27s_Singles_-_Final_-_Zhang_Jike_vs_Wang_Hao_-_40.jpg"
  },
  "王皓": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Wang_Hao_OQ_2012.jpg?width=720",
    caption: "2012 奥运资格赛赛场照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Wang_Hao_OQ_2012.jpg"
  },
  "王励勤": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mondial_Ping_-_Mixed_Doubles_-_Semifinals_-_01.jpg?width=720",
    caption: "2013 世乒赛混双半决赛赛场照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mondial_Ping_-_Mixed_Doubles_-_Semifinals_-_01.jpg"
  },
  "马琳": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mondial_Ping_-_Men%27s_Doubles_-_Semifinals_-_34.jpg?width=720",
    caption: "2013 世乒赛男双半决赛赛场照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mondial_Ping_-_Men%27s_Doubles_-_Semifinals_-_34.jpg"
  },
  "柳承敏": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Korea_London_TableTennis_Team_03_%287771947308%29.jpg?width=720",
    caption: "2012 伦敦奥运韩国队赛场照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Korea_London_TableTennis_Team_03_(7771947308).jpg"
  },
  "王楚钦": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Table_tennis_at_the_2018_Summer_Youth_Olympics_%E2%80%93_Men%27s_Singles_Gold_Medal_Match_068_%28cropped%29.jpg?width=720",
    caption: "2018 青奥会男单决赛赛场照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Table_tennis_at_the_2018_Summer_Youth_Olympics_%E2%80%93_Men%27s_Singles_Gold_Medal_Match_068_(cropped).jpg"
  },
  "张怡宁": {
    src: "",
    caption: "",
    source: "",
    sourceUrl: ""
  },
  "丁宁": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mondial_Ping_-Women%27s_Singles_-_Quarterfinal_-_Ding_Ning-Ri_Myong_Sun_-_17.jpg?width=720",
    caption: "2013 世乒赛女单四分之一决赛赛场照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mondial_Ping_-Women%27s_Singles_-_Quarterfinal_-_Ding_Ning-Ri_Myong_Sun_-_17.jpg"
  },
  "李晓霞": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mondial_Ping_-_Women%27s_Singles_-_Final_-_Li_Xiaoxia.jpg?width=720",
    caption: "2013 世乒赛女单决赛赛场照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mondial_Ping_-_Women%27s_Singles_-_Final_-_Li_Xiaoxia.jpg"
  },
  "陈梦": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Chen_Meng.png?width=720",
    caption: "2024 国家队采访公开照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Chen_Meng.png"
  },
  "孙颖莎": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Sun_Yingsha.png?width=720",
    caption: "2024 国家队采访公开照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sun_Yingsha.png"
  },
  "王曼昱": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Wang_Manyu_ATTC2017_2.jpeg?width=720",
    caption: "2017 亚洲锦标赛赛场照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Wang_Manyu_ATTC2017_2.jpeg"
  },
  "波尔 Timo Boll": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/2022-08-19_European_Championships_2022_%E2%80%93_Table_Tennis_by_Sandro_Halank%E2%80%93007.jpg?width=720",
    caption: "2022 欧锦赛赛场照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:2022-08-19_European_Championships_2022_%E2%80%93_Table_Tennis_by_Sandro_Halank%E2%80%93007.jpg"
  },
  "张本智和": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Table_tennis_at_the_2018_Summer_Youth_Olympics_%E2%80%93_Men%27s_Singles_Gold_Medal_Match_020_%28cropped%29.jpg?width=720",
    caption: "2018 青奥会男单决赛赛场照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Table_tennis_at_the_2018_Summer_Youth_Olympics_%E2%80%93_Men%27s_Singles_Gold_Medal_Match_020_(cropped).jpg"
  },
  "刘诗雯": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Mondial_Ping_-_Women%27s_Doubles_-_Final_-_10.jpg?width=720",
    caption: "2013 世乒赛女双决赛赛场照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mondial_Ping_-_Women%27s_Doubles_-_Final_-_10.jpg"
  },
  "平野美宇": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Hirano_Miu_ATTC_2017_final_win.jpg?width=720",
    caption: "2017 亚锦赛夺冠庆祝照",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hirano_Miu_ATTC_2017_final_win.jpg"
  }
};

const evidenceRows = [
  ["A", "Butterfly 官方赞助页", "职业运动员 Equipment as of 日期与产品链接"],
  ["A", "品牌官方产品页", "底板结构、胶皮硬度、速度/旋转等参数"],
  ["B", "授权经销商/权威媒体", "产品价格、采访、图片证据交叉验证"],
  ["C", "小红书/淘宝/论坛样本", "常见搭配热度，不直接进入主推荐"],
  ["UGC", "用户提交", "默认待审核，补证后再升级"]
];

let selectedEquipment = equipment[0].id;
let quizIndex = 0;
let quizScores = { attack: 0, risk: 0, control: 0, tactic: 0, spin: 0, defense: 0 };
let quizResult = "";
let activeAlternativeKey = "";
let activeEquipmentCategory = "底板";
let activeBladeBrand = "";
let activeBladeStructure = "";
let activeBladeLayers = "";
let posts = [
  { title: "预算 1200，正手国套反手涩套怎么配？", body: "目前横板两面弧圈，反手想更稳一点。", status: "已通过", likes: 28 },
  { title: "樊振东 ALC 对新手是不是太快", body: "试打半小时很爽，但小球有点飘。", status: "已通过", likes: 19 },
  { title: "给削球打法单独建一个器材池吧", body: "长胶、防守板和反胶厚度其实很难用普通规则推荐。", status: "人工复核", likes: 13 }
];

const API_BASE = "/api";
const AUTH_TOKEN_KEY = "pingqitongToken";
let currentUser = null;
let authLoading = false;
let currentRecommendationSnapshot = null;
let savedBackendConfigs = [];
let backendConfigsStatus = "请先登录后查看后台保存配置";
let backendConfigsLoading = false;

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return Array.from(document.querySelectorAll(selector));
}


function getToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY) || "";
}

function setToken(token) {
  if (token) localStorage.setItem(AUTH_TOKEN_KEY, token);
}

function clearToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

function authHeaders(extra = {}) {
  const headers = { ...extra };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: authHeaders(options.headers || {})
  });
  const result = await response.json().catch(() => ({}));

  if (response.status === 401) {
    clearToken();
    currentUser = null;
    syncAuthUi();
  }

  if (!response.ok || result.ok === false) {
    throw new Error(result.message || `请求失败，HTTP ${response.status}`);
  }

  return result;
}

function profileFromUser(user = currentUser) {
  if (!user) return {};
  return {
    nickname: user.nickname || user.username || "未命名球友",
    region: user.region || "",
    kaiqiu: user.kaiqiu || "",
    hand: user.hand || "",
    currentBlade: user.currentBlade || "",
    currentFh: user.currentFh || "",
    currentBh: user.currentBh || ""
  };
}

function isLoggedIn() {
  return Boolean(currentUser && getToken());
}

function ensureLoggedIn(message = "请先登录后再继续操作。") {
  if (isLoggedIn()) return true;
  showAuthModal("login", message);
  return false;
}


function normalizeAuthUsername(username) {
  return String(username || '').trim().toLowerCase();
}

function isValidAuthUsername(username) {
  return /^[a-zA-Z0-9_]{3,20}$/.test(username);
}

function evaluatePasswordStrength(password, username = '') {
  let score = 0;
  const tips = [];
  const value = String(password || '');
  const account = String(username || '').toLowerCase();

  if (value.length >= 8) score += 1;
  else tips.push('至少 8 位');
  if (value.length >= 10) score += 1;
  if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score += 1;
  else tips.push('建议包含大小写字母');
  if (/[0-9]/.test(value)) score += 1;
  else tips.push('需要包含数字');
  if (/[^A-Za-z0-9]/.test(value)) score += 1;
  else tips.push('建议加入特殊符号');
  if (account && value.toLowerCase().includes(account)) {
    score -= 2;
    tips.push('不要包含账号');
  }
  if (/^(12345678|11111111|00000000|password|qwerty)/i.test(value)) {
    score = 0;
    tips.push('不要使用常见弱密码');
  }
  if (value.length > 15) {
    score = 0;
    tips.push('不能超过 15 位');
  }

  if (value.length < 8 || score <= 1) return { level: 'weak', label: '弱', percent: 25, tips };
  if (score >= 4) return { level: 'strong', label: '强', percent: 100, tips: tips.length ? tips : ['密码强度良好'] };
  return { level: 'medium', label: '中', percent: 65, tips };
}

function updatePasswordStrengthUi() {
  const password = qs('#authPassword')?.value || '';
  const username = qs('#authUsername')?.value || '';
  const strength = evaluatePasswordStrength(password, username);
  const bar = qs('#passwordStrengthBar');
  const label = qs('#passwordStrengthLabel');
  const tips = qs('#passwordStrengthTips');
  if (!bar || !label || !tips) return;
  bar.style.width = `${strength.percent}%`;
  bar.dataset.level = strength.level;
  label.textContent = `密码强度：${strength.label}`;
  tips.textContent = strength.tips.slice(0, 2).join('；') || '密码强度良好';
}

function showAuthMessage(message, type = 'info') {
  const messageBox = qs('#authMessage');
  if (!messageBox) return;
  messageBox.textContent = message || '';
  messageBox.dataset.type = type;
  messageBox.classList.toggle('show', Boolean(message));
}

async function checkAuthUsernameAvailability() {
  const modal = qs('#authModal');
  if (!modal || modal.dataset.mode !== 'register') return;
  const username = normalizeAuthUsername(qs('#authUsername')?.value || '');
  const hint = qs('#authUsernameHint');
  if (!hint) return;
  if (!username) {
    hint.textContent = '账号用于登录，支持英文、数字、下划线';
    hint.dataset.state = 'idle';
    return;
  }
  if (!isValidAuthUsername(username)) {
    hint.textContent = '账号必须为 3-20 位英文、数字或下划线';
    hint.dataset.state = 'bad';
    return;
  }
  hint.textContent = '正在检查账号是否可用...';
  hint.dataset.state = 'checking';
  try {
    const response = await fetch(`${API_BASE}/auth/check-username?username=${encodeURIComponent(username)}`);
    const data = await response.json();
    hint.textContent = data.message || (data.available ? '账号可用' : '账号已存在');
    hint.dataset.state = data.available ? 'good' : 'bad';
  } catch {
    hint.textContent = '暂时无法检查账号，请稍后提交时再试';
    hint.dataset.state = 'idle';
  }
}

function validateAuthInput({ mode, username, password, confirmPassword, nickname }) {
  if (!isValidAuthUsername(username)) return '账号必须为 3-20 位英文、数字或下划线';
  if (!password) return '请输入密码';
  if (mode === 'register') {
    if (password.length < 8 || password.length > 15) return '密码必须为 8-15 位';
    if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) return '密码至少需要包含字母和数字';
    if (/^(12345678|11111111|00000000|password|qwerty)/i.test(password)) return '请不要使用常见弱密码';
    if (password !== confirmPassword) return '两次输入的密码不一致';
    if (!nickname || nickname.length > 20) return '昵称不能为空，且不能超过 20 个字符';
  }
  return '';
}

function withProfile(user, profile = {}) {
  return { ...(user || {}), ...(profile || {}) };
}

function isAdminUser() {
  return Boolean(currentUser && currentUser.role === 'admin');
}

function renderAuthModal() {
  if (!document.getElementById("authStyles")) {
    const style = document.createElement("style");
    style.id = "authStyles";
    style.textContent = `
      .pqt-auth-mask { position: fixed; inset: 0; z-index: 9999; display: none; align-items: center; justify-content: center; background: rgba(0,0,0,.38); padding: 24px; }
      .pqt-auth-mask.open { display: flex; }
      .pqt-auth-card { width: min(460px, 100%); background: #fff; border: 1px solid rgba(17,94,89,.16); border-radius: 20px; box-shadow: 0 24px 80px rgba(15,23,42,.24); padding: 22px; }
      .pqt-auth-head { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 16px; }
      .pqt-auth-head h3 { margin: 0; font-size: 22px; }
      .pqt-auth-close { border: 0; background: transparent; font-size: 24px; cursor: pointer; line-height: 1; }
      .pqt-auth-message { display: none; margin: 0 0 12px; padding: 10px 12px; border-radius: 12px; background: #ecfeff; color: #155e75; font-size: 14px; }
      .pqt-auth-message.show { display: block; }
      .pqt-auth-message[data-type="error"] { background: #fef2f2; color: #991b1b; }
      .pqt-auth-message[data-type="success"] { background: #ecfdf5; color: #065f46; }
      .pqt-auth-form { display: grid; gap: 12px; }
      .pqt-auth-form label { display: grid; gap: 6px; font-size: 14px; color: #475569; }
      .pqt-auth-form input { height: 42px; border: 1px solid #cbd5e1; border-radius: 10px; padding: 0 12px; font-size: 15px; }
      .pqt-auth-help { font-size: 12px; color: #64748b; line-height: 1.5; }
      .pqt-auth-help[data-state="good"] { color: #047857; }
      .pqt-auth-help[data-state="bad"] { color: #b91c1c; }
      .pqt-auth-help[data-state="checking"] { color: #0369a1; }
      .pqt-strength { display: none; gap: 7px; }
      .pqt-strength.open { display: grid; }
      .pqt-strength-track { width: 100%; height: 8px; border-radius: 999px; overflow: hidden; background: #e2e8f0; }
      .pqt-strength-bar { height: 100%; width: 0; border-radius: 999px; background: #ef4444; transition: width .2s ease; }
      .pqt-strength-bar[data-level="medium"] { background: #f59e0b; }
      .pqt-strength-bar[data-level="strong"] { background: #10b981; }
      .pqt-strength-row { display: flex; justify-content: space-between; gap: 12px; font-size: 12px; color: #64748b; }
      .pqt-auth-actions { display: flex; gap: 10px; align-items: center; margin-top: 8px; }
      .pqt-auth-submit { flex: 1; height: 42px; border: 0; border-radius: 10px; background: #0f766e; color: #fff; font-weight: 700; cursor: pointer; }
      .pqt-auth-submit:disabled { opacity: .55; cursor: not-allowed; }
      .pqt-auth-switch { border: 0; background: transparent; color: #0f766e; cursor: pointer; font-weight: 700; }
      .auth-inline-actions { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 12px; }
      .pqt-admin-box { margin-top: 16px; padding: 14px; border: 1px solid #dbe7e3; border-radius: 14px; background: #f8fffd; }
      .pqt-admin-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 10px; }
      .pqt-admin-table { width: 100%; border-collapse: collapse; font-size: 13px; }
      .pqt-admin-table th, .pqt-admin-table td { border-bottom: 1px solid #e2e8f0; text-align: left; padding: 8px 6px; vertical-align: top; }
      .pqt-admin-table button { margin-right: 6px; margin-top: 4px; }
    `;
    document.head.appendChild(style);
  }

  if (document.getElementById("authModal")) return;

  const modal = document.createElement("div");
  modal.id = "authModal";
  modal.className = "pqt-auth-mask";
  modal.innerHTML = `
    <div class="pqt-auth-card" role="dialog" aria-modal="true" aria-labelledby="authTitle">
      <div class="pqt-auth-head">
        <h3 id="authTitle">登录乒器通</h3>
        <button class="pqt-auth-close" type="button" id="authCloseButton" aria-label="关闭">×</button>
      </div>
      <p class="pqt-auth-message" id="authMessage"></p>
      <form class="pqt-auth-form" id="authForm">
        <label>
          <span>账号</span>
          <input id="authUsername" name="username" autocomplete="username" placeholder="3-20 位英文、数字或下划线" required />
          <small class="pqt-auth-help" id="authUsernameHint" data-state="idle">账号用于登录，不可与他人重复。</small>
        </label>
        <label>
          <span>密码</span>
          <input id="authPassword" name="password" type="password" autocomplete="current-password" placeholder="8-15 位，至少包含字母和数字" required />
        </label>
        <div class="pqt-strength" id="passwordStrengthBox">
          <div class="pqt-strength-track"><div class="pqt-strength-bar" id="passwordStrengthBar" data-level="weak"></div></div>
          <div class="pqt-strength-row">
            <span id="passwordStrengthLabel">密码强度：弱</span>
            <span id="passwordStrengthTips">建议包含大小写字母、数字和符号</span>
          </div>
        </div>
        <label id="authConfirmPasswordRow" style="display:none">
          <span>确认密码</span>
          <input id="authConfirmPassword" name="confirmPassword" type="password" autocomplete="new-password" placeholder="请再次输入密码" />
        </label>
        <label id="authNicknameRow" style="display:none">
          <span>昵称</span>
          <input id="authNickname" name="nickname" maxlength="20" placeholder="例如 反手还行" />
        </label>
        <div class="pqt-auth-actions">
          <button class="pqt-auth-submit" id="authSubmitButton" type="submit">登录</button>
          <button class="pqt-auth-switch" id="authSwitchButton" type="button">注册新账号</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);

  qs("#authCloseButton").addEventListener("click", hideAuthModal);
  qs("#authSwitchButton").addEventListener("click", () => {
    const mode = modal.dataset.mode === "register" ? "login" : "register";
    showAuthModal(mode);
  });
  qs("#authUsername").addEventListener("input", () => {
    clearTimeout(window.__pqtUsernameTimer);
    window.__pqtUsernameTimer = setTimeout(checkAuthUsernameAvailability, 350);
    updatePasswordStrengthUi();
  });
  qs("#authPassword").addEventListener("input", updatePasswordStrengthUi);
  qs("#authForm").addEventListener("submit", submitAuthForm);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) hideAuthModal();
  });
}

function showAuthModal(mode = "login", message = "") {
  renderAuthModal();
  const modal = qs("#authModal");
  modal.dataset.mode = mode;
  const isRegister = mode === "register";
  qs("#authTitle").textContent = isRegister ? "注册乒器通" : "登录乒器通";
  qs("#authSubmitButton").textContent = isRegister ? "注册并登录" : "登录";
  qs("#authSwitchButton").textContent = isRegister ? "已有账号，去登录" : "注册新账号";
  qs("#authNicknameRow").style.display = isRegister ? "grid" : "none";
  qs("#authConfirmPasswordRow").style.display = isRegister ? "grid" : "none";
  qs("#passwordStrengthBox").classList.toggle("open", isRegister);
  qs("#authPassword").setAttribute("autocomplete", isRegister ? "new-password" : "current-password");
  qs("#authPassword").placeholder = isRegister ? "8-15 位，至少包含字母和数字" : "请输入密码";
  qs("#authConfirmPassword").value = "";
  qs("#authNickname").value = "";
  showAuthMessage(message, message ? "info" : "info");
  updatePasswordStrengthUi();
  checkAuthUsernameAvailability();
  modal.classList.add("open");
  setTimeout(() => qs("#authUsername")?.focus(), 50);
}

function hideAuthModal() {
  qs("#authModal")?.classList.remove("open");
}

async function submitAuthForm(event) {
  event.preventDefault();
  const modal = qs("#authModal");
  const mode = modal.dataset.mode === "register" ? "register" : "login";
  const username = normalizeAuthUsername(qs("#authUsername").value);
  const password = qs("#authPassword").value;
  const confirmPassword = qs("#authConfirmPassword")?.value || "";
  const nickname = qs("#authNickname").value.trim();
  const button = qs("#authSubmitButton");

  const validationMessage = validateAuthInput({ mode, username, password, confirmPassword, nickname });
  if (validationMessage) {
    showAuthMessage(validationMessage, "error");
    return;
  }

  button.disabled = true;
  button.textContent = mode === "register" ? "注册中..." : "登录中...";
  showAuthMessage("");

  try {
    const result = await apiFetch(`/auth/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, nickname })
    });
    setToken(result.token);
    currentUser = withProfile(result.user, result.profile);
    localStorage.setItem("pingqitongProfile", JSON.stringify(profileFromUser(currentUser)));
    hideAuthModal();
    syncAuthUi();
    applyProfile();
    await loadBackendConfigs({ silent: true });
  } catch (error) {
    showAuthMessage(error.message, "error");
  } finally {
    button.disabled = false;
    button.textContent = mode === "register" ? "注册并登录" : "登录";
  }
}

async function loadCurrentUser() {
  const token = getToken();
  if (!token) {
    currentUser = null;
    syncAuthUi();
    applyProfile();
    return;
  }

  authLoading = true;
  syncAuthUi();
  try {
    const result = await apiFetch("/auth/me");
    currentUser = withProfile(result.user, result.profile);
    localStorage.setItem("pingqitongProfile", JSON.stringify(profileFromUser(currentUser)));
    syncAuthUi();
    applyProfile();
    await loadBackendConfigs({ silent: true });
  } catch (error) {
    clearToken();
    currentUser = null;
    backendConfigsStatus = "登录已失效，请重新登录。";
    syncAuthUi();
    applyProfile();
  } finally {
    authLoading = false;
    syncAuthUi();
  }
}

function logout() {
  clearToken();
  currentUser = null;
  savedBackendConfigs = [];
  backendConfigsStatus = "已退出登录，请登录后查看后台保存配置";
  syncAuthUi();
  applyProfile();
}

function syncAuthUi() {
  const profileName = qs("#profileName");
  const profileInitial = qs("#profileInitial");
  const nickname = currentUser?.nickname || currentUser?.username || "未登录球友";
  if (profileName) {
    profileName.textContent = authLoading ? "登录状态检查中" : nickname;
    profileName.style.cursor = "pointer";
    profileName.title = isLoggedIn() ? "已登录，点击可退出" : "点击登录/注册";
    profileName.onclick = () => {
      if (isLoggedIn()) {
        if (window.confirm("确定退出当前账号吗？")) logout();
      } else {
        showAuthModal("login");
      }
    };
  }
  if (profileInitial) {
    profileInitial.textContent = nickname.slice(0, 1);
    profileInitial.style.cursor = "pointer";
    profileInitial.onclick = profileName?.onclick || null;
  }
}

const equipmentCategories = [
  { key: "底板", label: "底板" },
  { key: "胶皮", label: "胶皮" },
  { key: "成品拍", label: "成品拍" }
];

function equipmentCategory(item) {
  return item.category || item.type || "底板";
}

function bladeSpecKeyForItem(item) {
  if (!item) return "";
  return bladeSpecAliases[item.id] || item.bladeSpecKey || item.id;
}

function bladeSpecFor(item) {
  const key = bladeSpecKeyForItem(item);
  return officialBladeSpecs[key] || null;
}

function bladeSpecSearchText(spec) {
  if (!spec) return "";
  return [
    spec.brand,
    spec.series,
    spec.model,
    spec.officialName,
    spec.material,
    spec.structure,
    spec.layers,
    spec.layerCount,
    spec.placement,
    spec.thickness,
    spec.headSize,
    spec.reaction,
    spec.vibration,
    spec.sourceName,
    spec.verified,
    ...(spec.keywords || [])
  ].filter(Boolean).join(" ");
}

function specMatchesCombo(spec, combo) {
  const text = [combo?.blade, combo?.visual?.blade].filter(Boolean).join(" ").toLowerCase();
  return [
    spec.officialName,
    spec.series,
    spec.model,
    spec.brand,
    ...(spec.keywords || [])
  ].filter(Boolean).some((value) => text.includes(value.toLowerCase()));
}

function bladeSpecForCombo(combo) {
  if (combo?.bladeSpecKey && officialBladeSpecs[combo.bladeSpecKey]) return officialBladeSpecs[combo.bladeSpecKey];
  if (combo?.bladeItemId && officialBladeSpecs[bladeSpecAliases[combo.bladeItemId] || combo.bladeItemId]) {
    return officialBladeSpecs[bladeSpecAliases[combo.bladeItemId] || combo.bladeItemId];
  }
  return Object.values(officialBladeSpecs).find((spec) => specMatchesCombo(spec, combo)) || null;
}

function renderBladeSpecPanel(spec, mode = "card") {
  if (!spec) {
    return `
      <div class="blade-spec-panel pending ${mode}">
        <div class="blade-spec-head">
          <strong>商家参数</strong>
          <span>官网参数待核</span>
        </div>
        <p>材质、系列、型号、层数暂不进入主推荐权重，需补品牌官网参数后启用。</p>
      </div>
    `;
  }
  const rows = [
    ["品牌", spec.brand],
    ["系列", spec.series],
    ["型号", spec.model],
    ["材质", spec.material],
    ["层数", spec.layers],
    ["结构", spec.placement],
    ["厚度", spec.thickness],
    ["拍面", spec.headSize]
  ];
  return `
    <div class="blade-spec-panel ${mode}">
      <div class="blade-spec-head">
        <strong>商家参数</strong>
        <a href="${spec.sourceUrl}" target="_blank" rel="noreferrer">${spec.verified}</a>
      </div>
      <div class="blade-spec-grid">
        ${rows.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
      </div>
      <div class="blade-spec-source">官网结构：${spec.structure}；反应 ${spec.reaction} / 震动 ${spec.vibration}</div>
    </div>
  `;
}

function renderBladeSpecForItem(item, mode = "card") {
  if (equipmentCategory(item) !== "底板") return "";
  return renderBladeSpecPanel(bladeSpecFor(item), mode);
}

function equipmentSearchText(item) {
  const spec = equipmentCategory(item) === "底板" ? bladeSpecFor(item) : null;
  return [
    item.name,
    item.brand,
    item.type,
    item.style,
    item.price,
    item.summary,
    item.catalogStatus,
    bladeSpecSearchText(spec),
    ...(item.tags || []),
    ...(item.aliases || [])
  ].filter(Boolean).join(" ").toLowerCase();
}

function equipmentCount(category) {
  return equipment.filter((item) => equipmentCategory(item) === category).length;
}

function uniqueValues(values) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function bladeFilterOptions() {
  const blades = equipment.filter((item) => equipmentCategory(item) === "底板");
  return {
    brands: uniqueValues(blades.map((item) => item.brand)),
    structures: uniqueValues(blades.map((item) => bladeSpecFor(item)?.placement)),
    layers: uniqueValues(blades.map((item) => bladeSpecFor(item)?.layers))
  };
}

function renderBladeFilters() {
  const box = qs("#bladeFilters");
  if (activeEquipmentCategory !== "底板") {
    box.innerHTML = "";
    return;
  }
  const options = bladeFilterOptions();
  const optionHtml = (items, current, emptyLabel) => `
    <option value="">${emptyLabel}</option>
    ${items.map((item) => `<option value="${item}" ${item === current ? "selected" : ""}>${item}</option>`).join("")}
  `;
  box.innerHTML = `
    <label><span>品牌</span><select id="bladeBrandFilter">${optionHtml(options.brands, activeBladeBrand, "全部品牌")}</select></label>
    <label><span>材质/结构</span><select id="bladeStructureFilter">${optionHtml(options.structures, activeBladeStructure, "全部结构")}</select></label>
    <label><span>层数</span><select id="bladeLayersFilter">${optionHtml(options.layers, activeBladeLayers, "全部层数")}</select></label>
  `;
  qs("#bladeBrandFilter").addEventListener("change", (event) => {
    activeBladeBrand = event.target.value;
    renderEquipmentList();
    renderReviewPanel();
  });
  qs("#bladeStructureFilter").addEventListener("change", (event) => {
    activeBladeStructure = event.target.value;
    renderEquipmentList();
    renderReviewPanel();
  });
  qs("#bladeLayersFilter").addEventListener("change", (event) => {
    activeBladeLayers = event.target.value;
    renderEquipmentList();
    renderReviewPanel();
  });
}

function setView(view) {
  qsa(".view").forEach((el) => el.classList.toggle("active", el.id === view));
  qsa(".nav-item, .mobile-tab").forEach((el) => el.classList.toggle("active", el.dataset.view === view));
  qs("#viewTitle").textContent = viewTitles[view] || "乒器通";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function gearById(id) {
  return gearCatalog.find((item) => item.id === id);
}

function priceRangeFor(item) {
  if (!item) return null;
  return channelPriceSnapshots[item.id]?.range || item.price;
}

function priceText(item) {
  const range = priceRangeFor(item);
  return range ? `约 ${range[0]}-${range[1]} 元` : "待补价";
}

function displayGear(item, degree = "") {
  if (!item) return "待匹配";
  const degreeText = degree ? ` ${degree}度` : "";
  return `${item.name}${degreeText}`;
}

function chooseHurricane({ budget, level, hurricaneVariant }) {
  const explicit = hurricaneVariants.find((item) => item.id === hurricaneVariant && item.gearId);
  let variant = explicit;
  if (!variant) {
    if (level === "professional" && budget >= 2400) {
      variant = hurricaneVariants.find((item) => item.id === "national-blue-40");
    } else if (budget >= 1600 || level === "advanced") {
      variant = hurricaneVariants.find((item) => item.id === "prov-orange-40");
    } else if (level === "beginner" || budget <= 900) {
      variant = hurricaneVariants.find((item) => item.id === "commercial-38");
    } else {
      variant = hurricaneVariants.find((item) => item.id === "commercial-39");
    }
  }
  return {
    item: gearById(variant.gearId),
    degree: variant.degree,
    label: variant.label
  };
}

function chooseBlade({ budget, level, style, weightNeed, pains }) {
  if (style === "fast") return gearById(budget >= 1400 ? "blade-bty-zjk-alc" : "blade-stiga-clipper");
  if (style === "control" || pains.includes("control") || weightNeed !== "normal") {
    return gearById(budget >= 1500 ? "blade-bty-harimoto-inner" : "blade-yasaka-resonate");
  }
  if (pains.includes("power") && budget >= 1500) return gearById("blade-dhs-long5");
  if ((level === "advanced" || level === "professional") && budget >= 2200) return gearById("blade-bty-viscaria");
  if ((level === "advanced" || level === "professional") && budget >= 1600) return gearById("blade-dhs-long5");
  return gearById(budget >= 900 ? "blade-dhs-301x" : "blade-yasaka-resonate");
}

function chooseBackhand({ budget, level, style, pains, backhandPreference }) {
  const preference = backhandPreferences.find((item) => item.id === backhandPreference && item.gearId);
  if (preference) return gearById(preference.gearId);
  if (pains.includes("backhand") || style === "control") return gearById(budget >= 1800 ? "bh-rozena" : "bh-rakza7");
  if (style === "fast") return gearById(budget >= 1600 ? "bh-v15-extra" : "bh-fastarc-g1");
  if ((level === "advanced" || level === "professional") && budget >= 2200) return gearById("bh-d05");
  return gearById(budget >= 1200 ? "bh-fastarc-g1" : "bh-rakza7");
}

function chooseForehand(context) {
  if (context.style === "control" && context.budget <= 1000) return { item: gearById("fh-h3-commercial"), degree: "38" };
  if (context.budget >= 2300 && (context.level === "advanced" || context.level === "professional")) return { item: gearById("fh-d09c"), degree: "" };
  return chooseHurricane(context);
}

function totalPriceText(parts) {
  const prices = parts.filter(Boolean).map((item) => priceRangeFor(item)).filter(Boolean);
  const min = prices.reduce((sum, range) => sum + range[0], 0);
  const max = prices.reduce((sum, range) => sum + range[1], 0);
  return { min, max, text: `约 ${min}-${max} 元` };
}

function makeMatchedCombo({ key, name, blade, fh, bh, budget, level, reasons, lockedText }) {
  const total = totalPriceText([blade, fh.item, bh]);
  return {
    key,
    name,
    blade: displayGear(blade),
    fh: displayGear(fh.item, fh.degree),
    bh: displayGear(bh),
    bladeItemId: blade?.id || "",
    bladeSpecKey: bladeSpecKeyForItem(blade),
    bladePrice: priceText(blade),
    fhPrice: priceText(fh.item),
    bhPrice: priceText(bh),
    totalPrice: total.text,
    visual: {
      blade: blade?.shortName || blade?.name || "待匹配底板",
      fh: `正手：${fh.item?.shortName || fh.item?.name || "待匹配"}${fh.degree ? ` ${fh.degree}度` : ""}`,
      bh: `反手：${bh?.shortName || bh?.name || "待匹配"}`,
      bladePhoto: blade?.photo || "",
      fhPhoto: fh.item?.photo || "",
      bhPhoto: bh?.photo || "",
      source: [blade?.source, fh.item?.source, bh?.source].filter(Boolean).join("；")
    },
    min: total.min,
    max: total.max,
    score: Math.min(96, 86 + (budget >= total.min && budget <= total.max ? 5 : 1) + (level === "advanced" ? 2 : 0) + (level === "professional" ? 3 : 0)),
    reasons: [lockedText, ...reasons].filter(Boolean)
  };
}

function shouldUsePremade(context) {
  return context.matchMode === "auto" && (
    context.budget <= 500 ||
    (context.level === "beginner" && context.age <= 13 && context.budget <= 700 && context.frequency !== "intense")
  );
}

function buildSeedCombo(context) {
  const seed = gearById(context.seedGear);
  if (!seed) return null;
  const lockedText = `已锁定心仪器材：${seed.name}，其余位置按打法、预算和水平补齐。`;
  if (context.matchMode === "blade" && seed.type === "blade") {
    const fh = chooseForehand(context);
    const bh = chooseBackhand(context);
    return makeMatchedCombo({
      key: `seed-${seed.id}`,
      name: `${seed.shortName} 个性化胶皮方案`,
      blade: seed,
      fh,
      bh,
      budget: context.budget,
      level: context.level,
      lockedText,
      reasons: [seed.notes, fh.item?.notes, bh?.notes, "后续可把用户实际试打反馈反哺到这套匹配权重里。"]
    });
  }
  if (context.matchMode === "fh" && seed.type === "rubber") {
    const blade = seed.id.includes("h3") || seed.id === "fh-d09c" ? chooseBlade({ ...context, pains: [...context.pains, "power"] }) : chooseBlade(context);
    const bh = chooseBackhand(context);
    const selectedForehand = hurricaneVariants.find((item) => item.gearId === seed.id && item.id === context.hurricaneVariant);
    const degree = selectedForehand?.degree || seed.degrees?.[0] || "";
    return makeMatchedCombo({
      key: `seed-${seed.id}`,
      name: `${seed.shortName} 正手反向匹配方案`,
      blade,
      fh: { item: seed, degree },
      bh,
      budget: context.budget,
      level: context.level,
      lockedText,
      reasons: [seed.notes, "正手粘性或粘弹越强，底板要保留足够支撑和容错。", bh?.notes]
    });
  }
  if (context.matchMode === "bh" && seed.type === "rubber") {
    const blade = seed.id === "bh-v15-extra" || seed.id === "bh-bluestorm-z1" ? chooseBlade({ ...context, style: "fast" }) : chooseBlade(context);
    const fh = chooseForehand(context);
    return makeMatchedCombo({
      key: `seed-${seed.id}`,
      name: `${seed.shortName} 反手反向匹配方案`,
      blade,
      fh,
      bh: seed,
      budget: context.budget,
      level: context.level,
      lockedText,
      reasons: [seed.notes, "反手先确定后，正手和底板会优先保证硬度差不过分极端。", fh.item?.notes]
    });
  }
  return null;
}

function getAlternativeCombos(combo, budget, style) {
  if (combo.category === "premade") {
    return comboRules.filter((item) => ["beginner", "control", "arc"].includes(item.key)).slice(0, 3);
  }
  return comboRules
    .filter((item) => item.key !== combo.key && item.key !== "beginner" && (style !== "defense" || item.key === "defense"))
    .sort((a, b) => Math.abs(budget - (a.min + a.max) / 2) - Math.abs(budget - (b.min + b.max) / 2))
    .slice(0, 3);
}

function renderAlternatives(combo, budget, style) {
  const alternatives = getAlternativeCombos(combo, budget, style);
  if (!alternatives.length) return "";
  return `
    <div class="alternative-list">
      <p class="eyebrow">备选路线</p>
      ${alternatives.map((item) => `
        <button class="alternative-item" type="button" data-combo-key="${item.key}" aria-label="切换到${item.name}">
          <strong>${item.name}</strong>
          <span>${item.blade} / ${item.totalPrice}</span>
          <small>点击切换为主方案</small>
        </button>
      `).join("")}
    </div>
  `;
}

function renderComboRows(combo, budget, level) {
  if (combo.category === "premade") {
    return `
      <div class="combo-row"><span>成品拍</span><strong>${combo.premade}<br><em>${combo.premadePrice}</em></strong></div>
      <div class="combo-row"><span>胶面</span><strong>${combo.fh} / ${combo.bh}<br><em>不单独拆胶皮预算</em></strong></div>
      <div class="combo-row"><span>适用</span><strong>入门体验 / 儿童启蒙 / 休闲练习<br><em>系统训练后建议升级自选拍</em></strong></div>
      <div class="combo-row"><span>整拍参考</span><strong>${combo.totalPrice}<br><em>当前输入预算：${budget} 元 / ${levelNames[level]}</em></strong></div>
    `;
  }
  return `
    <div class="combo-row"><span>底板</span><strong>${combo.blade}<br><em>${combo.bladePrice}</em></strong></div>
    <div class="combo-row"><span>正手</span><strong>${combo.fh}<br><em>${combo.fhPrice}</em></strong></div>
    <div class="combo-row"><span>反手</span><strong>${combo.bh}<br><em>${combo.bhPrice}</em></strong></div>
    <div class="combo-row"><span>整套参考</span><strong>${combo.totalPrice}<br><em>当前输入预算：${budget} 元 / ${levelNames[level]}</em></strong></div>
  `;
}

function pickCombo(context) {
  if (shouldUsePremade(context)) return comboRules.find((rule) => rule.key === "premade-low");
  const seeded = context.matchMode !== "auto" ? buildSeedCombo(context) : null;
  if (seeded) return seeded;
  const { budget, level, style, weightNeed, pains } = context;
  if (style === "defense") return comboRules.find((rule) => rule.key === "defense");
  if (level === "beginner" || budget <= 700) return comboRules.find((rule) => rule.key === "beginner");
  if (style === "fast" && budget >= 1400) return comboRules.find((rule) => rule.key === "zjk-red");
  if (style === "fast") return comboRules.find((rule) => rule.key === "fast");
  if ((style === "control" || pains.includes("control") || weightNeed !== "normal") && budget >= 1500) return comboRules.find((rule) => rule.key === "harimoto-inner");
  if (style === "control" || pains.includes("control") || weightNeed !== "normal") return comboRules.find((rule) => rule.key === "control");
  if (pains.includes("power") && budget >= 1500) return comboRules.find((rule) => rule.key === "long5");
  if (budget >= 2200 && (level === "advanced" || level === "professional")) return comboRules.find((rule) => rule.key === "viscaria");
  if (budget >= 1800 && (level === "advanced" || level === "professional")) return comboRules.find((rule) => rule.key === "premium");
  return comboRules.find((rule) => rule.key === "arc");
}

function renderGearVisual(combo) {
  qs("#gearVisual").classList.toggle("premade-gear-visual", combo.category === "premade");
  const photoCard = (kind, name, src) => {
    const missing = !src;
    return `
      <div class="photo-card ${kind === "推荐底板" ? "blade-photo-card" : ""} ${missing ? "photo-missing" : ""}">
        <div class="photo-frame">
          ${missing ? `<div class="missing-photo">实物图待接入<br><span>后台商品库补图</span></div>` : `<img src="${src}" alt="${name} 实物图" loading="eager" />`}
        </div>
        <div class="photo-caption">
          <span>${kind}</span>
          <strong>${name}</strong>
        </div>
      </div>
    `;
  };
  if (combo.category === "premade") {
    qs("#gearVisual").innerHTML = `
      <div class="gear-visual-inner premade-visual-inner">
        ${photoCard("推荐成品拍", combo.visual.premade || combo.visual.blade, combo.visual.premadePhoto || combo.visual.bladePhoto)}
        <div class="premade-note">
          <strong>低预算优先整拍</strong>
          <span>先解决能打、好上手、少踩坑；后续再升级专业自选配置。</span>
        </div>
        <div class="visual-source">${combo.visual.source}</div>
      </div>
    `;
    return;
  }
  qs("#gearVisual").innerHTML = `
    <div class="gear-visual-inner">
      ${photoCard("推荐底板", combo.visual.blade, combo.visual.bladePhoto)}
      <div class="rubber-photo-stack">
        ${photoCard("正手胶皮包装", combo.visual.fh, combo.visual.fhPhoto)}
        ${photoCard("反手胶皮包装", combo.visual.bh, combo.visual.bhPhoto)}
      </div>
      <div class="visual-source">${combo.visual.source}</div>
    </div>
  `;
}

function renderRecommendation() {
  const form = qs("#selectorForm");
  const formData = new FormData(form);
  const budget = Number(formData.get("budget"));
  const level = formData.get("level");
  const age = Number(formData.get("age"));
  const frequency = formData.get("frequency");
  const style = formData.get("style");
  const weightNeed = formData.get("weightNeed");
  const pains = formData.getAll("pain");
  const matchMode = formData.get("matchMode");
  const seedGear = formData.get("seedGear");
  const hurricaneVariant = formData.get("hurricaneVariant");
  const backhandPreference = formData.get("backhandPreference");
  const context = { budget, level, age, frequency, style, weightNeed, pains, matchMode, seedGear, hurricaneVariant, backhandPreference };
  const alternativeCombo = activeAlternativeKey ? comboRules.find((rule) => rule.key === activeAlternativeKey) : null;
  if (activeAlternativeKey && !alternativeCombo) activeAlternativeKey = "";
  const combo = alternativeCombo || pickCombo(context);
  const score = Math.min(98, combo.score + (budget >= combo.min && budget <= combo.max ? 2 : -2) + (quizResult ? 1 : 0));
  const bladeSpec = bladeSpecForCombo(combo);
  currentRecommendationSnapshot = {
    name: combo.name,
    blade: combo.blade || combo.premade || "",
    forehand: combo.fh || "",
    backhand: combo.bh || "",
    note: [
      `预算：${budget} 元`,
      `水平：${levelNames[level] || level}`,
      `打法：${style}`,
      `综合评分：${score}`,
      combo.totalPrice ? `参考价格：${combo.totalPrice}` : "",
      quizResult ? `测试画像：${quizResult}` : "",
      `推荐理由：${(combo.reasons || []).join("；")}`
    ].filter(Boolean).join("\n")
  };
  qs("#stageBadge").textContent = levelNames[level];
  renderGearVisual(combo);
  qs("#recommendation").innerHTML = `
    <div class="rec-title">
      <div>
        <p class="eyebrow">推荐方案</p>
        <h2>${combo.name}</h2>
      </div>
      <div class="score-chip">${score}</div>
    </div>
    <div class="combo-table">
      ${renderComboRows(combo, budget, level)}
    </div>
    ${combo.category === "premade" ? "" : renderBladeSpecPanel(bladeSpec, "recommendation")}
    <ul class="rec-reasons">
      ${combo.reasons.map((reason) => `<li>${reason}</li>`).join("")}
      ${quizResult ? `<li>测试画像已加入修正：${quizResult}</li>` : ""}
      ${hurricaneVariant !== "auto" || backhandPreference !== "auto" ? `<li>胶皮偏好已加入修正：正手 ${hurricaneVariants.find((item) => item.id === hurricaneVariant)?.label || "自动"}；反手 ${backhandPreferences.find((item) => item.id === backhandPreference)?.label || "自动"}。</li>` : ""}
      <li>价格为渠道采集价快照，正式上线由后端定时抓取淘宝、京东、授权店铺并清洗异常低价。</li>
    </ul>
    ${renderAlternatives(combo, budget, style)}
    <div class="backend-save-panel">
      <button class="primary-action" type="button" id="saveRecommendationButton">保存当前方案到后台</button>
      <button class="ghost-action" type="button" id="openProfileAfterSave">查看已保存方案</button>
      <p class="meta-text" id="saveRecommendationStatus">保存后会写入服务器 /api/configs，刷新页面也不会丢失。</p>
    </div>
  `;
}

function renderQuiz() {
  const box = qs("#quizBox");
  const insight = qs("#quizInsight");
  qs("#quizProgress").textContent = `${Math.min(quizIndex + 1, quizQuestions.length)}/${quizQuestions.length}`;
  if (quizIndex >= quizQuestions.length) {
    const result = getPersona();
    quizResult = result.name;
    box.innerHTML = `
      <div class="quiz-question">
        <p class="eyebrow">测试结果</p>
        <div class="persona-name">${result.name}</div>
        <p>${result.copy}</p>
        <button class="primary-action" id="applyPersona">带入选型</button>
        <button class="ghost-action" id="restartQuiz">重测</button>
      </div>
    `;
    insight.innerHTML = renderTraitBars();
    qs("#applyPersona").addEventListener("click", () => {
      renderRecommendation();
      setView("selector");
    });
    qs("#restartQuiz").addEventListener("click", restartQuiz);
    return;
  }
  const [question, options] = quizQuestions[quizIndex];
  box.innerHTML = `
    <div class="quiz-question">
      <h3>${question}</h3>
      <div class="quiz-options">
        ${options.map(([text, axis]) => `<button data-axis="${axis}" type="button">${text}</button>`).join("")}
      </div>
    </div>
  `;
  insight.innerHTML = renderTraitBars();
  qsa(".quiz-options button").forEach((button) => {
    button.addEventListener("click", () => {
      quizScores[button.dataset.axis] += 1;
      quizIndex += 1;
      renderQuiz();
    });
  });
}

function restartQuiz() {
  quizIndex = 0;
  quizScores = { attack: 0, risk: 0, control: 0, tactic: 0, spin: 0, defense: 0 };
  quizResult = "";
  renderQuiz();
}

function getPersona() {
  const entries = Object.entries(quizScores).sort((a, b) => b[1] - a[1]);
  const top = entries[0][0];
  const map = {
    attack: ["稳健型快攻打法", "节奏意识强，适合近台压迫和反手稳定优先的配置。"],
    risk: ["暴冲型三板斧", "主动性很高，器材可以给上限，但需要保留控制冗余。"],
    control: ["铁算盘控场派", "失误控制和落点质量更重要，适合均衡方案。"],
    tactic: ["算盘型线路大师", "会观察也会变线，推荐更重视手感和台内处理。"],
    spin: ["科研型弧圈党", "旋转、弧线和持球感是你的关键词。"],
    defense: ["老登型磨洋工打法", "多拍、防守和消耗能力强，器材要照顾重量与容错。"]
  };
  return { name: map[top][0], copy: map[top][1] };
}

function renderTraitBars() {
  const labels = { attack: "压迫", risk: "冒险", control: "稳定", tactic: "套路", spin: "旋转", defense: "防守" };
  return `
    <h3>打法向量</h3>
    <div class="trait-bars">
      ${Object.entries(labels).map(([key, label]) => {
        const width = Math.max(6, Math.round((quizScores[key] / 5) * 100));
        return `<div class="trait-line"><span class="meta-text">${label}</span><div><i style="width:${Math.min(width, 100)}%"></i></div></div>`;
      }).join("")}
    </div>
  `;
}

function renderEquipmentPhoto(item, variant = "") {
  const caption = item.photoSource ? `图片来自 ${item.photoSource}` : "官方实物图待接入";
  return `
    <figure class="equipment-photo ${variant}">
      <div class="equipment-photo-frame">
        ${item.photo ? `<img src="${item.photo}" alt="${item.name} 官方实物图" loading="lazy" />` : `<div class="missing-photo">实物图待接入<br><span>后台商品库补图</span></div>`}
      </div>
      <figcaption>${caption}</figcaption>
    </figure>
  `;
}

function renderEquipmentTabs() {
  qs("#equipmentTabs").innerHTML = equipmentCategories.map((category) => `
    <button class="module-tab ${activeEquipmentCategory === category.key ? "active" : ""}" type="button" data-equipment-category="${category.key}">
      <span>${category.label}</span>
      <strong>${equipmentCount(category.key)}</strong>
    </button>
  `).join("");
}

function renderEquipmentList() {
  const term = qs("#equipmentSearch").value.trim().toLowerCase();
  const list = equipment.filter((item) => {
    const categoryOk = equipmentCategory(item) === activeEquipmentCategory;
    const searchOk = !term || equipmentSearchText(item).includes(term);
    if (!categoryOk || !searchOk) return false;
    if (activeEquipmentCategory !== "底板") return true;
    const spec = bladeSpecFor(item);
    const brandOk = !activeBladeBrand || item.brand === activeBladeBrand;
    const structureOk = !activeBladeStructure || spec?.placement === activeBladeStructure;
    const layersOk = !activeBladeLayers || spec?.layers === activeBladeLayers;
    return brandOk && structureOk && layersOk;
  });
  if (list.length && !list.some((item) => item.id === selectedEquipment)) {
    selectedEquipment = list[0].id;
  }
  const missingPhotos = list.filter((item) => !item.photo).length;
  const officialSpecCount = list.filter((item) => equipmentCategory(item) === "底板" && bladeSpecFor(item)).length;
  qs("#equipmentMeta").innerHTML = `
    <span><strong>${list.length}</strong> 款${activeEquipmentCategory}可搜索</span>
    <span>${missingPhotos ? `${missingPhotos} 款待补官方实物图` : "当前列表均已接入实物图"}</span>
    <span>${activeEquipmentCategory === "底板" ? `${officialSpecCount} 款已接入官网材质/层数参数` : "底板模块按官网材质/层数建模"}</span>
    <span>搜索支持品牌、系列、型号、材质、层数和别名</span>
  `;
  qs("#equipmentList").innerHTML = list.length ? list.map((item) => `
    <article class="equipment-card">
      ${renderEquipmentPhoto(item, "equipment-photo-card")}
      <div class="equipment-top">
        <div>
          <div class="equipment-name">${item.name}</div>
          <div class="meta-text">${item.brand} · ${item.type} · ${item.style}</div>
        </div>
        <div class="rating">${item.rating.toFixed(1)}</div>
      </div>
      ${renderBladeSpecForItem(item)}
      <p>${item.summary}</p>
      ${item.aliases?.length ? `<div class="alias-line">可搜：${item.aliases.slice(0, 4).join(" / ")}</div>` : ""}
      ${item.catalogStatus ? `<div class="catalog-status">${item.catalogStatus}</div>` : ""}
      <div class="tag-row">${item.tags.map((tag, index) => `<span class="tag ${index === 0 ? "green" : index === 2 ? "gold" : ""}">${tag}</span>`).join("")}</div>
      <button class="small-action" data-equipment="${item.id}">查看评论</button>
    </article>
  `).join("") : `
    <div class="empty-state">
      <strong>当前模块没有匹配结果</strong>
      <p>换一个关键词试试，例如“张继科”“T05”“W968”“成品拍”。</p>
    </div>
  `;
  qsa("[data-equipment]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedEquipment = button.dataset.equipment;
      renderReviewPanel();
    });
  });
}

function renderReviewPanel() {
  const item = equipment.find((entry) => entry.id === selectedEquipment) || equipment[0];
  qs("#reviewPanel").innerHTML = `
    ${renderEquipmentPhoto(item, "review-equipment-photo")}
    <h3>${item.name}</h3>
    <div class="meta-text">${item.brand} · ${item.type} · 当前 ${item.rating.toFixed(1)} 分</div>
    ${renderBladeSpecForItem(item, "detail")}
    ${item.aliases?.length ? `<div class="alias-line review-alias">别名/搜索词：${item.aliases.join(" / ")}</div>` : ""}
    ${item.catalogStatus ? `<div class="catalog-status">${item.catalogStatus}</div>` : ""}
    <div class="comment-list">
      ${item.comments.map((comment) => `
        <div class="comment-item">
          <strong>${comment.user}</strong>
          <p>${comment.text}</p>
          <button class="small-action like-comment" type="button">赞 ${comment.likes}</button>
        </div>
      `).join("")}
    </div>
    <form class="review-form" id="reviewForm">
      <label class="score-input"><span>评分</span><input id="reviewScore" type="number" min="1" max="10" step="0.1" value="8.8" /></label>
      <textarea id="reviewText" maxlength="120" placeholder="使用感受"></textarea>
      <button class="primary-action" type="submit">提交审核</button>
    </form>
  `;
  qs("#reviewForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const text = qs("#reviewText").value.trim();
    if (!text) return;
    item.comments.unshift({ user: getProfile().nickname || "未登录球友", text: reviewStatus(text), likes: 0 });
    qs("#reviewText").value = "";
    renderReviewPanel();
  });
}

function reviewStatus(text) {
  return hasRiskText(text) ? `待人工复核：${text}` : text;
}

function hasRiskText(text) {
  return /加微|VX|返利|代理|广告|包过|私聊/i.test(text);
}

function renderChampionPhoto(item) {
  const photo = item.photo || championPhotos[item.player];
  if (!photo?.src) return "";
  return `
    <figure class="champion-photo">
      <img class="champion-photo-img" src="${photo.src}" alt="${item.player}${photo.caption ? ` ${photo.caption}` : "赛场照片"}" loading="lazy" referrerpolicy="no-referrer" />
      <figcaption>
        <span>${photo.caption || "代表赛场照"}</span>
        ${photo.sourceUrl ? `<a href="${photo.sourceUrl}" target="_blank" rel="noreferrer">图源：${photo.source}</a>` : `<small>图源：${photo.source}</small>`}
      </figcaption>
    </figure>
  `;
}

function renderChampions() {
  const keyword = qs("#championSearch").value.trim().toLowerCase();
  const items = championEquipment.filter((item) => {
    if (!keyword) return true;
    return [
      item.player,
      item.country,
      item.titles,
      item.period,
      item.blade,
      item.fh,
      item.bh,
      item.note,
      item.source
    ].join(" ").toLowerCase().includes(keyword);
  });
  const aLevelCount = championEquipment.filter((item) => item.evidence === "A").length;
  qs("#championMeta").innerHTML = `
    <span>已收录 ${championEquipment.length} 位 2004 至今世界冠军名将</span>
    <span>A 级官方/赞助页证据 ${aLevelCount} 位</span>
    <span>B/C 级为公开采访、赛场图和球友资料交叉待补证</span>
  `;
  qs("#championList").innerHTML = items.length ? items.map((item) => `
    <article class="champion-card">
      <div class="equipment-top">
        <div>
          <strong class="equipment-name">${item.player}</strong>
          <div class="meta-text">${item.country} · ${item.period}</div>
        </div>
        <span class="tag ${item.evidence === "A" ? "green" : item.evidence === "C" ? "gold" : ""}">${item.evidence} 级证据</span>
      </div>
      ${renderChampionPhoto(item)}
      <div class="champion-title-list">
        ${item.titles.split("；").map((title) => `<span>${title}</span>`).join("")}
      </div>
      <div class="combo-table compact">
        <div class="combo-row"><span>底板</span><strong>${item.blade}</strong></div>
        <div class="combo-row"><span>正手</span><strong>${item.fh}</strong></div>
        <div class="combo-row"><span>反手</span><strong>${item.bh}</strong></div>
      </div>
      <div class="catalog-status">${item.note}</div>
      <div class="alias-line">来源：${item.source}</div>
    </article>
  `).join("") : `
    <div class="empty-state">
      <strong>没有找到对应冠军装备</strong>
      <p>可以搜索“马龙”“Tenergy”“W968”“奥运单打”等关键词。</p>
    </div>
  `;
}

function renderPosts() {
  qs("#postList").innerHTML = posts.map((post, index) => `
    <article class="post-item">
      <div>
        <strong>${post.title}</strong>
        <p>${post.body}</p>
      </div>
      <div class="post-footer">
        <span class="tag ${post.status === "已通过" ? "green" : "gold"}">${post.status}</span>
        <button class="small-action" data-like-post="${index}">赞 ${post.likes}</button>
      </div>
    </article>
  `).join("");
  qsa("[data-like-post]").forEach((button) => {
    button.addEventListener("click", () => {
      posts[Number(button.dataset.likePost)].likes += 1;
      renderPosts();
    });
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setSaveRecommendationStatus(message, isError = false) {
  const status = qs("#saveRecommendationStatus");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("error-text", isError);
}

async function saveCurrentRecommendation() {
  if (!ensureLoggedIn("登录后才能把推荐方案保存到后台。")) {
    setSaveRecommendationStatus("请先登录后再保存方案。", true);
    return;
  }

  if (!currentRecommendationSnapshot) {
    setSaveRecommendationStatus("当前还没有可保存的推荐方案，请先生成一次推荐。", true);
    return;
  }

  const button = qs("#saveRecommendationButton");
  if (button) {
    button.disabled = true;
    button.textContent = "保存中...";
  }

  try {
    await apiFetch("/configs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentRecommendationSnapshot)
    });

    setSaveRecommendationStatus("保存成功，可以到个人资料页查看。");
    await loadBackendConfigs({ silent: true });
  } catch (error) {
    setSaveRecommendationStatus(`保存失败：${error.message}`, true);
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = "保存当前方案到后台";
    }
  }
}

async function loadBackendConfigs(options = {}) {
  const { silent = false } = options;
  if (!getToken()) {
    savedBackendConfigs = [];
    backendConfigsStatus = "请先登录后查看后台保存配置";
    backendConfigsLoading = false;
    applyProfile();
    return;
  }

  backendConfigsLoading = true;
  if (!silent) backendConfigsStatus = "正在读取后台配置...";
  applyProfile();

  try {
    const result = await apiFetch("/configs");

    savedBackendConfigs = Array.isArray(result.data) ? result.data : [];
    backendConfigsStatus = savedBackendConfigs.length
      ? `已从后台读取 ${savedBackendConfigs.length} 条配置`
      : "后台暂时没有保存的配置";
  } catch (error) {
    backendConfigsStatus = `后台配置读取失败：${error.message}`;
  } finally {
    backendConfigsLoading = false;
    applyProfile();
  }
}

async function deleteBackendConfig(id) {
  if (!ensureLoggedIn("登录后才能删除后台配置。")) return;
  if (!id) return;
  const confirmed = window.confirm("确定删除这条后台配置吗？");
  if (!confirmed) return;

  backendConfigsStatus = "正在删除后台配置...";
  applyProfile();

  try {
    await apiFetch(`/configs/${encodeURIComponent(id)}`, {
      method: "DELETE"
    });

    savedBackendConfigs = savedBackendConfigs.filter((item) => String(item.id) !== String(id));
    backendConfigsStatus = "删除成功";
  } catch (error) {
    backendConfigsStatus = `删除失败：${error.message}`;
  } finally {
    applyProfile();
  }
}

function renderBackendConfigs() {
  const items = savedBackendConfigs || [];
  const listHtml = items.length ? items.map((item) => `
    <div class="comment-item backend-config-item">
      <strong>${escapeHtml(item.name || "未命名方案")}</strong>
      <p>底板：${escapeHtml(item.blade || "未填写")}</p>
      <p>正手：${escapeHtml(item.forehand || "未填写")}</p>
      <p>反手：${escapeHtml(item.backhand || "未填写")}</p>
      ${item.note ? `<p class="meta-text">${escapeHtml(item.note).replaceAll("\n", "<br>")}</p>` : ""}
      <div class="post-footer">
        <span class="tag green">${escapeHtml(item.created_at || item.createdAt || "已保存")}</span>
        <button class="small-action" type="button" data-delete-backend-config="${escapeHtml(item.id)}">删除</button>
      </div>
    </div>
  `).join("") : `
    <div class="empty-state">
      <strong>暂无后台保存配置</strong>
      <p>在“智能选型”页点击“保存当前方案到后台”后，这里会显示记录。</p>
    </div>
  `;

  return `
    <section class="backend-configs-panel">
      <div class="equipment-top">
        <div>
          <h3>后台已保存配置</h3>
          <div class="meta-text">${escapeHtml(backendConfigsStatus)}${backendConfigsLoading ? " · 加载中" : ""}</div>
        </div>
        <button class="small-action" type="button" id="refreshBackendConfigs">刷新后台配置</button>
      </div>
      <div class="comment-list">
        ${listHtml}
      </div>
    </section>
  `;
}

function bindBackendConfigActions() {
  const refreshButton = qs("#refreshBackendConfigs");
  if (refreshButton) {
    refreshButton.addEventListener("click", () => loadBackendConfigs());
  }

  qsa("[data-delete-backend-config]").forEach((button) => {
    button.addEventListener("click", () => deleteBackendConfig(button.dataset.deleteBackendConfig));
  });

  const loginButton = qs("#profileLoginButton");
  if (loginButton) loginButton.addEventListener("click", () => showAuthModal("login"));

  const registerButton = qs("#profileRegisterButton");
  if (registerButton) registerButton.addEventListener("click", () => showAuthModal("register"));

  const logoutButton = qs("#profileLogoutButton");
  if (logoutButton) logoutButton.addEventListener("click", logout);
}

async function saveProfile(event) {
  event.preventDefault();
  const profile = {
    nickname: qs("#nickname").value.trim() || "未命名球友",
    region: qs("#region").value.trim(),
    kaiqiu: qs("#kaiqiu").value.trim(),
    hand: qs("#hand").value,
    currentBlade: qs("#currentBlade").value.trim(),
    currentFh: qs("#currentFh").value.trim(),
    currentBh: qs("#currentBh").value.trim()
  };

  if (!ensureLoggedIn("登录后才能把个人资料保存到后台。")) {
    localStorage.setItem("pingqitongProfile", JSON.stringify(profile));
    applyProfile(profile);
    return;
  }

  try {
    const result = await apiFetch("/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile)
    });
    currentUser = withProfile(result.user, result.data);
    localStorage.setItem("pingqitongProfile", JSON.stringify(profileFromUser(currentUser)));
    applyProfile();
    window.alert("个人资料已保存到后台。");
  } catch (error) {
    window.alert(`保存失败：${error.message}`);
  }
}

function getProfile() {
  if (currentUser) return profileFromUser(currentUser);
  try {
    return JSON.parse(localStorage.getItem("pingqitongProfile")) || {};
  } catch {
    return {};
  }
}


let adminUsers = [];
let adminUsersStatus = "管理员可查看和管理注册用户。";

async function loadAdminUsers() {
  if (!isAdminUser()) return;
  adminUsersStatus = "正在加载用户列表...";
  applyProfile();
  try {
    const result = await apiFetch("/admin/users");
    adminUsers = result.data || [];
    adminUsersStatus = `共 ${adminUsers.length} 个账号`;
  } catch (error) {
    adminUsersStatus = `加载失败：${error.message}`;
  }
  applyProfile();
}

async function updateAdminUserStatus(userId, status) {
  try {
    await apiFetch(`/admin/users/${encodeURIComponent(userId)}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });
    await loadAdminUsers();
  } catch (error) {
    window.alert(`操作失败：${error.message}`);
  }
}

async function updateAdminUserRole(userId, role) {
  try {
    await apiFetch(`/admin/users/${encodeURIComponent(userId)}/role`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role })
    });
    await loadAdminUsers();
  } catch (error) {
    window.alert(`操作失败：${error.message}`);
  }
}

function renderAdminPanel() {
  if (!isAdminUser()) return "";
  const rows = adminUsers.length ? adminUsers.map((user) => `
    <tr>
      <td><strong>${escapeHtml(user.username)}</strong><br><span class="meta-text">${escapeHtml(user.id)}</span></td>
      <td>${escapeHtml(user.nickname || "未填写")}</td>
      <td>${escapeHtml(user.role || "user")}</td>
      <td>${escapeHtml(user.status || "active")}</td>
      <td>${escapeHtml((user.createdAt || "").slice(0, 10))}</td>
      <td>
        <button class="small-action" type="button" data-admin-status="${escapeHtml(user.id)}" data-next-status="${user.status === "disabled" ? "active" : "disabled"}">${user.status === "disabled" ? "启用" : "禁用"}</button>
        <button class="small-action" type="button" data-admin-role="${escapeHtml(user.id)}" data-next-role="${user.role === "admin" ? "user" : "admin"}">${user.role === "admin" ? "设为普通" : "设为管理员"}</button>
      </td>
    </tr>
  `).join("") : `<tr><td colspan="6">${escapeHtml(adminUsersStatus)}</td></tr>`;

  return `
    <section class="pqt-admin-box">
      <div class="pqt-admin-toolbar">
        <div>
          <strong>管理后台</strong>
          <div class="meta-text">${escapeHtml(adminUsersStatus)}</div>
        </div>
        <button class="small-action" type="button" id="refreshAdminUsersButton">刷新用户</button>
      </div>
      <table class="pqt-admin-table">
        <thead><tr><th>账号</th><th>昵称</th><th>角色</th><th>状态</th><th>注册</th><th>操作</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </section>
  `;
}

function bindAdminActions() {
  const refresh = qs("#refreshAdminUsersButton");
  if (refresh) refresh.addEventListener("click", loadAdminUsers);
  qsa("[data-admin-status]").forEach((button) => {
    button.addEventListener("click", () => updateAdminUserStatus(button.dataset.adminStatus, button.dataset.nextStatus));
  });
  qsa("[data-admin-role]").forEach((button) => {
    button.addEventListener("click", () => updateAdminUserRole(button.dataset.adminRole, button.dataset.nextRole));
  });
}

function applyProfile(profile = getProfile()) {
  const loggedIn = isLoggedIn();
  const nickname = loggedIn ? (profile.nickname || currentUser?.username || "未命名球友") : "未登录球友";
  syncAuthUi();
  qs("#profileName").textContent = authLoading ? "登录状态检查中" : nickname;
  qs("#profileInitial").textContent = nickname.slice(0, 1);

  if (profile.nickname) qs("#nickname").value = profile.nickname;
  if (profile.region) qs("#region").value = profile.region;
  if (profile.kaiqiu) qs("#kaiqiu").value = profile.kaiqiu;
  if (profile.hand) qs("#hand").value = profile.hand;
  if (profile.currentBlade) qs("#currentBlade").value = profile.currentBlade;
  if (profile.currentFh) qs("#currentFh").value = profile.currentFh;
  if (profile.currentBh) qs("#currentBh").value = profile.currentBh;

  const roleLine = loggedIn ? `<div class="combo-row"><span>账号角色</span><strong>${isAdminUser() ? "管理员" : "普通用户"}</strong></div>` : "";
  const authActions = loggedIn
    ? `<div class="auth-inline-actions"><button class="small-action" type="button" id="profileLogoutButton">退出登录</button>${isAdminUser() ? `<button class="small-action" type="button" id="refreshAdminUsersButtonTop">管理用户</button>` : ""}</div>`
    : `<div class="auth-inline-actions"><button class="primary-action" type="button" id="profileLoginButton">登录</button><button class="small-action" type="button" id="profileRegisterButton">注册</button></div>`;

  qs("#profileSummary").innerHTML = `
    <h3>${escapeHtml(nickname)}</h3>
    <div class="combo-table">
      <div class="combo-row"><span>登录状态</span><strong>${loggedIn ? "已登录" : "未登录"}</strong></div>
      ${roleLine}
      <div class="combo-row"><span>地区</span><strong>${escapeHtml(profile.region || "未填写")}</strong></div>
      <div class="combo-row"><span>开球网</span><strong>${escapeHtml(profile.kaiqiu || "未填写")}</strong></div>
      <div class="combo-row"><span>底板</span><strong>${escapeHtml(profile.currentBlade || "未填写")}</strong></div>
      <div class="combo-row"><span>胶皮</span><strong>${escapeHtml(profile.currentFh || "未填写")} / ${escapeHtml(profile.currentBh || "未填写")}</strong></div>
    </div>
    ${authActions}
    ${renderBackendConfigs()}
    ${renderAdminPanel()}
  `;
  bindBackendConfigActions();
  bindAdminActions();
  const topAdmin = qs("#refreshAdminUsersButtonTop");
  if (topAdmin) topAdmin.addEventListener("click", loadAdminUsers);
}
function renderEvidence() {
  qs("#evidenceList").innerHTML = evidenceRows.map(([level, source, desc]) => `
    <div class="evidence-item">
      <div class="equipment-top">
        <strong>${source}</strong>
        <span class="tag ${level === "A" ? "green" : level === "C" ? "gold" : ""}">${level}</span>
      </div>
      <p>${desc}</p>
    </div>
  `).join("");
}

function populateHurricaneOptions() {
  qs("#hurricaneVariant").innerHTML = hurricaneVariants.map((item) => `<option value="${item.id}">${item.label}</option>`).join("");
}

function populateBackhandPreferenceOptions() {
  qs("#backhandPreference").innerHTML = backhandPreferences.map((item) => `<option value="${item.id}">${item.label}</option>`).join("");
}

function populateSeedGearOptions() {
  const mode = qs("#matchMode").value;
  const seedSelect = qs("#seedGear");
  const seedLabel = qs("#seedGearLabel");
  const labelMap = {
    auto: "底板选择",
    blade: "底板选择",
    fh: "正手胶皮选择",
    bh: "反手胶皮选择"
  };
  let items = [];
  if (mode === "blade") items = gearCatalog.filter((item) => item.type === "blade");
  if (mode === "fh") items = gearCatalog.filter((item) => item.type === "rubber" && item.side === "fh");
  if (mode === "bh") items = gearCatalog.filter((item) => item.type === "rubber" && item.side === "bh");
  seedLabel.textContent = labelMap[mode] || "底板选择";
  seedSelect.disabled = mode === "auto";
  seedSelect.innerHTML = mode === "auto"
    ? `<option value="">自动选择底板</option>`
    : items.map((item) => `<option value="${item.id}">${item.name} · ${priceText(item)}</option>`).join("");
}

function applySelectorParams() {
  const params = new URLSearchParams(window.location.search);
  const budget = params.get("budget");
  if (budget && Number.isFinite(Number(budget))) {
    const clampedBudget = Math.min(Number(qs("#budget").max), Math.max(Number(qs("#budget").min), Number(budget)));
    qs("#budget").value = clampedBudget;
    qs("#budgetOutput").textContent = `${clampedBudget} 元`;
  }
  const level = params.get("level");
  if (level && qs("#level").querySelector(`option[value="${level}"]`)) qs("#level").value = level;
  const age = params.get("age");
  if (age && Number.isFinite(Number(age))) qs("#age").value = age;
  const frequency = params.get("frequency");
  if (frequency && qs("#frequency").querySelector(`option[value="${frequency}"]`)) qs("#frequency").value = frequency;
  const weightNeed = params.get("weightNeed");
  if (weightNeed && qs("#weightNeed").querySelector(`option[value="${weightNeed}"]`)) qs("#weightNeed").value = weightNeed;
  const matchMode = params.get("matchMode");
  if (matchMode && qs("#matchMode").querySelector(`option[value="${matchMode}"]`)) {
    qs("#matchMode").value = matchMode;
    populateSeedGearOptions();
  }
  const seedGear = params.get("seedGear");
  if (seedGear && qs("#seedGear").querySelector(`option[value="${seedGear}"]`)) qs("#seedGear").value = seedGear;
  const hurricaneVariant = params.get("hurricaneVariant");
  if (hurricaneVariant && qs("#hurricaneVariant").querySelector(`option[value="${hurricaneVariant}"]`)) qs("#hurricaneVariant").value = hurricaneVariant;
  const backhandPreference = params.get("backhandPreference") || params.get("fhHardness");
  if (backhandPreference && qs("#backhandPreference").querySelector(`option[value="${backhandPreference}"]`)) qs("#backhandPreference").value = backhandPreference;
}

function init() {
  renderAuthModal();
  qsa("[data-view]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.view)));
  qsa("[data-view-trigger]").forEach((button) => button.addEventListener("click", () => setView(button.dataset.viewTrigger)));
  populateHurricaneOptions();
  populateBackhandPreferenceOptions();
  populateSeedGearOptions();
  applySelectorParams();
  qs("#recommendation").addEventListener("click", (event) => {
    const saveButton = event.target.closest("#saveRecommendationButton");
    if (saveButton) {
      saveCurrentRecommendation();
      return;
    }

    const openProfileButton = event.target.closest("#openProfileAfterSave");
    if (openProfileButton) {
      setView("profile");
      loadBackendConfigs();
      return;
    }

    const alternative = event.target.closest("[data-combo-key]");
    if (!alternative) return;
    activeAlternativeKey = alternative.dataset.comboKey;
    renderRecommendation();
    qs("#gearVisual").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  qs("#matchMode").addEventListener("change", () => {
    activeAlternativeKey = "";
    populateSeedGearOptions();
    renderRecommendation();
  });
  qs("#seedGear").addEventListener("change", () => {
    activeAlternativeKey = "";
    renderRecommendation();
  });
  qs("#hurricaneVariant").addEventListener("change", () => {
    activeAlternativeKey = "";
    renderRecommendation();
  });
  qs("#backhandPreference").addEventListener("change", () => {
    activeAlternativeKey = "";
    renderRecommendation();
  });
  qs("#budget").addEventListener("input", () => {
    qs("#budgetOutput").textContent = `${qs("#budget").value} 元`;
  });
  qs("#selectorForm").addEventListener("submit", (event) => {
    event.preventDefault();
    activeAlternativeKey = "";
    renderRecommendation();
  });
  qs("#equipmentTabs").addEventListener("click", (event) => {
    const tab = event.target.closest("[data-equipment-category]");
    if (!tab) return;
    activeEquipmentCategory = tab.dataset.equipmentCategory;
    if (activeEquipmentCategory !== "底板") {
      activeBladeBrand = "";
      activeBladeStructure = "";
      activeBladeLayers = "";
    }
    renderEquipmentTabs();
    renderBladeFilters();
    renderEquipmentList();
    renderReviewPanel();
  });
  qs("#equipmentSearch").addEventListener("input", () => {
    renderEquipmentList();
    renderReviewPanel();
  });
  qs("#championSearch").addEventListener("input", renderChampions);
  qs("#newPostButton").addEventListener("click", () => qs("#postForm").classList.toggle("open"));
  qs("#postForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const title = qs("#postTitle").value.trim();
    const body = qs("#postBody").value.trim();
    if (!title || !body) return;
    posts.unshift({
      title,
      body,
      status: hasRiskText(`${title} ${body}`) ? "人工复核" : "已通过",
      likes: 0
    });
    qs("#postTitle").value = "";
    qs("#postBody").value = "";
    qs("#postForm").classList.remove("open");
    renderPosts();
  });
  qs("#profileForm").addEventListener("submit", saveProfile);
  renderRecommendation();
  renderQuiz();
  renderEquipmentTabs();
  renderBladeFilters();
  renderEquipmentList();
  renderReviewPanel();
  renderChampions();
  renderPosts();
  applyProfile();
  loadCurrentUser();
  renderEvidence();
  const initialView = new URLSearchParams(window.location.search).get("view") || window.location.hash.slice(1);
  if (viewTitles[initialView]) setView(initialView);
}

document.addEventListener("error", (event) => {
  if (event.target.matches?.(".champion-photo-img")) {
    event.target.closest(".champion-photo")?.remove();
  }
}, true);

document.addEventListener("DOMContentLoaded", init);
