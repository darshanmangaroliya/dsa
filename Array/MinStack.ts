class MinStack {
     stack: {val:number,min:number}[];
    constructor() {
       this.stack = []
    }

    push(val: number): void {
     this.stack.push({
        val,
        min:this.stack.length>0?Math.min(val, this.getMin()):val
     })
    }

    pop(): void {
     this.stack.pop()
    }

    top(): number {
     return  this._getLastElement().val
    }

    getMin(): number {
        return  this._getLastElement().min
    }

    _getLastElement(){
        return  this.stack[this.stack.length-1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */