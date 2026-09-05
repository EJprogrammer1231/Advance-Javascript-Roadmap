FLOW PLANNING 

Step 1: focus first on the form field.
 - get each ID
 - get each VALUE
 - validation for inputs
 - create an object for the inputs value
 - the value from the object will stored on the storage 
 - save in the array 

 step 2: Render all employee by input of the user
 - get the ID
 - Create an function for rendering
 - emplement the forEach for the array of object
 - create document of tr
 - then rendering it using td
 - use appendChild to display from the table

 NOTES : USE A JAVASCRIPT ADVANCE TOPIC. APPLIED THE LEXICAL SCOPES AND PRIVATE VARIABLES AND MORE.....

 FLOW OF EDITS:

 User clicks Edit
       ↓
Find which employee was clicked
       ↓
Get that employee's data
       ↓
Put the data back into the form
       ↓
User changes the data
       ↓
User submits form
       ↓
Update that employee in employees[]
       ↓
saveData()
       ↓
renderEmployees()
       ↓
updateStatistics()