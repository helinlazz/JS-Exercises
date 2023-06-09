/* Starting from the given movies data write a program that logs all the movies infos

Exercise's rules

- create a Movie class than extends a general class Product.
- Product class has 2 fields: name and price;
- Movie class has all field from data and one additional field: available
- Movie class has 2 methods:
  - print: prints movie data following the format `Name by Author: €Price`
  - rent: turn the available property into false
- crate a Store class with followings features:
  - field: movies (private and readonly)
  - methods: addMovie, removeMovie, rentMovies

Todos:

- map starting data in a new array where each item is an instance of Movie.
- print all movies data in the console (use the method print).
- create a new array of the movies released between 2009 and 2012.
- find the movie that contains "legend" in the title;
- create an array of all genres (avoid duplicates).
- create an object that contains the numbers of films for each genres.
- sort the movies by runtime (ascending order).
- add a movie to the store (each new movie should have a title)
- try to add a movie without a title and log an error in the console
- try to add a movie that without author and log a warn in the console
- remove a movie from the store (the movie should exists)
- rent some movies from the store and then print all available movies


Data

[
  {
    "Title": "Avatar",
    "Year": "2009",
    "Genre": "Action, Adventure, Fantasy",
    "Runtime": "162 min",
    "Director": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Language": "English, Spanish",
    "Country": "USA, UK"
  },
  {
    "Title": "I Am Legend",
    "Year": "2007",
    "Runtime": "101 min",
    "Genre": "Drama, Horror, Sci-Fi",
    "Director": "Francis Lawrence",
    "Actors": "Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield",
    "Language": "English",
    "Country": "USA"
  },
  {
    "Title": "300",
    "Year": "2006",
    "Runtime": "117 min",
    "Genre": "Action, Drama, Fantasy",
    "Director": "Zack Snyder",
    "Actors": "Gerard Butler, Lena Headey, Dominic West, David Wenham",
    "Language": "English",
    "Country": "USA"
  },
  {
    "Title": "The Avengers",
    "Year": "2012",
    "Runtime": "143 min",
    "Genre": "Action, Sci-Fi, Thriller",
    "Director": "Joss Whedon",
    "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
    "Language": "English, Russian",
    "Country": "USA"
  },
  {
    "Title": "The Wolf of Wall Street",
    "Year": "2013",
    "Runtime": "180 min",
    "Genre": "Biography, Comedy, Crime",
    "Director": "Martin Scorsese",
    "Actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
    "Language": "English, French",
    "Country": "USA"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Language": "English",
    "Country": "USA, UK"
  }
]

 */

class Product {
    constructor(price);
}

class Movies extends Product {
    constructor(price, available, title, genre, runtime, director, actors,language, country) {;
    super(price);

    this.available = available;
    this.title = title;
    this.genre = genre;
    this.runtime = runtime;
    this.director = director;
    this.actors = actors;
    this.language = language;
    this.country = country;
} }

//istanza
