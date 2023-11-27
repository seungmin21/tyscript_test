// app.ts 파일 수동 생성
let age : number = 30; 
let isType : boolean = true;
let message = "hello, world";
interface Person {
  name: string;
  age: number;
}

type Point = {
  x : number;
  y : number;
}

function addition(hello: string, world: string) : string {
  return hello + world;
}