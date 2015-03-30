var messagesPublication = null;

Template.fts.helpers({
  messages: function () {
    return Messages.find({});
  }
});

Template.fts.events({
  'click #search': function () {
    if (messagesPublication) messagesPublication.stop();
    messagesPublication = Meteor.subscribe('messages', document.searchForm.text.value);
    return false;
  }
});
