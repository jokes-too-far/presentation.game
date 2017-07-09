const Transitions = require('./transitions')

module.exports = (() => {
    var transistions = new Transitions();
    transistions.initCustomTransitions();

    return {
        bonusSlideChancePercent: 20,
        total_slides: 10,
        transition_timeout: 2000,
        transition_list: transistions.getTransitions(),
        differentSoundPercentChance: 2,
        transition_sounds: [],
        themes: []
    };
})()
