import { Injectable, signal } from '@angular/core';
import { FluidPropertiesModel } from '../models/fluid_properties_model';

@Injectable({
  providedIn: 'root'
})
export class FluidService {

  constructor() { }

  fluidsSignal = signal<Array<FluidPropertiesModel>>(new Array<FluidPropertiesModel>());
  fluidProperties : Array<FluidPropertiesModel> = new Array<FluidPropertiesModel>();


  setFluidsSignal(list:Array<FluidPropertiesModel> ){
    this.fluidsSignal.set(list);  
  }

  addFluidProperties(fluidPropertiesOne: FluidPropertiesModel){
      this.fluidProperties =  this.fluidsSignal();
      this.fluidProperties.push(fluidPropertiesOne);
      this.setFluidsSignal(this.fluidProperties);
  }

}
