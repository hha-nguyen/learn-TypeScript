var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// varriable
var hello = "world";
// function
var getFullName = function (name, surname) {
    return name + ' ' + surname;
};
// working with DOM 
var page = '1';
var pageNumber = page;
var someElement = document.querySelector('.foo');
console.log(someElement.value);
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log(target.value);
});
// class
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
// Generic type
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user = {
    name: "Mesto",
    data: {
        meta: "foo"
    }
};
var user2 = {
    name: "john cena",
    data: ["foo1", "foo2"]
};
// const result = addId<UserInterface>(user);
