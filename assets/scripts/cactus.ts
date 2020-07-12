const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    // Properties

    @property
    cactusSpeed: number = 1;

    // Custom Methods: 



    // Life-Cycle Methods: 

    onLoad = () => {
        // Settings before the game load, physics, sound engine...
    }
    
    start = () => {

    }

    update = (dt) => {
        // 60 frame per second loop
        this.node.x = this.node.x - this.cactusSpeed * 5;
    }

}
