"use strict";

define(['model/Model','underscore'],
    function(Model, _) {
        return Model.extend({
            ACTIVE_STATUSES: ['ON', 'ONLINE', 'UP','CLOSED', 'LOCKED'],
            INACTIVE_STATUSES: ['OFF', 'STAND_BY', 'OFFLINE', 'DOWN', 'OPEN', 'UNLOCKED'],

            getStatus: function() {
                return this.get('status') || 'OFF';
            },
            setStatus: function(status) {
                return this.set('status', status);
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
