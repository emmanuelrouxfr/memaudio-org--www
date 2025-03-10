import { useCallback } from 'react'
import useSound from 'use-sound'
import { useStore } from '../../../../../store/use-store'

type UseCardClick = {
    handleClick: () => void
}

export function useCardClick (toggleFlipped: () => void, src: string): UseCardClick {

    const gameIsRunning = useStore ((state: any) => state.game.isRunning)
    const [play] = useSound (src)

    const handleClick = useCallback (() => {

        toggleFlipped ()

        if (!gameIsRunning) return

        if (!src) return

        play ()

    }, [toggleFlipped, gameIsRunning, src, play])

    return { handleClick }

}