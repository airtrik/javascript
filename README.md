# Airtrik javascript

Airtrik is an IoT Cloud platform for managing communication between IoT devices and software platforms.
This is the javascript library that can be used for communicating to IoT device connected to your airtrik app network.

## Summary

  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
    - [Connecting to your App's Network](#connecting-to-your-Apps-Network)
    - [Subscribe to device in App's Network](#subscribe-to-device-in-Apps-Network)
    - [Sending message to device](#sending-message-to-device)
    - [Receiving messages from device](#receiving-messages-from-device)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

Follow the below instructions to get your device and application up and running within minutes. It is very easy to integrate airtrik into your project.

### Prerequisites

Before proceeding further you have would need a webserver to run your html file.

    Install apache
    Or you can use node server also

### Installing

Airtrik javascript library can easily be loaded to any webpage/web app through cdn following is the link which you need to add to the head tag of your HTML page.

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
<script type="text/javascript" src="https://cdn.airtrik.com/js/0.1.1/index.js" type="text/javascript"></script>
```

### Connecting to your App's Network

```javascript

// create an app in the panel to get the app key
AIRTRIK_connect("__APP_KEY__")

```
### Subscribe to device in App's Network

```javascript

// you have to create device inside app from panel
var device = __DEVICE_ID__
// you can only subscribe to any device inside the onConnect callback function
onConnect = ()=>{
  subscribe(device)
}

```

### Sending message to device

```javascript

message = "YOUR MESSAGE TO DEVICE"
send(device, message)

```

### Receiving messages from device

```javascript

// you can write your custom function handling the incoming message
onReceive = (message, deviceId)=>{
  console.log(message)
  console.log(deviceId)
}

```

## Versioning



## Authors

  - **Vishal Pandey** - *Written Python Library* -
    [vishal-pandey](https://github.com/vishal-pandey)

See also the list of
[contributors](https://github.com/airtrik/javascript/contributors)
who participated in this project.

## License

This project is licensed under the [MIT](LICENSE)
Creative Commons License - see the [LICENSE](LICENSE) file for
details


