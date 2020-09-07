
(function() {
    var names = ["Akshat","Ayush","Ankit","Nidhish","Jay","Jayesh","Darshan","Himani","Harshal",];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } 
        else if (firstLetter === 'h') {
            byeSpeaker.speak(names[i]);
        }

         else {
            helloSpeaker.speak(names[i]);
        }
    }
})();