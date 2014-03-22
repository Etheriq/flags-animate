$(document).ready(function(){
//    var flags = $(".flags li");
    var flags = $(".flags-ul-list").children();

    console.dir(flags);
    var liCount = $(".flags-ul-list").children().length;
    var containerWidth = $(".flags-ul-list").width();
    var liWidth = containerWidth / liCount;

    var x = 0;
    flags.each( function(index) {

        $(this).css(
            "left", x
        );
        x += $(this).outerWidth(true);
    });

$(".round-left").click(function(){
    var flags = $(".flags-ul-list").children();
    var firstLi = flags.first();
    var lastLi = flags.last();
    var x = firstLi.outerWidth(true);
    var firstLiClone = firstLi.clone();

    console.log("x= " + x);
    flags.first().remove();
    for(var i= 0; i<flags.length; i++) {
        $(flags[i]).animate({
                left: '-='+x
            },
            1000);
    }
    $(firstLiClone).css("left", $(lastLi).css("left"));
    $(".flags-ul-list").append(firstLiClone);

//
//        flags.each(function(index){
//
//            $(this).css("left", "-=x");
//        });

//        flags.append(firstLi);
//        $(flags).get(0).appendTo(".list-flags");


//        flags.each(function(index, domEl){



//            $(domEl).animate({
//                left : '-=40px'
////                    opacity: 'hide'
//            },
//            1000);
//        });
});

});