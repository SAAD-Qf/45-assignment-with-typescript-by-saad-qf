function make_album (artist_name: string, album_title:string, tracks: number){

    // making a object and asign a properties to it

    let Albums : {artist : string, album : string, tracks : number} = {

        artist:artist_name,

        album:album_title,

        tracks:tracks
    };

// making a syntex

    if(tracks !== undefined){

        Albums.tracks
    }

    return Albums;

}

// calling this three function and creating variables with diffrent values

let album1 = make_album("artist no 1","album title no1",5);

let album2 = make_album("artist no 2","album title no2",10);

let album3 = make_album("artist no 3","album title no3",15);

// printing the function variables

console.log(album1);
console.log("\n");
console.log(album2);
console.log("\n");
console.log(album3);




