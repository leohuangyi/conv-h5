/**
 * Created by Leo on 16/4/12.
 * conv-h5
 */
(function( global, factory ) {
    if ( typeof module === "object" && typeof module.exports === "object" ) {
        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get jQuery.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info.
        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "jQuery requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
    var $conv_h5 = {
        animate: function (nodes) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            nodes.forEach(function(node){
                node = $(node);
                var transition = {};
                var delay = parseFloat(node.attr('delay'));
                var duration = parseFloat(node.data('duration'));
                var animationName = node.data('animation');
                if(!isNaN(duration)){
                    transition['transition-duration'] = duration + 's'
                }
                if(!isNaN(delay)){
                    transition['transition-delay'] = duration + 's'
                }
                node.css(transition);

                node.addClass('animated ' + animationName).one(animationEnd, function() {
                    node.removeClass('animated ' + animationName);
                });
            });
        }
    };

    if ( !noGlobal ) {
        window.$conv_h5 = $conv_h5;
    }
    return $conv_h5;
}))();
