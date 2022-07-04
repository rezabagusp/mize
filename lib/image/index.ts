const dataURIToBlob = (dataURI: string) => {
  let byteString;
  const dataURLParts = dataURI.split(',');
  const isBase64 = dataURLParts[0].indexOf('base64') >= 0;
  const url = dataURLParts[1];

  // covert base64/URLEncoded data component to raw binary data held in a string with atob
  if (isBase64) {
    byteString = atob(dataURI.split(',')[1]);
  } else {
    byteString = decodeURIComponent(url);
  }

  // seperate out the mime component
  const mimeString = dataURI
    .split(',')[0]
    .split(':')[1]
    .split(';')[0];

  // write the bytes of string to a typed array 8 bit unsigned integers
  const byteArray = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    byteArray[i] = byteString.charCodeAt(i);
  }

  // return blob to convert into file
  return new Blob([byteArray], { type: mimeString });
};

/**
 * Helper for extract actual client image dimension
 */
export const compressedImage = (
  file: File,
  dataURI: string,
  quality = 0.9,
): Promise<{
  file: File,
  width: number,
  height: number,
}> => new Promise((resolve, reject) => {
  if (typeof window !== 'undefined') {
    const img = new window.Image();
    img.src = dataURI;

    img.onload = () => {
      const { naturalWidth: width, naturalHeight: height } = img;

      const aspectRatio = width / height;
      let newWidth;
      let newHeight;

      // max resolution
      const resolution = {
        length: 1080,
        breadth: 1920,
      };

      if (width > height) {
        newWidth = Math.min(width, resolution.breadth);
        newHeight = Math.min(height, resolution.length);
      } else {
        newWidth = Math.min(width, resolution.length);
        newHeight = Math.min(height, resolution.breadth);
      }

      if (newHeight * aspectRatio > newWidth) {
        newHeight = newWidth / aspectRatio;
      } else {
        newWidth = newHeight * aspectRatio;
      }

      // image compression
      const canvas = document.createElement('canvas');
      canvas.width = newWidth;
      canvas.height = newHeight;

      const context = canvas.getContext('2d');

      context?.drawImage(img, 0, 0, newWidth, newHeight);

      const compressedDataUri = context?.canvas.toDataURL(file.type, quality);

      const blob = dataURIToBlob(compressedDataUri as string);

      // converting to file as we need to pass it in formdata
      const compressedFile = new File(
        [blob],
        file.name,
        {
          type: file.type,
          lastModified: file.lastModified,
        },
      );

      const newImage = {
        file: compressedFile,
        width: Math.round(newWidth),
        height: Math.round(newHeight),
      };

      resolve(newImage);
    };

    img.onerror = (err) => {
      reject(err);
    };
  }
});
