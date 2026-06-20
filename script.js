const projectStart = new Date("2026-05-01T00:00:00+08:00");

const demoData = {
  clear: {
    name: "高远球",
    main: "击球点过低",
    secondary: "转体不足",
    confidence: 92,
    advice: "提高击球点，提前完成侧身引拍，强化蹬转发力。",
    focus: [6, 8, 10],
    focusLabel: "右肩 / 右肘 / 右腕",
    route: "前端模拟，AI 模块待接入",
    evidence: ["模拟：右腕轨迹低于参考区间", "模拟：腕部速度峰值出现在较低位置", "模拟：击球帧前肩肘打开不足"],
  },
  forehand: {
    name: "正手发球",
    main: "手腕内旋不足",
    secondary: "抛球不稳",
    confidence: 88,
    advice: "保持抛球高度稳定，击球瞬间增加手腕内旋。",
    focus: [6, 8, 10],
    focusLabel: "右肩 / 右肘 / 右腕",
    route: "前端模拟，AI 模块待接入",
    evidence: ["模拟：抛球轨迹波动较大", "模拟：击球瞬间腕部内旋幅度偏小", "模拟：拍面角度变化不稳定"],
  },
  backhand: {
    name: "反手发球",
    main: "击球点偏离",
    secondary: "手腕外翻",
    confidence: 86,
    advice: "控制拍面角度，保持击球点靠近身体前方。",
    focus: [6, 8, 10],
    focusLabel: "右肩 / 右肘 / 右腕",
    route: "前端模拟，AI 模块待接入",
    evidence: ["模拟：右腕局部轨迹偏离参考范围", "模拟：击球点相对身体中线偏离", "模拟：腕部外翻角度偏大"],
  },
};

const technicalNodes = [
  ["01", "视频输入", "相机录像 / 本地视频导入", "当前 APP 已有录像功能，并加入不同分辨率选项。"],
  ["02", "姿态估计", "提取 COCO17 人体关键点", "目标链路明确，后续继续验证 RTMPose / TFLite 稳定性。"],
  ["03", "COCO17 关键点", "x、y、score 三通道", "已围绕 17 个关键点设计骨架输入与可视化。"],
  ["04", "击球帧检测", "规则法约 50% 正确率", "手腕速度、手肘角度、手臂方向、羽毛球检测和连续峰值仍误检较多。"],
  ["05", "骨架序列构建", "N×C×T×V×M", "下一步需要把真实标注数据稳定接入训练格式。"],
  ["06", "动作识别模型", "UniSTFormer 重点候选", "ST-GCN / ST-GCN++ / ProtoGCN 用于科研对比，FreqMixFormer 作为高精度候选。"],
  ["07", "错误类型检测", "先动作，再错误", "围绕高远球、正手发球、反手发球进入对应错误分支。"],
  ["08", "规则引擎建议", "Python 原型已完成", "可按训练次数、近 5 次错误率和错误频次生成分层建议。"],
  ["09", "APP 展示", "录像、历史、开关原型", "已完成分辨率、语音播报、自动 AI 分析开关等界面流程。"],
  ["10", "历史记录保存", "SQLite 五张表", "真实 AI 结果尚未接入，当前分析内容仍为模拟占位。"],
];

const phasePlan = [
  { start: 1, end: 8, phase: "数据链路跑通", time: "2026.05 - 2026.06", content: "视频采集、RTMPose 提取、COCO17 骨架保存、规则法击球帧检测、规则引擎原型。", output: "真实视频样本、CSV 标注、骨架可视化、规则引擎模拟报告" },
  { start: 9, end: 16, phase: "基础模型实验", time: "2026.07 - 2026.08", content: "打通真实数据到模型训练闭环，对比 ST-GCN、ST-GCN++、UniSTFormer baseline。", output: "基础准确率、参数量、FLOPs、推理速度对比表" },
  { start: 17, end: 24, phase: "UniSTFormer 移动端路线", time: "2026.09 - 2026.10", content: "验证 UniSTFormer 对 COCO17 骨架输入、动作分类和错误检测的适配性。", output: "移动端主模型候选、ONNX/TFLite 导出尝试" },
  { start: 25, end: 34, phase: "科研对比路线", time: "2026.11 - 2026.12", content: "以 ST-GCN++ / ProtoGCN / FreqMixFormer 做对比，验证细粒度错误识别能力。", output: "论文实验表、混淆矩阵、可解释性分析" },
  { start: 35, end: 44, phase: "系统整合与用户测试", time: "2027.01 - 2027.02", content: "接入 APP 原型、SQLite 历史记录、规则引擎反馈和真实模型输出。", output: "端到端演示、用户测试报告、Bug 修复记录" },
  { start: 45, end: 52, phase: "论文撰写与开源", time: "2027.03 - 2027.05", content: "整理软著、论文、开源仓库、项目结题报告和答辩材料。", output: "论文初稿、开源仓库、软著与结题报告" },
];

const memberDirectory = {
  liyuelong: { username: "liyuelong", name: "李月龙", role: "指导教师" },
  zhouzhou: { username: "zhouzhou", name: "周洲", role: "项目负责人 / 算法 / 网站" },
  wangpenghan: { username: "wangpenghan", name: "王鹏涵", role: "移动端 App / SQLite" },
  zhuyihan: { username: "zhuyihan", name: "朱亦涵", role: "击球帧检测 / 动作特征实验" },
  jiangyaqi: { username: "jiangyaqi", name: "姜雅琪", role: "规则引擎 / 个性化反馈" },
  yangziyu: { username: "yangziyu", name: "杨子钰", role: "数据采集 / 教练标注" },
  caomuning: { username: "caomuning", name: "曹沐宁", role: "前端 / 姿态估计与移动端部署协助" },
};

const memberAccounts = Object.values(memberDirectory).map(({ username, name }) => ({ username, name }));

// Static GitHub Pages demo login only. This is not a production authentication system.
const initialPasswordHashes = {
  liyuelong: "6fd624558da459d9ec673b686048b1e09a3b136161ac1dfadf3e506c7da33341",
  zhouzhou: "df719a9eed2a309e769e471093c301d9fb2dcdce41349f225580db1c2bacfd19",
  yangziyu: "e28890fb51b128378d648c6ed3c6f98de11d2304fb1f1f99f9eee9330ddec93d",
  caomuning: "8c165e802aaa4ea0fcfee4035bd77c244ae6716eddb431af895c835514d6a138",
  wangpenghan: "792780b5866afc9acd380cf6fc6323772f43aa5ee8d3b18a351724f1032c28ca",
  jiangyaqi: "bcae9121699bb605b381e4d991f4b3f11e5b6d1b40cc0bf9cc0bf0ead3bf7d4e",
  zhuyihan: "a532b926a753f0f7c16386e9128f2b3a672dbd2bce8785fb44b08bc2685d7cd8",
};

const authSessionKey = "yipaijihui-member-session";
const authPasswordKey = "yipaijihui-password-hashes";
const taskNoteKey = "yipaijihui-task-notes";

