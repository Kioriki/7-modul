function electricalAppliances(name, power, amperage, enable){
    this.name = name,
    this.power = power,
    this.amperage = amperage,
    this.enable = true
    }

    electricalAppliances.prototype.getEnable = function(name, power, amperage, enable){
        if (enable == 0) {
            console.log(`${this.name} Appliances: ${this.power} W and ${this.amperage} A is disabled` )
        } else {
            console.log(`${this.name} Appliances: ${this.power} W and ${this.amperage} A is enabled` )
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
  
  const light = new electricalAppliances('Lightbulb', 6, '0,093 A', 0);
  const phone = new electricalAppliances('Telephone', 10, '2,4 A', 1);
  
  light.getEnable ('Lightbulb', 6 , '0,093 A', 0)