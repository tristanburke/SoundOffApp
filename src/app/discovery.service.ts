import {Injectable} from '@angular/core';
import {URLSearchParams, Headers, Http} from '@angular/http';

import { Song } from './song';

@Injectable()
export class SearchService {

    constructor(private http: Http) {
    }

    getSong(url: string): Song {
        var song = new Song();
        return song;
    }
}
