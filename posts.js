/* ===== Nova's Blog 文章数据 =====
   以后添加文章:推荐使用同目录下的「文章编辑器.html」,填表后自动生成此文件内容。
   也可以手动添加:复制一篇文章的 { ... } 块(含逗号),改掉标题和内容即可。
   注意:数组元素之间必须用英文逗号分隔,最后一项后面不要逗号。 */
var POSTS = [
  {
    id: "welcome-to-cybersecurity",
    title: "迎接网安挑战",
    date: "2026-09-13",
    category: "基础知识",
    tags: ["网络安全", "入门"],
    body: [
      { t: "p", x: "I'm here, ready for the Cybersecurity world." }
    ]
  },
  {
    id: "writeup-1",
    title: "第一篇 write up",
    date: "2026-09-13",
    category: "基础知识",
    tags: ["writeup"],
    body: [
      { t: "p", x: "(在这里填写你的自述内容,可以写多段,每一行是一段)" }
    ]
  }
];
