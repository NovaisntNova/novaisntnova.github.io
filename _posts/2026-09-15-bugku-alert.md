---
layout: post
title: "Bugku | alert"
date: 2026-09-15
categories: [Bugku]
tags: [Web, writeup, js弹窗]
---

## 一、漏洞简介
打开页面只有alert弹窗，flag写在JS弹窗代码中，查看页面源码即可获取flag。

## 二、环境信息
靶场地址：https://ctf.bugku.com/challenges/detail/id/70.html
关卡路径：/
漏洞类型：前端源码泄露

## 三、复现步骤
1. 启动场景，页面弹出alert提示框。
2. 浏览器按 `Ctrl + U` 查看网页源代码。
3. 在js代码 `alert("flag{xxxx}")` 里面提取flag提交。

## 四、原理分析
flag直接硬编码在前端JavaScript代码里，访问页面就能拿到，前端代码不能存放敏感信息。

## 五、修复方案
1. flag存放于后端，不写在前端JS。
2. 校验逻辑放在服务端，前端只负责展示交互。
