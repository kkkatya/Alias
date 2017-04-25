// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require bootstrap
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
var time;
var myVar;
//var myVar = interval(myTimer, 1000, 100);
var team = 1;
var points = {"1":0, "2":0};
var word;
start();

function start(){
	var div = document.getElementById("new");
	if (div.hasChildNodes()){
	div.removeChild(document.getElementById("start"));}
	time = 10;
	myVar = setInterval(myTimer, 1000);
	word=getWord();
}

function myTimer() {
	document.getElementById("points").innerHTML = 'Team 1: '+ points["1"].toString()+'<br/>Team 2: '+ points["2"].toString();
	document.getElementById("team").innerHTML = 'Team '+team.toString()+'`s turn.';
    document.getElementById("time").innerHTML = time.toString();
    document.getElementById("word").innerHTML = word;
    
    //var list = document.getElementById('list');

    
    if(time<=0){
    	team = changeTeam(team);
    	//list.replaceChild(getWords(),list.childNodes[0])
    	word = getWord();
    	document.getElementById("new").innerHTML = '<button id="start" class="btn" onclick="start()">Next team</button>';
    	clearInterval(myVar);

    }
    time-=1;

}

function changeTeam(t){
	if(t == 1){
		t = 2;
	}
	else{
		t = 1;
	}
	return t
}

/*function getWords(){
	var list = document.createElement('ul');
	var wordList = ['child','world','school','state','family','student','group','country','problem','hand','part','place','case','week','company','system','program','question','work','government','number','night','point','home','water','room','mother','area','money','story','fact','month','lot','right','study','book','eye','job','word','business','issue','side','kind','head','house','service','friend','father','power',
'hour','line','end','member','law','car','city','community','name','president','team','minute','idea','kid','body','information','back','parent','face','others','level','office','door',
'health','person','art','war','history','party','result','change','morning','research','girl','guy','moment','air','teacher','force'];
	var randomWords = [];
	for (var i=0; i<5; i++){
		randomWords[i] = wordList[Math.floor(Math.random()*wordList.length)];
		var item = document.createElement('li');
		var anchor = document.createElement('a');
		anchor.onclick = function(){points[team.toString()]+=1; anchor.onclick = null;};
		item.appendChild(document.createTextNode(randomWords[i]));
		anchor.appendChild(item);
        list.appendChild(anchor);
	}
	return list;

}*/


function getWord(){
	var wordList = ['child','world','school','state','family','student','group','country','problem','hand','part','place','case','week','company','system','program','question','work','government','number','night','point','home','water','room','mother','area','money','story','fact','month','lot','right','study','book','eye','job','word','business','issue','side','kind','head','house','service','friend','father','power',
'hour','line','end','member','law','car','city','community','name','president','team','minute','idea','kid','body','information','back','parent','face','others','level','office','door',
'health','person','art','war','history','party','result','change','morning','research','girl','guy','moment','air','teacher','force'];
	var randomWord = wordList[Math.floor(Math.random()*wordList.length)];
	return randomWord;
	
}

function givePoint(){
	points[team.toString()]+=1;
	word = getWord();
}

function takePoint(){
	points[team.toString()]-=1;
	word = getWord();
}

/*function interval(func, wait, times){
    var interv = function(w, t){
        return function(){
            if(typeof t === "undefined" || t-- > 0){
                setTimeout(interv, w);
                try{
                    func.call(null);
                }
                catch(e){
                    t = 0;
                    throw e.toString();
                }
            }
        };
    }(wait, times);

    setTimeout(interv, wait);
};*/