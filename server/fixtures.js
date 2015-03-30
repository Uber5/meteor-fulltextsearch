var randomWords = [
  'invoice',
  'mall',
  'board',
  'volapuk',
  'pennycress',
  'cinereous',
  'continuate',
  'fordless',
  'ammon',
  'vocalic',
  'varia',
  'unintercepting',
  'itinerating',
  'caducei',
  'spiciness',
  'favorableness',
  'joyful',
  'intrigant',
  'superabnormal',
  'goldwater',
  'peroxyborate',
  'ceresin',
  'predisplacement',
  'introversive',
  'quadrigatus',
  'unsolar',
];

Meteor.startup(function() {
  if (Messages.find().count() == 0) {
    console.log('setting up some example messages');
    for (var i = 0; i < 20; i++) {
      var subject = '', content = '';
      _(5).times(function() { subject += _.sample(randomWords) + ' ' });
      _(10).times(function() { content += _.sample(randomWords) + ' ' });
      Messages.insert({
        subject: subject,
        content: content
      });
    }
  }
});
