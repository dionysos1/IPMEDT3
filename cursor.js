var audio = new Audio("hammer.wav");
homelat = 52.1675221;
homelng = 4.4682125;
ikeachange = false;
week = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
day = week[new Date().getDay()];

window.onload = function() {
    hand = '';
    stepArray = [];
    stepsTaken = 0;
    deuvelsMoved = 0;


    setSteps('box1','1 0.05 -4','0 0 0','2.8','0.1','0.75','green','0.2','placelong','1','box');


    setSteps('sd1','0.30 0.14 -4.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d1');
    setSteps('sd2','1.05 0.14 -4.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d2');
    setSteps('sd3','1.75 0.14 -4.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d3');
    setSteps('sd4','0.30 0.14 -3.65','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d4');
    setSteps('sd5','1.05 0.14 -3.65','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d5');
    setSteps('sd6','1.75 0.14 -3.65','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d6');

    setSteps('sbox1','0.30 0.475 -4','0 0 0','0.05','0.75','0.75','green','0.2','placesmall','3','box');
    setSteps('sbox2','1.05 0.475 -4','0 0 0','0.05','0.75','0.75','green','0.2','placesmall','3','box');
    setSteps('sbox3','1.75 0.475 -4','0 0 0','0.05','0.75','0.75','green','0.2','placesmall','3','box');

    setSteps('sd7','0.30 0.9 -4.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d7');
    setSteps('sd8','1.05 0.9 -4.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d8');
    setSteps('sd9','1.75 0.9 -4.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d9');
    setSteps('sd10','0.30 0.9 -3.65','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d10');
    setSteps('sd11','1.05 0.9 -3.65','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d11');
    setSteps('sd12','1.75 0.9 -3.65','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d12');



    setSteps('box2','1 0.9 -4','0 0 0','2.8','0.1','0.75','green','0.2','placelong','1','box');
    setSteps('topbox1','2.45 0.475 -4','0 0 0','0.1','0.95','0.75','green','0.2','placetsmall','2','box');
    setSteps('topbox2','-0.45 0.475 -4','0 0 0','0.1','0.95','0.75','green','0.2','placetsmall','2','box');

    makeStep();
    weerInRaam();
    getLocation();

    temperatuur = 0.0;
    temperatuurbox = document.getElementById('tempbox');
    temperatuurbox.onmouseenter = function(){ buitenTemp(temperatuur); };

    document.querySelector('a-scene').addEventListener('enter-vr',function () {
        $('#camera').attr('position','0 1.6 -2');
    })



};

function ikeahover(selector){
    if(ikeachange==false) {
        loadCursor();
        var timer = setTimeout(function () {
            document.getElementById('ikea').setAttribute("text", "align: center; width: 3; value: " + afstand());
            document.getElementById('ikea').setAttribute('position','-0.5 2.4 3');
            $('#scene').append('<a-box id="ikeawebsite" onmouseenter="openwebsite(\'ikeawebsite\')" position="-0.5 2 3" color="red" opacity="0" width="3" height="0.4"></a-box>');

            ikeachange = true;
        }, 1050);

        document.getElementById(selector).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }
}

function openwebsite(selector){
        loadCursor();
        var timer = setTimeout(function () {
            $('#camera').append('<a-entity id="ikea"  position="0 0.5 -2" text="align: center; width: 3; value:Doe je VR bril af voor de website; color:black;" rotation="0 0 0"></a-entity>');
            var timers = setTimeout(function () {
                var newwindow = window.open('http://www.ikea.com/nl/nl/catalog/products/00275848/', '_blank');
                newwindow.location;
            },10000)
        }, 1050);
        document.getElementById(selector).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
}

function nextblad(){
    if(stepsTaken == 2){
        getBlad();
    }else if(stepsTaken == 8){
        getBlad();
    }else if(stepsTaken == 9 && deuvelsMoved == 6) {
        getBlad();
    }else if(stepsTaken == 12){
        getBlad();
    }else if(stepsTaken == 19 && deuvelsMoved == 12) {
        getBlad();
    }else if(stepsTaken == 20){
        getBlad();
    }
}

function getBlad(){
    uitleg = document.getElementById('uitleg');
    if(uitleg.getAttribute('src') != '7stap.jpg'){
        uitleg.setAttribute("src", parseInt(uitleg.getAttribute("src")) + 1 + "stap.jpg" );
    }
}

function buitenTemp (temperatuur){
    var temp = document.getElementById('temp');
    temp.setAttribute("text", "align: center; width: 1.5; value: " + temperatuur.toFixed(1) + " graden"); // aantal graden naar de pagina
}

