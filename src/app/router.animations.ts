import { trigger, state, animate, style, transition } from "@angular/animations";

export function moveIn() {
    return trigger('moveIn', [
        state('void', style({ position: 'absolute', width: '100%' })),
        state('*', style({ position: 'absolute', width: '100%' })),
        transition(':enter', [
            style({ opacity: '0', transform: 'translateY(80px)' }),
            animate('.6s ease-in-out', style({ opacity: '1', transform: 'translateX(-180px)' }))
        ])
    ]);
}

export function fallIn() {
    return trigger('fallIn', [
        transition(':enter', [
            style({ opacity: '0', transform: 'translate(40px)' }),
            animate('.4s .2s ease-in-out', style({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        transition(':leave', [
            style({ opacity: '1', transform: 'translate(0)' }),
            animate('.3s ease-in-out', style({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}

export function moveInRight() {
    return trigger('moveInRight', [
        transition(':enter', [
            style({ opacity: '0', transform: 'translateX(250px)' }),
            animate('.6s .2s ease-in-out', style({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}