const members = [
  {
    name: "李月龙",
    username: "liyuelong",
    role: "指导教师",
    direction: "项目指导 / 算法研究建议 / 实验设计",
    mainWork: "负责项目指导、算法研究建议、实验设计、组会推进、论文和成果材料指导。",
    status: "指导中",
    weekly: "指导项目技术路线、实验设计和阶段成果整理，帮助团队把工程原型与科研实验边界说清楚。",
    weeklyItems: ["指导项目整体路线与实验设计", "推进组会同步与阶段风险梳理", "对论文和成果材料提供修改建议"],
    issues: ["需要团队持续提交真实数据、实验结果和待解决问题"],
    nextItems: ["继续指导真实数据闭环、模型对比实验和结题材料准备"],
    route: "指导教师：项目指导与科研支持",
    done: "提供组会指导、算力和实验设计建议。",
    todo: "继续跟进算法实验、论文结构和成果材料。",
    filters: ["algorithm", "docs", "testing"],
    tags: ["指导教师", "实验设计", "论文指导"],
    reports: [{ label: "本周", title: "项目指导", items: ["指导技术路线表达和阶段计划。", "推动算法、数据、App、规则引擎之间对齐。"] }],
  },
  {
    name: "周洲",
    username: "zhouzhou",
    role: "项目负责人 / 算法负责人 / 网站负责人",
    direction: "算法 / 网站 / 技术路线",
    mainWork: "统筹技术路线，推进姿态估计、动作识别、错误检测、网站展示和模型对比实验。",
    status: "进行中",
    weekly: "明确整体技术路线，梳理视频输入到反馈展示的完整流程，调研 UniSTFormer 并优化展示网站。",
    weeklyItems: ["明确大创项目整体技术路线", "梳理视频输入、姿态估计、关键点提取、动作识别、错误检测到反馈展示的完整流程", "深入阅读 ProtoGCN 代码，理解关键点数据进入模型、backbone 提取特征、head 完成分类的流程", "优化项目展示网站", "调研 UniSTFormer，判断其比 FineParser 更贴近项目任务，比 FreqMixFormer 更适合移动端"],
    issues: ["真实数据到模型训练的闭环仍需继续打通", "UniSTFormer 与 ST-GCN / FreqMixFormer 等模型还需要正式对比实验"],
    nextItems: ["更新网站内容", "推进真实数据集与模型训练对接", "设计 UniSTFormer 对比实验"],
    route: "路线一：算法主线与网站展示",
    done: "完成技术路线梳理、ProtoGCN 代码阅读、网站结构优化。",
    todo: "打通真实数据训练闭环并设计 UniSTFormer 对比实验。",
    filters: ["algorithm", "frontend", "docs"],
    tags: ["算法", "网站", "UniSTFormer"],
    reports: [{ label: "本周", title: "技术路线与模型选型", items: ["明确整体路线。", "调研 UniSTFormer。", "优化网站。"] }],
  },
  {
    name: "王鹏涵",
    username: "wangpenghan",
    role: "移动端开发 / SQLite 数据库",
    direction: "Android App / SQLite / 原型流程",
    mainWork: "负责 App 录像、历史查询、分辨率选项、语音播报、自动分析开关和 SQLite 数据结构。",
    status: "进行中",
    weekly: "加入分辨率、语音播报和自动 AI 分析选项，完善录像、历史查询和分析流程，修复清除历史记录闪退 bug。",
    weeklyItems: ["加入不同检测相机采集分辨率选项", "将分辨率选项连接到第四周录像功能", "加入是否语音播报选项", "加入是否自动进行 AI 分析选项", "完善 APP 录像、历史查询、调用分析流程", "当前 AI 分析模块尚未正式接入，暂时使用模拟代码代替", "优化不同手机版本下的用户功能切换流程", "修复清除历史记录时 APP 闪退的问题，原因是代码引用名称错误", "根据姜雅琪提供的 SQLite 数据库需求，统一数据库结构", "修改第五周 SQLite 数据库，扩展为五张主要数据表", "检查下一阶段开发内容，补充 APP 预留代码"],
    issues: ["AI 分析模块未接入", "数据库与真实分析结果仍需进一步打通"],
    nextItems: ["继续完善 APP 录像—历史记录—分析结果—数据库闭环"],
    route: "路线五：App 原型与 SQLite",
    done: "完成分辨率、语音播报、自动分析开关、历史记录和五张表扩展。",
    todo: "继续打通 App、数据库和真实分析结果。",
    filters: ["mobile", "data", "testing"],
    tags: ["Android", "SQLite", "App 原型"],
    reports: [{ label: "本周", title: "App 原型与数据库", items: ["完善录像和历史查询。", "修复清除历史记录闪退。", "扩展 SQLite 五张表。"] }],
  },
  {
    name: "朱亦涵",
    username: "zhuyihan",
    role: "击球帧检测 / 动作特征实验",
    direction: "击球帧 / 规则实验 / 连续动作识别",
    mainWork: "负责击球帧检测、hit / nonhit 数据集、规则法和 LSTM 等连续动作识别实验。",
    status: "需继续验证",
    weekly: "测试多种击球帧规则，发现规则法最好约 50% 正确率；建立 hit / nonhit 数据集并尝试 LSTM，但效果暂不理想。",
    weeklyItems: ["尝试通过增加限定条件提高击球帧检测准确率", "测试手腕速度、手臂伸向、手肘角度、羽毛球检测、连续帧峰值检测等方法", "发现一味增加限定条件会导致检测到的击球帧数量减少，且效果不稳定", "规则法最好情况是能覆盖所有击球帧，但会提取大量错误帧，正确率约 50%", "建立 hit / nonhit 文件夹数据集", "标注约 200 张击球帧用于训练", "由于数据数量太少或数据质量不足，训练效果较差", "尝试 LSTM 连续动作识别，但效果暂不理想"],
    issues: ["规则法误检多", "数据集规模和质量不足", "LSTM 效果不稳定"],
    nextItems: ["建立质量更好的击球帧数据集", "继续训练和验证 LSTM 或其他连续动作识别方法"],
    route: "路线四：击球帧检测与动作特征",
    done: "完成多规则测试、hit/nonhit 数据集和初步 LSTM 尝试。",
    todo: "提升数据质量并继续连续动作识别实验。",
    filters: ["algorithm", "data", "testing"],
    tags: ["击球帧", "LSTM", "数据集"],
    reports: [{ label: "本周", title: "击球帧规则与 LSTM 尝试", items: ["规则法约 50% 正确率。", "建立 hit/nonhit 数据集。", "LSTM 效果仍需改进。"] }],
  },
  {
    name: "姜雅琪",
    username: "jiangyaqi",
    role: "规则引擎 / 个性化反馈",
    direction: "规则引擎 / SQLite 对接 / 分层建议",
    mainWork: "负责规则引擎原型、用户等级判定、错误频次分层建议和模拟报告生成。",
    status: "正常",
    weekly: "完善规则引擎原型，统一数据库结构，用 100 条模拟数据验证用户等级、错误统计和个性化建议逻辑。",
    weeklyItems: ["继续完善规则引擎原型", "统一与路线五冲突的数据库结构", "编写 Python 代码实现用户水平等级判定", "训练次数小于 10 次或近 5 次错误率大于 50% 判定为初学者", "实现按错误频次 1—2 次、3—4 次、5 次及以上返回不同层级建议", "使用 100 条模拟数据测试规则引擎", "生成包含用户等级、错误统计和个性化建议的示例报告", "验证规则逻辑与阈值初步合理"],
    issues: ["规则引擎仍使用模拟数据", "尚未与 APP 真实历史记录和 AI 分析结果完全打通"],
    nextItems: ["与王鹏涵的 SQLite 数据库和 APP 历史记录模块继续对接", "准备接入真实分析结果"],
    route: "路线六：规则引擎与个性化反馈",
    done: "完成用户等级判定、错误频次分层建议和 100 条模拟数据测试。",
    todo: "与 App 历史记录和真实分析结果对接。",
    filters: ["algorithm", "data", "testing", "docs"],
    tags: ["规则引擎", "SQLite", "模拟数据"],
    reports: [{ label: "本周", title: "规则引擎模拟验证", items: ["100 条模拟数据测试。", "完成用户等级判定。", "生成示例报告。"] }],
  },
  {
    name: "杨子钰",
    username: "yangziyu",
    role: "数据采集 / 教练标注 / 志愿者组织",
    direction: "数据采集 / CSV 标注 / 教练沟通",
    mainWork: "负责视频整理、教练错误标注、CSV 表格、志愿者组织和标注费用协调。",
    status: "正常",
    weekly: "整理拍摄视频并交给教练标注，获得 176 条标注结果，计划下周新增 450 条视频。",
    weeklyItems: ["整理上周四、周六拍摄的视频", "将视频分类后交给教练进行错误标注", "当前获得一个志愿者 176 条视频的标注结果", "数据基本覆盖正手发球、反手发球、高远球及对应错误类型", "将标注结果整理为 CSV 表格并打包交给路线一", "计划下周按教练要求重新组织组员拍摄", "预计下周新增 450 条视频", "加上已用 270 条视频，阶段数据总量预计达到 720 条", "继续招募志愿者", "协商教练标注费用：二级教练 106 条 150 元，一级教练 70 条 110 元", "后续计划更多找一级教练标注，按约 1 元 / 条计费"],
    issues: ["现有视频规范性仍需提高", "志愿者数量和数据多样性仍需扩充"],
    nextItems: ["按教练要求重新拍摄", "扩大志愿者数据规模", "继续完善 CSV 标注规范"],
    route: "路线三：数据采集与标注",
    done: "完成 176 条教练标注和 CSV 整理。",
    todo: "组织新增 450 条视频拍摄并扩大志愿者规模。",
    filters: ["data", "testing", "docs"],
    tags: ["数据", "CSV", "教练标注"],
    reports: [{ label: "本周", title: "教练标注与数据扩充", items: ["176 条教练标注。", "270 条已用视频。", "下周预计新增 450 条。"] }],
  },
  {
    name: "曹沐宁",
    username: "caomuning",
    role: "前端开发 / 姿态估计与移动端部署协助",
    direction: "前端 / 姿态估计 / 移动端协助",
    mainWork: "负责前端开发、姿态估计与移动端部署协助。",
    status: "待补充",
    weekly: "本周进展待补充。",
    weeklyItems: ["本周详细进展待补充"],
    issues: ["需要补充本周具体工作记录"],
    nextItems: ["待补充"],
    route: "路线二：前端与姿态估计部署协助",
    done: "本周进展待补充。",
    todo: "待补充。",
    filters: ["frontend", "algorithm", "mobile"],
    tags: ["前端", "姿态估计", "待补充"],
    reports: [{ label: "本周", title: "本周进展待补充", items: ["保留方向：前端开发、姿态估计、移动端部署协助。"] }],
  },
];

