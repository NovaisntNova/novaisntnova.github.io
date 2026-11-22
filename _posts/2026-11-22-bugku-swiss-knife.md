---
layout: post
title: Bugku | 瑞士军刀
date: 2026-11-22
categories: Bugku
tags: MISC writeup nc shell
---

## 一、题目简介
MISC nc交互入门题，通过nc连接远程靶机，在交互式shell中执行`ls`、`cat flag`读取flag。

## 二、环境信息
靶场地址：https://ctf.bugku.com/challenges/detail/id/100.html
类型：MISC nc交互shell
靶机连接：`160.202.254.160 16007`

## 三、复现步骤
1. 打开Kali终端，使用nc连接靶机
```bash
nc 160.202.254.160 16007