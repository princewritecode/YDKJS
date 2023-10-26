const myWork = [];
for (let i = 0; i < 11; i++) {
    if (i % 2 == 0) {
        myWork.push({ name: ` Lesson${i}`, status: true });
    }
    else {
        myWork.push({ name: `Lesson${i}`, status: false });
    }
}

console.log(myWork);