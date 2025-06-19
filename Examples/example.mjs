import AsposePage from 'asposepagenodejs';

const img_file = "./data/PAGENET-361-10.bmp";
const eps_file = "./data/xmp_input.eps";
const add_named_value_input_eps_file = "./data/add_named_value_input.eps";
const ps_file = "./data/program_13.ps";
const ps_files = "./data/program_01.ps,./data/PAGENET-361-10.eps";
const xps_file = "./data/example.xps";
const xps_files = "./data/example.xps,./data/transforms.xps";

console.log('Aspose.Page for Node.js via C++ example');

const AsposePageModule = await AsposePage();

let json;

    let json = AsposePageModule.AsposePageAbout();
    console.log("AsposePageAbout => %O",  json.errorCode == 0 ? JSON.parse(JSON.stringify(json).replace('"errorCode":0,"errorText":"",','')) : "error:" + json.errorText);

    //Converting

    //AsposePSSaveAsImage - convert postscript to image
    json = AsposePageModule.AsposePSSaveAsImage(ps_file, AsposePageModule.ImageFormat.Png, true);
    console.log("AsposePSSaveAsImage => %O",  json.errorCode == 0 ? "Files(pages) count: " + json.filesCount.toString() + json.filesNameResult.toString() : json.errorText);

    //AsposePSSaveAsPdf - convert postscript to PDF
    json = AsposePageModule.AsposePSSaveAsPdf(ps_file, true);
    console.log("AsposePSSaveAsPdf => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposeXPSSaveAsImage - convert XPS to image
    json = AsposePageModule.AsposeXPSSaveAsImage(xps_file, AsposePageModule.ImageFormat.Png, true);
    console.log("AsposeXPSSaveAsImage => %O",  json.errorCode == 0 ? "Files(pages) count: " + json.filesCount.toString() + json.filesNameResult.toString() : json.errorText);

    //AsposeXPSSaveAsPdf - convert XPS to PDF
    json = AsposePageModule.AsposeXPSSaveAsPdf(xps_file, true);
    console.log("AsposeXPSSaveAsPdf => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //Merging

    //AsposePSMergeToPdf - merge postscript to PDF
    json = AsposePageModule.AsposePSMergeToPdf(ps_files,"PsMergedToPdfResult.pdf",true);
    console.log("AsposePSMergeToPdf => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //AsposeXPSMergeToPdf - merge XPS to PDF
    json = AsposePageModule.AsposeXPSMergeToPdf(xps_files, "XPsMergedToPdfResult.pdf");
    console.log("AsposeXPSMergeToPdf => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //XPSMergeToXps - merge several XPS to single
    json = AsposePageModule.AsposeXPSMergeToXps(xps_files, "XpsMergedToXpsResult.xps");
    console.log("AsposeXPSMergeToXps => %O",  json.errorCode == 0 ? json.fileNameResult : json.errorText);

    //XMP metadata

    //AsposeEPSGetXMP - working with EPS metadata
    json = AsposePageModule.AsposeEPSGetXMP(eps_file, "out_xmp.eps");
    console.log("AsposeEPSGetXMP => %O",  json.errorCode == 0 ? JSON.parse(JSON.stringify(json).replace('"errorCode":0,"errorText":"",','')) : json.errorText);

    //AsposeXMPAddArrayItem - working with EPS metadata
      const input = [
        ["dc:title", "NewTitle"],
        ["dc:creator", "NewCreator"]
      ];
    json = AsposePageModule.AsposeXMPAddArrayItem(eps_file, "./data/out_addarray.eps", input);
    console.log("AsposeXMPAddArrayItem => %O",  json.errorCode == 0 ? JSON.parse(JSON.stringify(json).replace('"errorCode":0,"errorText":"",','')) : json.errorText);

    //AsposeXMPAddNamedValue - working with EPS metadata
      const namedValues = [
        ["xmpTPg:MaxPageSize", [["stDim:newKey", "NewValue"],["stDim:newKey2", "NewValue2"]] ],
        ["xmpTPg:SwatchGroups", [["xmpG:newKey", "NewValue"]] ]
      ];
    json = AsposePageModule.AsposeXMPAddNamedValue(add_named_value_input_eps_file, "./data/out_namedvalues.eps", namedValues);
    console.log("AsposeXMPAddNamedValue => %O",  json.errorCode == 0 ? JSON.parse(JSON.stringify(json).replace('"errorCode":0,"errorText":"",','')) : json.errorText);

    //AsposeXMPAddNamespace - working with EPS metadata
      const prefix = "tmp";
      const url = "http://www.some.org/schema/tmp#";
      const nsValues = [
        ["tmp:newKey", "NewValue"]
      ];
    json = AsposePageModule.AsposeXMPAddNamespace(eps_file, "./data/out_namespace.eps", prefix, url, nsValues);
    console.log("AsposeXMPAddNamespace => %O",  json.errorCode == 0 ? JSON.parse(JSON.stringify(json).replace('"errorCode":0,"errorText":"",','')) : json.errorText);

    //AsposeXMPAddSimpleProperties - working with EPS metadata
      const key = "tmp:newKey";
      const value = "NewValue";
    json = AsposePageModule.AsposeXMPAddSimpleProperties(eps_file, "./data/out_simple.eps", key, value);
    console.log("AsposeXMPAddSimpleProperties => %O",  json.errorCode == 0 ? JSON.parse(JSON.stringify(json).replace('"errorCode":0,"errorText":"",','')) : json.errorText);

    //EPS functionality

    //AsposeSaveImageAsEps - saving image to EPS
    json = AsposePageModule.AsposeSaveImageAsEps(img_file, img_file + ".eps");
    console.log("AsposeSaveImageAsEps => %O",  json.errorCode == 0 ? "Files(pages) count: " + json.filesCount.toString() + json.filesNameResult.toString() : json.errorText);

    //AsposeCropEPS - working with EPS
    json = AsposePageModule.AsposeCropEPS(eps_file, "croped.eps", 30, 5, 240, 36);
    console.log("AsposeCropEPS => %O",  json.errorCode == 0 ? JSON.parse(JSON.stringify(json).replace('"errorCode":0,"errorText":"",','')) : json.errorText);

    //AsposeResizeEPS - working with EPS
    json = AsposePageModule.AsposeResizeEPS(eps_file, "resized.eps", 200, 100, AsposePageModule.Units.Points);
    console.log("AsposeResizeEPS => %O",  json.errorCode == 0 ? JSON.parse(JSON.stringify(json).replace('"errorCode":0,"errorText":"",','')) : json.errorText);
