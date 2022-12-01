let cost;
const subcription = "premium";

if (subcription === "pro"){
    cost =100;
}
else if(subcription === "free"){
    cost =500;
}
else if (subcription === "premium")
{
    cost = 1000;
}
else{
cost = 0;
}
console.log(cost);