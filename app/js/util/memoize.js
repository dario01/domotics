"use strict";

define([],
    function() {
        function defaultHasher(args) {
            return Array.prototype.slice.call(args).join();
        }

        function memoize(fn, hasher) {
            hasher = hasher || defaultHasher;
            var cache = {};
            return function() {
                var key = hasher(arguments);
                return key in cache ? cache[key] : cache[key] = fn.apply(this, arguments);
            };
        }

        function configureMemoization() {
            Function.prototype.memoize = function (hasher) {
                return memoize(this, hasher);
            };
        }
        configureMemoization();

        return memoize;
    }
);
