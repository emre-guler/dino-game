const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    // Properties

    @property
    jumpHeight: number = 110;
    @property
    dinoFallSpeed: number = 3;

    // Custom Methods: 

    dinoJump = () => {
        let newCoordinate = {
            x: this.node.x,
            y: this.node.y + this.jumpHeight
        }
        this.node.y = newCoordinate.y;
    }

    onKeyUpPress = (event) => {
        switch(event.keyCode) {
            case cc.macro.KEY.space:
                this.dinoJump();
                break;
        }
    }

    // Life-cycle Methods: 
    
    onLoad = () => {
        // Settings before the game load, physics, sound engine...
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUpPress, this);
    }
     
    start = () => {

    }

    update = (dt) => {
        // 60 frame per second loop
        this.node.y > -282 ? this.node.y = this.node.y - this.dinoFallSpeed : null;
    }
}
