**GitPages Link:** https://omp5gsel.github.io/Just-Count/

**Kanban Board:** https://github.com/users/omp5gsel/projects/2

# Just-Count
A simple, online game, where all that you need to do is **match cards and count!**

## Overview for site requirements

This site is intended to give entertainment to players by using memory and timers to create quick competative gameplay. The site aims to provide the following mechincs & features:

-   Guided “How to Play” tutorial
-   Dynamic and random card board each round
-   30 second round timer with +3's bonus per correct match
-   10 pts for the first match with a multiplier up to 3x for consecutive correct answers.

## Development Process

### 1. Planning
I started by creating wireframes for desktop, tablet and mobile versions of the website using Balsamiq. These are included in the `/assets/images/readme/wireframes/` folder. The purpose of this is to give me chance to see how the site would be layed out, and how this needs to be created in order to be compatible, responsive, and most importantly, playable, on a wide range of devices.

### 2. Building the Site
The site will only require one page. This is because the plan is for the site to be easy to follow from the second the page is loaded and only the required content shows at the correct points of the users experience. For this, I will utilise HTML libraries such as bootstrap for a responsive and quick layout, CSS for custom aespethics, JavaScript libraries such as JQuery for interactivity and animation and Font-Awesome for icons.

### 3. Testing
I will test the site manually on multiple browsers and devices. I will use W3C validators and Lighthouse for performance and accessibility. Details are in the Testing section.

### 4. Deployment
The site is deployed to Github & Github Pages.

---

## Project Management

Tracked tasks and progress on the [GitHub Project Kanban Board](https://github.com/users/omp5gsel/projects/2).

---

## Use Cases

### 1. One Off Player
**Who:** A site visitor.

**Why:** They are looking for a quick game to fill time between other activities.

**How:**
-   Visit the homepage.
-   Follow the tutorial on how to play the game.
-   Play the game until the game is over.

### 2. Repeat Player
**Who:** A site visitor / player.

**Why:** They are looking to beat their high score.

**How:**
-   Visit the homepage.
-   Skip the tutorial on how to play the game.
-   Play the game.
-   View score when timer is up.

---

## User Stories

- **As a** new player, **I want** a clear tutorial, **So that** I understand the rules before playing.

- **As a** competitive gamer, **I want** streak bonuses and a visible score, **So that** I can challenge myself and track improvement.

---

## Wireframes

The website layout was planned using wireframes to ensure a user-friendly and responsive design. Below are the wireframes for desktop, tablet, and mobile views of the home page (left to right).

![Wireframes - Desktop, Tablet, Mobile](/assets/images/readme/wireframes/design-wireframes.png)

---

## Deployment

### 1. Download the Code
Head to the github page for this project, [here](https://github.com/omp5gsel/Just-Count), and select "Download ZIP" under the "<> Code" button.

![Download Github Code](assets/images/readme/deployment/screenshot-download-github-code.png)

### 2. Extract the Code to a Local Folder
Locate your downloaded code, usually in C:\Users\\%username%\Downloads. Select your file, and then extract the code into a new folder using the "Extract All" button on the toolbar.

![Extract Code](assets/images/readme/deployment/screenshot-extract-code.png)

### 3. Install & Open VSCode
You can download VSCode by clicking [here](https://code.visualstudio.com/download). Once you're in VScode, please click File > Open Folder and select your extracted code root folder.

![Open code in VSCode](assets/images/readme/deployment/screenshot-open-code.png)

### 4. Open any page
Within the explorer pane on the left side of VScode, click onto the `index.html` file to open this in the editor.

![Open HTML file](assets/images/readme/deployment/screenshot-open-html-file.png)

### 5. Install "Live Server"
Using the extensions pane, outlined in the image below, search and install the "Live Server" extension.

![Install Live Server](assets/images/readme/deployment/screenshot-install-live-server.png)

### 6. "Go Live"
Within the HTML page, press Go Live along the bottom bar

![Go Live!](assets/images/readme/deployment/vscode-live-server-animated-demo.gif)

---

## Navigation

- **How to Play** (`#how-to-play`)  
  Interactive step-by-step tutorial.  
- **Game** (`#game`)  
  Main board, score display, and timer.

---

## Technologies Used

| Technology       | Purpose                                                    |
| ---------------- | ---------------------------------------------------------- |
| **HTML**         | Structures content and elements of the site.               |
| **CSS**          | Stylse the site, including layout, colours, and fonts.     |
| **BootStrap**    | Responsive HTML layout out of the box.                     |
| **Font Awesome** | Provides appealing icons.                                  |
| **Git & Github** | Version control and repository.                            |
| **Github Pages** | Deployment of the site.                                    |
| **Github Projects** | Usage and deployment of Kanban Board for this project   |
| **JavaScript**   | Interactive page interactions, mainly jQuery               |

---

## Credits
W3Schools : Flip card - https://www.w3schools.com/howto/howto_css_flip_card.asp

---

## Bugs / Testing
- **Card overflow on narrow devices**  
  - *Cause:* Fixed 80 px card width limits columns to 2.  
  - *Fix:* Added responsive sizing and adjusted grid gap.

- **Rapid-click glitch**  
  - *Cause:* More than two cards could flip before resolution.  
  - *Fix:* Disabled extra clicks until current pair resolves.

## Device Compatibility

**Manual testing** - After manually testing the game on multiple devices, through the tutorial and the gameplay, all responsive elements seem to be working well and holding the correct form / sizes for the required views.

**Desktop**

![Desktop Tutorial](assets/images/readme/device-views/desktop-tutorial.png)
![Desktop Game](assets/images/readme/device-views/desktop-game.png)

**Tablet**

![Tablet Tutorial](assets/images/readme/device-views/tablet-tutorial.png)
![Tablet Game](assets/images/readme/device-views/tablet-game.png)


**Mobile**

![Mobile Tutorial](assets/images/readme/device-views/mobile-tutorial.png)
![Mobile Game](assets/images/readme/device-views/mobile-game.png)

---

##