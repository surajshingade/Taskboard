/**
 * Angular directive for qTip2 library. Usage example:
 *
 *  <a id="qtip-trigger-tooltipContainer">
 *      foo bar
 *      <div data-qtip data-qtip-id="tooltipContainer">Tooltip content here</div>
 *  </a>
 */
"use strict";

angular.module("TaskBoardDirectives")
    .directive("qtip", function() {
        return {
            restrict: "A",
            scope: {
                qtipId: "@",
                qtipContent: "@"
            },
            transclude: true,
            replace: true,
            templateUrl: "/templates/directives/qtip.html",
            link: function(scope, element, attributes) {
                scope.parentId = "#qtip-trigger-" + attributes.qtipId;
                scope.closeButton = (attributes.closeButton);

                switch (attributes.position) {
                    case "top":
                        scope.qtipPointerPos = "bottom center";
                        scope.qtipContentPos = "top center";
                        break;
                    case "bottom":
                        scope.qtipPointerPos = "top center";
                        scope.qtipContentPos = "bottom center";
                        break;
                    case "bottomright":
                        scope.qtipPointerPos = "top left";
                        scope.qtipContentPos = "bottom right";
                        break;
                    case "left":
                        scope.qtipPointerPos = "bottom right";
                        scope.qtipContentPos = "top left";
                        break;
                    case "right":
                        scope.qtipPointerPos = "center left";
                        scope.qtipContentPos = "center right";
                        break;
                    default:
                        scope.qtipPointerPos = "bottom left";
                        scope.qtipContentPos = "top right";
                        break;
                }

                jQuery(scope.parentId).each(function() {
                    jQuery(this).qtip({
                        metadata: {
                            type: "html5",      // Use HTML5 data-* attributes
                            name: "qtipOptions" // Grab the metadata from the data-qtip-options HTML5 attribute
                        },
                        content: {
                            text: jQuery(element),
                            title: attributes.qtipTitle,
                            button: scope.closeButton
                        },
                        style: {
                            tip: {
                                corner: true
                            },
                            classes: "qtip-rounded qtip-shadow qtip-bootstrap"
                        },
                        show: {
                            solo: true,
                            delay: 40
                        },
                        hide: {
                            delay: 50,
                            effect: false
                        },
                        position: {
                            viewport: jQuery(window),
                            target: (attributes.target ? attributes.target : "event"),
                            adjust: {
                                method: "flipinvert",
                                mouse: (attributes.static === null)
                            },
                            my: scope.qtipPointerPos,
                            at: scope.qtipContentPos
                        },
                        events: {
                            hide: function() {
                                element.qtip("destroy");
                            }
                        }
                    });
                });

                // Immediately destroy all tooltips belonging to the selected elements
                scope.$on("$destroy", function() {
                    jQuery(scope.parentId).qtip("destroy", true);
                });
            }
        };
    });