const weeklyArchives = [
  {
    id: "week-1",
    label: "第1周",
    dateRange: "2026.05.01 - 2026.05.07",
    summary: {
      focus: "完成项目启动与基础技术路线确认",
      data: "制定三类动作的首轮采集计划与文件命名规则",
      system: "网站与 App 原型进入结构设计阶段",
      risk: "错误类型与标注口径尚未完全统一",
    },
    records: [
      { username: "zhouzhou", status: "进行中", done: ["梳理姿态估计、动作识别与反馈生成的初步链路", "建立算法路线调研清单"], issues: ["主模型与对比模型尚未确定"], next: ["调研 ST-GCN、ProtoGCN 与轻量时空模型", "明确最小可运行闭环"] },
      { username: "yangziyu", status: "正常", done: ["联系教练确认三类动作拍摄方向", "整理志愿者招募与拍摄需求"], issues: ["拍摄视角与错误动作描述需要教练确认"], next: ["形成拍摄流程表", "继续联系教练和志愿者"] },
      { username: "wangpenghan", status: "进行中", done: ["使用 Java 搭建 Android App 基础框架", "完成主页导航和权限申请原型"], issues: ["CameraX 真机兼容性待验证"], next: ["接入录像与本地保存功能", "测试不同 Android 版本"] },
      { username: "zhuyihan", status: "进行中", done: ["梳理击球瞬间可能使用的手腕速度特征", "收集自动定位击球帧的参考代码"], issues: ["缺少带准确击球帧的样本"], next: ["建立首批击球帧标注样例", "验证速度峰值规则"] },
      { username: "jiangyaqi", status: "进行中", done: ["梳理错误类型与训练建议的映射思路", "调研个性化反馈的数据字段"], issues: ["建议分层缺少统一规则"], next: ["设计错误字典结构", "整理用户等级字段"] },
      { username: "caomuning", status: "进行中", done: ["调研移动端姿态估计部署路线", "整理 RTMPose 与 TFLite 资料"], issues: ["模型格式与 Android 推理流程尚不清晰"], next: ["在 Python 环境验证姿态模型", "准备移动端部署测试"] },
    ],
    mentor: { username: "liyuelong", guidance: ["指导项目选题方向和整体技术路线", "明确阶段工作应形成可验收产出"], next: ["检查技术路线可行性", "审阅首轮数据采集方案"] },
  },
  {
    id: "week-2",
    label: "第2周",
    dateRange: "2026.05.08 - 2026.05.14",
    summary: {
      focus: "细化动作类别、错误类型与视频采集规范",
      data: "完成正手发球、反手发球和高远球的拍摄准备",
      system: "App 相机与网站信息架构同步推进",
      risk: "错误动作定义仍需更多教练意见验证",
    },
    records: [
      { username: "zhouzhou", status: "进行中", done: ["协调算法、数据与 App 路线同步推进", "粗读 ProtoGCN 并评估其细粒度识别价值"], issues: ["ProtoGCN 部分模块与原论文结构绑定较深"], next: ["优先分析可迁移的 MTE 思路", "继续熟悉 ST-GCN 数据流"] },
      { username: "yangziyu", status: "正常", done: ["与两位教练沟通并修改动作错误细节", "确定三个动作和多视角专业视频拍摄流程"], issues: ["志愿者拍摄时间仍需协调"], next: ["收集教练标准动作视频", "开始第一批志愿者招募"] },
      { username: "wangpenghan", status: "进行中", done: ["完成 App 录像并按时间顺序保存到本地", "建立 Java 版本代码仓库"], issues: ["部分设备权限流程仍不稳定"], next: ["实现历史记录列表", "完善录像文件索引"] },
      { username: "zhuyihan", status: "进行中", done: ["重新整理击球帧标注顺序", "生成首批完整 label 文件"], issues: ["自动标注代码只能保留最后一帧数据"], next: ["修复逐帧数据保存", "扩展肘部和身体角度特征"] },
      { username: "jiangyaqi", status: "正常", done: ["调整错误类型的分层建议", "设计 users、error_records、weekly_plan 数据结构"], issues: ["规则建议与 App 数据表存在字段差异"], next: ["完成错误类型字典", "与移动端路线统一字段"] },
      { username: "caomuning", status: "需继续验证", done: ["在 Python 中验证 17 个关键点输出", "将 TFLite 模型导入 Android Studio"], issues: ["CameraX 打开后出现黑屏"], next: ["排查 CameraX 生命周期和兼容问题", "完成真机姿态识别测试"] },
    ],
    mentor: { username: "liyuelong", guidance: ["审阅三类动作与错误类型定义", "建议数据采集先保证动作和标签质量"], next: ["检查教练视频与标注模板", "指导各路线确定阶段接口"] },
  },
  {
    id: "week-3",
    label: "第3周",
    dateRange: "2026.05.15 - 2026.05.21",
    summary: {
      focus: "打通 COCO17 骨架输入与移动端录像基础流程",
      data: "完成教练标准动作视频裁剪和首轮标签整理",
      system: "App 可录像保存，姿态模型进入真机适配阶段",
      risk: "击球帧暂未准确定位，TFLite 输出解码仍不稳定",
    },
    records: [
      { username: "zhouzhou", status: "进行中", done: ["将 ST-GCN 图结构扩展为 COCO17", "使用模拟 COCO17 数据跑通训练与测试", "编写关键点到 N×C×T×V×M 的转换脚本"], issues: ["真实视频尚未形成最小训练闭环"], next: ["接入 1 至 3 条真实标注视频", "验证 RTMPose 到 ST-GCN 的完整数据链"] },
      { username: "yangziyu", status: "正常", done: ["获取教练的三个标准动作视频", "完成视频裁剪、人脸模糊和动作位置标注", "生成 CSV 表格"], issues: ["真实错误样本数量仍不足"], next: ["组织第一批志愿者拍摄", "继续完善错误细节说明"] },
      { username: "wangpenghan", status: "正常", done: ["建立 SQLite 用户表与训练记录表", "实现历史记录 RecyclerView 和视频路径字段"], issues: ["真实 AI 分析结果暂无可接字段"], next: ["让历史记录卡片连接本地视频", "设计个人中心结构"] },
      { username: "zhuyihan", status: "进行中", done: ["配置 YOLOv8 与 MediaPipe 环境", "实现手腕速度峰值和部分角度输出"], issues: ["逐帧分析数据仍无法完整保存"], next: ["修复帧级结果写入", "增加击球帧误检分析"] },
      { username: "jiangyaqi", status: "正常", done: ["完成 SQLite 规则字段设计", "建立 16 种错误及训练建议字典", "实现按近 30 天错误频次生成周计划"], issues: ["当前仅使用模拟历史记录"], next: ["输出结构化训练计划", "准备与 App 数据库合并"] },
      { username: "caomuning", status: "需继续验证", done: ["解决 App 无法打开摄像头的初步问题", "尝试在移动端提取关键点骨架"], issues: ["姿态模型不贴合人体，SimCC 解码与 TFLite 维度冲突"], next: ["重新检查模型转换", "实现 SimCC argmax 解码"] },
    ],
    mentor: { username: "liyuelong", guidance: ["指导先跑通最小真实数据闭环", "要求算法与数据路线明确输入输出格式"], next: ["检查真实视频到骨架训练的结果", "评估移动端模型可行性"] },
  },
  {
    id: "week-4",
    label: "第4周",
    dateRange: "2026.05.22 - 2026.05.28",
    summary: {
      focus: "推进击球帧规则、SQLite 与规则引擎初版",
      data: "整理击球帧标签并准备真实视频批量采集",
      system: "App 历史记录和个人中心原型已形成",
      risk: "规则法准确率和移动端姿态模型稳定性仍需验证",
    },
    records: [
      { username: "zhouzhou", status: "进行中", done: ["使用平均抽帧方式跑通 3 个真实高远球视频", "完成 ST-GCN 原论文数据格式与训练流程实验", "评估 ProtoGCN 的 MTE 迁移方向"], issues: ["击球帧尚未准确获得"], next: ["接入人工目测击球帧", "建立真实视频最小闭环"] },
      { username: "yangziyu", status: "正常", done: ["继续与教练确认错误动作细节", "整理图文版错误说明和拍摄清单"], issues: ["专业示范与普通志愿者动作差异需要控制"], next: ["组织分批拍摄", "按动作和错误类型归档视频"] },
      { username: "wangpenghan", status: "进行中", done: ["实现历史详情卡片跳转对应视频", "完成个人中心总体框架", "修复多项 App bug"], issues: ["AI 分析模块暂以假数据占位"], next: ["合并 SQLite 代码", "完善视频与训练记录关联"] },
      { username: "zhuyihan", status: "需继续验证", done: ["实现视频到 MediaPipe 姿态、手腕速度峰值和候选击球帧保存", "加入肘角、肩旋转和球拍方向条件"], issues: ["检测准确度仍不足"], next: ["加入球拍与羽毛球距离", "验证手腕角速度与连续帧条件"] },
      { username: "jiangyaqi", status: "正常", done: ["完成 Python 版周计划生成逻辑", "按初学者与进阶者匹配不同训练建议", "将计划写入 weekly_plan 表"], issues: ["规则阈值缺少真实用户数据验证"], next: ["准备模拟测试集", "与 App 路线合并数据库"] },
      { username: "caomuning", status: "需继续验证", done: ["学习卡尔曼滤波预测与更新流程", "调研置信度驱动的姿态检测触发机制"], issues: ["论文场景与单人羽毛球训练并不完全匹配"], next: ["验证关键点轨迹平滑", "整理 BMP 思路可迁移部分"] },
    ],
    mentor: { username: "liyuelong", guidance: ["指导团队区分工程规则与模型方法", "要求击球帧检测记录准确率和误检原因"], next: ["检查数据库和规则引擎接口", "推进真实视频批量采集"] },
  },
  {
    id: "week-5",
    label: "第5周",
    dateRange: "2026.05.29 - 2026.06.04",
    summary: {
      focus: "完成 176 条教练标注，项目从原型展示转向真实数据闭环",
      data: "已整理 270 条可用视频，下周预计新增 450 条，阶段总量预计达到 720 条",
      system: "App 完善分辨率、语音播报、自动分析开关和历史记录流程",
      risk: "AI 分析模块尚未接入，击球帧检测规则法误检较多，部分成员记录需补充",
    },
    records: [
      { username: "zhouzhou", status: "进行中", done: ["明确视频输入、姿态估计、COCO17 关键点、击球帧检测、动作识别、错误检测、规则反馈的完整链路", "阅读 ProtoGCN 代码，梳理关键点数据进入 backbone 与 head 分类流程", "调研 UniSTFormer，判断其更适合作为移动端主模型候选", "优化项目展示网站结构"], issues: ["真实数据到模型训练的闭环仍需打通", "UniSTFormer、ST-GCN、FreqMixFormer 仍需正式对比实验"], next: ["更新网站内容", "推进真实数据集与模型训练对接", "设计 baseline 对比实验"] },
      { username: "yangziyu", status: "正常", done: ["整理上周四、周六拍摄视频", "将视频分类后交给教练进行错误标注", "获得 1 名志愿者 176 条视频的教练标注结果", "将标注结果整理为 CSV 表格并交给算法路线"], issues: ["现有视频规范性仍需提高", "志愿者数量和数据多样性仍需扩充"], next: ["按教练要求重新组织拍摄", "预计新增 450 条视频", "阶段数据总量预计达到 720 条"] },
      { username: "wangpenghan", status: "进行中", done: ["加入不同检测相机采集分辨率选项", "加入语音播报开关和自动 AI 分析开关", "完善 App 录像、历史查询和调用分析流程", "修复清除历史记录时 App 闪退的问题", "按规则引擎需求扩展 SQLite 为五张主要数据表"], issues: ["AI 分析模块尚未正式接入", "SQLite 与真实分析结果仍需进一步打通"], next: ["完善录像、分析、历史记录、数据库闭环", "预留真实 AI 输出字段"] },
      { username: "zhuyihan", status: "需继续验证", done: ["测试手腕速度、手臂方向、手肘角度、羽毛球检测、连续帧峰值等击球帧规则", "发现规则法最好约 50% 正确率，误检仍较多", "建立 hit / nonhit 文件夹数据集", "标注约 200 张击球帧用于训练", "尝试 LSTM 连续动作识别"], issues: ["规则法误检较多", "hit / nonhit 数据量不足", "LSTM 效果暂不理想"], next: ["扩充击球帧数据集", "继续验证连续动作识别方法", "输出误检原因分析"] },
      { username: "jiangyaqi", status: "正常", done: ["完善规则引擎 Python 原型", "统一与 App 路线冲突的数据库结构", "实现用户等级判定逻辑", "实现按错误频次返回不同层级建议", "使用 100 条模拟数据测试规则引擎并生成示例报告"], issues: ["当前规则引擎仍基于模拟数据", "尚未接入 App 真实历史记录和 AI 分析结果"], next: ["与 SQLite 和 App 历史记录模块继续对接", "准备接入真实分析结果字段"] },
      { username: "caomuning", status: "需补充", done: ["协助前端展示与部署资料整理"], issues: ["本周未提交完整可量化进展记录", "需要明确负责模块的可验收产出"], next: ["补交前端或部署协助记录", "至少形成一个可验收结果：页面模块修改、部署文档、姿态估计接口整理三选一"] },
    ],
    mentor: { username: "liyuelong", guidance: ["指导项目技术路线、实验设计和阶段成果表达", "帮助团队区分工程原型、模拟数据和真实 AI 模型边界", "对论文结构、算法实验和成果材料提供建议"], next: ["推进真实数据闭环", "指导模型对比实验", "检查阶段成果材料可信度"] },
  },
  {
    id: "week-6",
    label: "第6周",
    dateRange: "2026.06.05 - 2026.06.11",
    summary: {
      focus: "推进新增视频采集并准备首轮真实数据训练闭环",
      data: "按统一规范扩充三类动作数据，检查 CSV 与视频一一对应",
      system: "继续打通 App、SQLite、规则引擎与 AI 输出预留接口",
      risk: "本周为计划周，实际产出与实验指标将在组会后更新",
    },
    records: [
      { username: "zhouzhou", status: "进行中", done: ["制定真实数据接入检查清单", "整理 baseline 对比实验所需指标"], issues: ["真实骨架序列尚未完成批量转换"], next: ["完成首批数据转换与训练", "记录 ST-GCN 与 UniSTFormer baseline"] },
      { username: "yangziyu", status: "进行中", done: ["按教练意见更新拍摄规范", "整理新增志愿者分组方案"], issues: ["拍摄场地与人员时间需要协调"], next: ["执行新增视频拍摄", "完成视频命名、筛选与送标"] },
      { username: "wangpenghan", status: "进行中", done: ["检查五张 SQLite 表的字段关系", "整理真实分析结果的接口占位"], issues: ["模型输出格式尚未最终确定"], next: ["打通录像到历史记录流程", "等待算法字段后完成联调"] },
      { username: "zhuyihan", status: "需继续验证", done: ["整理规则法误检类型", "制定 hit / nonhit 扩充方案"], issues: ["连续帧样本和负样本仍不足"], next: ["补充数据并重新训练", "对比规则法和学习方法"] },
      { username: "jiangyaqi", status: "进行中", done: ["整理规则引擎对接字段", "复核模拟报告中的等级与建议逻辑"], issues: ["真实历史记录尚未接入"], next: ["接收 App 测试数据", "验证真实记录上的规则输出"] },
      { username: "caomuning", status: "需补充", done: ["整理姿态估计移动端部署问题清单", "准备前端与部署协助记录模板"], issues: ["缺少本周可量化验证结果"], next: ["完成一个可复现部署测试", "提交接口或页面修改记录"] },
    ],
    mentor: { username: "liyuelong", guidance: ["指导第六周围绕真实数据闭环安排工作", "要求实验记录同时包含成功结果与失败原因"], next: ["检查新增数据质量", "审阅 baseline 对比方案与 App 接口定义"] },
  },
];

