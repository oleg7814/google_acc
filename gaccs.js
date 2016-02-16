if (Meteor.isClient) {
  Template.body.helpers({
    firstName: function(){
      var user = Meteor.user();
      if (user) {
        return user.services.google.given_name;
      }
    },

    profileURL: function() {
      var user = Meteor.user();
      if (user) {
        return user.services.google.picture;
      }
    }
  });

  Template.allUsers.helpers({

    users: function(){
      return Meteor.users.find({}, {"services.google.name": 1,
        "services.google.picture": 1,
        "services.google.email" : 1});
    },

    username: function(){
      return this.services.google.name;
    },

    photoURL: function(){
      return this.services.google.picture;
    }
  })


}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
