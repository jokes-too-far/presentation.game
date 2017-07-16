const Transitions = require('./transitions')

module.exports = (() => {
    var transistions = new Transitions();
    transistions.initCustomTransitions();

    return {
        bonusSlideChancePercent: 20,
        total_slides: 8,
        transition_timeout: 25000,
        transition_list: transistions.getTransitions(),
        differentSoundPercentChance: 2,
        transition_sounds: [],
        themes: []
    };
})()
