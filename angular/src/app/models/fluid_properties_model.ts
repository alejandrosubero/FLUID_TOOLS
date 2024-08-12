export class FluidPropertiesModel {
    private idFluidPropertiesModel?: number;
    private dateStarted?: Date;
    private name?: string;
    private description?: string;
    private temparature?: string;
    private typeBase?: string;
    private isWaterBase?: boolean;
    private measureDepth?: number;
    private trueVerticalDepthTVD?: number;
    private isActiveFluid?: boolean;
    private mudWeight?: number; // fluid density (df) now MW
    private particulesDensity?: number; // dp particles Density
    private particleSize?: number; // particle size
    private o600?: number;
    private o300?: number;
    private o200?: number;
    private o100?: number;
    private o6?: number;
    private o3?: number;
    private gel10s?: number;
    private gel10m?: number;
    private gel30m?: number;
    // calculated properties
    private plasticViscosity?: number; // plastic Viscosity
    private yieldPoint?: number; // yield point
    private tau0?: number; // tau0
    private nFlowRateHerschelBulkley?: number; // n Flow rate Herschel-Bulkley
    private kConsistencyFactorHerschelBulkley?: number; // k Consistency factor Herschel-Bulkley
    private settlingSpeedVs?: number; // settling speed
    private aperentViscosity?: number; // apparent viscosity
    private efectiveViscosity?: number; // effective viscosity
    // retort lecture
   private  volWaterRetor?: number;
   private  volOilRetor?: number;
   private  volSolidRetor?: number;
   private  factionWater?: number;
   private  factionOil?: number;
   private  factionsolid?: number;
   private  asg?: number; // average specific gravity (ASG)
   private  lowSolidLGS?: number; // low solid
   private  highSolidHGS?: number; // High solid
    // Methylene blue capacity
    private methyleneBlueMl?: number;
    private mudVolSampleMl?: number;
    private mbt?: number; // Methylene blue capacity
    private bentoniteEquivalentLbBl?: number;
    private pm?: number;
    private pf?: number;
    private mf?: number;
    private chlorideCL?: number; // Chloride
    private calExess?: number;
    private enbudoViscosity?: number;

    constructor();

    constructor(
        measureDepth?: number,
        isWaterBase?: boolean,
        mudWeight?: number,
        o600?: number,
        o300?: number,
        o200?: number,
        o100?: number,
        o6?: number,
        o3?: number,
        gel10s?: number,
        gel10m?: number,
        gel30m?: number,
        volWaterRetor?: number,
        volOilRetor?: number,
        volSolidRetor?: number,
        methyleneBlueMl?: number,
        mudVolSampleMl?: number,
        mbt?: number,
        pm?: number,
        pf?: number,
        mf?: number,
        chlorideCL?: number
    ) {
        this.measureDepth = measureDepth;
        this.isWaterBase = isWaterBase;
        this.mudWeight = mudWeight;
        this.o600 = o600;
        this.o300 = o300;
        this.o200 = o200;
        this.o100 = o100;
        this.o6 = o6;
        this.o3 = o3;
        this.gel10s = gel10s;
        this.gel10m = gel10m;
        this.gel30m = gel30m;
        this.volWaterRetor = volWaterRetor;
        this.volOilRetor = volOilRetor;
        this.volSolidRetor = volSolidRetor;
        this.methyleneBlueMl = methyleneBlueMl;
        this.mudVolSampleMl = mudVolSampleMl;
        this.mbt = mbt;
        this.pm = pm;
        this.pf = pf;
        this.mf = mf;
        this.chlorideCL = chlorideCL;
        this.dateStarted = new Date();
    }

    // Getters
    getIdFluidPropertiesModel(): number | undefined {
        return this.idFluidPropertiesModel;
    }

    getDateStarted(): Date | undefined {
        return this.dateStarted;
    }

    getName(): string | undefined {
        return this.name;
    }

    getDescription(): string | undefined {
        return this.description;
    }

    getTemparature(): string | undefined {
        return this.temparature;
    }

    getTypeBase(): string | undefined {
        return this.typeBase;
    }

    getWaterBase(): boolean | undefined {
        return this.isWaterBase;
    }

    getMeasureDepth(): number | undefined {
        return this.measureDepth;
    }

    getTrueVerticalDepthTVD(): number | undefined {
        return this.trueVerticalDepthTVD;
    }

    getActiveFluid(): boolean | undefined {
        return this.isActiveFluid;
    }

    getMudWeight(): number | undefined {
        return this.mudWeight;
    }

    getParticulesDensity(): number | undefined {
        return this.particulesDensity;
    }

    getParticleSize(): number | undefined {
        return this.particleSize;
    }

    getO600(): number | undefined {
        return this.o600;
    }

    getO300(): number | undefined {
        return this.o300;
    }

    getO200(): number | undefined {
        return this.o200;
    }

    getO100(): number | undefined {
        return this.o100;
    }

    getO6(): number | undefined {
        return this.o6;
    }

    getO3(): number | undefined {
        return this.o3;
    }

    getGel10s(): number | undefined {
        return this.gel10s;
    }

    getGel10m(): number | undefined {
        return this.gel10m;
    }

    getGel30m(): number | undefined {
        return this.gel30m;
    }

    getPlasticViscosity(): number | undefined {
        return this.plasticViscosity;
    }

    getYieldPoint(): number | undefined {
        return this.yieldPoint;
    }

    getTau0(): number | undefined {
        return this.tau0;
    }

    getNFlowRateHerschelBulkley(): number | undefined {
        return this.nFlowRateHerschelBulkley;
    }

    getKConsistencyFactorHerschelBulkley(): number | undefined {
        return this.kConsistencyFactorHerschelBulkley;
    }

    getSettlingSpeedVs(): number | undefined {
        return this.settlingSpeedVs;
    }

    getAperentViscosity(): number | undefined {
        return this.aperentViscosity;
    }

    getEfectiveViscosity(): number | undefined {
        return this.efectiveViscosity;
    }

    getVolWaterRetor(): number | undefined {
        return this.volWaterRetor;
    }

    getVolOilRetor(): number | undefined {
        return this.volOilRetor;
    }

    getVolSolidRetor(): number | undefined {
        return this.volSolidRetor;
    }

    getFactionWater(): number | undefined {
        return this.factionWater;
    }

    getFactionOil(): number | undefined {
        return this.factionOil;
    }

    getFactionsolid(): number | undefined {
        return this.factionsolid;
    }

    getAsg(): number | undefined {
        return this.asg;
    }

    getLowSolidLGS(): number | undefined {
        return this.lowSolidLGS;
    }

    getHighSolidHGS(): number | undefined {
        return this.highSolidHGS;
    }

    getMethyleneBlueMl(): number | undefined {
        return this.methyleneBlueMl;
    }

    getMudVolSampleMl(): number | undefined {
        return this.mudVolSampleMl;
    }

    getMbt(): number | undefined {
        return this.mbt;
    }

    getBentoniteEquivalentLbBl(): number | undefined {
        return this.bentoniteEquivalentLbBl;
    }

    getPm(): number | undefined {
        return this.pm;
    }

    getPf(): number | undefined {
        return this.pf;
    }

    getMf(): number | undefined {
        return this.mf;
    }

    getChlorideCL(): number | undefined {
        return this.chlorideCL;
    }

    getCalExess(): number | undefined {
        return this.calExess;
    }

    getEnbudoViscosity(): number | undefined {
        return this.enbudoViscosity;
    }

    // Setters
    setIdFluidPropertiesModel(id: number): void {
        this.idFluidPropertiesModel = id;
    }

    setDateStarted(date: Date): void {
        this.dateStarted = date;
    }

    setName(name: string): void {
        this.name = name;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    setTemparature(temparature: string): void {
        this.temparature = temparature;
    }

    setTypeBase(typeBase: string): void {
        this.typeBase = typeBase;
    }

    setWaterBase(isWaterBase: boolean): void {
        this.isWaterBase = isWaterBase;
    }

    setMeasureDepth(measureDepth: number): void {
        this.measureDepth = measureDepth;
    }

    setTrueVerticalDepthTVD(trueVerticalDepthTVD: number): void {
        this.trueVerticalDepthTVD = trueVerticalDepthTVD;
    }

    setActiveFluid(isActiveFluid: boolean): void {
        this.isActiveFluid = isActiveFluid;
    }

    setMudWeight(mudWeight: number): void {
        this.mudWeight = mudWeight;
    }

    setParticulesDensity(particulesDensity: number): void {
        this.particulesDensity = particulesDensity;
    }

    setParticleSize(particleSize: number): void {
        this.particleSize = particleSize;
    }

    setO600(o600: number): void {
        this.o600 = o600;
    }

    setO300(o300: number): void {
        this.o300 = o300;
    }

    setO200(o200: number): void {
        this.o200 = o200;
    }

    setO100(o100: number): void {
        this.o100 = o100;
    }

    setO6(o6: number): void {
        this.o6 = o6;
    }

    setO3(o3: number): void {
        this.o3 = o3;
    }

    setGel10s(gel10s: number): void {
        this.gel10s = gel10s;
    }

    setGel10m(gel10m: number): void {
        this.gel10m = gel10m;
    }

    setGel30m(gel30m: number): void {
        this.gel30m = gel30m;
    }

    setPlasticViscosity(plasticViscosity: number): void {
        this.plasticViscosity = plasticViscosity;
    }

    setYieldPoint(yieldPoint: number): void {
        this.yieldPoint = yieldPoint;
    }

    setTau0(tau0: number): void {
        this.tau0 = tau0;
    }

    setNFlowRateHerschelBulkley(nFlowRateHerschelBulkley: number): void {
        this.nFlowRateHerschelBulkley = nFlowRateHerschelBulkley;
    }

    setKConsistencyFactorHerschelBulkley(kConsistencyFactorHerschelBulkley: number): void {
        this.kConsistencyFactorHerschelBulkley = kConsistencyFactorHerschelBulkley;
    }

    setSettlingSpeedVs(settlingSpeedVs: number): void {
        this.settlingSpeedVs = settlingSpeedVs;
    }

    setAperentViscosity(aperentViscosity: number): void {
        this.aperentViscosity = aperentViscosity;
    }

    setEfectiveViscosity(efectiveViscosity: number): void {
        this.efectiveViscosity = efectiveViscosity;
    }

    setVolWaterRetor(volWaterRetor: number): void {
        this.volWaterRetor = volWaterRetor;
    }

    setVolOilRetor(volOilRetor: number): void {
        this.volOilRetor = volOilRetor;
    }

    setVolSolidRetor(volSolidRetor: number): void {
        this.volSolidRetor = volSolidRetor;
    }

    setFactionWater(factionWater: number): void {
        this.factionWater = factionWater;
    }

    setFactionOil(factionOil: number): void {
        this.factionOil = factionOil;
    }

    setFactionsolid(factionsolid: number): void {
        this.factionsolid = factionsolid;
    }

    setAsg(asg: number): void {
        this.asg = asg;
    }

    setLowSolidLGS(lowSolidLGS: number): void {
        this.lowSolidLGS = lowSolidLGS;
    }

    setHighSolidHGS(highSolidHGS: number): void {
        this.highSolidHGS = highSolidHGS;
    }

    setMethyleneBlueMl(methyleneBlueMl: number): void {
        this.methyleneBlueMl = methyleneBlueMl;
    }

    setMudVolSampleMl(mudVolSampleMl: number): void {
        this.mudVolSampleMl = mudVolSampleMl;
    }

    setMbt(mbt: number): void {
        this.mbt = mbt;
    }

    setBentoniteEquivalentLbBl(bentoniteEquivalentLbBl: number): void {
        this.bentoniteEquivalentLbBl = bentoniteEquivalentLbBl;
    }

    setPm(pm: number): void {
        this.pm = pm;
    }

    setPf(pf: number): void {
        this.pf = pf;
    }

    setMf(mf: number): void {
        this.mf = mf;
    }

    setChlorideCL(chlorideCL: number): void {
        this.chlorideCL = chlorideCL;
    }

    setCalExess(calExess: number): void {
        this.calExess = calExess;
    }

    setEnbudoViscosity(enbudoViscosity: number): void {
        this.enbudoViscosity = enbudoViscosity;
    }
}
