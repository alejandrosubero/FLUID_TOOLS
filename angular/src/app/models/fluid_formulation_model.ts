import { Product } from "./product_model";


export class FluidFormulation {
    private volumenBaseFluid: number;
    private volumenFluidWithoutDensifying: number;
    private volumenOfAdditives: number;
    private volDensifying: number;
    private sxsDensifying: number;
    private totalVolumen: number;
    private fluidDensity: number;
    private products: Product[];

    constructor() {
        this.volumenBaseFluid = 0;
        this.volumenFluidWithoutDensifying = 0;
        this.volumenOfAdditives = 0;
        this.volDensifying = 0;
        this.sxsDensifying = 0;
        this.totalVolumen = 0;
        this.fluidDensity = 0;
        this.products = [];
    }

    getVolumenBaseFluid(): number {
        return this.volumenBaseFluid;
    }

    setVolumenBaseFluid(volumenBaseFluid: number): void {
        this.volumenBaseFluid = volumenBaseFluid;
    }

    getVolDensifying(): number {
        return this.volDensifying;
    }

    setVolDensifying(volDensifying: number): void {
        this.volDensifying = volDensifying;
    }

    getSxsDensifying(): number {
        return this.sxsDensifying;
    }

    setSxsDensifying(sxsDensifying: number): void {
        this.sxsDensifying = sxsDensifying;
    }

    getTotalVolumen(): number {
        return this.totalVolumen;
    }

    setTotalVolumen(totalVolumen: number): void {
        this.totalVolumen = totalVolumen;
    }

    getProducts(): Product[] {
        return this.products;
    }

    setProducts(products: Product[]): void {
        this.products = products;
    }

    getFluidDensity(): number {
        return this.fluidDensity;
    }

    setFluidDensity(fluidDensity: number): void {
        this.fluidDensity = fluidDensity;
    }

    getVolumenOfAdditives(): number {
        return this.volumenOfAdditives;
    }

    setVolumenOfAdditives(volumenOfAdditives: number): void {
        this.volumenOfAdditives = volumenOfAdditives;
    }

    getVolumenFluidWithoutDensifying(): number {
        return this.volumenFluidWithoutDensifying;
    }

    setVolumenFluidWithoutDensifying(volumenFluidWithoutDensifying: number): void {
        this.volumenFluidWithoutDensifying = volumenFluidWithoutDensifying;
    }
}
