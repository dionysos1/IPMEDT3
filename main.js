$(document).ready(function(){
  // uitleg bord deel
  var scene = document.getElementById('scene');
  var next = document.getElementById('next');
  var back = document.getElementById('back');
  var uitleg = document.getElementById('tekening');
  var number = 0;
    next.onmouseenter = function(){
      if (number < 3) { number++ }
      uitleg.setAttribute("src", "stap" + number + ".jpg");
    };
    back.onmouseenter = function(){
      if (number > 0) { number-- }
      uitleg.setAttribute("src", "stap" + number + ".jpg");
    };

    // Materiaal bord knopjes
    var sBox = document.getElementById('s-box');
    var hBox = document.getElementById('h-box');
    var iBox = document.getElementById('inbus-box');
    var screwBox = document.getElementById('screw-box');
    var dBox = document.getElementById('duvel-box');
    var eBox = document.getElementById('empty-box');

    hand = '';
    handBoxId = '';
    newboxes = 0;

    placeboxl = [1,'-4 0.5 -1',2,'-4 1.5 -1'];
    placeboxs = [3,'-5.45 1.05 -1',4,'-2.55 1.05 -1',5,'-4.55 1.05 -1',6,'-3.55 1.05 -1']

    var raycasterEl = AFRAME.scenes[0].querySelector('[raycaster]');
    console.log(raycasterEl.components.raycaster);

});


function toolSelect(selector,box){
    var timer = setTimeout(function () {
        if(selector == 'hammer'){
            $('.tool').remove();
            $('#camera').append('<a-entity id="hammer" class="tool" scale="0.3 0.3 0.3" position="0.5 -1.2 -1" rotation="0 180 0"  obj-model="obj: #hammer-obj; mtl: #hammer-mtl"></a-entity>');
          hand =  selector;
        }else if(selector == 'inbus'){
            $('.tool').remove();
            $('#camera').append('<a-entity id="inbus" class="tool" scale="0.03 0.03 0.03" rotation="80 45 90" position="0.6 -1 -1" obj-model="obj: #inbus-obj; mtl: #inbus-mtl"></a-entity>');
            hand =  selector;
        }else if(selector == 'deuvel') {
            $('.tool').remove();
            $('#camera').append('<a-entity id="deuvel" class="tool" scale="0.05 0.05 0.05" position="0.5 -0.5 -1" rotation="0 180 0"  obj-model="obj: #deuvel-obj; mtl: #deuvel-mtl"></a-entity>');
            hand = selector;
        }else if(selector == 'schroef') {
            $('.tool').remove();
            $('#camera').append('<a-entity id="schroef" class="tool" scale="0.05 0.05 0.05" position="0.5 -0.5 -1" rotation="-45 180 -45"  obj-model="obj: #schroef-obj; mtl: #schroef-mtl"></a-entity>');
            hand = selector;
        }else if(selector == 'empty'){
            $('.tool').remove();
            hand =  selector;
        }
    },1050);
    document.getElementById(box).addEventListener('mouseleave', function () {
        clearTimeout(timer);
    })
}

function drag(selector){
    if(hand=='' || hand=='empty') {
        var timer = setTimeout(function () {
            var box = document.getElementById(selector);
            document.getElementById('camera').appendChild(box);
            box.setAttribute('position', '0 -0.2 -0.5');
            box.setAttribute('rotation', '45 0 45');
            box.setAttribute('scale', '0.1 0.1 0.1');
            hand = selector;
            handColor = $('#' + selector).attr('color');
            listenBox();
        }, 1050);
    }
    document.getElementById(selector).addEventListener('mouseleave', function () {
        clearTimeout(timer);
    })
}

function place(placer){
    var rotValue = Object.values($('#'+placer).attr('rotation'));
    var newRot = rotValue[0]+" "+rotValue[1]+" "+rotValue[2];
    var posValue = Object.values($('#'+placer).attr('position'));
    var newPos = posValue[0]+" "+ posValue[1] +" "+posValue[2] ;
    var nheight = $('#'+placer).attr('height');
    var nwidth = $('#'+placer).attr('width');
    var ndepth =$('#'+placer).attr('depth');
    if(hand.indexOf('box') !== -1){
        var timer = setTimeout(function () {
            $('#'+placer).remove();
            $('#'+hand).remove();

            var newBox = document.createElement('a-box');
            newBox.setAttribute('id','newBox'+newboxes);
            document.getElementById('kastScene').appendChild(newBox);
            $('#newBox'+newboxes).attr({
                position: newPos,
                color:handColor,
                rotation:newRot,
                height: nheight,
                width: nwidth,
                depth: ndepth
            });
            hand = 'empty';
            newboxes+=1;
            $('.placeboxx').remove();
        },1050);
        document.getElementById(placer).addEventListener('mouseleave', function () {
            clearTimeout(timer);
        })
    }else{

    }
}

function listenBox(){
    if(hand == 'box1' || hand == 'box2'){
        for(var i= 0, k =1; k < placeboxl.length; i+=2,k+=2){
            $('#kastScene').append('<a-box class="placeboxx clickable" id="placebox'+placeboxl[i]+'" onmouseenter="place(\'placebox'+placeboxl[i]+'\')" position="'+placeboxl[k]+'" rotation="0 0 0" color="green" opacity="0.2" width="3" height="0.1" depth="1"><a-animation attribute="opacity" from="0.2" to="0.05" dur="200" direction="alternate" repeat="indefinite"></a-animation></a-box>');
        }
    }else if(hand.indexOf('boxs') !== -1){
        for(var j =0, c =1; c < placeboxs.length; j+=2,c+=2){
            $('#kastScene').append('<a-box class="placeboxx clickable" id="placebox'+placeboxs[j]+'" onmouseenter="place(\'placebox'+placeboxs[j]+'\')" position="'+placeboxs[c]+'" rotation="0 0 0" color="green" opacity="0.2" width="0.1" height="1" depth="1"><a-animation attribute="opacity" from="0.2" to="0.05" dur="200" direction="alternate" repeat="indefinite"></a-animation></a-box>');
        }
    }
}

