//heirarchial inheritance
class A 
{
  funca()
  {
    console.log("Function of class A")
  }
}
  class B extends A
  {
    funcb()
    {
      console.log("Function of class B")
  }
}
class C extends A{
funcc()
{
  console.log("Function of class C")
}
}
class D extends A{
  funcd()
  {
    console.log("Function of class D")
  }
}
ObjB=new B()
ObjB.funca()
ObjB.funcb()
console.log(".............")
ObjC=new C()
ObjC.funca()
ObjC.funcc()
console.log("................")
ObjD=new D()
ObjD.funca()
ObjD.funcd()