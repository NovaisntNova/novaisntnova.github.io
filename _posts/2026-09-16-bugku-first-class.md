---
layout: post
title: "Bugku | 头等舱"
date: 2026-09-16
categories: [Bugku]
tags: [Web, writeup, http头]
---

## 一、漏洞简介
题目提示头等舱，考察HTTP请求头修改，需要修改请求头里的`user-agent`或者`Referer`，核心是添加`X-Forwarded-For`、`client-ip`这类伪造IP头，或者使用指定UA，服务器根据请求头判断是否放行返回flag。

## 二、环境信息
靶场地址：https://ctf.bugku.com/challenges/detail/id/72.html
关卡路径：/
漏洞类型：HTTP请求头伪造

## 三、复现步骤
1. 启动场景，直接访问页面不会给出flag。
2. 使用Burp Suite抓包，拦截GET请求。
3. 在请求头添加：`X-Forwarded-For: 1.1.1.1`（头等舱对应指定IP）。
4. 放行数据包，响应包内即可得到flag。
> 备选：也可以用HackBar、curl修改请求头访问。

curl示例命令：
```bash
curl -H "X-Forwarded-For: 1.1.1.1" 目标地址
