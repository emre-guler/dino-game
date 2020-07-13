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
    @property(cc.Label)
    score: cc.Label = null;
    playerScore: number = 0;

    // Custom Methods: 

    spawnNewCactus = () => {
        let coordinate = {
            x: 520, 
            y: -289
        };
        let newCactus = cc.instantiate(this.cactusPrefab);
        this.node.addChild(newCactus);
        newCactus.group = "cactus";
        newCactus.setPosition(coordinate.x, coordinate.y);
    }

    scoreUp = () => {
        this.playerScore += 1;
        this.score.string = `Score: ${this.playerScore}`;
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