function weerInRaam(){
    // var weer = document.getElementsByClassName("raam");
    // var weer = document.getElementById('raam2')
    var xhttp = new XMLHttpRequest();
    var requestString = "http://api.openweathermap.org/data/2.5/weather"
        + "?id=2751773"
        + "&units=metric&format=json"
        + "&APPID=cf84ef1f49c75b64222d55d97314d978";

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var response = JSON.parse(this.responseText);
            var x = Object.values(response.weather);
            console.log(response.main.temp);
            temperatuur = response.main.temp;
            // var temp = document.getElementById('temp')
            // temp.setAttribute("text", "align: center; width: 1.5; value: " + response.main.temp.toFixed(1) + " graden"); // aantal graden naar de pagina
            // var textbox = document.getElementById("text");
            // textbox.setAttribute("text", "value: huidige buiten temperatuur: " + response.main.temp + " Celcius");
            for (i = 1; i < 4; i++){
                var weer = document.getElementById('raam'+i);

                if (x[0].id >= 200 && x[0].id < 300){ weer.setAttribute("src", "thunderraam.png"); } //thunderstorm
                if (x[0].id >= 300 && x[0].id < 500){ weer.setAttribute("src", "regenraam.png"); } //drizzle
                if (x[0].id >= 500 && x[0].id < 600){ weer.setAttribute("src", "regenraam.png"); } //rain
                if (x[0].id >= 600 && x[0].id < 700){ weer.setAttribute("src", "sneeuwraam.png"); } //snow
                if (x[0].id > 700 && x[0].id < 800){ weer.setAttribute("src", "foggyraam.png"); } //atmosphere (fog)
                if (x[0].id == 800){ weer.setAttribute("src", "zonraam.png"); } //clear
                if (x[0].id > 800 && x[0].id < 900){ weer.setAttribute("src", "bewolktraam.png"); } //clouds
                if (x[0].id >= 900 && x[0].id < 950){ weer.setAttribute("src", "thunderraam.png"); } //extreme
                if (x[0].id >= 950 && x[0].id < 1000){ weer.setAttribute("src", "zonraam.png"); } //additional van clear tot hurricane
            }
            console.log(x);
        }
    };
    xhttp.open("GET", requestString);
    xhttp.send();
}

function setSteps(id,pos,rot,w,h,d,c,o,f,s,p,r,sid){
    var step = {id:id,pos:pos,rot:rot,h:h,w:w,d:d,c:c,o:o,f:f,s:s,p:p,r:r,sid:sid};
    stepArray.push(step);
}

function makeStep(){
    if(stepsTaken < 7 || (stepsTaken > 8 && stepsTaken <17)) {
        console.log('kek');
        if (stepArray[0].p == 'box') {
            var fun = stepArray[0].f + "('" + stepArray[0].id + "','" + stepArray[0].s + "')";
            $('#scene').append('<a-box onmouseenter="' + fun + '" id="' + stepArray[0].id + '" position="' + stepArray[0].pos + '" rotation="' + stepArray[0].rot + '" color="' + stepArray[0].c + '" height="' + stepArray[0].h + '" width="' + stepArray[0].w + '" depth="' + stepArray[0].d + '" opacity="' + stepArray[0].o + '"></a-box>');
        } else {
            var fun = stepArray[0].f + "('" + stepArray[0].id + "','" + stepArray[0].sid + "','" + stepArray[0].s + "')";
            $('#scene').append('<a-entity id="' + stepArray[0].sid + '" geometry="primitive:box; width:0.2; height:0.1; depth:0.2;" material="color:red; opacity:0;" position="' + stepArray[0].pos + '" onmouseenter="' + fun + '"  hit="animation:x; from:0 180 0; id:handhammer; rotation:30 180 0;"><a-cylinder id="' + stepArray[0].id + '" position="0 0 0" rotation="' + stepArray[0].rot + '" color="' + stepArray[0].c + '" height="' + stepArray[0].h + '"  radius="' + stepArray[0].r + '" opacity="' + stepArray[0].o + '"></a-cylinder></a-entity>');
        }
    }else if((stepsTaken == 8 && deuvelsMoved == 6) || (stepsTaken == 18 && deuvelsMoved == 12)){
        var fun = stepArray[0].f + "('" + stepArray[0].id + "','" + stepArray[0].s + "')";
        $('#scene').append('<a-box onmouseenter="' + fun + '" id="' + stepArray[0].id + '" position="' + stepArray[0].pos + '" rotation="' + stepArray[0].rot + '" color="' + stepArray[0].c + '" height="' + stepArray[0].h + '" width="' + stepArray[0].w + '" depth="' + stepArray[0].d + '" opacity="' + stepArray[0].o + '"></a-box>');
    }
    stepsTaken += 1;
    console.log(stepsTaken);
    console.log(deuvelsMoved);
}

