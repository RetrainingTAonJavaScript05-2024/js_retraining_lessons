// let my_name: string = "Liubomyr";
// let age: number = 1;
// let value1: any = 0;
// let value2: any = "0";
// let value3: any = true;


// console.log(my_name);
// value1 = "test";
// age = "12";


// let city: string;
// city = "Lviv";
// city = 1285;

// let a = 1;
// let b = "2";
// a = "12";


// // let names:string[] = ["Anna", "Oleh", 15]
// let names:string[] = ["Anna", "Oleh"]
// let values:any[] = ["Anna", "Oleh", 15]


// enum Color{
//     Red, Blue
// }

// let color1: Color = Color.Red;
// // let color2: Color = 2;


// enum RGB{
//     Red=1,
//     Grean=2,
//     Blue=3
// }

// let rgb1: RGB = RGB.Red;
// let rgb2: RGB = 1;


// function add(a:number, b:number):string{
//     return "" + a+b;
// }

// add(1,2);
// add("1",2);



// function add(a:number, b:number):number{
//     return a+b;
// }
// function add(a:string, b:string):number{
//     return parseFloat(a)+parseFloat(b);
// }

// function add(a, b):number{

// }

// add(1,2);
// add("1","2");
// add(1,"2");


// class User{
//     name:string;
//     protected _email:string;
//     private __password:number;
//     constructor(name:string, email:string="temp@email.com", password:string="0"){
//         this.name = name;
//         this._email = email;
//         this.__password = parseInt(password);
//     }

//     get password():number{
//         return this.__password
//     }

//     set password(pass:string){
//         this.__password = parseInt(pass);
//     }

//     print():void{
//         console.log(`${this.name} ${this._email} ${this.__password}`)
//     }
//     private reset_password():void{
//         this.__password = 0;
//     }

//     static getInstance(name:string="NoName", email:string="temp@email.com", password:string="0"):User{
//         return new User(name, email, password);
//     }

// }

// let user:User = new User();
// console.log(user);
// user.password = "25";
// console.log(user)

// user.print()
// user.reset_password()
// user.print()


// let user2:User = new User("Olha", 15, "15");

// let user3 = User.getInstance()
// let user3 = user2.getInstance()

// export class A{
//     x:number;
// }

// class B{
//     y:number;
// }

// export class C extends A {
//     x:number;
// }

// import { text , text2} from "./some";
// console.log(text2)


interface IPoin{
    x:number;
    y:number;
    print():string;
}

class Point implements IPoin{

}