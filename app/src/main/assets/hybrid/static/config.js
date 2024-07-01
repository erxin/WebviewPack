window.config = () => {
    return {
        title: 'Tiger', // 默认浏览器标题
        brand: 'tiger', // 品牌 日本=> jbc, 泰国=>tiger
        webLogo: '', // webLogo有值是优先加载Logo 否则按照地区加载默认图标
        build: 76, // 版本build
        versionName: '1.0.4.1', // 版本号
        debug: true, // 是否显示vconsole
        pageSize: 10, // 缓存商品的分页条数设置
    };
};
