# Vue 3 + TypeScript + Vite

# 创建

> pnpm create vite

```bash
# 创建工程
pnpm create vite

# CSS 预处理器
pnpm add -D sass

# Node
pnpm add -D @types/node

# Vite插件，为传统浏览器提供支持
pnpm add @vitejs/plugin-legacy -D

# 打包压缩时需要
pnpm add terser -D

# 格式化
pnpm add @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier -D
```

# 问题

Q1: 打包时，有如下报错

[vite:terser] terser not found. Since Vite v3, terser has become an optional dependency. You need to install it.

A1:

执行`pnpm add terser -D`
