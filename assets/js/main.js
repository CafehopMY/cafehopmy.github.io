
$(document).ready(function(){
    //################################################ INITIALIZERS ###################################################
    function templateInitializerCallback(){
        setSocialMedia()
    }

    function setSocialMedia(){
        //Twitter
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


        //Fb share
        $('iframe#fb-share-button').click(function(){
            window.open(
              'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 
              'facebook-share-dialog', 
              'width=626,height=436'); 
        })
    }

    //###################################################### RUN CODE #####################################################
    templateInitializerCallback();


    //###################################################### GOOGLE ANALYTICS #####################################################
    // var _gaq=[['_setAccount','UA-43969265-1'],['_trackPageview']];
    // (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    // g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
    // s.parentNode.insertBefore(g,s)}(document,'script'));
})