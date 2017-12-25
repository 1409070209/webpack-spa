class MoreThanHalfInTheArray {
    constructor (arr){
        this.array = arr;
    }
    solve(){
        if (this.array === null || this.array.length === 0) {
            return null;
        }
        let last = this.array[0];
        let time = 1;
        this.array.forEach((item , index)=>{
            if (index === 0) {
                return null;
            }
            if (last === item) {
                time++;
            }else if (time > 0) {
                time--;
            }else {
                time = 0;
                last = item
            }
        });
        return last
    }
}

export default MoreThanHalfInTheArray;