class Transitions {
    constructor(){
        this.transitions = [
            'SlideLeft',
            'SlideRight', 
            'SlideTop', 
            'SlideBottom', 
            'ScaleUp', 
            'BounceLeft', 
            'BounceRight',
            'BounceDown', 
            'BounceUp'
         ]
    }

    initCustomTransitions(){
        Phaser.Plugin.StateTransition.In.BounceLeft =  this.getBounceTransition(true, 'x', 1, 'width')
        Phaser.Plugin.StateTransition.Out.BounceLeft =  this.getBounceTransition(false, 'x', 1, 'width')
        Phaser.Plugin.StateTransition.In.BounceRight =  this.getBounceTransition(true, 'x', -1, 'width')
        Phaser.Plugin.StateTransition.Out.BounceRight =  this.getBounceTransition(false, 'x', -1, 'width')
        Phaser.Plugin.StateTransition.In.BounceUp =  this.getBounceTransition(true, 'y', 1, 'height')
        Phaser.Plugin.StateTransition.Out.BounceUp =  this.getBounceTransition(false, 'y', 1, 'height')
        Phaser.Plugin.StateTransition.In.BounceDown =  this.getBounceTransition(true, 'y', -1, 'height')
        Phaser.Plugin.StateTransition.Out.BounceDown =  this.getBounceTransition(false, 'y', -1, 'height')
    }

    getBounceTransition(intro, value, scalar, dimension){
        var bounce = {
            ease: Phaser.Easing.Bounce.InOut,
            duration: 2000,
            intro: intro,
            props: {}
        }
        bounce.props[value] = function(game) {
                    return game[dimension] * scalar
                }
        return bounce
    }

    getTransitions(){
        return this.transitions
    }
}

export default Transitions;