import { inject, Injectable } from '@angular/core';
import { FluidFormulationService } from './fluid-formulation.service';
import { SystemConstant } from '../models/system_constant_model';

@Injectable({
  providedIn: 'root'
})
export class DensifytingService {

    private material?: string;
    private materialGe?: number;
    private fluidFormulationService: FluidFormulationService = inject(FluidFormulationService);

    
    constructor(){}


    public initMaterial(material: string, materialGe: number): void {
        this.material = material;
        this.materialGe = materialGe;
       
        if (material) {
            this.setGe();
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

    getPoundForGalon(): number | undefined {
        return this.materialGe !== undefined ? this.fluidFormulationService.getPoundForGalon(this.materialGe) : undefined;
    }

    getPoundForBarrel(): number | undefined {
        return this.materialGe !== undefined ? this.fluidFormulationService.getPoundForBarrel(this.materialGe) : undefined;
    }

    getBagsInBarrel(bagPounds: number): number | undefined {
        return this.materialGe !== undefined ? this.fluidFormulationService.getBagsInBarrel(bagPounds, this.materialGe) : undefined;
    }

    getMaterial(): string | undefined {
        return this.material;
    }

    setMaterial(material: string): void {
        this.material = material;
        this.setGe();
    }

    getMaterialGe(): number | undefined {
        return this.materialGe;
    }

    setMaterialGe(materialGe: number): void {
        this.materialGe = materialGe;
    }
}

