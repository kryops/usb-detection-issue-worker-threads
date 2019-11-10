const usbDetection = require('usb-detection');

usbDetection.on('add', device => console.log('added', device));

usbDetection.startMonitoring()

// keep the worker running
setInterval(() => {}, 1000)
