# 一拍即慧 项目展示网站

这是一个面向 GitHub Pages 的静态单页网站，用于展示 AI 羽毛球动作纠错大创项目的技术路线、数据进展、系统原型、团队分工和每周进度档案。

## 项目定位

「一拍即慧」探索基于姿态估计、COCO17 骨架关键点、击球帧检测、骨架动作识别模型、规则引擎与移动端 App 的羽毛球动作错误检测和个性化训练反馈。

当前网站用于呈现真实研发过程。系统原型中的识别结果与训练建议为前端模拟数据，AI 分析模块仍在开发和接入中。

## 每周进度档案

每周进度档案为成员登录后显示的内部演示模块。未登录访问者只能看到登录入口，不能查看具体周报内容。

周报数据维护在 `script.js` 的 `weeklyArchives` 数组中。新增周报时，只需向数组追加一个新的 week 对象，并为 6 名学生和指导教师补全记录。

由于网站部署在 GitHub Pages，登录功能属于前端演示级隐藏，不等同于真实后端权限控制。

## 成员名称约定

- `username` 只用于内部登录、密码哈希、localStorage key 和数据关联。
- 公开页面统一从 `memberDirectory` 读取中文 `name`。
- 例如账号 `zhuyihan` 在页面中始终显示为「朱亦涵」。

## 当前研发状态

- App 原型已包含录像、历史查询、分辨率选择、语音播报开关和自动 AI 分析开关等功能。
- 规则引擎已完成 Python 原型，并使用 100 条模拟数据验证用户等级和分层建议逻辑。
- 数据侧已整理 270 条可用视频，其中 176 条完成教练标注，下一阶段预计新增 450 条。
- 击球帧检测规则法目前误检较多，后续将扩充 hit / nonhit 数据并验证连续动作识别方法。
- UniSTFormer 为移动端主模型候选，ST-GCN、ST-GCN++、ProtoGCN、FreqMixFormer 用于对比研究。

## 文件结构

- `index.html`：页面结构与静态文案
- `styles.css`：视觉系统、响应式布局和组件样式
- `script.js`：数据渲染、系统原型、团队筛选、工作台与周报交互
- `README.md`：项目说明和部署步骤
- `assets/`：Logo 与页面视觉资源

## 本地预览

在项目目录执行：

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

然后访问 `http://127.0.0.1:4173/`。

## GitHub Pages 部署

```bash
git add index.html styles.css script.js README.md assets
git commit -m "Build weekly progress archive"
git push origin main
```

本项目不需要构建工具，不依赖 React、Vue、Tailwind、Bootstrap 或后端服务。

## 注意事项

- 工作台登录、密码修改和任务记录只用于静态页面前端演示，不具备真实后端权限控制能力。
- 修改后的密码保存在当前域名下的浏览器 localStorage 中，重新部署代码不会主动覆盖它。
- 系统原型中的识别结果、置信度和训练建议均为模拟数据。
