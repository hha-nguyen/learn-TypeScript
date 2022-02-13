// varriable
const hello = "world";

// function
const getFullName = (name: string, surname: string): string => {
    return name + ' ' + surname;
}

// working with DOM 
let page: any = '1';
let pageNumber = page as string;

const someElement = document.querySelector('.foo') as HTMLInputElement;
console.log(someElement.value);

someElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
});

// class
class User {}

// Generic type
const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16);
    return { ...obj, id};
};

interface UserInterface<T>{
    name: string;
    data: T
}

const user: UserInterface<{ meta: string }> = {
    name: "Mesto",
    data: {
        meta: "foo"
    }
}

const user2: UserInterface<string[]> = {
    name: "john cena",
    data: ["foo1", "foo2"]
}

// const result = addId<UserInterface>(user);