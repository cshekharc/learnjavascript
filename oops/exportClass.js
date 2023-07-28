class velocity{
    constructor(courseName, tech, fees ){
        this.courseName = courseName;
        this.tech = tech;
        this.fees = fees;
    }

    // constructor(fname){
    //     this.fname = fname;
    // }

    getCourseName(){
        console.log(`i have choose a ${this.courseName} having ${this.tech} and fees is ${this.fees}`);
    }
}

export {velocity};

// let vel1 = new velocity("ATT", "javascript", 20000);
// vel1.getCourseName()
