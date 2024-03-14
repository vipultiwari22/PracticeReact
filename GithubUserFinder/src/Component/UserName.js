async function UserDatas() {
  const url = "https://api.github.com/users";
  const response = await fetch(url);
  const data = response.json();
  return data;
}

async function fetchUsernames() {
  const url = "https://api.github.com/users";
  try {
    const response = await fetch(url);
    const data = await response.json();
    const usernames = data.map((user) => user.login);
    return usernames;
  } catch (error) {
    console.error("Error fetching usernames: ", error);
    return [];
  }
}

async function fetchFollowers(username) {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await fetch(url);
    const userData = await response.json();
    console.log(`${username}'s followers: `, userData.followers);
    return userData.followers;
  } catch (error) {
    console.error(`Error fetching followers for ${username}: `, error);
    return [];
  }
}

async function getUserData() {
  const usernames = await fetchUsernames();
  if (usernames.length > 0) {
    usernames.forEach(async (username) => {
      await fetchFollowers(username);
    });
  }
}
export { UserDatas, getUserData };
