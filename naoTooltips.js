/**
 * @name: naoTooltips.js
 * @author: Noemi Losada <info@noemilosada.com>
 * @date: 09/07/2016
 * Creative Commons License <http://creativecommons.org/licenses/by-sa/3.0/>
 */

(function($) {

    /**
     * Default options
     *
     * @property defaults
     * @type {object}
     */
    var defaults = {
        speed: 400
    };

    /**
     * Config elements
     *
     * @property config
     * @type {object}
     */
    var config = {
        tooltip: 'naoTooltip',
        arrowSize: 16
    };

    /**
     * naoTooltip plugin
     *
     * Usage:
     * $('.naoTooltip-wrap').naoTooltip({ speed: 200 });
     *
     * @method naoTooltip
     * @return {object} this
     */
    $.fn.naoTooltip = function() {
        // Initialize the plugin with the given arguments
        init.apply(this, arguments);

        return this;
    };

    /**
     * @method init
     * @params {object} opts
     * @return {void}
     */
    function init(opts) {
        // Override default options with the custom ones
        var options = $.extend({}, defaults, opts);

        // Save options for the current instance
        this.data(options);

        this.each(function(i, e) {
            animateNaoTooltip($(e), options);
        });
    }


    /**
     * Default show and hide tooltip animations
     *
     * @method animateNaoTooltip
     * @param {object} opts
     * @param {string} selector
     * @return {void}
     */
    function animateNaoTooltip(selector, opts) {
        var tooltip = selector.find('.' + config.tooltip);

        // Set the initial tooltip position
        // We need to set the left offset to get the proper height
        // and be able to set the top offset
        setLeftOffset(selector, tooltip);
        setTopOffset(selector, tooltip);


        // Set again the position on resize
        $(window).resize(function() {
            setLeftOffset(selector, tooltip);
            setTopOffset(selector, tooltip);
        });

        $(window).scroll(function() {
            setTopOffset(selector, tooltip);
        });

        // Show and hide the tooltip
        selector.hover(function() {
            showTooltip(tooltip, opts.speed);
        }, function() {
            hideTooltip(tooltip, opts.speed);
        });
    }

    /**
     * Set the left offset of a tooltip
     *
     * @method setLeftOffset
     * @param {object} tooltip
     * @return {void}
     */
    function setLeftOffset(selector, tooltip) {
        var leftOffset = 'auto';

        if (tooltip.hasClass('nt-right')) {
            leftOffset = selector.outerWidth();
        }

        if (tooltip.hasClass('nt-left')) {
            leftOffset = '-' + (tooltip.outerWidth() + config.arrowSize);
        }

        if (tooltip.hasClass('nt-top') || tooltip.hasClass('nt-bottom')) {
            leftOffset = (selector.outerWidth() / 2) - (tooltip.outerWidth / 2)
        }

        tooltip.css({
            left: leftOffset
        });
    }

    /**
     * Set the top offset of a tooltip
     *
     * @method setTopOffset
     * @param {object} tooltip
     * @return {void}
     */
    function setTopOffset(selector, tooltip) {
        var topOffset = 'auto';

        if (tooltip.hasClass('nt-right') || tooltip.hasClass('nt-left')) {
            topOffset = (selector.outerHeight() / 2) - (tooltip.outerHeight() / 2);
        }

        if (tooltip.hasClass('nt-top')) {
            topOffset = '-' + (selector.outerHeight() + tooltip.outerHeight());
        }

        if (tooltip.hasClass('nt-bottom')) {
            topOffset = selector.outerHeight();
        }

        tooltip.css({
            top: topOffset
        });
    }

    /**
     * Show tooltip
     *
     * @method showTooltip
     * @param {object} tooltip
     * @params {object} speed
     * @return {void}
     */
    function showTooltip(tooltip, speed) {
        tooltip.css({ visibility: 'visible' }).animate({
            opacity: 1
        }, speed);
    }

    /**
     * Hide tooltip
     *
     * @method hideTooltip
     * @param {object} tooltip
     * @params {object} speed
     * @return {void}
     */
    function hideTooltip(tooltip, speed) {
        tooltip.animate({
            opacity: 0,
        }, speed, function() {
            tooltip.css({ visibility: 'hidden' });
        });
    }

})(jQuery);
