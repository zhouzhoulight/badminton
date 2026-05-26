const techModules = {
  pose: {
    kicker: "模块 01",
    title: "轻量化姿态估计",
    copy: "从移动端摄像头视频流中实时提取 17 个 COCO 格式人体关键点，并通过卡尔曼滤波抑制连续帧抖动。",
    points: ["RTMPose 负责关键点提取", "关键点包含坐标与置信度", "平滑处理提升连续帧稳定性"],
  },
  hit: {
    kicker: "模块 02",
    title: "动作自适应击球帧检测",
    copy: "根据高远球、正手发球、反手发球的运动特征，结合腕部速度、肘部角速度和抛球轨迹定位关键帧。",
    points: ["高远球关注腕部鞭打峰值", "发球动作结合抛球最高点", "低置信度场景提示重新录制"],
  },
  stgcn: {
    kicker: "模块 03",
    title: "ST-GCN 时空特征学习",
    copy: "将人体关节构造成图结构，同时学习空间关节关系与时间动态信息，形成动作表征向量。",
    points: ["引入关节相对位置特征", "动态邻接矩阵增强动作适配", "预训练后在羽毛球数据集微调"],
  },
  classifier: {
    kicker: "模块 04",
    title: "层次化动作-错误分类",
    copy: "第一层识别动作类别，第二层进入对应错误分支，分别判断典型错误或无错误状态。",
    points: ["动作识别与错误检测解耦", "降低多任务训练的梯度干扰", "支持高远球、正手发球、反手发球扩展"],
  },
  coach: {
    kicker: "模块 05",
    title: "个性化训练建议生成",
    copy: "系统记录训练次数、历史错误频率和用户水平，动态生成本周重点练习计划。",
    points: ["首次错误推送基础分解动作", "连续错误进入专项强化训练", "进阶用户关注完整动作连贯性"],
  },
  mobile: {
    kicker: "模块 06",
    title: "移动端集成与部署",
    copy: "采用跨平台移动端框架，本地完成推理与数据存储，让系统尽量不依赖额外硬件。",
    points: ["相机预览与模型推理多线程运行", "模型量化提升端侧速度", "历史记录在本地形成训练档案"],
  },
};

const demoData = {
  clear: {
    label: "高远球",
    result: "转体不足",
    copy: "击球前躯干旋转幅度偏小，导致发力链条不完整。建议先练习侧身引拍，再做完整挥拍连贯训练。",
    confidence: 91,
    tags: ["侧身引拍", "核心转体", "击球点抬高"],
    joints: ["shoulder", "hip"],
  },
  forehand: {
    label: "正手发球",
    result: "手腕内旋不足",
    copy: "击球瞬间手腕内旋幅度偏小，球拍面控制不足。建议分解练习手腕内旋，并降低动作速度重复校准。",
    confidence: 88,
    tags: ["手腕内旋", "慢速分解", "抛球稳定"],
    joints: ["wrist", "elbow"],
  },
  backhand: {
    label: "反手发球",
    result: "击球点偏离",
    copy: "击球点偏离身体控制区，影响发力稳定性。建议固定站位，使用标记点训练击球高度与前后距离。",
    confidence: 86,
    tags: ["击球点定位", "站位固定", "短距离控制"],
    joints: ["wrist", "shoulder"],
  },
};

const teamMembers = [
  {
    name: "周洲",
    info: "创新2502｜前沿交叉学院",
    role: "算法模块负责人，负责姿态估计、ST-GCN 训练、层次分类器实现。",
    filters: ["algorithm"],
  },
  {
    name: "杨子钰",
    info: "非织2501｜纺织科学与工程学院",
    role: "PPT 制作、数据采集、用户测试、文档整理。",
    filters: ["data", "testing", "docs"],
  },
  {
    name: "曹沐宁",
    info: "计算机2402｜计算机科学与技术学院",
    role: "算法辅助开发、卷积实现、前端代码编写。",
    filters: ["algorithm", "frontend"],
  },
  {
    name: "王鹏涵",
    info: "电气2404｜电气工程学院",
    role: "算法模型设计、数据收集、测试验证。",
    filters: ["algorithm", "data", "testing"],
  },
  {
    name: "姜雅琪",
    info: "网安2502｜软件学院",
    role: "数据收集、算法模型设计、用户测试。",
    filters: ["algorithm", "data", "testing"],
  },
  {
    name: "朱梓涵",
    info: "电子z2401｜电子与信息工程学院",
    role: "算法模型设计、数据收集、硬件接口预研。",
    filters: ["algorithm", "data", "hardware"],
  },
];

