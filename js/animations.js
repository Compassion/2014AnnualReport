
// data

var sponsLetter = [
    { 
        "text": "", 
        "number": 0 
    },
    { 
        "text": "children sponsored this year", 
        "number": 8436 //p72 
    }, { 
        "text": "children sponsored by Australians", 
        "number": 100996
    }, { 
        "text": "children sponsored worldwide", 
        "number": 1565168 //1428955 
    }, { 
        "text": "hardcopy letters written", 
        "number": 1
    }, { 
        "text": "letters written online", 
        "number": 2
    }, { 
        "text": "letters written this year", 
        "number": 162825
    }, { 
        "text": "Christmas cards sent this year", 
        "number": 51126
    }, { 
        "text": "of children receiving at least<br /> two sponsor letters per year", 
        "number": 41
    },
];

var financeData = [
    { 
        "text": "Child Sponsorship Program", 
        "number": 53711971, 
        "img": "/img/3_Finance_Income_IconCDSP_white.png", 
        "color":"Blue" 
    }, { 
        "text": "Critical Interventions Fund", 
        "number": 8619793, 
        "img": "/img/3_Finance_Income_IconCIV_white.png", 
        "color":"Yellow"   
    }, { 
        "text": "Gift Fund", 
        "number": 2636427, 
        "img": "/img/3_Finance_Income_IconGift_white.png", 
        "color":"Orange"  
    }, { 
        "text": "Christmas Fund", 
        "number": 2199686, 
        "img": "/img/3_Finance_Income_IconChristmas_white.png", 
        "color":"Red"  
    }, { 
        "text": "Child Survival Program", 
        "number": 1870901, 
        "img": "/img/3_Finance_Income_IconCSP_white.png", 
        "color":"Mauve"  
    }, { 
        "text": "Other", 
        "number": 2965948, 
        "img": "/img/3_Finance_Income_IconOther_white.png", 
        "color":"Light Blue"  
    } 
    ,{ 
        "text": "Program", 
        "number": 55044223, 
        "img": "/img/3_Finance_Expenditure_IconProgram_white.png", 
        "color":"Blue" 
    }, { 
        "text": "Fundraising", 
        "number": 9264616, 
        "img": "/img/3_Finance_Expenditure_IconFundraising_white.png", 
        "color":"Red"   
    }, { 
        "text": "Administration", 
        "number": 4832261, 
        "img": "/img/3_Finance_Expenditure_IconAdmin_white.png", 
        "color":"Mauve"  
    }, { 
        "text": "Community Education", 
        "number": 1103145, 
        "img": "/img/3_Finance_Expenditure_IconEducation_white.png", 
        "color":"Orange"  
    }
];

// Slide navigation

function slide(id, offset) {
    this.id = id;
    this.offset = offset;
}
var slideArray = [];

function getSlideHeights() {
    
        slideArray = []; 
    var slides = $(".slide"),
        slideID,
        slideOffset;
    
    for(i = 0; i < slides.length; i++ ) {
        slideID = slides[i].id;
        slideOffset = $("#"+slideID).offset().top;
        var slideStats = new slide(slideID, slideOffset);
        slideArray.push(slideStats);
    }
}

getSlideHeights();

var currentSlide = 0;

function nextSlide() {
    
    getSlideHeights();
    var next = currentSlide + 1;
    
    TweenLite.to(window, 2, {scrollTo: slideArray[next].offset, ease:Power4.easeOut});
    currentSlide = next;
    
    return currentSlide;
}

function previousSlide() {
    
    getSlideHeights();
    var prev = currentSlide - 1;
    
    TweenLite.to(window, 2, {scrollTo: slideArray[prev].offset, ease:Power4.easeOut});
    currentSlide = prev;
    
    return currentSlide;
}

function seekSlide(num) {
    getSlideHeights();
    TweenLite.to(window, 2, {scrollTo: slideArray[num].offset, ease:Power4.easeOut});
    currentSlide = num;
    
    return currentSlide;
}
function advanceTL() {
    slideShow.time(slideShow.time() + 0.1).play().timeScale(1);
}
function reverseTL() {
    if(slideShow.progress() < 0.01) {
        slideShow.pause(0);
    } else {
        slideShow.time(slideShow.time() - 0.1).reverse().timeScale(2);
    }
}

function flash(e) { 
        $(e).addClass("hover");
    
    function r() {
        $("#navArrows img").removeClass("hover");
        setTimeout(r, 3000)
    }
    
    setTimeout(r, 300);
}


// Animate Numbers Counting

