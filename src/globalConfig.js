const Transitions = require('./transitions')

const setDefault = (key, initialValue) => {
    const result = localStorage.getItem(key);
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
    setDefault('shouldPlaySounds', true);
    setDefault('pauseForQuestions', true);
    setDefault('askForFeedback', true);
    setDefault('totalSlides', 8);

    return {
        key_shouldDoIntroSlide: 'shouldDoIntroSlide',
        key_shouldPlaySounds: 'shouldPlaySounds',
        key_pauseForQuestions: 'pauseForQuestions',
        key_askForFeedback: 'askForFeedback',
        key_totalSlides: 'totalSlides',
        bonusSlideChancePercent: 20,
        transition_timeout: 25000,
        transition_list: transistions.getTransitions(),
        differentSoundPercentChance: 2,
        transition_sounds: [],
        themes: []
    };
})()
