sap.ui.controller("customerapp.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf customerapp.main
*/
	onInit: function() {
		console.log("hello");
		  
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf customerapp.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf customerapp.main
*/
	onAfterRendering: function() {
//		  $(".demo").backstretch("http://static2.1ms.net/christmas-shopping-wide-wallpaper-532785.jpg");
		 $(".demo").backstretch("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdWdI-5KKlkcPak1klZSM_J5B3xgshBFCbzhDCbvgEF57DfCRO");

		$.backstretch("http://dl.dropbox.com/u/515046/www/garfield-interior.jpg");
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf customerapp.main
*/
//	onExit: function() {
//
//	}

});