let selectedWeekId = weeklyArchives[weeklyArchives.length - 1].id;

const outcomes = [
  ["移动端 App 原型", "已完成录像、历史查询、分辨率选项、语音播报和自动分析开关；AI 模块暂未接入。", "开发中", "王鹏涵 / 曹沐宁"],
  ["可训练数据集", "已整理 270 条可用视频，完成 176 条教练标注，下周预计新增 450 条。", "开发中", "杨子钰 / 朱亦涵"],
  ["模型实验代码", "UniSTFormer 为移动端重点候选，ST-GCN / ST-GCN++ / ProtoGCN / FreqMixFormer 做对比。", "规划中", "周洲"],
  ["规则引擎原型", "已使用 100 条模拟数据验证用户等级、错误统计和分层建议。", "开发中", "姜雅琪"],
  ["软件著作权", "待系统 V1.0 和核心功能链路稳定后整理登记材料。", "待完成", "周洲 / 王鹏涵"],
  ["研究论文与结题报告", "围绕真实数据、模型对比、击球帧检测和系统原型形成研究材料。", "待完成", "全体成员"],
];

const datasetStats = [
  ["176", "已完成教练标注视频", "一个志愿者样本，覆盖三类动作及对应错误类型。", 24],
  ["270", "已整理可用视频", "当前阶段已用于整理、筛选和交付路线一。", 38],
  ["450", "下周预计新增视频", "按教练要求重新组织组员拍摄。", 63],
  ["720", "阶段预计总视频量", "270 条已用 + 450 条预计新增。", 100],
  ["100", "规则引擎模拟测试数据", "用于验证用户等级、错误统计和分层建议。", 100],
];

