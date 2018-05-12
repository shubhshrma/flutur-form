
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
	let alerts;
	if(errors.length){
		
		//ensure previous json output not present on page
		document.getElementById("json-container").style.display = 'none';
		alerts = ''	;
		for(error of errors){
			alerts += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
	${error}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`;
		}
		let error_container = document.getElementById("error-container");
		error_container.style.display = 'block';
		error_container.innerHTML = alerts;
	}
	else
	{
		//ensure previous validation errors not present on page
		document.getElementById("error-container").style.display = 'none';

		let json = {
			"title": title,
			"author": author,
			"imageUrl": imageUrl,
			"para1": para1,
			"para2": para2,
			"para3": para3
		};
		document.getElementById("json-container").style.display = 'block';
		document.getElementById("json").innerHTML = JSON.stringify(json, null, 4);
	}
})