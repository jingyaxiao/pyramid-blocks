## 区块
### 一、创建项目
```
yarn create umi --type=block
```

### 二、启动项目
```
yarn start
```

### 三、新建模块、区块、布局
```
1.分别前往项目 templates、blocks、layouts 目录下 -> 以名称建立目录

2.在相应名称目录下，分别建立：
1).src目录（代码目录，必须有一个index.tsx文件）
2).package.json（描述信息）
3).snapshot.png（预览图片）

3.编写代码
```

### 四、发布区块
```
1.将代码合并到 master 分支，并推送即可
```

### 预览区块（LAYOUT = ant-design-pro-user | ant-design-pro | blankLayout）
```
1.预览区块（暂时不用）
cross-env BLOCK=blocks/demo LAYOUT=ant-design-pro yarn start

2.路由预览
例如：
/templates/EmptyPage
```


