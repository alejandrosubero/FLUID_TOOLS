import { inject, Injectable } from '@angular/core';
import { FluidFormulationService } from './fluid-formulation.service';
import { DensifytingService } from './densifyting.service';
import { Fluid } from '../models/fluid_model';
import { FluidPropertiesModel } from '../models/fluid_properties_model';

@Injectable({
  providedIn: 'root'
})
export class MassService {

  
  private formulationService: FluidFormulationService = inject (FluidFormulationService);
  private densi: DensifytingService = inject (DensifytingService);

  constructor() {}

  // Calculate the equivalent density of mixed fluids
  equivalentDensityOfMixFluids(fluids:  Array<Fluid>): number {
    let operator = 0.0;
    let denominator = 0.0;

    if (fluids && fluids.length > 0) {
      for (const fluid of fluids) {

        const fluidProperties = fluid.getActiveFluidProperties();
        const fluidMudWeight: number = fluidProperties?.getMudWeight() ?? 0;
        operator += (fluid.getVolume() * fluidMudWeight);
        denominator += fluid.getVolume(); 
      }
    }
    return operator / denominator;
  }


  // Calculate lower weight with base fluid
  lowerWeightWithBaseFluid(fluid1: Fluid, fluid1F: Fluid, fluidBase2: Fluid): number {
    const operation1 =  (this.getWeigthtFluid(fluid1) * fluid1.getVolume());
    const operation2 =  (this.getWeigthtFluid(fluid1F) * fluid1.getVolume());
    const operation3 = (this.getWeigthtFluid(fluid1F) - this.getWeigthtFluid(fluidBase2));
    const operation4 = operation1 - operation2;
    const volumen2 = operation4 / operation3;
    return volumen2;
  }

getWeigthtFluid(fluid: Fluid): number{
  const fluidProperties = fluid.getActiveFluidProperties();
  const fluidMudWeight: number = fluidProperties?.getMudWeight() ?? 0;
  return fluidMudWeight
}


  // Increase weight of fluid
  increaseWeightOfFluid(fluid: Fluid, finalFluid: Fluid, material: string, poundsBag: number): FluidFormulation {
    this.densi.initMaterial(material);
    const volumeOfDensifying = this.getVolumeOfDensifying(fluid, finalFluid);

    return this.getFormulationDensifying(fluid, finalFluid, poundsBag, volumeOfDensifying, false);
  }

  // Increase weight of fluid with fixed volume
  increaseWeightOfFluidVolumeFix(fluid: Fluid, finalFluid: Fluid, material: string, poundsBag: number): FluidFormulation {
    this.densi = new DensifyingService(material);
    this.formulationService = new FluidFormulationService();

    const volumeOfDensifying =
      (finalFluid.volume * (finalFluid.activeFluidProperties.mudWeight - fluid.activeFluidProperties.mudWeight)) /
      this.densi.getPoundForGallon();

    return this.getFormulationDensifying(fluid, finalFluid, poundsBag, volumeOfDensifying, true);
  }

  // Get formulation densifying
  private getFormulationDensifying(fluid: Fluid, finalFluid: Fluid, poundsBag: number, volumeOfDensifying: number, isFix: boolean): FluidFormulation {
    this.formulationService = new FluidFormulationService();
    const formula = new FluidFormulation();
    const sxsBarrel = this.formulationService.sxsInOneBarrel(this.densi.getMaterialGe(), poundsBag);
    const sxs = volumeOfDensifying * sxsBarrel;

    if (isFix) {
      const volumeWithoutDensifying = finalFluid.volume - volumeOfDensifying;
      formula.setVolumeFluidWithoutDensifying(volumeWithoutDensifying);
      formula.setTotalVolume(finalFluid.volume);
    } else {
      const totalVolume = fluid.volume + volumeOfDensifying;
      formula.setTotalVolume(totalVolume);
    }

    formula.setSxsDensifying(sxs);
    formula.setVolumeDensifying(volumeOfDensifying);
    formula.setFluidDensity(finalFluid.activeFluidProperties.mudWeight);

    return formula;
  }

  // Get volume of densifying
  getVolumeOfDensifying(fluid: Fluid, finalFluid: Fluid): number {
    const v2 =
      ((finalFluid.activeFluidProperties.mudWeight * fluid.volume) -
        (fluid.activeFluidProperties.mudWeight * fluid.volume)) /
      (this.densi.getPoundForGallon() - finalFluid.activeFluidProperties.mudWeight);

    return v2;
  }
}
