/*
 * Author: Brent Kuzmanich
 * Version: 1.0
 * Comment: A simple, functional approach to mapping objects.
 *
 * Sample Usage:
 * my.objectMapper.createMap('obj1->obj2', function(from, to){
 *      to.prop1 = from.prop1;
 *      to.prop2 = from.prop2;
 * };
 *
 * //typical dto to domain object mapping
 * var someObj = { prop1: 'asdf', prop2: 123 };  
 * var anotherObj = { prop1: '', prop2: '', aMethod: function(){ alert(this.prop1); } };
 *
 * my.objectMapper.map('obj1->obj2', someObj, anotherObj);
 *
 */

var my = my || {};

my.objectMapper = (function () {
    var mappings = {};

    return {
        createMap: function (key, mapFunc) {
            if (mappings[key] == null || mappings[key] == undefined) {
                mappings[key] = mapFunc;
            } else {
                console.log('ObjectMapper: Mapping for key "' + key + '" already exists.');
            }
        },
        map: function (key, fromObj, toObj) {
            var mp = mappings[key];
            if (mp != null || mp != undefined) {
                mp(fromObj, toObj);
            } else {
                console.log('ObjectMapper: Mapping for key "' + key + '" does not exist.');
            }
        }
    };

})();