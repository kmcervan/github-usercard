/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";
// console.log(axios);
// const result = axios.get("https://api.github.com/users/kmcervan");
// console.log(result);
console.log('1 getting Data');

axios
.get('https://api.github.com/users/kmcervan')
.then((res) => {
    console.log('2 here is the future data', futureData);
    const images = futureData.data.message;
    console.log((images) => {
      const hubMaker = newMaker({ })
    })
  })
  .catch(error => {
    console.log(drama);
  })
  console.log('3 Data requested');
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
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
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function hubMaker (data){
  const card = document.createElement('div');
  const img = document.createElement('img')
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const a = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.appendChild(img);
  card.appendChild(cardInfo);
  card.appendChild(name);
  card.appendChild(userName);
  card.appendChild(location);
  card.appendChild(profile);
  card.appendChild(a);
  card.appendChild(followers);
  card.appendChild(following);
  card.appendChild(bio);

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');
  
  img.src = `${'https://avatars2.githubusercontent.com/u/72095687?v=4'}`;
  name.textContent = `${res.data.name}`;
  userName.textContent = `${data.login}`;
  location.textContent = `${data.location}`;
  profile.textContent = 'Profile:';
  a.href = `${'https://api.github.com/users/kmcervan'}`;
  followers.textContent = `${data.followers}`;
  following.textContent = `${data.following}`;
  bio.textContent = `${data.bio}`;
}

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