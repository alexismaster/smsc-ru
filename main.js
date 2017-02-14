"use strict";

/**
 * http://smsc.ru/api/
 */

var request = require("request");


module.exports.sms = function (login, psw, phones, mes, cb) {
	var url = [
		"https://smsc.ru/sys/send.php"+
		"?login="+login+
		"&psw="+psw+
		"&phones="+phones+
		"&mes="+message
	].join("");
	
	request(url, function (error, response, body) {
		if (typeof cb === "function") cb();
	});
};


module.exports.call = function () {
	//http://smsc.ru/sys/send.php?login=<login>&psw=<password>&phones=<phones>&mes=<message>&call=1
};


module.exports.viber = function () {
	//
};


module.exports.balance = function () {
	//
};
