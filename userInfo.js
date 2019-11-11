#!/usr/bin/env node

//获取用户信息
const os = require("os")
console.log("我是用户信息   "+os.userInfo().username)


//获取cpu架构
console.log("我是cpu架构   "+os.arch())


// 系统主机名
console.log("我是系统主机名   "+os.hostname())

// 系统总内存
console.log("我是系统总内存   "+os.totalmem())
