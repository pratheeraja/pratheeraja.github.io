// History Pushstate Functions
$(function(){
    var ajaxRequest;
    $(document).on('click', 'a.history', function(e) {
        if(history.pushState){
            e.preventDefault();

            if(ajaxRequest) ajaxRequest.abort();

            var that = this;
            loadURL(that.href);
            var obj = {href: that.href};
            history.pushState(obj, "New URL", that.href);
            if($(window).width() <= 568){
                $('.tf-navbar-toggle').trigger('click');
            }
            if( $('li.active .dropdown-menu a[href="'+ that.href +'"]').length ){
                $('.dropdown-menu li.selected').removeClass('selected');
                $('.dropdown-menu a[href="'+ that.href +'"]').closest('li').addClass('selected');
            }else{
                $('li.active .dropdown-menu').fadeOut(500, function(){
                    var el = this;
                    $(el).closest('li').removeClass('active');
                    $(el).find('li').removeClass('selected');
                    $('.dropdown-menu a[href="'+ that.href +'"]').closest('li').addClass('selected').closest('ul.dropdown-menu').fadeIn(500).closest('li').addClass('active');
                    $(el).css('display', '');
                });
            }
        }

    });
    window.addEventListener('load', function() {
        setTimeout(function() {
            if(history.pushState){
                window.addEventListener('popstate', function(e) {
                    e.preventDefault();

                    if(ajaxRequest) ajaxRequest.abort();

                    var completeurl = siteurl + location.pathname;
                    loadURL(completeurl);
                    if( $('li.active .dropdown-menu a[href="'+ completeurl +'"]').length ){
                        $('.dropdown-menu li.selected').removeClass('selected');
                        $('.dropdown-menu a[href="'+ completeurl +'"]').closest('li').addClass('selected');
                    }else{
                        $('li.active .dropdown-menu').fadeOut(500, function(){
                            var el = this;
                            $(el).closest('li').removeClass('active');
                            $(el).find('li').removeClass('selected');
                            $('.dropdown-menu a[href="'+ completeurl +'"]').closest('li').addClass('selected').closest('ul.dropdown-menu').fadeIn(500).closest('li').addClass('active');
                            $(el).css('display', '');
                        });
                    }
                });
            }
        }, 0);
    });

    function loadURL(href){
        $('.ajax-result').hide();
        $(window).scrollTop(0);

         ajaxRequest = $.ajax({
            url: href,
            data: { 'requested': '1' },
            success: function(data) {
                var temp = history.state;

                window.ajaxResult = data;

                var strVal = data; //obviously, this line can be omitted - just assign your string to the name strVal or put your string var in the pattern.exec call below 
                var pattern = /<\/head>[\r\n\t]+?<body[^>]*>.|[\n\r]*<\/nav>((.|[\n\r])*)<\/body>/gim
                var array_matches = pattern.exec(strVal);

                var classPattern = /<\/head>[\r\n\t]+?<body.*class=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/
                var array_classes = classPattern.exec(strVal);

                var bodyClass = ''
                if(array_classes){
                    bodyClass = array_classes[1];
                }
                if($('.dropdown-menu a[href="'+ href +'"]').length == 0){
                    bodyClass = 'landing-page';
                    $('.nav.navbar-nav > li > a').removeClass('history');
                }else{
                    $('.nav.navbar-nav > li > a').addClass('history');
                }

                $('body').removeClass().css('margin', '').addClass(bodyClass);
                $('.ajax-result').html(data).fadeIn(500);

                if($('body .work-thumbnail-container').length){
                    showThumbnails();
                }
                if(bodyClass == 'landing-page'){
                    initializeVideo();
                }
            },
            error: function(jqXhr, textResponse, error) {
                console.log(textResponse);
                console.log('ERROR:' + error);
            }
        });
    }
});

function showThumbnails(){
    var $that = $('body .work-thumbnail-container .single-work-thumb');
    // $that.hide();
    var $images = $that.find('img');
    var len = $images.length;
    var loaded = 0;

    $images.on('load', function(){
        $(this).closest('.single-work-thumb').fadeIn();
    }).each(function(){
        if(this.complete) $(this).trigger("load");
    });
}

$(function() {
    // For accordion Pages
    $('body').on('click','.artist-statement-accordion .accordion-item-link',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });

    $('body').on('click','.faqs-accordion .accordion-item-link',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });

    // To come back to same scroll position after closing artist information
    var infoPageScroll = 0;
    // Single Work Page
    $('body').on('click','.info-icon-link', function(e){
        e.preventDefault();
        infoPageScroll = $(window).scrollTop();
        $('.page-content').hide();
        $('.artist-statement-overlay').fadeIn();
        $(window).scrollTop(0);
    });

    $('body').on('click', '.close-overlay-link', function(e){
        e.preventDefault();
        $($(this).data('close')).hide();
        $('.page-content').fadeIn();
        $(window).scrollTop(infoPageScroll);
    });

    $('body').on('mouseenter', '.thumbnail', function(){
        var height = $(this).find('.centered-text').height(),
            containerHeight = $(this).height();
        $(this).find('.centered-text').css({
            marginTop: (containerHeight - height) / 2
        });
    });

    // Articles page
    function setSelected(article){
        $('.article-container').removeClass('selected');
        $(article).addClass('selected');
    }

    $('body').on('click', '.article-container', function(e){
        if($(window).width() > 568){
            return;
        }
        if($(e.target).closest('.article-container.selected').length){
            return;
        }
        setSelected(this);
    });

    $(window).on('resize', function(){
        if($(window).width() > 568){
            $('.article-container').removeClass('selected');
        }
    });


    //books page script
    $('body').on('click', '.show-more-info',function(e){
        e.preventDefault();
        var $this = $(this);
        if($this.hasClass('show-less')){
            $this.find('.show-more-text').text('Show more information');
            $this.removeClass('show-less');
        }else{
            $this.find('.show-more-text').text('Show less information');
            $this.addClass('show-less');
        }
    });


    // Landing Page Script
    $('body.landing-page').on('click', '.nav.navbar-nav > li > a', function(e){
        e.preventDefault();
        if($('body.landing-page').length){
            $('.nav.navbar-nav > li').removeClass('active');
            $(this).parent().addClass('active');
        }
    });

    // Full height Navbar on mobile
    var navbar = $('.navbar');

    $(window).resize(function(){
        navbar.css('height', '');
        if( $('.navbar-collapse').hasClass('in') ){
            $('.tf-navbar-toggle').trigger('click');
        }
    });

    $(window).on('orientationchange', function(){
        $(window).trigger('resize');
    });

    $(window).trigger('resize');

    $('.navbar-ex1-collapse').on('show.bs.collapse', function(e) {
        navbar.data('initial-height', navbar.height()).css({height: window.innerHeight + 'px', zIndex: '1032'});
    }).on('hide.bs.collapse', function(e) {
        navbar.css({ height: navbar.data('initial-height') + 'px' , zIndex: '1030'});
    });


    // Show Thumbnails one by one if loading page directly
    $(document).ready(function(){
        if($('body .work-thumbnail-container').length){
            showThumbnails();
        }
    });
});