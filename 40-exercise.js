function make_album(artist_name, album_title, tracks) {
    // making a object and asign a properties to it
    var Albums = {
        artist: artist_name,
        album: album_title,
        tracks: tracks
    };
    // making a syntex
    if (tracks !== undefined) {
        Albums.tracks;
    }
    return Albums;
}
// calling this three function and creating variables with diffrent values
var album1 = make_album("artist no 1", "album title no1", 5);
var album2 = make_album("artist no 2", "album title no2", 10);
var album3 = make_album("artist no 3", "album title no3", 15);
// printing the function variables
console.log(album1);
console.log("\n");
console.log(album2);
console.log("\n");
console.log(album3);
