class ElectricalAppliances{
    constructor (name, power, amperage, enable){
        this.name = name,
        this.power = power,
        this.amperage = amperage,
        this.enable = enable;
        if (this.enable == 0) {
            console.log(`${this.name} Appliances: ${this.power} W and ${this.amperage} A is disabled` )
        } else {
             console.log(`${this.name} Appliances: ${this.power} W and ${this.amperage} A is enabled` )
        }
    }
    powerElectrical () {
        if (this.enable == 0){
            return 0
        } else {
            return this.power;
        }
    }
}
    const light = new ElectricalAppliances('Lightbulb', 6, 1, 0);
    const phone = new ElectricalAppliances('Telephone', 10, 3, 1);

  const allPower = light.powerElectrical() + phone.powerElectrical();
  console.log ('All power in room is '+ allPower + ' W')