const datasetDetails = [
  ["标注格式", "CSV", "动作类型 + 错误类型"],
  ["动作类别", "正手发球 / 反手发球 / 高远球", "覆盖当前三类核心动作"],
  ["第一次标注费用", "二级教练 106 条 150 元；一级教练 70 条 110 元", "合计 176 条，260 元"],
  ["后续目标成本", "约 1 元 / 条", "优先更多找一级教练标注"],
];

const modelReasons = [
  ["任务更匹配", "UniSTFormer 是骨架动作识别模型，更贴近本项目的动作识别和错误检测任务。"],
  ["输入更适配", "输入格式适配 COCO 关键点链路，便于与姿态估计模块衔接。"],
  ["移动端更友好", "计算量低，适合后续 ONNX / TFLite / 移动端部署。"],
  ["时空关系建模", "能同时理解同一时刻关节之间的空间关系，以及关节随时间变化的时间关系。"],
  ["细节错误潜力", "对手腕内旋不足、击球点异常、手臂伸展不足、转体不足等瞬时错误更有潜力。"],
];

const modelComparison = [
  ["ST-GCN", "基础骨架识别基线", "经典、易复现", "表达能力较旧", "对比基线"],
  ["ProtoGCN", "科研增强路线", "原型学习、可解释性强", "迁移成本较高", "科研参考"],
  ["FreqMixFormer", "高精度细粒度候选", "细粒度能力强", "移动端压力较大", "候选对比"],
  ["FineParser", "动作质量评分参考", "评分任务有参考价值", "与错误分类任务偏离", "不作为主路线"],
  ["UniSTFormer", "移动端主模型候选", "轻量、COCO 适配、时空建模强", "仍需真实数据验证", "重点候选"],
];

const prototypeSteps = ["录制或导入视频", "选择采集分辨率", "选择是否语音播报", "选择是否自动 AI 分析", "提取关键点", "定位击球帧", "模拟动作错误检测", "规则引擎生成建议", "保存到历史记录"];

const prototypeFeatures = [
  ["相机录像功能", "已完成 App 原型录像链路。"],
  ["分辨率选择", "已加入不同检测相机采集分辨率选项。"],
  ["语音播报开关", "已加入是否语音播报选项。"],
  ["自动 AI 分析开关", "已加入是否自动进行 AI 分析选项，真实 AI 尚未接入。"],
  ["历史记录查询", "已完善历史记录查询与调用分析流程。"],
  ["SQLite 五张大表", "已按规则引擎需求统一数据库结构。"],
  ["Bug 修复", "清除历史记录闪退 bug 已修复，原因为代码引用名称错误。"],
  ["模拟占位", "当前 AI 分析模块仍以模拟代码占位。"],
];

let selectedAction = "clear";
let animationFrameId = 0;
let analysisTimer = 0;

document.addEventListener("DOMContentLoaded", () => {
  setupHeader();
  setupPageUtilities();
  setupReveal();
  renderTechnicalFlow();
  renderDatasetStats();
  renderModelComparison();
  renderPrototypeSteps();
  setupDemo();
  setupTeam();
  setupWorkspace();
  setupRoadmap();
  setupOutcomes();
  drawCanvases();
});

function setupHeader() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector("#menu-toggle");
  const links = document.querySelector("#nav-links");
  const navLinks = [...document.querySelectorAll(".nav-links a")];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

  const updateHeader = () => header?.setAttribute("data-elevated", String(window.scrollY > 12));
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  toggle?.addEventListener("click", () => {
    const open = links?.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(Boolean(open)));
    document.body.classList.toggle("menu-open", Boolean(open));
  });

  navLinks.forEach((link) => link.addEventListener("click", () => {
    links?.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("active", active);
        if (active) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, { rootMargin: "-35% 0px -58% 0px", threshold: 0.01 });
  sections.forEach((section) => observer.observe(section));
}

function setupPageUtilities() {
  const progress = document.querySelector("#scroll-progress");
  const toTop = document.querySelector("#to-top");
  const update = () => {
    const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const ratio = Math.min(1, Math.max(0, window.scrollY / scrollable));
    if (progress) progress.style.transform = `scaleX(${ratio})`;
    toTop?.classList.toggle("visible", window.scrollY > 520);
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index % 5, 4) * 40}ms`;
    observer.observe(el);
  });
}

function renderTechnicalFlow() {
  const flow = document.querySelector("#technical-flow");
  if (!flow) return;
  flow.replaceChildren(...technicalNodes.map(([index, title, summary, status]) => {
    const article = document.createElement("article");
    article.className = "flow-node reveal visible";
    article.innerHTML = `<span>${index}</span><h3>${title}</h3><p>${summary}</p><small class="node-status">${status}</small>`;
    return article;
  }));
}

function renderDatasetStats() {
  const grid = document.querySelector("#dataset-grid");
  if (grid) {
    grid.replaceChildren(...datasetStats.map(([value, label, copy, progress]) => {
      const article = document.createElement("article");
      article.className = "dataset-card reveal visible";
      article.innerHTML = `<strong>${value}</strong><span>${label}</span><p>${copy}</p><i class="data-bar"><b style="width:${progress}%"></b></i>`;
      return article;
    }));
  }
  const details = document.querySelector("#dataset-detail-grid");
  if (details) {
    details.replaceChildren(...datasetDetails.map(([label, value, copy]) => {
      const article = document.createElement("article");
      article.className = "dataset-detail reveal visible";
      article.innerHTML = `<span>${label}</span><strong>${value}</strong><p>${copy}</p>`;
      return article;
    }));
  }
}

function renderModelComparison() {
  const reasons = document.querySelector("#model-reasons");
  if (reasons) {
    reasons.replaceChildren(...modelReasons.map(([title, copy], index) => {
      const article = document.createElement("article");
      article.className = "reason-card reveal visible";
      article.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3><p>${copy}</p>`;
      return article;
    }));
  }
  const body = document.querySelector("#model-table-body");
  if (body) {
    body.replaceChildren(...modelComparison.map((row) => {
      const tr = document.createElement("tr");
      tr.innerHTML = row.map((cell, index) => `<td${index === 0 ? ' data-label="模型"' : ""}>${cell}</td>`).join("");
      return tr;
    }));
  }
}

