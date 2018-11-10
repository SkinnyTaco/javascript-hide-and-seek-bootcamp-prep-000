function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + 1;
  }
}

function deepestChild() {
  let grandNode = document.querySelector('#grand-node');
  let currentNode = grandNode;
  while (currentNode.hasChildNodes()) {
    currentNode = currentNode.querySelector('div');
  }
  return currentNode;
}