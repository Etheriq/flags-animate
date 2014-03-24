$(document).ready(function(){
    var flags = $(".flags-ul-list").children();
    var liCount = flags.children().length;
    var sumWidthLi = 0;
    var marginLi = parseInt(flags.first().css("margin")) * 4;
    var maxWidthArray = [];

    for(var i = 0; i<liCount; i++) {
        maxWidthArray.push(($(flags[i]).outerWidth(true)) + marginLi);
        sumWidthLi += ($(flags[i]).outerWidth(true)) + marginLi;
    }

    var maxWidthLi = Math.max.apply({}, maxWidthArray);
    console.log('array width li = ' + maxWidthArray);
    console.log('max width li = ' + maxWidthLi);
    console.log('sum width li = ' + sumWidthLi);

    sumWidthLi +=maxWidthLi;
    $(".flags").css("width", sumWidthLi);
    $(flags).css("width", maxWidthLi);

    var liLeftStep = Math.round(sumWidthLi / liCount);
    var x = 0;
    flags.each( function() {
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
        function firstLiDo()
        {
            $(firstLi).animate({
                    opacity: 0,
                    left: '-=100'
                },
                1000,
                function(){
                    firstLi.remove();
                });
        }
        function otherLiDo()
        {
            $(flags).each(function(){
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
        var callbacks = $.Callbacks();
        callbacks.add(firstLiDo());
        callbacks.add(otherLiDo());
        callbacks.add(lastLiDo());
        callbacks.fire();
        callbacks.empty();
    });

    $(".round-right").click(function(){
        var flags = $(".flags-ul-list").children();
        var lastLi = flags.last();
        var lastLiWidth = lastLi.outerWidth(true);
        var lastLiCloned = lastLi.clone();
        function lastLiDo()
        {
            $(lastLi).animate({
                    opacity: 0,
                    left: '+=100'
                },
                1000,
                function(){
                    lastLi.remove();
                });
        }
        function otherLiDo()
        {
            $(flags).each(function(){
                $(this).animate({
                        left: '+=' + lastLiWidth
                    },
                    1000)
            });
        }
        function firstLiDo()
        {
            $(lastLiCloned).css({
                "left": -100,
                "opacity": 0
            });
            $(".flags-ul-list").prepend(lastLiCloned);
            $(lastLiCloned).animate({
                    opacity:1,
                    left: 0
                },
                1000);
        }
        var callbacks = $.Callbacks();
        callbacks.add(lastLiDo());
        callbacks.add(otherLiDo());
        callbacks.add(firstLiDo());
        callbacks.fire();
        callbacks.empty();
    });

});
