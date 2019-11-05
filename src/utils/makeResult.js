import {
    m,
    t,
    p,
    custom1P,
    custom2M,
    round,
} from './helpers'

class ResultMaker {
    constructor(parameters, decorators) {
        this.a = parameters.a
        this.b = parameters.b
        this.c = parameters.c
        this.d = parameters.d
        this.e = parameters.e
        this.f = parameters.f

        this.m = m
        this.p = p
        this.t = t

        this.decorators = decorators
        this.makerFunction = () => 'Error: entered data is incorrect.'
    }

    make() {
        const {a, b, c, d, e, f} = this

        this.decorators.forEach(decorator => {
            decorator.call(this)
        })

        if (a && b && !c) {
            this.makerFunction = this.m
        }
        if (a && b && c) {
            this.makerFunction = this.p
        }
        if (!a && b && c) {
            this.makerFunction = this.t
        }

        if (this.setCustomResultMaker) {
            this.setCustomResultMaker()
        }

        const result = this.makerFunction(d, e, f)

        return isNaN(result) ? result : round(result)
    }
}

function custom1Decorator() {
    this.p = custom1P
}

function custom2Decorator() {
    this.setCustomResultMaker = () => {
        if (this.a && this.b && !this.c) {
            this.makerFunction = t
        }
        if (this.a && !this.b && this.c) {
            this.makerFunction = custom2M
        }
    }
}

export default ({
    a,
    b,
    c,
    d,
    e,
    f,
    custom1,
    custom2,
}) => {
    
    const decorators = []

    if (custom1) {
        decorators.push(custom1Decorator)
    }

    if (custom2) {
        decorators.push(custom2Decorator)
    }

    const result = new ResultMaker({a,b,c,d,e,f}, decorators)
    
    return result.make()
}