# DND Spellbook
This app functions as a spellbook for your Dungeons and Dragons character. Using the Dungeons and Dragons 5th edition API, the home page opens to a list of all the spells that you can click on to read. After logging in, the user will be able to create characters and add spells to those characters that will render in a show page.
## Getting Started
You can make your character [here](https://dnd-spellbook-project.herokuapp.com/)
## Screenshots
![On Open](https://i.imgur.com/wEdpA5c.png)
On open, the page makes a request to the API and displays all 319 spells in the book.
![Login](https://i.imgur.com/I0pHdTk.png)
After login, the page will redirect to /characters and display the current user's made characters.
![Character Show](https://i.imgur.com/UuOdRfP.png)
When a character is clicked, it takes you to that character's show page. Here it displays all the spells saved to that character
## Technology
- EJS
- CSS
- Bootstrap
- node.js
- express
- mongoDB
- axios
## Next steps
- Style the page for a better user interface
- Add sort by level functionality to spells