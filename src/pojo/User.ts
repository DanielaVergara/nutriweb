export class User{
    private email:string="";
    private password:string="";
    private name:string="";
    private lastName:string="";

    constructor(){
        this.email="";
        this.password="";
        this.name="Andrés";
        this.lastName="Marín";
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

    getName(){
        return this.name;
    }

    getLastName(){
        return this.lastName;
    }

    setEmail(email:string){
        this.email=email;
    }

    setPassword(password:string){
        this.password=password;
    }

    setName(name:string){
        this.name=name;
    }

    setLastName(lastName:string){
        this.lastName=lastName;
    }

}