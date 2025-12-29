type Person = {
    id: number,
    name: string,
};

type Student = Person & {
    age: number,
};

type Teacher = Person & {
    subject: string[]
};

const student: Student = {
    id: 1,
    name: "Willian",
    age: 35,
}