import {velocity} from './exportClass.js';

class VelVimanNagar extends velocity{

    constructor(courseName, tech, fees, location){
        super(courseName, tech, fees)
        this.location = location;
    }

    getVelocity(){
        console.log(`Velocity is at VimanNagar as well
            ${this.courseName}, ${this.tech}, ${this.fees},
            ${this.location}
        `)
    }
}

let vel1 = new velocity("ATT", "javascript", 20000);
vel1.getCourseName()

let vel2 = new VelVimanNagar("ATT", "java", 20000, "Viman nagar")
vel2.getVelocity()
vel2.getCourseName()