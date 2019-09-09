(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.SVGPanTest = {}));
}(this, function (exports) { 'use strict';

    class Foo {
      constructor() {
        this.name = "aaa";
        this.age = 11;
      }

      getName() {
        return this.name;
      }

      getAge() {
        return this.age;
      }

    }

    exports.Foo = Foo;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map
