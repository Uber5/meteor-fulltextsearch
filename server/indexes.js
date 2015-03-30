Meteor.startup(function() {
  Messages._ensureIndex({ subject: "text", content: "text" });
});
