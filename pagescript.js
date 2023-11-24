const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const t3 = document.getElementById("t3");
const t4 = document.getElementById("t4");
const t5 = document.getElementById("t5");

var scores = [null, 0, 0, 0, 0, 0];

function updateScores() {
  t1.innerHTML = `TEAM 1 | ${scores[1]}`
  t2.innerHTML = `TEAM 2 | ${scores[2]}`
  t3.innerHTML = `TEAM 3 | ${scores[3]}`
  t4.innerHTML = `TEAM 4 | ${scores[4]}`
  t5.innerHTML = `TEAM 5 | ${scores[5]}`
}

function add(amt, team) {
  scores[team] += amt;
  updateScores();
}

function sub(amt, team) {
  scores[team] -= amt;
  updateScores();
}

function reset(team) {
  scores[team] = 0;
  updateScores();
}
