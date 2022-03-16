/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"Exam/ControlTask_Shutsilin111/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"Exam/ControlTask_Shutsilin111/test/integration/pages/Worklist",
	"Exam/ControlTask_Shutsilin111/test/integration/pages/Object",
	"Exam/ControlTask_Shutsilin111/test/integration/pages/NotFound",
	"Exam/ControlTask_Shutsilin111/test/integration/pages/Browser",
	"Exam/ControlTask_Shutsilin111/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "Exam.ControlTask_Shutsilin111.view."
	});

	sap.ui.require([
		"Exam/ControlTask_Shutsilin111/test/integration/WorklistJourney",
		"Exam/ControlTask_Shutsilin111/test/integration/ObjectJourney",
		"Exam/ControlTask_Shutsilin111/test/integration/NavigationJourney",
		"Exam/ControlTask_Shutsilin111/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});