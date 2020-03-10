//start with string
var tempMem = ""; 

const display = document.querySelector('#display');
//parseInt(tempMem);

function getHistory() {
	//maipulate history
	return document.getElementById('previous-operand').innerText;
}
//alert(getHistory());

function printHistory(num) {
	document.getElementById('previous-operand').innerText = num;
}

function getOutput() {
	return document.getElementById('display').innerText;

}
function printOutput(num) {
	//start with temp mem string 
//	string plus number coerces into string
	
	
//	tempMem = tempMem + num
	
//console.log(tempMem); 
	if (num) {
		document.getElementById('display').innerText = num;
	} else {
		//		..convert to comma seperated value
		document.getElementById('display').innerText = getFormattedNumber(tempMem);
		 (getFormattedNumber(tempMem), 'getformattednumber');
	}
	
}

document.querySelectorAll('[data-value]').forEach(el => {
	el.onclick = e => {
//		el.dataset.value
//		console.log(el.dataset.value)
//		display.innerText += el.dataset.value ;
//     val is for field elements
		if(display.innerText === "0") {
			display.innerText = el.dataset.value
		} else  {
			display.innerText += el.dataset.value;
		}
			
	}
	
	
})



document.querySelector('#equals').onclick = () => {
		let result = eval(display.innerText);
		display.innerText = result;
}

document.querySelector('#clear').onclick = () => {
	display.innerText = 0;
}



function getFormattedNumber(num) {
	
	var n = Number(num);
//	var value = n.toLocaleString("en");
//	console.log(n)
	return n;

}

function clearOutput() {
	{
		tempMem = 0;
	}
}

function reverseNumberFormat(num) {
	return Number(num.replace(/,/g, ''));
}

var operator = document.getElementsByClassName("operator disabled");
for (var i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click', function () {
		if (this.id === "clear") {
		   clearOutput();
//			printHistory(0);
//			printOutput(0);


		} else if (this.id === "backspace") 
		{ var output = reverseNumberFormat(getOutput()).toString();
			if (output) { //if output has a value
				output = output.substr(0, output.length - 1);
				console.log(Number(printOutput(output)));
			}
		} else {
			var output = getOutput();
			var history = getHistory();
			if (output === "" && history != "") {
				if (isNaN(history[history.length - 1])) {
//					history = history.substr(0, history.length - 1);
				}
			}
			if (output != "" || history != "") {
				output = output === "" ?
					output : reverseNumberFormat(output);

				history = history + output;
				if (this.id === "=") {
					var result = eval(history);
					printOutput(result);
					printHistory("");


				} else {
					history = this.id;
//					console.log(history);
					printHistory(history);
					printOutput("");

				
				}
			}
		}

//      console.log(history);
	});
}

function toString(num) {
	
}
function getTarget(btnVal) {
	
	if(btnVal === del){
    tempMem = "";
	}
	else if(btnVal === clear) {
//		tempMem = 0;
	}
	else 
	{
	tempMem = tempMem + btnVal.toString();
	}

	printOutput(tempMem);
	console.log(btnVal, tempMem);
	
}






//var number = document.getElementsByClassName("number");
//for (var i = 0; i<number.length; i++){
//	number[i].addEventListener('click', function(){
//		//get output commas removed
//    	var output = reverseNumberFormat(getOutput());
////		
//    	if(output!=NaN) {//if output is a number
//        output=output+this.id;
//  		printOutput(output);
//     	}
//		
//		console.log(number);
//
//	});
//}

//alert(reverseNumberFormat(getOutput()));









//window.addEventListener('DOMContentLoaded', init);
//const opts = ['*', '/', '+', '-', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.']; //all keys
//const spec = ['*', '/', '+', '-']; //special function keys
//function init() {
//  document.title = "JavaScript Project";
//  console.log('ready');
//    //switch
//  let dec = false;
//  let eva = false;
//  const container = document.createElement('div');
//  container.classList.add('container');
//  container.style.maxWidth = '600px';
//  container.style.margin = 'auto';
//  document.body.appendChild(container);
//  const output = document.createElement('input');
//  output.setAttribute('type', 'text');
//  output.classList.add('output');
//  output.style.width = '100%';
//  output.style.lineHeight = '50px';
//  output.style.fontSize = '3em';
//  output.style.textAlign = 'right';
//  container.appendChild(output);
//  const main = document.createElement('div');
//  main.classList.add('main');
//  main.style.width = '100%';
//  container.appendChild(main);
//  opts.forEach(function (val) {
//    //console.log(val);
//    btnMaker(val, addOutput);
//  })
//    
//    
//    //evaluate the calculations
//    
//    btnMaker('=', evalOutput);
//    btnMaker('C', clrOutput);
//    
//    
//    
//    function cOutput(v){
//        output.style.border = v + '1px solid';
//        output.style.color = v;
//    }
//    
//    
//    
//    function evalOutput() {
//        cOutput('black');
////        output.style.border = 'black 1px solid';
//        if(output.value ==== ""){
//            cOutput('red');
//        } else if (eva) {
//             cOutput('red');
//        }
//        
//        else {
//            //update output value with eval of whatever outpus value is 
//            output.value = eval(output.value);
//        }
//        dec = output.value.includes('.');
//        
//    }
//    
//    
//    
//    
//    function clrOutput() {
//        cOutput('black');
//        output.value = "";
//    }
// 
//  function btnMaker(txt, myFunction) {
//    let btn = document.createElement('button');
//    btn.setAttribute('type', 'buttom');
//    btn.style.width = '23%';
//    btn.style.lineHeight = '50px';
//    btn.style.margin = '1%';
//    btn.style.fontSize = '2em';
//    btn.val = txt;
//    btn.textContent = txt;
//    btn.addEventListener('click', myFunction);
//    main.appendChild(btn);
//  }
// 
//  function addOutput(e) {
//      console.log(dec);
//      cOutput('black');
////    console.log(e.target.val);
//    let char = e.target.val;
////    output.value += char;
//      //if charachter is decimal
//      if (char === '.') {
//          if (dec){
//              char = '';
//             cOutput('red');
//          } else {
//              dec = true;
//          }
//      }
//      eva = spec.includes(char);
//      if(eva) {
//          dec = false;
//      }
//        output.value += char;
//  }
//}
