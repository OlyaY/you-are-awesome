// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (prop) => {
    prop
};

const createNotEnumerableProperty = (prop) => {
    Object.defineProperty(Object.prototype, prop, {
        value: 'value',
        enumerable: false,
    });
    return prop;
}

const createProtoMagicObject = (prop) => {
    function magicObj() {}
    magicObj.__proto__ = magicObj.prototype;
    return magicObj;
};

const incrementor = () => {};

let count =0;
const asyncIncrementor = () => {
    return new Promise((resolved) => {
        count++;
        return resolved(count);
    });

};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {

};
//var timerId = setTimeout(func / code, delay[, arg1, arg2...])

const getDeepPropertiesCount = () => {};

const createSerializedObject = (obj) => {

};
const toBuffer = () => {};
const sortByProto = (array) => {
    array.sort(
        (a, b) => {
            return a.__proto__ - b.__proto__;
        }
    )
    return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;