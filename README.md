# 张露允 · 静态单页作品集

入口：index.html。HTML / CSS / JavaScript，无后端，无构建步骤，无外部字体或 CDN 依赖。

## 部署到 GitHub Pages

1. 解压文件包，将里面的 index.html、style.css、script.js、favicon.svg、portfolio.pdf、assets 文件夹和 .nojekyll 放在 GitHub 仓库根目录。不要只上传 ZIP，也不要将这些文件再嵌套一层文件夹。
2. 在仓库 Settings → Pages 中，将 Source 设为 Deploy from a branch。
3. 选择 main 分支和 /(root)，点击 Save。如果使用其他分支，请选择实际上传文件的分支。
4. 等待 GitHub 完成部署，通过 Pages 页面给出的地址访问。

所有资源使用相对路径，支持 https://用户名.github.io/仓库名/ 这种项目网址。
官方说明：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 本地查看

解压后双击 index.html 即可查看。邮箱复制功能需要 HTTPS 或 localhost；直接打开本地文件时若浏览器不允许复制，页面会提示手动复制。

## 内容与文件

- index.html：个人介绍、五组作品、技能方向和联系方式。
- style.css：桌面及手机排版，米白底色、大图与少量文字。
- script.js：线框/渲染滑动对比、点击图片放大、邮箱复制、视频互斥播放。
- assets/：原素材转换的 WebP 图片，以及完整的四段 MP4 视频。
- portfolio.pdf：上一版 16 页 PDF 作品集。

视频采用 H.264 / MP4，按需加载，不会自动播放。完整保留原视频时长，网页版本最高宽度 1280 像素；原始文件未修改。WALL-E 网页版约 19.3 MB，全部单个文件低于 GitHub 网页上传的 25 MiB 限制。
上传限制说明：https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

修改文字可直接编辑 index.html；替换图片或视频时保留 assets 中对应文件名，或一并修改 HTML 引用。

## 已验证

- 桌面与 390px 手机宽度无横向溢出。
- 四段视频均可加载并播放。
- 图片弹窗打开、Esc 关闭、对比滑块工作正常。
- 仓库子路径下资源正常加载，无页面脚本错误。

本文件包尚未上传 GitHub 或发布；开启 Pages 后方可通过公网访问。
