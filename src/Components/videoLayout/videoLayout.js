import Button from './Button';
import { Controls, Gesture } from '@vidstack/react'

export default function VideoLayout() {

      return (
            <>
                  <Gesture />
                  <Controls.Root>
                        <Controls.Group>
                              <Button>
                                    <Button.Play />
                                    <Button.Mute />
                                    <Button.FullScreen />
                              </Button>
                        </Controls.Group>
                  </Controls.Root>
            </>

      )
}
