app.directive('mouseTooltip', [function() {
    return {
        restrict: 'A',
        link: function($scope, $element) {
            var x,
                y;

            // parent relitave to this element.
            var parent = angular.element($element).parent();

            //Bind mousemove event to the element which will show tooltip
            parent.mousemove(function(e) {

                //find X & Y coodrinates
                x = e.pageX - parent.offset().left + 15,
                y = e.pageY - parent.offset().top;
                
                //Set tooltip position according to mouse position
                $element.css({top: y+ 'px', left: x + 'px'});
            });
               
        }
        };
}]);