class RecentlyPlayed {
    constructor()
    {
        this.item= [];
    } 

    push(element){ //Adds new element to the array
        for(var i=0; i<15; i++){  //Checks if the contents of the array appear somewhere within the array
            if(this.item[i] === element) //If a similar element is found, it is deleted
               this.item.splice(i, 1);
        }
        if(this.item.length===15){ //If there are more than 15 elements, the oldest one is deleted
            this.item.splice(0, 1);
        }
        this.item.push(element);
    }

    current() //Returns the leghth of the stack
    {
        return this.item.length;
    }

    print(element) //Returns specific element
    {
        return this.item[element];
    }
}

export default RecentlyPlayed;