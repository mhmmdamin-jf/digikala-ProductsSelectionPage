import { Tooltip, PlayButton, MuteButton, useMediaPlayer, FullscreenButton } from '@vidstack/react';
import { PlayIcon, PauseIcon, MuteIcon, VolumeHighIcon, FullscreenExitIcon, FullscreenIcon } from '@vidstack/react/icons';


export function Play() {
      const isPaused = useMediaPlayer('paused');

      return (
            <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                        <PlayButton>
                              {isPaused ? <PlayIcon size={30} /> : <PauseIcon size={30} />}
                        </PlayButton>
                  </Tooltip.Trigger>
            </Tooltip.Root>
      )
}

export function Mute() {
      const isMuted = useMediaPlayer('muted');
      console.log(isMuted)
      return (
            <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                        <MuteButton>
                              {isMuted ?
                                    <VolumeHighIcon size={30} /> :
                                    <MuteIcon size={30} />

                              }
                        </MuteButton>
                  </Tooltip.Trigger>
            </Tooltip.Root>
      )
}

export function FullScreen() {
      const fullScreen = useMediaPlayer('fullscreen');
      return (
            <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                        <FullscreenButton>
                              {fullScreen ?
                                    <FullscreenIcon size={20} /> :
                                    <FullscreenExitIcon size={20} />
                              }
                        </FullscreenButton>
                  </Tooltip.Trigger>
            </Tooltip.Root>
      )
}

export default function Button({ children }) {
      return (
            <div>
                  {children}
            </div>
      )
}

Button.Play = Play;
Button.Mute = Mute;
Button.FullScreen = FullScreen;