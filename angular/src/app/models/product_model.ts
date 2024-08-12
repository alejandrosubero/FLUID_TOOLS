import { SystemConstant } from "./system_constant_model";


export class Product {
    private productId: number;
    private well: string;
    private name: string;
    private specificGravity: number; // ge
    private concentration: number; // ppg/bbl
    private packingWeight: number;
    private packingQuantity: number; // sxs or barrels
    private productVolumenGenerate: number;
    private inStore: number;
    private useOfStore: number;
    private isDensifyingMaterial: boolean;
    private isBaseMaterial: boolean;

    constructor();
   
    constructor(name?: string, specificGravity?: number, concentration?: number, packingWeight?: number, isDensifyingMaterial?: boolean, isBaseMaterial?: boolean) {   
        this.productId = 0;
        this.well = '';
        this.name = name || '';
        this.specificGravity = specificGravity || 0.0;
        this.concentration = concentration || 0.0;
        this.packingWeight = packingWeight || 0.0;
        this.packingQuantity = 0;
        this.productVolumenGenerate = 0.0;
        this.inStore = 0;
        this.useOfStore = 0;
        this.isDensifyingMaterial = isDensifyingMaterial || false;
        this.isBaseMaterial = isBaseMaterial || false;
    }

    getDensityInPoundForGallon(): number {
        return this.specificGravity * SystemConstant.WATER_DENSITY_PPS_FOR_GAL * 42;
    }

    getProductId(): number {
        return this.productId;
    }

    setProductId(productId: number): void {
        this.productId = productId;
    }

    getWell(): string {
        return this.well;
    }

    setWell(well: string): void {
        this.well = well;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getSpecificGravity(): number {
        return this.specificGravity;
    }

    setSpecificGravity(specificGravity: number): void {
        this.specificGravity = specificGravity;
    }

    getConcentration(): number {
        return this.concentration;
    }

    setConcentration(concentration: number): void {
        this.concentration = concentration;
    }

    getPackingWeight(): number {
        return this.packingWeight;
    }

    setPackingWeight(packingWeight: number): void {
        this.packingWeight = packingWeight;
    }

    getPackingQuantity(): number {
        return this.packingQuantity;
    }

    setPackingQuantity(packingQuantity: number): void {
        this.packingQuantity = packingQuantity;
    }

    getProductVolumenGenerate(): number {
        return this.productVolumenGenerate;
    }

    setProductVolumenGenerate(productVolumenGenerate: number): void {
        this.productVolumenGenerate = productVolumenGenerate;
    }

    getInStore(): number {
        return this.inStore;
    }

    setInStore(inStore: number): void {
        this.inStore = inStore;
    }

    getUseOfStore(): number {
        return this.useOfStore;
    }

    setUseOfStore(useOfStore: number): void {
        this.useOfStore = useOfStore;
    }

    getIsDensifyingMaterial(): boolean {
        return this.isDensifyingMaterial;
    }

    setDensifyingMaterial(densifyingMaterial: boolean): void {
        this.isDensifyingMaterial = densifyingMaterial;
    }

    getIsBaseMaterial(): boolean {
        return this.isBaseMaterial;
    }

    setBaseMaterial(baseMaterial: boolean): void {
        this.isBaseMaterial = baseMaterial;
    }
}
