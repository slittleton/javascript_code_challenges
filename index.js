// Seek and Destroy ============================================
// remove from the array whatever is in the following arguments
// ([2,3,4,6,6,'apple'], 2,6) -> [3,4,'apple']
function seekAndDestroy() {}


let z = {
  a: this,
  b: 5,
  c: 0,
  fun1: function(){ console.log(this.a);
    this.c = 9;
    console.log(this.c)
  },
  fun2: function(){
    let x = this;
    x.b = 7;
    console.log(x.b);
  }
}

z.fun1()
z.fun2()