const phasePlan = [
  { end: 4, phase: "需求与环境", title: "需求定稿与开发环境搭建", output: "项目章程、数据规范、模型仓库" },
  { end: 8, phase: "姿态估计", title: "RTMPose 关键点提取验证", output: "关键点可视化、端侧推理测试" },
  { end: 12, phase: "高远球数据", title: "高远球采集与标注流程跑通", output: "采集模板、标注规则、首批样本" },
  { end: 16, phase: "击球帧检测", title: "动作自适应击球帧检测", output: "腕部速度、角速度、峰值筛选模块" },
  { end: 22, phase: "ST-GCN", title: "时空图卷积基线训练", output: "动作识别基线、特征可视化" },
  { end: 28, phase: "层次分类", title: "动作识别与错误检测解耦", output: "三动作错误分支、混淆矩阵" },
  { end: 34, phase: "移动端原型", title: "App 端集成与交互原型", output: "移动端检测流程、历史记录页" },
  { end: 40, phase: "训练建议", title: "个性化训练建议与周计划", output: "规则引擎、用户档案、语音提示" },
  { end: 46, phase: "用户测试", title: "羽毛球社团用户测试", output: "测试报告、反馈清单、迭代版本" },
  { end: 52, phase: "成果整理", title: "软著、论文、开源与结题", output: "软著材料、论文初稿、开源仓库" },
];

const milestonePlan = [
  {
    start: 1,
    end: 4,
    name: "M1",
    title: "立项与环境",
    summary: "需求定稿、资料沉淀、仓库与开发环境搭建",
  },
  {
    start: 5,
    end: 12,
    name: "M2",
    title: "姿态与数据",
    summary: "RTMPose 验证、标准动作视频、首批高远球数据",
  },
  {
    start: 13,
    end: 22,
    name: "M3",
    title: "击球帧与识别",
    summary: "击球帧定位、COCO17 链路、ST-GCN 基线训练",
  },
  {
    start: 23,
    end: 40,
    name: "M4",
    title: "纠错与原型",
    summary: "层次分类、App 原型、规则引擎与周训练计划",
  },
  {
    start: 41,
    end: 52,
    name: "M5",
    title: "测试与成果",
    summary: "用户测试、迭代优化、软著论文与开源发布",
  },
];

const memberAccounts = [
  { username: "zhouzhou", name: "周洲" },
  { username: "yangziyu", name: "杨子钰" },
  { username: "caomuning", name: "曹沐宁" },
  { username: "wangpenghan", name: "王鹏涵" },
  { username: "jiangyaqi", name: "姜雅琪" },
  { username: "zhuzihan", name: "朱梓涵" },
];

const authSessionKey = "yipaijihui-member-session";
const authPasswordKey = "yipaijihui-password-hashes";

