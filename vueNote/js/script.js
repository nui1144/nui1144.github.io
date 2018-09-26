var datas = new Vue({
	el:'#app',
	data:{
		biaoti:"新建笔记",
		biji:"",
		shijian:"",
		neirong:[
			{
				time:"2018年8月19日 星期3 8:36:49",
				name:"寥落古行宫，宫花寂寞红。白头宫女在，闲坐说玄宗。",
				biao:"寥落古行宫，宫花寂寞红。",
				xiugai:""
			},
			{
				time:"2018年8月18日 星期2 19:51:55",
				name:"白日依山尽，黄河入海流。欲穷千里目，更上一层楼。",
				biao:"白日依山尽，黄河入海流。",
				xiugai:""
			}
		]
	},
	methods:{
		//添加笔记事件
		fun:function(){
			this.neirong.unshift({
				name:this.biji,
				biao:this.biaoti,
				time:new Date().getFullYear()+"年"+Number(new Date().getMonth()+1)+"月"+new Date().getDate()+"日  星期"+new Date().getDay()+"  "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
			});
			this.biji="";
			this.biaoti="新建笔记";
			//本地存储
			localStorage.setItem('notes', JSON.stringify(datas.neirong));
//			光标自动定位到第一个表单
//			document.querySelector("input").focus();
		},
		//删除笔记事件
		fun1:function(a){
			this.neirong.splice(a,1);
			//本地存储
			localStorage.setItem('notes', JSON.stringify(datas.neirong));
		},
		//内容修改键盘事件
		fun2:function(b){
			this.neirong[b].xiugai="上次修改日期："+new Date().getFullYear()+"年"+Number(new Date().getMonth()+1)+"月"+new Date().getDate()+"日  星期"+new Date().getDay()+"  "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
			//本地存储
			localStorage.setItem('notes', JSON.stringify(datas.neirong));
		}
	},
	
	mounted:function(){
		//刷新浏览器的时候本地存储调用
		if (localStorage.getItem('notes') !== null) {
            this.neirong  = JSON.parse(localStorage.getItem('notes'));
        }
	}
})
//获取当前的事实时间
var shi=document.querySelector(".shi");
shi.innerHTML=new Date().getFullYear()+"年"+Number(new Date().getMonth()+1)+"月"+new Date().getDate()+"日  星期"+new Date().getDay()+"  "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
setInterval(function(){
	shi.innerHTML=new Date().getFullYear()+"年"+Number(new Date().getMonth()+1)+"月"+new Date().getDate()+"日  星期"+new Date().getDay()+"  "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
},100)
