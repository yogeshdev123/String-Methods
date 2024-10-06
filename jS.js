var str="hello";
val=str.charCodeAt(0)-"a".charCodeAt(0);
val+="A".charCodeAt(0);
str=String.fromCharCode(val)+str.substring(1,str.length);
console.log(str);
vol="Samuel Yogesh";
res="";
volar=["A","E",'O','I','U','a','e','i','o','u']
for(let i of vol){
    if(!volar.includes(i))res+=i
}
console.log(res)