function renderPrototypeSteps() {
  const steps = document.querySelector("#analysis-steps");
  if (!steps) return;
  steps.replaceChildren(...prototypeSteps.map((step, index) => {
    const item = document.createElement("li");
    item.className = index === 0 ? "active" : "";
    item.textContent = step;
    return item;
  }));
  const features = document.querySelector("#prototype-feature-grid");
  if (features) {
    features.replaceChildren(...prototypeFeatures.map(([title, copy]) => {
      const article = document.createElement("article");
      article.className = "prototype-feature reveal visible";
      article.innerHTML = `<h3>${title}</h3><p>${copy}</p>`;
      return article;
    }));
  }
}

function getMemberByUsername(username) {
  return memberDirectory[username] || { username: "", name: "未知成员", role: "成员" };
}

function clearWeeklyArchive() {
  ["#weekly-tabs", "#weekly-summary-grid", "#weekly-record-table", "#weekly-mentor-card"].forEach((selector) => {
    document.querySelector(selector)?.replaceChildren();
  });
  setText("#weekly-current-range", "");
}

function renderWeeklyArchive() {
  const panel = document.querySelector("#member-private");
  if (!getActiveAccount() || !panel || panel.hidden) {
    clearWeeklyArchive();
    return;
  }
  const currentWeek = weeklyArchives.find((week) => week.id === selectedWeekId) || weeklyArchives[weeklyArchives.length - 1];
  if (!currentWeek) return;
  renderWeekTabs();
  renderWeekSummary(currentWeek);
  renderWeekMembers(currentWeek);
  renderWeekMentor(currentWeek);
  setText("#weekly-current-range", `${currentWeek.label} · ${currentWeek.dateRange}`);

  const summaryAction = document.querySelector("#weekly-summary-action");
  const exportAction = document.querySelector("#weekly-export-action");
  if (summaryAction && !summaryAction.dataset.bound) {
    summaryAction.dataset.bound = "true";
    summaryAction.addEventListener("click", () => console.log("查看往期汇总"));
  }
  if (exportAction && !exportAction.dataset.bound) {
    exportAction.dataset.bound = "true";
    exportAction.addEventListener("click", () => console.log("导出周报"));
  }
}

function renderWeekTabs() {
  const tabs = document.querySelector("#weekly-tabs");
  if (!tabs) return;
  tabs.replaceChildren(...weeklyArchives.map((week) => {
    const button = document.createElement("button");
    const active = week.id === selectedWeekId;
    button.type = "button";
    button.className = `weekly-tab${active ? " active" : ""}`;
    button.textContent = week.label;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(active));
    button.setAttribute("aria-controls", "weekly-record-table");
    button.addEventListener("click", () => {
      selectedWeekId = week.id;
      renderWeeklyArchive();
    });
    return button;
  }));
}

