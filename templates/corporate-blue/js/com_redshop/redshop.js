/**
 * @copyright  Copyright (C) 2008 - 2015 redCOMPONENT.com. All rights reserved.
 * @license    GNU General Public License version 2 or later; see LICENSE
 */

// Only define the redSHOP namespace if not defined.
redSHOP = window.redSHOP || {};

/**
 * Custom behavior for JavaScript dynamic variables
 *
 * Allows you to call redSHOP.RSConfig._() to get a dynamic JavaScript string pushed in with JText::script() in Joomla.
 */
redSHOP.RSConfig = {
    configStrings: {},
    '_': function(key, def) {
        return typeof this.configStrings[key.toUpperCase()] !== 'undefined' ? this.configStrings[key.toUpperCase()] : def;
    },
    load: function(object) {
        for (var key in object) {
            this.configStrings[key.toUpperCase()] = object[key];
        }

        return this;
    }
};

jQuery(document).ready(function($) {
	jQuery('[id^="pdaddtocartprd"]').addClass('btn btn-info').removeClass('pdaddtocart_link');

	jQuery('.product_image [id^="main_image"]').addClass('img-polaroid pull-right');

	jQuery('.product_main_price [id^="produkt_kasse_hoejre_pris_indre"]')
		.addClass('product_price pull-right badge badge-info');
});