const myUl = document.getElementById("listLinks"),
      myLi = myUl.children,
      sections = getSections(),
      myPosition = getPositions(sections);

function removeAllActive() {
    for(let i = 0; i < myUl.children.length;i++){
        myLi[i].classList.remove("active");
    }
}

function activeMePlease(ele) {
    for (let i = 0; i < myUl.children.length; i++){
        let myHrefAnchor = myLi[i].firstElementChild.getAttribute('href');
        if(myHrefAnchor === `#${ele}`){
            removeAllActive();
            myLi[i].classList.add("active");
        }else{
            myLi[i].classList.remove("active");
        }
    }

}

function getSections(){
    let mySecs = [];
    for(let i = 0; i < myUl.children.length;i++){
        let myAnchorHref = myLi[i].children[0].getAttribute('href');
        mySecs.push(myAnchorHref.replace('#',''))
    }
    return mySecs;
}
function getPositions(sections) {
    let arrPositions = [];
    sections.forEach(addPosition);
    function addPosition(value) {
        arrPositions.push(document.getElementById(value).offsetTop);
    }
     return arrPositions;
}

for(let i = 0; i < myUl.children.length;i++){
    myLi[i].addEventListener("click",function () {
        removeAllActive();
        this.classList.add("active");
    },false);
}