function renderWeekSummary(currentWeek) {
  const grid = document.querySelector("#weekly-summary-grid");
  if (!grid) return;
  const summaries = [
    ["本周重点", currentWeek.summary.focus, "focus"],
    ["数据进展", currentWeek.summary.data, "data"],
    ["系统进展", currentWeek.summary.system, "system"],
    ["风险提醒", currentWeek.summary.risk, "risk"],
  ];
  grid.replaceChildren(...summaries.map(([title, copy, type], index) => {
    const article = document.createElement("article");
    article.className = `weekly-summary-card weekly-summary-${type} reveal visible`;
    article.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3><p>${copy}</p>`;
    return article;
  }));
}

function renderRecordList(items, emptyText = "本周暂无记录") {
  const values = Array.isArray(items) && items.length ? items : [emptyText];
  return `<ul>${values.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderWeekMembers(currentWeek) {
  const table = document.querySelector("#weekly-record-table");
  if (!table) return;
  if (!currentWeek.records?.length) {
    table.innerHTML = '<div class="weekly-empty-state">该周成员记录尚未录入。</div>';
    return;
  }

  const header = document.createElement("div");
  header.className = "weekly-record-header";
  header.innerHTML = "<span>成员与角色</span><span>本周完成</span><span>当前问题</span><span>下周计划</span>";

  const rows = currentWeek.records.map((record) => {
    const member = getMemberByUsername(record.username);
    const row = document.createElement("article");
    const statusKind = record.status === "正常" ? "normal" : record.status === "进行中" ? "active" : "attention";
    row.className = "weekly-record-row reveal visible";
    row.innerHTML = `
      <div class="weekly-member-cell">
        <span class="weekly-member-avatar" aria-hidden="true">${member.name.slice(0, 1)}</span>
        <div class="weekly-member-meta"><h3>${member.name}</h3><p>${member.role}</p><span class="weekly-status-chip is-${statusKind}">${record.status}</span></div>
      </div>
      <div class="weekly-record-block"><h4>本周完成</h4>${renderRecordList(record.done)}</div>
      <div class="weekly-record-block"><h4>当前问题</h4>${renderRecordList(record.issues, "暂无个人阻塞")}</div>
      <div class="weekly-record-block"><h4>下周计划</h4>${renderRecordList(record.next)}</div>
    `;
    return row;
  });
  table.replaceChildren(header, ...rows);
}

function renderWeekMentor(currentWeek) {
  const container = document.querySelector("#weekly-mentor-card");
  if (!container) return;
  const mentorRecord = currentWeek.mentor;
  if (!mentorRecord) {
    container.innerHTML = '<div class="weekly-empty-state">该周指导记录尚未录入。</div>';
    return;
  }
  const mentor = getMemberByUsername(mentorRecord.username);
  container.innerHTML = `
    <header><span class="weekly-member-avatar" aria-hidden="true">${mentor.name.slice(0, 1)}</span><div><p class="eyebrow">Mentor Notes</p><h3>${mentor.name}老师｜指导记录</h3><p>${currentWeek.label} · ${currentWeek.dateRange}</p></div></header>
    <div class="weekly-mentor-grid">
      <div class="weekly-record-block"><h4>本周指导</h4>${renderRecordList(mentorRecord.guidance)}</div>
      <div class="weekly-record-block"><h4>下周指导重点</h4>${renderRecordList(mentorRecord.next)}</div>
    </div>
  `;
}

function setupDemo() {
  document.querySelectorAll(".action-list button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedAction = button.dataset.action || "clear";
      document.querySelectorAll(".action-list button").forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      resetSteps();
      updateResult();
    });
  });
  document.querySelector("#run-analysis")?.addEventListener("click", runAnalysis);
  updateResult();
}

function resetSteps() {
  window.clearTimeout(analysisTimer);
  document.querySelectorAll("#analysis-steps li").forEach((step, index) => {
    step.classList.toggle("active", index === 0);
    step.classList.remove("done");
  });
  setDemoProgress(0, "等待开始");
}

function runAnalysis() {
  const button = document.querySelector("#run-analysis");
  const steps = [...document.querySelectorAll("#analysis-steps li")];
  if (!button || !steps.length) return;
  button.disabled = true;
  button.textContent = "分析中...";
  let index = 0;
  steps.forEach((step, stepIndex) => {
    step.classList.toggle("active", stepIndex === 0);
    step.classList.remove("done");
  });
  setDemoProgress(8, "准备分析");
  const next = () => {
    steps[index]?.classList.remove("active");
    steps[index]?.classList.add("done");
    index += 1;
    setDemoProgress(Math.min(100, Math.round((index / steps.length) * 100)), steps[index]?.textContent || "分析完成");
    if (index >= steps.length) {
      button.disabled = false;
      button.textContent = "重新检测";
      setDemoProgress(100, "分析完成");
      updateResult(true);
      return;
    }
    steps[index]?.classList.add("active");
    analysisTimer = window.setTimeout(next, 560);
  };
  analysisTimer = window.setTimeout(next, 560);
}

function setDemoProgress(percent, label) {
  const bar = document.querySelector("#demo-progress-bar");
  if (bar) bar.style.width = `${percent}%`;
  setText("#demo-progress-value", `${percent}%`);
  setText("#demo-progress-label", label);
}

function updateResult(flash = false) {
  const data = demoData[selectedAction];
  setText("#demo-action-name", data.name);
  setText("#result-action", data.name);
  setText("#result-main", data.main);
  setText("#result-secondary", data.secondary);
  setText("#result-focus", data.focusLabel);
  setText("#result-route", data.route);
  setText("#confidence-value", `${data.confidence}%`);
  setText("#result-advice", data.advice);
  const evidenceList = document.querySelector("#result-evidence");
  if (evidenceList) {
    evidenceList.replaceChildren(...data.evidence.map((item) => {
      const chip = document.createElement("span");
      chip.textContent = item;
      return chip;
    }));
  }
  const bar = document.querySelector("#confidence-bar");
  if (bar) bar.style.width = `${data.confidence}%`;
  if (flash) document.querySelector(".result-panel")?.animate([{ transform: "translateY(0)" }, { transform: "translateY(-4px)" }, { transform: "translateY(0)" }], { duration: 380 });
}

function getCurrentWeek() {
  const diff = Date.now() - projectStart.getTime();
  return Math.max(1, Math.min(52, Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1));
}

function getPhaseByWeek(week) {
  return phasePlan.find((phase) => week >= phase.start && week <= phase.end) || phasePlan[phasePlan.length - 1];
}

function setupTeam() {
  setupFilteredButtons(".team-filters button", renderTeam);
  renderTeam("all");
}

function renderTeam(filter) {
  const grid = document.querySelector("#team-grid");
  if (!grid) return;
  const visible = filterMembers(filter, { includeMentor: false });
  grid.replaceChildren(...visible.map((member) => {
    const card = document.createElement("article");
    card.className = "member-card reveal visible";
    card.innerHTML = `
      <header><div><span class="avatar">${member.name.slice(0, 1)}</span><h3>${member.name}</h3><p class="role">${member.role}</p></div></header>
      <p class="member-direction">${member.direction}</p>
      <strong>主要分工</strong>
      <p>${member.mainWork}</p>
      <small class="privacy-note">详细周进展仅团队工作台可见</small>
      <div class="tag-row">${member.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    `;
    return card;
  }));
}

function setupWorkspace() {
  setupAuth();
  renderAuthState(getActiveAccount());
}

function setupAuth() {
  const loginForm = document.querySelector("#login-form");
  const passwordForm = document.querySelector("#password-form");
  const noteForm = document.querySelector("#note-form");
  updatePasswordStatus();
  document.querySelector("#password-toggle")?.addEventListener("click", () => {
    const form = document.querySelector("#password-form");
    if (form) form.hidden = !form.hidden;
    setText("#password-message", "");
    updatePasswordStatus();
  });
  document.querySelector("#logout-button")?.addEventListener("click", () => {
    sessionStorage.removeItem(authSessionKey);
    renderAuthState(null);
  });
  loginForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(loginForm);
    const account = findAccount(String(form.get("username") || ""));
    const password = String(form.get("password") || "");
    if (!account || !(await verifyPassword(account.username, password))) {
      const customHint = account && hasCustomPassword(account.username) ? "检测到此浏览器保存过自定义密码，请使用修改后的密码。" : "请确认账号和当前密码。";
      setText("#auth-message", `账号或密码不正确。${customHint}`);
      return;
    }
    sessionStorage.setItem(authSessionKey, account.username);
    loginForm.reset();
    setText("#auth-message", "");
    renderAuthState(account);
  });
  passwordForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const account = getActiveAccount();
    if (!account) return;
    const form = new FormData(passwordForm);
    const oldPassword = String(form.get("oldPassword") || "");
    const newPassword = String(form.get("newPassword") || "");
    const confirmPassword = String(form.get("confirmPassword") || "");
    if (!(await verifyPassword(account.username, oldPassword))) return setText("#password-message", "当前密码不正确。如果你之前改过密码，这里要填修改后的密码。");
    if (newPassword.length < 6) return setText("#password-message", "新密码至少 6 位。");
    if (newPassword !== confirmPassword) return setText("#password-message", "两次输入的新密码不一致。");
    try {
      await savePassword(account.username, newPassword);
    } catch {
      setText("#password-message", "浏览器阻止了本地保存，请检查隐私模式或站点数据权限。");
      return;
    }
    passwordForm.reset();
    updatePasswordStatus(account.username);
    setText("#password-message", `密码已修改。之后请在${getStorageScopeLabel()}使用新密码登录。`);
  });
  noteForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const account = getActiveAccount();
    if (!account) return;
    const notes = readNotes();
    notes[account.username] = document.querySelector("#task-note")?.value || "";
    localStorage.setItem(taskNoteKey, JSON.stringify(notes));
    setText("#note-message", "已保存到本机浏览器。");
  });
}

function renderAuthState(account) {
  const auth = document.querySelector("#member-auth");
  const panel = document.querySelector("#member-private");
  if (!auth || !panel) return;
  if (!account) {
    auth.hidden = false;
    panel.hidden = true;
    clearWeeklyArchive();
    updatePasswordStatus();
    return;
  }
  auth.hidden = true;
  panel.hidden = false;
  const member = members.find((item) => item.username === account.username);
  if (!member) {
    sessionStorage.removeItem(authSessionKey);
    renderAuthState(null);
    return;
  }
  setText("#member-session-user", `${member.name} 的工作台`);
  setText("#member-session-role", member.role);
  setText("#personal-week-task", member.weekly);
  setText("#personal-done-task", member.done);
  setText("#personal-todo-task", member.todo);
  const usernameInput = document.querySelector("#password-username");
  if (usernameInput) usernameInput.value = member.username;
  const notes = readNotes();
  const textarea = document.querySelector("#task-note");
  if (textarea) textarea.value = notes[member.username] || "";
  updatePasswordStatus(member.username);
  renderWeeklyArchive();
}

function setupRoadmap() {
  const list = document.querySelector("#roadmap-list");
  if (!list) return;
  const week = getCurrentWeek();
  list.replaceChildren(...phasePlan.map((phase, index) => {
    const open = week >= phase.start && week <= phase.end;
    const details = document.createElement("details");
    details.className = "timeline-item reveal visible";
    details.open = open;
    details.innerHTML = `
      <summary><span class="timeline-index">${index + 1}</span><div><h3>${phase.phase}</h3><p>${phase.time}</p></div><b class="timeline-status${open ? " active" : ""}">${week > phase.end ? "已完成" : open ? "进行中" : "计划中"}</b></summary>
      <p>${phase.content} 阶段产出：${phase.output}。</p>
    `;
    return details;
  }));
}

function setupOutcomes() {
  const grid = document.querySelector("#outcome-grid");
  if (!grid) return;
  grid.replaceChildren(...outcomes.map(([title, copy, status, owner], index) => {
    const article = document.createElement("article");
    const statusClass = status === "开发中" ? "is-active" : status === "规划中" ? "is-planned" : "is-pending";
    const progress = status === "开发中" ? 46 : status === "规划中" ? 18 : 5;
    article.className = "outcome-card reveal visible";
    article.innerHTML = `
      <span class="outcome-index">${String(index + 1).padStart(2, "0")}</span>
      <h3>${title}</h3>
      <p>${copy}</p>
      <span class="task-status ${statusClass}">${status}</span>
      <span class="outcome-progress" aria-hidden="true"><i style="width: ${progress}%"></i></span>
      <small class="owner">负责人：${owner}</small>
    `;
    return article;
  }));
}

