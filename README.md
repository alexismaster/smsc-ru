
# smsc-ru

[![NPM](https://nodei.co/npm/smsc-ru.png?downloads=true&downloadRank=true)](https://nodei.co/npm/smsc-ru/)

## Installing

```
npm install --save smsc-ru
```


## Usage examples

You can use "i-logger" directly via the default logger.

```js
var Smsc = require("smsc-ru");

Smsc.sms("login", "psw", "+79610001234", "message", function () {
	//...
});
```
