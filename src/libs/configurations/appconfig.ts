import {RemoteConfig} from '../models/app.models';

class AppConfig {
  private _headerAppVersion: String = 'playground';
  private _headerPlatform: String = 'ANDROID_TV';
  private _headerProperty: String = 'MPLAY';
  private _siteSectionId: String = '';
  private _environment: String = 'iptv';
  private _remoteConfig?: RemoteConfig;

  private static _instance: AppConfig;

  private constructor() {
    console.log('constructor called!');
  }

  static get shared() {
    return this._instance || (this._instance = new this());
  }

  set remoteConfig(value: RemoteConfig) {
    this._remoteConfig = value;
  }

  get homepage() {
    return this._remoteConfig?.homepage;
  }

  get optionMaps() {
    return this._remoteConfig?.optionsMap;
  }

  get uiKit() {
    return this._remoteConfig?.uiKit;
  }

  get apolloBaseURL() {
    return this._remoteConfig?.uiKit?.baseUrl;
  }

  get navMain() {
    return this._remoteConfig?.menuNav?.navMain;
  }

  get navUser() {
    return this._remoteConfig?.menuNav?.navUser;
  }
}

export default AppConfig.shared;
