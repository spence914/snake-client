# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/spence914/snek-multiplayer-modified)


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command.

- The control keys are the standard WASD setup but can be remapped in the constants.js file
- There are also messages mapped to 'i' 'o' and 'p' that can also be remapped in constants.js or changed in input.js

- There are also a couple server side changes implemented which is why the server side source is listed above as a forked version of the original repo.
- Running from that server will send messages to each player when a new player connects, stating how many players are playing, as well as when someone disconnects. 