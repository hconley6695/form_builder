// Javascript Entry Point
import $ from 'jquery';

import form_data from './form_data';

import { makeInputs, commentSection, selectBox } from './templates';


var $app = $('.app');

form_data.forEach(function(datum) {
	var template;
	if (datum.type === "text" || datum.type === "email" || datum.type === "tel") {
		template = makeInputs;
	} else if (datum.type === "textarea") {
		template = commentSection;
	} else if (datum.type === "select") {
		template = selectBox;
	}
	var html = template(datum);
	$app.append(html);
});
