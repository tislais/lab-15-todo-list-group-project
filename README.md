# To-do List Group Project Plan

## Landing Page

### HTML elements
... in a form element
- text input for username
- text input for password (type=password)
- button to submit
- div for error messages to live

### Events
- on load, check if already logged in
    - if yes, redirect to to-do page
- button to submit form on click
    - event listener for click
        - get username and password from form
        - compare username and password to local storage
            - is this username in LS?
                - if no, create new user
                - if yes, check if the password they entered matches the stored user password
                    - if password doesn't match, put error message up
                    - if password does match, redirect to to-do page

## To-do Page

### HTML elements
- text input to add to-do item
- button to submit the to-do item
- ul 
    - list elements 
-button to log out 

### Events
- on load:
    - check if any user is logged in
        - if not, redirect to login page
        - if so, check local storage for current user
            - load their to-do list 
- logout button on click sets current user to logged-out and redirects to landing page
- add button on click:
    - run function to add list item (let's try appending)
    - clear ul (if appending doesn't work)
- click on to-do item to complete to-do (event listener)
    functions:
        - change local storage user.completed to true
        - render list items
            - cross out text and change LS 


### CSS
- fancy tricks
- hover over, colors

