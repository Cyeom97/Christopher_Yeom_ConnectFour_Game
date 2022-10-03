# Connect4

## By: Christopher Yeom

#### Checkout the links to my Github and Trello Board

[Github](https://github.com/Cyeom97/ConnectFour_Game)
[Trello Project Board](https://trello.com/invite/b/s9xkhMOw/f2959833df3fe380ad04f3c84578a531/christopher-yeom-connect4)

---

![Connect 4](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGaiAwhEY1OPOR-4azXRQVLdszBRXpr10BCw&usqp=CAU)

## **What is Connect4?**

---

Connect 4 is a two player game where a players take turns dropping colored spots into a seven column, six row grid. Starting from the bottom, making it's way up top by stacking.

![Connect 4 GIF](https://user-images.githubusercontent.com/39765499/56462040-26ef7080-63b4-11e9-8f5a-7f0b4dec216d.gif)

## **The Objective**

---

The objective of the game is the first player to create a line of four from their own colored spot wins. The direction of the line could be either:

- Horizontal
- Vertical
- Diagonal

---

## **How to create the game using code**

### HTML CSS JS

#### _HTML_

- First you need to create two html files: index.html to link to the web, and I created another called game.html.
- You need to use two html files so you can link and navigate through them.
- In each HTML file, I used a common boilerplate to create a baseline.
- The index.html is used as a display page to welcome users to my page. There is a play message in the bottom that when clicked, it directs to the game.html where you can play the game
- For the index.html, or my display page, I made it really simple by adding a title with an h1 tag called "Welcome to my page". Then underneath I wrote a question if the user would like to play Connect 4.
- Then I created an "a" tag which displays the word "Play". This is crucial in order to link my index.html to my game.html.
- The "Play" message is an "a" tag with a href of game.html. Therefore the user can click the play message and it would transfer to the game.html so the user can play the Connect 4 game.
- In the game.html, I had a similar layout where there is a h1 title but this one is called "Connect 4".
- Then underneath, I put a h2 tag with a message that would show who's turn it would be. With the combination of js, the message changes everytime a player's turn switches.
- Then I would display a message on the right side of the page that would keep track of the game record to see the win, loss, and tie score.
- I also put 42 div tags inside a parent div tag with the class "board". This is to create the board.
- There are 42 spots where a token can fit in so that is why I need 42 div tags.
- I also used a data attribute to make sure each child div tag is specific. This is crucial so the javascript knows when a certain spot is clicked, the proper colored token will appear.
- Finally, I will put a restart button below the board to allow players to restart the game once a game has ended.

#### _CSS_

- A CSS file called styles.css was created. It is needed in order to style up your game. This is where users can see how the game looks like.
- To style up the index.html, I set the background color to a darker shade of pink. Then for the font colors of the h1, h2, and "a" tag, I used complimentary colors of pink. Then I aligned all the tags in the center of the page.
- For the game.html file, I set the same background color the same as the index.html. As well as keeping the font color the same with the h1 tag and centering everything.
- For the game board, there are 7 columns and 6 rows. So the format I used was:
  - display as grid
  - grid-template-column: repeat(7, auto)
  - grid-template-row: repeat(6, auto)
- I made the colors the same as what the original connect 4 colors were so I set the background color to blue.
- For each specific spot, I needed to create a circle so I used border-radius: 50% as well as making sure the width and height are the same size.
- Then I made sure whenever the cursor is on a spot, the cursor turns into a pointer to indicate that the spot can be clicked.
- For the message tag, I changed the font color to a dark gold and made sure the font size was a little smaller than the Connect 4 title
- Lastly, for the restart button, I wanted to make sure the size was a good fit for the board. I also changed the background color to brown so it goes well with the pink background and the font color to white so it is more visible.

#### _JavaScript_

- As I mentioned previously that CSS is needed to show people how the game looks like, JavaScript or JS shows how the game operates.
- I created a js file called script.js and this is where I will make the game come alive by calling variables, functions, and event listeners.
  - **Variables:**
  1. I created a score variable and a token variable that is linked to the message h2 tag and every div tag with the class of "spot"
  2. I created a gameRun variable and set it to true so whenever I use functions, I would set the gameRun to false to end the game.
  3. I created a player variable so I could change players in a function.
  4. I then created a winningProb variable in an array. In this array, I listed every winning combination in the game.
  - **For Loop:**
  1.  I needed to make sure that when I click a specific spot, it not only shows a color, but it changes color after each click.
  2.  To do this, I used a for loop. Inside the for loop, I created an event listener function.
  3.  Then inside the event listener, I wrote an if statement. The if statment concludes that when a spot is clicked, the color would change to either red or yellow, depending on the player. Then the next click would be the opposite as it is determined that the turn has changed.

---

### Credits

[Wikipedia](https://en.wikipedia.org/wiki/Connect_Four)
[Connect 4 image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGaiAwhEY1OPOR-4azXRQVLdszBRXpr10BCw&usqp=CAU)
[Connect 4 GIF](https://user-images.githubusercontent.com/39765499/56462040-26ef7080-63b4-11e9-8f5a-7f0b4dec216d.gif)
