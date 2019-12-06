
export const post = (url:string, data:any, json: boolean) => {
	var xhttp = new XMLHttpRequest();
	
	xhttp.open("POST", "http://localhost:8080" + url, true);
	if (json === true) xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	xhttp.send(data);
	console.log("progressing....")
	return xhttp;
}
export const get = (url:string) => {
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "http://localhost:8080" + url, true);
	xhttp.send();
	console.log("progressing....")
	return xhttp;
}




