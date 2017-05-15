var a = {
    x: 3,
    y: 4,
    z: {
        a: 10
    }
};
var b = clone(a);

console.log('a', a);
console.log('b', b);

function clone(o) {
    var result = {};
    for (var p in o) {
        if(o[p] !== null && typeof o[p] === 'object'){
            result[p] = clone(o[p]);
        }else{
            result[p] = o[p];
        }
        
    }
    return result;
}

b.y = 5;
b.z.a = 8;
console.log('a', a);
console.log('b', b);