export class MFluid {

    private weigtht: number;
    private volume: number;

    public getWeigtht(): number {
        return this.weigtht;
    }

    public setWeigtht(weigtht: number): void {
        this.weigtht = weigtht;
    }

    public getVolume(): number {
        return this.volume;
    }

    public setVolume(volume: number): void {
        this.volume = volume;
    }


    constructor(){
        this.weigtht = 0;
        this.volume = 0;
    }

    

}