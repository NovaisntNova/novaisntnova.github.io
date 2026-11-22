---
layout: post
title: Bugku | 聪明的小羊
date: 2026-11-22
categories: Bugku
tags: [Crypto, writeup, 栅栏密码]
---

| layout | post |
| ---- | ---- |
| title | Bugku | 聪明的小羊 |
| date | 2026-11-22 |
| categories | Bugku |
| tags | Crypto writeup 栅栏密码 |

## 一、题目简介
Crypto古典密码题，题目名字为聪明的小羊，加密方式为栅栏密码，解密得到flag。

## 二、环境信息
靶场地址：https://ctf.bugku.com/
类型：Crypto 栅栏密码

## 三、复现步骤
1. 获取题目给出的密文：'fa{fe13f590lg6d46d0d0}'，本题是2栏栅栏密码。
2. 栅栏密码属于换位密码，只调换字符顺序，不替换字符。
3. 使用2栏栅栏解密脚本进行解密。
4. 得到明文'6fde4163df05d900'，整理为flag{}格式提交。

Python解密脚本（2栏栅栏）：
```python
def rail2_decrypt(cipher):
    n = len(cipher)
    mid = (n + 1) // 2
    part1 = cipher[:mid]
    part2 = cipher[mid:]
    res = []
    for a,b in zip(part1, part2):
        res.append(a)
        res.append(b)
    if len(part1) > len(part2):
        res.append(part1[-1])
    return ''.join(res)

ciphertext = "th{ae}fglag"
print(rail2_decrypt(ciphertext))