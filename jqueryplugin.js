(function($) {
	
	$.fn.hasScrolling = function() {
		if(jQuery('body').height() > jQuery(window).height()) {
			return true;
		}
		else {
			return false;
		}
	}

	$.fn.greenify = function() {
		this.css('color','red');
	}

	$.fn.bottom = function() {
		jQuery(window).scroll(function() {
			if(jQuery(window).scrollTop + jQuery(window).height() == jQuery(document).height()) {
				return true;
			}
			else {
				return false;
			}
		});
	}


}( jQuery ));