function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('.ranked-list');
  for each (var rank in ranks) {
    rank.innerHTML = rank.innerHTML + 1;
  }
}

function deepestChild() {
  
}