var numberCounter = { number: 0 },
    numberCounter2 = { number: 0 };

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function updateCounter(destination) {
    var num = numberCounter.number,
        commaNumber = numberWithCommas(num),
        dest = document.getElementById(destination);
    
    if( num === 41) {
        return dest.innerHTML = commaNumber + "%";
    } else { 
        return dest.innerHTML = commaNumber;
    }
}
function updateCounter2(destination) {
    var num = numberCounter2.number,
        commaNumber = numberWithCommas(num.toFixed(2)),
        dest = document.getElementById(destination);
    
    return dest.innerHTML = commaNumber;
}


function updateText(array, position, destination) {
    var dest = document.getElementById(destination);
    return dest.innerHTML = array[position].text;
}

// Extra Timelines
// Story 1

function toggleVideo() {
    var video = document.getElementById("growthBgVid");   
    
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}


function randomNumber() {
    return Math.floor(Math.random() * (10 - 3)) + 3;
}

var rndm = randomNumber();

var story1 = new TimelineMax({paused: true, repeat:300});
var story1bg = new TimelineMax({paused: true, repeat:300});


    story1.add(TweenMax.to("#slide4 > img", 6, { left: "-=10", width: "-=5", top: "+=5", ease:Back.easeInOut}))
          .add(TweenMax.to("#slide4 > img", 8, { left: "+=5", width: "+=7.5", top: "-=10", ease:Back.easeInOut}))
          .add(TweenMax.to("#slide4 > img", 4, { left: "+=5", width: "-=2.5", top: "+=5", ease:Back.easeInOut}));
   
    story1bg.to("#slide4", 10, { backgroundSize: "+=2% +=2%", backgroundPosition: "+=50% +=50%" })
            .to("#slide4", 10, { backgroundSize: "-=2% -=2%", backgroundPosition: "-=50% -=50%" }, "+=10")

    
// Animate the world
var frameHeight = 1080,  frameWidth = 1920, numCols = 10, numRows = 7;
var steppedEase = new SteppedEase(numCols-1);
var world = new TimelineMax({paused: true, repeat:300, yoyo: true});

for(var i=0 ;i < numRows;i++){
    world.add( TweenMax.fromTo('#world', 2, { backgroundPosition:'0 -'+(frameHeight*i)+'px'}, { backgroundPosition: '-'+(frameWidth*(numCols-1))+'px -'+(frameHeight*i)+'px', ease:steppedEase} ));
}
    
function worldToggle() {
    
    if(world.paused()) {
        world.play();
    } else {
        //world.pause();
    }
}

// Bible Verse
var bva = document.getElementById("bibleVerseAnimate");
            
var frameHeightBVA =  800, 
    frameWidthBVA =   800, 
    numColsBVA = 1, 
    numRowsBVA = 4;

var steppedEaseBVA = new SteppedEase(numColsBVA);
var bibleVerse = new TimelineMax({repeat:-1});

for(var i=0 ;i < numRowsBVA;i++){
    bibleVerse.add( TweenMax.fromTo('#bibleVerseAnimate', 0.2, { backgroundPosition:'0 -'+(frameHeightBVA*i)+'px'}, { backgroundPosition: '-'+(frameWidthBVA*(numColsBVA-1))+'px -'+(frameHeightBVA*i)+'px', ease:steppedEaseBVA} ));
}

// Story Slideout 

function slideOut(storyNum) {
    var slide = "#slide" + storyNum,
        panel = slide + " .story-panel",
        box = slide + " .story-box";
    
    $(".darken").addClass("active");
    TweenMax.to("#navArrows", 0.5, { opacity: 0, ease:Expo.easeIn}), 
    TweenMax.to(panel, 0.5, { right: 0, ease:Expo.easeIn}), 
    TweenMax.to(box,  0.5, { opacity: 0, ease:Expo.easeOut });
}
function slideIn(storyNum) {
    var slide = "#slide" + storyNum,
        panel = slide + " .story-panel",
        box = slide + " .story-box";
    
    $(".darken").removeClass("active");
    TweenMax.to("#navArrows", 0.5, { opacity: 1, ease:Expo.easeIn}), 
    TweenMax.to(panel, 0.5, { right: -800, ease:Expo.easeOut }), 
    TweenMax.to(box,  0.5, { opacity: 1, ease:Expo.easeOut });
}

// Money Timelines

var frameHeightRG1 = 960, 
    frameWidthRG1 =   960,
    numColsRG1 = 1, 
    numRowsRG1 = 7;

var frameHeightEG1 = 960, 
    frameWidthEG1 =  960,
    numColsEG1 = 1, 
    numRowsEG1 = 5;

var steppedEaseRG1 = new SteppedEase(numColsRG1);
var steppedEaseEG1 = new SteppedEase(numColsEG1);


