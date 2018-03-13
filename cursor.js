var audio = new Audio("hammer.wav");
homelat = 52.1675221;
homelng = 4.4682125;
ikeachange = false;
week = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
day = week[new Date().getDay()];
rotationdone = 0;

window.onload = function() {
    hand = '';
    stepArray = [];
    stepsTaken = 0;
    deuvelsMoved = 0;

    document.querySelector('a-scene').addEventListener('enter-vr', function () {
        document.querySelector('a-camera').setAttribute('camera','userHeight: 1.6');

    });




    setSteps('box1','0 0.05 0','0 0 0','2.8','0.1','0.75','green','0.2','placelong','1','box');


    setSteps('sd1','-0.70 0.14 -0.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d1');
    setSteps('sd2','0.05 0.14 -0.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d2');
    setSteps('sd3','0.75 0.14 -0.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d3');
    setSteps('sd4','-0.70 0.14 0.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d4');
    setSteps('sd5','0.05 0.14 0.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d5');
    setSteps('sd6','0.75 0.14 0.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d6');

    setSteps('sbox1','-0.70 0.475 0','0 0 0','0.05','0.75','0.75','green','0.2','placesmall','3','box');
    setSteps('sbox2','0.05 0.475 0','0 0 0','0.05','0.75','0.75','green','0.2','placesmall','3','box');
    setSteps('sbox3','0.75 0.475 0','0 0 0','0.05','0.75','0.75','green','0.2','placesmall','3','box');

    setSteps('sd7','-0.70 0.9 -0.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d7');
    setSteps('sd8','0.05 0.9 -0.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d8');
    setSteps('sd9','0.75 0.9 -0.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d9');
    setSteps('sd10','-0.70 0.9 0.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d10');
    setSteps('sd11','0.05 0.9 0.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d11');
    setSteps('sd12','0.75 0.9 0.35','0 0 0','0','0.08','0','#d000ff','0.5','placedeuvel','4','cylinder','0.015','d12');



    setSteps('box2','0 0.9 0','0 0 0','2.8','0.1','0.75','green','0.2','placelong','1','box');

    setSteps('topbox2','-1.45 0.475 0','0 0 0','0.1','0.95','0.75','green','0.2','placetsmall','2','box');

    setSteps('sc1','-1.55 0.9 -0.35','0 0 90','0','0.08','0','#ff0022','0.5','placeschroef','5','cylinder','0.015','s1');
    setSteps('sc2','-1.55 0.05 -0.35','0 0 90','0','0.08','0','#ff0022','0.5','placeschroef','5','cylinder','0.015','s2');
    setSteps('sc3','-1.55 0.9 0.35','0 0 90','0','0.08','0','#ff0022','0.5','placeschroef','5','cylinder','0.015','s3');
    setSteps('sc4','-1.55 0.05 0.35','0 0 90','0','0.08','0','#ff0022','0.5','placeschroef','5','cylinder','0.015','s4');

    setSteps('topbox1','1.45 0.475 0','0 0 0','0.1','0.95','0.75','green','0.2','placetsmall','2','box');

    setSteps('sc5','1.55 0.9 -0.35','0 0 90','0','0.08','0','#ff0022','0.5','placeschroef','5','cylinder','0.015','s5');
    setSteps('sc6','1.55 0.05 -0.35','0 0 90','0','0.08','0','#ff0022','0.5','placeschroef','5','cylinder','0.015','s6');
    setSteps('sc7','1.55 0.9 0.35','0 0 90','0','0.08','0','#ff0022','0.5','placeschroef','5','cylinder','0.015','s7');
    setSteps('sc8','1.55 0.05 0.35','0 0 90','0','0.08','0','#ff0022','0.5','placeschroef','5','cylinder','0.015','s8');





    makeStep();
    getLocation();


    document.querySelector('a-scene').addEventListener('enter-vr',function () {
        $('#camera').attr('position','0 1.6 -2');
    })



};

