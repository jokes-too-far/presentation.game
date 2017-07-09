const Transitions = require('./transitions')

module.exports = (() => {
    var transistions = new Transitions();
    transistions.initCustomTransitions();

    return {
        title: 'a placeholder title for a talk',
        bonusSlideChancePercent: 20,
        total_slides: 10,
        transition_timeout: 2000,
        transition_list: transistions.getTransitions(),
        differentSoundPercentChance: 2,
        transition_sounds: [
            'arrr',
            'bicycle-horn-1',
            'bottle-clay-uncork-01',
            'congratulations',
            'good_choice',
            'metal-hammer-hit-02',
            'new_highscore',
            'ohmy',
            'phrase2-2',
            'ready',
            'war_fire_in_the_hole',
            'wrong',
            'wyrmsun_german-voice_012',
        ],
        themes: []
    };
})()
