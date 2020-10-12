var searchBarPc = document.querySelector('.searchWarp');
var searchBarMob = document.querySelector('.searchWarpMob');

var arrLinks = ["pages/chernobyl.html", "pages/dark.html", "pages/you.html", "pages/dracula.html", "pages/game of throne.html", "pages/the_witcher.html",
    "pages/la_case_de_papple.html" ,"pages/the_100.html", "pages/mr_robot.html", "pages/13 reasons why.html", "pages/stranger_things.html", "pages/breakingbad.html", "pages/black panther.html", "pages/the shawshank redemption.html",
    "pages/joker.html", "pages/titanic.html", "pages/Interstellar.html", "pages/avatar.html", "pages/the artist.html", "pages/drag me to hell.html", "pages/endgame.html",
    "pages/bloodshot.html", "pages/doctor strange.html"
  ],
  arrImgs = ["img//Show/img (1).jpg", "img//Show/img (2).jpg", "img//Show/img (3).jpg", "img//Show/img (4).jpg",
    "img//Show/img (5).jpg", "img//Show/img (6).jpg", "img//Show/img (7).jpg", "img//Show/img (8).jpg",
    "img//Show/img (9).jpg", "img//Show/img (10).jpg", "img//Show/img (11).jpg", "img//Show/img (12).jpg",
    "img//Show/img (13).jpg", "img//Show/img (14).jpg", "img//Show/img (15).jpg", "img//Show/img (16).jpg",
    "img//Show/img (17).jpg", "img//Show/img (18).jpg", "img//Show/img (19).jpg", "img//Show/img (20).jpg",
    "img//Show/img (21).jpg", "img//Show/img (22).jpg", "img//Show/img (23).jpg"
  ],
  arrNames = ["Chernobyl", "Dark", "You", "Dracula", "Game Of Thrones", "The Witcher", "La Case De Papel",
    "The 100", "Mr Robot", "13 Reasons Why", "Stranger Things", "Breaking Bad", "Black Panther",
    "The Shawshank Redemption", "Joker", "Titanic", "Interstellar", "Avatar", "The Artist", "Drage Me To Hell",
    "End Game", "Blood Shot", "Doctor Strange"
  ];
console.log(arrNames.length);

for (var i = 0; i < arrNames.length; i++) {
  searchBarPc.innerHTML += "<a onclick=\"checkerSignIn('" + arrLinks[i] + "', 0)\">" +
    "<li>" +
    "<img src='" + arrImgs[i] + "'>" +
    "<p>" + arrNames[i] + "</p>" +
    "</li>" +
    "</a>";
}

for (var i = 0; i < arrNames.length; i++) {
  searchBarMob.innerHTML += "<a onclick=\"checkerSignIn('" + arrLinks[i] + "', 0)\">" +
    "<li>" +
    "<img src='" + arrImgs[i] + "'>" +
    "<p>" + arrNames[i] + "</p>" +
    "</li>" +
    "</a>";
}