var revenueGraph = new TimelineMax({paused: true});

for(var i=0 ;i < numRowsRG1;i++){
    revenueGraph.addLabel("graph" + i)
                     .set('#revenueGraph', { backgroundPosition:'0 -'+(frameHeightRG1*i)+'px', ease:steppedEaseRG1},"+=1")
                .addPause();
}

var expenditureGraph = new TimelineMax({paused: true});

for(var i=0 ;i < numRowsEG1;i++){
    expenditureGraph.addLabel("graph" + i)
                         .set('#expenditureGraph', { backgroundPosition:'0 -'+(frameHeightEG1*i)+'px'}, "+=1")
                    .addPause();
}

// JQUERY STUFF
$("#navDown").click(function() {
        advanceTL();
    } 
);
$("#navUp").click(function() {
        reverseTL();
    } 
);
$("#downButton").click(function() {
        advanceTL();
    } 
);


$("section button").click(function() {

    switch(this.id) {
            case "story1Btn":
                slideOut(4);
                break;
            
            case "story2Btn":
                slideOut(8);
                break;

            case "story3Btn":
                slideOut(15);
                break;
            
            case "story1Close":
                slideIn(4);
                break;
            
            case "story2Close":
                slideIn(8);
                break;

            case "story3Close":
                slideIn(15);
                break;
            
            default:
                break;
    } 
});

$(".expander article").click(function() {
    if(this.classList.contains("five")) {
        $("article.five").attr("data-expand", false);
        this.setAttribute("data-expand", true);
    } else if(this.classList.contains("four")) {
        $("article.four").attr("data-expand", false);
        this.setAttribute("data-expand", true);
    }
});


// Finance Icon Click
function replaceFinContent(section, arrPos) {
    var num = "$" + numberWithCommas(financeData[arrPos].number),
        image = [],
        number = [],
        text = [];
        
    if(section === "exp") {
        image = $("#expenditureGraph .innerCircle img"),
        number = $("#expenditureGraph .innerCircle .number"),
        text =  $("#expenditureGraph .innerCircle .text");   
            
    } else if(section === "rev" ) {
        image = $("#revenueGraph .innerCircle img"),
        number = $("#revenueGraph .innerCircle .number"),
        text =  $("#revenueGraph .innerCircle .text");
    }
    
    image.attr("src", financeData[arrPos].img);
    text.html(financeData[arrPos].text);
    number.html(num);
    
}

$(".financeIcons .circle").hover(
    function() {
        var c = this.className.split(" ")[1],
            r = "rev",
            e = "exp",
            rc = $(".rev .circle"),
            ec = $(".exp .circle"),
          el = "." + c;
        
        $(".circle").addClass("other");
        $(el).removeClass("other");
        
        
        switch(c) {
            case "r1":
                replaceFinContent(r, 0);
                revenueGraph.pause(2);
                break;
                
            case "r2":
                replaceFinContent(r, 1);
                revenueGraph.pause(3);
                break;
                
            case "r3":
                replaceFinContent(r, 5);
                revenueGraph.pause(4);
                break;
                
            case "r4":
                replaceFinContent(r, 2);
                revenueGraph.pause(5);
                break;
                
            case "r5":
                replaceFinContent(r, 3);
                revenueGraph.pause(6);
                break;
                
            case "r6":
                replaceFinContent(r, 4);
                revenueGraph.pause(7);
                break;
                
            case "e1":
                replaceFinContent(e, 6);
                expenditureGraph.pause(2);
                break;
                
            case "e2":
                replaceFinContent(e, 7);
                expenditureGraph.pause(3);
                break;
                
            case "e3":
                replaceFinContent(e, 8);
                expenditureGraph.pause(4);
                break;
                
            case "e4":
                replaceFinContent(e, 9);
                expenditureGraph.pause(5);
                break;

            default:
                replaceFinContent(r, 0);
                replaceFinContent(e, 7);
                revenueGraph.pause(0);
                expenditureGraph.pause(0);
                break;
        }
    }, function() {
        $(".circle").removeClass("other");
        revenueGraph.pause("graph0");
        expenditureGraph.pause("graph0");
        //replaceFinContent("rev", 0);
        //replaceFinContent("exp", 7);
});

function buttonHide() {
    return $("#menu").attr("style", "display: none;");
}
function buttonShow() {
    setTimeout(
  function() 
  {
    $("#menu").attr("style", "display: block;");
  }, 100); 
}
function menuUp() {
    return $("#footer .container").slideUp(200, buttonShow);
}
function menuDown() {
    
    return $("#footer .container").slideDown();
}

