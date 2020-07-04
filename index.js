var AIRTRIK_KEY = ""
var AIRTRIK_apiEndPoint = "https://airtrik.com/iot/";
var AIRTRIK_mqttEndPoint = "airtrik.com";
var AIRTRIK_clientId = Math.random().toString(36).substring(2);
var AIRTRIK_portNumber = 8083
var AIRTRIK_client = new Paho.MQTT.Client(AIRTRIK_mqttEndPoint, AIRTRIK_portNumber, AIRTRIK_clientId)

function onReceive(msg, deviceId){
	console.log("Data : "+ msg)
	console.log("deviceId : "+ deviceId)
}


function onConnectionLost(responseObject){
	if (responseObject.errorCode !== 0) {
	    console.log("onConnectionLost:"+responseObject.errorMessage);
	}
}

function onMessageArrived(message){
	let msg = message.payloadString
	let deviceId = message.destinationName.split("/")[1]
	onReceive(msg, deviceId)
}

function subscribe(deviceId){
	AIRTRIK_client.subscribe(AIRTRIK_KEY+"/"+deviceId)
}

function onConnect(){
	console.log("Connected")
}


function AIRTRIK_connect(key){	
	AIRTRIK_KEY = key
	var username = ""
	var password = ""

	let tosend = new FormData();
	tosend.append('key', key)
	fetch(AIRTRIK_apiEndPoint, {
			method: 'POST',
			body: tosend
		})
		.then(res => res.json())
		.then((data)=>{
			username = data.username
			password = data.password
			AIRTRIK_client.connect({onSuccess:onConnect, userName: username, password: password, useSSL: true});
			AIRTRIK_client.onConnectionLost = onConnectionLost;
			AIRTRIK_client.onMessageArrived = onMessageArrived;
		})


}

function send(deviceId, msg){
	message = new Paho.MQTT.Message(msg);
	message.destinationName = AIRTRIK_KEY+"/"+deviceId;
	AIRTRIK_client.send(message);
}