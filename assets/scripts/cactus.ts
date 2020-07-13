const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    // Properties

    cactusSpeed: number = 5;

    // Custom Methods: 

    levelUp = () => {
        this.node.destroy();
        this.node.parent.getComponent('game').spawnNewCactus();
        this.node.parent.getComponent('game').scoreUp();
        this.cactusSpeed < 13 ? this.cactusSpeed += 1 : null;
    }

    // Life-Cycle Methods: 

    onCollisionEnter = (selfCollider, dinoCollider) => {
        this.cactusSpeed = 0;
    }

    onLoad = () => {
        // Settings before the game load, physics, sound engine...
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
    }
    
    start = () => {
        
    }

    update = (dt) => {
        // 60 frame per second loop
        this.node.x = this.node.x - this.cactusSpeed;
        this.node.x <= -500 ? this.levelUp() : null;
    }
}
