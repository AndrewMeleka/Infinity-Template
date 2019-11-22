const myNav    =  document.getElementById('inf-nav'),
      myHeader =  document.getElementById('inf-heading'),
      heightWindow = window.innerHeight;


// when user scroll
window.onscroll = function () {
    if(window.scrollY > heightWindow){
        myNav.classList.remove('container','inf-top','rounded-pill');
    }else{
        myNav.classList.add('container','inf-top','rounded-pill');
    }
    for (let i = 0; i < myPosition.length; i++){
      if(myPosition[i] <= window.scrollY){
            activeMePlease(sections[i]);
        }
    }
};


// set header height to full screen
myHeader.style.height = `${heightWindow}px`;


// Infinity counter
function startInf(element,startNum,endNum){
    element.parentElement.childNodes[0].nextElementSibling.style.display = 'none';
    setInterval(function () {
        if(startNum<endNum){
            startNum += 1;
            element.textContent = startNum;
        } else {
            element.style.display = 'none';
            element.parentElement.childNodes[0].nextElementSibling.style.display = 'inline-block';
            clearInterval();
        }

    },500);

}

startInf(document.getElementById('infCounter'),0,8);


