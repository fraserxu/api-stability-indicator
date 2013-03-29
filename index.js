// Dependencies
var $ = require('jquery');

// Status Array with status code and status descriptor
var sta = ["Deprecated", "Experimental", "Unstable", "Stable", "API Frozen", "Locked"];

// add function
function addStability(sta_code, sta_content) {
    var tpl = '<pre class="api_stability_'+ sta_code +' sh_sourceCode">Stability<span class="sh_symbol">:</span> <span class="sh_number">'+ sta_code +'</span> <span class="sh_symbol">-</span> '+ sta_content +'</pre>'; 
    $('article>a.stab0'+ sta_code +'').next('section').prepend(tpl);
};

for (i in sta) {
	addStability(i, sta[i]);
}