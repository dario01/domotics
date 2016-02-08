define(['util/memoize'],
    function(memoize) {

        describe('Memoize', function() {

            var inc = function(x) { return x + 1; };

            it("can cache idem-potent functions", function() {
                var spy_inc = jasmine.createSpy('incSpy', inc).and.callThrough();
                var memoized_inc = spy_inc.memoize();

                expect(memoized_inc(1)).toEqual(2);
                expect(spy_inc).toHaveBeenCalledWith(1);
                expect(memoized_inc(1)).toEqual(2);
                expect(spy_inc.calls.count()).toEqual(1);
                expect(memoized_inc(2)).toEqual(3);
                expect(spy_inc.calls.count()).toEqual(2);
                expect(memoized_inc(2)).toEqual(3);
                expect(memoized_inc(1)).toEqual(2);
                expect(spy_inc.calls.count()).toEqual(2);
                expect(memoized_inc(1,1)).toEqual(2);
                expect(spy_inc.calls.count()).toEqual(3);
            });

            it("works on 0, 1 or more arguments", function() {
                var spy_inc = jasmine.createSpy('incSpy', inc).and.callThrough();
                var memoized_inc = spy_inc.memoize();

                expect(memoized_inc()).toEqual(NaN);
                expect(spy_inc).toHaveBeenCalled();
                expect(memoized_inc()).toEqual(NaN);
                expect(spy_inc.calls.count()).toEqual(1);

                expect(memoized_inc(1,1)).toEqual(2);
                expect(spy_inc.calls.count()).toEqual(2);
                expect(memoized_inc(1,1)).toEqual(2);
                expect(spy_inc.calls.count()).toEqual(2);
                expect(memoized_inc(1,2)).toEqual(2);
                expect(spy_inc.calls.count()).toEqual(3);

                expect(memoized_inc(2,1)).toEqual(3);
                expect(spy_inc.calls.count()).toEqual(4);
                expect(memoized_inc(2,1)).toEqual(3);
                expect(spy_inc.calls.count()).toEqual(4);
            });

            it('properly binds this', function() {
                var o = {
                    v: 1,
                    plus: function(a) {
                        return this.v + a;
                    }.memoize()
                };

                expect(o.plus(1)).toEqual(2);
                o.v = 2;
                expect(o.plus(1)).toEqual(2);
                expect(o.plus(2)).toEqual(4);
            });

            it('supports custom args hashing', function() {
                var magnitude = function(a, b) { return Math.sqrt(a * a + b * b); };
                var spy_magnitude = jasmine.createSpy('magnitudeSpy', magnitude).and.callThrough();

                var default_memoized_magnitude = spy_magnitude.memoize();
                expect(default_memoized_magnitude(3,4)).toEqual(5);
                expect(default_memoized_magnitude(4,3)).toEqual(5);
                expect(spy_magnitude.calls.count()).toEqual(2);

                var commutative_hasher = function(a,b) { return a+b; };
                spy_magnitude.calls.reset();
                var commutative_memoized_magnitude = spy_magnitude.memoize(commutative_hasher);
                expect(commutative_memoized_magnitude(3,4)).toEqual(5);
                expect(commutative_memoized_magnitude(4,3)).toEqual(5);
                expect(spy_magnitude.calls.count()).toEqual(1);
            });
        });
    }
);