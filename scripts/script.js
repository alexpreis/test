alert ("W T F");

//var elem =document.querySelector('#formTypeBelt').visible = false;//.disabled = true;

document.addEventListener('DOMContentLoaded', function(){

		
	document.querySelector('#selectLen').onchange = selectLen;

	document.querySelector('#selectProfile').onchange = beltIndex;

	document.querySelector('#calculate').onclick = calculatePracticalLength;	
		
});


function selectLen ()
{
	
	var selectedLenIndex =document.querySelector('#selectLen').options.selectedIndex;

	let elem = document.getElementById("calculationResult");
	
	elem.innerHTML = selectedLenIndex;

	//document.querySelector('#selectProfile').disabled = false;
}

function beltIndex() 
{
	var selectedProfileBeltIndex =document.querySelector('#selectProfile').options.selectedIndex;	

	
   //val selind = document.getElementById('exampleFormControlSelect1').options.selectedIndex;
   //val txt= document.getElementById('selectProfile').options[selectedProfileBeltIndex].text;
   //val val= document.getElementById('selectProfile').options[selectedProfileBeltIndex].value;

	//	alert("Теxt= "+ txt +" " + "Value= " + val);
	
	let elem = document.getElementById("calculationResult");
	elem.innerHTML = selectedProfileBeltIndex;

}

function calculatePracticalLength()

{	
	

	let input = document.getElementById("beltLength").value;
	
	let elem = document.getElementById("calculationResult");
	elem.innerHTML = input;

	return false;

}
