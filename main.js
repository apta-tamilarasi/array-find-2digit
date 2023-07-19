var arr=[12, 13, 40, 33, 45, 22, 94];

	document.write("Given array is "+"[12, 13, 40, 33, 45, 22, 94]"+"<br><br>");
	document.write("Find even number"+"<br><br>");
	
for (let i=0; i<arr.length; i++){
	if(arr[i]%2==0){
		document.write(arr[i]+"<br>")
	}
}