const projectStart = new Date("2026-05-01T00:00:00+08:00");

const demoData = {
  clear: {
    name: "高远球",
    main: "击球点过低",
    secondary: "转体不足",
    confidence: 92,
    advice: "提高击球点，提前完成侧身引拍，强化蹬转发力。",
    focus: [6, 8, 10],
  },
  forehand: {
    name: "正手发球",
    main: "手腕内旋不足",
    secondary: "抛球不稳",
    confidence: 88,
    advice: "保持抛球高度稳定，击球瞬间增加手腕内旋。",
    focus: [8, 10, 12],
  },
  backhand: {
    name: "反手发球",
    main: "击球点偏离",
    secondary: "手腕外翻",
    confidence: 86,
    advice: "控制拍面角度，保持击球点靠近身体前方。",
    focus: [6, 8, 10],
  },
};

const phasePlan = [
  { start: 1, end: 8, phase: "预训练与框架搭建", time: "2026.05 - 2026.06", content: "ST-GCN 代码跑通、COCO-17 图结构适配、层次分类器雏形。", output: "ST-GCN 基线、COCO17 数据链路、层次分类设计" },
  { start: 9, end: 16, phase: "击球帧检测与真实数据接入", time: "2026.07 - 2026.08", content: "击球帧检测接口、真实数据接入、初步微调。", output: "击球帧模块、首批真实视频、初步微调结果" },
  { start: 17, end: 24, phase: "模型优化", time: "2026.09 - 2026.10", content: "关节相对特征、动态邻接矩阵、数据增强、超参数搜索。", output: "优化版模型、消融实验、指标看板" },
  { start: 25, end: 34, phase: "移动端部署", time: "2026.11 - 2026.12", content: "ONNX/TFLite 转换、INT8 量化、Android 联调。", output: "端侧推理 Demo、Android 联调版本" },
  { start: 35, end: 44, phase: "系统集成与用户测试", time: "2027.01 - 2027.02", content: "端到端跑通、用户测试、错误案例分析。", output: "测试报告、反馈清单、迭代计划" },
  { start: 45, end: 52, phase: "论文撰写与开源", time: "2027.03 - 2027.05", content: "论文投稿、代码开源、结题材料整理。", output: "论文初稿、开源仓库、结题报告" },
];

const memberAccounts = [
  { username: "liyuelong", name: "李月龙" },
  { username: "zhouzhou", name: "周洲" },
  { username: "yangziyu", name: "杨子钰" },
  { username: "caomuning", name: "曹沐宁" },
  { username: "wangpenghan", name: "王鹏涵" },
  { username: "jiangyaqi", name: "姜雅琪" },
  { username: "zhuzihan", name: "朱梓涵" },
];

// Static GitHub Pages demo login only. This is not a production authentication system.
const initialPasswordHashes = {
  liyuelong: "6fd624558da459d9ec673b686048b1e09a3b136161ac1dfadf3e506c7da33341",
  zhouzhou: "df719a9eed2a309e769e471093c301d9fb2dcdce41349f225580db1c2bacfd19",
  yangziyu: "e28890fb51b128378d648c6ed3c6f98de11d2304fb1f1f99f9eee9330ddec93d",
  caomuning: "8c165e802aaa4ea0fcfee4035bd77c244ae6716eddb431af895c835514d6a138",
  wangpenghan: "792780b5866afc9acd380cf6fc6323772f43aa5ee8d3b18a351724f1032c28ca",
  jiangyaqi: "bcae9121699bb605b381e4d991f4b3f11e5b6d1b40cc0bf9cc0bf0ead3bf7d4e",
  zhuzihan: "f67ce530da1ecc33c4bb536e1bb7a6fbb84f61db5db8c804f33a31d70eb3091f",
};

const authSessionKey = "yipaijihui-member-session";
const authPasswordKey = "yipaijihui-password-hashes";
const taskNoteKey = "yipaijihui-task-notes";

