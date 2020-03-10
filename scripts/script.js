alert ("W T F");

/*
val TypeOfBelt = arrayOf("z","a","b","20","c","25","d","38","e", "spz","spa","spb","spc","xpz","xpa","xpb")
    val dPi = arrayOf(20,30,40,50,50,60,75,80,80,51,63,82,113,51,63,82)
    val dPa = arrayOf(16,20,26,31,36,40,51,75,62,13,18,22,30,13,18,22)


типы забитые в  belt_c.html в порядке выпадения
	 <option value = "1" >A </option>
      <option value = "2">B </option>
      <option value = "3">C </option>
      <option value = "4">D </option>
      <option value = "5">Z </option>



*/

var deltaInner = [30,40,50,75,20];
var deltaOuter = [20,26,36,51,16];

var 	selectedLenIndex=0,
		 selectedProfileBeltIndex=0,
		 lengthMm=0;




document.addEventListener('DOMContentLoaded', () => {

		
	document.querySelector('#selectLen').onchange = selectLen;

	document.querySelector('#selectProfile').onchange = beltIndex;

	document.querySelector('#calculate').onclick = calculatePracticalLength;
	

		
});


function selectLen ()
{
	
	selectedLenIndex =document.querySelector('#selectLen').options.selectedIndex;
	console.log("selectLen function the length index of belt is:  " + selectedLenIndex );

//	let elem = document.getElementById("calculationResult");
	
//	elem.innerHTML = selectedLenIndex;
//alert(selectedLenIndex);

}

function beltIndex() 
{

	selectedProfileBeltIndex =document.querySelector('#selectProfile').options.selectedIndex;	
	console.log("beltIndex function index of belt type is: " + selectedProfileBeltIndex);
	
//	let elem = document.getElementById("calculationResult");
//	elem.innerHTML = selectedProfileBeltIndex;

}

function calculatePracticalLength()

{	
	let outputField = document.getElementById("calculationResult");	 
	let practicalLength =0;
	lengthMm = document.getElementById("beltLength").value;

	if(lengthMm && !isNaN(lengthMm))
	{
		console.log("calculatePracticalLength = " + lengthMm);
		// alert('is digit'+lengthMm);
	}
		
	else
	 {
		console.warn('Hren');
		alert("Ввели не цифры , введите длину ремня в миллиметрах "+ lengthMm);
		outputField.innerHTML ='';	
		
		return;
	 }
		 
		 
	
	
	

	switch (selectedLenIndex) {
		case 0:
			{
				console.log ("Выбрана внутренняя длина");
				practicalLength =  Number(lengthMm)  + Number(deltaInner[selectedProfileBeltIndex]);
				console.log('lengthMm='+lengthMm);
				console.log('deltaInner[selectedProfileBeltIndex]='+deltaInner[selectedProfileBeltIndex]);
				console.log('selectedProfileBeltIndex='+selectedProfileBeltIndex);
				console.log("Расчетная длина = " + practicalLength);		

				
				outputField.innerHTML = "Расчетная длина = " + practicalLength + "мм";
			}
			
			break;

		case 1:
			{
				console.log ("Выбрана наружная длина");
				practicalLength = lengthMm - deltaOuter[selectedProfileBeltIndex];
				console.log("Расчетная длина = " + practicalLength);	
				outputField.innerHTML = "Расчетная длина = " + practicalLength +"мм";	
			}
			
			break;
	
		default:
			alert('Почитайте или спросите как измерять ремни...');
			console.warn ('What are U thinking about when select length????  stupid idiot');
			break;
	}

	
		
	
	
	return false;

}
