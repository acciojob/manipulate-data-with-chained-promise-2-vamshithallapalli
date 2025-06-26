//your JS code here. If required.
function manipulateArray(){
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([1,2,3,4]);
		}, 3000);
	})
}

manipulateArray.then((arr)=>{
	return new Promise((resolve) => {
	let evenNumbers = arr.filter(num => num%2 === 0);
	setTimeout(()=>{
		document.getElementById("output").innerText = evenNumbers.toString();
		resolve(evenNumbers);
	}, 1000)
	})
}).then((evenNumbers) => {
	return new Promise((resolve) => {
		let multi = evenNumbers.map(num => num*2);
		setTimeout(()=> {
			document.getElementById("output").innerText = multi.toString();
                        resolve(multi);
		}, 2000)
	})
})
}