---
layout: post
title: Bugku | source
date: 2026-11-21
categories: Bugku
tags: [Web, writeup, 源码泄露, git泄露]
---

| layout | post |
| ---- | ---- |
| title | Bugku | source Git源码泄露 |
| date | 2026-11-21 |
| categories | Bugku |
| tags | Web writeup 源码泄露 git泄露 |

## 一、题目简介
Web入门源码泄露题，页面没有直接给出flag，通过线索发现Git源码泄露，恢复仓库拿到flag。

## 二、环境信息
靶场地址：https://ctf.bugku.com/
类型：Web Git源码泄露

## 三、复现步骤
1. 访问题目页面，查看网页源代码，找到提示线索指向git。
2. 尝试访问 `/.git` 目录，确认存在Git源码泄露漏洞。
3. 使用GitHack工具拉取并恢复整个git仓库文件。
4. 查看恢复出来的文件、commit提交记录，找到隐藏flag。

> Windows环境也可以手动访问git对象，读取commit信息，解析blob对象拿到文件内容。

## 四、原理分析
Git版本管理会生成`.git`文件夹，里面保存版本快照、源码记录。如果Web服务器配置不当，允许外部访问`/.git`目录，攻击者就可以下载整个版本库，拿到源代码、敏感信息。

## 五、安全小结
网站上线禁止暴露`.git`、`.svn`版本控制目录；在Nginx/Apache配置里拦截这类目录访问。部署前清理服务器上的版本管理文件夹，防止源码泄露。