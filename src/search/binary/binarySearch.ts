import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {
    let result = -2;
    let lowestPoint:number = 0;
    let highestPoint:number = -1;

    while (result === -2) {
        let middlePoint:number = Math.floor((lowestPoint + highestPoint) / 2);
        if (items[middlePoint] === item) {

            result = middlePoint
            
        }

        else if (lowestPoint === highestPoint) {
            result = NO_MATCH;

        }
        else if (item < items[middlePoint]){
            if (middlePoint == 0){
                result = NO_MATCH;
            }
        highestPoint = middlePoint - 1;
        }
        else if (item > items[middlePoint]){
            if (middlePoint == 0){
                result = NO_MATCH

            }
        lowestPoint = middlePoint + 1;

        }
     
    }


    return result;
}

export default binarySearch;