function setupFilteredButtons(selector, render) {
  document.querySelectorAll(selector).forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(selector).forEach((item) => item.classList.toggle("active", item === button));
      render(button.dataset.filter || "all");
    });
  });
}

function filterMembers(filter, options = {}) {
  const { includeMentor = true } = options;
  return members.filter((member) => {
    if (!includeMentor && member.username === "liyuelong") return false;
    return filter === "all" || member.filters.includes(filter);
  });
}

function findAccount(value) {
  const normalized = value.trim().toLowerCase();
  return memberAccounts.find((account) => account.username === normalized || account.name === value.trim());
}

function getActiveAccount() {
  const username = sessionStorage.getItem(authSessionKey);
  return memberAccounts.find((account) => account.username === username) || null;
}

function updatePasswordStatus(username = getActiveAccount()?.username) {
  setText("#auth-storage-hint", `提示：密码修改只保存在当前浏览器的${getStorageScopeLabel()}，本机预览和 GitHub Pages 线上页面不会互相同步。`);
  if (!username) {
    setText("#password-local-status", "登录后可查看当前账号在此浏览器中的密码状态。");
    return;
  }
  const status = hasCustomPassword(username)
    ? "当前账号在此浏览器已使用自定义密码。"
    : "当前账号在此浏览器仍使用初始密码。";
  setText("#password-local-status", `${status} 该设置只对${getStorageScopeLabel()}生效。`);
}

function getStorageScopeLabel() {
  return location.hostname.includes("github.io") ? " GitHub Pages 线上页面" : "本机预览页面";
}

function hasCustomPassword(username) {
  return Boolean(readPasswordHashes()[username]);
}

async function verifyPassword(username, password) {
  const hashes = readPasswordHashes();
  const expected = hashes[username] || initialPasswordHashes[username];
  return expected === await hashPassword(username, password);
}

async function savePassword(username, password) {
  const hashes = readPasswordHashes();
  hashes[username] = await hashPassword(username, password);
  localStorage.setItem(authPasswordKey, JSON.stringify(hashes));
}

function readPasswordHashes() {
  try { return JSON.parse(localStorage.getItem(authPasswordKey) || "{}"); } catch { return {}; }
}

function readNotes() {
  try { return JSON.parse(localStorage.getItem(taskNoteKey) || "{}"); } catch { return {}; }
}

async function hashPassword(username, password) {
  const source = `yipaijihui:${username}:${password}`;
  if (window.crypto?.subtle) {
    const bytes = new TextEncoder().encode(source);
    const digest = await window.crypto.subtle.digest("SHA-256", bytes);
    return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  }
  let hash = 0;
  for (let index = 0; index < source.length; index += 1) hash = ((hash << 5) - hash + source.charCodeAt(index)) | 0;
  return String(hash);
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function drawCanvases() {
  const render = () => {
    const time = performance.now() / 1000;
    drawSkeleton(document.querySelector("#hero-canvas"), time, demoData.clear.focus, "clear");
    drawSkeleton(document.querySelector("#skeleton-canvas"), time, demoData[selectedAction].focus, selectedAction);
    animationFrameId = requestAnimationFrame(render);
  };
  cancelAnimationFrame(animationFrameId);
  render();
}

function drawSkeleton(canvas, time, focusIndexes, variant) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const swing = Math.sin(time * 2.2);
  const pulse = Math.max(0, Math.sin(time * 2.2 - 0.5));
  const sway = Math.sin(time * 1.2) * 4;
  const lift = pulse * 18;
  const coco = getCoco17Pose(variant, swing, lift, sway);
  const links = [
    [0, 1], [0, 2], [1, 3], [2, 4],
    [5, 6], [5, 7], [7, 9], [6, 8], [8, 10],
    [5, 11], [6, 12], [11, 12],
    [11, 13], [13, 15], [12, 14], [14, 16],
  ];
  const focus = new Set(focusIndexes);
  const wrist = coco[10];
  const racketEnd = [wrist[0] + 36, wrist[1] - 58 - lift * 0.4];
  const shuttle = [292 - ((time * 76) % 180), 96 + Math.sin(time * 2.4) * 28];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid(ctx, canvas.width, canvas.height);
  links.forEach(([from, to]) => {
    const active = focus.has(from) && focus.has(to);
    ctx.beginPath(); ctx.moveTo(...coco[from]); ctx.lineTo(...coco[to]);
    ctx.strokeStyle = active ? "rgba(217,255,119,0.96)" : "rgba(255,255,255,0.72)";
    ctx.lineWidth = active ? 5 : 3.2; ctx.lineCap = "round"; ctx.stroke();
  });
  drawRacket(ctx, wrist, racketEnd);
  drawShuttle(ctx, shuttle);
  coco.forEach(([x, y], index) => {
    const active = focus.has(index);
    ctx.beginPath(); ctx.arc(x, y, active ? 7.2 : 4.4, 0, Math.PI * 2);
    ctx.fillStyle = active ? "#D9FF77" : "#FFFFFF"; ctx.fill();
    if (active) { ctx.beginPath(); ctx.arc(x, y, 13 + pulse * 5, 0, Math.PI * 2); ctx.strokeStyle = "rgba(217,255,119,0.36)"; ctx.lineWidth = 2; ctx.stroke(); }
  });
}

function getCoco17Pose(variant, swing, lift, sway) {
  // COCO-17 order: nose, eyes, ears, shoulders, elbows, wrists, hips, knees, ankles.
  // This keeps the website skeleton aligned with the RTMPose COCO keypoint format used by the project.
  const pose = [
    [184 + sway * 0.2, 76],
    [176 + sway * 0.2, 70],
    [192 + sway * 0.2, 70],
    [168 + sway * 0.2, 82],
    [200 + sway * 0.2, 82],
    [136 + sway, 138],
    [218 + sway * 0.35, 134],
    [114 + sway * 0.7, 196],
    [246 + swing * 10, 174 - lift],
    [108 + Math.sin(swing) * 4, 260],
    [292 + swing * 18, 122 - lift * 1.7],
    [156 + sway * 0.3, 248],
    [210 + sway * 0.2, 248],
    [138 + sway * 0.2, 320],
    [226 + sway * 0.2, 318],
    [122, 382],
    [244, 382],
  ];
  if (variant === "forehand") {
    pose[8] = [238 + swing * 9, 196 - lift * 0.5];
    pose[10] = [278 + swing * 14, 150 - lift];
    pose[9] = [100, 252];
  }
  if (variant === "backhand") {
    pose[7] = [126, 196];
    pose[8] = [206 + swing * 8, 190 - lift * 0.4];
    pose[10] = [180 + swing * 10, 158 - lift * 0.7];
  }
  return pose;
}

function drawGrid(ctx, width, height) {
  ctx.save(); ctx.strokeStyle = "rgba(255,255,255,0.055)"; ctx.lineWidth = 1;
  for (let y = 54; y < height; y += 38) { ctx.beginPath(); ctx.moveTo(42, y); ctx.lineTo(width - 42, y); ctx.stroke(); }
  for (let x = 42; x < width; x += 46) { ctx.beginPath(); ctx.moveTo(x, 54); ctx.lineTo(x, height - 28); ctx.stroke(); }
  ctx.restore();
}

function drawRacket(ctx, start, end) {
  ctx.beginPath(); ctx.moveTo(...start); ctx.lineTo(...end); ctx.strokeStyle = "rgba(217,255,119,0.82)"; ctx.lineWidth = 4; ctx.lineCap = "round"; ctx.stroke();
  ctx.beginPath(); ctx.arc(end[0], end[1], 16, 0, Math.PI * 2); ctx.strokeStyle = "rgba(255,255,255,0.72)"; ctx.lineWidth = 3; ctx.stroke();
}

function drawShuttle(ctx, [x, y]) {
  ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fillStyle = "#F8FFF8"; ctx.fill();
  ctx.beginPath(); ctx.moveTo(x - 5, y + 2); ctx.lineTo(x - 22, y + 11); ctx.lineTo(x - 19, y - 7); ctx.closePath(); ctx.fillStyle = "rgba(248,255,248,0.78)"; ctx.fill();
}

window.addEventListener("beforeunload", () => cancelAnimationFrame(animationFrameId));
