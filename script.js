let element = document.querySelector("#level")

let count = 1

while(element.parentElement){
	count++
	element = element.parentElement
}

alert(parseInt(count))