import { worlds } from '../app/data'

/**
 * @param {string} world world key
 * @param {string} level level key
 * @returns {boolean} level does exist?
 */
export function isLevel (world, level) {

    return typeof worlds[world][level] !== 'undefined'

}