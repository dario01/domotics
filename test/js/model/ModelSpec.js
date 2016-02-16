define(['underscore','backbone','model/Model'],
    function(_, Backbone, Model) {

        describe('A JSON-LD Model', function() {

            it('has @type and @id attributes', function() {
                var model = new Model({ '@id': 'ID', '@type' : 'TYPE', 'attr': 'ATTR'});

                expect(model).toEqual(jasmine.any(Backbone.Model));
                expect(model.getId()).toEqual('ID');
                expect(model.id).toEqual('ID');
                expect(model.get('@type')).toEqual('TYPE');
                expect(model.getType()).toEqual('TYPE');
                expect(model.get('attr')).toEqual('ATTR');
                expect(model.attr).toBeUndefined();
                expect(model.toJSON()).toEqual({
                    "@id": "ID",
                    "@type": "TYPE",
                    "attr": "ATTR"
                });
            });

        });
    }
);