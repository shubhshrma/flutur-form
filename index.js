
function isURL(str) {
  return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(str); 
}

let submit = document.getElementById("submit");
// console.log(submit);
submit.addEventListener("click", e => {
	let imageUrl = document.getElementById("image").value;
	let title = document.getElementById("title").value;
	let para1 = document.getElementById("para1").value;
	let para2 = document.getElementById("para2").value;
	let para3 = document.getElementById("para3").value;
	let author = document.getElementById("author").value;

	let errors = [];
	if(!isURL(imageUrl)){
		errors.push("Please enter a valid URL for image.");
	}
	if(!title.trim().length){
		errors.push("Title can't be empty.");
	}
	if(!para1.trim().length){
		errors.push("First paragraph can't be empty.");
	}
	if(!author.trim().length){
		errors.push("Author name can't be empty.");
	}
	console.log(errors);
	if(errors.length){
		
	}
	else
	{
		let json = {
			"title": title,
			"author": author,
			"imageUrl": imageUrl,
			"para1": para1,
			"para2": para2,
			"para3": para3
		}
		console.log(document.getElementById("json"));
		document.getElementById("json").innerHTML = JSON.stringify(json);
	}
})