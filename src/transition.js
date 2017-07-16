class Transition {
    constructor(){
        this.easingAlgorithms = [];
        for (const algorithm in Phaser.Easing) {
            this.easingAlgorithms.push(algorithm);
        }
        this.inout = ['In', 'Out', 'InOut'];
    }

    out(game, stuffToMove,  destination, extraParams) {
        const transition = this.randomTransition(game);
        const tweens = [];
        const states = [];
        for (const ele of stuffToMove) {
            tweens.push(transition.tween(ele));
            states.push(transition.stateOut(ele));
        }
        this.tweenAllToDestinationState(tweens, states, game, destination, extraParams)
    }

    in(game, stuffToMove) {
        const transition = this.randomTransition(game);
        const tweens = [];
        const states = [];
        for (const ele of stuffToMove) {
            tweens.push(transition.tween(ele));
            states.push(transition.stateIn(ele));
            transition.beforeIn(ele);
        }
        this.tweenAllToDestinationState(tweens, states, game)
    }

    randomTransition(game) {
        const transitions = [
            {
                beforeIn: (ele) => {
                    ele['scale'].set(0,0);
                },
                tween: (ele) => {
                    return game.add.tween(ele['scale']);
                },
                stateIn: (ele) => {
                    return {x:1, y:1}
                },
                stateOut: (ele) => {
                    return {x:0, y:0}
                },
            },
            {
                beforeIn: (ele) => {
                    ele.x = 0 - ele.width;
                },
                tween: (ele) => {
                    return game.add.tween(ele);
                },
                stateIn: (ele) => {
                    return {x:ele.x}
                },
                stateOut: (ele) => {
                    return {x:game.width + ele.width}
                },
            },
        ];
        return game.rnd.pick(transitions);
    }

    tweenAllToDestinationState (tweens, states, game, destination, extraParams) {
        const totalSignals = tweens.length;
        let finishedSignals = 0;

        const easing = game.rnd.pick(this.easingAlgorithms);
        const inout = game.rnd.pick(this.inout);

        for (var i = 0; i < tweens.length; i++) {
            const tween = tweens[i];
            const state = states[i];
            const runningTween = tween.to(
                state,
                250 + Math.random() * 500,
                Phaser.Easing[easing][inout],
                true
            );
            if (destination) {
                runningTween.onComplete.add(() => {
                    if (totalSignals === ++finishedSignals) {
                        game.state.start(destination, true, false, extraParams);
                    }
                })
            }
        }
    }
}

module.exports = new Transition();
