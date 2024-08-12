import { FluidPropertiesModel } from "./fluid_properties_model";


export class Fluid {

    private volume: number;
    private fluidProperties: Array<FluidPropertiesModel> = new Array<FluidPropertiesModel>();
    private selectFluidProperties: FluidPropertiesModel = new FluidPropertiesModel();

    constructor() {
        this.volume = 0;
    }


    
    getActiveFluidProperties(): FluidPropertiesModel | null {
        this.fluidProperties.forEach(fluidPropertiesModel => {
            if (fluidPropertiesModel.getActiveFluid()) {
                this.setActiveFluidProperties(fluidPropertiesModel);
            }
        });
        return this.getActiveFluid();
    }

    setActiveFluidProperties(fluid: FluidPropertiesModel): void {
        this.selectFluidProperties = fluid;
    }

    getActiveFluid(): FluidPropertiesModel | null {
        return this.selectFluidProperties;
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(volume: number): void {
        this.volume = volume;
    }

    getFluidProperties(): FluidPropertiesModel[] {
        return this.fluidProperties;
    }

    setFluidProperties(fluidProperties: FluidPropertiesModel[]): void {
        this.fluidProperties = fluidProperties;
    }
}
