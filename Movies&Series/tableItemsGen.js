var table = document.querySelector('table');

var imagesFilms = ["img/table/img (1).jpg", "img/table/img (2).jpg", "img/table/img (3).jpg", "img/table/img (4).jpg",
    "img/table/img (5).jpg", "img/table/img (6).jpg", "img/table/img (7).jpg", "img/table/img (8).jpg",
    "img/table/img (9).jpg", "img/table/img (10).jpg", "img/table/img (11).jpg", "img/table/img (12).jpg",
    "img/table/img (13).jpg","img/table/img (14).jpg","img/table/img (15).jpg","img/table/img (16).jpg",
    "img/table/img (17).jpg","img/table/img (18).jpg","img/table/img (19).jpg","img/table/img (20).jpg",
    "img/table/img (21).jpg","img/table/img (22).jpg","img/table/img (23).jpg"],


  nameFilms = ["Game of throne", "Mr Robot ", "The Witcher", "13 reason why", "Stranger things",
    "La Case de Paple", "Dark", "Breaking Bad", "Dracula", "Chernobyl", "The 100", "You","Avatar","Joker",
      "The Shawshank Redemption","Black Panther","Titanic","Interstellar","BloodShot","Drag Me To Hell",
       "The Artist","End Game","Doctor Strange"],


  dateFlims = ["2011", "2014", "2019", "2017", "2016", "2017", "2017", "2008", "2020", "2019", "2014", "2018",
              "2009","2019","1994","2018","1997","2014","2020","2009","2011", "2019", "2016"],


  rateFilms = ["9.3", "8.5", "8.3", "7.8", "8.8", "8.5", "8.7", "9.5", "6.8", "9.4", "7.7", "7.8",
              "7.8","8.5","9.3","7.3","7.8","8.6","5.7", "6.6", "7.9", "8.7", "7.5"],


  genreFilms = ["Action, Adventure, Drama", "Crime, Drama, Thriller", "Action, Adventure, Drama", "Drama, Mystery",
   " Drama, Fantasy, Horror ", " Action, Crime, Mystery", " Crime, Drama, Mystery", "Crime, Drama, Thriller",
    "Drama, Horror", " Drama, Mystery, Sci-Fi", " Crime, Drama, Mystery", " Crime, Drama, Romance",
    "Action,Adventure,Fantasy,Sci-Fi"," Crime,Drama,Thriller","Drama"," Action,Adventure,Sci-Fi",
        " Drama,Romance"," Adventure,Drama,Sci-Fi,Thriller","Action","Horror","Romantic", "Action","Action"],


  type = ["Series","Series","Series","Series","Series","Series","Series","Series","Movie","Series","Series",
  "Series","Movie","Movie","Movie","Movie","Movie","Movie","Movie","Movie","Movie","Movie","Movie"],

  linksFilms = ["../pages/game of throne.html", "../pages/mr_robot.html", "../pages/the_witcher.html", "../pages/13 reasons why.html", "../pages/stranger_things.html",
                 "../pages/la_case_de_papple.html", "../pages/dark.html", "../pages/breakingbad.html", "../pages/dracula.html", "../pages/chernobyl.html", "../pages/the_100.html", "../pages/you.html",
                 "../pages/avatar.html", "../pages/joker.html", "../pages/the shawshank redemption.html", "../pages/black panther.html",
                 "../pages/titanic.html", "../pages/Interstellar.html", "../pages/bloodshot.html", "../pages/drag me to hell.html", "../pages/the artist.html",
                 "../pages/endgame.html", "../pages/doctor strange.html"];

for (var i = 0; i < imagesFilms.length; i++) {
  table.innerHTML += "<tr><td class='img'><a onclick=\"checkerSignIn('" + linksFilms[i] + "', 1)\"><img src='" +
    imagesFilms[i] + "'></a></td><td><a onclick=\"checkerSignIn('" + linksFilms[i] + "', 1)\">" +
    nameFilms[i] + "</a></td><td><a onclick=\"checkerSignIn('" + linksFilms[i] + "', 1)\">" +
    dateFlims[i] + "</a></td><td><a onclick=\"checkerSignIn('" + linksFilms[i] + "', 1)\">" +
    rateFilms[i]+"</a></td><td><a onclick=\"checkerSignIn('" + linksFilms[i] + "', 1)\">" +
    type[i]+"</a></td><td><a onclick=\"checkerSignIn('" + linksFilms[i] + "', 1)\">" +
    genreFilms[i] + "</a></td><td><a onclick=\"checkerSignIn('" + linksFilms[i] + "', 1)\"></td></tr>";
}