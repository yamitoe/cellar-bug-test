# Bug Test V1.1

This is a bug test where we evaluate your ability to resolve bugs based on console log messages you get. We also want you to demonstrate in the code (with comments) what was the bug, how you resolved it and as you inspect the code if there are ways the code could be improved.

## In summary in this test, do the following:

- Review each bug and fix them
- Comment what was the bug and how you resolved it
- Inspect the code to find improvements in style, best practices and logic
- Make the improvements with comments as to why you'd make those improvements

## Good luck!

# Bug Testing and Fixes Report by Kevin
## App not starting - "missing index.js"
- src folder was misnamed as srce
## ERROR in ./src/components/Footer.js
- "extend" -> "extends"
## List of fixes
- React component navbar.js not capitalized 
- Navbar -> this = {} to this.state = {}
- react-bootstrap 0.33 to be installed
- import the stylesheet in index.html
- teneary operator to &&
- Lifting State
- Fix login button
- Fix logout button -> Next button shouldnt really log you out if you click
- Refactoring code -> shortening if statement, removing constructor(), arrow function binding
  ## Possible improvement that could be added
  - Writting the code in hooks API
  But since its already written in class syntax might as well leave it. That and esnext syntax cleans up
  some of the boilerplate in class components


