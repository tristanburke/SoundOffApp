import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Song } from './song';

export enum KEY_CODE {
  SPACE = 32,
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37

}

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.css']
})

export class DiscoveryComponent {
  playing: boolean;
  show_play_status: boolean;
  progress_index: number;
  current_song: Song;

  constructor() {
    this.playing = true;
    this.show_play_status = false;
    this.progress_index = 0;
    this.retrieve_song();
    this.play();
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if (event.keyCode === KEY_CODE.SPACE) {
      this.toggle_playing()
    }
    else if (event.keyCode == KEY_CODE.RIGHT_ARROW) {

    }
    else if (event.keyCode == KEY_CODE.LEFT_ARROW) {

    }
  }
  /** Plays Music **/
  play() : void {
    for (var i = 0; i < 100; i++) {
      this.increment_progress_index();
    }
  }

  /** Pauses or Plays music **/
  toggle_playing() : void {
    if (!this.playing) {
      this.play()
    }
    this.playing = !this.playing;
  }

  /** Retrieves random song using discovery service
   *  Sets component variable  **/
  retrieve_song() : void {

  }
}
