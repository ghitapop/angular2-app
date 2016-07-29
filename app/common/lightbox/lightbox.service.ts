/**
 * Created by Ghita Pop on 7/30/2016.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class LightBoxService {
    constructor(){
    }

    getBoxes() {
        return [
            {title: 'test'},
            {title: 'test1'},
            {title: 'test'},
            {title: 'test1'}
        ];
    }
}