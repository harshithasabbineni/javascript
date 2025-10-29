//single inheritance
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
ObjB=new B()
ObjB.funca()
ObjB.funcb()
  
