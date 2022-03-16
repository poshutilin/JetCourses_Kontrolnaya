sap.ui.define([
		"Exam/ControlTask_Shutsilin111/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("Exam.ControlTask_Shutsilin111.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);