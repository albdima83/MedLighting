import appconfig from '../configurations/appconfig';
import {ImageSizeFromTemplate} from '../configurations/layout';
import {MImage, Size} from '../models/app.models';

class ImageHelper {
  static getImageURL = (
    imgs: MImage[],
    template: string,
    size: Size,
    suffix: string = '', // | '2@' | '3@',
  ): string | null | undefined => {
    const hImage = imgs.find(img => {
      return img.type?.toLocaleLowerCase() === template.toLocaleLowerCase();
    });
    if (!hImage) {
      return null;
    }
    const imagesEngine: Record<string, string> =
      appconfig.uiKit?.imagesEngine ?? {};
    const imgEngine = imagesEngine[hImage.engine ?? ''];
    if (!imgEngine) {
      return null;
    }
    let dimension = size;
    const aspectRatio = size?.width / size?.height;
    const sizesFromTemplate: Size[] = ImageSizeFromTemplate[template] ?? [];
    const filteredSize: Size[] =
      sizesFromTemplate.filter(dim => {
        return (
          (dim.width >= size.width || dim.width <= size.width * 2) &&
          (dim.height >= size.height || dim.height <= size.height * 2)
        );
      }) ?? null;
    if (filteredSize) {
      let nearRatio = 999.99;
      let elementIndex = 0;
      let index = 0;
      for (let dimFilter of filteredSize) {
        const dimRatio = dimFilter.width / dimFilter.height;
        const newValue = Math.abs(aspectRatio - dimRatio);
        if (newValue < nearRatio) {
          nearRatio = newValue;
          elementIndex = index;
          if (newValue === 0) {
            break;
          }
        }
        index = index + 1;
      }
      dimension = filteredSize[elementIndex] ?? dimension;
    }
    let path = imgEngine;
    const hId = `${hImage.id}`;
    path = path.replace('{id}', hId);
    path = path.replace('{type}', hImage.type ?? '');
    path = path.replace('{r}', hImage.r ?? '');
    path = path.replace('{width}', `${Math.ceil(dimension.width)}`);
    path = path.replace('{height}', `${Math.ceil(dimension.height)}`);
    if(!!suffix && suffix !== ''){
      if(path.indexOf('?')){
        path = path.replace('?',`${suffix}?`)
      }else{
        path = path + suffix;
      }
    }
    path = `https://medproxy.imoobyte.com/imgs/${btoa(encodeURIComponent(path))}`
    return path;
  };

  static getIcon = (title: string): string | null => {
    if (!title) {
      return null;
    }

    return null;
  };
}

export default ImageHelper;
