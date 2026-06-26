# 一拍即慧 项目展示网站

这是一个面向 GitHub Pages 的静态单页网站，用于展示 AI 羽毛球动作纠错大创项目的技术路线、数据进展、系统原型、团队分工和每周进度档案。

## 项目定位

「一拍即慧」探索基于姿态估计、COCO17 骨架关键点、击球帧检测、骨架动作识别模型、规则引擎与移动端 App 的羽毛球动作错误检测和个性化训练反馈。

当前网站用于呈现真实研发过程。App 端关键点流、绘制、缓存和语音播报原型已完成，真实模型推理仍待接入，系统原型中的识别结果与训练建议均为模拟输出。

## 每周进度档案

每周进度档案为成员登录后显示的内部演示模块。未登录访问者只能看到登录入口，不能查看具体周报内容。

周报数据维护在 `script.js` 的 `weeklyArchives` 数组中。新增周报时，只需向数组追加一个新的 week 对象，并为 6 名学生和指导教师补全记录。

由于网站部署在 GitHub Pages，登录功能属于前端演示级隐藏，不等同于真实后端权限控制。

## 成员名称约定

- `username` 只用于内部登录、密码哈希、localStorage key 和数据关联。
- 公开页面统一从 `memberDirectory` 读取中文 `name`。
- 例如账号 `zhuyihan` 在页面中始终显示为「朱奕涵」。

## 当前研发状态

- ProtoGCN 已在 L40 GPU 服务器上跑通 debug，并启动正式 150 epoch 训练。
- 当前日志阶段最佳验证 Top1 为 80.37%，Top5 为 96.34%，最佳 checkpoint 出现在 epoch 17。
- 已确认 NTU60 X-Sub Joint 训练集 40,091 个样本、验证集 16,487 个样本、标签范围 0–59 共 60 类。
- App 原型已实现模拟关键点流、COCO17 绘制、60 帧缓存、最近 30 帧手动分析和 TTS 语音播报。
- 卡尔曼滤波参数测试筛选出 process_noise = 0.015、measure_noise = 0.12。
- 朱奕涵已调研基于飞行方向突变的羽毛球自动命中检测方法，并尝试 TrackNetV3 羽毛球项目视频预处理。
- 姜雅琪已完成统计图表脚本、用户实验问卷和 UniSTFormer 官方示例尝试。

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