const memberProgress = [
  {
    name: "周洲",
    role: "算法模块负责人",
    reports: [
      {
        label: "最近一周",
        title: "ProtoGCN 调研与真实视频流程验证",
        items: [
          "阅读 ProtoGCN 论文，重点理解数据流动方式；结合项目后续路线，初步考虑在原 ST-GCN 基础上加入 MTE 模块，以增强动作拓扑关系建模。",
          "分析 ProtoGCN 中 PRN 与 CSCL 模块后，判断二者与原论文结构绑定较深，暂时不作为直接迁移目标，当前优先推进 MTE 方向。",
          "将 3 个羽毛球高远球视频接入现有流程；由于击球帧尚未准确定位，先采用平均抽帧方式，每条视频抽取 64 帧进行测试。",
          "基于真实羽毛球视频跑通流程，验证了项目设想路线具备可行性，真实视频可以进入当前骨骼动作识别处理链路。",
          "使用 Kaggle 上的 NTU60 processed skeleton 数据集复现实验，熟悉原版 ST-GCN 的数据格式、训练流程和后续迁移方式。",
        ],
      },
      {
        label: "较近一周",
        title: "路线协调、技术选型与开发工具准备",
        items: [
          "协调各路线成员开展工作，了解算法、数据、App 等部分的当前进展与遇到的问题，推动多条路线同步推进。",
          "粗略阅读 ProtoGCN 论文，初步理解其在骨架动作识别中的思路，并结合项目需求，基本确定后续动作识别模块可参考 ProtoGCN / PYSKL 作为新技术路线。",
          "开始使用 Claude Code 辅助项目开发，学习基础操作，并尝试用它制作项目展示网站，为后续项目展示和汇报做准备。",
        ],
      },
      {
        label: "最远一周",
        title: "COCO17 到 ST-GCN 训练链路打通",
        items: [
          "修改 graph.py，将官方 ST-GCN 从原 NTU25 骨架结构扩展为支持 COCO17 关键点。",
          "编写假的 COCO17 数据和训练 yaml，跑通 ST-GCN 训练与测试，证明 COCO17 格式可以被时空图卷积正常处理。",
          "编写 build_dataset_from_keypoints.py，将 RTMPose 输出的 T×17×3 关键点格式转换为 ST-GCN 所需的 N×3×21×17×1 格式，并跑通训练流程。",
          "阶段总结：打通 COCO17 关键点到 ST-GCN 训练之间的基础数据链路。",
        ],
        next: "下一步计划跑一个最小真实闭环：路线三提供 1 到 3 条标注好的真实视频，路线二转成 RTMPose 的 T×17×3 关键点文件，路线四先人工目测给出击球帧，后续再转为程序自动判断；周洲负责转换为 ST-GCN 所需格式并跑通模型。",
      },
    ],
  },
  {
    name: "杨子钰",
    role: "数据采集 / 用户测试 / 文档整理",
    reports: [
      {
        label: "最近一周",
        title: "标准动作视频整理与第一批采集准备",
        items: [
          "与两位教练沟通并修改动作错误细节，使错误类型描述更贴近真实训练场景。",
          "拿到一位教练提供的正手发球、反手发球、高远球三个动作标准视频，可作为后续数据集中“无错误类型”的参考样本。",
          "对标准动作视频进行了裁剪、人脸模糊、动作位置标注，并生成对应 csv 表格，为后续标注规范和模型训练数据整理打基础。",
          "同步推进志愿者招募，计划下周展开第一批羽毛球动作视频拍摄。",
        ],
        next: "下周重点推进第一批志愿者拍摄，继续完善标准动作与错误动作的标注表格。",
      },
      {
        label: "较远一周",
        title: "错误细节完善、教练资源对接与点位标注学习",
        items: [
          "修改错误细节说明，并增加图片材料，使每类错误更直观、便于后续标注和展示。",
          "联系到两位教练，其中一位为一级运动员，一位为二级运动员，并与她们确认拍摄时间和流程。",
          "教练已承诺在下周末发送正手发球、反手发球、高远球三个视角的专业视频，用于项目标准动作参考。",
          "与羽毛球社主席协商后期志愿者招募事宜，为自采数据集建设做准备。",
          "开始学习使用 Python 的 rtmlib 库标记动作点位，为后续关键点数据处理和标注辅助做技术准备。",
        ],
      },
    ],
  },
  {
    name: "曹沐宁",
    role: "算法辅助开发 / 前端代码编写",
    reports: [
      {
        label: "最近一周",
        title: "BMP 论文调研与卡尔曼滤波学习",
        items: [
          "阅读一篇提出 BMP 方法的论文，理解其将检测、姿态、分割掩码三个任务构建为闭环迭代框架的思路，使多个模型能够相互条件化、相互修正。",
          "该方法主要面向多人重叠与严重遮挡场景，和当前羽毛球单人动作分析场景并不完全匹配，但其中置信度驱动的条件化触发机制具有迁移价值，可作为后续优化关键点检测稳定性的技术参考。",
          "学习卡尔曼滤波的核心运行逻辑，明确其预测与更新两个迭代步骤：先依靠历史运动状态预判当前位置，再结合实时检测结果修正偏差。",
          "梳理过程噪声 Q 与测量噪声 R 的调节规律，后续可根据不同关节运动幅度灵活适配平滑效果，用于抑制关键点坐标抖动并提升轨迹连贯性。",
        ],
      },
      {
        label: "较近一周",
        title: "HiPART 调研与移动端模型部署排查",
        items: [
          "阅读一篇关于遮挡场景下 3D 人体姿态估计的 CVPR 论文 HiPART，理解其两阶段生成式层级稠密化方法：从 17 个关节点拓展到 48 个，再拓展到 96 个。",
          "HiPART 将稀疏 2D 姿态补全为层级稠密 2D 姿态，再进行 3D lifting；由于论文代码尚未公布，当前没有复现。",
          "使用路线 5 的代码解决了上周 App 无法打开摄像头的问题，并尝试将模型部署到移动端，使 App 可以导入相册视频或拍摄视频提取关键点骨架。",
          "当前移动端关键点效果较差，模型不贴合人体；重新下载模型后已在 Python 中跑通，但部署到移动端时出现 App 闪退。",
          "初步排查问题集中在模型转换为 TFLite 格式、SimCC 移动端部署以及与当前 Java 代码冲突，问题尚未完全解决。",
        ],
        next: "SimCC 部署的主要风险包括：输出不是直接坐标而是概率图，需要额外编写 argmax 解码；输入输出维度严格，稍有不匹配容易触发 RESHAPE 错误并导致闪退；INT8/INT16 量化模型在 Android TFLite 上兼容性较差，可能出现算子不支持。",
      },
      {
        label: "最远一周",
        title: "Python 模型测试与 Android CameraX 初步接入",
        items: [
          "在 Python 环境中测试姿态估计模型，结果图中的 17 个关键点均可识别。",
          "将模型的 TFLite 格式导入 Android Studio，并接入 CameraX，应用可以正常安装到手机。",
          "当前问题是应用安装后相机无法打开，测试应用原计划启动后自动打开相机拍摄，但真机运行结果为黑屏。",
          "初步判断为 CameraX 兼容问题，需要进一步排查相机权限、生命周期绑定和设备适配。",
        ],
        next: "下周计划优先解决 CameraX 黑屏与兼容问题，实现应用在真机上正常打开相机并运行。",
      },
    ],
  },
  {
    name: "王鹏涵",
    role: "App 开发 / 数据库 / 测试验证",
    reports: [
      {
        label: "最近一周",
        title: "历史详情视频复盘与个人中心框架完善",
        items: [
          "实现历史详情界面中每一次训练记录小卡片与对应视频的连接设计，使用户录完视频后可以进入详情页复盘观看。",
          "考虑到后续还需要接入 AI 分析模块，当前先在代码中填入假数据进行界面和流程测试，视频路径暂未完全接入，存在无法找到对应视频的占位状态。",
          "设计个人中心界面的整体框架，加入导出训练数据、清空历史记录、累计训练次数、训练等级、用户头像和个人资料等模块。",
          "与姜雅琪沟通 SQLite 数据库合并方案，为后续 App 历史记录、用户等级和每周计划数据打通做准备。",
          "修复 App 开发过程中出现的多处代码 bug，提升当前界面的稳定性。",
        ],
        next: "下周计划整合 SQLite 数据库相关代码，并继续连接真实视频路径与后续 AI 分析结果。",
      },
      {
        label: "较近一周",
        title: "SQLite 数据库、仓库搭建与历史记录列表",
        items: [
          "完成 SQLite 数据库基础结构，包括用户表 users(id, level, total_sessions) 和训练记录表 records(id, timestamp, action, error, video_path, is_auto)。",
          "完成 GitHub 仓库搭建，并将当前项目数据同步导入，方便后续成员协作开发。",
          "学习 Apple 端软件搭建方法，并准备同步 Android Studio 端已有内容。",
          "实现历史记录界面，使用 RecyclerView 显示训练记录列表，包含缩略图、时间、动作类型和错误类型等信息。",
        ],
      },
      {
        label: "最远一周",
        title: "Java 版 App 搭建与相机录像流程跑通",
        items: [
          "重新使用 Java 语言搭建 App 基础工程，完善主页导航栏结构。",
          "实现调用相机功能，并完成存储权限询问与访问流程。",
          "实现录像调用功能，支持完成录像后按时间顺序保存到本地。",
          "在 Gitee 上搭建 Java 版本仓库，为后续 App 开发和代码管理提供基础。",
        ],
      },
    ],
  },
  {
    name: "姜雅琪",
    role: "规则引擎 / 个性化训练建议",
    reports: [
      {
        label: "最近一周",
        title: "BMP、ProtoGCN 调研与 SQLite 规则引擎实现",
        items: [
          "阅读 BMP 论文，理解其将检测、姿态估计、多人体分割三个任务整合为闭环迭代框架的思想，使模型之间能够互相提供条件并互相修正。",
          "结合本项目判断：BMP 更适合多人遮挡场景，当前羽毛球单人动作分析阶段不需要像素级人体掩码，也暂时不需要用关键点提示 SAM 分割。",
          "梳理 BMP 中可迁移的部分：COCO 预训练模型与现有关键点格式更匹配；Sapiens 等人体基础模型过大，不适合移动端；若后续扩展双打场景，可考虑 RTMDet 等轻量检测器。",
          "阅读 ProtoGCN 论文，认为其放大细微骨架差异的思想适合区分正确动作与错误动作，例如正确高远球和手腕内旋不足等高度相似动作版本。",
          "完成基于 SQLite 的规则引擎：设计 users、error_records、weekly_plan 表，建立包含 16 种错误及练习建议的错误类型字典，并用 Python 根据近 30 天错误频次生成本周重点计划。",
          "按照杨子钰提供的错误动作细节最终稿修改分层建议，完成 xlsx 表格，并实现输入历史错误列表后输出本周训练计划。",
        ],
        next: "后续建议以现有轻量骨架网络为基础，优先尝试引入 ProtoGCN 的 PRN 模块，并将 CSCL 对比目标改为正确/错误或具体错误类型，同时参考 FineGYM 预训练思路降低自采数据压力。",
      },
      {
        label: "较近一周",
        title: "动作质量评估论文阅读与错误检测思路整理",
        items: [
          "阅读一篇面向跳水、滑雪等项目的动作质量评估论文，理解其最终输出动作分数，本质上更接近回归问题。",
          "结合项目判断：本项目主要判断某个羽毛球动作是否正确以及错在哪里，不需要直接迁移整套评分回归框架，但其中的细粒度动作解析思想有参考价值。",
          "提炼 TAP 时间动作解析思想：可将羽毛球击球拆为准备、引拍、挥拍、击球、随挥、回位等阶段，让错误检测能定位到更具体的动作阶段。",
          "提炼解耦思想：可为每个错误类型单独训练二分类器，再汇总多个错误判断结果，以适配一次动作可能同时存在多个错误的情况。",
          "提炼注意力与软标签思路：可在 ST-GCN 中加入关节级注意力，让模型学习特定错误更关注哪些关节；击球帧检测可用高斯软标签表示帧概率，而不只做硬判定。",
          "路线六第二周重新调整了错误类型的分层建议，使训练反馈更贴合不同水平用户。",
        ],
      },
      {
        label: "最远一周",
        title: "竞品调研、数据库结构设计与追踪部位设想",
        items: [
          "发现 Apple 的 Pose and Tracking 类应用，与项目中的姿态识别和动作追踪目标存在一定相似之处，可作为交互和功能参考。",
          "完成 SQLite 数据库结构设计，包含 users、error_records、weekly_plan 三张表，并定义基础字段与索引。",
          "阅读 Human-Centric Fine-Grained Action Quality Assessment，认为其对细粒度动作质量分析有一定帮助。",
          "由论文和竞品调研产生新的功能想法：在训练反馈中加入具体追踪部位，使用户知道本次错误主要关联到手腕、肘部、肩部、躯干等身体区域。",
        ],
      },
    ],
  },
  {
    name: "朱梓涵",
    role: "击球帧检测 / 硬件接口预研",
    reports: [
      {
        label: "最近一周",
        title: "羽毛球击球帧初步提取与条件增强",
        items: [
          "本周主要进行了羽毛球击球帧的初步提取，确定基础路线：视频输入、MediaPipe 人体姿态识别、提取手腕坐标、计算手腕速度、寻找速度峰值、保存击球帧。",
          "安装并配置 numpy、OpenCV、ultralytics、MediaPipe 等依赖，环境配置成功后能够从视频中提取击球帧。",
          "初始方案仅依赖手腕速度峰值，存在准确度不足的问题。",
          "后续在代码中加入手肘角度、肩膀旋转、球拍方向等检测条件后，击球帧提取准确度有明显提高，但仍不够精确。",
          "下一步计划继续加入球拍与羽毛球距离、手腕角速度等限定条件，以提取更精确的击球帧。",
        ],
      },
      {
        label: "较近一周",
        title: "击球帧标注补充与自动分析代码调研",
        items: [
          "根据上次会议提出的标注不足问题，重新补充并调整各个击球帧标注，生成了 100 个完整 label 文件。",
          "在 GitHub 上找到可参考代码，能够输入视频后自动标注击球帧，并输出左肘、右肘、身体倾斜角度、膝盖角度等信息。",
          "该参考代码还能根据设置的标准判断动作是否标准，并给出 AI 动作修改建议，对后续错误检测与训练反馈有参考价值。",
          "配置了 YOLOv8 和 MediaPipe 环境，大部分功能可以实现。",
          "当前问题是无法保存每一帧的数据信息，最终只能保存最后一帧输出内容，后续需要继续完善数据保存逻辑。",
        ],
        next: "接下来重点完善每帧数据保存，并将击球帧、关节角度和动作建议结果整理成可供后续模型训练或规则判断使用的结构化数据。",
      },
    ],
  },
];

