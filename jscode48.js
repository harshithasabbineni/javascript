//Print array elements and sum and count and avg
var a=[10,20,30,40,50]
var count=0
var sum=0
for(i=0;i<5;i++)
{
    console.log(a[i])
    count=count+1
    sum=sum+a[i]
}
console.log("count is=",+count)
console.log("sum is=",+sum)
console.log("Avg="+(sum/count))