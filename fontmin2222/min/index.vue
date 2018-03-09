
<script>
 
    module.exports = {
        props: ['fujian'],
        data: function () {
            return {
                newresize:{
                    lastNum:{},
                },
                pptControl:{},
                currModePpt: false,
                loading: true,
                //loading状态，ppt、pdf、图片、视频使用loading状态，相应操作应该无效，音频目前有自己的loading状态，是否相同暂时不知道
                allDelet: false,
                pptAllPoint: {}, //整个ppt的点
                isNewPtt: true, //是否是新ppt
                ispptFirstThumb: true, //是否第一次缩略图
                pptIsHorizontal: true,
                currpptNum: 1, //ppt当前页码
                allpptPage: '', //ppt所有页码
                pptArray: [], //新ppt返回缩略图的json文件
                pptThumb: false,
                alertText: '',
                shareTion: '',
                checkVals: false,
                thisPdfStatus: 'allwidth',
                PdfStatus: ['allheight', 'allwidth', 'all'],
                isPdfShow: false,
                isFilter: false,
                allLineInstance: {},
                pdfPageLine: {},
                domeProperty: {},
                picMoveW: '',
                picMoveH: '',
                picIsHorizontal: false,
                lastpdfPint: {
                    x: '',
                    y: ''
                },
                pdfPositionY: 0,
                pdfPositionX: 0,
                isMaskShow: false,
                canPlay: false,
                pdfobj: {
                    isHorizontal: false,
                    isDone: false
                },
                pdfMoveW: '',
                pdfMoveH: '',
                pdfScale: 1,
                scaleS: 1,
                smallPdf: '',
                dirW: '',
                dirH: '',
                lastW: '',
                lastH: '',
                imgHorizontal: false,
                ispafScrall: false,
                // pdfClass:'normal',
                isThub: false,
                pdfArray: [],
                page: 1, //pdf当前页面
                numPages: 0, //pdf总页面
                padwidth: 1,
                proportion: 1,
                fileNames: '',
                seeTxt: '',
                toSee: false,
                pencilSVG0: SVG0, //初始|画笔颜色
                pencilSVG1: SVG1, //
                currColor: '#fd3a2b', //当前的颜色、要替换的颜色
                penColor: '#fd3a2b',
                brushColor: '#fd3a2b', //彩笔的颜色，要替换的颜色
                currLineW: 5,
                ispen: true, //画笔选择,默认选择画笔，不是彩笔
                allPen: true, //画笔是否处于打开状态，false时,关闭两支画笔打开的状态
                showPen: false, //是否处于选择画笔粗细的状态
                onPen: false, //是否处于颜色画板打开状态
                onErase: false, //是否处于橡皮状态
                onSelectColor: false, //颜色选择盒子状态
                isErase: true, //true为点擦除，false为线擦除
                colorBox: ['#999900', '#ffffff', '#ff1000', '#0c32b7', '#7ce35e', '#fdfd00', '#2adeff', '#ffcf54', '#dc4452', '#ff1ecf', '#704a98', '#36bd9b', '#0a830d', '#4b8add', '#007aff', '#aa4d1f', '#abb3bd', '#424a54', '#8b7e6e', '#000000'],
                chosePenClass: 'lineW5', //当前class的状态
                brushClass: 'lineW16', //当前彩笔宽
                penClass: 'lineW5', //当前画笔宽
                isClear: false, //橡皮是否处于最左侧
                EraseW: 25, //橡皮檫宽度
                fileSrc: '',
                fileType: 1,
                eraseTxt: '右划清除所有笔记',
                pointerType: '',
                pointerId: '',
                allLine: {

                }, //所有线的点
                canvas: {

                }, //所有canvas的对象
                prevPointer: {

                }, //上一个点的位置
                circleColor: [{ //大块颜色选择器
                    className: 'writeColor',
                    value: true,
                    choseVal: false,
                    colorVal: '#ffffff'
                }, {
                    className: 'yelloColor',
                    value: true,
                    choseVal: false,
                    colorVal: '#ffbf11'
                }, {
                    className: 'blueColor',
                    value: true,
                    choseVal: false,
                    colorVal: '#2181ff'
                }, {
                    className: 'redColor',
                    value: true,
                    choseVal: true,
                    colorVal: '#fd3a2b'
                }, {
                    className: 'manyColor',
                    value: false,
                    choseVal: false,
                    colorVal: ''
                },],
                thinPen: [{
                    className: 'lineW3',
                    val: 3,
                    curr: false
                }, {
                    className: 'lineW5',
                    val: 5,
                    curr: true
                }, {
                    className: 'lineW8',
                    val: 8,
                    curr: false
                }, {
                    className: 'lineW12',
                    val: 12,
                    curr: false
                }],
                crudePen: [{
                    className: 'lineW12',
                    val: 12,
                    curr: false
                }, {
                    className: 'lineW16',
                    val: 16,
                    curr: true
                }, {
                    className: 'lineW24',
                    val: 24,
                    curr: false
                }, {
                    className: 'lineW42',
                    val: 42,
                    curr: false
                }],
                allitem: {
                    vedio: {
                        val: false, //是否是视频
                        time: 0,
                        alltime: 0,
                        isStop: true, //是否暂停
                        noVolume: false, //是否静音
                    },
                    audio: {
                        val: false,
                        time: 0,
                        alltime: 0,
                        isStop: true,
                        noVolume: false,
                    },
                    image: {
                        val: false,
                        turn: 0,
                        scale: 1,
                    },
                    pdf: {
                        val: false
                    },
                    ppt: {
                        val: false
                    }
                },
                volumeVal: false,
                currobj: {

                },
                ClassTo: false,
                PadTo: false,
                showAlert: false,
                pageObj:{
                    pptFirst:true,
                    pptLast:false,
                    pdfFirst:true,
                    pdfLast:false
                },
                vedioTrun:0,
                fullScreen:false,
                vedioFull:false,
                oldVedio:{
                    width:'',
                    height:'',
                }
            }
        },
        mounted: function () {
            var _self = this,
                xxxFetch;

            this.$root.xqAudio.pause();
            initFun.initCanvas(_self, addListen) //初始化canvas
            initFun.initPen(_self, SVG0, SVG1);
            initFun.initErase(_self, addListen);
            initFun.initBar(_self, addListen);

          
            // HACK: 把 fetch 的 credentials 参数从 include 变成 omit
            // https://github.com/mozilla/pdf.js/pull/8850
            if (window.fetch) {
                xxxFetch = fetch;

                fetch = function (url, args) {
                    if (!url.toLowerCase().indexOf("http://dl.xueleyun.com/files/pdf")) {
                        if (args.credentials == "include") {
                            console.log("很可能是 pdfjs 请求了", url, "在这里把 credentials 从 include 改为 omit");
                            args.credentials = "omit";
                        } else if (args.credentials == "omit")
                            console.log("很可能是 pdfjs 请求了", url, "但 credentials 已经是 omit 了，需要删除这段代码");
                    }

                    return xxxFetch(url, args);
                }
            }


            // 显示预览时停止问题和答案的播放音频
            if (_self.allitem.vedio.val) {
                initFun.initVedio(_self)
                document.querySelector('.bottomFun').style.zIndex=1000
            } else if (_self.allitem.audio.val) {
                initFun.initAudio(_self)
            } else if (_self.allitem.image.val) {
                document.querySelector('.bottomFun').style.minWidth = '624px'
                initFun.initPic(_self, addListen)
            } else if (_self.allitem.ppt.val) { //ppt请求
                console.log(_self.currobj.fileUrl)
                _self.modePpt()
                // _self.currobj.fileUrl = "http://smartclass.xueleyun.com/static/ppt/303/d6f40fc0625debad751bf109bedcbbd0"
                initFun.getPptFileUrl(_self, _self.currobj.fileUrl, _self.currobj.pptIndexUrl + '?token=' + _self.$root.token, function (fileUri, value, returnData) {
                    if (value) { //新ppt,隐藏当前的iframe，有功能条，并添加id容器，init函数,每一页的画笔跟随
                        document.querySelector('.bottomFun').style.minWidth = '614px'; //改变底部功能条长度
                        _self.isNewPtt = true;
                        _self.allpptPage = returnData.pageCounts; //所有页码
                        _self.currpptNum = 1; //当前页码
                        _self.pptArray.length = returnData.pageCounts;
                        _self.$nextTick(function () {
                            _self.controlNewPpt(fileUri, returnData)
                        })

                        // _self.fileSrc = fileUri;
                        // debugger
                        // console.log(returnData)
                    } else { //老ppt,展示当前iframe,没有功能条，注销容器盒子
                        _self.isNewPtt = false;
                        _self.fileSrc = fileUri;
                        _self.$nextTick(function () {
                        window.frames["pptIfame"].src = _self.fileSrc;
                            document.querySelector('.pptfun iframe').onload = function () {
                                document.querySelector('.pptfun').style.opacity = 1;
                                _self.loading = false;
                                document.querySelector('.pptfun iframe').contentWindow.document.addEventListener('mouseup', function () {
                                    _self.drawCanvas = false;
                                }, false);
                            }
                        })
                    }
                })
            } else if (_self.allitem.pdf.val) { //pdf请求
                document.querySelector('.bottomFun').style.minWidth = '660px'
                initFun.initPdf(_self, addListen)
            }

            //判断chrome浏览器版本号，如果大于=56 则隐藏下载按钮
            var agent = navigator.userAgent.toLowerCase();
            var regStr_chrome = /chrome\/[\d.]+/gi;
            if (agent.indexOf("chrome") > 0) {
                var browser = agent.match(regStr_chrome);
                if (browser && browser[0] && browser[0].indexOf("chrome") != -1 && (browser + "").replace(/[^0-9.]/ig, "") >= "56") {
                    document.querySelector("body").classList.add("video-download-hide");
                }
            }

            //初始化位置
            _self.newresize.lastNum={
                width:document.documentElement.clientWidth,
                height:document.documentElement.clientHeight,
                top:document.documentElement.clientHeight-66-56
            }
            _self.newresize.fixFullScreen=function(e){
                    console.log('预览')
                    let lastNums=_self.newresize.lastNum
                    let currWidth = document.documentElement.clientWidth;
                    let currHeight = document.documentElement.clientHeight;
                    let change = document.querySelector('.preview .bottomFun');
                    if (lastNums.height - currHeight > 0) {//缩小
                        lastNums.top = lastNums.top - (lastNums.height - currHeight);
                        change.style.top = lastNums.top + 'px'
                    } else if (lastNums.height - currHeight < 0) {//放大
                        lastNums.top = lastNums.top + (currHeight - lastNums.height);
                        change.style.top = lastNums.top + 'px'
                    }
                    lastNums.width = currWidth;//更新上一次
                    lastNums.height = currHeight;//更新上一次
            }
            window.addEventListener('resize',_self.newresize.fixFullScreen,false)
            if (_self.allitem.vedio.val){
                onFullscreenchange(_self.screenVedioChange)
            }
        },
        created: function () {
            var _self = this;
            _self.currobj = _self.fujian.list[_self.fujian.i];
            _self.pointerId = _self.fujian.id;
            _self.pointerType = _self.fujian.type
            // 2：ppt
            // 3：word
            // 4：video (mp4,flv)
            // 5：voice (mp3)
            // 6：jpg
            _self.fileNames = _self.currobj.fileName
            if (_self.currobj.fileType == 6) {
                makeTrue(_self, 'image');
                _self.fileSrc = _self.currobj.fileUrl;
            } else if (_self.currobj.fileType == 5) {
                makeTrue(_self, 'audio')
                _self.fileSrc = _self.currobj.fileUrl;
            } else if (_self.currobj.fileType == 4) {
                makeTrue(_self, 'vedio')
                _self.fileSrc = _self.currobj.fileUrl;
            } else if (_self.currobj.fileType == 3) { //pdf
                makeTrue(_self, 'pdf')
                _self.fileSrc = _self.currobj.fileUrl;
            } else if (_self.currobj.fileType == 2) {
                makeTrue(_self, 'ppt')
                _self.fileSrc = '';
            }
        },
        watch: {
            page: function (newVal, oldVal) {
                var _self = this;
                savePagepoint(_self, oldVal)

                drawPagepoint(_self, newVal)
            }
        },
        methods: {
            chosePen: function (val) { //画笔切换
                var _self = this;
                var regColor = new RegExp('#ffffff', 'gi')
                _self.allPen = true; //开启画笔
                _self.isPdfShow = false;
                _self.onErase = false; //关闭
                _self.currModePpt = false;
                if (val) { //为true,画笔状态
                    _self.onPen = true;
                    _self.ispen = true;

                    _self.chosePenClass = _self.penClass; //设置宽度的class类名
                    _self.currLineW = parseInt(_self.chosePenClass.replace(/Linew/gi, '')); //设置宽度大小
                    //判断是否是画笔状态，如果不是，改变状态，如果是,打开颜色画板,且粗细为画笔
                    _self.pencilSVG1 = SVG1.replace(regColor, '#4b4b4b');
                    _self.pencilSVG0 = SVG0.replace(regColor, _self.penColor);
                    _self.currColor = _self.penColor;
                } else { //为false,彩笔状态

                    _self.ispen = false;
                    _self.onPen = true;

                    _self.chosePenClass = _self.brushClass; //设置宽度的class类名
                    _self.currLineW = parseInt(_self.chosePenClass.replace(/Linew/gi, '')); //设置宽度大小

                    //判断是否是彩笔状态，如果不是，改变状态，如果是,打开颜色画板,且粗细为彩笔
                    _self.pencilSVG1 = SVG1.replace(regColor, _self.brushColor);
                    _self.pencilSVG0 = SVG0.replace(regColor, '#4b4b4b');
                    _self.currColor = _self.brushColor;
                }
                _self.circleColor.forEach(function (element, index) {
                    if (element.colorVal == _self.currColor) {
                        element.choseVal = true;
                    } else {
                        element.choseVal = false;
                    }
                });
            },
            choseColor: function (val, colorVal, nub) { //颜色选择
                var _self = this
                _self.showPen = false; //隐藏画笔宽度
                if (val) { //点击非多颜色时
                    _self.circleColor.forEach(function (element, index) {
                        if (index == nub) {
                            element.choseVal = true;
                        } else {
                            element.choseVal = false;
                        }
                    });
                    _self.onSelectColor = false; //多颜色面板隐藏
                    initFun.makeColor(_self, colorVal, SVG0, SVG1)
                } else { //点击多颜色时
                    _self.onSelectColor = !_self.onSelectColor;
                }
            },
            choseBoxColor: function (val, index) { //多颜色面板选择
                var _self = this;
                _self.circleColor.forEach(function (element, index) { //取消颜色选中的状态
                    element.choseVal = false;
                });
                initFun.makeColor(_self, val, SVG0, SVG1)
                _self.onSelectColor = false; //多颜色面板隐藏
            },
            pickColor: function () { //吸管函数
                var _self = this;
                xl.pickColor("2", function (color) {
                    _self.choseBoxColor(color, 0);
                });
            },
            choseLine: function () { //选择画笔面板
                var _self = this;
                _self.onSelectColor = false; //多颜色面板隐藏
                _self.showPen = true; //展示画笔宽度面板
            },
            selectLineW: function (item, num, isTrue) { //画笔选择
                var _self = this;
                _self.showPen = false;
                if (isTrue) { //画笔
                    _self.chosePenClass = _self.penClass = item.className;
                    _self.currLineW = item.val;
                    _self.thinPen.forEach(function (item, index) {
                        if (index == num) {
                            item.curr = true
                        } else {
                            item.curr = false
                        }
                    })
                } else { //彩笔
                    _self.chosePenClass = _self.brushClass = item.className;
                    _self.currLineW = item.val;
                    _self.crudePen.forEach(function (item, index) {
                        if (index == num) {
                            item.curr = true
                        } else {
                            item.curr = false
                        }
                    })
                }
            },
            eraseFun: function () { //橡皮状态
                var _self = this;
                var regColor = new RegExp('#ffffff', 'gi')
                _self.isPdfShow = false;
                _self.currModePpt = false
                if (_self.allPen) { //有笔的状态选
                    _self.onErase = true;
                    _self.onSelectColor = _self.showPen = _self.onPen = _self.allPen = false; //关闭画笔的相关状态
                    _self.allDelet = false;
                    initFun.resetPen(_self, SVG0, SVG1)
                    _self.isErase = true; //每次置换为点擦除
                } else { //展开时

                    _self.allDelet = !_self.allDelet;
                    _self.onErase = !_self.onErase; //橡皮状态
                    // debugger;
                }
            },
            modePpt: function () {//ppt模式的变化
                let _self = this;
                if (!this.currModePpt) {
                    //如果为false,取消画笔和橡皮的选中状态，并且变化为真
                    _self.onPen = false;//颜色画笔选择面板，隐藏
                    _self.onErase = false;//
                    _self.allDelet = false;
                    initFun.resetPen(_self, SVG0, SVG1);
                    _self.allPen = false;
                    _self.currModePpt = true//改变为选中模式
                }
            },
            pointerPush: function () {
                var _self = this;
                _self.isErase = true; //点擦除
            },
            linePush: function () {
                var _self = this;
                _self.isErase = false; //线擦除
            },
            allLinePush: function () {
                var _self = this;
                _self.onErase = false;
                _self.allDelet = false;
                _self.allPen = true;
                _self.chosePen(_self.ispen);
                _self.onPen=false;
                _self.allLine = {}
                _self.canvas.drawContext.clearRect(0, 0, _self.canvas.drawCanvas.width, _self.canvas.drawCanvas.height);
                _self.canvas.hitContext.clearRect(0, 0, _self.canvas.hitCanvas.width, _self.canvas.hitCanvas.height);
            },
            showVoice: function () {
                this.volumeVal = !this.volumeVal
                this.hideCurrItemBar();

                if (this.volumeVal) {
                    this.isMaskShow = true;
                } else {
                    this.isMaskShow = false;
                }
            },
            toPlay: function () {
                var vedioObj = document.querySelector('video');
                this.hideCurrItemBar();

                if (this.canPlay) {
                    if (this.allitem.vedio.isStop) {
                        vedioObj.play();
                        this.allitem.vedio.isStop = false;
                    } else {
                        vedioObj.pause();
                        this.allitem.vedio.isStop = true;
                    }
                }
            },
            toVoice: function () {
                var audioObj = document.querySelector('.ThisAudio');
                this.hideCurrItemBar();
                if (this.canPlay) {
                    if (this.allitem.audio.isStop) {
                        audioObj.play();
                        this.allitem.audio.isStop = false;
                    } else {
                        audioObj.pause();
                        this.allitem.audio.isStop = true;
                    }
                }
            },
            toScale: function () {
                var _self = this;
                var element = document.querySelector('.allVedio')
                if(!_self.fullScreen){//不是全屏  变为全屏
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.webkitRequestFullscreen) {
                        element.webkitRequestFullscreen();
                    } else if (element.msRequestFullscreen) {
                        element.msRequestFullscreen();
                    }
                }else{
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    }
                }
               

            },
            picTrun: function () {
                this.hideCurrItemBar();
                if (this.loading) {
                    return
                }
                this.allitem.image.turn += 90;
                if (this.allitem.image.turn == 360) {
                    this.allitem.image.turn = 0;
                }
                var _self = this;
                var domClientW = document.documentElement.clientWidth;
                var domClientH = document.documentElement.clientHeight;
                var widthDt, leftDt, heightDt, topDt, rightDt, bottomDt, centerX, centerY;
                var lastD = document.querySelector('.imgobj').getBoundingClientRect();
                var lastDoM = document.querySelector('.imgobj')
                var centerP = {}
                centerX = Number(lastD.left) + Number(lastD.width) / 2; //缩放之前的中心点x到视口的位置
                centerY = Number(lastD.top) + Number(lastD.height) / 2; //缩放之前的中心点y到视口的位置
                centerP.x = centerX;
                centerP.y = centerY;
                amount.CalculeTurnPoint(_self, centerP, addListen.draw, addListen);
                // _self.dirW=_self.proportion*_self.lastW;
                // _self.dirH=_self.proportion*_self.lastH;
                //widthDt,leftDt,heightDt,topDt,_self
                //widthDt实际占有屏幕的百分比，leftDt左边超出的百分比

                lastDoM.style.marginLeft = 'auto';
                lastDoM.style.marginTop = 'auto';
                lastDoM.style.left = centerX - _self.dirW / 2 + 'px';
                lastDoM.style.top = centerY - _self.dirH / 2 + 'px';
                _self.$nextTick(function () {
                    var pdfDome = document.querySelector('.imgobj');
                    var DomeRect = pdfDome.getBoundingClientRect()
                    leftDt = (DomeRect.left >= 0) ? 0 : (-DomeRect.left / DomeRect.width)
                    topDt = (DomeRect.top >= 0) ? 0 : (-DomeRect.top / DomeRect.height);
                    widthDt = (domClientW >= DomeRect.width) ? 1 : (domClientW / DomeRect.width)
                    heightDt = (domClientH >= DomeRect.height) ? 1 : (domClientH / DomeRect.height)
                    toImgControl(widthDt, leftDt, heightDt, topDt, _self)
                })
            },
            picAdd: function (event) {
                this.hideCurrItemBar();
                event.preventDefault()
                var _self = this;
                if (this.loading) {
                    return
                }
                var domClientW = document.documentElement.clientWidth;
                var domClientH = document.documentElement.clientHeight;
                var widthDt, leftDt, heightDt, topDt, rightDt, bottomDt, centerX, centerY;
                var lastD = document.querySelector('.imgobj').getBoundingClientRect();
                var lastDoM = document.querySelector('.imgobj')
                if (Number((_self.proportion + 0.1).toFixed(2)) < 5) {
                    _self.proportion = Number((_self.proportion + 0.1).toFixed(2));
                    amount.CalculeScalePoint(_self, 0.1, 'after', '') //存下要缩放的点
                    centerX = Number(lastD.left) + Number(lastD.width) / 2; //缩放之前的中心点x到视口的位置
                    centerY = Number(lastD.top) + Number(lastD.height) / 2; //缩放之前的中心点y到视口的位置
                    _self.dirW = 1.1 * _self.dirW;
                    _self.dirH = 1.1 * _self.dirH;
                    //widthDt,leftDt,heightDt,topDt,_self
                    //widthDt实际占有屏幕的百分比，leftDt左边超出的百分比
                    lastDoM.style.marginLeft = 'auto';
                    lastDoM.style.marginTop = 'auto';
                    lastDoM.style.left = centerX - _self.dirW / 2 + 'px';
                    lastDoM.style.top = centerY - _self.dirH / 2 + 'px';
                    _self.$nextTick(function () {
                        var pdfDome = document.querySelector('.imgobj');
                        var DomeRect = pdfDome.getBoundingClientRect()
                        amount.CalculeScalePoint(_self, 0.1, 'before', addListen.draw, addListen) //重绘缩放的所有的点
                        leftDt = (DomeRect.left >= 0) ? 0 : (-DomeRect.left / DomeRect.width)
                        topDt = (DomeRect.top >= 0) ? 0 : (-DomeRect.top / DomeRect.height);
                        widthDt = (domClientW >= DomeRect.width) ? 1 : (domClientW / DomeRect.width)
                        heightDt = (domClientH >= DomeRect.height) ? 1 : (domClientH / DomeRect.height)
                        toImgControl(widthDt, leftDt, heightDt, topDt, _self)
                    })
                }
            },
            picDel: function (event) {
                this.hideCurrItemBar();
                if (this.loading) {
                    return
                }
                var _self = this;
                var domClientW = document.documentElement.clientWidth;
                var domClientH = document.documentElement.clientHeight;
                var widthDt, leftDt, heightDt, topDt, rightDt, bottomDt, centerX, centerY;
                var lastD = document.querySelector('.imgobj').getBoundingClientRect();
                var lastDoM = document.querySelector('.imgobj')
                if (Number((_self.proportion - 0.1).toFixed(2)) > 0.1) {
                    _self.proportion = Number((_self.proportion - 0.1).toFixed(2));
                    // console.log(_self.proportion)
                    amount.CalculeScalePoint(_self, -0.1, 'after', '') //存下要缩放的点
                    centerX = Number(lastD.left) + Number(lastD.width) / 2; //缩放之前的中心点x到视口的位置
                    centerY = Number(lastD.top) + Number(lastD.height) / 2; //缩放之前的中心点y到视口的位置
                    _self.dirW = 0.9 * _self.dirW;
                    _self.dirH = 0.9 * _self.dirH;

                    var isCorrectY = false;
                    var isCorrectX = false;

                    if (Number(lastD.top) < 0 && (lastD.top + lastD.height <= domClientH)) {
                        lastDoM.style.top = Number(lastDoM.style.top.replace(/px/g, '')) + ((_self.dirH / 0.9) * 0.1) + "px";
                        isCorrectY = true;
                    }
                    if (Number(lastD.left) < 0 && (lastD.left + lastD.width <= domClientW)) {
                        lastDoM.style.left = Number(lastDoM.style.left.replace(/px/g, '')) + ((_self.dirW / 0.9) * 0.1) + "px"
                        isCorrectX = true;
                    }
                    if (Number(lastD.top) >= 0 && (lastD.top + lastD.height > domClientH)) {
                        isCorrectY = true;

                    }
                    if (Number(lastD.left) >= 0 && (lastD.left + lastD.width > domClientW)) {
                        isCorrectX = true;

                    } !isCorrectX && (lastDoM.style.left = centerX - _self.dirW / 2 + 'px');
                    !isCorrectY && (lastDoM.style.top = centerY - _self.dirH / 2 + 'px');
                    lastDoM.style.marginLeft = 'auto';
                    lastDoM.style.marginTop = 'auto';
                    //widthDt,leftDt,heightDt,topDt,_self
                    //widthDt实际占有屏幕的百分比，leftDt左边超出的百分比

                    _self.$nextTick(function () {
                        var picDome = document.querySelector('.imgobj');
                        var DomeRect = picDome.getBoundingClientRect()
                        leftDt = (DomeRect.left >= 0) ? 0 : (-DomeRect.left / DomeRect.width)
                        topDt = (DomeRect.top >= 0) ? 0 : (-DomeRect.top / DomeRect.height);
                        widthDt = (domClientW >= DomeRect.width) ? 1 : (domClientW / DomeRect.width)
                        heightDt = (domClientH >= DomeRect.height) ? 1 : (domClientH / DomeRect.height)
                        toImgControl(widthDt, leftDt, heightDt, topDt, _self)
                        if (Number(DomeRect.top) < 0 && (DomeRect.top + DomeRect.height <= domClientH)) {
                            picDome.style.top = Number(lastDoM.style.top.replace(/px/g, '')) + domClientH - (DomeRect.height + DomeRect.top) + "px";
                        }
                        if (Number(DomeRect.left) < 0 && (DomeRect.left + DomeRect.width <= domClientW)) {
                            lastDoM.style.left = Number(lastDoM.style.left.replace(/px/g, '')) + domClientW - (DomeRect.width + DomeRect.left) + "px";
                        }
                        if (Number(DomeRect.top) >= 0 && (DomeRect.top + DomeRect.height > domClientH)) {
                            picDome.style.top = 0 + 'px'
                        }
                        if (Number(DomeRect.left) >= 0 && (DomeRect.left + DomeRect.width > domClientW)) {
                            picDome.style.left = 0 + 'px'
                        }

                        amount.CalculeScalePoint(_self, -0.1, 'before', addListen.draw, addListen) //重绘缩放的所有的点
                    })
                }
            },
            toBlack: function () { //推送到黑板
                var _self = this;
                this.hideCurrItemBar();
                this.$root.toBlackboardAttachment(window.JSON.stringify(_self.currobj))
            },
            toClass: function () { //推送到班级圈
                var _self = this;
                this.hideCurrItemBar();
                if (!_self.ClassTo) { //是否可以推送
                    _self.alertText = "确认分享至 " + _self.$root.lessonInfo.class.name + " 班级圈？"
                    _self.shareTion = 0; //推送pad为1，分享班级圈 为0

                    var dataOptions = _self.$root.lessonInfo.login.options;

                    if (dataOptions.resource_share_never_remind == 1) {
                        _self.toClassTion()
                    } else if (dataOptions.resource_share_never_remind == 0 || dataOptions.resource_share_never_remind == undefined) {
                        _self.showAlert = true
                        _self.isFilter = true
                        xl.xxxShowingSaveDialog(true)
                    }
                }
            },
            toClassTionPdf: function (url, imageSize) { //截图图片上传及推送
                let _self = this;
                let fileName = "《" + this.fileNames + "》第" + this.page + "页"
                let clouddiskData = {
                    extension: "jpg",
                    fileClass: 6,
                    fileKey: url,
                    fileName: fileName,
                    fileType: 6,
                    schoolId: _self.$root.schoolId,
                    size: imageSize,
                    unitId: _self.$root.unitId,
                    userId: _self.$root.userId
                }
                //保存云盘和分享班级没有必然联系，互不影响
                //保存进云盘
                _self.$http.post(WEBPACK_API_HOST + "clouddisk?token=" + _self.$root.token, clouddiskData, {
                    'Content-Type': ' application/json;charset=utf-8'
                }).then(response => {
                    //分享班级圈
                    //分享截图到班级圈

                    _self.sharePic(fileName, imageSize, url, response.body)
                    console.log(response)
                }).catch(e => {
                    _self.ClassTo = false
                    if (e.status == 401) {
                        xl.api401();
                        return false;
                    }
                })



            },
            sharePic: function (fileName, imageSize, fileKeys, responseBody) { //截图推送
                var _self = this;
                var shareData = {
                    userId: _self.$root.userId,
                    jsonStr: window.JSON.stringify({
                        "postType": 7, //"动态类型 1：图文 2：视频 3：投票 4：同步英语测评 5：分享 6：活动 7：文件";云盘资源分享只用到 7
                        "context": "", //帖子内容;"文本内容"
                        "allowEvaluation": 1, //填1;"是否允许评价（0：不允许；1：允许）"
                        "shareSpaces": [{
                            "spaceId": _self.$root.classType?"15:" + _self.$root.classId: "1:" + _self.$root.classId, //空间ID的值为：“1：classId”;"空间id"
                            "spaceName": _self.$root.className //值为班级名称;"空间名称"
                        }],
                        "files": [{
                            "key": fileKeys,
                            "type": 1, //"文件类型（-1：其他；0、所有；1：图片；2：视频；3：录音；4：ppt；5：word）",
                            "suffix": "jpg",
                            "length": "0",
                            "size": imageSize,
                            "fileName": fileName,
                            "fileClass": "2"
                        }],
                        "areas": [], //所有地区都能看，则为空 //后台发动态用
                        "identitys": [] //所有身份都能看，则为空 //后台发动态用
                    })
                }
                var argsobj = _self.currobj;
                var pointArry = {
                    userId: _self.$root.userId,
                    schoolId: _self.$root.schoolId,
                    classId: [_self.$root.classId],
                    userType: 0,
                    coursewaresId: _self.$root.coursewareId,
                    cclId: _self.$root.coursewareId + _self.$root.randomId,
                    userName: _self.$root.lessonInfo.login.user.realName,
                    randomId: _self.$root.randomId,
                    bigImgUrl: responseBody.fileUrl,
                    smallUrl: responseBody.smallUrl,
                    type: 5,
                    id: fileKeys,
                    fileName: fileName,
                    stuNum: 0,
                    fileKey: fileKeys,
                    extension: "jpg",
                    fileSize: imageSize,
                    shareType: _self.pointerType,
                    relatedId: _self.pointerId, //
                }
                _self.$http.post(WEBPACK_API_HOST + 'resource/share?token=' + _self.$root.token, shareData, {
                    'Content-Type': ' application/json;charset=utf-8'
                }).then(response => {
                    _self.ClassTo = false;
                    if (window.JSON.parse(response.bodyText).resultCode == 1) {
                        _self.seeTxt = '已分享至班级圈'
                        _self.toSee = true;
                        setTimeout(function () {
                            _self.toSee = false;
                        }, 2000)

                        _self.putPointer(7, [pointArry]) //打点
                    } else if (window.JSON.parse(response.bodyText).resultCode == 2) {
                        _self.seeTxt = window.JSON.parse(response.bodyText).resultMessage
                        _self.toSee = true;
                        setTimeout(function () {
                            _self.toSee = false;
                        }, 2000)
                    }
                }).catch(e => {
                    if (e.status == 401) {
                        xl.api401();
                        return false;
                    } else {
                        _self.ClassTo = false
                        _self.seeTxt = '请求失败,请重新分享'
                        _self.toSee = true;
                        setTimeout(function () {
                            _self.toSee = false;
                        }, 2000)
                    }
                })
            },
            toClassTion: function () { //确认推送
                var _self = this;
                if (_self.allitem.pdf.val) { //pdf时，生成截图
                    _self.ClassTo = true
                    let imgUrl = toMakePic(_self)
                    let uploadData = {
                        baseImg: imgUrl
                    }
                    //上传图片，上传成功后，保存进云盘
                    _self.$http.post("http://ul.xueleyun.com/upload/base64", uploadData, {
                        emulateJSON: true
                    }).then(response => { //上传棘突
                        //推送到班级
                        _self.toClassTionPdf(response.body.FileKey, response.body.attrs.imageSize) //处理
                    }).catch(e => {
                        if (e.status == 401) {
                            xl.api401();
                            return false;
                        } else {
                            _self.ClassTo = false
                            _self.seeTxt = '请求失败,请重新分享'
                            _self.toSee = true;
                            setTimeout(function () {
                                _self.toSee = false;
                            }, 2000)
                        }
                    })
                } else {
                    var shareData = {
                        userId: _self.$root.userId,
                        jsonStr: window.JSON.stringify({
                            "postType": 7, //"动态类型 1：图文 2：视频 3：投票 4：同步英语测评 5：分享 6：活动 7：文件";云盘资源分享只用到 7
                            "context": "", //帖子内容;"文本内容"
                            "allowEvaluation": 1, //填1;"是否允许评价（0：不允许；1：允许）"
                            "shareSpaces": [{
                                "spaceId": _self.$root.classType ? "15:" + _self.$root.classId : "1:" + _self.$root.classId, //空间ID的值为：“1：classId”;"空间id"
                                "spaceName": _self.$root.className //值为班级名称;"空间名称"
                            }],
                            "files": [{
                                "key": _self.currobj.fileKey,
                                "type": makefiles(_self.currobj.fileType), //"文件类型（-1：其他；0、所有；1：图片；2：视频；3：录音；4：ppt；5：word）",
                                "suffix": _self.currobj.extension,
                                "length": "0",
                                "size": _self.currobj.size,
                                "fileName": _self.currobj.fileName,
                                "fileClass": "2"
                            }],
                            "areas": [], //所有地区都能看，则为空 //后台发动态用
                            "identitys": [] //所有身份都能看，则为空 //后台发动态用
                        })
                    }
                    var argsobj = _self.currobj;
                    var pointArry = {
                        userId: _self.$root.userId,
                        schoolId: _self.$root.schoolId,
                        classId: [_self.$root.classId],
                        userType: 0,
                        coursewaresId: _self.$root.coursewareId,
                        cclId: _self.$root.coursewareId + _self.$root.randomId,
                        userName: _self.$root.lessonInfo.login.user.realName,
                        randomId: _self.$root.randomId,
                        bigImgUrl: argsobj.fileUrl,
                        smallUrl: argsobj.fileSmallUrl,
                        type: 5,
                        id: argsobj.fileKey,
                        fileName: argsobj.fileName,
                        stuNum: 0,
                        fileKey: argsobj.fileKey,
                        extension: argsobj.extension,
                        fileSize: argsobj.size,
                        shareType: _self.pointerType,
                        relatedId: _self.pointerId, //
                    }
                    _self.$http.post(WEBPACK_API_HOST + 'resource/share?token=' + _self.$root.token, shareData, {
                        'Content-Type': ' application/json;charset=utf-8'
                    }).then(response => {
                        // _self.ClassTo=false;
                        if (window.JSON.parse(response.bodyText).resultCode == 1) {
                            _self.seeTxt = '已分享至班级圈'
                            _self.toSee = true;
                            setTimeout(function () {
                                _self.toSee = false;
                            }, 2000)
                            _self.putPointer(7, [pointArry]) //打点
                        } else if (window.JSON.parse(response.bodyText).resultCode == 2) {
                            _self.seeTxt = window.JSON.parse(response.bodyText).resultMessage
                            _self.toSee = true;
                            setTimeout(function () {
                                _self.toSee = false;
                            }, 2000)
                        }
                    }).catch(e => {
                        if (e.status == 401) {
                            xl.api401();
                            return false;
                        } else {
                            // _self.ClassTo=false
                            _self.seeTxt = '请求失败,请重新分享'
                            _self.toSee = true;
                            setTimeout(function () {
                                _self.toSee = false;
                            }, 2000)
                        }
                    })
                }
            },
            sureDone: function () { //确认推送
                var _self = this;
                _self.$http.post(WEBPACK_API_HOST + 'setting?token=' + _self.$root.token, window.JSON.stringify({
                    userId: _self.$root.userId,
                    schoolId: _self.$root.schoolId,
                    paramName: _self.shareTion == 1 ? "resource_push_never_remind" : "resource_share_never_remind",
                    paramValue: '1'
                }), {
                        'Content-Type': ' application/json;charset=utf-8'
                    }).then(response => {

                    }).catch(e => {
                        if (e.status == 401) {
                            xl.openWeb("00000001", "登录", true, "http://smartclass.xueleyun.com/apps/login", "null", true, function (err, data) { })
                            return false;
                        }
                    })
                if (_self.shareTion == 1) { //
                    _self.toPadTion()
                    if (_self.checkVals) { //是否勾选
                        var login = _self.$root.lessonInfo.login;

                        login.options.resource_push_never_remind = 1;
                        xl.setData({ login });
                    }
                    _self.hideAlert();
                } else if (_self.shareTion == 0) { //为0时分享班级圈
                    _self.toClassTion()
                    if (_self.checkVals) { //是否勾选
                        var login = _self.$root.lessonInfo.login;

                        login.options.resource_share_never_remind = 1;
                        xl.setData({ login });
                    }
                    _self.hideAlert();
                }
            },
            hideAlert: function () { //取消推送
                var _self = this;
                _self.showAlert = false
                _self.isFilter = false
                xl.xxxShowingSaveDialog()
                _self.checkVals = false
            },
            toPad: function () { //推送到pad
                var _self = this;
                this.hideCurrItemBar();
                //判断是否开通智慧课堂
                if (this.$root.lessonInfo.login && this.$root.lessonInfo.login.isSmartClass == 1) {
                    if (!_self.PadTo) { //
                        _self.alertText = "确认推送至学生平板？"
                        _self.shareTion = 1; //推送pad为1，分享班级圈 为0
                        var dataOptions = _self.$root.lessonInfo.login.options
                        if (dataOptions.resource_push_never_remind == 1) {
                            _self.toPadTion()
                        } else if (dataOptions.resource_push_never_remind == 0 || dataOptions.resource_push_never_remind == undefined) {
                            _self.showAlert = true
                            _self.isFilter = true
                            xl.xxxShowingSaveDialog(true)
                        }
                    }
                }else{
                    xl.modal("购买智慧课堂");
                }
            },
            toPadTion: function () {
                var _self = this;
                var argsobj = _self.currobj;
                var pointArry = {
                    userId: _self.$root.userId,
                    schoolId: _self.$root.schoolId,
                    classId: [_self.$root.classId],
                    userType: 0,
                    coursewaresId: _self.$root.coursewareId,
                    cclId: _self.$root.coursewareId + _self.$root.randomId,
                    userName: _self.$root.lessonInfo.login.user.realName,
                    randomId: _self.$root.randomId,
                    bigImgUrl: argsobj.fileUrl,
                    smallUrl: argsobj.fileSmallUrl,
                    type: 5,
                    id: argsobj.fileKey,
                    fileName: argsobj.fileName,
                    stuNum: 0,
                    fileKey: argsobj.fileKey,
                    extension: argsobj.extension,
                    fileSize: argsobj.size,
                    shareType: _self.pointerType,
                    relatedId: _self.pointerId,
                }
                var args = [argsobj.fileKey, toPadType(argsobj.fileType), argsobj.fileUrl, argsobj.fileSmallUrl, argsobj.fileName];
                xl.command2Pad('[]', 'share', window.JSON.stringify(args), function (err, o) {
                    if (!err) {
                        _self.seeTxt = '已推送至学生平板'
                        _self.toSee = true;
                        setTimeout(function () {
                            _self.toSee = false;
                        }, 2000)
                        _self.putPointer(7, [pointArry]) //打点
                    }
                });
                _self.PadTo = true;
                setTimeout(function () {
                    _self.PadTo = false;
                }, 3000)
            },
            toExit: function () {
                document.removeEventListener("keydown", this.pptChangePage, false)
                this.$emit('close-yulan')
            },
            putPointer: function (typeItem, content) { //打点方法
                var _self = this
                var pointerData = {
                    userId: _self.$root.userId,
                    coursewareId: _self.$root.coursewareId,
                    randomId: _self.$root.randomId,
                    schoolId: _self.$root.schoolId,
                    classId: _self.$root.classId,
                    type: typeItem,
                    content1: window.JSON.stringify(content)
                }
                _self.$http.post(WEBPACK_API_HOST + 'statistics/eventtracking?token=' + _self.$root.token, pointerData, {
                    'Content-Type': ' application/json;charset=utf-8'
                }).then(response => {
                    if (response.status == 401) {
                        xl.openWeb("00000001", "登录", true, "http://smartclass.xueleyun.com/apps/login", "null", true, function (err, data) { })
                        return false;
                    }
                }).catch(e => {
                    if (e.status == 401) {
                        xl.openWeb("00000001", "登录", true, "http://smartclass.xueleyun.com/apps/login", "null", true, function (err, data) { })
                        return false;
                    }
                })
            },
            getData: function (data) {
                let _self=this;
                this.smallPdf = data;
                this.addPdfPage();
                this.$nextTick(function(){
                    document.querySelector('.pdfCanvas').style.opacity=1;
                    _self.loading = false;//加载完成
                })
            },
            pdfNext: function () {
                this.hideCurrItemBar();
                if (this.loading) {
                    return
                }
                if (this.page == this.numPages - 1) {
                    this.page++;

                } else if (this.page < this.numPages - 1) {
                    this.page++;

                }
                this.addPdfPage();
            },
            pdfLast: function () {
                this.hideCurrItemBar();
                if (this.loading) {
                    return
                }
                if (this.page == 2) {
                    this.page--;

                } else if (this.page > 2) {
                    this.page--;

                }
                this.addPdfPage();
            },
            showThumb: function () {
                var _self = this;
                if (this.loading) {
                    return
                }
                _self.pdfArray.length = _self.numPages; //生成多个站位
                _self.isThub = true;
                _self.$nextTick(function () {
                    makeShow(_self)
                })
            },
            toseeThis: function (index) {
                document.querySelectorAll('.thumbBox ul li').forEach(function (element, nub) {
                    if (element.classList.contains('currPageThumb') && index != nub) {
                        element.classList.remove('currPageThumb');
                    }
                    if (index == nub) {
                        element.classList.add('currPageThumb')
                    }
                });
                animateViewerToAll(this, index)
                this.page = index + 1;
                this.addPdfPage();
                this.chosePen(this.ispen);
                this.onPen = false
            },
            hideMask: function () {
                this.isMaskShow = false
                this.volumeVal = false;
            },
            pdfFun: function () { //pdf功能条
                var _self = this;
                _self.isPdfShow = !_self.isPdfShow;
                _self.onSelectColor = _self.showPen = _self.onPen = _self.onErase = false;
            },
            changePdfStauts: function (item) {
                var _self = this;
                if (this.loading) {
                    return
                }
                var domClientW = document.documentElement.clientWidth;
                var domClientH = document.documentElement.clientHeight;
                var lastD = document.querySelector('.pdfwarp').getBoundingClientRect();
                _self.isPdfShow = false;
                var scaleNub;
                // debugger;
                if (item == 'allheight' && _self.thisPdfStatus != 'allheight') { //高度铺满
                    scaleNub = (domClientH - lastD.height) / lastD.height
                    pdfChange(_self, scaleNub)
                } else if (item == 'allwidth' && _self.thisPdfStatus != 'allwidth') { //宽度铺满
                    scaleNub = (domClientW - lastD.width) / lastD.width
                    pdfChange(_self, scaleNub)
                } else if (item == 'all' && _self.thisPdfStatus != 'all') { //1.3倍
                    scaleNub = Math.max(domClientW / lastD.width, domClientH / lastD.height) * 1.3 - 1
                    pdfChange(_self, scaleNub)
                }
                _self.thisPdfStatus = item;
            },
            pptLast: function () { //ppt上一步
                let _self = this;
                let currStep=_self.pptControl.currentStep;//当前步
                let allStep=_self.pptControl.currentSlide.stepCount;//当前页
                this.hideCurrItemBar();
                //存点画点,是否翻页
                if (_self.loading) {
                    return false;
                }
                try{
                    if(_self.currpptNum==1&&currStep.index==0){
                        return false;
                    }
                }catch(err){
                    
                }
                
                // if(_self.currpptNum==_self.allpptPage&&currStep.index==0&&allStep==1){
                //     _self.pptControl.goToSlide(_self.allpptPage-1)
                // }else{
                    _self.pptControl.goToPreStep();
                // }
                _self.pptNumChangeDraw()
            },
            pptNext: function () { //ppt下一步
                let _self = this;
                let currStep=_self.pptControl.currentStep;//当前步
                let allStep=_self.pptControl.currentSlide.stepCount;//当前页
                //存点画点,是否翻页
                this.hideCurrItemBar();
                if (_self.loading) {
                    return false;
                }
                if(_self.currpptNum==_self.allpptPage&&currStep.index==allStep-1){
                    return false
                }
                _self.pptControl.goToNextStep();
                _self.pptNumChangeDraw()
            },
            pptNumChangeDraw: function () {
                let _self = this;
                if (_self.pptControl.currentSlide.index + 1 == _self.currpptNum) { //等于当前页，未翻页

                } else { //不等于当前也页   翻页，记下画笔，绘制图像
                    //翻页
                    _self.savePptPoint();
                    _self.currpptNum = _self.pptControl.currentSlide.index + 1;
                    _self.addPptPage();
                    _self.drawPptPoint();
                }
            },
            pptshowThumb: function () { //ppt缩略图生成
                let _self = this;
                if (_self.loading) {
                    return false;
                }
                if (_self.ispptFirstThumb) { //第一次点击缩略图
                    let all = _self.pptControl.getThumbList();
                    _self.pptThumb = true;
                    all.then(function (thumbObj) {
                        //small图片
                        for (let keys in thumbObj) {
                            if (typeof thumbObj[keys].index == "number") {
                                _self.pptArray.splice(thumbObj[keys].index, 1, thumbObj[keys].smallImg)
                                // _self.pptArray[thumbObj[keys].index] = thumbObj[keys].smallImg;
                            }
                        }
                        _self.ispptFirstThumb = false;
                    }, function (err) {
                        console.log(err)
                    })
                } else { //展示
                    document.querySelector('.pptThumbBox').style.display = "block";
                }
            },
            pptToseeThis: function (index) { //查看某一页ppt
                let _self = this;
                if (_self.loading) {
                    return false;
                }
                document.querySelectorAll('.pptThumbBox ul li').forEach(function (element, nub) {
                    if (element.classList.contains('currPageThumb') && index != nub) {
                        element.classList.remove('currPageThumb');
                    }
                    if (index == nub) {
                        element.classList.add('currPageThumb')
                    }
                });
                //存点画点
                //存下当前的点
                _self.savePptPoint();
                _self.pptControl.goToSlide(index)
                document.querySelector('.pptThumbBox').style.display = "none";
                _self.currpptNum = _self.pptControl.currentSlide.index + 1;
                _self.addPptPage();
                _self.drawPptPoint();
                //画出当前点
                if (_self.currModePpt) {//ppt状态
                    _self.modePpt()
                } else if (_self.onErase) {//橡皮状态需切换成ppt状态
                    _self.modePpt()
                } else if (_self.allPen) {//画笔状态 还是维持画笔状态
                    _self.chosePen(_self.ispen);
                    _self.onPen = false
                }

            },
            controlNewPpt: function (url, returnData) { //传递参数url,和返回json
                let _self = this;
                // _self.initKey()
                _self.pptControl = new pptCore(url, "pptifm", "newppt");
                _self.pptControl
                    .init()
                    .then(function () {
                        let translate = {
                            x: '',
                            y: ''
                        },
                            pptConfigWidth, pptConfigHeight;
                        let pptOldWidth = _self.pptControl.width,
                            pptOldHeight = _self.pptControl.height;
                        let scrollHeight = document.documentElement.clientHeight - 64,
                            scrollWidth = document.documentElement.clientWidth;
                        if (pptOldWidth >= pptOldHeight) { //横向ppt
                            _self.pptIsHorizontal = true
                            pptConfigWidth = scrollWidth; //宽度铺满
                            pptConfigHeight = pptConfigWidth * pptOldHeight / pptOldWidth;
                            translate.x = 0;
                            translate.y = (scrollHeight - pptConfigHeight) / 2;
                            if (scrollHeight - pptConfigHeight < 0) {
                                pptConfigHeight = scrollHeight;
                                pptConfigWidth = pptConfigHeight * pptOldWidth / pptOldHeight;
                                translate.x = (scrollWidth - pptConfigWidth) / 2;
                                translate.y = 0;
                            }
                        } else { //纵向ppt
                            _self.pptIsHorizontal = false
                            pptConfigHeight = scrollHeight;
                            pptConfigWidth = pptConfigHeight * pptOldWidth / pptOldHeight;
                            translate.x = (scrollWidth - pptConfigWidth) / 2;
                            translate.y = 0;
                            if (scrollWidth - pptConfigWidth < 0) {
                                pptConfigWidth = scrollWidth; //宽度铺满
                                pptConfigHeight = pptConfigWidth * pptOldHeight / pptOldWidth;
                                translate.x = 0;
                                translate.y = (scrollHeight - pptConfigHeight) / 2;
                            }
                        }
                        _self.pptControl.show(translate, pptConfigWidth, pptConfigHeight) //展示
                        _self.addPptPage();
                        _self.loading = false;
                        _self.initKey()
                    }, function (err) {
                        console.log(err)
                    }) //初始化ppt
            },
            savePptPoint: function () { //ppt存点
                let _self = this;
                _self.pptAllPoint["pptPage" + _self.currpptNum] = window.JSON.parse(window.JSON.stringify(_self.allLine))
            },
            drawPptPoint: function () { //ppt画点
                let _self = this;
                _self.allLine = _self.pptAllPoint["pptPage" + _self.currpptNum] ? _self.pptAllPoint["pptPage" + _self.currpptNum] : {};
                addListen.draw("", this, "");
            },
            pptChangePage(e) {
                let _self = this;
                if (_self.loading) {
                    return false;
                }
                let codeNum = e.keyCode;
                if (codeNum == 38 || codeNum == 37 || codeNum == 33) {
                    e.preventDefault();
                    _self.pptLast()
                } else if (codeNum == 40 || codeNum == 39 || codeNum == 34) {
                    e.preventDefault();
                    _self.pptNext()
                }
            },
            initKey: function () {
                let _self = this;


                document.addEventListener("keydown", _self.pptChangePage, false)


            },
            hideCurrItemBar: function () {//隐藏当前的分类的工具条
                let _self = this;
                addListen.hidePens(_self);
                _self.allDelet = true;
            },
            addPptPage:function(){
                let _self=this;
                let currStep=_self.pptControl.currentStep;//当前步
                let allStep=_self.pptControl.currentSlide.stepCount;//当前页总步数
                //当前页多少步
                //变更页码后，调这个函数
                // _self.currpptNum//ppt当前页
                // _self.allpptPage//ppt所有页
                try{
                    if(_self.currpptNum==1&&currStep.index==0){
                        _self.pageObj.pptFirst=true;
                    }else{
                        _self.pageObj.pptFirst=false;
                    }
                    if(_self.currpptNum==_self.allpptPage&&currStep.index==allStep-1){
                        _self.pageObj.pptLast=true
                    }else{
                        _self.pageObj.pptLast=false
                    }
                    
                }catch(err){
                    if(_self.currpptNum==1){
                        _self.pageObj.pptFirst=true;
                    }else{
                        _self.pageObj.pptFirst=false;
                    }
                }
                
            },
            addPdfPage:function(){
                let _self=this;
                // _self.page//当前页
                // _self.numPages//总页码
                if(_self.page==1){
                    _self.pageObj.pdfFirst=true;
                }else{
                    _self.pageObj.pdfFirst=false;
                }
                if(_self.page==_self.numPages){
                    _self.pageObj.pdfLast=true
                }else{
                    _self.pageObj.pdfLast=false
                }
            },
            onvedioTrun:function(){
                let _self=this;
                _self.vedioTrun+=90;
                if(_self.vedioTrun==360){
                    _self.vedioTrun=0;
                }
                _self.checkVedio();
                
            },
            checkVedio:function(){
                let _self = this;
                if (_self.vedioTrun % 180 == 0) {//旋转到了水平
                    if (_self.vedioFull) {//有一遍铺满
                        document.querySelector('.vedioObj').style.width = '100%';
                        document.querySelector('.vedioObj').style.height = '100%';
                        document.querySelector('.vedioObj').style.marginLeft = -400 + 'px';//居中
                        document.querySelector('.vedioObj').style.marginTop = -225 + 'px';//居中
                    } else {//内容居中
                        document.querySelector('.vedioObj').style.width = _self.oldVedio.width + 'px';
                        document.querySelector('.vedioObj').style.height = _self.oldVedio.height + 'px';
                        document.querySelector('.vedioObj').style.marginLeft = -_self.oldVedio.width / 2 + 'px';//居中
                        document.querySelector('.vedioObj').style.marginTop = -_self.oldVedio.height / 2 + 'px';//居中
                    }
                } else {//旋转到了垂直 90||270
                    if (_self.vedioFull) {//有一遍铺满
                        document.querySelector('.vedioObj').style.width = '450px';
                        document.querySelector('.vedioObj').style.height = '800px';
                        document.querySelector('.vedioObj').style.marginLeft = -225 + 'px';//居中
                        document.querySelector('.vedioObj').style.marginTop = -400 + 'px';//居中
                    } else {//内容居中
                        console.log('4501')
                        console.log(_self.oldVedio.width)
                        if (_self.oldVedio.width > 450) {
                            console.log('450')
                            document.querySelector('.vedioObj').style.width = 450 + 'px';
                            document.querySelector('.vedioObj').style.height = 'auto';
                            document.querySelector('.vedioObj').style.marginLeft = -450 / 2 + 'px';//居中
                            document.querySelector('.vedioObj').style.marginTop = -450 * (_self.oldVedio.height / _self.oldVedio.width) / 2 + 'px';//居中
                        }
                    }
                }
                document.querySelector('.vedioObj').style.transform= "rotate(" + _self.vedioTrun + "deg)"
            },
            screenVedioChange:function(e){
                var _self = this;
                var element = document.querySelector('.allVedio')
                if (!_self.fullScreen) {//不是全屏  变为全屏
                    this.hideCurrItemBar();
                    _self.fullScreen = true;
                    _self.$nextTick(function () {
                        document.querySelector('.vedioObj').style.transform = 'initial';
                        document.querySelector('.allVedio .thisVideo').style.transform = "rotate(" + _self.vedioTrun + "deg)";
                        // document.querySelector('.allVedio .thisVideo').style.height = screen.height - 44 + 'px';
                        // document.querySelector('.allVedio .thisVideo').style.width = screen.width + 'px';
                        //设置包含盒子
                        document.querySelector('.fullScreenBar .vedioPress').style.width = document.documentElement.clientWidth - 171 + 'px';//设置工具条

                        //全屏后判断逻辑
                         if (_self.vedioTrun % 180 == 0) {//旋转到了水平
                                document.querySelector('.allVedio .thisVideo').style.width= screen.width+'px';
                                document.querySelector('.allVedio .thisVideo').style.height = screen.height-44 + 'px';
                        } else {//旋转到了垂直 90||270
                                console.log(123)
                                console.log(screen.height - 44)
                                document.querySelector('.allVedio .thisVideo').style.width = screen.height- 44 + 'px';
                                document.querySelector('.allVedio .thisVideo').style.height = screen.width + 'px';
                        }
                        document.querySelector('.vedioObj').style.marginLeft = 'auto';
                        document.querySelector('.vedioObj').style.marginTop = 'auto';
                        document.querySelector('.vedioObj').style.width = '100%';
                        document.querySelector('.vedioObj').style.height = '100%';
                    })
                } else {
                    _self.fullScreen = false;
                    _self.checkVedio();//重置回来
                    _self.$nextTick(function () {
                        document.querySelector('.allVedio .thisVideo').style.height = '450px';
                        document.querySelector('.allVedio .thisVideo').style.width = '800px';
                        document.querySelector('.vedioFun .vedioPress').style.width = '628px';
                        document.querySelector('.allVedio .thisVideo').style.transform = 'initial';
                    })
                }
            }
        },
        components: {
            pdf
        },
        computed: {

        },
        filters: {
            toHours: function (val) {
                return fix(parseInt(val / 60), 2) + ":" + fix(val % 60, 2);
            }
        },
        beforeDestroy:function(){
            let _self = this;
            // 存下当前页的
            window.removeEventListener('resize',_self.newresize.fixFullScreen,false)//注销监听全屏时间
            onExitscreenchange(_self.screenVedioChange)
        }
    }











    //nodeList pollyfill to add arrayMethods

    var arrayMethods = Object.getOwnPropertyNames(Array.prototype);
    arrayMethods.forEach(attachArrayMethodsToNodeList);

    function attachArrayMethodsToNodeList(methodName) {
        if (methodName !== "length") {
            NodeList.prototype[methodName] = Array.prototype[methodName];
        }
    };





    function fix(num, length) {
        return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
    }

    function makeTrue(_self, vals) {
        for (var key in _self.allitem) {
            if (vals == key) {
                _self.allitem[key].val = true;
            } else {
                _self.allitem[key].val = false;
            }
        }
    }

    function makefiles(type) {
        switch (type) {
            case 6:
                return 1
                break;
            case 5:
                return 3
                break;
            case 4:
                return 2
                break;
            case 3:
                return 5
                break;
            case 2:
                return 4
                break;
        }
    }


    function makeShow(_self) {
        var that = _self.pdfobj;
        let thumbWidth = _self.isHorizontal ? 280 : 200;
        let thumbHeight = _self.isHorizontal ? 200 : 280;
        let promiseArray = getThumbnailsStart(1, _self.numPages, thumbWidth, thumbHeight, that);
        if (!_self.pdfobj.isDone) {
            promiseArray.reduce((promise, thumbPromise) => { //注意这里的promise 链式方法
                return promise.then(() => {
                    return thumbPromise.then((url) => {
                        let imgIndex = url.index;
                        let src = url.url;
                        let Img = document.querySelector('.canvasImg' + (imgIndex - 1))
                        _self.pdfArray.splice([imgIndex - 1], 1, src);
                        Img.onload = () => {
                            URL.revokeObjectURL(src);
                        }
                    })
                })
                that.isDone = true;
            }, Promise.resolve());
        }
        if (document.querySelector('.thumbBox')) {
            document.querySelector('.thumbBox ul').style.opacity = "0";
            document.querySelector('.thumbBox').style.display = 'block';
            document.querySelectorAll('.thumbBox ul li').forEach(function (element, index) {
                if (element.classList.contains('currPageThumb')) {
                    element.classList.remove('currPageThumb');
                }
            });
            document.querySelectorAll('.thumbBox ul li')[_self.page - 1].classList.add('currPageThumb')
        }
        animateViewerToThumb(_self, thumbWidth, thumbHeight)
    }

    function getThumbnailsStart(fromIndex, to, width, height, that) { //开始缩放
        let scale = computScale(height, width, that);
        let promiseArray = [];
        for (let i = fromIndex; i <= to; i++) {
            let promise = getThumbnail(i, width, height, that);
            promiseArray.push(promise);
        }
        return promiseArray;
    }

    function computScale(h, w, that) { //缩放比例
        var hScale = h / that.pageHeight;
        var wScale = w / that.pageWidth;
        var scale = hScale < wScale ? hScale : wScale;
        return parseFloat(scale.toFixed(2));
    }

    function getThumbnail(index, width, height, that) {
        let scale = computScale(height, width, that);
        var promise = new Promise((resolve, reject) => {
            const intervalId = setInterval(() => {
                if (lockCacheCanvas()) {
                    clearInterval(intervalId);
                    that.pdfDoc && that.pdfDoc.getPage(index).then(function (page) {
                        let viewportNow = page.getViewport(scale);
                        that.cacheCanvas.height = viewportNow.height;
                        that.cacheCanvas.width = viewportNow.width;
                        that.cacheContext.clearRect(0, 0, that.cacheCanvas.width, that.cacheCanvas.height);
                        that.cacheContext.save();
                        var renderContext = {
                            canvasContext: that.cacheContext,
                            viewport: viewportNow
                        };
                        that.renderTask && that.renderTask.cancel();
                        that.renderTask = page.render(renderContext);
                        that.renderTask.then(() => {
                            that.cacheCanvas.toBlob((result) => {
                                let imgUrl = URL.createObjectURL(result);
                                that.cacheContext.restore();
                                releaseCacheCanvasLock();
                                resolve({
                                    index: index,
                                    url: imgUrl
                                });
                            });

                        })
                    });
                }
            }, 10);

        });
        return promise;
    }

    function createTempImage(_self) {
        if (_self.tempImage) {
            document.querySelector('.warpBoard').removeChild(_self.tempImage);
            _self.tempImage = null;
        }
        _self.tempImage = document.createElement('img');
        _self.tempImage.style.display = "none";
        _self.tempImage.style.top = '0';
        _self.tempImage.style.left = '0';
        _self.tempImage.style.zIndex = "335";
        _self.tempImage.style.position = "absolute";
        document.querySelector('.warpBoard').appendChild(_self.tempImage);
    }

    function makePdfPic(_self) { //大图生成图片
        let imgUrl
        let CanvasPdf = document.querySelector('.pdfCanvas')
        let ContentPdf = CanvasPdf.getContext('2d');
        ContentPdf.save();
        CanvasPdf.toBlob((result) => {
            imgUrl = URL.createObjectURL(result);
            _self.tempImage.src = imgUrl;
            ContentPdf.restore();
        });
    }

    function animateViewerToThumb(_self, thumbWidth, thumbHeight) {
        createTempImage(_self);
        let that = _self;
        makePdfPic(_self)
        let thumImg = document.querySelector('.canvasImg' + (_self.page - 1));
        let thumImgOldPosition = thumImg.offsetTop;
        document.querySelector('.thumbBox').scrollTop = thumImgOldPosition;
        let thumbImgPosition = {
            x: thumImg.parentNode.getBoundingClientRect().left,
            y: thumImg.parentNode.getBoundingClientRect().top
        };
        _self.tempImage.style.width = document.querySelector('.pdfwarp').getBoundingClientRect().width + "px";
        _self.tempImage.style.height = document.querySelector('.pdfwarp').getBoundingClientRect().height + "px";


        let keyframeStep1 = [{
            transform: 'translateY(0px) translateX(0px) scaleY(1) scaleX(1)',
            transformOrigin: '0 0',
            opacity: 0
        }, {
            transform: 'translateY(' + document.querySelector('.pdfwarp').getBoundingClientRect().top + 'px) translateX(' + document.querySelector('.pdfwarp').getBoundingClientRect().left + 'px) scaleY(1) scaleX(1)',
            transformOrigin: '0 0',
            opacity: 0
        }];
        let tempImagePlayerStep1 = _self.tempImage.animate(keyframeStep1, {
            iterations: 1,
            iterationStart: 0,
            delay: 0,
            endDelay: 0,
            direction: 'normal',
            duration: 0,
            fill: 'forwards'
        });

        // console.log(tempImagePlayerStep1)
        tempImagePlayerStep1.onfinish = function () {
            that.tempImage.onload = () => {
                thumImg.style.display = "none";
                that.tempImage.style.display = "block";
                let scaleX = thumbWidth / document.querySelector('.pdfwarp').getBoundingClientRect().width;
                let scaleY = thumbHeight / document.querySelector('.pdfwarp').getBoundingClientRect().height;
                var keyframes = [{
                    transform: 'translateY(' + document.querySelector('.pdfwarp').getBoundingClientRect().top + 'px) translateX(' + document.querySelector('.pdfwarp').getBoundingClientRect().left + 'px) scaleY(1) scaleX(1)',
                    transformOrigin: '0 0',
                    opacity: 1
                }, {
                    transform: 'translateY(' + thumbImgPosition.y + 'px) translateX(' + thumbImgPosition.x + 'px) scaleY(' + scaleY + ') scaleX(' + scaleX + ')',
                    transformOrigin: '0 0',
                    opacity: 1

                }];
                var keyframes1 = [{
                    opacity: 0
                }, {
                    opacity: 1
                }]
                let animateConfig = {
                    iterations: 1,
                    iterationStart: 0,
                    delay: 0,
                    endDelay: 0,
                    direction: 'normal',
                    duration: 300,

                    easing: 'ease-out',
                };
                let tempImagePlayer = that.tempImage.animate(keyframes, animateConfig);
                document.querySelector('.thumbBox ul').animate(keyframes1, animateConfig);
                tempImagePlayer.onfinish = function () {
                    that.tempImage.style.display = "none";
                    thumImg.style.display = "block";
                    document.querySelector('.thumbBox ul').style.opacity = "1";
                };
            };
        }

    }

    function pdfTranslate(_self) {
        var domClientW = document.documentElement.clientWidth;
        var domClientH = document.documentElement.clientHeight;
        var widthDt, leftDt, heightDt, topDt, rightDt, bottomDt, centerX, centerY;
        var lastD = document.querySelector('.pdfwarp').getBoundingClientRect();
        var lastDoM = document.querySelector('.pdfwarp')
        // amount.pdfScalePoint(_self,-0.1,'after','')//存下要缩放的点，画笔跟随存点
        if ((!lastDoM.style.left) || (lastDoM.style.left == '50%')) { } else {
            centerX = Number(lastD.left) + Number(lastD.width) / 2; //缩放之前的中心点x到视口的位置
            centerY = Number(lastD.top) + Number(lastD.height) / 2; //缩放之前的中心点y到视口的位置
        }
        _self.dirW = 1 * _self.dirW;
        _self.dirH = 1 * _self.dirH;

        var isCorrectY = false;
        var isCorrectX = false;
        if (Number(lastD.top) < 0 && (lastD.top + lastD.height <= domClientH)) {
            lastDoM.style.top = Number(lastDoM.style.top.replace(/px/g, '')) + ((_self.dirH / 0.9) * 0.1) + "px";
            isCorrectY = true;
        }
        if (Number(lastD.left) < 0 && (lastD.left + lastD.width <= domClientW)) {
            lastDoM.style.left = Number(lastDoM.style.left.replace(/px/g, '')) + ((_self.dirW / 0.9) * 0.1) + "px"
            isCorrectX = true;
        }
        if (Number(lastD.top) >= 0 && (lastD.top + lastD.height > domClientH)) {
            isCorrectY = true;

        }
        if (Number(lastD.left) >= 0 && (lastD.left + lastD.width > domClientW)) {
            isCorrectX = true;

        }
        if ((!lastDoM.style.left) || (lastDoM.style.left == '50%')) { } else {
            !isCorrectX && (lastDoM.style.left = centerX - _self.dirW / 2 + 'px');
            !isCorrectY && (lastDoM.style.top = centerY - _self.dirH / 2 + 'px');
        }
        //widthDt,leftDt,heightDt,topDt,_self
        //widthDt实际占有屏幕的百分比，leftDt左边超出的百分比
        _self.$nextTick(function () {
            var pdfDome = document.querySelector('.pdfwarp');
            var DomeRect = pdfDome.getBoundingClientRect()
            // amount.pdfScalePoint(_self,-0.1,'before',addListen.draw,addListen)//重绘缩放的所有的点,画笔是否跟随
            leftDt = (DomeRect.left >= 0) ? 0 : (-DomeRect.left / DomeRect.width)
            topDt = (DomeRect.top >= 0) ? 0 : (-DomeRect.top / DomeRect.height);
            widthDt = (domClientW >= DomeRect.width) ? 1 : (domClientW / DomeRect.width)
            heightDt = (domClientH >= DomeRect.height) ? 1 : (domClientH / DomeRect.height)
            if (Number(DomeRect.top) < 0 && (DomeRect.top + DomeRect.height <= domClientH)) {
                pdfDome.style.top = DomeRect.top + domClientH - (DomeRect.height + DomeRect.top) + "px";
            }
            if (Number(DomeRect.left) < 0 && (DomeRect.left + DomeRect.width <= domClientW)) {
                lastDoM.style.left = DomeRect.left + domClientW - (DomeRect.width + DomeRect.left) + "px";
            }
            if (Number(DomeRect.top) >= 0 && (DomeRect.top + DomeRect.height > domClientH)) {
                pdfDome.style.top = 0 + 'px'
            }
            if (Number(DomeRect.left) >= 0 && (DomeRect.left + DomeRect.width > domClientW)) {
                pdfDome.style.left = 0 + 'px'
            }
            initFun.toThumbControl(widthDt, leftDt, heightDt, topDt, _self)
        })
    }

    function animateViewerToAll(_self, index) {
        let target = document.querySelector('.canvasImg' + index)
        createTempImage(_self);
        if (target.classList.contains('canvasImg' + index)) {
            let order = index + 1;
            let imgPosition = {
                x: target.getBoundingClientRect().left,
                y: target.getBoundingClientRect().top
            }
            let thumbWidth = _self.pdfobj.isHorizontal ? 280 : 200;
            let thumbHeight = _self.pdfobj.isHorizontal ? 200 : 280;
            let scaleX = document.querySelector('.pdfwarp').getBoundingClientRect().width / thumbWidth;
            let scaleY = document.querySelector('.pdfwarp').getBoundingClientRect().height / thumbHeight;
            let transX = document.querySelector('.pdfwarp').getBoundingClientRect().left;
            let transY = document.querySelector('.pdfwarp').getBoundingClientRect().top;
            let that = _self;
            _self.tempImage.style.width = thumbWidth + "px";
            _self.tempImage.style.height = thumbHeight + "px";
            let thumPromise = getThumbnail(order, document.querySelector('.pdfwarp').getBoundingClientRect().width, document.querySelector('.pdfwarp').getBoundingClientRect().height, _self.pdfobj);
            thumPromise.then((uInfo) => {
                that.tempImage.setAttribute("src", uInfo.url);
                that.tempImage.style.top = imgPosition.y.toString();
                that.tempImage.style.left = imgPosition.x.toString()
                pdfTranslate(_self);
                target.style.display = "none";
                let keyframeStep1 = [{
                    transform: 'translateY(0px) translateX(0px) scaleY(1) scaleX(1)',
                    transformOrigin: '0 0',
                    opacity: 0
                }, {
                    transform: 'translateY(' + imgPosition.y + 'px) translateX(' + imgPosition.x + 'px) scaleY(1) scaleX(1)',
                    transformOrigin: '0 0',
                    opacity: 0
                }];
                let tempImagePlayerStep1 = that.tempImage.animate(keyframeStep1, {
                    iterations: 1,
                    iterationStart: 0,
                    delay: 0,
                    endDelay: 0,
                    direction: 'normal',
                    duration: 0,
                    fill: 'forwards'
                });

                tempImagePlayerStep1.onfinish = function () {
                    that.tempImage.style.display = "block";
                    var keyframes = [{
                        transform: 'translateY(' + imgPosition.y + 'px) translateX(' + imgPosition.x + 'px) scaleY(1) scaleX(1)',
                        transformOrigin: '0 0',
                        opacity: 1
                    }, {
                        transform: 'translateY(' + transY + 'px) translateX(' + transX + 'px) scaleY(' + scaleY + ') scaleX(' + scaleX + ')',
                        transformOrigin: '0 0',
                        opacity: 1

                    }];
                    var keyframes1 = [{
                        opacity: 1
                    }, {
                        opacity: 0
                    }]
                    let animateConfig = {
                        iterations: 1,
                        iterationStart: 0,
                        delay: 0,
                        endDelay: 0,
                        direction: 'normal',
                        duration: 300,
                        easing: 'ease-out',
                    };
                    let tempImagePlayer = that.tempImage.animate(keyframes, animateConfig);
                    document.querySelector('.thumbBox ul').animate(keyframes1, animateConfig);
                    tempImagePlayer.onfinish = function () {
                        hideAnimale(_self);
                        target.style.display = "block";
                        document.querySelector('.thumbBox').style.display = 'none';
                    };

                };
            });

        }
    }


    function hideAnimale(_self) {
        document.querySelector('.thumbBox').style.display = "none";
        document.querySelector('.thumbBox ul').style.opacity = "1";
        if (_self.tempImage) {
            _self.tempImage.style.display = "none";
        }

    }



    function lockCacheCanvas() {
        if (cacheCanvasIsLocked) {
            return false;
        } else {
            cacheCanvasIsLocked = true;
            return true;
        }
    }

    function releaseCacheCanvasLock() {
        cacheCanvasIsLocked = false;
    }
    // 2：ppt
    // 3：word
    // 4：video (mp4,flv)
    // 5：voice (mp3)
    // 6：jpg
    //1：图片；2：视频；3：录音；4：ppt；5：word
    function toPadType(nub) {
        switch (nub) {
            case 2:
                return 6
                break;
            case 3:
                return 5
                break;
            case 4:
                return 3
                break;
            case 5:
                return 2
                break;
            case 6:
                return 1
                break;
            default:
                break;
        }
    }


    function toImgControl(widthRatio, leftRatio, heightRatio, topRatio, _self) {
        if (widthRatio != 1 || heightRatio != 1) {
            document.querySelector('.picMove').style.display = 'block';
        }
        var docPdf = document.querySelector('.picPointer')
        var isVertical = !_self.imgHorizontal;
        var imgHeight = document.querySelector('.picMove img').getBoundingClientRect().height;
        var imgWidth = document.querySelector('.picMove img').getBoundingClientRect().width;
        if (_self.allitem.image.turn == 90 || _self.allitem.image.turn == 270) {
            isVertical = !isVertical
        }
        _self.picMoveW = widthRatio * imgWidth + 'px';
        _self.picMoveH = heightRatio * imgHeight + 'px';

        //160表示pdf_page_view_border的border的宽度
        docPdf.style.left = (-160 + (isVertical ? (160 - imgWidth) / 2 : 0) + leftRatio * imgWidth) + "px";
        docPdf.style.top = (-160 + (isVertical ? 0 : (160 - imgHeight) / 2) + topRatio * imgHeight) + "px";
        docPdf.style.transform = 'inherit';
        //限制高亮窗口拖拽范围
        _self.minLeft = -160 + (isVertical ? (160 - imgWidth) / 2 : 0);
        _self.minTop = -160 + (isVertical ? 0 : (160 - imgHeight) / 2);
        _self.maxLeft = -160 + (isVertical ? (160 - imgWidth) / 2 : 0) + imgWidth - Number(_self.picMoveW.replace(/px/g, ''));
        _self.maxTop = -160 + (isVertical ? 0 : (160 - imgHeight) / 2) + imgHeight - Number(_self.picMoveH.replace(/px/g, ''));
        if (widthRatio == 1 && heightRatio == 1) {
            document.querySelector('.picMove').style.display = 'none';
        }
    }


    function pdfChange(_self, scaleNub) {
        var domClientW = document.documentElement.clientWidth;
        var domClientH = document.documentElement.clientHeight;
        var widthDt, leftDt, heightDt, topDt, rightDt, bottomDt, centerX, centerY;
        var lastD = document.querySelector('.pdfwarp').getBoundingClientRect();
        var lastDoM = document.querySelector('.pdfwarp')
        amount.pdfScalePoint(_self, scaleNub, 'after', '') //存下要缩放的点
        _self.dirW = (1 + scaleNub) * _self.dirW;
        _self.dirH = (1 + scaleNub) * _self.dirH;
        lastDoM.style.top = 0 + 'px';
        lastDoM.style.left = domClientW / 2 - _self.dirW / 2 + 'px'

        //widthDt,leftDt,heightDt,topDt,_self
        //widthDt实际占有屏幕的百分比，leftDt左边超出的百分比
        _self.$nextTick(function () {
            var pdfDome = document.querySelector('.pdfwarp');
            var DomeRect = pdfDome.getBoundingClientRect()
            amount.pdfScalePoint(_self, scaleNub, 'before', addListen.draw, addListen) //重绘缩放的所有的点,画笔是否跟随
            leftDt = (DomeRect.left >= 0) ? 0 : (-DomeRect.left / DomeRect.width)
            topDt = (DomeRect.top >= 0) ? 0 : (-DomeRect.top / DomeRect.height);
            widthDt = (domClientW >= DomeRect.width) ? 1 : (domClientW / DomeRect.width)
            heightDt = (domClientH >= DomeRect.height) ? 1 : (domClientH / DomeRect.height)
            lastDoM.style.top = 0 + 'px';
            lastDoM.style.left = domClientW / 2 - _self.dirW / 2 + 'px'
            initFun.toThumbControl(widthDt, leftDt, heightDt, topDt, _self)
        })
    }

    function savePagepoint(_self, oldval) {
        var lastD = document.querySelector('.pdfwarp').getBoundingClientRect();
        var pagePost = {}
        for (var key in _self.allLine) {
            pagePost[key] = {
                point: [],
                style: {}
            }; //所有差值存入之前的空数组中
            pagePost[key].style = _self.allLine[key].style; //存下笔迹样式
            _self.allLine[key].point.forEach(function (element, index) { //遍历所有线的点
                var diff = {
                    x: element.x - lastD.left, //对每个点的相对点的差值做比例缩放
                    y: element.y - lastD.top
                }
                pagePost[key].point.push(diff)
            });
        }
        _self.pdfPageLine[oldval] = pagePost
        _self.domeProperty[oldval] = { //存下原来的属性，dome的宽高
            width: lastD.width,
            height: lastD.height
        }
    }

    function drawPagepoint(_self, newVal) {
        var lastD = document.querySelector('.pdfwarp').getBoundingClientRect();
        var oldW, scaleNub;
        if (_self.pdfPageLine[newVal]) {
            _self.allLine = {};
            oldW = _self.domeProperty[newVal].width;
            scaleNub = (lastD.width - oldW) / oldW;
            for (var key in _self.pdfPageLine[newVal]) {
                _self.allLine[key] = {};
                _self.allLine[key].point = [];
                _self.allLine[key].style = _self.pdfPageLine[newVal][key].style;
                _self.pdfPageLine[newVal][key].point.forEach(function (element, index) {
                    var lines = {
                        x: lastD.left + element.x * (1 + scaleNub),
                        y: lastD.top + element.y * (1 + scaleNub)
                    }
                    _self.allLine[key].point.push(lines)
                })
            }
            addListen.draw('', _self, '')
        } else {
            _self.allLine = {};
            addListen.draw('', _self, '')
        }
    }

    function onFullscreenchange(callback) { //退出全屏
        document.addEventListener('fullscreenchange',callback);

        document.addEventListener('webkitfullscreenchange',callback);

        document.addEventListener('mozfullscreenchange',callback);

        document.addEventListener('MSFullscreenChange',callback);
    }
    function onExitscreenchange(callback){
        document.removeEventListener('fullscreenchange',callback);

        document.removeEventListener('webkitfullscreenchange',callback);

        document.removeEventListener('mozfullscreenchange',callback);

        document.removeEventListener('MSFullscreenChange',callback);
    }
    //生成截图


    function toMakePic(_self) { //获取两个canvas
        let drawCanvas = document.querySelector('.drawPath')
        let pdfCanvas = document.querySelector('.pdfCanvas')
        let mapping = document.querySelector(".mapping");
        let mapContent = mapping.getContext('2d')
        //通过设置画入canvas的大小
        mapping.width = _self.pdfobj.isHorizontal ? 1500 : (pdfCanvas.getBoundingClientRect().width / pdfCanvas.getBoundingClientRect().height) * 1500
        mapping.height = _self.pdfobj.isHorizontal ? (pdfCanvas.getBoundingClientRect().height / pdfCanvas.getBoundingClientRect().width) * 1500 : 1500
        mapContent.clearRect(0, 0, mapping.width, mapping.height) //清空当前canvas
        //是否为横向false为纵向
        //将pdf画到过度canvas上面
        // debugger
        let scale = mapping.width / pdfCanvas.getBoundingClientRect().width
        let drawLine = amount.transpointPointer(_self, pdfCanvas.getBoundingClientRect().left, pdfCanvas.getBoundingClientRect().top, scale)
        mapContent.drawImage(pdfCanvas, 0, 0, pdfCanvas.getBoundingClientRect().width, pdfCanvas.getBoundingClientRect().height, 0, 0, mapping.width, mapping.height)
        addListen.drawThis(_self, drawLine, mapping);
        mapping.style.position = 'absolute';
        // mapping.style.zIndex="10000";
        // mapping.style.display='block';
        return mapping.toDataURL('image/jpeg', 1.0)
    }
</script>