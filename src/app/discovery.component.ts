import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Song } from './song';
import { DiscoveryService } from './discovery.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { AudioProvider } from 'ionic-audio';



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
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})

export class DiscoveryComponent {
  playing: boolean;
  show_play_status: boolean;
  progress_index: number;
  current_song: Song;

  constructor(private discoveryService: DiscoveryService, private _audioProvider: AudioProvider) {
    this.playing = true;
    this.show_play_status = false;
    this.progress_index = 0;
    this.retrieve_song();
    this.addSong();
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
    this._audioProvider.play(this._audioProvider.current);
  }

  /** Pauses Music **/
  pause(): void {
    this._audioProvider.pause();
  }

  /** Adds Song to Audio Player Stack **/
  addSong(): void {
    let track = {'src': this.current_song.music_path};
    this._audioProvider.add(this._audioProvider.create(track));
  }

  /** Pauses or Plays music **/
  toggle_playing(): void {
    if (this.playing) {
      this.pause();
    } else {
      this.play();
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
    this.current_song.state = 'active';
    this.addSong();
  }
}
