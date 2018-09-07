function Library(name, creator) {
  this.name = name,
  this.creator = creator,
  this.playlist = []
}

function Playlist(name) {
  this.name = name,
  this.tracks =[]
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlist.push(playlist)
}

Playlist.prototype.addTracks = function(track) {
  this.tracks.push(track);
}

function Tracks(title, rating, length) {
  this.title = title,
  this.rating = rating,
  this.length = length
}

const add = (a, b) => a + b;

Playlist.prototype.overallRating = function() {
  const avgRate = this.tracks
    .map(track => track.rating)
    .reduce(add) / this.tracks.length;
  return `Average Rating for the ${this.name} Playlist: ${Math.round(avgRate * 10)/10}`;
  }

Playlist.prototype.totalDuration = function() {
  const sumSongTime = this.tracks
    .map(track => track.length)
    .reduce(add)
    return `The ${this.name} Playlist is ${Math.round(sumSongTime * 10)/10} minutes long.`;
  }

var LibraryOne = new Library('Migos', 'Leisha');
var PlaylistOne = new Playlist('BAD');
var PlaylistTwo = new Playlist('BOUJEE');
var TrackOne = new Tracks('Don Key', 4, 3);
var TrackTwo = new Tracks('Charity Case', 2, 2.5);
var TrackThree = new Tracks('Jo King', 5, 4);
var TrackFour = new Tracks('Adam Zapel', 2, 3.5);
var TrackFive = new Tracks('Sonny Day', 1, 6.5);
var TrackSix = new Tracks('Warren Peace', 5, 1.5);

LibraryOne.addPlaylist(PlaylistOne);
PlaylistOne.addTracks(TrackOne);
PlaylistOne.addTracks(TrackThree);
PlaylistOne.addTracks(TrackFive);
LibraryOne.addPlaylist(PlaylistTwo);
PlaylistTwo.addTracks(TrackTwo);
PlaylistTwo.addTracks(TrackFour);
PlaylistTwo.addTracks(TrackSix);

console.log('LibraryOne: ',LibraryOne);
console.log('Playlist One: ', PlaylistOne);
console.log('Playlist Two: ', PlaylistTwo);
console.log(PlaylistOne.overallRating());
console.log(PlaylistTwo.totalDuration())
