     var envelope = $('#envelope');
     var btn_open = $("#open");
     var btn_reset = $("#reset");
     var letter = $(".letter");
     var pocket = $(".pocket")[0];
     btn_open.click( function() {
         open();
     });

     function open() {
         var width = pocket.offsetHeight
         envelope.addClass("open")
            .removeClass("close");
         letter[0].style.transition = 'transform 1s 0.5s ease, z-index 0.6s'
         letter[0].style.transform = 'translateY(-'+width+'px)'
         setTimeout(()=>{
             letter[0].style.zIndex = "3"
             setTimeout(()=>{
                 letter[0].style.transition = 'transform 0.6s ease, z-index 1s'
                 letter[0].style.transform = 'translateY(0px)'
             }, 400)
         }, 700)
     }
     function close() {
         envelope.addClass("close")
            .removeClass("open");
     }
   
