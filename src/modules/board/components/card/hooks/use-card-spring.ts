import { SpringValue, useSpring } from '@react-spring/web'

export type UseCardSpring = {
    spring: {
        opacity: SpringValue<number>
        transform: SpringValue<string>
    }
}

export function useCardSpring (flipped: boolean): UseCardSpring {

    const spring = useSpring ({
        'opacity': flipped ? 1 : 0,
        'transform': `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        'config': { 'mass': 10, 'tension': 500, 'friction': 80 },
    })

    return { spring }

}