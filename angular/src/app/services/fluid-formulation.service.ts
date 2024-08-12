import { Injectable } from '@angular/core';
import { SystemConstant } from '../models/system_constant_model';
import { FluidFormulation } from '../models/fluid_formulation_model';

@Injectable({
  providedIn: 'root'
})
export class FluidFormulationService {

    private materialGe: number = 0;

    constructor() {}

    getMaterialGe(): number {
        return this.materialGe;
    }

    setMaterialGe(materialGe: number): void {
        this.materialGe = materialGe;
    }

    getPoundForGalon(materialGe: number): number {
        this.materialGe = materialGe;
        return this.poundForGalon();
    }

    getPoundForBarrel(materialGe: number): number {
        this.materialGe = materialGe;
        return this.poundForGalon() * 42;
    }

    getBagsInBarrel(bagPounds: number, materialGe: number): number {
        return this.getPoundForBarrel(materialGe) / bagPounds;
    }

    private poundForGalon(): number {
        return this.materialGe * SystemConstant.WATER_DENSITY_PPS_FOR_GAL;
    }

    /**
     * @return Bag of material for concentration
     */
    sxs(volumen: number, concentration: number, poundsBagMaterial: number): number {
        return (volumen * concentration) / poundsBagMaterial;
    }

    /***
     * @return sxs In One Barrel
     */
    sxsInOneBarrel(materialGe: number, poundsBagMaterial: number): number {
        return this.getPoundForBarrel(materialGe) / poundsBagMaterial;
    }

    volumenOfSxsMaterial(volumen: number, concentration: number, poundsBagMaterial: number, materialGe: number): number {
        const sxs = this.sxs(volumen, concentration, poundsBagMaterial);
        const sxsInOneBarrel = this.sxsInOneBarrel(materialGe, poundsBagMaterial);
        return sxs / sxsInOneBarrel;
    }

    /**
     * @param formulation FluidFormulation one barrel of lab (350 ml or 1bbl) for Pilot Test
     * @return FluidFormulation
     */
    barrelPilotTest(formulation: FluidFormulation): FluidFormulation {
        let volProduct = 0.0;
        let densityTotal = 0.0;

        for (let product of formulation.getProducts()) {

            if (product && product.getConcentration() > 0.0 && !product.getIsBaseMaterial() && !product.getIsDensifyingMaterial()) {
                const librasForBarrel = this.getPoundForBarrel(product.getSpecificGravity());
                const concentration = product.getConcentration();
                const vol = concentration / librasForBarrel;
                product.setProductVolumenGenerate(vol);
                volProduct += vol;
                densityTotal += concentration;
            }

            if (product.getIsBaseMaterial()) {
                const librasForBarrel = this.getPoundForBarrel(product.getSpecificGravity());
                densityTotal += librasForBarrel;
            }

            if (product.getIsDensifyingMaterial() && product.getConcentration() > 0.0) {
                const librasForBarrel = this.getPoundForBarrel(product.getSpecificGravity());
                const concentration = product.getConcentration();
                const vol = concentration / librasForBarrel;
                product.setProductVolumenGenerate(vol);
                formulation.setVolDensifying(vol);
                volProduct += vol;
                densityTotal += concentration;
            }
        }

        const totalVolumenBase = 1 - volProduct;
        volProduct += totalVolumenBase;
        const density = (densityTotal / volProduct) / 42; // [lb/gal]
        formulation.setVolumenBaseFluid(totalVolumenBase);
        formulation.setFluidDensity(density);

        return formulation;
    }

    /**
     * @param fluidDensity Fluid density
     * @param longitudEmpty Empty length
     * @param idPipe Pipe ID
     * @param volPill Volume Pill
     * @return Heavy Pill Density
     */
    calculateHeavyPill(fluidDensity: number, longitudEmpty: number, idPipe: number, volPill: number): number {
        const pillDensity = ((fluidDensity * longitudEmpty * (Math.pow(idPipe, 2) / 1029.4)) / volPill) + fluidDensity;
        return pillDensity;
    }
}

