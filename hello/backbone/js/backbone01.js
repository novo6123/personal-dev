var AppView = Backbone.View.extend({
    name: "Backbone AppView()",

    el: "#container",

    initialize: function () {

        var w = this;
        console.log(w.name,"initialize");

        w.render();
    },

    render: function () {

        var w = this;
        console.log(w.name,"render");

        this.$el.html("updated view content");
    }

});

var appView = new AppView();


/*
    // _.js templates have the following syntax:

    _.template(templateString, [data], [settings])

*/
