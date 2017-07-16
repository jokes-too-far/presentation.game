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
        this.tweenAllToDestinationState(transition.tween, transition.stateOut, game, stuffToMove,  destination, extraParams)
    }

    in(game, stuffToMove) {
        const transition = this.randomTransition(game);
        for (const ele of stuffToMove) {
            transition.beforeIn(ele);
        }
        this.tweenAllToDestinationState(transition.tween, transition.stateIn, game, stuffToMove)
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
                stateIn: {x:1, y:1},
                stateOut: {x:0, y:0},
            }
        ];
        return game.rnd.pick(transitions);
    }

    tweenAllToDestinationState (getTween, state, game, stuffToMove, destination, extraParams) {
        const totalSignals = stuffToMove.length;
        let finishedSignals = 0;

        const easing = game.rnd.pick(this.easingAlgorithms);
        const inout = game.rnd.pick(this.inout);

        for (const piece of stuffToMove) {
            const tween = getTween(piece).to(
                state,
                250 + Math.random() * 500,
                Phaser.Easing[easing][inout],
                true
            );
            if (destination) {
                tween.onComplete.add(() => {
                    if (totalSignals === ++finishedSignals) {
                        game.state.start(destination, true, false, extraParams);
                    }
                })
            }
        }
    }
}

module.exports = new Transition();
