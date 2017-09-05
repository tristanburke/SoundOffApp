import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Song } from './song';
import { DiscoveryService } from './discovery.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style} from '@angular/animations';


export enum KEY_CODE {
  SPACE = 32,
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37

}

@Component({
  selector: 'app-discovery',
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.css'],
  animations: [
    trigger('songAnimation', [
      state('enter' , style({ })),
      state('exit', style({ })),
    ])
  ]
})

export class DiscoveryComponent {
  playing: boolean;
  show_play_status: boolean;
  progress_index: number;
  current_song: Song;

  constructor(private discoveryService: DiscoveryService) {
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
      this.retrieve_song();
    }
    else if (event.keyCode == KEY_CODE.LEFT_ARROW) {

    }
  }

  /** Plays Music **/
  play(): void {
  }

  /** Pauses or Plays music **/
  toggle_playing(): void {
    if (!this.playing) {
      this.play()
    }
    this.playing = !this.playing;
    this.show_playing_status();
  }

  show_playing_status(): void {
    this.show_play_status = true;
    setTimeout(() => {
      this.show_play_status = false;
    }, 1000);
  }

  /** Retrieves random song using discovery service
   *  Sets component variable  **/
  retrieve_song() : void {
    this.current_song = this.discoveryService.getRandomSong();
  }
}
