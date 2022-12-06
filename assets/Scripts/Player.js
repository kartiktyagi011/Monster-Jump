
cc.Class({
    extends: cc.Component,
    
    properties: {
       
        jumpHeight: 0,
        
        jumpDuration: 0,
       
        maxMoveSpeed: 0,
        
        accel: 0,
       
        jumpAudio: {
            default: null,
            type: cc.AudioClip
        },
          minX : -480,
          maxX :  480,
    },

    runJumpAction: function () {

        var jumpUp = cc.tween().by(this.jumpDuration, { y: this.jumpHeight }, { easing: 'sineOut' });
        var jumpDown = cc.tween().by(this.jumpDuration, { y: -this.jumpHeight }, { easing: 'sineIn' });
        var tween = cc.tween()
                        .sequence(jumpUp, jumpDown)
                        .call(this.playJumpSound, this);
        return cc.tween().repeatForever(tween);
    },

    playJumpSound: function () {
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },

    onKeyDown (event) {
        
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true;
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                break;
        }
    },

    onKeyUp (event) {
        
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
        }
    },

    onLoad: function() {
      
        var jumpAction = this.runJumpAction();
        cc.tween(this.node).then(jumpAction).start()

        this.accLeft = false;
        this.accRight = false;
        
        this.xSpeed = 0;

       
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);    
    },

    onDestroy () {
        
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },    

    update: function (dt) {
        
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        } else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
        
        if ( Math.abs(this.xSpeed) > this.maxMoveSpeed ) {
           
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }

        
        this.node.x += this.xSpeed * dt;

        if(this.node.x>this.maxX){
            this.node.x = this.maxX;
        }
        if(this.node.x<this.minX){
            this.node.x = this.minX;
        }
    },
});
