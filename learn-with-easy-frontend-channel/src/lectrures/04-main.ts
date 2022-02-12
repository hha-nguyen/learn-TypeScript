import { LargeNumberLike } from "crypto";

export function isPositive(n: number) {
    return n > 0;
}

// Types by Inference
let helloWord = 'Hello world';

// Defining Types
interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "nguyen ha",
    id: 0
}

const student = {
    id: 1,
    name: 'nguyen ha'  
} as const;

//type allias and type interface
//primative type
type StudentName = string;
type StudentAge = number;

//object type 
// type Student = {
//     readonly id: number;
//     name: string;
//     age?: number;
// }

//union type
type Status = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3;
type StudentId = number | string;

interface Student{
    id: number | string;
    name: string;
    gender: 'male' | 'female';
    grade: 'A' | 'B' | 'C' | 'D';
}

//intersection type
interface businessPartner {
    name: string;
    credit: number;
}

interface identity{
    id: number;
    name: string;
}

type Employee = identity & businessPartner;

const em: Employee = {
    id: 14,
    name: 'nguyen ha',
    credit: 14545
};

// enum 
// number enum
enum Statuss {
    PENDING = 3, // 3
    IN_PROGRESS, // 4
    DONE,        // 5
    CANCELLED    // 6
}

const stats1: Statuss = Statuss.PENDING;
const stats2: Statuss = -1;
const stats3: Statuss = 1;

console.log(Statuss[0]); // PENDING
console.log(Statuss['DONE']); // 5

//string enum

enum MediaType {
    JSON = "application/json",
    XML = "application/xml"
}

fetch("https://example.com/api/endpoint", {
    headers: {
        Accept: MediaType.JSON,
    }
}).then(response => {

});

type MediaTypes = 'application/json' | 'applicaiton/xml';

// Generic
interface Students{
    id: number;
    name: string;
}

const numberList: Array<number> = [1, 2, 3];
const worldList: Array<string> = ['nguyen', 'ha'];

const studentList: Array<Students> = [
    { id: 1, name: 'nguyen ha' },
    { id: 2, name: 'nguyen anh' }
]; 

interface List<T> {
    length: number;
    [index: number]: T;
} 

const numberLists: List<number> = [1, 3, 2];

// keyof oparator

type StudentKeys = keyof Student;
const key: StudentKeys = 'id';

// typeof oparator

//Mapped types
type MappedTypes = {
    [Key in keyof Student]: boolean;
};