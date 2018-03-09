var Fontmin = require('fontmin');
var fs = require('fs');
// var $ = require('jquery');
var jsdom = require("jsdom/lib/old-api");
// const { JSDOM } = jsdom;
var srcPath = 'fonts/北岸硬笔楷书.ttf'; // 字体源文件
var destPath = 'build/font';    // 输出路径
var text = '';
// var text = "备课 JS 长期以来都只存在一种集合类型；；；";



// 初始化
// var fontmin = new Fontmin()
//     .src(srcPath)               // 输入配置
//     .use(Fontmin.glyph({        // 字型提取插件
//         text: text              // 所需文字
//     }))
//     // .use(Fontmin.ttf2eot())     // eot 转换插件
//     // .use(Fontmin.ttf2woff())    // woff 转换插件     
//     // .use(Fontmin.ttf2svg())     // svg 转换插件
//     // .use(Fontmin.css())         // css 生成插件
//     .use(Fontmin.otf2ttf())     // svg 转换插件
//     .dest(destPath);            // 输出配置

// // 执行
// fontmin.run(function (err, files, stream) {
//     if (err) {                  // 异常捕捉
//         console.error(err);
//     }
//     console.log('done');        // 成功
// });





fs.readFile('index.html', function (err, data) {
    if (err) return console.error(err);
    text = GetChinese(data.toString());
    console.log(text);
});

function GetChinese(strValue) {
    if (strValue != null && strValue != "") {
        var reg = /[\u4e00-\u9fa5]/g;
        return strValue.match(reg).join("");
    }
    else
        return "";
    // const dom = new JSDOM(strValue);
    // return dom.window.document.querySelector("body").textContent;
}

// var text ='嗯哦欸急忙拿出的层面的毛毛虫';
var fontmin = new Fontmin()
    .src(srcPath)               // 输入配置
    .use(Fontmin.glyph({        // 字型提取插件
        text: text              // 所需文字
    }))
    // .use(Fontmin.ttf2eot())     // eot 转换插件
    // .use(Fontmin.ttf2woff())    // woff 转换插件     
    // .use(Fontmin.ttf2svg())     // svg 转换插件
    // .use(Fontmin.css())         // css 生成插件
    .use(Fontmin.otf2ttf())     // svg 转换插件
    .dest(destPath);            // 输出配置

// 执行
fontmin.run(function (err, files, stream) {
    if (err) {                  // 异常捕捉
        console.error(err);
    }
    console.log('done');        // 成功
});


// var array = [];
// onload = function () {
//     var tags = document.body.getElementsByTagName('*');
//     for (var i = 0; i < tags.length; i++) {
//         array.push(getText(tags[i]));
//     }
//     console.log(array);
//     var str = array.join(',');
//     console.log(str);
// }

// var getText = function (dom) {
//     var index = 0, html = dom.innerHTML;
//     while (dom.children.length && index < dom.children.length) {
//         var chtml = dom.children[index].outerHTML;
//         html = dom.innerHTML.replace(chtml, '');
//         index++;
//     }
//     return html;
// }
// var innerText = document.body.innerText ? 'innerText' : 'textContent';
// innerText = innerText.replace(/<[^>]*>|/g, "");
// console.log(innerText); 