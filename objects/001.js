const details = {
    name: "shyam",
    age: 21,
    sayMyName: function () {
        console.log(this.name);
    }
}

details.place = "kannur";

delete details.place;

console.log(details);

details.sayMyName()