const members = [
  {
    name: "李月龙",
    username: "liyuelong",
    role: "指导教师",
    direction: "项目指导 / 算法研究",
    mainWork: "提供 L40 GPU 服务器、每周组会指导、实验设计建议、论文修改与算法研究资源支持。",
    status: "正常",
    weekly: "围绕算法路线、实验设计和项目推进节奏进行指导，帮助团队聚焦可落地的研究闭环。",
    next: "继续指导最小真实闭环、阶段实验设计、论文结构与成果材料整理。",
    blocker: "需要团队持续同步真实数据、实验结果和阶段风险，便于及时调整技术路线。",
    route: "项目总体指导与科研支持",
    done: "确定项目研究方向，提供算力与组会指导，支持实验设计和论文修改。",
    todo: "跟进真实数据闭环、模型实验结果、软著论文与结题材料。",
    filters: ["algorithm", "docs", "testing"],
    tags: ["指导教师", "算法研究", "项目管理"],
    reports: [
      { label: "最近一周", title: "项目路线与阶段推进指导", items: ["指导团队围绕姿态估计、击球帧检测、ST-GCN 与层次分类形成清晰技术链路。", "根据组会进展帮助团队识别数据、算法、移动端集成中的关键风险。", "为算法实验和论文材料提供方向性建议。"] },
      { label: "持续支持", title: "算力、组会与科研资源支持", items: ["提供 L40 GPU 服务器与算法研究资源支持。", "组织每周组会，推动成员同步进展和问题。", "对实验设计、论文结构和项目成果材料进行指导。"] },
    ],
  },
  {
    name: "周洲",
    username: "zhouzhou",
    role: "项目负责人 / 算法负责人",
    direction: "算法",
    mainWork: "姿态估计、ST-GCN 训练、层次分类器、整体技术路线。",
    status: "进行中",
    weekly: "阅读 ProtoGCN，跑通真实高远球视频流程，验证 COCO17 到 ST-GCN 的基础数据链路。",
    next: "跑一个最小真实闭环：真实视频、RTMPose 关键点、击球帧和 ST-GCN 格式转换。",
    blocker: "击球帧还需要更准确的自动定位，真实标注样本仍需补充。",
    route: "路线一：算法主线与系统集成",
    done: "ProtoGCN/MTE 调研、NTU60 复现实验、COCO17 graph.py 改造、build_dataset_from_keypoints.py。",
    todo: "接入 1-3 条标注真实视频并完成最小训练闭环。",
    filters: ["algorithm"],
    tags: ["算法", "ST-GCN", "COCO17"],
    reports: [
      { label: "最近一周", title: "ProtoGCN 调研与真实视频流程验证", items: ["理解 ProtoGCN 数据流动，优先考虑迁移 MTE 模块增强动作拓扑关系。", "将 3 个羽毛球高远球视频平均抽取 64 帧跑通流程。", "复现 ST-GCN 原论文实验，熟悉 NTU60 processed skeleton 数据格式和训练流程。"] },
      { label: "较近一周", title: "路线协调与新技术选型", items: ["协调算法、数据、App 等路线成员进度。", "粗略阅读 ProtoGCN，确定可参考 ProtoGCN / PYSKL 作为新路线。", "学习 Claude Code，并尝试制作项目展示网站。"] },
      { label: "最远一周", title: "COCO17 到 ST-GCN 链路打通", items: ["修改 graph.py 支持 COCO17。", "用假 COCO17 数据和 yaml 跑通 ST-GCN 训练测试。", "编写关键点格式转换脚本，将 T×17×3 转为 ST-GCN 需要的格式。"] },
    ],
  },
  {
    name: "杨子钰",
    username: "yangziyu",
    role: "数据采集与用户测试",
    direction: "数据 / 测试 / 文档",
    mainWork: "PPT 制作、数据采集、用户测试、文档整理。",
    status: "正常",
    weekly: "与两位教练沟通动作错误细节，整理标准动作视频，完成裁剪、人脸模糊、标注和 csv 表格。",
    next: "组织第一批志愿者拍摄，继续完善标准动作与错误动作标注规则。",
    blocker: "志愿者拍摄排期与多视角数据一致性需要继续协调。",
    route: "路线三：数据采集与标注",
    done: "教练资源对接、标准视频整理、动作位置标注、志愿者招募准备。",
    todo: "开展第一批视频拍摄并沉淀标注规范。",
    filters: ["data", "testing", "docs"],
    tags: ["数据", "测试", "文档"],
    reports: [
      { label: "最近一周", title: "标准动作视频整理与采集准备", items: ["与两位教练沟通修改动作错误细节。", "拿到标准动作视频作为无错误样本参考。", "完成视频裁剪、人脸模糊、动作位置标注和 csv 表格。"] },
      { label: "较远一周", title: "教练资源对接与点位标注学习", items: ["联系一级、二级运动员教练确认拍摄流程。", "与羽社主席协商志愿者招募。", "学习 Python rtmlib 标记动作点位。"] },
    ],
  },
  {
    name: "曹沐宁",
    username: "caomuning",
    role: "前端开发 / 算法辅助开发",
    direction: "前端 / 算法",
    mainWork: "项目网站、前端页面、卷积实现、模型辅助开发、实验验证。",
    status: "需协助",
    weekly: "阅读 BMP 论文，学习卡尔曼滤波；排查移动端 TFLite / SimCC 部署与闪退问题。",
    next: "继续解决 SimCC 输出解码、维度匹配和 Android TFLite 算子兼容问题。",
    blocker: "SimCC 输出不是直接坐标，移动端解码复杂；量化模型兼容性较差。",
    route: "路线二：姿态估计与移动端模型部署",
    done: "CameraX 问题初步处理、模型 Python 测试、BMP/HiPART 调研。",
    todo: "完成稳定的移动端关键点提取 Demo。",
    filters: ["algorithm", "frontend", "mobile"],
    tags: ["前端", "姿态估计", "TFLite"],
    reports: [
      { label: "最近一周", title: "BMP 与卡尔曼滤波", items: ["理解检测、姿态、分割闭环迭代框架。", "认为置信度驱动的条件化触发机制可迁移到关键点稳定性优化。", "学习卡尔曼滤波预测与更新逻辑。"] },
      { label: "较近一周", title: "HiPART 与移动端部署排查", items: ["阅读遮挡场景 3D 姿态估计论文 HiPART。", "App 可导入视频或拍摄视频提取骨架，但效果仍不稳定。", "定位到 TFLite 转换、SimCC 解码和 Java 冲突问题。"] },
      { label: "最远一周", title: "Python 模型测试与 CameraX 接入", items: ["Python 测试模型可识别 17 个关键点。", "TFLite 导入 Android Studio，应用可安装。", "CameraX 真机黑屏问题仍需解决。"] },
    ],
  },
  {
    name: "王鹏涵",
    username: "wangpenghan",
    role: "移动端开发 / 数据库",
    direction: "移动端",
    mainWork: "移动端部署、SQLite、历史记录、摄像头与本地视频流程。",
    status: "进行中",
    weekly: "实现历史记录卡片连接视频的复盘入口，完善个人中心框架，并与规则引擎数据库合并方案对齐。",
    next: "整合 SQLite 数据库代码，连接真实视频路径与后续 AI 分析结果。",
    blocker: "AI 分析模块尚未接入，视频路径目前仍有假数据占位。",
    route: "路线五：App 原型与数据存储",
    done: "SQLite 用户表和训练记录表、RecyclerView 历史记录、Java 版 App 相机录像流程。",
    todo: "完成历史详情视频复盘与分析结果联动。",
    filters: ["mobile", "data", "testing"],
    tags: ["Android", "SQLite", "App"],
    reports: [
      { label: "最近一周", title: "历史详情视频复盘与个人中心", items: ["实现历史记录卡片连接对应视频的设计。", "个人中心加入导出训练数据、清空历史记录、累计训练次数、训练等级等模块。", "修复多处 App bug。"] },
      { label: "较近一周", title: "SQLite 与历史记录列表", items: ["完成用户表和训练记录表。", "搭建 GitHub 仓库并导入数据。", "实现 RecyclerView 训练记录列表。"] },
      { label: "最远一周", title: "Java 版 App 与相机录像", items: ["重新使用 Java 搭建 App。", "实现相机权限、录像调用和本地保存。", "搭建 Java 版本仓库。"] },
    ],
  },
  {
    name: "姜雅琪",
    username: "jiangyaqi",
    role: "规则引擎与训练反馈",
    direction: "反馈 / 数据 / 算法",
    mainWork: "规则引擎、个性化训练建议、错误类型字典、用户测试。",
    status: "正常",
    weekly: "完成 SQLite 规则引擎，设计用户表、错误记录表和每周计划表，按近 30 天错误频次生成训练计划。",
    next: "继续完善错误类型字典与 PRN / CSCL 可解释纠错思路。",
    blocker: "如何将原型学习模块轻量化并适配移动端还需要实验验证。",
    route: "路线六：个性化反馈与规则引擎",
    done: "16 种错误建议字典、每周计划生成、ProtoGCN/BMP 论文调研、xlsx 表格。",
    todo: "把规则引擎结果与 App 历史记录打通。",
    filters: ["algorithm", "data", "testing", "docs"],
    tags: ["规则引擎", "训练反馈", "ProtoGCN"],
    reports: [
      { label: "最近一周", title: "BMP、ProtoGCN 与 SQLite 规则引擎", items: ["判断 BMP 更适合多人遮挡，当前阶段不直接迁移分割模块。", "阅读 ProtoGCN，认为 PRN 可解释性适合错误检测展示。", "完成基于 SQLite 的规则引擎和周计划生成。"] },
      { label: "较近一周", title: "动作质量评估论文与分层建议", items: ["提炼 TAP 时间动作解析思想。", "提出每类错误可单独训练二分类器。", "重新调整错误类型分层建议。"] },
      { label: "最远一周", title: "竞品调研与数据库设计", items: ["调研 Apple Pose and Tracking 类应用。", "设计 users、error_records、weekly_plan 表。", "提出追踪具体身体部位的反馈想法。"] },
    ],
  },
  {
    name: "朱梓涵",
    username: "zhuzihan",
    role: "击球帧检测 / 硬件接口预研",
    direction: "击球帧 / 硬件",
    mainWork: "击球帧检测、算法模型设计、硬件接口预研、测试验证。",
    status: "进行中",
    weekly: "完成击球帧初步提取路线，加入手肘角度、肩膀旋转和球拍方向后准确度提升。",
    next: "继续加入球拍与羽毛球距离、手腕角速度等限定条件，提高击球帧定位精度。",
    blocker: "自动保存每帧数据信息仍不完整，目前部分代码只能保存最后一帧输出。",
    route: "路线四：击球帧检测与动作特征",
    done: "MediaPipe 手腕速度峰值、100 个 label 文件、YOLOv8/MediaPipe 环境。",
    todo: "完善每帧数据保存并整理结构化输出。",
    filters: ["algorithm", "data", "hardware", "testing"],
    tags: ["击球帧", "MediaPipe", "硬件预研"],
    reports: [
      { label: "最近一周", title: "击球帧初步提取与条件增强", items: ["确定视频、姿态识别、手腕坐标、速度峰值、保存击球帧路线。", "配置 numpy、OpenCV、ultralytics、MediaPipe。", "加入手肘角度、肩膀旋转、球拍方向后准确度提高。"] },
      { label: "较近一周", title: "标注补充与自动分析代码调研", items: ["重新标注击球帧并生成 100 个 label 文件。", "调研 GitHub 自动标注击球帧和关节角度代码。", "配置 YOLOv8 和 MediaPipe，但每帧数据保存仍需完善。"] },
    ],
  },
];

