---
layout: post
title: "Bugku | 滑稽"
date: 2026-09-14
categories: [Bugku]
tags: [Web, writeup, 源码注释]
---

## 一、漏洞简介
打开页面只有滑稽图片，flag放在网页HTML注释里面，直接查看源码即可找到。

## 二、环境信息
靶场地址：https://ctf.bugku.com/challenges/detail/id/76.html
关卡路径：/
漏洞类型：源码注释隐藏信息

## 三、复现步骤
1. 启动场景，页面显示滑稽表情图片。
2. 浏览器 `Ctrl + U` 查看网页源代码。
3. 在HTML注释 `<!-- flag{xxx} -->` 中提取flag提交。

## 四、原理分析
开发者把flag写在了前端页面注释中，正常浏览页面看不见，但是查看源码就能直接读取，注释内容会随HTML一起下发给客户端。

## 五、修复方案
敏感信息禁止写在HTML注释、前端源码中，校验逻辑和凭证放在服务端。