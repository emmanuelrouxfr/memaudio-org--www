import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../../../store/use-store'

/**
 * @description /pages/complete
 * @typedef {string} World world
 * @typedef {string} Level level
 * @returns {{World, Level}} UseCompletePage
 */
export function useCompletePage () {

    const router = useRouter ()
    const isComplete = useStore ((state) => state.game.isComplete)
    const isCompleteRef = useRef (isComplete) // use this to keep initial value (replace useEffect [])
    const world = useStore ((state) => state.game.world)
    const level = useStore ((state) => state.game.level)

    useEffect (() => {

        (async () => {

            if (isCompleteRef.current) return

            await router.replace ('/')

        }) ()

    }, [router])

    return { world, level }

}