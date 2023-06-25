import axios from "axios"
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>

    
*/

//axios.get(https://api.github.com/users/)

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createCard({object}){
  const cardDiv = document.createElement("div");
  const image = document.createElement("img");
  const cardInfoDiv = document.createElement("div");
  const header = document.createElement("h3");
  const para1 = document.createElement("p");
  const para2 = document.createElement("p");
  const para3 = document.createElement("p");
  const aTag = document.createElement("a")
  const para4 = document.createElement("p");
  const para5 = document.createElement("p");
  const para6 = document.createElement("p");

  cardDiv.appendChild(cardInfoDiv);
  cardDiv.appendChild(image)
  cardDiv.appendChild(header);
  cardDiv.appendChild(para1);
  cardDiv.appendChild(para2);
  cardDiv.appendChild(para3);
  cardDiv.appendChild(aTag);
  cardDiv.appendChild(para4);
  cardDiv.appendChild(para5);
  cardDiv.appendChild(para6);

  cardDiv.classList.add("card");
  cardInfoDiv.classList.add("card-info");
  header.classList.add("name");
  para1.classList.add(`username: ${object.username}`)
  para2.textContent = `location: ${object.location}`;
  header.textContent = `${object.name}`

  
console.log(cardDiv);
}

const testData = {username: "test name", name: "test name", location: "test location", followers: "test followers",following: "test following", bio: "test Bio" }

createCard(testData);

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
