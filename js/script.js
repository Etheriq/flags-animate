$(document).ready(function(){
//    var flags = $(".flags li");
    var flags = $(".flags-ul-list").children();
    var liCount = flags.children().length;

    var maxWidthArray = [];
    for(var i = 0; i<liCount; i++) {
        maxWidthArray.push(($(flags[i]).outerWidth(true))+20);
    }

    var maxWidthLi = Math.max.apply({}, maxWidthArray);
    console.log(maxWidthArray);
    console.log(maxWidthLi);
    $(flags).css("width", maxWidthLi);

    var containerWidth = $(".flags").width();
    var liLeftStep = containerWidth / liCount;
    var x = 0;
    flags.each( function(index) {

        $(this).css(
            "left", x
        );
        x += liLeftStep;
    });

$(".round-left").click(function(){
    var flags = $(".flags-ul-list").children();
    var firstLi = flags.first();
    var firstLiWidth = firstLi.outerWidth(true);
    var firstLiCloned = firstLi.clone();
    var lastLi = flags.last();
    var z = parseInt($(lastLi).css("left"));

    var callbacks = $.Callbacks();

    function firstLiDo()
    {
        $(firstLi).animate({
                opacity: 0,
                left: -100
            },
            1000,
            function(){
                firstLi.remove();
            });
    }

    function otherLiDo()
    {
        $(flags).each(function(index){
            $(this).animate({
                    left: '-='+firstLiWidth
                },
                1000)
        });
    }

    function lastLiDo()
    {
        z += 100;
        $(firstLiCloned).css({
            "left": z,
            "opacity": 0
        });

        $(".flags-ul-list").append(firstLiCloned);

        z -= 100;
        $(firstLiCloned).animate({
                opacity:1,
                left: z
            },
            1000);
    }

    callbacks.add(firstLiDo());
    callbacks.add(otherLiDo());
    callbacks.add(lastLiDo());

    callbacks.fire();

    callbacks.empty();

});

$(".round-right").click(function(){
    console.log('right');
});

});