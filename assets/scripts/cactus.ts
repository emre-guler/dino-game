const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    // Properties

    @property
    cactusSpeed: number = 1;

    // Custom Methods: 

    levelUp = () => {
        this.node.destroy();
        this.node.parent.getComponent('game').spawnNewCactus();
    }

    // Life-Cycle Methods: 

    onCollisionEnter = (selfCollider, dinoCollider) => {
        this.cactusSpeed = 0;
    }

    onLoad = () => {
        // Settings before the game load, physics, sound engine...
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;
    }
    
    start = () => {
        
    }

    update = (dt) => {
        // 60 frame per second loop
        this.node.x = this.node.x - this.cactusSpeed * 5;
        this.node.x == -500 ? this.levelUp() : null;
    }
}
