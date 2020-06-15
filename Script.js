Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@Nikhil1754 
goggle
/
Coursera_HTML-CSS-Javascript-for-Web-Developers
11
27272
 Code
 Issues 0
 Pull requests 3 Actions
 Projects 0
 Wiki
 Security 0
 Insights
Coursera_HTML-CSS-Javascript-for-Web-Developers/module4_solution/script.js /
@goggle goggle Solved assignment 4.
c5bc8e9 on Dec 17, 2016
28 lines (25 sloc)  557 Bytes
  
/*
Solution of assignment 4:
Expected output:
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
