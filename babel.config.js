module.exports = {
    'presets': [
        'next/babel',
    ],
    'plugins': [
        ['styled-components', {
            'ssr': true,
            'displayName': false,
        }],
    ],
}