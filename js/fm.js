(function(){
    var tp1 = document.getElementById('fm-tp1');
    var jd = document.getElementById('jd');
    var input = document.getElementById('input');
    var audio = document.getElementById('audio');
    var div2 = document.getElementById('div2');
    var div3 = document.getElementById('div3');
    var src = document.getElementById('src');
    /*var tp2 = document.getElementById('fm-tp2');*/
    audio.autoplay = true;
    div3.onclick=function(){
		audio.play();
		div3.style.display="none";
		src.style.display="block";


	}
	src.onclick=function(){
		audio.pause();
		src.style.display="none";
		div3.style.display="block";
	}
	
    tp1.onclick = function(){
    	if(tp1.src.match("tupian/5.png")){
           tp1.src="tupian/8.png";
    	}else{
    	   tp1.src="tupian/5.png";
    	}
    }
    audio.ontimeupdate = function (){
    	var ztime=audio.duration;
	    var zmiao = (parseInt(ztime))%60;
 	    var zfen = (parseInt(ztime/60))%60;
 	    var shiJian = audio.currentTime;
 	    var miao = (parseInt(shiJian))%60;
 	    var fen = (parseInt(shiJian/60))%60;
 	    //var shi = (parseInt(shiJian/3600));
 	    if (miao<10) {
 	    	miao = '0'+ miao;
 	    }
 	    if (fen<10) {
 	    	fen = '0'+fen;
 	    }
 	    div2.innerHTML =fen+':'+miao+'/'+zfen+':'+zmiao;
    	var percent = audio.currentTime / audio.duration;
	    input.style.width = percent　* 160 + "px";
    }
    jdt.onclick = function(){
    	audio.currentTime = parseInt(event.offsetX)/160*(audio.duration);
    }
    //第二部分
     /*var linsten = document.getElementById('linsten');*/
     var homepage = document.getElementById('homepage');
     var song = document.getElementById('song-a');
     var click1 = document.getElementById('click1');
     var cli = document.getElementById('cli');
     var sidebar=document.getElementById('fm-sidebar');
     var showImg = document.getElementById('showImg');
     var nav1 = document.getElementById('nav1');
     var nav2 = document.getElementById('nav2');
     var nav3 = document.getElementById('nav3');
     var nav4 = document.getElementById('nav4');
     var nav5 = document.getElementById('nav5');
     var nav6 = document.getElementById('nav6');
     var fmShow = document.getElementById('fm-show-off');
     var ss = document.getElementById("ss-intro0");
     var ss1 = document.getElementById('ss-intro1');
     var ss2 = document.getElementById('ss-intro2');
    

     /*linsten.onmouseover = function () {
     	homepage.src = 'tupian/white.png';
     	song.style.color = 'white';
     	linsten.style.background = '#60dcac';
     }
     linsten.onmouseout = function () {
     	homepage.src = 'tupian/fm-homepage.png';
     	song.style.color = ' #58c299';
     	linsten.style.background = '#E1E8E5';
     }*/
     click1.onmouseover = function () {
     	click1.src = 'tupian/9.png';
     	click1.style.backgroundColor = "#5b9";
     }
     click1.onmouseout = function () {
     	click1.src = 'tupian/9.png';
     }
     cli.onmouseover = function () {
     	cli.src = 'tupian/click2.png';
     }
     cli.onmouseout = function () {
     	cli.src = 'tupian/click1.png';
     }
     click1.onclick = function () {
        sidebar.style.display='block';
        return false;

     }
     var ziDong;
	 var i = 0;
	 var arr = ["tupian/show2.jpg","tupian/show3.jpg","tupian/show4.jpg","tupian/show5.jpg","tupian/show6.jpg","tupian/show1.jpg"];
	 function qieHuan() {
		showImg.style.width = '290px';
     	showImg.style.height = '276px';
     	showImg.style.background = 
		showImg.src = arr[i];
		i = (i+1)%6;
	 }
	 window.onload = function(){
		 zidong = window.setInterval(qieHuan, 2000);
	 }
     cli.onclick = function () {
     	sidebar.style.display='none';
     }
     nav1.onmouseover = function () {
     	showImg.src = 'tupian/show1.jpg';
     	clearInterval(zidong);
     }
     nav2.onmouseover = function () {
     	showImg.src = 'tupian/show2.jpg';
     	showImg.style.width = '290px';
     	showImg.style.height = '276px';
     	clearInterval(zidong);
     	if(ss1.style.display = 'none'){
           ss.style.display = 'none';
           ss2.style.display = 'none';
           ss1.style.display = 'block';
     	}else{
           ss.style.display = 'block';
           ss2.style.display = 'block';
           ss1.style.display = 'none';
     	}
     }
     nav3.onmouseover = function () {
     	showImg.src = 'tupian/show3.jpg';
     	showImg.style.width = '290px';
     	showImg.style.height = '276px';
     	clearInterval(zidong);
     	if(ss2.style.display = 'none'){
           ss.style.display = 'none';
           ss1.style.display = 'none';
           ss2.style.display = 'block';
     	}else{
     	   ss.style.display = 'block';
           ss1.style.display = 'block';
           ss2.style.display = 'none';
     	}
     }
     nav4.onmouseover = function () {
     	showImg.src = 'tupian/show4.jpg';
     	showImg.style.width = '290px';
     	showImg.style.height = '276px';
     	clearInterval(zidong);
     }
     nav5.onmouseover = function () {
     	showImg.src = 'tupian/show5.jpg';
     	showImg.style.width = '290px';
     	showImg.style.height = '276px';
     	clearInterval(zidong);
     }
     nav6.onmouseover = function () {
     	showImg.src = 'tupian/show6.jpg';
     	clearInterval(zidong);
     }
     /*nav1.onmouseout = function () {
     	 zidong = window.setInterval(qieHuan, 2000);
     }
     nav2.onmouseout = function () {
     	 zidong = window.setInterval(qieHuan, 2000);
     }
     nav3.onmouseout = function () {
     	 zidong = window.setInterval(qieHuan, 2000);
     }
     nav4.onmouseout = function () {
     	 zidong = window.setInterval(qieHuan, 2000);
     }
     nav5.onmouseout = function () {
     	 zidong = window.setInterval(qieHuan, 2000);
     }
     nav6.onmouseout = function () {
     	 zidong = window.setInterval(qieHuan, 2000);
     }*/
}(window))