const projectStart = new Date("2026-05-01T00:00:00+08:00");
let selectedAction = "clear";
let selectedWeek = 1;
let animationFrame = 0;

function getCurrentWeek() {
  const now = new Date();
  const diff = now.getTime() - projectStart.getTime();
  const week = Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1;
  return Math.max(1, Math.min(52, week));
}

function weekInfo(week) {
  const phase = phasePlan.find((item) => week <= item.end) || phasePlan[phasePlan.length - 1];
  const phaseStart = phasePlan[phasePlan.indexOf(phase) - 1]?.end ?? 0;
  return {
    week,
    phase: phase.phase,
    title: phase.title,
    copy: `第 ${week} 周重点围绕“${phase.title}”推进，完成阶段材料沉淀，并在组会上同步风险与下一步计划。`,
    output: phase.output,
    phaseProgress: week - phaseStart,
  };
}

function setupNavigation() {
  const header = document.querySelector(".site-header");
  const navLinks = [...document.querySelectorAll(".nav-links a")];
  const topButton = document.querySelector("#to-top");

  const updateHeader = () => {
    const elevated = window.scrollY > 24;
    header?.setAttribute("data-elevated", String(elevated));
    topButton?.classList.toggle("visible", window.scrollY > 700);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
  );

  ["home", "background", "technology", "progress", "team"].forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });

  topButton?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function setupTechRoute() {
  const nodes = [...document.querySelectorAll(".route-node")];
  const kicker = document.querySelector("#tech-kicker");
  const title = document.querySelector("#tech-title");
  const copy = document.querySelector("#tech-copy");
  const points = document.querySelector("#tech-points");

  const render = (key) => {
    const data = techModules[key];
    if (!data || !kicker || !title || !copy || !points) return;
    kicker.textContent = data.kicker;
    title.textContent = data.title;
    copy.textContent = data.copy;
    points.replaceChildren(...data.points.map((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      return item;
    }));
    nodes.forEach((node) => node.classList.toggle("active", node.dataset.tech === key));
  };

  nodes.forEach((node) => node.addEventListener("click", () => render(node.dataset.tech)));
  render("pose");
}

