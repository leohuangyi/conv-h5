/**
 * Created by Leo on 16/4/12.
 * conv-h5
 */

var $conv_h5 = {
    animate: function (nodes) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        nodes.forEach(function(node){
            node = $(node);
            var transition = {};
            var delay = parseFloat(node.data('delay'));
            var duration = parseFloat(node.data('duration'));
            var animationName = node.data('animation');
            if(!isNaN(duration)){
                transition['animation-duration'] = duration + 's'
            }
            if(!isNaN(delay)){
                transition['animation-delay'] = delay + 's'
            }
            console.log(transition);
            node.css(transition);

            node.addClass('animated ' + animationName).one(animationEnd, function() {
                node.removeClass('animated ' + animationName);
            });
        });
    }
};
window.$conv_h5 = $conv_h5;

