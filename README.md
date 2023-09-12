# Secure-Password-Generator

## Description

This Password Generator was a great opportunity to create something interactive with users providing input to produce a collaborated result. The user, looking for something semi-custom and tailored to some of their preferences, is given a chance to create something unique to them. The customization of being able to choose the general category of password creation (like being better at memorizing numbers or special characters) but allowing the code to create something more specific allows for back and forth between the application and the user, making the user feel more connected to the application.

This application allowed me to work exclusively in Javascript and create an enviroment which directly created a productive outcome for the end user. This autonomus and randomized process of picking individual characters removes the human instinct of routine and familiar objects or items we typically tend to chose for passwords. It allows the user to have a geniunely unique password which has no known connection to any other password they may use across various applications and platforms, thus increasing the security granted to them by the application.

I personally learned a lot in this particular project. Even though it was discarded in later iterations, I created a semi-random slicer for using with arrays to generate unique characters. I also learned about the Fisher-Yates Sorting Algorithm (more material can be found here:https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/  and here: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle). I also learned about shuffling arrays to help randomize the array even more (https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj). Another aspect I learned about was how hard it can be to code with special characters in a code editor. I eventually had to resort to using Unicode to hard code the symbols in manner I needed (reference here: https://owasp.org/www-community/password-special-characters).

Another thing I discovered was that I needed to create an empty string to hold the individual characters as they are produced. I ran into a bit of trouble when I was producing the characters, but only one displayed at a time. The empty string will hold those characters as they are generated and then display the full string when the function is done running (https://www.tutorialspoint.com/How-to-create-Empty-Values-String-in-JavaScript).

## Usage

In order to use this Password Generator, you must first download the code from github pages.

[Github Pages](www.github.com)
![Github Pages](assets/GithubPages.png)

Click on the green code button and then copy with HTTPS or SSH key

![Github Code](assets/GithubCode.png)

Clone the repository onto your computer using Git Bash or its equivalent.

Using Git Bash or its equivalent find the repository and open with `code .` .

From there, select the index.html and open with the Live Server extension or its equivalent.

You should be greeted with the following image:

![Blank Password](assets/03-javascript-homework-demo.png)

Click on the red Generate Password button.

After entering the parameters (how many characters you want the length to be, if you want numbers, lower case letters, upper case letters, or special characters), the program will output a user chosen length of randomly selected characters from a randomized array.

![Generated Password](assets/Screenshot%20(15).png).

Click the button again and again to generate new and different passwords as needed!

A deployed version of the website can be found at: https://jhuber1155.github.io/Secure-Password-Generator/

## Credits

I would like to credit my Instructor and Teaching Assistant for all the invaluable help they continue to provide me, as well as the students in my UCLA Coding Bootcamp class!

Other resources which I drew from to help me with this project include:

Grant Weatherston - Freecode Bootcamp: The Fisher-Yates Sorting Algorithm (https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/)

More information on The Fisher-Yates Sorting Algorithm (https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)

James Bubb - Dev.to on shuffling arrays (https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj)

OWASP - Unicodes for special characters (https://owasp.org/www-community/password-special-characters)

User:Seetha - TutorialsPoint (https://www.tutorialspoint.com/How-to-create-Empty-Values-String-in-JavaScript)

## License

Copyright (c) [2023] [John Huber]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.