function setupDemo() {
  const actionButtons = [...document.querySelectorAll(".segmented button")];
  const runButton = document.querySelector("#run-analysis");

  actionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedAction = button.dataset.action;
      actionButtons.forEach((item) => item.classList.toggle("active", item === button));
      setDemoIdle();
    });
  });

  runButton?.addEventListener("click", runAnalysis);
  setDemoIdle();
  drawSkeleton();
}

function setDemoIdle() {
  const data = demoData[selectedAction];
  document.querySelector("#demo-mode").textContent = data.label;
  document.querySelector("#result-label").textContent = "待检测";
  document.querySelector("#result-title").textContent = `${data.label}动作分析`;
  document.querySelector("#result-copy").textContent = "点击开始检测后，系统会模拟输出错误类型、置信度与个性化训练建议。";
  document.querySelector("#confidence-value").textContent = "--";
  document.querySelector("#confidence-bar").style.width = "0";
  document.querySelector("#coach-copy").textContent = "系统会依据错误出现次数与用户水平，生成分解练习、专项强化和完整动作连贯性训练建议。";
  renderTags(["姿态估计", "击球帧", "ST-GCN"]);
  updateSteps(0);
}

function runAnalysis() {
  const runButton = document.querySelector("#run-analysis");
  runButton.disabled = true;
  runButton.textContent = "检测中...";

  let step = 0;
  updateSteps(step);
  const timer = window.setInterval(() => {
    step += 1;
    updateSteps(step);
    if (step >= 3) {
      window.clearInterval(timer);
      showResult();
      runButton.disabled = false;
      runButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7L8 5Z" /></svg>重新检测';
    }
  }, 520);
}

