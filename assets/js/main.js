
$(document).ready(function(){
    //################################################ INITIALIZERS ###################################################
    function templateInitializerCallback(){
        setSocialMedia()
    }

    function setSocialMedia(){
        //Twitter
        // !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


        //Fb share
        // $('iframe#fb-share-button').click(function(){
        //     window.open(
        //       'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 
        //       'facebook-share-dialog', 
        //       'width=626,height=436'); 
        // })
    }

    //###################################################### RUN CODE #####################################################
    templateInitializerCallback();

})