import { inject, Injectable } from '@angular/core';
import { FluidFormulationService } from './fluid-formulation.service';
import { DensifytingService } from './densifyting.service';

import { FluidPropertiesModel } from '../models/fluid_properties_model';
import { FluidFormulation } from '../models/fluid_formulation_model';
import { MFluid } from '../models/mfluid_model';

@Injectable({
  providedIn: 'root'
})
export class MassCalculationService {

  public WeigthtFluid1: number = 0;
  public fluid1Volume: number = 0;

  public WeigthtFluid2: number = 0;
  public fluid2Volume: number = 0;
  
  public WeigthtFluidFinal : number = 0;
  public fluidFinalVolume: number = 0;
  
  public fluidBaseWeigthtFluid: number = 0;
  public fluidBaseVolume: number = 0;

  public material: string = "";
  public poundsBag: number = 0;


  
  private formulationService: FluidFormulationService = inject (FluidFormulationService);
  private densi: DensifytingService = inject (DensifytingService);

  constructor() {}


  initDensifytingService(material:string){
    this.densi.initMaterial(material);
  }


  // Calculate the equivalent density of mixed fluids
  equivalentDensityOfMixFluids(fluids: Array<MFluid>): number {
    let operator = 0.0;
    let denominator = 0.0;
    if (fluids && fluids.length > 0) {
      for (const fluid of fluids) {
        operator += (fluid.getVolume() * fluid.getWeigtht());
        denominator += fluid.getVolume(); 
      }
    }
    return operator / denominator;
  }


  // Calculate lower weight with base fluid
  lowerWeightWithBaseFluid(fluid1: MFluid, fluid1F: MFluid, fluidBase2: MFluid): number {
    const operation1 =  fluid1.getWeigtht() * fluid1.getVolume();
    const operation2 =  fluid1F.getWeigtht() * fluid1.getVolume();
    const operation3 =  fluid1F.getWeigtht() - fluidBase2.getWeigtht();
    const operation4 = operation1 - operation2;
    const volumen2 = operation4 / operation3;
    return volumen2;
  }


  // Increase weight of fluid
  increaseWeightOfFluid(fluid: MFluid, finalFluid: MFluid, material: string, poundsBag: number): FluidFormulation {
    this.densi.initMaterial(material);
    const volumeOfDensifying = this.getVolumeOfDensifying(fluid, finalFluid);
    return this.getFormulationDensifying(fluid, finalFluid, poundsBag, volumeOfDensifying, false);
  }

  // Increase weight of fluid with fixed volume
  increaseWeightOfFluidVolumeFix(fluid: MFluid, finalFluid: MFluid, material: string, poundsBag: number): FluidFormulation {
    this.initDensifytingService(material);
    this.formulationService = new FluidFormulationService();
    const operation1 = (this.getWeigthtFluid(finalFluid)  - this.getWeigthtFluid(fluid))
    const volumeOfDensifying = (finalFluid.getVolume() * operation1 ) / this.densi.getPoundForGalon();
    return this.getFormulationDensifying(fluid, finalFluid, poundsBag, volumeOfDensifying, true);
  }

  // Get formulation densifying
  private getFormulationDensifying(fluid: MFluid, finalFluid: MFluid, poundsBag: number, volumeOfDensifying: number, isFix: boolean): FluidFormulation {
    this.formulationService = new FluidFormulationService();
    const formula = new FluidFormulation();
    const sxsBarrel = this.formulationService.sxsInOneBarrel(this.densi.getMaterialGe(), poundsBag);
    const sxs = volumeOfDensifying * sxsBarrel;
    if (isFix) {
      const volumeWithoutDensifying = finalFluid.getVolume() - volumeOfDensifying;
      formula.setVolumenFluidWithoutDensifying(volumeWithoutDensifying);
      formula.setTotalVolumen(finalFluid.getVolume());
    } else {
      const totalVolume = fluid.getVolume() + volumeOfDensifying;
      formula.setTotalVolumen(totalVolume);
    }
    formula.setSxsDensifying(sxs);
    formula.setVolDensifying(volumeOfDensifying);
    formula.setFluidDensity(this.getWeigthtFluid(finalFluid));
    return formula;
  }

  // Get volume of densifying
  getVolumeOfDensifying(fluid: MFluid, finalFluid: MFluid): number {
    const operation1 = (this.getWeigthtFluid(finalFluid) * fluid.getVolume()); 
    const operation2 = (this.getWeigthtFluid(fluid) * fluid.getVolume());
    const operation3 = (operation1 - operation2);
    const operation4 = (this.densi.getPoundForGalon() - this.getWeigthtFluid(finalFluid));
    const volumeOfDensifying = operation3 / operation4;
    return volumeOfDensifying;
  }
}
