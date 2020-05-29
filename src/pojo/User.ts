export class User{
    private id:number=0;
    private email:string="";
    private password:string="";
    private names:string="";
    private lastnames:string="";
    private birthdate:string="";
    private height=0;
    private weight=0;

    constructor(){
        this.email="";
        this.password="";
        this.names="";
        this.lastnames="";
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

    getBirthdate(){
        return this.birthdate;
    }

    getHeight(){
        return this.height;
    }

    getWeight(){
        return this.weight;
    }

    getName(){
        return this.names;
    }

    getLastName(){
        return this.lastnames;
    }
    
    setId(id:number){
        this.id=id;
    }

    setEmail(email:string){
        this.email=email;
    }

    setPassword(password:string){
        this.password=password;
    }

    setName(name:string){
        this.names=name;
    }

    setLastName(lastName:string){
        this.lastnames=lastName;
    }

    setBirthdate(birthdate:string){
        this.birthdate=birthdate;
    }

    setHeight(height:any){
        this.height=height;
    }

    setWeight(weight:any){
        this.weight=weight;
    }
}