function updateSteps(activeStep) {
  document.querySelectorAll(".analysis-steps li").forEach((item) => {
    item.classList.toggle("active", Number(item.dataset.step) <= activeStep);
  });
}

function showResult() {
  const data = demoData[selectedAction];
  document.querySelector("#result-label").textContent = "检测结果";
  document.querySelector("#result-title").textContent = data.result;
  document.querySelector("#result-copy").textContent = data.copy;
  document.querySelector("#confidence-value").textContent = `${data.confidence}%`;
  document.querySelector("#confidence-bar").style.width = `${data.confidence}%`;
  document.querySelector("#coach-copy").textContent = data.copy;
  renderTags(data.tags);
}

function renderTags(tags) {
  const container = document.querySelector("#coach-tags");
  if (!container) return;
  container.replaceChildren(...tags.map((tag) => {
    const item = document.createElement("span");
    item.textContent = tag;
    return item;
  }));
}

function drawSkeleton() {
  const canvas = document.querySelector("#skeleton-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const active = demoData[selectedAction].joints;
  const t = Date.now() / 1000;
  const swing = Math.sin(t * 2.2);
  const hitPulse = Math.max(0, Math.sin(t * 2.2 - 0.7));
  const sway = Math.sin(t * 1.1) * 5;
  const coco = [
    [184 + sway * 0.2, 78],
    [176 + sway * 0.2, 72],
    [192 + sway * 0.2, 72],
    [169 + sway * 0.2, 80],
    [199 + sway * 0.2, 80],
    [132 + sway, 136],
    [218 + sway * 0.4, 132],
    [105 + sway * 1.2, 198],
    [254 + swing * 20, 178 - hitPulse * 34],
    [96 + Math.sin(t * 2) * 10, 268],
    [295 + swing * 26, 116 - hitPulse * 42],
    [154 + sway * 0.4, 246],
    [212 + sway * 0.2, 246],
    [132 + sway * 0.3, 322],
    [232 + sway * 0.2, 320],
    [118, 386],
    [252, 386],
  ];
  const cocoLinks = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 4],
    [5, 6],
    [5, 7],
    [7, 9],
    [6, 8],
    [8, 10],
    [5, 11],
    [6, 12],
    [11, 12],
    [11, 13],
    [13, 15],
    [12, 14],
    [14, 16],
  ];
  const jointNames = [
    "nose",
    "left_eye",
    "right_eye",
    "left_ear",
    "right_ear",
    "left_shoulder",
    "right_shoulder",
    "left_elbow",
    "right_elbow",
    "left_wrist",
    "right_wrist",
    "left_hip",
    "right_hip",
    "left_knee",
    "right_knee",
    "left_ankle",
    "right_ankle",
  ];
  const activeIndexes = new Set();
  active.forEach((joint) => {
    jointNames.forEach((name, index) => {
      if (name.includes(joint)) activeIndexes.add(index);
    });
  });
  [6, 8, 10].forEach((index) => activeIndexes.add(index));
  const racketStart = coco[10];
  const racketEnd = [racketStart[0] + 28, racketStart[1] - 50];
  const shuttle = [
    282 - ((t * 72) % 170),
    88 + Math.sin(t * 2.2) * 28,
  ];

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.055)";
  for (let y = 56; y < canvas.height; y += 38) {
    ctx.fillRect(42, y, canvas.width - 84, 1);
  }

  cocoLinks.forEach(([from, to]) => {
    const highlighted = activeIndexes.has(from) && activeIndexes.has(to);
    ctx.beginPath();
    ctx.moveTo(...coco[from]);
    ctx.lineTo(...coco[to]);
    ctx.strokeStyle = highlighted ? "rgba(217,255,115,0.95)" : "rgba(255,255,255,0.74)";
    ctx.lineWidth = highlighted ? 5 : 3.2;
    ctx.lineCap = "round";
    ctx.stroke();
  });

  ctx.beginPath();
  ctx.moveTo(...racketStart);
  ctx.lineTo(...racketEnd);
  ctx.strokeStyle = "rgba(217,255,115,0.82)";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(racketEnd[0], racketEnd[1], 16, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(255,255,255,0.72)";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(shuttle[0], shuttle[1], 5, 0, Math.PI * 2);
  ctx.fillStyle = "#f8fff8";
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(shuttle[0] - 5, shuttle[1] + 2);
  ctx.lineTo(shuttle[0] - 20, shuttle[1] + 10);
  ctx.lineTo(shuttle[0] - 18, shuttle[1] - 6);
  ctx.closePath();
  ctx.fillStyle = "rgba(248,255,248,0.78)";
  ctx.fill();

  coco.forEach((point, index) => {
    const isActive = activeIndexes.has(index);
    ctx.beginPath();
    ctx.arc(point[0], point[1], isActive ? 7.5 : 4.5, 0, Math.PI * 2);
    ctx.fillStyle = isActive ? "#d9ff73" : "#ffffff";
    ctx.fill();
    if (isActive) {
      ctx.beginPath();
      ctx.arc(point[0], point[1], 13 + hitPulse * 6, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(217,255,115,0.42)";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  });

  animationFrame = requestAnimationFrame(drawSkeleton);
}

function setupProgress() {
  const currentWeek = getCurrentWeek();
  selectedWeek = currentWeek;
  const rail = document.querySelector("#week-rail");
  if (!rail) return;

  for (let week = 1; week <= 52; week += 1) {
    const info = weekInfo(week);
    const button = document.createElement("button");
    button.className = "week-button";
    button.dataset.week = String(week);
    button.innerHTML = `<strong>W${week}</strong><span>${info.phase}</span>`;
    if (week < currentWeek) button.classList.add("done");
    if (week === currentWeek) button.classList.add("current");
    button.addEventListener("click", () => selectWeek(week));
    rail.appendChild(button);
  }

  const percent = Math.round((currentWeek / 52) * 100);
  document.querySelector("#current-week").textContent = `第 ${currentWeek} 周`;
  document.querySelector("#current-phase").textContent = weekInfo(currentWeek).phase;
  document.querySelector("#progress-percent").textContent = `${percent}%`;

  renderMilestones(currentWeek);
  selectWeek(currentWeek);
  setupMemberProgress();
}

function selectWeek(week) {
  selectedWeek = week;
  const info = weekInfo(week);
  const currentWeek = getCurrentWeek();
  const status = week < currentWeek ? "已完成" : week === currentWeek ? "进行中" : "待推进";

  document.querySelectorAll(".week-button").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.week) === week);
  });
  document.querySelector("#week-kicker").textContent = `Week ${week}`;
  document.querySelector("#week-title").textContent = info.title;
  document.querySelector("#week-copy").textContent = info.copy;
  document.querySelector("#week-status").textContent = status;
  document.querySelector("#week-output").textContent = `阶段产出：${info.output}`;
  updateMilestoneState(week);

  const activeButton = document.querySelector(`.week-button[data-week="${week}"]`);
  activeButton?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
}