function ikeahover(selector){
	console.log('ikea seen');
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
            $('#camera').append('<a-entity id="ikeatext"  position="0 0.5 -2" text="align: center; width: 3; value:Doe je VR bril af voor de website; color:black;" rotation="0 0 0"></a-entity>');
            var timers = setTimeout(function () {
                $("#ikeatext").remove();
                $('#ikea').attr('text','');
                var newwindow = window.open('http://www.ikea.com/nl/nl/catalog/products/00275848/', '_blank');
                newwindow.location;

            },8000);
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
    }else if(stepsTaken == 21){
        getBlad()
    }else if(stepsTaken == 31){
        getBlad();
        document.querySelector('#kastent').emit('setthirpos');
        setTimeout(function () {
            document.querySelector('#kastent').emit('setthir');
        },100);
        setTimeout(function () {
            document.querySelector('#kastent').emit('setfour');
        },1500);

    }
}

function getBlad(){
    uitleg = document.getElementById('uitleg');
    if(uitleg.getAttribute('src') != '9stap.jpg'){
        uitleg.setAttribute("src", parseInt(uitleg.getAttribute("src")) + 1 + "stap.jpg" );
    }
}

function setSteps(id,pos,rot,w,h,d,c,o,f,s,p,r,sid){
    var step = {id:id,pos:pos,rot:rot,h:h,w:w,d:d,c:c,o:o,f:f,s:s,p:p,r:r,sid:sid};
    stepArray.push(step);
}

function rotatefirst(){
    document.querySelector('#kastent').emit('setfirst');
}

function rotatesec(){
    document.querySelector('#kastent').emit('setsec');
}

