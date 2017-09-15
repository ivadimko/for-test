'use strict';
window.onload = () => {
	load();
	//taskJS.squareBorder(); // draw a border
	//taskJS.squareColor(); // paint border or background in dependence on elements parity
	//taskJS.squareNewLine(); //every 4th element from new line
	//taskJS.squareShadow(); //every 2nd element with shadow
	//taskJS.squareHover(); //magic
	//taskJS.squareClick(); //border changing on click
	//taskJS.squareSort(); //sort squares
}
let taskJS = {
	data : {}
	,btncont : document.querySelector('.btn_container')
	,squareCont : document.querySelector('.square_container')
	,readObject : (callback, obj) => {
		for (let key in obj) {
			let value = obj[key];
			typeof value === 'object' && value !== null ? taskJS.readObject(callback, value) : callback(key, obj);
		}
	}
	,drawSquare : (key, obj) =>{
		let color = 				obj[key];
		const		newSquare = 		document.createElement('div'),
		squaresize =		150;
		newSquare.className = "square";
		newSquare.innerHTML = ('<p>key = <b>' + key + '</b></p>' + 
			'<p>color: <b>' + color + '</b></p>');
		newSquare.style.backgroundColor = color;
		newSquare.style.borderColor =  ('black');
		newSquare.style.display = ('inline-block');
		newSquare.style.height = newSquare.style.width = (squaresize + 'px');
		taskJS.squareCont.appendChild(newSquare);			
	}
	,squareBorder : () => {
		const			controlButton =	document.createElement('button');
		controlButton.classList.add('bordercontrol', 'button');
		controlButton.innerHTML = 'Enable Border';
		taskJS.btncont.appendChild(controlButton);
		controlButton.addEventListener('click', function(){
			const squares = 			document.querySelectorAll('.square');
			if (this.classList.contains('enabled')) {
				for (let i = 0; i < squares.length; i++) {
					squares[i].style.borderWidth =  '';
					this.classList.remove('enabled');
					this.innerHTML = 'Enable Borders';
				}} else {
					for (let i = 0; i < squares.length; i++) {
						let innerKey =	squares[i].getElementsByTagName('b')[0].innerHTML;
						squares[i].style.borderWidth =  (innerKey + 'px');
						squares[i].style.borderStyle =  ('solid');
						this.classList.add('enabled');
						this.innerHTML = 'Disable Borders';
					}
				}
			}) 						
		
	}
	,squareColor : () => {
		const			controlButton =	document.createElement('button');
		controlButton.classList.add('colorcontrol', 'button');
		controlButton.innerHTML = 'Repaint Squares';
		taskJS.btncont.appendChild(controlButton);
		controlButton.addEventListener('click', function(){
			const squares = 	document.querySelectorAll('.square');
			if (this.classList.contains('enabled')) {
				for (let i = 0; i < squares.length; i++) {
					let innerColor =	squares[i].getElementsByTagName('b')[1].innerHTML;
					squares[i].style.backgroundColor = innerColor;
					squares[i].style.borderColor =  ('black');
				}
				this.classList.remove('enabled');
				this.innerHTML = 'Repaint Squares'
			} else {					
				for (let i = 0; i < squares.length; i++) {
					let innerKey =		squares[i].getElementsByTagName('b')[0].innerHTML;
					let innerColor =	squares[i].getElementsByTagName('b')[1].innerHTML;
					if (innerKey % 2 == 0) {
						squares[i].style.borderColor = innerColor;
						squares[i].style.backgroundColor = ('transparent');
					} else {
						squares[i].style.backgroundColor = innerColor;
					}
				}
				this.classList.add('enabled');
				this.innerHTML = 'Repaint Squares Back'
			}
		});
	}
	,squareNewLine : () => {
		const			controlButton =	document.createElement('button');
		controlButton.classList.add('dropcontrol', 'button');
		controlButton.innerHTML = 'Drop Squares';
		taskJS.btncont.appendChild(controlButton);
		controlButton.addEventListener('click', function(){
			const squares = document.querySelectorAll('.square');
			if (this.classList.contains('enabled')) {
				for (let i = 0; i < squares.length; i++) {
					squares[i].style.display = 'inline-block';
				}
				this.classList.remove('enabled');
				this.innerHTML = 'Drop Squares'
			} else {
				for (let i = 0; i < squares.length; i++) {
					if ((i+1) % 4 == 0) {
						squares[i].style.display = 'block';
					}
				}
				this.classList.add('enabled');
				this.innerHTML = 'Back Up Squares'
			}
		});
	}
	,squareShadow : () => {
		const			controlButton =	document.createElement('button');
		controlButton.classList.add('shadowcontrol', 'button');
		controlButton.innerHTML = 'Add Shadow';
		taskJS.btncont.appendChild(controlButton);
		controlButton.addEventListener('click', function(){
			const squares = document.querySelectorAll('.square');
			if (this.classList.contains('enabled')) {
				for (let i = 0; i < squares.length; i++) {
					squares[i].style.boxShadow = '';
				}
				this.classList.remove('enabled');
				this.innerHTML = 'Add Shadow';
			} else {			
				for (let i = 0; i < squares.length; i++) {
					let innerColor =	squares[i].getElementsByTagName('b')[1].innerHTML; 
					if ((i+1) % 2 == 0) {
						squares[i].style.boxShadow = ('5px 5px 10px ' + innerColor);
					}
				}
				this.classList.add('enabled');
				this.innerHTML = 'Remove Shadow';
			}
		});
	}
	,squareHover : () => {
		let squares = 	document.querySelectorAll('.square');					
		for (let i = 0; i < squares.length; i++) {
			let prevBG = '';
			squares[i].addEventListener('mouseover', function(){
				this.style.transform = 'rotate(7deg)';
				if ($(this).next().is('.square')) {
					this.nextSibling.style.opacity = '0.5';
				}
				if ($(this).prev().is('.square')) {
					prevBG = this.previousSibling.style.backgroundColor;
					this.previousSibling.style.backgroundColor = 'yellow';
				}	
			});
			squares[i].addEventListener('mouseout', function(){
				this.style.transform = '';
				if ($(this).prev().is('.square')) {
					this.previousSibling.style.backgroundColor = prevBG;
				}
				if ($(this).next().is('.square')) {
					this.nextSibling.style.opacity = '1';
				}
			});
		}
	}
	,squareClick : () => {
		let squares = 	document.querySelectorAll('.square');					
		for (let i = 0; i < squares.length; i++) {
			squares[i].addEventListener('click', function(){
				let thsborder= (parseInt(this.style.borderWidth, 10));
				if (this.classList.contains('activated')) {
					this.classList.toggle('activated');
					this.style.borderWidth = (thsborder / 3 + 'px');
				} else {
					this.style.borderWidth = (thsborder * 3 + 'px');
					this.classList.toggle('activated');
				}
			});
		}
	}
	,squareSort : () => {
		let btn = document.createElement('button');
		btn.classList.add('button');
		btn.innerHTML =			('Sort ASC')
		taskJS.btncont.appendChild(btn);
		let array = [].slice.call($('.square'));
		btn.addEventListener('click', function(){
			if (this.classList.contains('sorted_asc')) {
				let descArray = [].slice.call($('.square'));
				descArray.sort(function (a, b) {
					a = $(a).text();		
					b = $(b).text();
					return a < b ? 1 : a > b ? -1 : 0
				});
				$(descArray).appendTo(taskJS.squareCont);
				this.classList.remove('sorted_asc');
				this.classList.add('sorted_desc');
				this.innerHTML = 'Sort Default';
			} else if (this.classList.contains('sorted_desc')) {
				let	defoulArray = array;
				$(defoulArray).appendTo(taskJS.squareCont);
				this.classList.remove('sorted_desc');
				this.innerHTML = 'Sort ASC';
			} else {
				let ascArray = [].slice.call($('.square'));
				ascArray.sort(function (a, b) {
					a = $(a).text();		
					b = $(b).text();
					return a < b ? -1 : a > b ? 1 : 0
				});
				$(ascArray).appendTo(taskJS.squareCont);
				this.classList.add('sorted_asc');
				this.innerHTML = 'Sort DESC';
			}

		});
	}
}
function load() {
	if (localStorage.length > 0) {
		for (let i = 0; i < localStorage.length; i++) {
			let btnClass = localStorage.getItem('btn_' + i + '_class'),
					btnHtml = localStorage.getItem('btn_' + i + '_html'),
					sqrClass = localStorage.getItem('sqr_' + i + '_class'),
					sqrHtml = localStorage.getItem('sqr_' + i + '_html'),
					sqrStyle = localStorage.getItem('sqr_' + i + '_style');
			if (btnClass && btnHtml) {
				console.log(btnClass, btnHtml);
				let newBtn = document.createElement('button');
				newBtn.classList = btnClass;
				newBtn.innerHTML = btnHtml;
				taskJS.btncont.appendChild(newBtn);
			}
			if (sqrClass && sqrHtml && sqrStyle) {
				console.log(sqrClass, sqrHtml, sqrStyle);
				let newSqr = document.createElement('div');
				newSqr.classList = sqrClass;
				newSqr.innerHTML = sqrHtml;
				newSqr.style.cssText = sqrStyle;
				taskJS.squareCont.appendChild(newSqr);
			}
		}
		var loadbtn = document.querySelector('.loadjson');
	} else {
		var loadbtn = document.createElement('button');
		loadbtn.classList.add('loadjson', 'button');
		loadbtn.innerHTML = 'Load Data';
		taskJS.btncont.appendChild(loadbtn);
	}

	loadbtn.addEventListener('click', function(){
		if (this.classList.contains('loaded')) {
			taskJS.readObject (taskJS.drawSquare, taskJS.data);
			taskJS.squareBorder(); // draw border around squares
			taskJS.squareColor(); // paint border or background in dependence on elements parity
			taskJS.squareNewLine(); //every 4th element from new line
			taskJS.squareShadow(); //every 2nd element with shadow
			taskJS.squareHover(); //magic
			taskJS.squareClick(); //border changing on click
			taskJS.squareSort(); //sort squares	
			this.classList.add('complete');
			this.classList.remove('loaded');
			this.innerHTML = 'Clear All'
			const buttons = document.querySelectorAll('.button'),
			squares = document.querySelectorAll('.square');
			for (let i = 0; i < buttons.length; i++) {
				localStorage.setItem('btn_' + i + '_class', buttons[i].classList);
				localStorage.setItem('btn_' + i + '_html', buttons[i].innerHTML);
			}
			for (let i = 0; i < squares.length; i++) {
				squares[i].setAttribute('data-sqrid', 'sqr_' + i);
				localStorage.setItem('sqr_' + i + '_class', squares[i].classList);
				localStorage.setItem('sqr_' + i + '_html', squares[i].innerHTML);
				localStorage.setItem('sqr_' + i + '_style', squares[i].style.cssText);
			}

		} else if (this.classList.contains('complete')){
			taskJS.squareCont.innerHTML = '';
			this.classList.remove('complete');
			this.innerHTML = 'Load Data';
			const buttons = document.querySelectorAll('.button')
			for (let i = 1; i < buttons.length; i++) {
				taskJS.btncont.removeChild(buttons[i]);
			}
			localStorage.clear();
		} else {
			fetch("./assets/scripts/data.json")
			.then((response) => {
				return response.json();
			})
			.then((json) => {
				taskJS.data = json;
			});
			this.classList.add('loaded');
			this.innerHTML = ('Draw Squares');
			alert('Succes, press Draw Squares to continue');
		}
	})

}