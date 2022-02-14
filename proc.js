    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();
        let docHeight = $(document).height();
        let winHeight = $(window).height();
        let scrollPercent = (scrollTop) / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent*100);
        if(Math.round(scrollPercent*100) === 12){
            alert('eadead')
            document.getElementById('gif2')
        }
        $('#scrollPercentLabel>div').html(scrollPercentRounded);
    });

