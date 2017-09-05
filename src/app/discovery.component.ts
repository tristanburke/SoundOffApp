import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

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

  constructor() {
    this.playing = true;
    this.show_play_status = false;
    this.progress_index = -90;
    this.play()
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
  toggle_playing() : void {
    if (!this.playing) {
      this.play()
    }
    this.playing = !this.playing;
    this.show_playing_status();
  }
  show_playing_status() : void {
    this.show_play_status = true;
    setTimeout(() => {
      this.show_play_status = false;
    }, 1000);
  }
  play() : void {
    for (var i = 0; i < 100; i++) {
      this.increment_progress_index();
    }
  }
  increment_progress_index() : void {
    setTimeout(this.progress_index = this.progress_index + 1, 2000)
  }
}
