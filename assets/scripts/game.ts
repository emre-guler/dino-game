const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    // Properties

    @property(cc.Prefab)
    cactusPrefab: cc.Prefab = null; // Cactus
    @property(cc.Node)
    ground: cc.Node = null; // Ground
    @property(cc.Node) 
    dino: cc.Node = null; // Dino 
    
    // Custom Methods: 

    spawnNewCactus = () => {
        let coordinate = {
            x: 520, 
            y: -289
        };
        let newCactus = cc.instantiate(this.cactusPrefab);
        this.node.addChild(newCactus);
        newCactus.addComponent(cc.BoxCollider);
        newCactus.group = "cactus";
        newCactus.setPosition(coordinate.x, coordinate.y);
    }

    // Life-Cycle Methods: 

    onLoad = () => {
        // Settings before the game load, physics, sound engine...
        this.spawnNewCactus();
    }
    
    start = () => {

    }

    update = (dt) => {
        // 60 frame per second loop

    }

}
