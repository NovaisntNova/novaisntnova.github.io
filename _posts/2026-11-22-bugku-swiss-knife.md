---
layout: post
title: "Bugku ｜ 瑞士军刀"
date: 2026-11-22
categories: Bugku
tags:
  - PWN
  - writeup
  - nc
  - netcat
---

| layout | post |
| :--- | :--- |
| **title** | Bugku ｜ 瑞士军刀 |
| **date** | 2026-11-22 |
| **categories** | Bugku |
| **tags** | PWN \| writeup \| nc \| netcat |

---

## 一、题目简介

PWN 入门题，考察 `nc`（netcat）命令的基本使用。题目名称“瑞士军刀”即指代 netcat 这一网络工具。启动靶场后，使用 `nc` 连接目标 IP 和端口，通过 Linux 命令读取 flag 文件。

## 二、环境信息

靶场地址：
[https://ctf.bugku.com/challenges/detail/id/96.html](https://ctf.bugku.com/challenges/detail/id/96.html)

类型：PWN

## 三、复现步骤

1. 启动靶场，获取题目给出的 `nc IP 端口` 连接命令。
2. 在 Linux 终端（或 Kali 虚拟机）中执行该命令，建立 TCP 连接。
3. **注意**：连接成功后终端**没有任何回显或提示**，这是正常现象，服务器在等待你输入命令。
4. 直接输入 `ls` 回车，查看当前目录下的文件列表。
5. 发现存在 `flag` 文件后，输入 `cat flag` 读取内容。
6. 获取 flag 并提交。

## 四、原理分析

`nc`（netcat）被称为“网络瑞士军刀”，因为它短小精悍、功能实用，支持 TCP/UDP 连接、端口扫描、监听等多种网络操作。本题只用到其最基础的**客户端模式**：通过裸 TCP 连接远程服务器的 shell 端口，直接与目标系统交互。由于服务器端没有设置欢迎语或提示符，连接后表现为“黑屏无回显”，但实际上命令通道已经建立。

## 五、安全小结

`nc` 作为网络调试和渗透测试的常用工具，既能用于合法的网络诊断，也可能被攻击者用于建立反弹 shell 或传输恶意文件。在生产环境中，应通过防火墙策略限制不必要的端口对外暴露，避免将带有 shell 的裸服务直接暴露在公网。日常运维中若发现异常 `nc` 连接行为，应视为可疑迹象及时排查。