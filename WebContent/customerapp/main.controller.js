var interval;
sap.ui
		.controller(
				"customerapp.main",
				{

					/**
					 * Called when a controller is instantiated and its View
					 * controls (if available) are already created. Can be used
					 * to modify the View before it is displayed, to bind event
					 * handlers and do other one-time initialization.
					 * 
					 * @memberOf customerapp.main
					 */

					onInit : function() {
						$.ajaxSetup({
							async : false
						});
						var that = this;
						this.oCustData = {};
						this.oCustDetails = {};
						jQuery.proxy(this.CustData(), this);
						// jQuery.proxy(this.getCustDetailedData(),this);
						interval = window.setInterval(function() {
							that.CustData();
						}, 3000);
						// setInterval(function(){ that.CustData(); }, 5000);

					},
					CustData : function() {
						var that = this;
						jQuery
								.getJSON(
										"http://wth2htc.byethost32.com/salesrep/getCustomerQueue.php?custid=100",
										function(oCustInfo) {
											that.oCustData = oCustInfo[0];
											clearInterval(interval);
											var oModel = new sap.ui.model.json.JSONModel(
													that.oCustData);
											that.getView().setModel(oModel,
													"SalesRepDetails");
											that.getCustOfferData();
											$(".repImg")
													.addClass(
															"img-responsive img-circle");
										});
					},

					getCustOfferData : function() {
						var that = this;
						var sURL = "https://s6hanaxs.hanatrial.ondemand.com/i310863trial/i310863/customer.xsjs?customerid=300"
								+ that.oCustData.custid;
						jQuery.getJSON(sURL, function(oCustDetails) {
							that.oCustDetails = oCustDetails;
							var oModel = new sap.ui.model.json.JSONModel(
									oCustDetails);
							that.getView().setModel(oModel, "SalesRepDetails");
						});
					},
					/**
					 * Similar to onAfterRendering, but this hook is invoked
					 * before the controller's View is re-rendered (NOT before
					 * the first rendering! onInit() is used for that one!).
					 * 
					 * @memberOf customerapp.main
					 */
					// onBeforeRendering: function() {
					//
					// },
					/**
					 * Called when the View has been rendered (so its HTML is
					 * part of the document). Post-rendering manipulations of
					 * the HTML could be done here. This hook is the same one
					 * that SAPUI5 controls get after being rendered.
					 * 
					 * @memberOf customerapp.main
					 */
					onAfterRendering : function() {
						$(".demo").backstretch("customerapp/Img/img1.jpg");
						$(".demo1").backstretch(this.oCustData.salesimg);
						$(".demo1").blurjs({
							source : 'body',
							radius : 10
						});
						$(".textColor").css("color", "red");
						jQuery(".repText").html(
								"<b>" + this.oCustData.salesname + "</b>").css(
								"font-size", "x-large").css("text-align",
								"center").css("margin-top", "1em");
						jQuery(".repImg")
								.prepend(
										'<img src="' + this.oCustData.salesimg
												+ '" />');
						$(".repImg").addClass("img-responsive img-circle");

					},

				/**
				 * Called when the Controller is destroyed. Use this one to free
				 * resources and finalize activities.
				 * 
				 * @memberOf customerapp.main
				 */
				// onExit: function() {
				//
				// }
				});