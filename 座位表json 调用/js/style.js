var tishi=document.querySelector(".tishi");
var dow=document.querySelector(".tishi i.fa-caret-down");
var yin=document.querySelector(".yincang");
var ones=true;
tishi.onclick=function(){
	if(ones){
		dow.style.transform="rotateZ(0deg)";
		yin.style.height="40px";
		ones=false;
	}else{
		dow.style.transform="rotateZ(-90deg)";
		yin.style.height="0px";
		ones=true;
	}
}
new Vue({
	el:'#shujus',
	data:{
		arrs:""
	},
	mounted:function(){
        //发送get请求
        this.$http.get('json/arrs.json').then(function(res){
            console.log(res.body);
            this.arrs = res.body;

        },function(){
            console.log('请求失败处理');
        });
    },
    methods:{
    	fun:function(i,o){
    		this.arrs[i][o].bool =! this.arrs[i][o].bool;
    	}
    }
})