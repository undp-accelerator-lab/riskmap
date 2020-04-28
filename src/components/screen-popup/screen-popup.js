import { bindable, customElement } from 'aurelia-framework';
import { inject, observable } from 'aurelia-framework';
import { Config } from 'resources/config';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

//start-aurelia-decorators
@customElement('screen-popup')
@inject(Config)

//end-aurelia-decorators
export class ScreenPopup {
  //start-aurelia-decorators
  @bindable
  helper;
  @bindable cities;
  @bindable locale;
  @bindable selcity;
  @bindable switchRegion;
  @bindable termscontents;
  @bindable initializetab;
  //end-aurelia-decorators
  @observable query;
  constructor(Config) {
    this.seltab = 'u_a';
    this.config = Config.map;
    this.configData = Config;
    this.searchProvider = new OpenStreetMapProvider();

    $(document).click( function() {
      $('#dropdown_city').hide();
    });

    $('#screen').click( function(e) {
      e.stopPropagation();
    });
    this.searchResult = Object.keys(this.config.sub_regions);
    this.popupResult = Object.keys(this.config.sub_regions);
    this.languages = this.config.supported_languages;
    this.popupText = '';
  }

  switchTab(name) {
    this.seltab = name;
    $('.termsTabs').removeClass('active');
    $('#tab-' + name).addClass('active');
  }

  isCitySupported(querycity) {
    return querycity in this.config.instance_regions;
  }

  queryChanged(newval, oldval) {
    $('#dropdown_city').on('click', function() {
      $(this).toggleClass('clicked');
    });
    this.searchText = newval.toLowerCase();
    if (this.searchResult.length > 3) {
      $('#dropdown_city').show();
    } else {
      $('#dropdown_city').hide();
    }
    // const map = Object.keys(this.config.sub_regions);
    // let newObj = map.filter(value => {
    //   return value.indexOf(newval.toLowerCase()) !== -1 ? value : null;
    // });

    this.searchIndonesiaOSM(newval.toLowerCase());
  }

  popupQueryChanged() {
    $('#popupResults').on('click', function() {
      $(this).toggleClass('clicked');
    });
    this.searchIndonesiaOSM(this.popupText.toLowerCase());
    if (this.popupResult.length > 0) {
      $('#popupResults').show();
    } else {
      console.log(this.popupResult);
      $('#popupResults').hide();
    }
  }

  searchIndonesiaOSM(query) {
    query = query + ', indonesia';
    this.searchProvider.search({ query })
      .then((results) => {
        this.searchResult = results;
        this.popupResult = results;
      });
  }

  resizeSidePane() {
    $('.searchDropDown').css({
      'height': ($(window).height() - $('#dropdown_city').height()) + 'px'
    });
  }

  switchCity(city) {
    this.changeCity(city, true);
    $('#screen').css('display', 'none');

  }

  closePopup() {
    $('#termsPopup').hide();
  }

  closeStartPopup() {
    $('#startPopup').hide();
  }

  openPopup(name) {
    this.seltab = name;
    $('#termsPopup').show();
  }

  attached() {
    $('.termsTabs').ready(() => {
      //selection for termsTabs switches
      if (this.initializetab) {
        this.switchTab(this.initializetab);
      }
    });
  }
}