function makeStep(){
    if(stepsTaken < 7 || (stepsTaken > 8 && stepsTaken <17) || (stepsTaken >= 20 && deuvelsMoved >= 12 && deuvelsMoved < 20)) {
        if (stepArray[0].p == 'box') {
            if(stepsTaken < 24){

                var fun = stepArray[0].f + "('" + stepArray[0].id + "','" + stepArray[0].s + "')";
                $('#kastent').append('<a-box onmouseenter="' + fun + '" id="' + stepArray[0].id + '" position="' + stepArray[0].pos + '" rotation="' + stepArray[0].rot + '" color="' + stepArray[0].c + '" height="' + stepArray[0].h + '" width="' + stepArray[0].w + '" depth="' + stepArray[0].d + '" opacity="' + stepArray[0].o + '"></a-box>');
            }
            if(stepsTaken == 24){
            }
            else if(stepsTaken == 25 || deuvelsMoved == 16){
                document.querySelector('#kastent').emit('setsec');

                var fun = stepArray[0].f + "('" + stepArray[0].id + "','" + stepArray[0].s + "')";
                $('#kastent').append('<a-box onmouseenter="' + fun + '" id="' + stepArray[0].id + '" position="' + stepArray[0].pos + '" rotation="' + stepArray[0].rot + '" color="' + stepArray[0].c + '" height="' + stepArray[0].h + '" width="' + stepArray[0].w + '" depth="' + stepArray[0].d + '" opacity="' + stepArray[0].o + '"></a-box>');
            }
        } else {
            if(stepsTaken >= 20){
                if(stepsTaken == 20){
                    document.querySelector('#kastent').emit('setfirst');
                }
                var fun = stepArray[0].f + "('" + stepArray[0].id + "','" + stepArray[0].sid + "','" + stepArray[0].s + "')";
                $('#kastent').append('<a-entity id="' + stepArray[0].sid + '" geometry="primitive:box; width:0.2; height:0.1; depth:0.2;" material="color:red; opacity:0;" position="' + stepArray[0].pos + '" onmouseenter="' + fun + '" ><a-cylinder id="' + stepArray[0].id + '" position="0 0 0" rotation="' + stepArray[0].rot + '" color="' + stepArray[0].c + '" height="' + stepArray[0].h + '"  radius="' + stepArray[0].r + '" opacity="' + stepArray[0].o + '"></a-cylinder></a-entity>');
            }else {
                var fun = stepArray[0].f + "('" + stepArray[0].id + "','" + stepArray[0].sid + "','" + stepArray[0].s + "')";
                $('#kastent').append('<a-entity id="' + stepArray[0].sid + '" geometry="primitive:box; width:0.2; height:0.1; depth:0.2;" material="color:red; opacity:0;" position="' + stepArray[0].pos + '" onmouseenter="' + fun + '"  hit="animation:x; from:0 180 0; id:handhammer; rotation:30 180 0;"><a-cylinder id="' + stepArray[0].id + '" position="0 0 0" rotation="' + stepArray[0].rot + '" color="' + stepArray[0].c + '" height="' + stepArray[0].h + '"  radius="' + stepArray[0].r + '" opacity="' + stepArray[0].o + '"></a-cylinder></a-entity>');
            }
        }
    }else if((stepsTaken == 8 && deuvelsMoved == 6) || (stepsTaken == 18 && deuvelsMoved == 12)){

        var fun = stepArray[0].f + "('" + stepArray[0].id + "','" + stepArray[0].s + "')";
        $('#kastent').append('<a-box onmouseenter="' + fun + '" id="' + stepArray[0].id + '" position="' + stepArray[0].pos + '" rotation="' + stepArray[0].rot + '" color="' + stepArray[0].c + '" height="' + stepArray[0].h + '" width="' + stepArray[0].w + '" depth="' + stepArray[0].d + '" opacity="' + stepArray[0].o + '"></a-box>');
    }else if(stepsTaken >= 19 && deuvelsMoved == 12 && stepsTaken <= 20){

        var fun = stepArray[0].f + "('" + stepArray[0].id + "','" + stepArray[0].s + "')";
        $('#kastent').append('<a-box onmouseenter="' + fun + '" id="' + stepArray[0].id + '" position="' + stepArray[0].pos + '" rotation="' + stepArray[0].rot + '" color="' + stepArray[0].c + '" height="' + stepArray[0].h + '" width="' + stepArray[0].w + '" depth="' + stepArray[0].d + '" opacity="' + stepArray[0].o + '"></a-box>');

    }else if(stepsTaken == 30){
        console.log('end')
    }
    stepsTaken += 1;

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
            }else if(selector == '4'){
                $('#camera').append(' <a-entity class="hand" id="handdeuvel" scale="0.02 0.02 0.02" position="0.2 -0.3 -0.8" rotation="0 0 -25" obj-model="obj: #d-obj; mtl: #d-mtl"></a-entity>');
                hand = '4';
                quitCursor()
            }else if(selector == '5'){
                $('#camera').append(' <a-entity class="hand" id="handschroef" scale="0.04 0.04 0.04" position="0.3 -0.2 -0.8" rotation="50 -90 0" obj-model="obj: #s-obj; mtl: #s-mtl"></a-entity>');
                hand = '5';
                quitCursor();
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
            // $('#handdeuvel').remove();
            // hand = '';
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

function placeschroef(ele2,ele,selector){
    if(selector ==  hand){
        loadCursor();
        var timer = setTimeout(function () {
            $('#'+ele2).remove();
            if(ele2 == 'sc1' || ele2 == 'sc2' || ele2 == 'sc3' || ele2 =='sc4') {
                $('#' + ele).append('<a-entity id="schroefappend" scale="0.03 0.03 0.03" position="0 0 0" rotation="0 90 0" obj-model="obj: #s-obj; mtl: #s-mtl"></a-entity>');
            }else{
                $('#' + ele).append('<a-entity id="schroefappend" scale="0.03 0.03 0.03" position="0 0 0" rotation="0 -90 0" obj-model="obj: #s-obj; mtl: #s-mtl"></a-entity>');
            }
            document.getElementById(ele).removeAttribute('onmouseenter');
            document.getElementById(ele).setAttribute('onmouseenter','movePosSchroef("'+ele+'")');
            // $('#handdeuvel').remove();
            // hand = '';
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
            }else if(selector == '2'){
                $('#draaier').remove();
                $('#camera').append('<a-entity class="hand" id="handdraaier" scale="0.15 0.15 0.15" position="0.5 -0.4 -0.8" rotation="130 0 -15" obj-model="obj: #sd-obj; mtl: #sd-mtl"></a-entity>');
                hand = 'p2';
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

            var newPos = Object.values($('#'+id).attr('position'))[0] + " "+ newz + " " + Object.values($('#'+id).attr('position'))[2];
            $('#'+id).attr('position',newPos);
            i+=0.015;
            y++;
            if(y>=3){
                clearTimeout(inter);

                deuvelsMoved += 1;

                if(deuvelsMoved ==6 || deuvelsMoved == 12){
                    makeStep();
                    nextblad();
                }
            }
        },400)
    }
}

function movePosSchroef(id) {
    if (hand == 'p2') {
        $('#' + id).removeAttr('onmouseenter');
        var changePos = parseFloat(Object.values($('#' + id).attr('position'))[0]);
        var y = 0;
        if (id == 's5' || id == 's6' || id == 's7' || id == 's8') {
            var ii = 0.05;
            var inter = setInterval(function () {
                newzp = changePos - ii;
                var newPos = newzp + " " + Object.values($('#' + id).attr('position'))[1] + " " + Object.values($('#' + id).attr('position'))[2];

                $('#' + id).attr('position', newPos);
                ii += 0.05;
                y++;
                if (y >= 3) {
                    clearTimeout(inter);

                    deuvelsMoved += 1;
                    if (deuvelsMoved == 20) {
                        makeStep();
                        nextblad();
                    }
                }
            }, 400)
        } else {
            var i = -0.05;
            var inters = setInterval(function () {
                var newzm = changePos - i;
                var newPos = newzm + " " + Object.values($('#' + id).attr('position'))[1] + " " + Object.values($('#' + id).attr('position'))[2];
                $('#' + id).attr('position', newPos);
                i -= 0.05;
                y++;
                if (y >= 3) {
                    clearTimeout(inters);

                    deuvelsMoved += 1;
                    if (deuvelsMoved == 16) {
                        makeStep();
                        nextblad();
                    }
                }
            }, 400)
        }
    }
}



function emptyHand(){
    if(hand != '') {
        loadCursor();
        var timer = setTimeout(function () {
            if(hand == 'p1'){
                $('#scene').append('<a-entity onmouseenter="pickup(\'1\')" id="pickup1" geometry="primity:box; width:1; height:0.1; depth:0.4;" material="color:red; opacity:0" position="1.7 0.1 -2.1"><a-entity id="hammer" scale="0.2 0.2 0.2" position="-0.4 0 -0.04" rotation="0 0 -90" obj-model="obj: #h-obj; mtl: #h-mtl"></a-entity></a-entity>');
            }else if(hand == 'p2'){
                $('#scene').append('<a-entity onmouseenter="pickup(\'2\')" id="pickup2" geometry="primity:box; width:1; height:0.1; depth:0.4;" material="color:red; opacity:0" position="1.7 0.1 -1.4"><a-entity id="draaier" scale="0.2 0.2 0.2" position="-0.2 0 -0.04" rotation="0 0 -90" obj-model="obj: #sd-obj; mtl: #sd-mtl"></a-entity></a-entity>');
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

AFRAME.registerComponent("screw",{
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
}

function afstand(){
    var data = $.getJSON({url: 'ikealocations.php', async: false}).responseJSON.items;
    vorigeAfstand = 0;
    kleinsteAfstand = 0;
    afstand = 500;

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
        }
        else if ((afstand < onLocationChanged(data[i])) && (kleinsteAfstand > onLocationChanged(data[i]))) {
            vorigeAfstand = i;
        }
    }

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
