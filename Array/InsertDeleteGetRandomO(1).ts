class RandomizedSet {
    map: Map<any, any>;
    list:number[]
    constructor() {
      this.map = new Map();
      this.list = []
    }

    insert(val: number): boolean {
      if(this.map.has(val)) return  false
       
      this.map.set(val,this.list.length)
      this.list.push(val)
      return true
    }

    remove(val: number): boolean {
        if(!this.map.has(val)) return  false
        
        const idx = this.map.get(val)
         this._getSwap(idx)
         this.list.pop()
         this.map.set(this.list[idx],idx)
         this.map.delete(val)
        return true
    }

    getRandom(): number {
     return  this.list[Math.floor(Math.random()*this.list.length-1)]
    }

    _getSwap(idx:number){
        [this.list[idx],this.list[this.list.length-1]] = [this.list[this.list.length-1] ,this.list[idx]]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */