import { inject, Injectable } from '@angular/core';
import { FluidFormulationService } from './fluid-formulation.service';
import { SystemConstant } from '../models/system_constant_model';

@Injectable({
  providedIn: 'root'
})
export class DensifytingService {

    private material: string = "";
    private materialGe: number = 0;
    private fluidFormulationService: FluidFormulationService = inject(FluidFormulationService);

    
    constructor(){}


    public initMaterial(material?: string, materialGe?: number): void {

        if (material !== undefined && material !== null){
            this.material = material;

            if (material) {
                this.setGe();
            }
        }

        if (materialGe !== undefined && materialGe !== null){
            this.materialGe = materialGe;
        }
    }


    private setGe(): void {
        if (this.material === SystemConstant.CARBONATE) {
            this.materialGe = SystemConstant.CARBONATE_GE;
        } else if (this.material === SystemConstant.BARYTE) {
            this.materialGe = SystemConstant.BARYTE_GE;
        } else if (this.material === SystemConstant.IRON_OXIDE) {
            this.materialGe = SystemConstant.IRON_OXIDE_GE;
        } else if (this.material === SystemConstant.GALENA) {
            this.materialGe = SystemConstant.GALENA_GE;
        } else if (this.material === SystemConstant.DRILING_SOLIDS) {
            this.materialGe = SystemConstant.DRILING_SOLIDS_GE;
        }
    }

    getPoundForGalon(): number  {
        return this.materialGe !== undefined ? this.fluidFormulationService.getPoundForGalon(this.materialGe) : 0;
    }

    getPoundForBarrel(): number  {
        return this.materialGe !== undefined ? this.fluidFormulationService.getPoundForBarrel(this.materialGe) : 0;
    }

    getBagsInBarrel(bagPounds: number): number  {
        return this.materialGe !== undefined ? this.fluidFormulationService.getBagsInBarrel(bagPounds, this.materialGe) : 0;
    }

    getMaterial(): string  {
        return this.material;
    }

    setMaterial(material: string): void {
        this.material = material;
        this.setGe();
    }

    getMaterialGe(): number  {
        return this.materialGe;
    }

    setMaterialGe(materialGe: number): void {
        this.materialGe = materialGe;
    }
}