var menu = new TimelineMax({paused: true});

menu//.set("nav", { onComplete: buttonHide })
    //.set("nav", { onComplete: menuDown, onReverseComplete: menuUp })
    .from("nav", 0.4, { left: -400 })
    .to("#menu", 0.1, {opacity: 0 }, "-=0.5")
    .add(TweenMax.staggerFrom($("nav aside li"), 0.15, { opacity: 0, top: 20}, 0.05))
    .from($("nav .icons"), 0.5, { opacity: 0}, "-=1"); 


$("#menu").click(function() {
    menu.play().timeScale(1.5);
});

$("#footer .container").hover(
    function() { }, function() {
        menu.reverse().timeScale(3);
        //console.log("LOLOLOLOLOLOLOLOL");
});



// Slideshow Timeline

/*
function prog() { 
    var p = slideShow.progress() * 10000,
        n = Math.floor(slideShow.progress() * 100);
    $("#navRange").val(p);
    
    styl.inject('input[type=range]:hover::-webkit-slider-thumb:after, input[type=range]:hover::-ms-thumb:after, input[type=range]:hover::-moz-range-thumb:after', {content: "'"+n+"'"}
    ).apply();
}

$("#navRange").click(function() {
    var v = $("#navRange").val() / 10000;
    
    slideShow.pause();
    slideShow.progress(v);
    slideShow.play();
}); */

var slideShow = new TimelineMax({ paused: true });

