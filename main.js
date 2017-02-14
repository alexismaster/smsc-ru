"use strict";

/**
 * http://smsc.ru/api/
 */

var request = require("request");


// Конструктор
module.exports = function Smsc(login, password) {
	this.login = login;
	this.password = password;
};


// Отправка CMC
module.exports.sms = function (login, password, phones, mes, cb) {
	var url = [
		"https://smsc.ru/sys/send.php"+
		"?login="+login,
		"&psw="+password,
		"&phones="+phones,
		"&mes="+message
	];
	
	request(url.join(""), function (error, response, body) {
		if (typeof cb === "function") cb();
	});
};


// Звонок
module.exports.call = function () {
	var url = [
		"https://smsc.ru/sys/send.php",
		"?login="+login,
		"&psw="+password,
		"&phones="+phones,
		"&mes="+message,
		"&call=1"
	];
	
	request(url.join(""), function (error, response, body) {
		if (typeof cb === "function") cb();
	});
};


// Viver сообщение
module.exports.viber = function () {
	//
};


// Проверка баланса
module.exports.balance = function (login, password, cb) {
	request("http://smsc.ru/sys/balance.php?login="+login+"&psw="+password, function (error, response, body) {
		if (typeof cb === "function") cb(body);
	});
};
