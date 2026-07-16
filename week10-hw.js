// JavaScript Document
let images=Array.from(document.getElementsByTagName('img'));
let newGameBtn=document.getElementById('newGameBtn');
let clearScoreboardBtn=document.getElementById('clearScoreboardBtn');
let selectAsideEL= document.getElementsByTagName('aside')[0];
let selectTbodyTag=document.getElementsByTagName('tbody')[0];


newGameBtn.addEventListener('click', startNewGame);

let collectionOfPics=['images/angular.svg','images/aurelia.svg','images/backbone.svg','images/ember.svg','images/react.svg','images/vue.svg','images/angular.svg','images/aurelia.svg','images/backbone.svg','images/ember.svg','images/react.svg','images/vue.svg'];

function startNewGame(){
//	for(let item of images){   // foreach dont work on getElementsByTagName but work on queryselectorall
//		item.setAttribute('src','images/js.svg');
//	}  
	renderImages();
	
}

let imgsSelectedforOnce=[6,3,5,2,4,1,8,9,7,10,11,0];

console.log(images);
function renderImages(){
	selectAsideEL.innerHTML='';
	imgsSelectedforOnce=[];
	
	
	let outIndex=0;
	while(true){
		let numOfSelectedImage=Math.floor(Math.random()*12);
		
		if(!imgsSelectedforOnce.includes(numOfSelectedImage)){
			imgsSelectedforOnce.push(numOfSelectedImage);
			let createImgTag= document.createElement('img');
			selectAsideEL.appendChild(createImgTag);
//			createImgTag.setAttribute('src',collectionOfPics[numOfSelectedImage]);
			createImgTag.setAttribute('src','images/js.svg');
		}
		
		
//		let index=0;
//		for(let item of imgsSelectedforOnce){
//			if(numOfSelectedImage!== item){
//				imgsSelectedforOnce.push(numOfSelectedImage);
//				let createImgTag= document.createElement('img');
//			selectAsideEL.appendChild(createImgTag);
//			createImgTag.setAttribute('src',collectionOfPics[numOfSelectedImage]);
//			}
////			else if(numOfSelectedImage=== item && outIndex!==0){
//////				if(numOfSelectedImage=== item && i!==0) i--;
//////				i--;
////				imgsSelectedforOnce.splice(index,1);
////			}
//			index++;
//		}
		if(imgsSelectedforOnce.length===12) break;
		outIndex++;
	}
	
//	while(true){
//	let numOfSelectedImage=Math.floor(Math.random()*12);
//		imgsSelectedforOnce.push(numOfSelectedImage);
//	for(let item of imgsSelectedforOnce){
//		if(numOfSelectedImage !== item){
//		
//		let createImgTag= document.createElement('img');
//			selectAsideEL.appendChild(createImgTag);
//			createImgTag.setAttribute('src',collectionOfPics[numOfSelectedImage]);
//		}
//	}
//	imgsSelectedforOnce.length===12 ? break : continue;
//	}
	
//	let selectImgsInsideAside=document.querySelectorAll('')
	
	images=[...document.getElementsByTagName('img')];

	
	for(let item of images){
		item.setAttribute('class','h-43 bg-[#0618ff] py-5 px-4 rounded-lg');
//		console.log(item.getAttribute('src'));
	};
	
	console.log(images);
	console.log(imgsSelectedforOnce);
	clickEventPerImages();
}
//console.log(imgsSelectedforOnce);
//console.log(images);
//images=[...images]; // to become htmlcollection to array. or: array.from(images). if we had used queryselectorall we didnt need to do this
//console.log(images);
let flip=[];
let correct=[];
let timesOfTrying=0;
function clickEventPerImages(){
for(let i=0;i<images.length;i++){
//	console.log(images[i]);
	images[i].addEventListener('click',()=>{
		if(images[i].getAttribute('src')==='images/js.svg'){
//		console.log(i);
		images[i].setAttribute('src',collectionOfPics[imgsSelectedforOnce[i]]);
		
		flip.push(images[i]);
		if (flip.length===2) checkSameImg();
//		console.log(item.getAttribute('class'));
//		console.log(item.src);
//		console.log(collectionOfPics[imgsSelectedforOnce[index]]);
	}
	})
}
}

let gamers=[];

function checkSameImg(){
			if(flip[0].getAttribute('src')===flip[1].getAttribute('src')){
				while(flip.length>0){
				let temp=flip.pop();
					correct.push(temp);
				}
			}else{
				// make two bottom line comment to see why else dosnt work without them. اگر دو خط زیر را غیرفعال کنیم تا یک ثانیه تمام شود تا settimeout اجرا شود خط های پس از آن اجرا میشود.
				let firstImgInFlip=flip[0];
				let secondImgInFlip=flip[1];
				setTimeout(()=>{
					firstImgInFlip.setAttribute('src','images/js.svg');
					secondImgInFlip.setAttribute('src','images/js.svg');
				},1000);
				while(flip.length>0){
				let temp=flip.pop();
			}
		}
	timesOfTrying++;
	console.log('timesOfTrying:',timesOfTrying,correct,correct.length);
	if(correct.length===12){
		correct=[];
				setTimeout(()=>{
			let name=prompt(`آفرین؛ با ${timesOfTrying} تلاش توانستی به پایان بازی برسی. لطفا نام خود را وارد کنید.`);
				gamers.push({name:name, score:timesOfTrying});	
				renderTable();
					timesOfTrying=0;
				},500)
				};
	}


function renderTable(){
	gamers.sort((a,b)=>a.score-b.score);
	let rowsCoded=gamers.slice(0,6).map((g)=>createRows(g));
	selectTbodyTag.innerHTML=rowsCoded.join('');
}
function createRows({name,score}){
	return `<tr>
						<td class="border border-[#0618ff]">${name}</td>
						<td class="border border-[#0618ff]">${score}</td>
					</tr>`
}

clearScoreboardBtn.addEventListener('click',()=>{
	gamers=[];
	selectTbodyTag.innerHTML='';
});


//---------------------------------for learn more-----------------------
//const firstimg=selectAsideEL.querySelector('img')
////console.log(firstimg);
//firstimg.dataset.productId='99';
//selectAsideEL.addEventListener('click',(event)=>{
//	console.log(event.target.dataset.productId);
//	console.log(event.target.name);
//})
//
//let testtext='he wasnt there'.replace('he', 'she');
//console.log(testtext.replace('there', 'here'));