slideShow
        // Slide 0 - Intro - Autoplay intro when loaded
  .addLabel("slide0")
        .to("#introFade", 2, {opacity: 1, onReverseComplete: rStop}, "+=1")
      .from("#introKids", 1, {opacity: 0, bottom: -10}, "-=1")
       .add(TweenMax.staggerFrom(["#logo1", "#title"], 1, { opacity: 0, bottom: -20 }, 1), "+=1")
       .add([TweenMax.staggerFrom(["#heroText h3", "#heroText h4"], 1, { opacity: 0, bottom: -20 }, 0.25), TweenMax.from("#downButton", 1, { opacity: 0 })])

        // Slide 1 - Message
  .addPause()
  .addLabel("slide1")
        .to("#downButton", 0.5, { opacity: 0})
       .add(TweenMax.staggerTo(["#logo1", "#title", "#heroText h3", "#heroText h4"], 0.5, { opacity: 0, top: -20 }, 0.20), "-=0.5")
        .to("#introKids", 0.5, {opacity: 0, bottom: -20, onComplete: seekSlide, onCompleteParams: [1]}, "-=0.5")
      .from("#slide1 h1", 1, {opacity: 0, bottom: -20, onReverseComplete: seekSlide, onReverseCompleteParams: [0]}, "+=1.5")

        // Slide 2 - Sponsorship counter and zoomer
  .addPause()
  .addLabel("slide2")
        .to("#slide1 h1", 0.5, { opacity: 0,  top: "+=10", onComplete: seekSlide, onCompleteParams: [2], onStart: updateText, onStartParams: [sponsLetter, 1, "sponsorshipText"], onReverseComplete: seekSlide, onReverseCompleteParams: [1]})
       .add([TweenMax.staggerFrom(["#sponsorshipNumber","#sponsorshipText"], 3, { opacity: 0, bottom: -20 }, 0.5),
             TweenLite.to(numberCounter, 3, { number: sponsLetter[1].number, roundProps:"number", onUpdate: updateCounter, onUpdateParams: ["sponsorshipNumber"], ease:Linear.easeNone}),
             TweenLite.to("#slide2", 4, { backgroundSize: "1300px 1300px" })], "+=0.5")

        // Count Slide 3 part 2
  .addPause()
        .to("#sponsorshipText", 0.5, {opacity: 0, bottom: "-=20", onComplete: updateText, onCompleteParams: [sponsLetter, 2, "sponsorshipText"]})
       .add([TweenLite.to(numberCounter, 4, { number: sponsLetter[2].number, roundProps:"number", onUpdate: updateCounter, onUpdateParams: ["sponsorshipNumber"], ease:Linear.easeNone}),
             TweenLite.to("#slide2", 5, { backgroundSize: "900px 900px" }),
             TweenLite.to("#sponsorshipText", 4, { opacity: 1,  bottom: "+=20" })])

        // Count Slide 3 part 3
  .addPause()
        .to("#sponsorshipText", 0.5, {opacity: 0, bottom: "-=20", onComplete: updateText, onCompleteParams: [sponsLetter, 3, "sponsorshipText"]})
       .add([TweenLite.to(numberCounter, 5, { number: sponsLetter[3].number, roundProps:"number", onUpdate: updateCounter, onUpdateParams: ["sponsorshipNumber"], ease:Linear.easeNone}),
             TweenLite.to("#slide2", 6, { backgroundSize: "400px 400px" }),
             TweenLite.to("#sponsorshipText", 4, { opacity: 1, bottom: "+=20" })])

         
        // Slide 3 - WOW THAT IS AWESOME
  .addPause()
  .addLabel("slide3")
       .add([TweenLite.to(numberCounter, 5, { number: 5000000, roundProps:"number", onUpdate: updateCounter, onUpdateParams: ["sponsorshipNumber"], ease:Linear.easeNone}),
             TweenMax.staggerTo(["#sponsorshipNumber", "#sponsorshipText"], 1, { opacity: 0, top: "+=10", onComplete: seekSlide, onCompleteParams: [3] }, 0.3)
            ])
       .from("#slide3 h1", 2, {opacity: 0, bottom: -20, onReverseComplete: seekSlide, onReverseCompleteParams: [2]}, "-=3") 


        // Slide 4 - Story 1
  .addPause()
  .addLabel("slide4")
        .to("#slide3 h1", 0.5, { opacity: 0,  top: "+=10", onStart: seekSlide, onStartParams: [4]}) // Fade out
      .from("#slide4 .story-box", 1, { opacity: 0, top: 20 })
      .to("#slide4 > img", 0.5, { bottom: "-=60px", onReverseComplete: seekSlide, onReverseCompleteParams: [3]}, "-=1")

        // Slide 5 - Message
  .addPause()
  .addLabel("slide5")
        .to("#slide4 .story-box", 0.5, { opacity: 0, top: 20 })
      .from("#slide5 h1", 1,  {opacity: 0, bottom: -40, onStart: seekSlide, onStartParams: [5], onComplete : worldToggle, onReverseComplete: seekSlide, onReverseCompleteParams: [4] }) // Fade in
        

        // Slide 6 - Letter Writing
  .addPause()
  .addLabel("slide6")
        .to("#slide5 h1", 0.5, { opacity: 0,  top: "+=10", onStart: seekSlide, onStartParams: [6], onComplete: updateText, onCompleteParams: [sponsLetter, 6, "lettersText"], onReverseComplete: seekSlide, onReverseCompleteParams: [5]})
        
        // Letters part 1
       .set(numberCounter, {number: 44})
       .add([TweenMax.staggerFrom(["#lettersNum","#lettersText"], 3, { opacity: 0, bottom: -20 }, 0.5),
             TweenLite.to(numberCounter, 3, { number: sponsLetter[6].number, roundProps:"number", onUpdate: updateCounter, onUpdateParams: ["lettersNum"], ease:Linear.easeNone })], "+=0.5")

        // Letters part 2
        /*
  .addPause("lettersP2", worldToggle)
        .to("#lettersText", 0.5, {opacity: 0, bottom: "-=20", onComplete: updateText, onCompleteParams: [sponsLetter, 5, "lettersText"], onStart : worldToggle })
       .add([
             TweenLite.to(numberCounter, 2.5, { number: sponsLetter[5].number, roundProps:"number", onUpdate: updateCounter, onUpdateParams: ["lettersNum"], ease:Linear.easeNone}),
             TweenLite.to("#lettersText", 2.5, { opacity: 1,  bottom: "+=20" })
            ])

        // Letters part 3
  .addPause("lettersP3", worldToggle)
        .to("#lettersText", 0.5, {opacity: 0, bottom: "-=20", onComplete: updateText, onCompleteParams: [sponsLetter, 6, "lettersText"], onStart : worldToggle })
       .add([
             TweenLite.to(numberCounter, 2.5, { number: sponsLetter[6].number, roundProps:"number", onUpdate: updateCounter, onUpdateParams: ["lettersNum"], ease:Linear.easeNone}),
             TweenLite.to("#lettersText", 2.5, { opacity: 1,  bottom: "+=20" })
            ]) */

        // Letters part 4
  .addPause("lettersP4", worldToggle)
        .to("#lettersText", 0.5, {opacity: 0, bottom: "-=20", onComplete: updateText, onCompleteParams: [sponsLetter, 7, "lettersText"], onStart : worldToggle })

       .set(numberCounter, {number: 44})
       .add([
             TweenLite.to(numberCounter, 2.5, { number: sponsLetter[7].number, roundProps:"number", onUpdate: updateCounter, onUpdateParams: ["lettersNum"], ease:Linear.easeNone}),
             TweenLite.to("#lettersText", 2.5, { opacity: 1,  bottom: "+=20" })
            ])
        // Letters part 5
  .addPause("lettersP5", worldToggle)
        .to("#lettersText", 0.5, {opacity: 0, bottom: "-=20", onComplete: updateText, onCompleteParams: [sponsLetter, 8, "lettersText"], onStart : worldToggle })
        .set(numberCounter, {number: 0})
       .add([
             TweenLite.to(numberCounter, 2.5, { number: sponsLetter[8].number, roundProps:"number", onUpdate: updateCounter, onUpdateParams: ["lettersNum"], ease:Linear.easeNone}),
             TweenLite.to("#lettersText", 2.5, { opacity: 1,  bottom: "+=20" })
            ])

        // Slide 7 - Message
  .addPause()
  .addLabel("slide7")
        .to("#lettersText", 0.5, { opacity: 0,  top: "+=10" })
        .to("#lettersNum", 0.5, { opacity: 0,  top: "+=10", onComplete: seekSlide, onCompleteParams: [7] } , "-=0.5")
      .from("#slide7 h1", 1, {opacity: 0, bottom: -40,  onReverseComplete: seekSlide, onReverseCompleteParams: [6]}, "+=0.5") // Fade in

        // Slide 8 - Story 2
  .addPause()
  .addLabel("slide8")
        .add([TweenLite.to("#slide7 h1", 0.5, { opacity: 0,  top: "+=10", onStart: seekSlide, onStartParams: [8]}),
              TweenLite.fromTo("#slide8 > img", 1.5, { bottom: 120 }, { bottom: "-40px" }), 
              TweenLite.from("#slide8 .story-box", 1.5, { top: 320 })
             ])
        .to("#slide8", 0.1, { onReverseComplete: seekSlide, onReverseCompleteParams: [7] })

        
        // Slide 9 - Message
  .addPause()
  .addLabel("slide9")
      .from("#slide9 h1", 1, {opacity: 0, bottom: -40, onStart: seekSlide, onStartParams: [9], onReverseComplete: seekSlide, onReverseCompleteParams: [8], onComplete: slideIn, onCompleteParams: [8]}, "+=0.5") // Fade in

        // Slide 10 - Revenue/Income
  .addPause()
  .addLabel("slide10")
        .to("#slide9 h1", 0.5, { opacity: 0,  top: "+=10", onStart: seekSlide, onStartParams: [10], onReverseComplete: seekSlide, onReverseCompleteParams: [9]})
       .add(TweenMax.staggerFrom($("#incomeContainer *"), 0.5, { opacity: 0, top: 20 }, 0.2), "+=0.5")
      .from($("#revenueGraph"), 1.5, { opacity: 0, rotation: "-=90deg" })
       .add(TweenMax.staggerFrom($("#revenueGraph .innerCircle *"), 0.5, { opacity: 0 }, 0.1))
       .add(TweenMax.staggerFrom($(".rev li"), 0.3, { opacity: 0, right: "+=20px", ease:Back.easeOut}, 0.1))
        
        // Slide 11 - Expenditure
  .addPause()
  .addLabel("slide11")
       .add([TweenMax.staggerTo($("#revenueGraph .innerCircle *"), 0.5, { opacity: 0 }, 0.1),
             TweenMax.staggerTo($(".rev li"), 0.3, { opacity: 0, right: "+=20px", ease:Back.easeOut }, 0.1)])
       .add([TweenMax.staggerTo($("#incomeContainer *"), 0.3, { opacity: 0, top: 20 }, 0.2),
             TweenLite.to($("#revenueGraph"), 0.9, { opacity: 0, rotation: "+=90deg", 
                                                    onComplete: seekSlide, onCompleteParams: [11],
                                                    onReverseComplete: seekSlide, onReverseCompleteParams: [10]})])
        
       .add(TweenMax.staggerFrom($("#expenditureContainer *"), 0.5, { opacity: 0, top: 20 }, 0.2), "+=0.5")
      .from($("#expenditureGraph"), 1.5, { opacity: 0, rotation: "-=90deg" })
       .add(TweenMax.staggerFrom($("#expenditureGraph .innerCircle *"), 0.5, { opacity: 0 }, 0.1))
       .add(TweenMax.staggerFrom($(".exp li"), 0.3, { opacity: 0, right: "+=20px", ease:Back.easeOut}, 0.1))

        // Slide 12 - Message
  .addPause()
  .addLabel("slide12")
       .add([TweenMax.staggerTo($("#expenditureGraph .innerCircle *"), 0.5, { opacity: 0 }, 0.1),
             TweenMax.staggerTo($(".exp li"), 0.3, { opacity: 0, right: "+=20px", ease:Back.easeOut }, 0.1)])
       .add([TweenMax.staggerTo($("#expenditureContainer *"), 0.3, { opacity: 0, top: 20 }, 0.2),
             TweenLite.to($("#expenditureGraph"), 0.9, { opacity: 0, rotation: "+=90deg", 
                                                    onComplete: seekSlide, onCompleteParams: [12],
                                                    onReverseComplete: seekSlide, onReverseCompleteParams: [11]})])

      .from("#slide12 h1", 1, {opacity: 0, bottom: -40, onReverseComplete: seekSlide, onReverseCompleteParams: [11]}, "+=0.5") // Fade in

        // Slide 13 - Growth - Video BG
  .addPause()
  .addLabel("slide13")
       .set(numberCounter, { number: 0, onComplete: toggleVideo, onReverseComplete: toggleVideo })
        .to("#slide12 h1", 0.5, { opacity: 0,  top: "+=10", onStart: seekSlide, onStartParams: [13], onReverseComplete: seekSlide, onReverseCompleteParams: [12]})
      .from("#slide13 h1", 3.5, {opacity: 0, bottom: -120})
       .add(TweenLite.to(numberCounter2, 5, { number: 5.69, onUpdate: updateCounter2, onUpdateParams: ["growthA"], ease:Linear.easeNone}), "-=5")
      .from("#slide13 p", 1, {opacity: 0, bottom: -40}, "-=1") // Fade in
             
        // Slide 14 - Message
  .addPause()
  .addLabel("slide14")
       .add(TweenMax.staggerTo(["#slide13 h1","#slide13 p"], 0.5, {opacity: 0, top: 20}, 0.2))
       .set("#slide14 h1", { onComplete: seekSlide, onCompleteParams: [14], onReverseComplete: seekSlide, onReverseCompleteParams: [13]})
       .set("#growthBgVid", { onComplete: toggleVideo, onReverseComplete: toggleVideo })

      .from("#slide14 h1", 1, {opacity: 0, bottom: -40}, "+=0.5") // Fade in

        // Slide 15 - Story 3
  .addPause()
  .addLabel("slide15")
        .add([TweenLite.to("#slide14 h1", 0.5, { opacity: 0,  top: "+=10", onStart: seekSlide, onStartParams: [15]}),
              TweenLite.from("#slide15 > img", 1.5, { bottom: 120 }), 
              TweenLite.from("#slide15 .story-box", 1.5, { top: 320 })
             ])
        .to("#slide15", 0.1, { onReverseComplete: seekSlide, onReverseCompleteParams: [14] }) 
        
        // Slide 16 - Message
  .addPause()
  .addLabel("slide16")
       .add([TweenMax.to("#slide15 > img", 1.5, { top: 200 }), 
             TweenLite.to("#slide15 .story-box", 1.5, { opacity: 0, onStart: seekSlide, onStartParams: [16] })])

      .from("#slide16 h1", 1, {opacity: 0, bottom: -40, onReverseComplete: seekSlide, onReverseCompleteParams: [15],  onComplete: slideIn, onCompleteParams: [15]}, "+=0.5") // Fade in

        // Slide 17 - Program Highlights
  .addPause()
  .addLabel("slide17")
        .to("#slide16 h1", 0.5, { opacity: 0,  top: "+=10", onStart: seekSlide, onStartParams: [17]})
        .add(TweenMax.staggerFromTo($(".four .overlay"), 0.3, { backgroundColor: "rgba(0,0,0,1)" }, { backgroundColor: "rgba(0,0,0,0)"} , 0.1), "+=0.5")
        .add(TweenMax.staggerTo($(".four .overlay"), 0.2, { backgroundColor: "rgba(0,0,0,0.4)", onReverseComplete: seekSlide, onReverseCompleteParams: [16] }, 0.1))
        
        // Slide 18 - Message
  .addPause()
  .addLabel("slide18")
       .set("#slide18 h1", { onComplete: seekSlide, onCompleteParams: [18]})
      .from("#slide18 h1", 1, {opacity: 0, bottom: -40, onReverseComplete: seekSlide, onReverseCompleteParams: [17]}, "+=0.5") // Fade in

        // Slide 19 - Product Highlights
  .addPause()
  .addLabel("slide19")
        .to("#slide18 h1", 0.5, { opacity: 0,  top: "+=10", onStart: seekSlide, onStartParams: [19]})
        .add(TweenMax.staggerFromTo($(".five .overlay"), 0.3, { backgroundColor: "rgba(0,0,0,1)"}, { backgroundColor: "rgba(0,0,0,0)"} , 0.1), "+=0.5")
        .add(TweenMax.staggerTo($(".five .overlay"), 0.2, { backgroundColor: "rgba(0,0,0,0.4)", onReverseComplete: seekSlide, onReverseCompleteParams: [18] }, 0.1))
        
        // Slide 20 - Message
  .addPause()
  .addLabel("slide20")
       .set("#slide20 h1", { onComplete: seekSlide, onCompleteParams: [20]})
      .from("#slide20 h1", 1, {opacity: 0, bottom: -40, onReverseComplete: seekSlide, onReverseCompleteParams: [19]}, "+=0.5") // Fade in

        // Slide 21 - CEO Letter
  .addPause()
  .addLabel("slide21")
        .to("#slide20 h1", 0.5, { opacity: 0,  top: "+=10", onStart: seekSlide, onStartParams: [21], onReverseComplete: seekSlide, onReverseCompleteParams: [20]})
      .from($("#slide21 div > img"), 4, { opacity: 0, top: 20})
       .add(TweenMax.staggerFrom($(".tim-message article *"), 0.8, { opacity: 0, top: 20}, 0.2), "-=2")

        
        // Slide 22 - Message
  .addPause()
  .addLabel("slide22")
        .to($("#slide21 div > img"), 2, { opacity: 0, top: 20, onComplete: seekSlide, onCompleteParams: [22]})
       .add(TweenMax.staggerTo($(".tim-message article *"), 0.5, { opacity: 0, top: -20}, 0.05), "-=2")
      .from("#slide22 h1", 1, {opacity: 0, bottom: -40, onReverseComplete: seekSlide, onReverseCompleteParams: [21]}, "+=0.5") // Fade in

        // Slide 23 - Final!
  .addPause()
  .addLabel("slide23")
        .to("#slide22 h1", 0.5, { opacity: 0,  top: "+=10", onStart: seekSlide, onStartParams: [23]})
      .from("#bibleVerseAnimate", 3, { opacity: 0, top: 20, onReverseComplete: seekSlide, onReverseCompleteParams: [22] }, "+=1");

