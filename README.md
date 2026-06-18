# 一拍即慧 / 羽翼·智导 项目展示网站

这是一个面向 GitHub Pages 的静态单页网站，用于展示大学生创新训练计划项目「一拍即慧 / 羽翼·智导——AI 羽毛球动作纠错系统」的研发过程、阶段成果、团队分工和本周进展。

## 项目定位

项目探索基于姿态估计、COCO17 骨架关键点、击球帧检测、轻量骨架动作识别模型、规则引擎和移动端 App 的羽毛球动作错误检测与个性化反馈系统。

当前网站不是商业成品页面，也不假装真实 AI 系统已经完成。页面中的系统原型演示使用前端模拟数据，AI 分析模块仍在开发和接入中。

## 当前研发状态

- App 原型已包含录像、历史查询、分辨率选择、语音播报开关、自动 AI 分析开关等功能。
- 规则引擎已完成 Python 原型，并使用 100 条模拟数据验证用户等级和分层建议逻辑。
- 数据侧已整理 270 条可用视频，其中 176 条完成教练标注，下周预计新增 450 条。
- 击球帧检测规则法目前效果有限，最好约 50% 正确率，后续需要更高质量 hit / nonhit 数据集和连续动作识别实验。
- UniSTFormer 被列为移动端主模型候选；ST-GCN、ST-GCN++、ProtoGCN、FreqMixFormer 作为对比或科研路线。

## 文件结构

- `index.html`：页面结构、模块容器和静态文案
- `styles.css`：视觉样式、响应式布局和模块组件样式
- `script.js`：数据渲染、系统原型流程、团队筛选、工作台演示、进度时间轴等交互
- `README.md`：项目说明与部署说明
- `assets/icons/logo-shuttle.png`：站点图标
- `assets/icons/logo.svg`：SVG 版本 Logo
- `assets/images/hero-ai-badminton.png`：首页主视觉图

## GitHub Pages 部署

本项目不需要构建工具，不依赖 React、Vue、Tailwind、Bootstrap 或后端服务。

部署步骤：

```bash
git add index.html styles.css script.js README.md assets
git commit -m "Update project website content and progress"
git push origin main
```

推送后，在 GitHub 仓库 `Settings -> Pages` 中选择 `main` 分支和根目录发布即可。

## 注意事项

- 工作台登录、密码修改和任务记录仅用于 GitHub Pages 静态页面的前端演示，不具备真实后端权限控制能力。
- 系统原型演示中的识别结果、置信度和训练建议均为模拟数据。
- 后续如接入真实 AI 分析模块，需要同步更新页面中的“模拟数据 / AI 模块待接入”提示。
