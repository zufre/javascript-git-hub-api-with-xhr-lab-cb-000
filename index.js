<<<<<<< HEAD
function getRepositories() {
  var username = document.getElementById("username").value;
  const req = new XMLHttpRequest();

  req.addEventListener("load", displayRepositories);
  req.open("GET", `https://api.github.com/users/${username}/repos`);
  req.send();
}

function displayRepositories(event, data) {

  const repos = JSON.parse(this.responseText);
  const repoList =
    "<ul>" +
    repos
      .map(r => {
        const dataUser = 'data-username="' + r.owner.login + '"';
        const dataRepo = 'data-repository="' + r.name + '"';
        return `<li>
      					<h2>${r.name}</h2>
                <a href="#" >${r.html_url}</a><br>
      					<a href="#" ${dataUser} ${dataRepo}  onClick="getCommits(this)" >Get Commits</a><br>
                <a href="#" ${dataUser}  ${dataRepo}  onClick="getBranches(this)" >Get Branches</a>
      				</li>`;
      })
      .join("") +
    "<ul>";
  document.getElementById("repositories").innerHTML = repoList;
}
function getCommits(el) {
  const req = new XMLHttpRequest();
  req.addEventListener("load", displayCommits);
  req.open(
    "GET",
    `https://api.github.com/repos/${el.dataset.username}/${
      el.dataset.repository
    }/commits`
  );
  req.send();
}
const displayCommits = ()  => {

  const commits = JSON.parse(this.responseText);
  const commitsList =
    "<ul>" +
    commits
      .map(c => {
        return `<li>
    <h3>${c.commit.author.name}</h3>
<p>Message: ${c.commit.message}</p>
<p>URL: ${c.commit.url}</p>
  </li>`;
      })
      .join("") +
    "</ul>";
  document.getElementById("details").innerHTML = commitsList;
}

function getBranches(el) {
  const req = new XMLHttpRequest();
  req.addEventListener("load", displayBranches);
  req.open(
    "GET",
    `https://api.github.com/repos/${el.dataset.username}/${
      el.dataset.repository
    }/branches`
  );
  req.send();
}



function displayBranches() {
  console.log(this.responseText);
  const branches = JSON.parse(this.responseText);
  const branchesList =
    "<ul>" +
    branches
      .map(b => {
        return `<li>
    <h4>${b.name}</h4>

  </li>`;
      })
      .join("") +
    "</ul>";
  document.getElementById("details").innerHTML = branchesList;
}
=======

const getRepositories = ()  => {
  var username = document.getElementById("username").value;
  const req = new XMLHttpRequest();
  req.addEventListener("load", showRepositories);
  req.open("GET", `https://api.github.com/users/${username}/repos`);
  req.send();
}

function showRepositories(event,data) {
  var repos = JSON.parse(this.responseText);
  const repoList =
       "<ul>"
    + repos.map(r => {
      return
      (
        `<li>
        <h2>${r.name}</h2>

        </li>`
      )}).join("")
  + "</ul>";
  document.getElementById("repositories").innerHTML = repoList;
}
