import {Injectable} from '@angular/core';
import {URLSearchParams, Headers, Http} from '@angular/http';

import { Song } from './song';

@Injectable()
export class DiscoveryService {

    song_list: Array<string>;
    artist_list: Array<string>;
    index: number;

    constructor(private http: Http) {
        this.song_list = ['Father Stretch My Hands Pt. 2', 'Oh Sheit Its X', 'Baby Youre Out'];
        this.artist_list = ['Kanye West', 'Thundercat', 'Mac Demarco'];
        this.index = 0;
    }

    getRandomSong(): Song {
        let ret_song = new Song();
        ret_song.title = this.song_list[this.index];
        ret_song.artist_name = this.artist_list[this.index];
        ret_song.album_path = 'assets/Songs/' + ret_song.title.replace(/[\s]/g, '') + '/album.jpg';
        ret_song.music_path = 'assets/Songs/' + ret_song.title.replace(/[\s]/g, '') + '/music.mp3';

        this.index = (this.index + 1) % this.song_list.length;

        console.log(ret_song.title);
        return ret_song;
    }
}
