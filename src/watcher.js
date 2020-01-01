import Dep from './Dep'


export default class Watcher {
    constructor(vm, desc, callback, context) {
        this.vm = vm
        Object.assign(this, desc)
        this.callback = callback
        this.context = context || this

        this.depIds = []
        this.deps = []

        this.newDepIds = []
        this.newDeps = []

        let once = desc.once
        let expression = desc.expression
        let preSetFunc = typeof expression === 'function'

        this.getter = preSetFunc ? expression : ''
    }
}