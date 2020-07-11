const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    // Properties
    @property
    jumpHeight: number = 10;
    @property
    dinoY: number = -282;
    @property
    dinoAccJump: number = 10;

    // Custom Methods: 

    dinoJump = () => {
        this.dinoY = this.node.y + 100;
        this.node.y = this.dinoY;
    }

    onKeyDownPress = (event) => {
        switch(event.keyCode) {
            case cc.macro.KEY.space:
                this.dinoJump();
                break;
        }
    }

    // Life-cycle Methods: 
    
    onLoad = () => {
        // Settings before the game load, physics, sound engine...
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDownPress, this)
    }
     
    start = () => {

    }

    update = (dt) => {
        // 60 frame per second loop
        console.log(this.node.y);
        this.dinoY > -282 ? this.node.y = this.node.y - 90  : null;
    }
}
