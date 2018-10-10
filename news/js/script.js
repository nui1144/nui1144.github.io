var app= new Vue({
	el:'#app',
	data:{
		//内容部分
		text:"",
		//标签
		biaoti:"",
		//发布状态的布尔值
		mima:false,
		//密码验证
		mimas:"",
		//作者
		zuozhe:"",
		//编辑的当前下标值
		xiabiao:"",
		//删除国际新闻布尔值
		guoji:false,
		//删除军事新闻布尔值
		junshi:false,
		//删除社会新闻布尔值
		shehui:false,
		//国际新闻数据
		international:[
			{
				matter:"孟加拉国一客机因机械故障紧急迫降",
				fettle:true,
				release:"已发布",
				title:"新闻",
				name:"新华网"
			},
			{
				matter:"美伊联大隔空互批 美欧再曝明显分歧",
				fettle:true,
				release:"已发布",
				title:"新闻",
				name:"新华网1"
			},
			{
				matter:"悉尼市政府拨款帮助亚洲企业在当地发展",
				fettle:true,
				release:"已发布",
				title:"新闻",
				name:"新华网3"
			},
			{
				matter:"俄媒:迪拜将展出全球最贵鞋 价值1700万美元",
				fettle:true,
				release:"已发布",
				title:"新闻",
				name:"新华网2"
			}
		],
		//军事新闻数据
		militaryScience:[
			{
				matter:"特朗普称军事政变可轻易推翻委政府",
				fettle:true,
				release:"已发布",
				title:"军事",
				name:"军政网"
			},
			{
				matter:"摩洛哥海军向移民船开火 致1人死亡3人受伤",
				fettle:true,
				release:"已发布",
				title:"军事",
				name:"军政网1"
			},
			{
				matter:"国台办:任何挟洋自重破坏台海和平必自食恶果",
				fettle:true,
				release:"已发布",
				title:"军事",
				name:"军政网4"
			},
			{
				matter:"俄副外长:在波兰建美军基地计划是针对俄罗斯",
				fettle:true,
				release:"已发布",
				title:"军事",
				name:"军政网8"
			}
		],
		//社会新闻数据
		society:[
			{
				matter:"隋维钧：脚下有泥 心中才有底",
				fettle:true,
				release:"已发布",
				title:"社会",
				name:"央视网4"
			},
			{
				matter:"三位科学家获2018年度邵逸夫奖",
				fettle:true,
				release:"已发布",
				title:"社会",
				name:"央视网5"
			},
			{
				matter:"假冒产品缘何成了“打不死的小强”？",
				fettle:true,
				release:"已发布",
				title:"社会",
				name:"央视网"
			},
			{
				matter:"海南：敞开大门迎远客 开放发展上新阶",
				fettle:true,
				release:"已发布",
				title:"社会",
				name:"央视网1"
			}
		]
	},
	methods:{
		//添加新闻框出现
		fun:function(){
			document.querySelector(".admin .add").style.display="inline-block";
			document.querySelector(".admin .metter").style.filter="blur(3px)";
			document.querySelector(".add input").focus();
		},
		//添加新闻框关闭
		fun1:function(){
			document.querySelector(".admin .metter").style.filter="blur(0px)";
			document.querySelector(".admin .add").style.display="none";
			document.querySelector(".admin .ads").style.display="none";
			this.biaoti="";
			this.zuozhe="";
			this.text="";
		},
		//向数组添加数据
		fun2:function(){
			if(this.biaoti=="国际"){
				this.international.push({
					matter:this.text,
					fellle:false,
					release:"待修改",
					title:this.biaoti,
					name:this.zuozhe
				});
			}else if(this.biaoti=="军事"){
				this.militaryScience.push({
					matter:this.text,
					fellle:false,
					release:"待修改",
					title:this.biaoti,
					name:this.zuozhe
				});
			}else if(this.biaoti=="社会"){
				this.society.push({
					matter:this.text,
					fellle:false,
					release:"待修改",
					title:this.biaoti,
					name:this.zuozhe
				});
			}else{
				alert("新闻标题必须是  国际  军事  社会")
			}
			document.querySelector(".admin .metter").style.filter="blur(0px)";
			document.querySelector(".admin .add").style.display="none";
			this.text="";
			this.biaoti="";
			this.zuozhe=""
			localStorage.setItem('guo', JSON.stringify(app.international));
			localStorage.setItem('jun', JSON.stringify(app.militaryScience));
			localStorage.setItem('she', JSON.stringify(app.society));
		},
		//删除国际新闻数据
		fun3:function(s){
			document.querySelector(".admin .clue").style.display="block";
			document.querySelector(".admin .metter").style.filter="blur(3px)";
			this.guoji=true;
			this.xiabiao=s;
		},
		trash:function(){
			if(this.guoji){
				this.international.splice(this.xiabiao,1);
				localStorage.setItem('guo', JSON.stringify(app.international));
				this.guoji=false
			}else if(this.junshi){
				this.militaryScience.splice(this.xiabiao,1);
				localStorage.setItem('jun', JSON.stringify(app.militaryScience));
				this.junshi=false
			}else if(this.shehui){
				this.society.splice(this.xiabiao,1);
				localStorage.setItem('she', JSON.stringify(app.society));
				this.shehui=false
			}else{
				alert("删除按键报错")
			}
			document.querySelector(".admin .metter").style.filter="blur(0px)";
			document.querySelector(".admin .clue").style.display="none";
		},
		abolish:function(){
			document.querySelector(".admin .metter").style.filter="blur(0px)";
			document.querySelector(".admin .clue").style.display="none";
		},
		//删除军事新闻数据
		fun4:function(a){
			document.querySelector(".admin .clue").style.display="block";
			document.querySelector(".admin .metter").style.filter="blur(3px)";
			this.junshi=true;
			this.xiabiao=a;
		},
		//删除社会新闻数据
		fun5:function(d){
			document.querySelector(".admin .clue").style.display="block";
			document.querySelector(".admin .metter").style.filter="blur(3px)";
			this.shehui=true;
			this.xiabiao=s;
		},
		//国际新闻发布状态
		fun6:function(f){
			if(this.international[f].fettle){
				this.international[f].release="待修改";
				this.international[f].fettle=false
			}else{
				this.international[f].release="已发布";
				this.international[f].fettle=true
			}
			localStorage.setItem('guo', JSON.stringify(app.international));
		},
		//编辑国际新闻数据弹框出现
		fun11:function(q){
			document.querySelector(".admin .ads").style.display="inline-block";
			document.querySelector(".admin .metter").style.filter="blur(3px)";
			document.querySelector(".ads input").focus();
			this.xiabiao=q;
			this.text=this.international[q].matter;
			this.zuozhe=this.international[q].name;
			this.biaoti=this.international[q].title
		},
		//新闻内容修改后保存
		fun12:function(){
			if(this.biaoti=="国际"){
				this.international[this.xiabiao].matter=this.text;
				this.international[this.xiabiao].name=this.zuozhe;
				this.international[this.xiabiao].title=this.biaoti;
				localStorage.setItem('guo', JSON.stringify(app.international));
			}else if(this.biaoti=="军事"){
				this.militaryScience[this.xiabiao].matter=this.text;
				this.militaryScience[this.xiabiao].name=this.zuozhe;
				this.militaryScience[this.xiabiao].title=this.biaoti;
				localStorage.setItem('jun', JSON.stringify(app.militaryScience));
			}else if(this.biaoti=="社会"){
				this.society[this.xiabiao].matter=this.text;
				this.society[this.xiabiao].name=this.zuozhe;
				this.society[this.xiabiao].title=this.biaoti;
				localStorage.setItem('she', JSON.stringify(app.society));
			}else{
				alert("新闻标题必须是  国际  军事  社会")
			}
			document.querySelector(".admin .metter").style.filter="blur(0px)";
			document.querySelector(".admin .ads").style.display="none";
		},
		//军事新闻发布状态
		fun7:function(g){
			if(this.militaryScience[g].fettle){
				this.militaryScience[g].release="待修改";
				this.militaryScience[g].fettle=false
			}else{
				this.militaryScience[g].release="已发布";
				this.militaryScience[g].fettle=true
			}
			localStorage.setItem('jun', JSON.stringify(app.militaryScience));
		},
		//编辑军事新闻数据弹框出现
		fun13:function(w){
			document.querySelector(".admin .ads").style.display="inline-block";
			document.querySelector(".admin .metter").style.filter="blur(3px)";
			document.querySelector(".ads input").focus();
			this.xiabiao=w;
			this.text=this.militaryScience[w].matter;
			this.zuozhe=this.militaryScience[w].name;
			this.biaoti=this.militaryScience[w].title
		},
		//社会新闻发布状态
		fun10:function(h){
			if(this.society[h].fettle){
				this.society[h].release="待修改";
				this.society[h].fettle=false
			}else{
				this.society[h].release="已发布";
				this.society[h].fettle=true
			}
			localStorage.setItem('she', JSON.stringify(app.society));
		},
		//编辑社会新闻数据弹框出现
		fun14:function(e){
			document.querySelector(".admin .ads").style.display="inline-block";
			document.querySelector(".admin .metter").style.filter="blur(3px)";
			document.querySelector(".ads input").focus();
			this.xiabiao=w;
			this.text=this.society[e].matter;
			this.zuozhe=this.society[e].name;
			this.biaoti=this.society[e].title
		},
		//管理登录页面显示与隐藏
		fun8:function(){
			this.mima =! this.mima
		},
		//验证管理员密码，并且跳转页面
		fun9:function(){
			if(this.mimas=="binshao666"){
				window.location="admin.html";
			}else{
				alert("审查一下元素属性，会有意外的彩蛋")
			}
		},
		home:function(){
			window.location="index.html";
		}
	}
})
setInterval(function(){
	if (localStorage.getItem('guo') !== null) {
        app.international = JSON.parse(localStorage.getItem('guo'));
    };
    if (localStorage.getItem('jun') !== null) {
        app.militaryScience = JSON.parse(localStorage.getItem('jun'));
    };
    if(localStorage.getItem('she') !== null) {
        app.society = JSON.parse(localStorage.getItem('she'));
    }
},100)
