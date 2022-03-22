import { AnimatedSprite, Container, Sprite, Text, Texture } from "pixi.js";
import { CieloTierra } from "./CieloTierra";
import {Cartel} from "./Cartel";

export class Scene extends Container{
    constructor(){
        super();
        
        const CieloyTierra: CieloTierra = new CieloTierra();        

        const dialogo: Sprite = Sprite.from("Dialogo");
            dialogo.scale.set(0.3,0.3)
            dialogo.position.set(650,280)
    
        const maximCaminando: AnimatedSprite = new AnimatedSprite([
                Texture.from("MaximRun1"),
                Texture.from("MaximRun2")
                ], 
                true
                );
                maximCaminando.play();
                maximCaminando.animationSpeed=0.1;
                maximCaminando.scale.set(0.3,0.3);
                maximCaminando.position.set(350,350);

        const myText: Text = new Text("texto", {fontSize:50, fill:0xF00, fontFamily:"Arial"});
            myText.text = "Soy Maxim!";
            myText.position.set(700,330);
            myText.scale.set(0.6,0.6)
            
        const cartel: Cartel = new Cartel ();
        cartel.position.set(440,30)
        
        this.addChild(CieloyTierra); 
        this.addChild(maximCaminando);
        this.addChild(dialogo);
        this.addChild(myText);
        this.addChild(cartel);   
    }
}