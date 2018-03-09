var fs = require('fs');
var path = require('path');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var arr=[];
// var arrstr='';

//解析需要遍历的文件夹，我这以E盘根目录为例  
var filePath = path.resolve('E:/git/ww/zmx/fontmin2222/min');

//调用文件遍历方法  
fileDisplay(filePath);

/** 
 * 文件遍历方法 
 * @param filePath 需要遍历的文件路径 
 */
function fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表  
    fs.readdir(filePath, function (err, files) {
        if (err) {
            console.warn(err)
        } else {
            //遍历读取到的文件列表  
            files.forEach(function (filename) {
                //获取当前文件的绝对路径  
                var filedir = path.join(filePath, filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象  
                fs.stat(filedir, function (eror, stats) {
                    if (eror) {
                        console.warn('获取文件stats失败');
                    } else {
                        var isFile = stats.isFile();//是文件  
                        var isDir = stats.isDirectory();//是文件夹  
                        if (isFile) {
                            if (filedir.indexOf('.html') >= 0 || filedir.indexOf('.vue') >= 0 || filedir.indexOf('.js') >= 0) {
                                console.log(filedir);
                                function testFont(htmlPath, fontName) {
                                    fs.readFile(htmlPath, function (err, data) {
                                        if (err) return console.error(err);
                                        text = GetChinese(data.toString());
                                        // console.log(text);

                                        // write(srcPath, text, destPath + fontName+".otf",fontName);
                                    });
                                }
                                function GetChinese(strValue) {
                                    const dom = new JSDOM(strValue);

                                    let txt = dom.window.document.querySelector("body").textContent;

                                    let array = txt.replace(/\s+/g, "").split('');

                                    str = [...new Set(array)].join('');
                                    // str.replace(/\s+/g, "");
                                    str.replace(/(^\s*)|(\s*$)/g, "");
                                    console.log(str);
                                    // var bbb=arr.concat(str);
                                    // console.log(bbb);
                                    return str;
                                }
                                testFont(filedir, 'ab');

                            } else {

                            }
                        }
                        if (isDir) {
                            fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件  
                        }
                    }
                })
            });
        }
    });
}  