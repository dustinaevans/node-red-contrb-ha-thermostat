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
