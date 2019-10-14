var movieDB = [
    {title: "In Bruges",
    rating: 5,
    hasWatched: true},

    {title: "Frozen",
    rating: 4.5,
    hasWatched: false},

    {title: "Mad Max Fury Road",
    rating: 5,
    hasWatched: true},

    {title: "Les Miserables",
    rating: 3.5 ,
    hasWatched: false}
]

function movies(){
    movieDB.forEach(function(item,i){
        // var result = "You have ";
        //  if(item.hasWatched){
        //      result += "watched";
        //  }
        //  else{
        //      result += "not seen";
        //  }
        //  result += " \"" + item.title + "\" - ";
        //  result += item.rating + " stars";
        //  console.log(result);
        console.log(buildStr(item));
    });
    console.log("USE YOUR OWN MOVIES!");
}

function buildStr(movie){
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched";
    }
    else {
        result += "not seen";
    }
    result += " \"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}