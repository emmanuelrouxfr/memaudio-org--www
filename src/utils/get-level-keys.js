import { worlds } from '../app/data'

/**
 * @param {string} world world
 * @returns {string[]} all level keys for this world
 */
export function getLevelKeys (world) {

    return Object.keys (worlds[world])

}