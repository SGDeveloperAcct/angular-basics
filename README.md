# Angular - Basics

Structural Directives

    Model 1

    	Simple and direct usage of *ngIf, *ngFor, *ngSwitch using shorthand syntax

    Model 2

    	*ngIf render different template when no users found and trackBy

    Model 3

    	*ngFor examples for index, odd, even, first, last

Pipes

    Pipes are simple functions to use in template expressions to accept an input value and return a transformed value.
    Pipes are useful because you can use them throughout your application, while only declaring each pipe once.

    By default, pipes are defined as pure so that Angular executes the pipe only when it detects a pure change to the input value.

    A pure change is either a change to a primitive input value (such as String, Number, Boolean, or Symbol), or a changed object reference (such as Date, Array, Function, or Object).

    Inbuilt pipes
    		uppercase
    		lowercase
    		date
    		number
    				”{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}”
    		percent
    		json
    		slice
    		async
    				This pipe accepts an observable or a promise and lets us render the output of an observable or promise without having to call then or subscribe.
    		currency

    Custom pipes
            exponentialStrength

https://stackblitz.com/edit/angular-ivy-av5gp8
