const moment = require("moment");

module.exports = {
  title: "数字魔法",
  description: "数字魔法 - 简单的简单",
  theme: "reco",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "script",
      {
        language: "javascript",
        type: "text/javascript",
        src: "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js",
      },
    ],
    [
      "script",
      {
        charset: "utf-8",
        type: "text/javascript",
        language: "javascript",
        src: "/custom.js",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  plugins: [
    ["flowchart"],
    ["@vuepress/plugin-nprogress"],
    [
      "@vuepress/plugin-last-updated",
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require("moment");
          moment.locale(lang);
          return moment(timestamp).fromNow();
        },
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["koharu"],
        modelStyle: { right: "80px", bottom: "-20px", opacity: "0.9" },
        messageStyle: { right: "80px", bottom: "190px" },
        btnStyle: { right: "80px", bottom: "40px" },
      },
    ],
    ["@vuepress-reco/comments"],
    [
      "meting",
      {
        meting: {
          auto: "https://music.163.com/#/playlist?id=645072",
        },
        aplayer: {
          fixed: true,
          mini: true,
          autoplay: true,
        },
      },
    ],
  ],
  markdown: {
    anchor: { permalink: false },
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/logo.png",
    mode: "auto",
    modePicker: true,
    type: "blog",
    //author: "zxcsoft.com",
    sidebar: "auto",
    authorAvatar: "/avatar.jpg",
    lastUpdated: "最后更新日期",
    sidebarDepth: "3",
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag", // 默认文案 “标签”
      },
    },
    nav: [
      { text: "主页", link: "/", icon: "reco-home" },
      { text: "时间线", link: "/timeline/", icon: "reco-date" },
    ],
    friendLink: [
      {
        title: "xiecf003",
        desc: "xiecf003",
        logo: "https://avatars3.githubusercontent.com/u/19772408?s=60&v=4",
        link: "https://xiecf003.github.io/",
      },
    ],
    vssueConfig: {
      platform: "github-v4",
      owner: "ZxcSoft",
      repo: "zxcsoft.github.io",
      clientId: "eaf5a638f11ccae8e7e0",
      clientSecret: "7d4b1accd24e379589fa87d0ddab385eb0ba8fce",
    },
    // 备案
    record: "鄂ICP备15016353号",
    recordLink: "http://beian.miit.gov.cn/",
    cyberSecurityRecord: null,
    cyberSecurityLink: null,
    // 项目开始时间，只填写年份
    startYear: "2017",
  },
};
