// write the function in the object to find the perimeter and the area .


let obj={

    length: 5,
    breadth : 8,

    peri:function(length,breadth){

        console.log("this is the perimeter : ",2*(this.length+this.breadth));

    },

    area:function(legth,breadth){

        console.log("this is the area ",this.length*this.breadth);
    }

}


obj.peri(5,5);
obj.area(10,30);