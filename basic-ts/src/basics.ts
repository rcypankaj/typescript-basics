export default function basicsOfTypes() {
  // Primitives
  let age: number;
  age = 12;

  let userName: string;
  userName = "Pankaj";

  let isInstructor: boolean;
  isInstructor = true;

  // more complex types
  let hobbies: string[];

  hobbies = ["Sports", "Cooking"];

  let person: { name: string; age: number };

  person = {
    name: "Max",
    age: 32,
  };

  // Giving needed errors because of typescript
  // person = {
  //   isEmplyee: true,
  // };

  let people: { name: string; age: number }[];

  // type inference

  let course = "React The complete Guide";
  // It is giving error because the type inference when we do not give the type byDefault typescript takes the initialization type and then if we try to initialize with different types in that varable than typescript does not allow this and saves us to getting runtime errors!
  // course = 12341;

  // Union types -> If we give more than one types to a variable, its called union types ex->
  let course1: string | number = "React The complete Guide";
  course1 = 12341;

  // type alias
  type Person1 = { name: string; age: number };

  let people1: Person1[];

  // Funtions and types
  function add(a: number, b: number): number {
    return a + b;
  }

  function print(value: any) {
    console.log(value);
  }

  // Generics
  function insertAtBegining(array: any[], value: any) {
    return [value, ...array];
  }

  const numberArray = [1, 2, 3, 4];
  const newArray = insertAtBegining(numberArray, -1);
  // It is not giving error but we need beacuse when number array and number will be added then if i try to split on the number we should get error but in this it is not
  //   newArray[0].split(" ");

  function insertAtBeginingWithGenerics<T>(array: T[], value: T) {
    const newArr = [value, ...array];
    return newArr;
  }

  const numberArray1 = [1, 2, 3, 4];
  const newArrayWithGenerics = insertAtBeginingWithGenerics(numberArray, -1);
  // newArrayWithGenerics[0].split(" ");
}
