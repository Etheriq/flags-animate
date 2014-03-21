$(document).ready(function(){
    var flags = $(".flags li");

    $(".round-left").click(function(){

        $(flags).get(0).appendTo(".list-flags");


//        flags.each(function(index, domEl){



//            $(domEl).animate({
//                left : '-=40px'
////                    opacity: 'hide'
//            },
//            1000);
//        });
    });
});