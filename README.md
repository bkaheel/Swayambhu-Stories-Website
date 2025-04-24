# Swayambhu Stories Website: Unity Model

Welcome to the official repository for the **Swayambhu Stories Website: Unity Model**. This site is designed to share the rich cultural and historical significance of the Swayambhu Mahachaitya temple in Nepal through both educational content and an interactive 3D Unity experience.

---

## Table of Contents

- [Overview](#overview)
- [Pages](#pages)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [License](#license)

---

## Overview

This website serves as a cultural resource for users, primarily from American and Nepalese backgrounds, who are interested in exploring the stories and heritage of the Swayambhu Mahachaitya temple in Nepal. It features general information about the temple, details about the team behind the project, and a Unity-based 3D model that users can explore directly in the browser.

---

## Pages

- **Landing Page** – Introduction to the project and its mission.
- **Who We Are** – Meet the team and understand the goals of the project.
- **Unity Model Page** – Explore an interactive 3D WebGL model of the Swayambhu temple built in Unity.

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **3D Model**: Unity (WebGL build)
- **Hosting**: NGINX server on Cloudapps

---

## Setup Instructions
### Carolina Cloudapps Hosting

To host this website using [Carolina Cloudapps]{https://cloudapps.unc.edu/}, 
- Apply for a liscence with your onyen account
- Sign in to Cloudapps, click '+Add'
- Click 'Import from Git'
- Enter link to this repository: https://github.com/Fletch235/Swayambhu-Stories-Unity.git
- Change Application and Name Sections
- Click 'Edit import strategy'
- Choose NGINX and Click Create
- Once the build is complete you should be able to navigate to the website link in the 'Routes' Section 

### Local Hosting
To run the website locally, no dependencies are required. You can start a local development server using Python:

```bash
python -m http.server 8080
```
Then open your browser and navigate to http://localhost:8080.



---

## License
This repository is not open to external contributions.

