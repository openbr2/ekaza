const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const reporting = require('zigbee-herdsman-converters/lib/reporting');
const extend = require('zigbee-herdsman-converters/lib/extend');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
fingerprint: [{modelID: 'TS0202', manufacturerName: '_TZ3000_gfnqfndb'}],
model: 'Ekvz-T1013',
vendor: 'ekasa',
description: 'Motion sensor',
fromZigbee: [fz.ias_occupancy_alarm_1, fz.battery, fz.ignore_basic_report, fz.ias_occupancy_alarm_1_report],
toZigbee: [],
exposes: [e.occupancy(), e.battery_low()],
};

module.exports = definition;
