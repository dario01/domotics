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

            it('supports sub-models', function() {
                var ModelWithSubmodels = Model.extend({
                    subAttributes: ['sub1', 'sub2'],
                    urlRoot: '/url-root'
                });
                var model = new ModelWithSubmodels({
                    '@id': 'ID',
                    '@type' : 'TYPE',
                    'attr': 'ATTR',
                    'sub1': { 'a': 'A' }
                });

                expect(model.url()).toEqual('/url-root/ID');

                expect(model.get('sub1')).toEqual(jasmine.any(Backbone.Model));
                expect(model.get('sub1').id).toEqual('ID/sub1');
                expect(model.get('sub1').get('@id')).toEqual('ID/sub1');
                expect(model.get('sub1').get('a')).toEqual('A');
                expect(model.get('sub1').url()).toEqual('/url-root/ID/sub1');

                expect(model.get('sub2')).toBeDefined();
                expect(model.get('sub2')).toEqual(jasmine.any(Backbone.Model));
                expect(model.get('sub2').id).toEqual('ID/sub2');
                expect(model.get('sub2').get('@id')).toEqual('ID/sub2');
                expect(model.get('sub2').url()).toEqual('/url-root/ID/sub2');

                expect(model.toJSON()).toEqual({
                    "@id": "ID",
                    "@type": "TYPE",
                    "attr": "ATTR",
                    "sub1": { "@id": "ID/sub1", "a": "A" },
                    "sub2": { "@id": "ID/sub2" }
                });
            });
        });
    }
);