function loadCursor(){
    document.getElementById('cursor-loader').setAttribute('material', 'color: lightgreen');
}

function quitCursor(){
    document.getElementById('cursor-loader').setAttribute('material', 'color:#3b4f70');
}

function drag(selector){
    if(hand == '') {
        loadCursor();
        var timer = setTimeout(function () {
            if (selector == '1') {
                $('#camera').append('<a-box class="hand" id="handbox" color="grey" rotation="0 15 25" position="0 -0.3 -0.8" depth="0.1875" height="0.025" width="0.7"></a-box>');
                hand = '1';
                quitCursor()
            }else if(selector == '2'){
                $('#camera').append('<a-box class="hand" id="handbox" color="grey" rotation="0 -15 25" position="0 -0.3 -0.8" depth="0.1875" height="0.2375" width="0.025"></a-box>');
                hand = '2';
                quitCursor()
            }else if(selector == '3'){
                $('#camera').append('<a-box class="hand" id="handbox" color="grey" rotation="0 -15 25" position="0 -0.3 -0.8" depth="0.1875" height="0.2375" width="0.01125"></a-box>');
                hand = '3';
                quitCursor()
            }else{
                $('#camera').append(' <a-entity class="hand" id="handdeuvel" scale="0.02 0.02 0.02" position="0 -0.3 -0.8" rotation="0 0 25" obj-model="obj: #d-obj; mtl: #d-mtl"></a-entity>');
                hand = '4';
                quitCursor()
            }
        },1050);
        document.getElementById('selector'+selector).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }
}

function placelong(ele,selector){
    if(selector == hand){
        loadCursor();
        var timer = setTimeout(function () {
            $('#'+ele).attr({
                color:'grey',
                opacity:'1'
            });
            document.getElementById(ele).removeAttribute('onmouseenter');
            $('#handbox').remove();
            hand = '';
            stepArray.shift();
            makeStep();
            nextblad();
            quitCursor();
        },1050);
        document.getElementById(ele).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }
}

function placesmall(ele, selector){
    if(selector == hand){
        loadCursor();
        var timer = setTimeout(function () {
            $('#'+ele).attr({
                color:'grey',
                opacity:'1'
            });
            document.getElementById(ele).removeAttribute('onmouseenter');
            $('#handbox').remove();
            hand = '';
            stepArray.shift();
            makeStep();
            nextblad();
            quitCursor();
        },1050);
        document.getElementById(ele).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }

}

function placetsmall(ele, selector){
    if(selector == hand){
        loadCursor();
        var timer = setTimeout(function () {
            $('#'+ele).attr({
                color:'grey',
                opacity:'1'
            });
            document.getElementById(ele).removeAttribute('onmouseenter');
            $('#handbox').remove();
            hand = '';
            stepArray.shift();
            makeStep();
            nextblad();
            quitCursor();
        },1050);
        document.getElementById(ele).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }
}

function placedeuvel(ele2,ele,selector){
    if(selector == hand){
        loadCursor();
        var timer = setTimeout(function () {
            $('#'+ele2).attr({
                color:'#ffc570',
                opacity:'1'
            });
            document.getElementById(ele).removeAttribute('onmouseenter');
            document.getElementById(ele).setAttribute('onmouseenter','movePos("'+ele+'")');
            $('#handdeuvel').remove();
            hand = '';
            stepArray.shift();
            makeStep();
            nextblad();
            quitCursor();
        },1050);
        document.getElementById(ele).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }
}

function pickup(selector) {
    if(hand == '') {
        loadCursor();
        var timer = setTimeout(function () {
            if (selector == '1') {
                $('#hammer').remove();
                $('#camera').append('<a-entity class="hand" id="handhammer" scale="0.15 0.15 0.15" position="0.5 -0.7 -0.8" rotation="30 180 0" obj-model="obj: #h-obj; mtl: #h-mtl"></a-entity>');
                hand = 'p1';
                quitCursor()
            }
        },1050);
        document.getElementById('pickup'+selector).addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }
}

function movePos(id){
    if(hand == 'p1'){
        $('#'+id).removeAttr('onmouseenter');
        var changePos = parseFloat(Object.values($('#'+id).attr('position'))[1]);
        var y = 0;
        var i = 0.015;
        var inter = setInterval(function () {
            newz = changePos-i;
            console.log(newz);
            var newPos = Object.values($('#'+id).attr('position'))[0] + " "+ newz + " " + Object.values($('#'+id).attr('position'))[2];
            console.log(newPos);
            $('#'+id).attr('position',newPos);
            i+=0.015;
            y++;
            if(y>=3){
                clearTimeout(inter);

                deuvelsMoved += 1;
                console.log(deuvelsMoved);
                if(deuvelsMoved ==6 || deuvelsMoved == 12){
                    makeStep();
                    nextblad();
                }
            }
        },400)
    }
}

