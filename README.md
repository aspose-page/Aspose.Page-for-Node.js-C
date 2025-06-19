# Node.js Library for XPS, PS & EPS Files

[Aspose.Page for Node.js](https://products.aspose.com/page/nodejs-cpp) is an on premise Node.js API that allows you to add XPS manipulation features to your own applications. The API also supports to convert XPS, EPS & PS documents to other formats.

<p align="center">
  <a title="Download ZIP" href="https://github.com/aspose-page/Aspose.Page-for-Node.js-C/archive/master.zip">
    <img src="http://i.imgur.com/hwNhrGZ.png" />
  </a>
</p>

Directory | Description
--------- | -----------
[Examples](Examples)  | A collection of Node.js examples that help you learn and explore the API features



## Postscript/XPS Converting Features

Convert PS,EPS,XPS to BMP, TIFF, JPEG, PNG, GIF or PDF

## Postscript/XPS Merging Features

Merge PS, EPS, XPS to PDF or several XPS to single

## EPS functionality

Crop, resize EPS file

## Save image as EPS

```js
const AsposePage = require('asposepagenodejs');

const img_file = "./data/PAGENET-361-10.bmp";

console.log("Aspose.Page for Node.js via C++ examples.");

AsposePage().then(AsposePageModule => {

    const json = AsposePageModule.AsposeSaveImageAsEps(img_file, img_file + ".eps");
    console.log("SaveImageAsEps => %O",  json.errorCode == 0 ? "Result: " + json.fileNameResult.toString() : json.errorText);
});
```
## Platform Independence

Aspose.Page for Node.js is a completed library. No need others libraries to include.

## Get Started with Aspose.Page for C++

Are you ready to give Aspose.Page for C++ a try? Simply execute `npm i asposepagenodejs`. If you already have Aspose.Page for Node.js and want to upgrade the version, please execute `npm update asposepagenodejs` to get the latest version.

[Home](https://www.aspose.com/) | [Product Page](https://products.aspose.com/page/nodejs-cpp) | [Docs](https://docs.aspose.com/page/nodejs-cpp/) | [Demos](https://products.aspose.app/page/family) | [API Reference](https://reference.aspose.com/page/nodejs-cpp) | [Examples](https://github.com/aspose-page/Aspose.Page-for-Node.js-C) | [Blog](https://blog.aspose.com/category/page/) | [Search](https://search.aspose.com/) | [Free Support](https://forum.aspose.com/c/page) |  [Temporary License](https://purchase.aspose.com/temporary-license)

