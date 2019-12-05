// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('top-bar')

// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
let sideBar = document.getElementById('sidebar-left')

// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
document.getElementById('sidebar-left').getElementsByTagName('div')[2]
document.getElementById('sidebar-left').getElementsByTagName('div')[1]

// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
sideBar.getElementsByTagName('h5')[0].innerHTML = "Least Favorite"

// Exercise 5): Find the first of the ads in the sidebar and hide it.
let adOne = document.getElementsByClassName('ad-slot')[0]
adOne.style.visibility = 'hidden'

// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
adOne.style.visibility = 'visible'

// Exercise 7): Use `setAttribute` to change `src` attribute of one of the ads in the sidebar.
let goatLink = document.getElementsByTagName('img')[8]
goatLink.setAttribute('src', 'http://placebear.com/200/300')

// Exercise 8): Find Sam's post and change its text to something incredible.
document.getElementsByTagName('p')[4].innerHTML = "Something incredible" 

// Exercise 9): Find the first post and add the `.post-liked` class to it, and watch it turn blue.


// Exercise 10: Find the second post and add the `.post-shared` class to the `li` containing the text Shared to watch it turn red.
