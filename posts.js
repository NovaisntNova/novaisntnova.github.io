/* ===== Nova's Blog 文章数据 =====
   以后添加文章:推荐使用同目录下的「文章编辑器.html」,填表后自动生成此文件内容。
   也可以手动添加:复制一篇文章的 { ... } 块(含逗号),改掉标题和内容即可。
   注意:数组元素之间必须用英文逗号分隔,最后一项后面不要逗号。 */
var POSTS = [
  {
    id: "welcome-to-cybersecurity",
    title: "迎接网安挑战",
    date: "2026-09-12",
    category: "基础知识",
    tags: ["网络安全", "入门"],
    body: [
      { t: "p", x: "I'm here, ready for the Cybersecurity world." }
    ]
  },
  {
    id: "writeup-1",
    title: "Bugku 计算机",
    date: "2026-09-13",
    category: "基础知识",
    tags: ["writeup"],
    body: [
      { t: "p", x: "题目信息" },
      { t: "p", x: "题目名称:计算器" },
      { t: "p", x: "类型:Web" },
      { t: "p", x: "分值:10 分" },
      { t: "p", x: "作者:harry" },
      { t: "p", x: "描述:计算正确即可得到 flag" },
      { t: "p", x: "解题思路" },
      { t: "p", x: "-点进去看到是一道计算题,计算得出结果输入后发现只能输入一位数字,百思不解询问豆包,发现真正的答案藏在前端代码里面,寻找就是脚本文件即可,搜索得到正确flag" }
    ]
  },
  {
    id: "writeup-2",
    title: "Bugku 滑稽",
    date: "2026-09-14",
    category: "基础知识",
    tags: ["writeup"],
    body: [
      { t: "p", x: "题目信息" },
      { t: "p", x: "题目名称:滑稽" },
      { t: "p", x: "类型:Web" },
      { t: "p", x: "分值:10分" },
      { t: "p", x: "作者:harry" },
      { t: "p", x: "描述:flag{}" },
      { t: "p", x: "解题思路" },
      { t: "p", x: "-点进去看到一大堆滑稽表情包迎来，且涌现速度加快，想到第一次做计算机任务时学习到的方法，按键ctrol+U看到网源代码，再按ctrol+F进行搜索flag得出答案" }
    ]
  },
  {
     id: "writeup-3",
    title: "Bugku alert",
    date: "2026-09-14",
    category: "基础知识",
    tags: ["writeup"],
    body: [
      { t: "p", x: "题目信息" },
      { t: "p", x: "题目名称:alert" },
      { t: "p", x: "类型:Web" },
      { t: "p", x: "分值:10分" },
      { t: "p", x: "作者:harry" },
      { t: "p", x: "描述:flag{}" },
      { t: "p", x: "解题思路" },
      { t: "p", x: "-点进去flag就在这里的不断弹窗，依旧按键ctrol+U看到网源代码，再按ctrol+F进行搜索flag发现并没有真正的flag，而是藏到了HTML注释里面，复制去到HTML实体转换器内解码得出正确flag" }
    ]
  },
   {
     id: "writeup-4",
    title: "Bugku 你必须让它停下",
    date: "2026-09-15",
    category: "基础知识",
    tags: ["writeup"],
    body: [
      { t: "p", x: "题目信息" },
      { t: "p", x: "题目名称:你必须让他停下" },
      { t: "p", x: "类型:Web" },
      { t: "p", x: "分值:10分" },
      { t: "p", x: "作者:harry" },
      { t: "p", x: "描述:你必须让他停下" },
      { t: "p", x: "解题思路" },
      { t: "p", x: "-点进去发现界面刷新，看见提示文字要求看到熊猫图片时才能得到flag，发现只有flag is here这句废话，依旧按键ctrol+U不断尝试发现只有在10jpg时能够得出正确flag，寻求方法发现使用脚本powershell运行代码" },
      { t: "code", x: "$url = \"http://160.202.254.160:18424/\"\nwhile ($true) {\n    $html = curl.exe -s $url\n    # 只要 <a> 标签里出现 flag{...} 就打印并停\n    if ($html -match '<a [^>]*>(flag\\{[^}]+\\})</a>') {\n        Write-Host \"`n*** 抓到了！***\"\n        Write-Host $matches[1]\n        break\n    }\n}" },
      { t: "p", x: "也可行" }
    ]
  },
   {
  id: "writeup-5",
  title: "Bugku 头等舱",
  date: "2026-10-06",
  category: "基础知识",
  tags: ["writeup"],
  body: [
    { t: "h", x: "题目信息" },
    { t: "p", x: "题目名称：头等舱" },
    { t: "p", x: "类型：Web" },
    { t: "p", x: "分值：15分" },
    { t: "p", x: "作者：harry" },

    { t: "h", x: "题目分析" },
    { t: "p", x: "点进去页面空白，查看页面源代码无内容。题目名字「头等舱」是提示，head=HTTP头部，flag藏在HTTP响应头中。" },
    { t: "p", x: "HTTP响应头是服务器返回给浏览器的附加信息，网页正文看不见。" },

    { t: "h", x: "解题方法：浏览器F12开发者工具" },
    { t: "p", x: "1. 打开网页，按F12，切换到【网络】标签" },
    { t: "p", x: "2. 勾选保留日志，Ctrl+R刷新页面" },
    { t: "p", x: "3. 点击捕获到的请求，右侧查看【响应头 Response Headers】，下翻找到flag" },

    { t: "h", x: "知识点总结" },
    { t: "p", x: "CTF Web题，名字带头/head/header，优先检查HTTP响应头，网页空白不代表没有信息。" }
  ]
}
