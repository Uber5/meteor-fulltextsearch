Meteor.publish('messages', function(searchText) {
  if (!searchText || searchText.length == 0) {
    return Messages.find({});
  } else {
    return Messages.find({ $text: { $search: searchText }});
  }
});