// Prevent weird reverse behaviour

function rStop() {
    slideShow.pause(0);
}


// Final nav reqs

$("#footer aside li:nth-child(1)").click(function() {
    slideShow.play("slide0");
    setTimeout(
  function() {
    seekSlide(0);
    slideShow.play("slide0"); }, 100);
});
$("#footer aside li:nth-child(2)").click(function() {
    slideShow.play("slide1");
    setTimeout(
  function() 
  {
    seekSlide(1);
    slideShow.play("slide1"); }, 100);
});
$("#footer aside li:nth-child(3)").click(function() {
    slideShow.play("slide4");
    setTimeout(
  function() 
  {
    seekSlide(4);
    slideShow.play("slide4"); }, 100);
});
$("#footer aside li:nth-child(4)").click(function() {
    slideShow.play("slide5");
    setTimeout(
  function() 
  {
    seekSlide(5);
    slideShow.play("slide5"); }, 100);
});
$("#footer aside li:nth-child(5)").click(function() {
    slideShow.play("slide8");
    setTimeout(
  function() 
  {
    seekSlide(8);
    slideShow.play("slide8"); }, 100);
});
$("#footer aside li:nth-child(6)").click(function() {
    slideShow.play("slide9");
    setTimeout(
  function() 
  {
    seekSlide(9);
    slideShow.play("slide9"); }, 100);
});
$("#footer aside li:nth-child(7)").click(function() {
    slideShow.play("slide13");
    setTimeout(
  function() 
  {
    seekSlide(13);
    slideShow.play("slide13"); }, 100);
});
$("#footer aside li:nth-child(8)").click(function() {
    slideShow.play("slide15");
    setTimeout(
  function() 
  {
    seekSlide(15);
    slideShow.play("slide15"); }, 100);
});
$("#footer aside li:nth-child(9)").click(function() {
    slideShow.play("slide16");
    setTimeout(
  function() 
  {
    seekSlide(16);
    slideShow.play("slide16"); }, 100);
});
$("#footer aside li:nth-child(10)").click(function() {
    slideShow.play("slide18");
    setTimeout(
  function() 
  {
    seekSlide(18);
    slideShow.play("slide18"); }, 100);
});
$("#footer aside li:nth-child(11)").click(function() {
    slideShow.play("slide20");
    setTimeout(
  function() 
  {
    seekSlide(20);
    slideShow.play("slide20"); }, 100);
});
$("#footer aside li:nth-child(12)").click(function() {
    slideShow.play("slide22");
    setTimeout(
  function() 
  {
    seekSlide(22);
    slideShow.play("slide22"); }, 100);
});

