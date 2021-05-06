({
	getBaseUrl: function(component) { 
    	var urlString = window.location.href;
 		var baseURL = urlString.substring(0, urlString.indexOf("/s"));
        console.log('Base URL' + baseURL);
 		component.set("v.baseURL", baseURL);
    }
})
