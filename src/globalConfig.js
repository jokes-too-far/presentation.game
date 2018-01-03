const setDefault = (key, initialValue) => {
    const result = localStorage.getItem(key);
    if (result === null) {
        console.log('setting', key, 'to default value', initialValue);
        localStorage.setItem(key, initialValue);
    }
};

module.exports = (() => {
    // set defaults
    setDefault('shouldDoIntroSlide', true);
    setDefault('shouldPlaySounds', true);
    setDefault('pauseForQuestions', true);
    setDefault('askForFeedback', true);
    setDefault('totalSlides', 8);
    setDefault('timeOnSlide', 25);

    return {
        key_shouldDoIntroSlide: 'shouldDoIntroSlide',
        key_shouldPlaySounds: 'shouldPlaySounds',
        key_pauseForQuestions: 'pauseForQuestions',
        key_askForFeedback: 'askForFeedback',
        key_totalSlides: 'totalSlides',
        key_timeOnSlide: 'timeOnSlide',
        bonusSlideChancePercent: 20,
        differentSoundPercentChance: 2,
        transition_sounds: [],
        bgs: [],
        themes: []
    };
})()
