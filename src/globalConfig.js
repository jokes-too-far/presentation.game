const Transitions = require('./transitions')

const setDefault = (key, initialValue) => {
    const result = JSON.parse(localStorage.getItem(key));
    if (result === null) {
        console.log('setting', key, 'to default value', initialValue);
        localStorage.setItem(key, initialValue);
    }
};

module.exports = (() => {
    var transistions = new Transitions();
    transistions.initCustomTransitions();

    // set defaults
    setDefault('shouldDoIntroSlide', true);
    setDefault('pauseForQuestions', true);
    setDefault('askForFeedback', true);

    return {
        key_shouldDoIntroSlide: 'shouldDoIntroSlide',
        key_pauseForQuestions: 'pauseForQuestions',
        key_askForFeedback: 'askForFeedback',
        bonusSlideChancePercent: 20,
        total_slides: 8,
        transition_timeout: 25000,
        transition_list: transistions.getTransitions(),
        differentSoundPercentChance: 2,
        transition_sounds: [],
        themes: []
    };
})()
