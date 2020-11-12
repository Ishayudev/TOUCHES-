function touching(object_1,object_2){
    if (object_1.x - object_2.x < object_2.width/2 + object_1.width/2
      && object_2.x - object_1.x < object_2.width/2 + object_1.width/2
      && object_1.y - object_2.y < object_2.height/2 + object_1.height/2
      && object_2.y - object_1.y < object_2.height/2 + object_1.height/2) {
     return true;
    }else {
      return false;
    }
  }

  function bounceOff(sprite1,sprite2){
    if(sprite2.x-sprite1.x <= (sprite1.width/2+sprite2.width/2) && sprite1.x-sprite2.x <= (sprite2.width/2 + sprite1.width/2)){
        sprite2.velocityX=sprite2.velocityX * (-1);
        sprite1.velocityX= sprite1.velocityX * (-1);
    }
     if(sprite1.y-sprite2.y <= (sprite2.height/2 + sprite1.height/2) && sprite2.y-sprite1.y<= (sprite1.height/2 + sprite2.height/2)){
        sprite2.velocityY= sprite2.velocityY * (-1);
        sprite1.velocityY= sprite1.velocityY * (-1);
    }
  }