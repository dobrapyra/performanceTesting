/*!
 * EasyPure
 * author: dobrapyra
 * version: 2017-08-17
 * begin
 */

Array.prototype.each = function( fn ) {
  if( typeof fn !== 'function' ) return;
  var arr = this, i, l = arr.length, result;
  for( i = 0; i < l; i++ ) {
    result = fn( arr[ i ], i );
    if( result === true ) continue;
    if( result === false ) break;
  }
};
NodeList.prototype.each = Array.prototype.each;
HTMLCollection.prototype.each = Array.prototype.each;

Element.prototype.getOffset = function( relEl, withScroll ) {
  var el, offset = { l: 0, t: 0 };
  for( el = this; el && el !== relEl; el = el.offsetParent ) {
    offset.l += el.offsetLeft;
    offset.t += el.offsetTop;
    if( withScroll ) {
      offset.l -= el.scrollLeft;
      offset.t -= el.scrollTop;
    }
  }
  return offset;
};

/*!
 * EasyPure
 * author: dobrapyra
 * version: 2017-08-17
 * end
 */

/* loop - begin */

Array.prototype.fastEach = function( fn ) {
  var arr = this, i, l = arr.length, result;
  for( i = 0; i < l; i++ ) {
    fn( arr[ i ], i );
  }
};
NodeList.prototype.fastEach = Array.prototype.fastEach;
HTMLCollection.prototype.fastEach = Array.prototype.fastEach;

Array.prototype.fasterEach = function( fn ) {
  var arr = this, i, l = arr.length, result;
  for( i = 0; i <= l; ++i ) {
    fn( arr[ i ], i );
  }
};
NodeList.prototype.fasterEach = Array.prototype.fasterEach;
HTMLCollection.prototype.fasterEach = Array.prototype.fasterEach;


function loop1(){
	var s = 0;
	for( var i = 0; i < testArr1.length; i++ ){
		if( i % 2 === 0 ){
			s += i;
		}else{
			s -= i;
		}
	}
}

function loop2(){
	var i = 0, l = testArr1.length, s = 0;
	for( i; i < l; i++ ){
		if( i % 2 === 0 ){
			s += i;
		}else{
			s -= i;
		}
	}
}

function loop3(){
	var s = 0;
	Array.from(testArr1).map( function(el,i){
		if( i % 2 === 0 ){
			s += i;
		}else{
			s -= i;
		}
	} )
}

function loop4(){
	var s = 0;
	Array.from(testArr1).forEach( function(el,i){
		if( i % 2 === 0 ){
			s += i;
		}else{
			s -= i;
		}
	} )
}

function loop5(){
	var s = 0;
	Array.prototype.map.call( testArr1, function(el,i){
		if( i % 2 === 0 ){
			s += i;
		}else{
			s -= i;
		}
	} )
}

function loop6(){
	var s = 0;
	Array.prototype.forEach.call( testArr1, function(el,i){
		if( i % 2 === 0 ){
			s += i;
		}else{
			s -= i;
		}
	} )
}

function loop7(){
	var s = 0;
	testArr1.each( function(el,i){
		if( i % 2 === 0 ){
			s += i;
		}else{
			s -= i;
		}
	} )
}

function loop8(){
	var s = 0;
	testArr1.fastEach( function(el,i){
		if( i % 2 === 0 ){
			s += i;
		}else{
			s -= i;
		}
	} )
}

function loop9(){
	var s = 0;
	testArr1.fasterEach( function(el,i){
		if( i % 2 === 0 ){
			s += i;
		}else{
			s -= i;
		}
	} )
}

/* loop - end */

/* style - begin */

function style1(){
	var i = 0, l = testArr1.length;
	for( i; i < l; i++ ){
		testArr1[i].style.backgroundColor = '#fff';
		testArr1[i].style.color = '#fff';
		testArr1[i].style.textTransform = 'underline';
	}
}

function style2(){
	var i = 0, l = testArr1.length, is;
	for( i; i < l; i++ ){
		is = testArr1[i].style;
		is.backgroundColor = '#fff';
		is.color = '#fff';
		is.textTransform = 'underline';
	}
}

/* style - end */

/* mapping - begin */

function mapping1(){
	var s = 0, outArr = [];
	for( var i = 0; i < testArr2.length; i++ ){
		outArr.push( testArr2[i] % 2 === 0 );
	}
}

function mapping2(){
	var i = 0, l = testArr2.length, outArr = [];
	for( i; i < l; i++ ){
		outArr.push( testArr2[i] % 2 === 0 );
	}
}

function mapping3(){
	var outArr = [];
	outArr = testArr2.map(function(el){
		return ( el % 2 === 0 );
	});
}

function mapping4(){
	var outArr = [];
	testArr2.forEach(function(el){
		outArr.push( el % 2 === 0 );
	});
}

function mapping5(){
	var outArr = [];
	testArr2.each(function(el){
		outArr.push( el % 2 === 0 );
	});
}

/* mapping - end */

/* filtering - begin */

