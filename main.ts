basic.forever(function () {
	
})

/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace AbletonRadio {
    //% block
    export function GroupeRadioAbleton() {
        radio.setGroup(1)
    }

    //% block
    export function joueNoteAbleton(notemidi: number, canalmidi: number): void {
        radio.sendNumber(1000 * canalmidi + notemidi)
    }

    //% block
    export function stoppeNoteAbleton(notemidi: number, canalmidi: number): void {
        radio.sendNumber((1000 * canalmidi + notemidi) * -1)
    }

}