"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = require("./storage");
var core = require("./core");
var SDKUtils = require("./utils");
var image_1 = require("./image");
exports.image = image_1.default;
var SDKContact = require("./contact");
__export(require("./eventlistener"));
exports.version = '0.0.1';
exports.native = {};
exports.Storage = storage_1.default;
exports.utils = SDKUtils;
exports.contact = SDKContact;
exports.init = core.init;
exports.ready = core.ready;
exports.exec = core.exec;
