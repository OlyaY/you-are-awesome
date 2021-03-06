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

let val = 0;
const incrementor = () => {
    Object.__proto__.valueOf = function () {
		return val;
	}
    val++;
    return incrementor;
};

let count = 0;
const asyncIncrementor = () => {
    return new Promise((resolved) => {
        count++;
        return resolved(count);
    });

};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (value) =>
    new Promise(resolve =>
        setTimeout(() => {
            resolve(value)
        }, 1000));
//var timerId = setTimeout(func / code, delay[, arg1, arg2...])

const getDeepPropertiesCount = () => {};

const createSerializedObject = () => {
    return JSON.parse(JSON.stringify({}));
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