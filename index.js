class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
}
const songs = [
    { name: "Aari Aari", src: "songs/Aari Aari dhurandhar the revenge.mp3" },
    { name: "Gehra Hua", src: "songs/Gehra Hua Dhurandhar.mp3" },
    { name: "Ishq Jalakar", src: "songs/Ishq Jalakar Dhurandhar.mp3" },
    { name: "Ramba Ho", src: "songs/Ramba Ho Dhurandhar.mp3"}
];

let playlist = new DLL();

songs.forEach(song => playlist.add(song));

let current = playlist.head;
const audio = document.getElementById("audio");
const title = document.getElementById("title");

function loadSong(node){
    if(!node) return;
    audio.src = node.data.src;
    title.innerHTML = node.data.name;
}

let isPlaying = false;
function playPause(){
    if(!isPlaying){
        audio.play();
        isPlaying = true;
    }
    else{
        audio.pause();
        isPlaying = false;
    }
}
function next(){
    if(current.next){
        current = current.next;
    } else {
        current = playlist.head;
    }

    loadSong(current);
    audio.play();
}
function prev(){
    if(current.prev){
        current = current.prev;
    } else {
        current = playlist.tail;
    }

    loadSong(current);
    audio.play();
}
audio.addEventListener("ended", next);


loadSong(current);