function filtering1(){
	var s = 0, outArr = [];
	for( var i = 0; i < testArr2.length; i++ ){
		if( testArr2[i] % 2 === 0 ) outArr.push( testArr2[i] );
	}
}

function filtering2(){
	var i = 0, l = testArr2.length, outArr = [];
	for( i; i < l; i++ ){
		if( testArr2[i] % 2 === 0 ) outArr.push( testArr2[i] );
	}
}

function filtering3(){
	var outArr = [];
	outArr = testArr2.filter(function(el){
		return ( el % 2 === 0 );
	});
}

function filtering4(){
	var outArr = [];
	testArr2.forEach(function(el){
		if( el % 2 === 0 ) outArr.push( el );
	});
}

/* filtering - end */

/* getOffset - begin */

function getOffset(el, relEl){
	if( !el || el === relEl ) return { l: 0, t: 0 };
	var eOff = { l: el.offsetLeft, t: el.offsetTop };
	var pOff = getOffset( el.offsetParent, relEl );
	return { l: eOff.l + pOff.l, t: eOff.t + pOff.t };
}

Element.prototype.getOffset = function(relEl){
	var el, offset = { l: 0, t: 0 };
	for( el = this; el && el !== relEl; el = el.offsetParent ){
		offset.l += el.offsetLeft;
		offset.t += el.offsetTop;
	}
	return offset;
};

function getOffset1(i){
	if( !i ) console.log( getOffset( childEl ) );
	else getOffset( childEl );
}

function getOffset2(i){
	if( !i ) console.log( childEl.getOffset() );
	else childEl.getOffset();
}

/* getOffset - end */

function reset(){
	var i = 0, l = testArr1.length, is;
	for( i; i < l; i++ ){
		is = testArr1[i].style;
		is.backgroundColor = '';
		is.color = '';
		is.textTransform = '';
	}
}

function median( sequence ){
	sequence.sort();  // note that direction doesn't matter
	return sequence[Math.ceil( sequence.length / 2 )];
}

function measureFn( fn ) {
	var i, t0, t1, measures = [], repeat = 500;
	
	for( i = 0; i < 500; i++ ){
		t0 = performance.now();
		fn(i);
		t1 = performance.now();
		measures.push( t1 - t0 );
		reset();
	}

	console.log( fn.name, ':', median( measures ).toFixed(4) );
}

function runTest(){
	console.log( '1s to start test' );

	setTimeout( function(){

		// // test1
		// measureFn( loop1 );
		// measureFn( loop2 );
		// measureFn( loop3 );
		// measureFn( loop4 );
		// measureFn( loop5 );
		// measureFn( loop6 );
		// measureFn( loop7 );
		// measureFn( loop8 );
		// measureFn( loop9 );
		// measureFn( loop1 );
		// measureFn( loop2 );
		// measureFn( loop3 );
		// measureFn( loop4 );
		// measureFn( loop5 );
		// measureFn( loop6 );
		// measureFn( loop7 );
		// measureFn( loop8 );
		// measureFn( loop9 );

		// // test2
		// measureFn( style1 );
		// measureFn( style2 );
		// measureFn( style1 );
		// measureFn( style2 );

		// // test3
		// measureFn( mapping1 );
		// measureFn( mapping2 );
		// measureFn( mapping3 );
		// measureFn( mapping4 );
		// measureFn( mapping5 );
		// measureFn( mapping1 );
		// measureFn( mapping2 );
		// measureFn( mapping3 );
		// measureFn( mapping4 );
		// measureFn( mapping5 );

		// // test4
		// measureFn( filtering1 );
		// measureFn( filtering2 );
		// measureFn( filtering3 );
		// measureFn( filtering4 );
		// measureFn( filtering1 );
		// measureFn( filtering2 );
		// measureFn( filtering3 );
		// measureFn( filtering4 );

		// // test5
		// measureFn( getOffset1 );
		// measureFn( getOffset2 );
		// measureFn( getOffset1 );
		// measureFn( getOffset2 );

		console.log( 'test finished' );
	}, 1000 );
}

var testArr1 = []; // html collection
var testArr2 = []; // standard array
var childEl = null; // standard array

window.onload = function(){

	var i, tmpEl, body = document.body, html, elsCount = 10000;
	for( i = 0; i < elsCount; i++ ){
		tmpEl = document.createElement('div');
		tmpEl.innerText = 'Element: ' + i;
		tmpEl.exampleVal = i;
		body.appendChild( tmpEl );
		testArr2.push(i);
	}
	testArr1 = document.getElementsByTagName('div');

	body.style.margin = '0';

	tmpEl = document.createElement('div');
	html = '';
	for( i = 0; i < 30; i++ ){
		html += '' +
		'<div style="padding-top: 4px;">' +
		'<div style="padding-top: 3px; padding-left: 1px;">' +
		'<div style="padding-left: 2px;">' +
		'';
	}
	html += '<div id="child">child</div>';
	for( i = 0; i < 30; i++ ){
		html += '' +
		'</div>' +
		'</div>' +
		'</div>' +
		'';
	}
	tmpEl.innerHTML = html;
	body.appendChild( tmpEl );
	childEl = document.getElementById('child');
};