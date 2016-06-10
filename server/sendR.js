"use strict"

const SendR = {};
module.exports = SendR;

SendR.sendStatus = (res, status) => {
	res.status(status).end();
}

SendR.sendData = (res, status, data) => {
	console.log('going to send', status, 'and typeof', typeof data);
	res.status(status).json(data);
}