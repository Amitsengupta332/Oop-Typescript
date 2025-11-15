// oop - abstraction

// idea
// implemenation pore krbo

/*

   1. interface
   2. abstract class
*/

//idea
// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }

// class Musicplayer implements MediaPlayer {
//   play() {
//     console.log("Playing music....");
//   }
//   pause() {
//     console.log("Music paused... ");
//   }
//   stop() {
//     console.log(`Music stopped`);
//   }
// }

// const MezbaPlayer = new Musicplayer(); // instance
// MezbaPlayer.play();

//idea
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class AmitPlayer extends MediaPlayer {
    play(): void {
        console.log("playing music...");
    }
    pause(): void {
        console.log("music paused...");
    }
    stop(): void {
        console.log("music stopped...");
    }
}

const mezbaPlayer = new AmitPlayer();
mezbaPlayer.play();