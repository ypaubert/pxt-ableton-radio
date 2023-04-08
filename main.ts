namespace AbletonRadio {
    //% block
    export function GroupeRadioAbleton(groupe: number) {
        radio.setGroup(groupe)
    }

    //% block
    export function joueCanalNote(canalmidi: number, notemidi: number): void {
        radio.sendNumber(1000 * canalmidi + notemidi)
    }

    //% block
    export function stoppeCanalNote(canalmidi: number, notemidi: number): void {
        radio.sendNumber((1000 * canalmidi + notemidi) * -1)
    }

}
basic.forever(function () {
	
})
