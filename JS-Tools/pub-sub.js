var app = app || {};

(function () {
    /*JavaScript style publish-subscribe implementation as used in the Homeless Referral app*/
    app.eventBus = {
        topics: {},

        subscribe: function (topic, listener) {
            // create the topic if not yet created
            if (!this.topics[topic]) this.topics[topic] = [];

            // add the listener
            this.topics[topic].push(listener);
        },

        publish: function (topic, data) {
            // return if the topic doesn't exist, or there are no listeners
            if (!this.topics[topic] || this.topics[topic].length < 1) return;

            // send the event to all listeners
            this.topics[topic].forEach(function (listener) {
                listener(data || {});
            });
        }
    };
    /*****************************************************/


    /*KnockoutJS style publish-subscribe implementation as used in the GroupManager app*/
    app.koEventBus = new ko.subscribable();



})();