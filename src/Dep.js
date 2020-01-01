let uid = 0;
export default class Dep {
    // target 指watcher
    static target = null;
    constructor() {
        this.id = uid ++
        // watcher数组
        this.subs = []
    }

    addSub(sub) {
        this.subs.push(sub)
    }

    removeSub(sub) {
        const index = this.subs.indexOf(sub)
        if (index !== -1) {
            this.subs.splice(index, 1)
        }
    }

    depend() {
        if (Dep.target) {
            Dep.target.addDep(this)
        }
    }

    notify() {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}

Dep.target = null
const targetStack = []

export function pushTarget(target) {
    // target为watcher
    targetStack.push(target)
    Dep.target = target
}

export function popTarget() {
    targetStack.pop()
    Dep.target = targetStack[targetStack.length - 1]
}