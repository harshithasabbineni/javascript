//multilevel inheritance
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
class C extends B{
funcc()
{
  console.log("Function of class C")
}
}
ObjB=new B()
ObjB.funca()
ObjB.funcb()
console.log(".............")
ObjC=new C()
ObjC.funcb()
ObjC.funcc()
ObjC.funca()