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
var ind=document.querySelector(".index");
if(ind != null){
	var architecto=document.querySelector(".index .architecto .fa-chevron-up");
	var dolore=document.querySelector(".index .dolore .fa-chevron-up");
	var text1=document.querySelector(".index .text1");
	var text2=document.querySelector(".index .text2");
	var cli1=false;
	var cli2=true;
	architecto.onclick=function(){
		if(cli1){
			architecto.style.transform="rotateZ(180deg)";
			dolore.style.transform="rotateZ(0deg)";
			text1.style.height="280px";
			text2.style.height="0px";
			cli1=false;
		}else{
			architecto.style.transform="rotateZ(0deg)";
			text1.style.height="0px";
			cli1=true;
		}
		
	}
	dolore.onclick=function(){
		if(cli2){
			dolore.style.transform="rotateZ(180deg)";
			architecto.style.transform="rotateZ(0deg)";
			text2.style.height="280px";
			text1.style.height="0px";
			cli2=false;
		}else{
			dolore.style.transform="rotateZ(0deg)";
			text2.style.height="0px";
			cli2=true;
		}
	}
}
var gall=document.querySelector(".gallery");
if(gall != null){
	new Vue({
		el:'.tupian',
		data: {
			tupians:[
				{img:"images/1.jpg"},
				{img:"images/2.jpg"},
				{img:"images/3.jpg"},
				{img:"images/4.jpg"},
				{img:"images/5.jpg"},
				{img:"images/6.jpg"},
				{img:"images/7.jpg"},
				{img:"images/8.jpg"},
				{img:"images/9.jpg"},
				{img:"images/10.jpg"},
				{img:"images/11.jpg"},
				{img:"images/12.jpg"},
			]
		},
	})
	var lis=document.querySelectorAll(".gallery .portfolio-top ul li");
	var shan=document.querySelectorAll(".gallery .portfolio-bottom .shan");
	console.log(lis)
	lis[0].onclick=function(){
		for(var u=0;u<lis.length;u++){
			lis[u].style.color="#E91E63";
			lis[u].style.background="#fff";
		}
		for(var i=0;i<shan.length;i++){
			shan[i].style.display="block";
		}
		this.style.background="#E91E63";
		this.style.color="#fff"
	}
	lis[1].onclick=function(){
		for(var u=0;u<lis.length;u++){
			lis[u].style.color="#E91E63";
			lis[u].style.background="#fff";
		}
		for(var i=0;i<shan.length;i++){
			shan[i].style.display="block";
		}
		for(var q=0;q<4;q++){
			shan[q].style.display="none";
		}
		this.style.background="#E91E63";
		this.style.color="#fff"
	}
	lis[2].onclick=function(){
		for(var u=0;u<lis.length;u++){
			lis[u].style.color="#E91E63";
			lis[u].style.background="#fff";
		}
		for(var i=0;i<shan.length;i++){
			shan[i].style.display="block";
		}
		for(var w=2;w<8;w++){
			shan[w].style.display="none";
		}
		this.style.background="#E91E63";
		this.style.color="#fff"
	}
	lis[3].onclick=function(){
		for(var u=0;u<lis.length;u++){
			lis[u].style.color="#E91E63";
			lis[u].style.background="#fff";
		}
		for(var i=0;i<shan.length;i++){
			shan[i].style.display="block";
		}
		for(var e=0;e<8;e++){
			shan[e].style.display="none";
		}
		this.style.background="#E91E63";
		this.style.color="#fff"
	}
	lis[4].onclick=function(){
		for(var u=0;u<lis.length;u++){
			lis[u].style.color="#E91E63";
			lis[u].style.background="#fff";
		}
		for(var i=0;i<shan.length;i++){
			shan[i].style.display="block";
		}
		for(var r=3;r<shan.length;r++){
			shan[r].style.display="none";
		}
		this.style.background="#E91E63";
		this.style.color="#fff"
	}
}
