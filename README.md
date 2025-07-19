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

## User Stories

### 1. One Off Player

**Who:** A site visitor.

**Why:** They are looking for a quick game to fill time between other activities.

**How:**

-   Visit the page.
-   Follow the tutorial on how to play the game.
![Complete Tutorial](/assets/images/readme/user-stories/complete-tutorial.png)
-   Play the game until the game is over.
![One off player score](/assets/images/readme/user-stories/one-off-player-score.png)

### 2. Repeat Player

**Who:** A site visitor / player.

**Why:** They are looking to beat their high score.

**How:**

-   Visit the homepage.
-   Skip the tutorial on how to play the game.
-   Play the game.
-   View score when timer is up.
![Competative Player Score](/assets/images/readme/user-stories/competative-player-score.png)

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

## Technologies Used

| Technology          | Purpose                                                |
| ------------------- | ------------------------------------------------------ |
| **HTML**            | Structures content and elements of the site.           |
| **CSS**             | Stylse the site, including layout, colours, and fonts. |
| **BootStrap**       | Responsive HTML layout out of the box.                 |
| **Font Awesome**    | Provides appealing icons.                              |
| **Git & Github**    | Version control and repository.                        |
| **Github Pages**    | Deployment of the site.                                |
| **Github Projects** | Usage and deployment of Kanban Board for this project  |
| **JavaScript**      | Interactive page interactions, mainly jQuery           |

---

## Credits

W3Schools : Flip card - https://www.w3schools.com/howto/howto_css_flip_card.asp

---

## Bugs / Testing

-   **Card overflow on narrow devices**

    -   _Cause:_ Fixed 80 px card width limits columns to 2.
    -   _Fix:_ Added responsive sizing and adjusted grid gap.

-   **Rapid-click glitch**
    -   _Cause:_ More than two cards could flip before resolution.
    -   _Fix:_ Disabled extra clicks until current pair resolves.

## Device Compatibility

**Manual testing** - After manually testing the game on multiple devices, through the tutorial and the gameplay, all responsive elements seem to be working well and holding the correct form / sizes for the required views.

**Desktop:**

![Desktop Tutorial](assets/images/readme/device-views/desktop-tutorial.png)
![Desktop Game](assets/images/readme/device-views/desktop-game.png)

**Tablet:**

![Tablet Tutorial](assets/images/readme/device-views/tablet-tutorial.png)
![Tablet Game](assets/images/readme/device-views/tablet-game.png)

**Mobile:**

![Mobile Tutorial](assets/images/readme/device-views/mobile-tutorial.png)
![Mobile Game](assets/images/readme/device-views/mobile-game.png)

---

## Validation Results

I have used the below table to log any findings from using validators, the results and resoltuions.

| Tool | Status | Issues Found | Fix Notes |
| ---- | ------ | ------------ | --------- |
| **W3C Markup Validation Service** | Fixed | Duplicate `ID` attribute used | Entire duplicate code found - removed |
| | In Progress| Consider using the `h1` element as a top-level heading only | Change `h1` to lower level element |
| **CSS Validator** | | No Errors Found |  |
| **JavaScript Linting (ESLint)** | Fix | Unused variable `cols` in `game.js` | Removed as this was a remnant from the old grid layout |
| | n/a | `restartGame()` is unused | This is used via the HTML elements `click` action |
| | n/a | `tutorialCardClicked()` is unused | This is used via the HTML elements `click` action |

## Validator Links

| Validator                             | URL                                              |
|---------------------------------------|--------------------------------------------------|
| W3C Markup Validation Service         | https://validator.w3.org/                        |
| W3C CSS Validator                     | https://jigsaw.w3.org/css-validator/             |
| ESLint Online Demo                    | https://eslint.org/demo                          |