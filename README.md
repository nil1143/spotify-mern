# Spotify Clone
The Spotify Clone project is a web application that replicates the core functionality of the popular music streaming service Spotify. The application allows users to browse and play music, create and manage playlists.

 The live link can be found here - [Spotify Clone](https://spotify-mern-frontend.onrender.com/)

![index_button](spotify-clone/src/assets/readme/view.png)

*** 

## Contents
* [Project Goals and UX](#Analyse-and-UX)
    * [Project Goals](#Project-Goals)
    * [User Stories](#User-Stories)
<!-- * [Design](#Design)
    * [Wireframes](#Wireframes)
    * [Colour Scheme](#Colour-Scheme)
    * [Fonts](#Fonts) -->
* [Features and Implemenation](#Features-and-Implemenation)
    * [Features](#Features)
    * [Future Features](#Future-Features)
* [Testing](#Testing)
    * [Accessibility Testing](#Accessibility-Testing)
    * [Manual Testing](#Manual-Testing)
* [Deployment](#Deployment)
    * [Cloning & Forking](#Cloning-&-Forking)
    * [Remote Deployment](#Remote-Deployment)
* [Credits](#Credits)
* [Useful Links](#Useful-Links)

***

## Project Goals and UX

### Project Goals
* The Goal of the project is to make an addictive and fun game that will challenge the user.

* It has been designed for people who want to keep coming back to improve their score and compete to get the highest score. 

### User Stories
|Story No.|Story|
| ------------- | ------------- |
|1|As a user , <br> I want to be able to play and pause the music<br> so that I can come back and continue my listening. <br><br>I know I am done when the user can play and pause the music. |
|2|As a user , <br> I want to be able to play previous/next song<br> so that I can repeat or skip the song I want. <br><br>I know I am done when previous/next button is working as desired. |
|3|As a user , <br> I want to be able to open the Album on Home screen<br> so that I can see what I can listen to.<br><br>I know I am done when user is navigated to Album item after clicking on. |
|4|As a user , <br> I want to be able to create a playlist and add a songs to it<br> so that I can listen to whatever I want. <br><br>I know I am done when user receive a toast message in Admin Panel after succesfully adding an album/song. |
|5|As a user , <br> I want to be able to delete song and playlist<br> so that my page will be more organised.<br><br>I know I am done when the Remove button in Admin Panel works succesfully. |

## Features and Implemenation

### Features

#### Tech stack - <b>MERN</b>

________
### Spotify Player
#### <b>DESKTOP</b>
#### Display | Home Page
![index_button](/spotify-clone/src/assets/readme/live-view.png)

#### Album Page
![index_button](/spotify-clone/src/assets/readme/album-page.png)

#### Sidebar
![index_button](/spotify-clone/src/assets/readme/sidebar.png)

#### Navbar
![index_button](/spotify-clone/src/assets/readme/navbar.png)

#### Player
![index_button](/spotify-clone/src/assets/readme/player.png)

#### <b>MOBILE</b>
#### Display | Home Page
<img src="spotify-clone/src/assets/readme/mobile-display.png" alt="Alt Text" width="300" height="600">

#### Album Page
<img src="spotify-clone/src/assets/readme/mobile-album.png" alt="Alt Text" width="300" height="600">

_______________
### Admin Panel
#### <b>DESKTOP</b>

#### Add Song
![index_button](spotify-clone/src/assets/readme/admin1.png)

#### List Songs
![index_button](spotify-clone/src/assets/readme/admin2.png)

#### Add Album
![index_button](spotify-clone/src/assets/readme/admin3.png)

#### List Albums
![index_button](spotify-clone/src/assets/readme/admin4.png)

#### <b>MOBILE</b>

#### Add Song
<img src="spotify-clone/src/assets/readme/mobile-add-song.png" alt="Alt Text" width="300" height="600">

#### List Songs
<img src="spotify-clone/src/assets/readme/mobile-song-list.png" alt="Alt Text" width="300" height="600">

#### Add Album
<img src="spotify-clone/src/assets/readme/mobile-add-album.png" alt="Alt Text" width="300" height="600">

#### List Albums
<img src="spotify-clone/src/assets/readme/mobile-album-list.png" alt="Alt Text" width="300" height="600">

### Future Features<br>
________
* Sidebar, Navbar, Player with full functionality

* Authentication


## Testing

### Accessibility Testing
#### Lighthouse
![index_button](spotify-clone/src/assets/readme/lighthouse-spotify.png)

### Manual Testing
- I have tested that this page works in different web browsers.
- I have tested that the project is responsive and works with different device sizes. It looks good and functions as normal. 
- I have tested all links, internal and external. They go to the correct destination and open in the correct way. 
- I have tested that all text and fonts are readable and easy to understand.
- I have tested that the correct data is passed when the forms are submitted. 
- I have tested that the sorts for high scores work correctly, using a bubble sort.
- I have tested that the user can add a high score to local storage.
- I have tested that sound plays at the correct time during the game. When defused and exploded.
- I have tested the bombs change colour when ignited
- I have tested that the explode image appears when a bomb explodes
- I have tested that pressing or tapping a bomb defuses it
- I have tested that the user can change the game colours to light mode.

## Deployment

### Cloning & Forking
#### Fork
1. On GitHub.com, navigate to the [nil1143/spotify-mern](https://github.com/nil1143/spotify-mern) repository.
2. In the top-right corner of the page, click Fork.
3. By default, forks are named the same as their parent repositories. You can change the name of the fork to distinguish it further.
4. Add a description to your fork.
5. Click Create fork.

#### Clone
1. Above the list of files click the button that says 'Code'.
2. Copy the URL for the repository.
3. Open Terminal. Change the directory to the location where you want the cloned directory.
4. Type git clone, and then paste the URL
5. Press Enter.


### Remote Deployment
 The site was deployed to Github pages. If you have forked/cloned the repository the steps to deploy are:
 1. On GitHub.com, navigate to your repository.
 2. Navigate to the settings tab.
 3. Click on the tab called 'pages' on the left hand side.
 4. From the source drop down list under the heading Build and deployment, select main.
 5. The page will hten provide the link to the website.
