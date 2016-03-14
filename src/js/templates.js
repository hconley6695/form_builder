
export function makeInputs(input) {
	return `
	<label for="${input.id}">      </label>
 		<input type="text" 	id="${input.id}" value="${input.label}">
 		<br>
 		`
};

export function commentSection(comment) {
	return `
		<label for="${comment.id}">    </label>
		<input type="textarea" id="${comment.id}" value="${comment.label}">
 		<br>
 		`
};

export function selectBox(language){
	var langOpt = language.options;
	var langHtml = langOpt.map (function(lang) {
		return `<option>${lang }</option>`
	});	

	langHtml = langHtml.join('');

	return `
	 	<label for="${language.id}">     </label>
	 	<select id="${language.id}"> 
 			<option value="Select Language">Select Language</Option>
 			<option value="EN">English</Option>
 			<option value="FR">French</Option>
 			<option value="SP">Spanish</Option>
 			<option value="CH">Chinese</Option>
 			<option value="JP">Japanese</Option>
 		</select>
 		<br>
 	`
};


