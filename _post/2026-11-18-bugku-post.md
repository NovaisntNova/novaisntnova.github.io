---
layout: post
title: "Bugku | POST"
date: 2026-11-18
categories: [Bugku]
tags: [Web, writeup, POST传参]
---

## 一、漏洞简介
题目为POST，考察POST请求传参。需要向目标地址发送POST数据包，携带指定参数，服务端校验通过后返回flag。

## 二、环境信息
靶场地址：https://ctf.bugku.com/challenges/detail/id/74.html
关卡路径：/
漏洞类型：POST参数可控

## 三、复现步骤
1. 启动场景获取目标链接。
2. 使用Burp / HackBar / curl发送POST请求，提交参数：`what=flag`。
curl示例：
```bash
curl -X POST -d "what=flag" 目标地址
3. 响应内容中得到flag。

## 四、原理分析

后端接收POST参数what，判断值等于flag就输出flag。GET和POST只是两种不同的提交方式，参数都由用户可控。

## 五、修复方案

不能依靠简单的参数匹配直接返回敏感凭证，增加身份鉴权、会话验证机制。