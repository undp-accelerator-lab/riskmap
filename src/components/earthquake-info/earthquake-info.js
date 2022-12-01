import {bindable, customElement} from 'aurelia-framework';

//start-aurelia-decorators
@customElement('earthquake-info')
//end-aurelia-decorators
export class EarthQuakeInfo {
  //start-aurelia-decorators
  @bindable locale;
  @bindable zone;
  @bindable magnitude;
  @bindable feltarea;
  @bindable last_updated;
  //end-aurelia-decorators
}
