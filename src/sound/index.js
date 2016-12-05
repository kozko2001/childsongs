import Sound from 'react-native-sound';

let currentSong = null;

export function play(file: string) {
  if (currentSong) {
    currentSong.stop();
    currentSong.release();
  }

  currentSong = new Sound(file, Sound.MAIN_BUNDLE, (error) => {
    if(error) {
      console.log('error', error);
    } else  {
      currentSong.play((success) => {
        currentSong.stop();
        currentSong.release();
      });
    }
  });

}