---
layout: post
title: "Bugku | 这是一张单纯的图片"
date: 2026-11-19
categories: [Bugku]
tags: [MISC, writeup, 隐写, exif]
---

## 一、题目简介
MISC隐写题，下载图片，flag存放在图片的EXIF元信息中。

## 二、环境信息
靶场地址：https://ctf.bugku.com/challenges/detail/id/75.html
类型：MISC图片隐写

## 三、复现步骤
1. 点击下载，拿到图片文件。
2. 方法1（Linux）：使用 `exiftool 图片名.jpg` 查看EXIF信息。
3. 方法2（Windows）：右键图片 → 属性 → 详细信息，在备注/描述字段找到flag。
4. 提取flag提交。

## 四、原理分析
EXIF是图片附带的元数据区域，可以存放作者、备注等文本信息，属于最简单的信息隐写方式。图片肉眼看没有任何异常。

## 五、安全小结
图片EXIF中不要存放敏感信息，发布图片前建议清除EXIF信息。
