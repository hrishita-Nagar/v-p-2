class Milk{
    constructor(){
        this.image = loadImage("images/Milk.png");
        this.foodStock = 0;
        this.lastFed;
        this.foodStockRef;
        
    }

    getFoodStock(){
        return this.foodStock;
    }

    updateFoodStock(x){
        this.foodStock = x;
    }
     
    deductFood(foodStock){
        this.foodStock = foodStock - 1;
    }

    display(){
        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%5===0){
                    x=130;
                    y=y+55;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }

        
    }
}