function renderMilestones(currentWeek) {
  const board = document.querySelector("#milestone-board");
  if (!board) return;
  board.replaceChildren(...milestonePlan.map((milestone) => {
    const status = currentWeek > milestone.end ? "已完成" : currentWeek >= milestone.start ? "进行中" : "待推进";
    const button = document.createElement("button");
    button.type = "button";
    button.className = "milestone-card";
    button.dataset.start = String(milestone.start);
    button.dataset.end = String(milestone.end);
    button.innerHTML = `
      <span>${milestone.name}</span>
      <strong>${milestone.title}</strong>
      <em>W${milestone.start}-W${milestone.end} · ${status}</em>
      <small>${milestone.summary}</small>
    `;
    button.addEventListener("click", () => {
      const targetWeek = currentWeek >= milestone.start && currentWeek <= milestone.end ? currentWeek : milestone.start;
      selectWeek(targetWeek);
    });
    return button;
  }));
  updateMilestoneState(currentWeek);
}

function updateMilestoneState(week) {
  document.querySelectorAll(".milestone-card").forEach((card) => {
    const start = Number(card.dataset.start);
    const end = Number(card.dataset.end);
    card.classList.toggle("active", week >= start && week <= end);
    card.classList.toggle("done", week > end);
  });
}

function setupMemberProgress() {
  setupMemberAuth();
  renderMemberAuthState(getActiveAccount());
}

function setupMemberAuth() {
  const loginForm = document.querySelector("#login-form");
  const passwordForm = document.querySelector("#password-form");
  const passwordToggle = document.querySelector("#password-toggle");
  const logoutButton = document.querySelector("#logout-button");

  loginForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(loginForm);
    const account = findAccount(String(form.get("username") || ""));
    const password = String(form.get("password") || "");
    if (!account || !(await verifyPassword(account.username, password))) {
      setAuthMessage("#auth-message", "账号或密码不正确。");
      return;
    }
    sessionStorage.setItem(authSessionKey, account.username);
    loginForm.reset();
    setAuthMessage("#auth-message", "");
    renderMemberAuthState(account);
  });

  passwordToggle?.addEventListener("click", () => {
    const form = document.querySelector("#password-form");
    if (!form) return;
    form.hidden = !form.hidden;
    setAuthMessage("#password-message", "");
  });

  logoutButton?.addEventListener("click", () => {
    sessionStorage.removeItem(authSessionKey);
    renderMemberAuthState(null);
  });

  passwordForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const account = getActiveAccount();
    if (!account) return;
    const form = new FormData(passwordForm);
    const oldPassword = String(form.get("oldPassword") || "");
    const newPassword = String(form.get("newPassword") || "");
    const confirmPassword = String(form.get("confirmPassword") || "");
    if (!(await verifyPassword(account.username, oldPassword))) {
      setAuthMessage("#password-message", "原密码不正确。");
      return;
    }
    if (newPassword.length < 6) {
      setAuthMessage("#password-message", "新密码至少 6 位。");
      return;
    }
    if (newPassword !== confirmPassword) {
      setAuthMessage("#password-message", "两次输入的新密码不一致。");
      return;
    }
    await savePassword(account.username, newPassword);
    passwordForm.reset();
    setAuthMessage("#password-message", "密码已修改。");
  });
}

