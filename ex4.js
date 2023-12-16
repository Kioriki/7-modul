function electricalAppliances(name, power, amperage, enable){
        this.name = name,
        this.power = power,
        this.amperage = amperage,
        this.enable = enable
    }
    
    electricalAppliances.prototype.getEnable = function(name, power, amperage, enable){
        if (this.enable == 0) {
            console.log(`${this.name} Appliances: ${this.power} W and ${this.amperage} A is disabled` )
            return {
            power: 0,
            amperage: 0
            }
        } else {
            console.log(`${this.name} Appliances: ${this.power} W and ${this.amperage} A is enabled` )
            return {
            power: this.power,
            amperage: this.amperage
            }
        }
    }
    
    function lightBulb (name, power, amperage, enable){
        this.name = name,
        this.power= power,
        this.amperage = amperage,
        this.enable = enable;
    }
    lightBulb.Prototype = new electricalAppliances()
        function telephone(name, power, amperage, enable){
        this.name = name,
        this.power = power,
        this.amperage = amperage,
        this.enable = enable;
    }
    telephone.Prototype = new electricalAppliances()
    
    const light = new electricalAppliances('Lightbulb', 6, 1, 0);
    const phone = new electricalAppliances('Telephone', 10, 3, 1);
    
    function showResult(light, phone){
        let allPower = 0;
        let allAmperage = 0;
        
        const lightRes = light.getEnable();
        const phoneRes = phone.getEnable();
        
        allPower += lightRes.power+phoneRes.power;
        allAmperage += allAmperage+lightRes.amperage+phoneRes.amperage;
        
        console.log(`ALL Appliances Power: ${allPower} A` );
        console.log(`ALL Appliances Amperage: ${allAmperage} W`);
        
    }
    
    showResult(light, phone);