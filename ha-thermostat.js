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