function emptyHand(){
    if(hand != '') {
        loadCursor();
        var timer = setTimeout(function () {
            if(hand == 'p1'){
                $('#scene').append('<a-entity onmouseenter="pickup(\'1\')" id="pickup1" geometry="primity:box; width:1; height:0.1; depth:0.4;" material="color:red; opacity:0" position="1.7 0.1 -1.8"><a-entity id="hammer" scale="0.2 0.2 0.2" position="-0.4 0 -0.04" rotation="0 0 -90" obj-model="obj: #h-obj; mtl: #h-mtl"></a-entity></a-entity>');
            }
            $('.hand').remove();
            quitCursor();
            hand = '';
        },1050);
        document.getElementById('emptyhand').addEventListener('mouseleave', function () {
            clearTimeout(timer);
            quitCursor();
        })
    }
}

AFRAME.registerComponent("hit",{
    schema : {
        rotation : {type : "string"},
        from: {type: "string"},
        id : {type: "string"},
        animation : {type: "string"}
    },
    init : function(){
        this.el.addEventListener("mouseenter",function(){
            if(hand == 'p1'){
                audio.play();
            }
            var animation = document.createElement("a-animation");
            animation.setAttribute("id",this.data.animation);
            animation.setAttribute("attribute","rotation");
            animation.setAttribute("from",this.data.from);
            animation.setAttribute("to",this.data.rotation);
            animation.setAttribute("direction","alternate");
            animation.setAttribute("dur","250");
            animation.setAttribute("repeat","5");
            document.getElementById(this.data.id).appendChild(animation);
        }.bind(this));
    }
});


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    homelat = position.coords.latitude;
    homelng = position.coords.longitude;
    console.log('huidige positie');
    console.log(homelat);
    console.log(homelng);
}

function afstand(){
    var data = $.getJSON({url: 'http://ipmedt3.dionvdberg.nl/ikealocations.php', async: false}).responseJSON.items;
    vorigeAfstand = 0;
    kleinsteAfstand = 0;
    afstand = 500;
    console.log(data)

    // Voor alle resultaten gaan we kijken wat er in zit
    for (var i = 0; i < data.length; i++)
    {
        // Als de huidig "dichtsbijzijnde" afstand groter is dan die van het resultaat, sla hem op.
        if (afstand > onLocationChanged(data[i]))
        {
          vorigeAfstand = kleinsteAfstand;
          afstand = onLocationChanged(data[i]);
          kleinsteAfstand = i;

          // Log voor een betere wereld.
          console.log(data[kleinsteAfstand].name + ' is op '+ round(onLocationChanged(data[kleinsteAfstand]), 2) + ' km afstand');
        }
        else if ((afstand < onLocationChanged(data[i])) && (kleinsteAfstand > onLocationChanged(data[i]))) {
          console.log('used');
            vorigeAfstand = i;
        }
    }

    console.log(data[vorigeAfstand].name);
    // console.log('2. ' + data[vorigeAfstand].name + ' is op '+ round(onLocationChanged(data[vorigeAfstand]), 2) + ' km afstand');
    return String(data[kleinsteAfstand].name + ' is op '+ round(onLocationChanged(data[kleinsteAfstand]), 2) + ' km afstand \n ' +
        'vandaag geopend: '+ data[kleinsteAfstand].opening_hours[day]  + '\n \n'


        + data[vorigeAfstand].name + ' is op '+ round(onLocationChanged(data[vorigeAfstand]), 2) + ' km afstand \n' +
        'vandaag geopend: '+ data[kleinsteAfstand].opening_hours[day]  + '\n \n' +
        'Of klik hier om deze kast online te bestellen via de IKEA website.'
    );
  }

// afstand berekenen
function onLocationChanged(location) {

   var lat2 = location.long;
   var lng2 = location.lat;
   return distance(homelat, homelng, lat2, lng2);

  }

  /** calculates the distance between two locations in MILES */
function distance( lat1, lng1, lat2, lng2) {

      var earthRadius = 6371; // for kilometer output

      var dLat = Math.radians(lat2-lat1);
      var dLng = Math.radians(lng2-lng1);

      var sindLat = Math.sin(dLat / 2);
      var sindLng = Math.sin(dLng / 2);

      var a = Math.pow(sindLat, 2) + Math.pow(sindLng, 2) * Math.cos(Math.radians(lat1)) * Math.cos(Math.radians(lat2));

      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

      var dist = earthRadius * c;
      return parseFloat(dist); // output distance, in km
  }

  // Converts from degrees to radians.
Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}
