var Fontmin = require('fontmin');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var opentype = require('opentype.js');

var srcPath = 'fonts/hiragino-sans-gb-w3.otf'; // 字体源文件
var destPath = 'min/fonts/';    // 输出路径
var text = '';
var fs = require("fs-extra");

//process.chdir("fontmin");
var read = function (src) {
    var font = opentype.loadSync(src);
    var table = font.tables["name"];
    return table;
}

var write = function (src, text, dist,fontFamily) {
    var font = opentype.loadSync(src);
    var glyphs = [], glyph;
    var notdefGlyph = new opentype.Glyph({
        name: '.notdef',
        unicode: 0,
        advanceWidth: 650,
        path: new opentype.Path()
    });
    glyphs.push(notdefGlyph);
    for (var i = 0; i < text.length; i++) {
        glyph = font.charToGlyph(text[i]);
        if (glyph.name == ".notdef") continue;
        glyphs.push(glyph);
    }
    var newFont = new opentype.Font({
        familyName: fontFamily,
        styleName: "regular",
        unitsPerEm: font.unitsPerEm,
        ascender: font.ascender,
        descender: font.descender,
        glyphs: glyphs
    });
    var arrBuffer = newFont.toArrayBuffer();
    var buffer = new Buffer(arrBuffer);
    if (!fs.existsSync(dist.substr(0, dist.lastIndexOf('/'))))
        fs.mkdirpSync(dist.substr(0, dist.lastIndexOf('/')));
    fs.writeFileSync(dist, buffer);
}

function testFont(htmlPath,fontName)
{
    fs.readFile(htmlPath, function (err, data) {
        if (err) return console.error(err);
        text = GetChinese(data.toString());
        console.log(text);
        //text = "霍伟一个是";
        // 初始化
        //  text='霍伟伟一个是';
        // var fontmin = new Fontmin()
        //     .src(srcPath)               // 输入配置
        //     .use(Fontmin.glyph({        // 字型提取插件
        //         text: text             // 所需文字
        //     }))
    
        //     .dest(destPath);            // 输出配置
    
        // fontmin.run(function (err, files, stream) {
        //     if (err) {                  // 异常捕捉
        //         console.error(err);
        //     }
        //     console.log('done');        // 成功
        // });
    
        write(srcPath, text, destPath + fontName+".otf",fontName);
    });
}


function GetChinese(strValue) {
    // if (strValue != null && strValue != "") {
    //     var reg = /[\u4e00-\u9fa5]/g;
    //     return strValue.match(reg).join("");
    // }
    // else
    //     return "";

    const dom = new JSDOM(strValue);
    let txt = dom.window.document.querySelector("body").textContent;
    let array = txt.replace(/\s+/g, "").split('');
    str = [...new Set(array)].join('');

    return str;
}  
testFont('fontmin.html','ab')