/*

Building a Challenge Framework

We want to analyze student-generated JavaScript code (for our CS platform:
https://www.khanacademy.org/cs) and determine if certain aspects of their code
is written as expected. We want this so that we can provide advanced unit
testing for a student's program - be able to provide them with informed feedback
(that's better than what normal unit testing can provide, but likely not as
good as what a human could provide).

We'd like to be able to have a few testing APIs to work with, namely:

A whitelist of specific functionality. For example, the ability to say
"This program MUST use a 'for loop' and a 'variable declaration'."
A blacklist of specific functionality. For example, the ability to say
"This program MUST NOT use a 'while loop' or an 'if statement'."
Determine the rough structure of the program. For example,
"There should be a 'for loop' and inside of it there should be an 'if statement'."

To do this we'll need to parse the JavaScript code. The best way to do this
is to use a full-blown JavaScript parser. There are two good parsers out there,
Esprima and Acorn. Use one of them to parse some JavaScript code and implement
the testing API specified above.

Esprima: http://esprima.org/
Acorn: http://marijnhaverbeke.nl/acorn/

1) Look at Esprima and Acorn. They both have similar APIs and produce identical
(or near-identical) output (an Abstract Syntax Tree of the JavaScript code). With
that being said you should make a decision to choose one of them. You'll probably
 want to look at performance, file size, API quality, and documentation. Provide
 justification for why you made your decision.

2) We want to support modern versions of Firefox, Chrome, and Safari and IE 10+.
With that in mind follow the next steps and make sure whichever parsing tool you
chose will work in the browsers that you want to support.

3) Design and create a testing API that can take in a string of JavaScript code,
parse it, and provide feedback based upon it. You should have three possible
testing methods (based upon the above-listed qualifications).

4) Create an HTML textarea and hook it up so that when a user types code any
associated tests (written using the above) are run automatically. Display the
results of the test run somewhere on the web page so that the user can see how
they're doing. You’re free to use any JavaScript you wish to wire up the textarea
to the tester.

(Optional) Use a nice code editor, like Ace or CodeMirror, and instead of a textarea.

5) Make sure that the textarea is not blocking, or slowing down, user input.
Use whatever tools you can to make sure that the tests are run in a non-blocking
way in as many browsers as possible (may not be possible in older browsers).

*/
