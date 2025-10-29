class MyCalci
{
  constructor()
  {
    this.a=5
    this.b=3
  }
  dispval=()=>
  {
    console.log("value of a=",this.a,"","b=",this.b)
  }
}
Mc=new MyCalci()
Mc.dispval()