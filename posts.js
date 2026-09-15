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
    title: "第一篇 write up",
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
    title: "第二篇 write up",
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
    title: "第三篇 write up",
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
  }
];
     id: "writeup-4",
    title: "第四篇 write up",
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
      { t: "p", x: "-点进去发现界面刷新，看见提示文字要求看到熊猫图片时才能得到flag，发现只有flag is here这句废话，依旧按键ctrol+U不断尝试发现只有在10jpg时能够得出正确flag，寻求方法发现使用脚本powershell运行代码$url = "http://160.202.254.160:18424/"
while ($true) {
    $html = curl.exe -s $url
    # 只要 <a> 标签里出现 flag{...} 就打印并停
    if ($html -match '<a [^>]*>(flag\{[^}]+\})</a>') {
        Write-Host "`n*** 抓到了！***"
        Write-Host $matches[1]
        break
    }
}
也可行" }
    ]
  }
];

