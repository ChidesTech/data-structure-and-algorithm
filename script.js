const person = {name : "Desmond", age : 39, nickname : "chidestech"}

const personEntries  = Object.entries(person);

console.log(personEntries);

const set = new Set([1,2,3,4]);
set.add(5);
set.add("5");
set.add({name : "des"});
set.add({name : "des"});
set.add(["name" , "des"]);
set.add(["name" , "des"]);
set.delete("5");
// set.clear()

for(const item of set){
    console.log(item);
}

console.log(set.has(5));
console.log(set.size);


const map = new Map([["a", 1], ["b", 2], ["c", 3]]);
map.set("d", 4);


for(const [key, value] of map){
    console.log(key + " : " + value)
}

console.log(map.size)