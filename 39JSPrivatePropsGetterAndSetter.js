class User{
    constructor(name,email){
        this.name = name;
        this.email = email;

    }

    #courseList = [];        //this is private stuff because it not declare like var courseList =[]  or
                            // let courseList = [] or const courseList = []. It just declared like #courseList=[] 
                            // pvt stuff.
    getInfo(){
        return {name:this.name, email:this.email};
    }

    enrollCourse(name){             // this is setters and as told below its not  compulusary start with set keyword
         this.#courseList.push(name);    //in setter we actually expect some parameters
    }

    getCourseList(){        //this is getter start with get keyword and there is no neccessary to it should start with
        return this.#courseList; // get keyword. It may start with any keywrod. and These getter help us to access 
                                // private stuffs
                                //in getters we return values ... useually we most of time we will not used parameters
                                //
    }
}


//exporting class
module.exports = User;


const rock = new User("Prasanna","prasannanaik@gmail.com");
console.log(rock.getInfo());

rock.enrollCourse("Express js course");

console.log(rock.getCourseList());
console.log(rock.courseList);


