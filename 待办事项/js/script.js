new Vue({
	el:'#app',
	data:{
		message:"",
		arrs:[
			"学习  JavaScript",
			"学习 Vue.js",
			"整个牛项目",
		]
	},
	methods:{
		fun:function(){
			if(this.message==""){
				alert("请输入内容在添加");
			}else{
				this.arrs.push(this.message);
				this.message="";
			};
		},
		fun1:function(a){
			this.arrs.splice(a,1);
		}
	},
})