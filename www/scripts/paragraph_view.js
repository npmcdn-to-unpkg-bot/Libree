/**
 * Created by jimmy on 7/04/16.
 */

(function () {
    "use strict";

    $('.chapitre__read').click(function(e){
        e.preventDefault();
        $('.chapitre__contener-paragraph').toggleClass('déplié')
    })

})(jQuery);