Template.header.rendered = function() {
    Deps.autorun(function(){
        var siteTitle = Fireball.getSiteSetting('general/title');
        if (siteTitle) {
            document.title = siteTitle;
        }
    });

    var docElem = document.documentElement,
        header = document.querySelector( '.navbar-fixed-top' ),
        didScroll = false,
        changeHeaderOn = 300;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'navbar-shrink' );
        }
        else {
            classie.remove( header, 'navbar-shrink' );
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();
};

Template.header.events({
    'click .page-scroll a': function(event) {
        event.preventDefault();

        var $anchor = $(event.target);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'easeInOutExpo');
    }
});

Template.header.helpers({
	pages: function() {
		return Fireball.Pages.find({
			parent: false
		},{
			sort: {
				order: 1
			}
		});
	},
	children: function() {
		var children = Fireball.Pages.find({
			parent: this._id
		},{
			sort: {
				order: 1
			}
		});
		if (children.count()) {
			return children;
		} else {
			return false;
		}
	}
});
