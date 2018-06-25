//返回顶部
var btn1=document.querySelector("#btn1");
if(btn1 != null){
	window.onscroll=function(){
		if(document.documentElement.scrollTop>200){
			document.querySelector("#btn1").style.display="block";
		}else{
			document.querySelector("#btn1").style.display="none";
		}
	}
	document.querySelector("#btn1").onclick=function(){
		$('body,html').animate({scrollTop:0},500);
	}
}
//为你推荐
new Vue({
	el:'.tuijian',
	data: {
		tuijians:[
			{img:"images/tuijian/tuijian_01.png",text1:"坚果  Quick Charge 4+ 快速充电器",text2:"全面兼容的  18w 快速充电",text3:"￥59.00"},
			{img:"images/tuijian/tuijian_02.png",text1:"坚果  Type-C To Type-C 数据线",text2:"TPE 环保材质",text3:"￥39.00"},
			{img:"images/tuijian/tuijian_03.png",text1:"坚果  R1 TPU 软胶半透明保护套",text2:"半透明设计，质感精英",text3:"￥49.00"},
			{img:"images/tuijian/tuijian_04.png",text1:"坚果  R1 TPU 软胶红色保护套",text2:"经典配色，质感精英",text3:"￥49.00"},
			{img:"images/tuijian/tuijian_05.png",text1:"坚果  R1 ‘足迹’系列保护套 画家埃舍尔",text2:"出生1898年6月17日",text3:"￥99.00"},
			{img:"images/tuijian/tuijian_06.png",text1:"坚果  R1 ‘足迹’系列保护套  《小王子》",text2:"1990年6月29日",text3:"￥99.00"},
			{img:"images/tuijian/tuijian_07.png",text1:"Smartisan 快充移动电源",text2:"双向快充，轻盈便捷。",text3:"￥149.00"},
			{img:"images/tuijian/tuijian_08.png",text1:"坚果移动电源",text2:"轻盈便捷，多重电路保护。",text3:"￥49.00"},
			{img:"images/tuijian/tuijian_09.png",text1:"坚果蓝牙小黑耳机",text2:"一副干净的蓝牙耳机",text3:"￥99.00"},
			{img:"images/tuijian/tuijian_10.png",text1:"Smartisan 圈铁线控耳机",text2:"极简造型，专业级调音",text3:"￥139.00"},
			{img:"images/tuijian/tuijian_11.png",text1:"Smartisan 原装快充充电器 18W",text2:"18W 安全快充",text3:"￥39.00"},
			{img:"images/tuijian/tuijian_12.png",text1:"Smartisan 双口 & 快充车载充电器",text2:"铝合金机身  智能调节",text3:"￥39.00"},
			{img:"images/tuijian/tuijian_13.png",text1:"坚果  Por 2",text2:"漂亮的不像实力派",text3:"￥1，799.00"},
			{img:"images/tuijian/tuijian_14.png",text1:"坚果  Por",text2:"漂亮的不像实力派",text3:"￥2，299.00"},
			{img:"images/tuijian/tuijian_15.png",text1:"坚果 Pro 钢化玻璃",text2:"进口钢化玻璃材质",text3:"￥9.90"},
			{img:"images/tuijian/tuijian_16.png",text1:"坚果 3 绒布国旗保护套",text2:"质感精良、完美贴合",text3:"￥29.00"},
			{img:"images/tuijian/tuijian_17.png",text1:"坚果 3 前屏钢化玻璃",text2:"超强透光率、耐刮花、防指纹",text3:"￥29.00"},
			{img:"images/tuijian/tuijian_18.png",text1:"坚果 3 ‘足迹’ 背贴",text2:"超强柔韧度、弧边设计",text3:"￥39.00"},
			{img:"images/tuijian/tuijian_19.png",text1:"畅呼吸智能空气净化器超级除甲醛版",text2:"超强净化能力、超低噪音、超长寿命",text3:"￥2，999.00"},
			{img:"images/tuijian/tuijian_20.png",text1:"畅呼吸智能空气净化器 · 标准版",text2:"超强净化能力、超低噪音、超长寿命",text3:"￥2，999.00"},
			{img:"images/tuijian/tuijian_21.png",text1:"畅呼吸防护口罩",text2:"五层防护、畅快呼吸",text3:"￥99.00"},
			{img:"images/tuijian/tuijian_22.png",text1:"除霾除甲醛高效复合滤芯",text2:"精选双层防护材质...",text3:"￥799.00"},
		]
	},
})
//首页 js效果
var ind=document.querySelector(".index");
if(ind != null){
	//轮播图
	var swiper = new Swiper('.swiper-container', {
	    spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
	    pagination: {
	    	el: '.swiper-pagination',
	        clickable: true,
	    },
	});
	//热销
	new Vue({
		el:'.rexiao',
		data: {
			rexiaos:[
				{img:"images/rexiao/rexiao_01.png",text1:"坚果  R1",text2:"次时代旗舰手机",text3:"￥3，499.00"},
				{img:"images/rexiao/rexiao_02.png",text1:"坚果 3",text2:"漂亮的不像实力派",text3:"￥1，299.00"},
				{img:"images/rexiao/rexiao_03.png",text1:"坚果  Por2 特别版",text2:"漂亮的不像实力派",text3:"￥1，899.00"},
				{img:"images/rexiao/rexiao_04.png",text1:"坚果  Por2",text2:"漂亮的不像实力派",text3:"￥2，299.00"},
				{img:"images/rexiao/rexiao_05.png",text1:"坚果  Por",text2:"漂亮的不像实力派",text3:"￥1，799.00"},
				{img:"images/rexiao/rexiao_06.png",text1:"畅呼吸智能空气...",text2:"强力去甲烷，就...",text3:"￥2，999.00"},
				{img:"images/rexiao/rexiao_07.png",text1:"第一个网络表情符",text2:"100%美国  SUPIMA...",text3:"￥149.00"},
				{img:"images/rexiao/rexiao_08.png",text1:"畅呼吸智能空气...",text2:"超强净化能力、智...",text3:"￥2，999.00"},
			]
		},
	})
	//抽奖效果
	//关闭
	var guanbi=document.querySelector(".index .guanbi");
	var choujiang=document.querySelector(".index .choujiang");
	guanbi.onclick=function(){
		choujiang.style.display="none";
	}
	// 判断是不是移动设备
	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i) ? true: false;
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i) ? true: false;
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true: false;
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i) ? true: false;
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
	    }
	};
	
	var turnWheel = {
	    rewardNames:[],				//转盘奖品名称数组
	    colors:[],					//转盘奖品区块对应背景颜色
	    outsideRadius:192,			//转盘外圆的半径
	    textRadius:155,				//转盘奖品位置距离圆心的距离
	    insideRadius:68,			//转盘内圆的半径
	    startAngle:0,				//开始角度
	
	    bRotate:false				//false:停止;ture:旋转
	};
	
	// 图片信息
	var imgQb = new Image();
	imgQb.src = "~/../images/qb.png";
	var imgSorry = new Image();
	imgSorry.src = "~/../images/2.png";
	
	$(document).ready(function(){
	
	    // 模拟数据，可以Ajax请求服务器数据，添加大转盘的奖品与奖品区域背景颜色
	    /*
	    $.ajax({
	        type: "POST",
	        url: "~/../json/data.json",
	        data: null,
	        async:false,
	        dataType:"json", // 返回数据类型
	        success: function(data){
	            turnWheel.rewardNames = data["rewardNames"];
	            turnWheel.colors = data["colors"];
	        },
	        error: function(data){
	            alert("网络错误，请检查您的网络设置！");
	            $("#tip").text("请求数据失败");
	        }
	    });
	    */
	
	    turnWheel.rewardNames = [
	        "50M流量包","10Q币",
	        "谢谢参与","5Q币",
	        "10M流量包","20M流量包",
	        "10M流量包","20M流量包",
	        "20Q币 ","30M流量包",
	        "100M流量包","2Q币"];
	    turnWheel.colors = [
	        "#FFF4D7","#FFFFFF",
	        "#F0F4D8","#FFFFFF",
	        "#FFF4D0","#FFFFFF",
	        "#FFF4D0","#FFFFFF",
	        "#FFF4D6","#FFFFFF",
	        "#FFF4D6","#FFFFFF"];
	
	
	    //旋转转盘 item:奖品序号，从0开始的; txt：提示语 ,count 奖品的总数量;
	    var rotateFunc = function (item, tip,count){
	
	        // 应该旋转的角度，旋转插件角度参数是角度制。
	        var baseAngle = 360 / count;
	        // 旋转角度 == 270°（当前第一个角度和指针位置的偏移量） - 奖品的位置 * 每块所占的角度 - 每块所占的角度的一半(指针指向区域的中间)
	        angles = 360 * 3 / 4 - ( item * baseAngle) - baseAngle / 2; // 因为第一个奖品是从0°开始的，即水平向右方向
	        $('#wheelCanvas').stopRotate();
	        // 注意，jqueryrotate 插件传递的角度不是弧度制。
	        // 哪个标签调用方法，旋转哪个控件
	        $('#wheelCanvas').rotate({
	            angle:0,
	            animateTo:angles + 360 * 5, // 这里多旋转了5圈，圈数越多，转的越快
	            duration:8000,
	            callback:function (){ // 回调方法
	                $("#tip").text(tip);
	                turnWheel.bRotate = !turnWheel.bRotate;
	                if(isMobile.any()) // 判断是否移动设备
	                {
	                    // 调OC代码
	                    window.location.href = "turntable://test.com?"+ "index=" + item +"&tip=" + tip ;
	                }
	            }
	        });
	    };
	
	    // 抽取按钮按钮点击触发事件
	    $('.pointer').click(function (){
	        // 正在转动，直接返回
	        if(turnWheel.bRotate) return;
	
	        turnWheel.bRotate = !turnWheel.bRotate;
	        var count = turnWheel.rewardNames.length;
	
	        // 这里应该是从服务器获取用户真实的获奖信息（对应的获奖序号）
	        // 简单模拟随机获取奖品的序号(奖品个数范围内)
	        var item = randomNum(0,count - 1);
	        // 开始抽奖
	        rotateFunc(item, turnWheel.rewardNames[item],count);
	    });
	
	});
	
	/*
	返回在n和m之间的随机整数
	n<= random <=m
	*/
	function randomNum(n, m){
	    /* Math.floor(Math.random()*10);时，可均衡获取0到9的随机整数。 */
	    var random = Math.floor(Math.random()*(m-n)) + n;
	    return random;
	
	}
	
	//页面所有元素加载完毕后执行drawWheelCanvas()方法对转盘进行渲染
	window.onload=function(){
	    drawWheelCanvas();
	};
	
	/*
	 * 渲染转盘
	 * */
	function drawWheelCanvas(){
	
	    // 获取canvas画板，相当于layer？？
	    var canvas = document.getElementById("wheelCanvas");
	//    var canvas = ($("#wheelCanvas")).get()[0]; // 注意，jQuery获取的是包装过的对象，不是DOM对象,可以进行转换
	
	    // 计算每块占的角度，弧度制
	    var baseAngle = Math.PI * 2 / (turnWheel.rewardNames.length);
	    // 获取上下文
	    var ctx=canvas.getContext("2d");
	
	    var canvasW = canvas.width; // 画板的高度
	    var canvasH = canvas.height; // 画板的宽度
	    //在给定矩形内清空一个矩形
	    ctx.clearRect(0,0,canvasW,canvasH);
	
	    //strokeStyle 绘制颜色
	    ctx.strokeStyle = "#FFBE04"; // 红色
	    //font 画布上文本内容的当前字体属性
	    ctx.font = '16px Microsoft YaHei';
	
	    // 注意，开始画的位置是从0°角的位置开始画的。也就是水平向右的方向。
	    // 画具体内容
	    for(var index = 0 ; index < turnWheel.rewardNames.length ; index++)
	    {
	        // 当前的角度
	        var angle = turnWheel.startAngle + index * baseAngle;
	        // 填充颜色
	        ctx.fillStyle = turnWheel.colors[index];
	
	        // 开始画内容
	        // ---------基本的背景颜色----------
	        ctx.beginPath();
	        /*
	         * 画圆弧，和IOS的Quartz2D类似
	         * context.arc(x,y,r,sAngle,eAngle,counterclockwise);
	         * x :圆的中心点x
	         * y :圆的中心点x
	         * sAngle,eAngle :起始角度、结束角度
	         * counterclockwise : 绘制方向,可选，False = 顺时针，true = 逆时针
	         * */
	        ctx.arc(canvasW * 0.5, canvasH * 0.5, turnWheel.outsideRadius, angle, angle + baseAngle, false);
	        ctx.arc(canvasW * 0.5, canvasH * 0.5, turnWheel.insideRadius, angle + baseAngle, angle, true);
	        ctx.stroke();
	        ctx.fill();
	        //保存画布的状态，和图形上下文栈类似，后面可以Restore还原状态（坐标还原为当前的0，0），
	        ctx.save();
	
	        /*----绘制奖品内容----重点----*/
	        // 红色字体
	        ctx.fillStyle = "#E5302F";
	        var rewardName = turnWheel.rewardNames[index];
	        var line_height = 17;
	        // translate方法重新映射画布上的 (0,0) 位置
	        // context.translate(x,y);
	        // 见PPT图片，
	        var translateX =  canvasW * 0.5 + Math.cos(angle + baseAngle / 2) * turnWheel.textRadius;
	        var translateY =  canvasH * 0.5 + Math.sin(angle + baseAngle / 2) * turnWheel.textRadius;
	        ctx.translate(translateX,translateY);
	
	        // rotate方法旋转当前的绘图，因为文字适合当前扇形中心线垂直的！
	        // angle，当前扇形自身旋转的角度 +  baseAngle / 2 中心线多旋转的角度  + 垂直的角度90°
	        ctx.rotate(angle + baseAngle / 2 + Math.PI / 2);
	
	        /** 下面代码根据奖品类型、奖品名称长度渲染不同效果，如字体、颜色、图片效果。(具体根据实际情况改变) **/
	        // canvas 的 measureText() 方法返回包含一个对象，该对象包含以像素计的指定字体宽度。
	        // fillText() 方法在画布上绘制填色的文本。文本的默认颜色是黑色. fillStyle 属性以另一种颜色/渐变来渲染文本
	        /*
	         * context.fillText(text,x,y,maxWidth);
	         * 注意！！！y是文字的最底部的值，并不是top的值！！！
	         * */
	        if(rewardName.indexOf("M")>0){//查询是否包含字段 流量包
	            var rewardNames = rewardName.split("M");
	            for(var j = 0; j<rewardNames.length; j++){
	                ctx.font = (j == 0)?'bold 20px Microsoft YaHei':'16px Microsoft YaHei';
	                if(j == 0){
	                    ctx.fillText(rewardNames[j]+"M", -ctx.measureText(rewardNames[j]+"M").width / 2, j * line_height);
	                }else{
	                    ctx.fillText(rewardNames[j], -ctx.measureText(rewardNames[j]).width / 2, j * line_height);
	                }
	            }
	        }else if(rewardName.indexOf("M") == -1 && rewardName.length>6){//奖品名称长度超过一定范围
	            rewardName = rewardName.substring(0,6)+"||"+rewardName.substring(6);
	            var rewardNames = rewardName.split("||");
	            for(var j = 0; j<rewardNames.length; j++){
	                ctx.fillText(rewardNames[j], -ctx.measureText(rewardNames[j]).width / 2, j * line_height);
	            }
	        }else{
	            //在画布上绘制填色的文本。文本的默认颜色是黑色
	            ctx.fillText(rewardName, -ctx.measureText(rewardName).width / 2, 0);
	        }
	
	        //添加对应图标
	        if(rewardName.indexOf("Q币")>0){
	            // 注意，这里要等到img加载完成才能绘制
	            imgQb.onload=function(){
	                ctx.drawImage(imgQb,-15,10);
	            };
	            ctx.drawImage(imgQb,-15,10);
	
	        }else if(rewardName.indexOf("谢谢参与")>=0){
	            imgSorry.onload=function(){
	                ctx.drawImage(imgSorry,-15,10);
	            };
	            ctx.drawImage(imgSorry,-15,10);
	        }
	        //还原画板的状态到上一个save()状态之前
	        ctx.restore();
	
	        /*----绘制奖品结束----*/
	
	    }
	}

}
//分类页   js特效
var cat=document.querySelector(".category");
if(cat != null){
	//充电线材
	new Vue({
		el:'.title-wrapper',
		data: {
			titles:[
				{img:"images/category-title/title_01.png",text:"坚果 Type-C To Type-C 数据线"},
				{img:"images/category-title/title_02.png",text:"原装充电器"},
				{img:"images/category-title/title_03.png",text:"车载充电器"},
				{img:"images/category-title/title_04.png",text:"“电池形电池”移动电源"},
				{img:"images/category-title/title_05.png",text:"快充移动电源"},
				{img:"images/category-title/title_06.png",text:"Smartisan 坚果自拍杆"},
			]
		},
	})
	//耳机
	new Vue({
		el:'.title-wrappe',
		data: {
			erjis:[
				{img:"images/category-title/erji_01.png",text:"坚果蓝牙小黑耳机 Smartisan"},
				{img:"images/category-title/erji_02.png",text:"半入耳式耳机"},
				{img:"images/category-title/erji_03.png",text:"蓝牙运动耳机"},
				{img:"images/category-title/erji_04.png",text:"S-1001 圈铁耳机 Smartisan"},
				{img:"images/category-title/erji_05.png",text:"半入耳式耳机"},
				{img:"images/category-title/erji_06.png",text:"蓝牙运动耳机"},
			]
		},
	})
	//鞋服
	new Vue({
		el:'.title-wrap',
		data: {
			xiefus:[
				{img:"images/category-title/xiefu_01.png",text:"Smartisan 帆布鞋"},
				{img:"images/category-title/xiefu_02.png",text:"Smartisan 牛津纺衬衫"},
				{img:"images/category-title/xiefu_03.png",text:"Polo衫 经典款"},
				{img:"images/category-title/xiefu_04.png",text:"首次成功飞越珠穆朗玛峰"},
				{img:"images/category-title/xiefu_05.png",text:"第一部 YouTube 视频上传"},
				{img:"images/category-title/xiefu_06.png",text:"伍迪·艾伦出生"},
			]
		},
	})
}
//个人中心   js特效
var user=document.querySelector(".user");
if(user != null){
	//input  密码小黑点效果
	var obj = document.getElementById('pw');
	obj.onclick = change;
	function change(){
	 obj.value = '';
	 obj.type = 'password';
	}
	//提交效果
	var form = document.querySelector("form");
	function checkForm(){
		alert("登陆成功")
		return true;
	}
	//自动登陆效果
	var inputImg=document.querySelector(".input1 p img");
	var panduan=true;
	inputImg.onclick=function(){
		if(panduan){
			inputImg.src="images/input_02.png";
			panduan=false;
		}else{
			inputImg.src="images/input_01.png";
			panduan=true;
		}
	}
}
