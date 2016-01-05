define(['model/Model','underscore', 'model/SubModelFactory'],
    function(Model, _) {
        return Model.extend({
            ACTIVE_STATUSES: ['ON', 'ONLINE', 'UP','CLOSED', 'LOCKED'],
            INACTIVE_STATUSES: ['OFF', 'STAND_BY', 'OFFLINE', 'DOWN', 'OPEN', 'UNLOCKED'],

            subAttributes: ['state','settings'],

            defaults: {
                'state': {},
                'settings': {}
            },

            validate: function(attrs) {
                return attrs['@type'] !== undefined ? 'type missing'
                     : attrs['@id'] !== undefined ? 'id missing'
                     : true;
            },
            getType: function() {
                return this.get('@type');
            },
            getLocation: function() {
                return this.get('location');
            },
            getState: function() {
                return this.get('state');
            },
            getSettings: function() {
                return this.get('settings');
            },
            getStatus: function() {
                return this.getState().get('status') || 'OFF';
            },
            isActive: function() {
                return !this.isInactive();
            },
            isInactive: function() {
                return _.contains(this.INACTIVE_STATUSES, this.getStatus())
                    || ! _.contains(this.ACTIVE_STATUSES, this.getStatus());
            }
        });
    }
);
