import {bindable, customElement} from 'aurelia-framework';

//start-aurelia-decorators
@customElement('volcano-info')
//end-aurelia-decorators
export class VolcanoInfo {
  //start-aurelia-decorators
  @bindable locale;
  @bindable volcano_name;
  @bindable activity_level;
  @bindable visual;
  @bindable photo_;
  @bindable share_url;
  @bindable source;
  //end-aurelia-decorators
}
