import { Injectable, signal } from '@angular/core';
import { FluidPropertiesModel } from '../models/fluid_properties_model';

@Injectable({
  providedIn: 'root'
})
export class ReologyService {

 
  private reologyParameter: FluidPropertiesModel = new FluidPropertiesModel();

  
 constructor() { }


  reologySignal = signal<FluidPropertiesModel>(new FluidPropertiesModel());


  setReology(reology: FluidPropertiesModel){
    this.reologySignal.set(reology);
    this.reologyParameter = this.reologySignal();
  }

  
  intConstructor(reology: FluidPropertiesModel): void {
    this.setReology(reology);
  }



  calculate(): FluidPropertiesModel {

    if (this.reologyParameter !== null && this.reologyParameter !== undefined && this.reologyParameter.getO600 != null) {
      const o600 = this.reologyParameter.getO600() ?? 0;
      const o300 = this.reologyParameter.getO300() ?? 0;
      const o6 = this.reologyParameter.getO6() ?? 0;
      const o3 = this.reologyParameter.getO3() ?? 0;
      
      this.aparentViscosityA(o600);
      this.plasticViscosity(o300, o600);
      this.yieldpoint(o300, o600);
      // this.nFlowRate(o300, o600);
      this.kConsistencyFactor(o300, this.nFlowRate(o300, o600));
      this.calculo_tau0(o3,o6);
    }
    return this.reologyParameter;
  }

  // aparentViscosity model equation A
  aparentViscosityA(o600: number): number {
    if (o600 === undefined) {
      this.errorPresent("aparentViscosityA");
      return 0;
    }
    const aVA = o600 / 2;
    this.reologyParameter.setAperentViscosity(aVA);
    return aVA;
  }

  // aparentViscosity model equation B
  aparentViscosityB(o300: number): number {
    if (o300 === undefined) {
      this.errorPresent("aparentViscosityB");
      return 0;
    }
    const vapB = (300 * o300) / 300;
    this.reologyParameter.setAperentViscosity(vapB);
    return vapB;
  }


  // Plastic Viscosity
  plasticViscosity(o300: number, o600: number): number {

    if (o300 === undefined || o600 === undefined) {
      this.errorPresent("plasticViscosity");
      return 0;
    }

    const pv = o600 - o300; // cps
    this.reologyParameter.setPlasticViscosity(pv);
    return pv;
  }

  // Yield point (Yp)
  yieldpoint(o300: number, o600: number): number {

    if (o300 === undefined || o600 === undefined) {
      this.errorPresent("yieldpoint");
      return 0;
    }
    const yp = 2 * o300 - o600;
    this.reologyParameter.setYieldPoint(yp);
    return yp;
  }

  // n Flow rate Herschel-Bulkley
  nFlowRateHerschelBulkley(o300: number, o600: number): number {

    if (o300 === undefined || o600 === undefined) {
      this.errorPresent("nFlowRateHerschelBulkley");
      return 0;
    }

    const value1 = o600 / o300;
    const n = this.logI(value1) / this.logI(value1);
    this.reologyParameter.setNFlowRateHerschelBulkley(n);
    return n;
  }

  // k Consistency Factor Herschel-Bulkley
  kConsistencyFactorHerschelBulkley(o3: number, o6: number, nFlowRate: number): number {
    let k: number = 0;
    try {
      k = (o6 - o3) / this.pow(6.0, nFlowRate);
      this.reologyParameter.setKConsistencyFactorHerschelBulkley(k);

    } catch (error) {
      this.errorPresent(`kConsistencyFactorHerschelBulkley the Error is: ${error as Error}`);
    } finally {
      return k;
    }
  }

  nFlowRate(o300: number, o600: number): number {
    let n: number = 0;
    try {
      const value1 = o600 / o300;
      n = 3.32 * this.logI(value1);
      this.reologyParameter.setNFlowRateHerschelBulkley(n);

    } catch (error) {
      this.errorPresent(`nFlowRate the Error is: ${error as Error}`);
    } finally {
      return n;
    }
  }

  kConsistencyFactor(o300: number, nFlowRate: number): number {
    let k: number = 0;
    try {
       k = o300 / this.pow(511.0, nFlowRate);
      this.reologyParameter.setKConsistencyFactorHerschelBulkley(k);

    } catch (error) {
      this.errorPresent(`kConsistencyFactorHerschelBulkley the Error is: ${error as Error}`);
    } finally {
      return k;
    }
  }

  // tau0 calculation
  calculo_tau0(o3: number, o6: number): number {

    let tau0: number = 0;
    try {
      tau0 = 2 * o6 - o3;
      this.reologyParameter.setTau0(tau0);
    
    } catch (error) {
      this.errorPresent(`calculo_tau0 the Error is: ${error as Error}`);
    } finally {
      return tau0;
    }
    
  }

  private logI(value: number): number {
    return Math.log10(value);
  }

  private pow(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }



  errorPresent(where: string): void {
    const identificator = "ReologyService: "
    console.error(`Error ocurre en: ${identificator} -> ${where}`);
  }

}

