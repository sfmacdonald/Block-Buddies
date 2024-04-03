# Block-Buddies
Show off your builds and keep track of your wishlists!

## Table of Contents

- [Project Name](#Block-Buddies)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Features](#features)
- [Testing](#testing)
- [Collaboraters](#collaboraters)
- [Technologies](#technologies)
- [Initial Wireframes](#initial-wireframes)
- [Timeline of Work](#timeline-of-work)
- [Usage](#usage)
- [Stakeholder Presentation](#stakeholder-presentation)

# Description

Block Buddies is a web-based platform application designed for Lego set enthusiasts to track their completed builds and wishlist future projects. Users can manage their profiles, create wishlists, track builds, and interact with other users.

# User Story

As a passionate Lego set builder, I want a platform where I can track my completed builds and wishlist future projects, allowing me to organize my collection and plan my next constructions effectively while interacting with other users.

# Acceptance Criteria

1. **User Authentication:**
- Users should be able to create, edit, and delete their profiles.
- Users should be able to log in and log out securely.

2. **Wishlist Management:**
- Users should be able to create, edit, and delete a wishlist of Lego sets they want to attempt in the future.
- Users should be able to add existing Lego sets to their wishlist.

3. **Build Tracking:**
- Users should be able to add Lego sets they have previously built or are currently in progress.
- Users should be able to rate their builds based on ease of building and fun factor.

4. **Interaction with Other Users:**
- Users should be able to view and comment on other users' wishlists and previous builds.
- Comments on wishlists and builds should be visible to other users.
- Integration with Rebrickable API:
    - The application should integrate with the Rebrickable API to fetch information about Lego sets, including set details and ratings.

5. **User Interface:**
- The user interface should be intuitive and user-friendly, allowing easy navigation and interaction with the application.
- Users should have clear options for managing their profiles, wishlists, and builds.

## Features

1. **User Authentication:** Create, edit, and delete user profiles. Secure login and logout functionality.

2. **Wishlist Management:** Create, edit, and delete wishlists (Brick Envy) of Lego sets. Add existing sets to the wishlist for future builds.

3. **Build Tracking:** Add previously built (Brick Archive) or in-progress (Construction Zone) Lego sets. Rate builds based on ease of building and fun factor.

4. **Interaction with Other Users:** View and comment on other users' wishlists and builds.

5. **Integration with Rebrickable API:** Fetch information about Lego sets from the Rebrickable API, including set details and ratings.

## Testing
TBD

## Collaboraters

The following members of the 2023-2024 ASU Coding Bootcamp participated on this project:
- Emily Kline: https://github.com/sourylime
- Sean MacDonald: https://github.com/sfmacdonald
- Faith O'Connor: https://github.com/floconno
- Miguel Rojas: https://github.com/Rojas259

## Technologies

- MERN Stack (MongoDB, Express.js, React, Node.js)
- Material UI
- Rebrickable API: https://rebrickable.com/api/v3/docs/?key=

## License
TBD

## Initial Wireframes

![Home](<./img/Screenshot 2024-04-01 at 7.55.39 PM.png>)
**Home/Welcome**

![Login](<./img/Screenshot 2024-04-01 at 7.56.19 PM.png>)
**Login**

![Create](<./img/Screenshot 2024-04-01 at 7.56.52 PM.png>)
**Create Account**

![Account](<./img/Screenshot 2024-04-01 at 7.57.21 PM.png>)
**View/Edit Account**

![Built](<./img/Screenshot 2024-04-01 at 7.58.14 PM.png>)
**Built (Brick Archive)**

![Wish](<./img/Screenshot 2024-04-01 at 7.57.48 PM.png>)
**Wishlist (Brick Envy)**

## Timeline of Work

**Day 1 3/28/24:** Establish group, brainstorm ideas, set up GitHub repo, create starter code & initial README. Faith to review the API, Sean to review Material UI (https://mui.com/material-ui/) and create wireframes.

**Day 2 4/1/24:** Begin connecting project to Render (Sean), work on Client/components & Client/pages (Sean & Emily), work on Server/models (Faith) & Server/seeders and schemas (Miguel).

**Day 3 4/2/24:** Succesfully connected project to Heroku after abandoning Render. Also connected to MongoDB Atlas. Group agreed to abandon use of API - will allow users to manually create database with prompts and will add API as future state idea.

**Day 4 4/4/24:**

**Day 5 4/8/24:**

**Day 6 4/9/24:** Stakeholder Presentation & Demo

## Usage

The github repository may be found at https://github.com/sfmacdonald/Block-Buddies

The live URL for the working website deployed via Heroku is https://block-buddies-e3447dd8369c.herokuapp.com

When accessed, the initial landing page should reflect the following image:

## Stakeholder Presentation

Attached is the stakeholder slide deck presentation with the final MVP product outline:

Future state ideas:
- Connect to API to make user experience better and return results
- Custom avatars for user profiles
- Use Lego Stubs for ratings instead of stars
- Recommend builds to users based off their profile (previous builds, wishlist, age)
