module.exports = function (RED) {
    function haThermostat(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        //state goes here

        this.on('input', function (msg) {
            //crap to do 

        });
    }
    RED.nodes.registerType("HA Thermostat", haThermostat);
};

//https://cache.freescale.com/files/microcontrollers/doc/ref_manual/DRM106.pdf

//Accuracy of 0.1 °C
//• Day-of-the-week, hours, and minutes calendar for the low-end version, and date, hours, and
//minutes for the high-end version
//• Temperature display in °C or °F
//• Programmable set points for heating and cooling
//• Programmable run and hold mode
//• Fan on and auto mode
//• Standard HVAC connections
//• Current sensing switch and screw-terminals to measure power consumption
//• HVAC LED indicators
//• Contrast control for the high-end version