function showcont(id){
var className = "." + id;
$(className).css("display", "block"); 
$(className).siblings().css("display", "none");
}

function display() {
	$(".topic1").css("display", "block"); 
	$(".topic1").siblings().css("display", "none");
}

function addpost() {
	var count = document.getElementById("articles").childElementCount;
	console.log(count);
	var title = document.getElementById("title").value;
	var content = document.getElementById("content").value;


	
	if(title === "" || content === "") {
		alert("you must write something");
	}

	else {
		var h2 = document.createElement("h2");
		var tit = document.createTextNode(title);
		var div = document.createElement("div");
		var cont = document.createTextNode(content);
		h2.append(tit);
		div.append(cont);
		var main = document.createElement("div");
		main.className = "topic" + (count+1);
		main.append(h2);
		main.append(div);
		document.getElementById("articles").append(main);

		var a = document.createElement("a");
		var name = document.createTextNode(title);
		a.append(name);
		a.id = "topic" + (count+1);
		id = "topic" + (count+1);
	
		document.getElementsByClassName("menu")[0].append(a);

		document.getElementById(id).onclick = function() {showcont(this.id);}
		console.log(document.getElementById(id).onclick);	

		display();

		document.getElementById("title").value = "";
		document.getElementById("content").value = "";
		alert("Post added successully. Click OK and check the side menu");

	}
}