function renderMemberAuthState(account) {
  const auth = document.querySelector("#member-auth");
  const privatePanel = document.querySelector("#member-private");
  const sessionUser = document.querySelector("#member-session-user");
  const passwordForm = document.querySelector("#password-form");
  const passwordUsername = document.querySelector("#password-username");
  if (!auth || !privatePanel) return;

  auth.hidden = Boolean(account);
  privatePanel.hidden = !account;
  if (!account) {
    passwordForm && (passwordForm.hidden = true);
    if (passwordUsername) passwordUsername.value = "";
    document.querySelector("#member-report")?.replaceChildren();
    document.querySelector("#member-progress-tabs")?.replaceChildren();
    return;
  }

  if (sessionUser) sessionUser.textContent = `${account.name} 已登录`;
  if (passwordUsername) passwordUsername.value = account.username;
  renderMemberTabs();
}

function renderMemberTabs() {
  const tabs = document.querySelector("#member-progress-tabs");
  if (!tabs) return;
  tabs.replaceChildren(...memberProgress.map((member, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === 0 ? "active" : "";
    button.textContent = member.name;
    button.addEventListener("click", () => {
      tabs.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
      renderMemberProgress(member.name);
    });
    return button;
  }));
  renderMemberProgress(memberProgress[0]?.name);
}

function findAccount(value) {
  const normalized = value.trim().toLowerCase();
  return memberAccounts.find((account) => account.username === normalized || account.name === value.trim());
}

function getActiveAccount() {
  const username = sessionStorage.getItem(authSessionKey);
  return memberAccounts.find((account) => account.username === username) || null;
}

async function verifyPassword(username, password) {
  const hashes = readPasswordHashes();
  const expected = hashes[username] || await hashPassword(username, "123456");
  return expected === await hashPassword(username, password);
}

async function savePassword(username, password) {
  const hashes = readPasswordHashes();
  hashes[username] = await hashPassword(username, password);
  localStorage.setItem(authPasswordKey, JSON.stringify(hashes));
}

function readPasswordHashes() {
  try {
    return JSON.parse(localStorage.getItem(authPasswordKey) || "{}");
  } catch {
    return {};
  }
}

async function hashPassword(username, password) {
  const source = `yipaijihui:${username}:${password}`;
  if (window.crypto?.subtle) {
    const bytes = new TextEncoder().encode(source);
    const digest = await window.crypto.subtle.digest("SHA-256", bytes);
    return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  }
  let hash = 0;
  for (let index = 0; index < source.length; index += 1) {
    hash = ((hash << 5) - hash + source.charCodeAt(index)) | 0;
  }
  return String(hash);
}

function setAuthMessage(selector, message) {
  const target = document.querySelector(selector);
  if (target) target.textContent = message;
}

function renderMemberProgress(memberName) {
  const container = document.querySelector("#member-report");
  const member = memberProgress.find((item) => item.name === memberName);
  if (!container || !member) return;
  container.replaceChildren(...member.reports.map((report) => {
    const article = document.createElement("article");
    article.className = "member-report-card";
    article.innerHTML = `
      <div class="member-report-time">
        <span>${report.label}</span>
        <strong>${member.name}</strong>
        <em>${member.role}</em>
      </div>
      <div class="member-report-body">
        <h4>${report.title}</h4>
        <ul>${report.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        ${report.next ? `<div class="next-plan"><span>下一步</span><p>${report.next}</p></div>` : ""}
      </div>
    `;
    return article;
  }));
}

function setupTeam() {
  const buttons = [...document.querySelectorAll(".team-filters button")];
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.toggle("active", item === button));
      renderTeam(button.dataset.filter);
    });
  });
  renderTeam("all");
}

function renderTeam(filter) {
  const grid = document.querySelector("#team-grid");
  if (!grid) return;
  const visible = teamMembers.filter((member) => filter === "all" || member.filters.includes(filter));
  grid.replaceChildren(...visible.map((member) => {
    const card = document.createElement("article");
    card.className = "team-card";
    card.innerHTML = `
      <header>
        <div>
          <strong>${member.name}</strong>
          <p>${member.info}</p>
        </div>
        <span class="member-badge">${member.name.slice(0, 1)}</span>
      </header>
      <p>${member.role}</p>
      <div class="role-tags">${member.filters.map((tag) => `<span>${roleName(tag)}</span>`).join("")}</div>
    `;
    return card;
  }));
}

function roleName(tag) {
  return {
    algorithm: "算法",
    frontend: "开发",
    data: "数据",
    testing: "测试",
    docs: "文档",
    hardware: "硬件",
  }[tag] || tag;
}

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupTechRoute();
  setupDemo();
  setupProgress();
  setupTeam();
});

window.addEventListener("beforeunload", () => {
  cancelAnimationFrame(animationFrame);
});
