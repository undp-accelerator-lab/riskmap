import { bindable, customElement, demoIntercept } from 'aurelia-framework';
import { inject, observable } from 'aurelia-framework';
import { Config } from 'resources/config';

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

    $(document).click( function(e) {
      console.log(e.target.id);
      console.log(window.innerWidth);
      if(e.target.id === 'search_icon' && window.innerWidth < 500){
        $('#search_city_input').focus();
        
      }
      $('#popupResults').hide();
      $('#dropdown_city').hide();
    });

    $('#screen').click( function(e) {
      e.stopPropagation();
    });

    $('#search_city_input').on('focus', function() {
      console.log('uououo');
        $('#cityPopup').addClass('expand');
    });

    $('#search_icon').click( function(e) {
      console.log('uououo');
        // $('#cityPopup').addClass('expand');
    });
    // this.queryChanged('', '');
    // $('#dropdown_city').show();
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
    const map = Object.keys(this.config.sub_regions);
    let newObj = map.filter(value => {
      return value.toLowerCase().indexOf(newval.toLowerCase()) !== -1 ? value : null;
    });
    this.searchResult = newObj;
  }

  popupQueryChanged() {
    $('#popupResults').on('click', function() {
      $(this).toggleClass('clicked');
    });
    const map = Object.keys(this.config.instance_regions);
    let newObj = map.filter(value => {
      return value.toLowerCase().indexOf(this.popupText.toLowerCase()) !== -1 ? value : null;
    });
    this.popupResult = newObj;
    if (this.popupResult.length > 0) {
      $('#popupResults').show();
    } else {
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
    $('#startPopUpContainer').hide();
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
