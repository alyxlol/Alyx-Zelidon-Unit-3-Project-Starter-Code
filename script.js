/* Declare variables below to save the different sections (divs) of your story*/
let woodsButton = document.querySelector(".option-one");
let woodsScreen = document.querySelector(".option-one-screen");
let wingsButton = document.querySelector(".option-two");
let wingsScreen = document.querySelector(".option-two-screen");
let mangoOption1 = document.querySelector(".mango1");
let mangoEndOne = document.querySelector(".mango-end-one");
let mangoOption2 = document.querySelector(".mango2");
let mangoEndTwo = document.querySelector(".mango-end-two");
let castleOption1 = document.querySelector(".castle1");
let castleEndOne = document.querySelector(".castle-end-one");
let castleOption2 = document.querySelector(".castle2");
let castleEndTwo = document.querySelector(".castle-end-two");
let storyopening = document.querySelector(".story-opening");



/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
*/
woodsButton.onclick=function(){
    woodsScreen.style.display="block";
storyopening.style.display="none";
    woodsButton.style.display="none";
    wingsButton.style.display="none";
};

wingsButton.onclick=function(){
wingsScreen.style.display="block";
    storyopening.style.display="none";
    woodsButton.style.display="none";
    wingsButton.style.display="none";
};

mangoOption1.onclick=function(){
mangoEndOne.style.display="block";
    console.log("mangoOption1.onclick");
    mangoOption1.style.display="none";
    mangoOption2.style.display="none";
    woodsScreen.style.display="none";
};

mangoOption2.onclick=function(){
mangoEndTwo.style.display="block";
     mangoOption1.style.display="none";
    mangoOption2.style.display="none";
    woodsScreen.style.display="none";
};

castleOption1.onmouseover=function(){
castleEndTwo.style.display="block";
    castleOption1.style.display="none";
    castleOption2.style.display="none";
    wingsScreen.style.display="none";
};

castleOption2.onmouseover=function(){
castleEndOne.style.display="block";
    castleOption1.style.display="none";
    castleOption2.style.display="none";
    wingsScreen.style.display="none";
};