const outcomes = [
  ["移动端 App 原型", "实现拍摄、分析、反馈与历史记录查看。", "开发中", "王鹏涵 / 曹沐宁"],
  ["开源数据集", "整理视频、关键点、动作标签与错误标签。", "规划中", "杨子钰 / 朱梓涵"],
  ["代码开源仓库", "沉淀训练、推理、转换与演示代码。", "规划中", "周洲 / 曹沐宁"],
  ["软件著作权", "完成系统 V1.0 软件著作权登记材料。", "待完成", "周洲 / 王鹏涵"],
  ["研究论文", "总结细粒度羽毛球动作错误检测方法。", "待完成", "周洲 / 姜雅琪"],
  ["项目结题报告", "形成技术路线、实验结果与应用展示材料。", "待完成", "全体成员"],
];

let selectedAction = "clear";
let animationFrameId = 0;
let analysisTimer = 0;

document.addEventListener("DOMContentLoaded", () => {
  setupHeader();
  setupReveal();
  setupDemo();
  setupProgress();
  setupTeam();
  setupWorkspace();
  setupMemberWork();
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
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-35% 0px -58% 0px", threshold: 0.01 });
  sections.forEach((section) => observer.observe(section));
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

function setupDemo() {
  document.querySelectorAll(".action-list button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedAction = button.dataset.action || "clear";
      document.querySelectorAll(".action-list button").forEach((item) => item.classList.toggle("active", item === button));
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
  const next = () => {
    steps[index]?.classList.remove("active");
    steps[index]?.classList.add("done");
    index += 1;
    if (index >= steps.length) {
      button.disabled = false;
      button.textContent = "重新检测";
      updateResult(true);
      return;
    }
    steps[index]?.classList.add("active");
    analysisTimer = window.setTimeout(next, 560);
  };
  analysisTimer = window.setTimeout(next, 560);
}

function updateResult(flash = false) {
  const data = demoData[selectedAction];
  setText("#demo-action-name", data.name);
  setText("#result-action", data.name);
  setText("#result-main", data.main);
  setText("#result-secondary", data.secondary);
  setText("#confidence-value", `${data.confidence}%`);
  setText("#result-advice", data.advice);
  const bar = document.querySelector("#confidence-bar");
  if (bar) bar.style.width = `${data.confidence}%`;
  if (flash) document.querySelector(".result-panel")?.animate([{ transform: "translateY(0)" }, { transform: "translateY(-4px)" }, { transform: "translateY(0)" }], { duration: 380 });
}

function setupProgress() {
  const week = getCurrentWeek();
  const phase = getPhaseByWeek(week);
  const percent = Math.round((week / 52) * 100);
  setText("#current-week", `第 ${week} 周`);
  setText("#current-phase", phase.phase);
  setText("#progress-percent", `${percent}%`);
  setText("#current-focus", phase.content.split("、").slice(0, 2).join("、"));
  renderPhaseBoard(week);
  renderWeekRail(week);
  selectWeek(week);
}

function getCurrentWeek() {
  const diff = Date.now() - projectStart.getTime();
  return Math.max(1, Math.min(52, Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1));
}

function getPhaseByWeek(week) {
  return phasePlan.find((phase) => week >= phase.start && week <= phase.end) || phasePlan[phasePlan.length - 1];
}

function weekInfo(week) {
  const phase = getPhaseByWeek(week);
  return {
    week,
    phase,
    title: `${phase.phase} · W${week}`,
    copy: `第 ${week} 周重点围绕“${phase.content}”推进，在组会上同步风险、产出与下一步计划。`,
    output: phase.output,
  };
}

function renderPhaseBoard(currentWeek) {
  const board = document.querySelector("#phase-board");
  if (!board) return;
  board.replaceChildren(...phasePlan.map((phase, index) => {
    const card = document.createElement("button");
    card.type = "button";
    const active = currentWeek >= phase.start && currentWeek <= phase.end;
    const done = currentWeek > phase.end;
    card.className = `phase-card${active ? " active" : ""}${done ? " done" : ""}`;
    card.dataset.phaseStart = String(phase.start);
    card.dataset.phaseEnd = String(phase.end);
    card.setAttribute("aria-label", `查看阶段 ${index + 1}，${phase.phase}，对应第 ${phase.start} 到 ${phase.end} 周`);
    card.innerHTML = `<span>阶段 ${index + 1}</span><strong>${phase.phase}</strong><small>${phase.time}</small><em>W${phase.start}-W${phase.end}</em>`;
    card.addEventListener("click", () => selectPhase(index, currentWeek));
    return card;
  }));
}

function selectPhase(phaseIndex, currentWeek) {
  const phase = phasePlan[phaseIndex];
  if (!phase) return;
  const targetWeek = currentWeek >= phase.start && currentWeek <= phase.end ? currentWeek : phase.start;
  selectWeek(targetWeek, { scrollToWeek: true });
}

function renderWeekRail(currentWeek) {
  const rail = document.querySelector("#week-rail");
  if (!rail) return;
  rail.replaceChildren();
  for (let week = 1; week <= 52; week += 1) {
    const phase = getPhaseByWeek(week);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "week-button";
    if (week < currentWeek) button.classList.add("done");
    if (week === currentWeek) button.classList.add("current");
    button.dataset.week = String(week);
    button.innerHTML = `<strong>W${week}</strong><span>${phase.phase}</span>`;
    button.addEventListener("click", () => selectWeek(week));
    rail.appendChild(button);
  }
}

function selectWeek(week, options = {}) {
  const info = weekInfo(week);
  const currentWeek = getCurrentWeek();
  const status = week < currentWeek ? "已完成" : week === currentWeek ? "进行中" : "未开始";
  document.querySelectorAll(".week-button").forEach((button) => button.classList.toggle("active", Number(button.dataset.week) === week));
  highlightPhaseByWeek(week);
  setText("#week-kicker", `Week ${week}`);
  setText("#week-title", info.title);
  setText("#week-copy", info.copy);
  setText("#week-status", status);
  setText("#week-output", `阶段产出：${info.output}`);
  if (options.scrollToWeek) scrollWeekIntoView(week);
}

function highlightPhaseByWeek(week) {
  document.querySelectorAll(".phase-card").forEach((card) => {
    const start = Number(card.dataset.phaseStart);
    const end = Number(card.dataset.phaseEnd);
    card.classList.toggle("selected", week >= start && week <= end);
  });
}

function scrollWeekIntoView(week) {
  const drawer = document.querySelector(".week-drawer");
  if (drawer) drawer.open = true;
  window.requestAnimationFrame(() => {
    const button = document.querySelector(`.week-button[data-week="${week}"]`);
    button?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  });
}

function setupTeam() {
  setupFilteredButtons(".team-filters button", renderTeam);
  renderTeam("all");
}

function renderTeam(filter) {
  const grid = document.querySelector("#team-grid");
  if (!grid) return;
  const visible = filterMembers(filter);
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
  document.querySelector("#password-toggle")?.addEventListener("click", () => {
    const form = document.querySelector("#password-form");
    if (form) form.hidden = !form.hidden;
    setText("#password-message", "");
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
      setText("#auth-message", "账号或密码不正确。");
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
    if (!(await verifyPassword(account.username, oldPassword))) return setText("#password-message", "原密码不正确。");
    if (newPassword.length < 6) return setText("#password-message", "新密码至少 6 位。");
    if (newPassword !== confirmPassword) return setText("#password-message", "两次输入的新密码不一致。");
    await savePassword(account.username, newPassword);
    passwordForm.reset();
    setText("#password-message", "密码已修改。");
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
  auth.hidden = Boolean(account);
  panel.hidden = !account;
  if (!account) {
    document.querySelector("#member-report")?.replaceChildren();
    document.querySelector("#member-progress-tabs")?.replaceChildren();
    return;
  }
  const member = members.find((item) => item.username === account.username);
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
  renderMemberTabs(member.name);
}

function renderMemberTabs(activeName) {
  const tabs = document.querySelector("#member-progress-tabs");
  if (!tabs) return;
  tabs.replaceChildren(...members.map((member) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = member.name;
    button.className = member.name === activeName ? "active" : "";
    button.addEventListener("click", () => {
      tabs.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
      renderMemberReport(member.name);
    });
    return button;
  }));
  renderMemberReport(activeName);
}

function renderMemberReport(name) {
  const container = document.querySelector("#member-report");
  const member = members.find((item) => item.name === name);
  if (!container || !member) return;
  container.replaceChildren(...member.reports.map((report) => {
    const article = document.createElement("article");
    article.className = "member-report-card";
    article.innerHTML = `
      <div class="member-report-time"><span>${report.label}</span><strong>${member.name}</strong><em>${member.role}</em></div>
      <div class="member-report-body"><h4>${report.title}</h4><ul>${report.items.map((item) => `<li>${item}</li>`).join("")}</ul></div>
    `;
    return article;
  }));
}

function setupMemberWork() {
  setupFilteredButtons(".work-filters button", renderWork);
  renderWork("all");
}

function renderWork(filter) {
  const grid = document.querySelector("#work-grid");
  if (!grid) return;
  grid.replaceChildren(...filterMembers(filter).map((member) => {
    const card = document.createElement("article");
    card.className = "work-card reveal visible";
    card.innerHTML = `
      <h3>${member.name}</h3>
      <p class="role">${member.route}</p>
      <span class="task-status">${member.status}</span>
      <div class="work-meta">
        <div><span>本周完成</span><strong>${member.weekly}</strong></div>
        <div><span>下周计划</span><strong>${member.next}</strong></div>
        <div><span>当前阻塞</span><strong>${member.blocker}</strong></div>
      </div>
      <details><summary>展开近期记录</summary><ul>${member.reports.flatMap((report) => report.items.slice(0, 2)).map((item) => `<li>${item}</li>`).join("")}</ul></details>
    `;
    return card;
  }));
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
    article.className = "outcome-card reveal visible";
    article.innerHTML = `<span class="outcome-index">${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3><p>${copy}</p><span class="task-status">${status}</span><small class="owner">负责人：${owner}</small>`;
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

function filterMembers(filter) {
  return members.filter((member) => filter === "all" || member.filters.includes(filter));
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
  const sway = Math.sin(time * 1.2) * 5;
  const coco = [
    [184 + sway * 0.2, 76], [176 + sway * 0.2, 70], [192 + sway * 0.2, 70], [168 + sway * 0.2, 80], [200 + sway * 0.2, 80],
    [132 + sway, 136], [218 + sway * 0.35, 132], [104 + sway * 1.2, 198], [252 + swing * 18, 178 - pulse * 32],
    [96 + Math.sin(time * 2) * 9, 268], [294 + swing * 24, 118 - pulse * 40], [154 + sway * 0.4, 246], [212 + sway * 0.2, 246],
    [132 + sway * 0.3, 322], [232 + sway * 0.2, 320], [118, 386], [252, 386],
  ];
  if (variant === "forehand") { coco[10][1] += 18; coco[8][0] -= 18; }
  if (variant === "backhand") { coco[10][0] -= 56; coco[10][1] += 20; coco[8][0] -= 24; }
  const links = [[0,1],[0,2],[1,3],[2,4],[5,6],[5,7],[7,9],[6,8],[8,10],[5,11],[6,12],[11,12],[11,13],[13,15],[12,14],[14,16]];
  const focus = new Set(focusIndexes);
  const wrist = coco[10];
  const racketEnd = [wrist[0] + 30, wrist[1] - 52];
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
