cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/src/browser/CameraProxy.js",
        "id": "cordova-plugin-camera.CameraProxy",
        "pluginId": "cordova-plugin-camera",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/contacts.js",
        "id": "cordova-plugin-contacts.contacts",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "navigator.contacts"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/Contact.js",
        "id": "cordova-plugin-contacts.Contact",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "Contact"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/convertUtils.js",
        "id": "cordova-plugin-contacts.convertUtils",
        "pluginId": "cordova-plugin-contacts"
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactAddress.js",
        "id": "cordova-plugin-contacts.ContactAddress",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactAddress"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactError.js",
        "id": "cordova-plugin-contacts.ContactError",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactField.js",
        "id": "cordova-plugin-contacts.ContactField",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactField"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
        "id": "cordova-plugin-contacts.ContactFindOptions",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactFindOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactName.js",
        "id": "cordova-plugin-contacts.ContactName",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactName"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactOrganization.js",
        "id": "cordova-plugin-contacts.ContactOrganization",
        "pluginId": "cordova-plugin-contacts",
        "clobbers": [
            "ContactOrganization"
        ]
    },
    {
        "file": "plugins/cordova-plugin-contacts/www/ContactFieldType.js",
        "id": "cordova-plugin-contacts.ContactFieldType",
        "pluginId": "cordova-plugin-contacts",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
        "id": "cordova-plugin-file.DirectoryEntry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
        "id": "cordova-plugin-file.DirectoryReader",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Entry.js",
        "id": "cordova-plugin-file.Entry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/File.js",
        "id": "cordova-plugin-file.File",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileEntry.js",
        "id": "cordova-plugin-file.FileEntry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileError.js",
        "id": "cordova-plugin-file.FileError",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileReader.js",
        "id": "cordova-plugin-file.FileReader",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileSystem.js",
        "id": "cordova-plugin-file.FileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
        "id": "cordova-plugin-file.FileUploadOptions",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
        "id": "cordova-plugin-file.FileUploadResult",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileWriter.js",
        "id": "cordova-plugin-file.FileWriter",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Flags.js",
        "id": "cordova-plugin-file.Flags",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
        "id": "cordova-plugin-file.LocalFileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Metadata.js",
        "id": "cordova-plugin-file.Metadata",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
        "id": "cordova-plugin-file.ProgressEvent",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystems.js",
        "id": "cordova-plugin-file.fileSystems",
        "pluginId": "cordova-plugin-file"
    },
    {
        "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
        "id": "cordova-plugin-file.requestFileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
        "id": "cordova-plugin-file.resolveLocalFileSystemURI",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
        "id": "cordova-plugin-file.isChrome",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/Preparing.js",
        "id": "cordova-plugin-file.Preparing",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/src/browser/FileProxy.js",
        "id": "cordova-plugin-file.browserFileProxy",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
        "id": "cordova-plugin-file.fileSystemPaths",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "cordova"
        ],
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/FileSystem.js",
        "id": "cordova-plugin-file.firefoxFileSystem",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-http/www/cordovaHTTP.js",
        "id": "cordova-plugin-http.CordovaHttpPlugin",
        "pluginId": "cordova-plugin-http",
        "clobbers": [
            "CordovaHttpPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "file": "plugins/cordova-plugin-wechat/www/wechat.js",
        "id": "cordova-plugin-wechat.Wechat",
        "pluginId": "cordova-plugin-wechat",
        "clobbers": [
            "Wechat"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-crosswalk-webview": "2.2.0",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-camera": "2.3.1",
    "cordova-plugin-network-information": "1.3.1",
    "cordova-plugin-splashscreen": "4.0.1",
    "cordova-plugin-inappbrowser": "1.6.1",
    "cordova-plugin-geolocation": "2.4.1",
    "cordova-plugin-contacts": "2.2.1",
    "cordova-plugin-file": "4.3.1",
    "cordova-plugin-http": "1.2.0",
    "cordova-plugin-x-socialsharing": "5.1.3",
    "cordova-plugin-wechat": "1.3.0"
}
// BOTTOM OF METADATA
});
cordova.define("cordova-plugin-camera.camera", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec'),
    Camera = require('./Camera');
    // XXX: commented out
    //CameraPopoverHandle = require('./CameraPopoverHandle');

/**
 * @namespace navigator
 */

/**
 * @exports camera
 */
var cameraExport = {};

// Tack on the Camera Constants to the base camera plugin.
for (var key in Camera) {
    cameraExport[key] = Camera[key];
}

/**
 * Callback function that provides an error message.
 * @callback module:camera.onError
 * @param {string} message - The message is provided by the device's native code.
 */

/**
 * Callback function that provides the image data.
 * @callback module:camera.onSuccess
 * @param {string} imageData - Base64 encoding of the image data, _or_ the image file URI, depending on [`cameraOptions`]{@link module:camera.CameraOptions} in effect.
 * @example
 * // Show image
 * //
 * function cameraCallback(imageData) {
 *    var image = document.getElementById('myImage');
 *    image.src = "data:image/jpeg;base64," + imageData;
 * }
 */

/**
 * Optional parameters to customize the camera settings.
 * * [Quirks](#CameraOptions-quirks)
 * @typedef module:camera.CameraOptions
 * @type {Object}
 * @property {number} [quality=50] - Quality of the saved image, expressed as a range of 0-100, where 100 is typically full resolution with no loss from file compression. (Note that information about the camera's resolution is unavailable.)
 * @property {module:Camera.DestinationType} [destinationType=FILE_URI] - Choose the format of the return value.
 * @property {module:Camera.PictureSourceType} [sourceType=CAMERA] - Set the source of the picture.
 * @property {Boolean} [allowEdit=true] - Allow simple editing of image before selection.
 * @property {module:Camera.EncodingType} [encodingType=JPEG] - Choose the  returned image file's encoding.
 * @property {number} [targetWidth] - Width in pixels to scale image. Must be used with `targetHeight`. Aspect ratio remains constant.
 * @property {number} [targetHeight] - Height in pixels to scale image. Must be used with `targetWidth`. Aspect ratio remains constant.
 * @property {module:Camera.MediaType} [mediaType=PICTURE] - Set the type of media to select from.  Only works when `PictureSourceType` is `PHOTOLIBRARY` or `SAVEDPHOTOALBUM`.
 * @property {Boolean} [correctOrientation] - Rotate the image to correct for the orientation of the device during capture.
 * @property {Boolean} [saveToPhotoAlbum] - Save the image to the photo album on the device after capture.
 * @property {module:CameraPopoverOptions} [popoverOptions] - iOS-only options that specify popover location in iPad.
 * @property {module:Camera.Direction} [cameraDirection=BACK] - Choose the camera to use (front- or back-facing).
 */

/**
 * @description Takes a photo using the camera, or retrieves a photo from the device's
 * image gallery.  The image is passed to the success callback as a
 * Base64-encoded `String`, or as the URI for the image file.
 *
 * The `camera.getPicture` function opens the device's default camera
 * application that allows users to snap pictures by default - this behavior occurs,
 * when `Camera.sourceType` equals [`Camera.PictureSourceType.CAMERA`]{@link module:Camera.PictureSourceType}.
 * Once the user snaps the photo, the camera application closes and the application is restored.
 *
 * If `Camera.sourceType` is `Camera.PictureSourceType.PHOTOLIBRARY` or
 * `Camera.PictureSourceType.SAVEDPHOTOALBUM`, then a dialog displays
 * that allows users to select an existing image.
 *
 * The return value is sent to the [`cameraSuccess`]{@link module:camera.onSuccess} callback function, in
 * one of the following formats, depending on the specified
 * `cameraOptions`:
 *
 * - A `String` containing the Base64-encoded photo image.
 * - A `String` representing the image file location on local storage (default).
 *
 * You can do whatever you want with the encoded image or URI, for
 * example:
 *
 * - Render the image in an `<img>` tag, as in the example below
 * - Save the data locally (`LocalStorage`, [Lawnchair](http://brianleroux.github.com/lawnchair/), etc.)
 * - Post the data to a remote server
 *
 * __NOTE__: Photo resolution on newer devices is quite good. Photos
 * selected from the device's gallery are not downscaled to a lower
 * quality, even if a `quality` parameter is specified.  To avoid common
 * memory problems, set `Camera.destinationType` to `FILE_URI` rather
 * than `DATA_URL`.
 *
 * __Supported Platforms__
 *
 * - Android
 * - BlackBerry
 * - Browser
 * - Firefox
 * - FireOS
 * - iOS
 * - Windows
 * - WP8
 * - Ubuntu
 *
 * More examples [here](#camera-getPicture-examples). Quirks [here](#camera-getPicture-quirks).
 *
 * @example
 * navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
 * @param {module:camera.onSuccess} successCallback
 * @param {module:camera.onError} errorCallback
 * @param {module:camera.CameraOptions} options CameraOptions
 */
cameraExport.getPicture = function(successCallback, errorCallback, options) {
    argscheck.checkArgs('fFO', 'Camera.getPicture', arguments);
    options = options || {};
    var getValue = argscheck.getValue;

    var quality = getValue(options.quality, 50);
    var destinationType = getValue(options.destinationType, Camera.DestinationType.FILE_URI);
    var sourceType = getValue(options.sourceType, Camera.PictureSourceType.CAMERA);
    var targetWidth = getValue(options.targetWidth, -1);
    var targetHeight = getValue(options.targetHeight, -1);
    var encodingType = getValue(options.encodingType, Camera.EncodingType.JPEG);
    var mediaType = getValue(options.mediaType, Camera.MediaType.PICTURE);
    var allowEdit = !!options.allowEdit;
    var correctOrientation = !!options.correctOrientation;
    var saveToPhotoAlbum = !!options.saveToPhotoAlbum;
    var popoverOptions = getValue(options.popoverOptions, null);
    var cameraDirection = getValue(options.cameraDirection, Camera.Direction.BACK);

    var args = [quality, destinationType, sourceType, targetWidth, targetHeight, encodingType,
                mediaType, allowEdit, correctOrientation, saveToPhotoAlbum, popoverOptions, cameraDirection];

    exec(successCallback, errorCallback, "Camera", "takePicture", args);
    // XXX: commented out
    //return new CameraPopoverHandle();
};

/**
 * Removes intermediate image files that are kept in temporary storage
 * after calling [`camera.getPicture`]{@link module:camera.getPicture}. Applies only when the value of
 * `Camera.sourceType` equals `Camera.PictureSourceType.CAMERA` and the
 * `Camera.destinationType` equals `Camera.DestinationType.FILE_URI`.
 *
 * __Supported Platforms__
 *
 * - iOS
 *
 * @example
 * navigator.camera.cleanup(onSuccess, onFail);
 *
 * function onSuccess() {
 *     console.log("Camera cleanup success.")
 * }
 *
 * function onFail(message) {
 *     alert('Failed because: ' + message);
 * }
 */
cameraExport.cleanup = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "Camera", "cleanup", []);
};

module.exports = cameraExport;

});

cordova.define("cordova-plugin-camera.Camera", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * @module Camera
 */
module.exports = {
  /**
   * @description
   * Defines the output format of `Camera.getPicture` call.
   * _Note:_ On iOS passing `DestinationType.NATIVE_URI` along with
   * `PictureSourceType.PHOTOLIBRARY` or `PictureSourceType.SAVEDPHOTOALBUM` will
   * disable any image modifications (resize, quality change, cropping, etc.) due
   * to implementation specific.
   *
   * @enum {number}
   */
  DestinationType:{
    /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
    DATA_URL: 0,
    /** Return file uri (content://media/external/images/media/2 for Android) */
    FILE_URI: 1,
    /** Return native uri (eg. asset-library://... for iOS) */
    NATIVE_URI: 2
  },
  /**
   * @enum {number}
   */
  EncodingType:{
    /** Return JPEG encoded image */
    JPEG: 0,
    /** Return PNG encoded image */
    PNG: 1
  },
  /**
   * @enum {number}
   */
  MediaType:{
    /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
    PICTURE: 0,
    /** Allow selection of video only, ONLY RETURNS URL */
    VIDEO: 1,
    /** Allow selection from all media types */
    ALLMEDIA : 2
  },
  /**
   * @description
   * Defines the output format of `Camera.getPicture` call.
   * _Note:_ On iOS passing `PictureSourceType.PHOTOLIBRARY` or `PictureSourceType.SAVEDPHOTOALBUM`
   * along with `DestinationType.NATIVE_URI` will disable any image modifications (resize, quality
   * change, cropping, etc.) due to implementation specific.
   *
   * @enum {number}
   */
  PictureSourceType:{
    /** Choose image from the device's photo library (same as SAVEDPHOTOALBUM for Android) */
    PHOTOLIBRARY : 0,
    /** Take picture from camera */
    CAMERA : 1,
    /** Choose image only from the device's Camera Roll album (same as PHOTOLIBRARY for Android) */
    SAVEDPHOTOALBUM : 2
  },
  /**
   * Matches iOS UIPopoverArrowDirection constants to specify arrow location on popover.
   * @enum {number}
   */
  PopoverArrowDirection:{
      ARROW_UP : 1,
      ARROW_DOWN : 2,
      ARROW_LEFT : 4,
      ARROW_RIGHT : 8,
      ARROW_ANY : 15
  },
  /**
   * @enum {number}
   */
  Direction:{
      /** Use the back-facing camera */
      BACK: 0,
      /** Use the front-facing camera */
      FRONT: 1
  }
};

});

cordova.define("cordova-plugin-camera.CameraPopoverOptions", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var Camera = require('./Camera');

/** 
 * @namespace navigator
 */

/**
 * iOS-only parameters that specify the anchor element location and arrow
 * direction of the popover when selecting images from an iPad's library
 * or album.
 * Note that the size of the popover may change to adjust to the
 * direction of the arrow and orientation of the screen.  Make sure to
 * account for orientation changes when specifying the anchor element
 * location.
 * @module CameraPopoverOptions
 * @param {Number} [x=0] - x pixel coordinate of screen element onto which to anchor the popover.
 * @param {Number} [y=32] - y pixel coordinate of screen element onto which to anchor the popover.
 * @param {Number} [width=320] - width, in pixels, of the screen element onto which to anchor the popover.
 * @param {Number} [height=480] - height, in pixels, of the screen element onto which to anchor the popover.
 * @param {module:Camera.PopoverArrowDirection} [arrowDir=ARROW_ANY] - Direction the arrow on the popover should point.
 */
var CameraPopoverOptions = function (x, y, width, height, arrowDir) {
    // information of rectangle that popover should be anchored to
    this.x = x || 0;
    this.y = y || 32;
    this.width = width || 320;
    this.height = height || 480;
    this.arrowDir = arrowDir || Camera.PopoverArrowDirection.ARROW_ANY;
};

module.exports = CameraPopoverOptions;

});

cordova.define("cordova-plugin-contacts.Contact", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec'),
    ContactError = require('./ContactError'),
    utils = require('cordova/utils'),
    convertUtils = require('./convertUtils');

/**
* Contains information about a single contact.
* @constructor
* @param {DOMString} id unique identifier
* @param {DOMString} displayName
* @param {ContactName} name
* @param {DOMString} nickname
* @param {Array.<ContactField>} phoneNumbers array of phone numbers
* @param {Array.<ContactField>} emails array of email addresses
* @param {Array.<ContactAddress>} addresses array of addresses
* @param {Array.<ContactField>} ims instant messaging user ids
* @param {Array.<ContactOrganization>} organizations
* @param {DOMString} birthday contact's birthday
* @param {DOMString} note user notes about contact
* @param {Array.<ContactField>} photos
* @param {Array.<ContactField>} categories
* @param {Array.<ContactField>} urls contact's web sites
*/
var Contact = function (id, displayName, name, nickname, phoneNumbers, emails, addresses,
    ims, organizations, birthday, note, photos, categories, urls) {
    this.id = id || null;
    this.rawId = null;
    this.displayName = displayName || null;
    this.name = name || null; // ContactName
    this.nickname = nickname || null;
    this.phoneNumbers = phoneNumbers || null; // ContactField[]
    this.emails = emails || null; // ContactField[]
    this.addresses = addresses || null; // ContactAddress[]
    this.ims = ims || null; // ContactField[]
    this.organizations = organizations || null; // ContactOrganization[]
    this.birthday = birthday || null;
    this.note = note || null;
    this.photos = photos || null; // ContactField[]
    this.categories = categories || null; // ContactField[]
    this.urls = urls || null; // ContactField[]
};

/**
* Removes contact from device storage.
* @param successCB success callback
* @param errorCB error callback
*/
Contact.prototype.remove = function(successCB, errorCB) {
    argscheck.checkArgs('FF', 'Contact.remove', arguments);
    var fail = errorCB && function(code) {
        errorCB(new ContactError(code));
    };
    if (this.id === null) {
        fail(ContactError.UNKNOWN_ERROR);
    }
    else {
        exec(successCB, fail, "Contacts", "remove", [this.id]);
    }
};

/**
* Creates a deep copy of this Contact.
* With the contact ID set to null.
* @return copy of this Contact
*/
Contact.prototype.clone = function() {
    var clonedContact = utils.clone(this);
    clonedContact.id = null;
    clonedContact.rawId = null;

    function nullIds(arr) {
        if (arr) {
            for (var i = 0; i < arr.length; ++i) {
                arr[i].id = null;
            }
        }
    }

    // Loop through and clear out any id's in phones, emails, etc.
    nullIds(clonedContact.phoneNumbers);
    nullIds(clonedContact.emails);
    nullIds(clonedContact.addresses);
    nullIds(clonedContact.ims);
    nullIds(clonedContact.organizations);
    nullIds(clonedContact.categories);
    nullIds(clonedContact.photos);
    nullIds(clonedContact.urls);
    return clonedContact;
};

/**
* Persists contact to device storage.
* @param successCB success callback
* @param errorCB error callback
*/
Contact.prototype.save = function(successCB, errorCB) {
    argscheck.checkArgs('FFO', 'Contact.save', arguments);
    var fail = errorCB && function(code) {
        errorCB(new ContactError(code));
    };
    var success = function(result) {
        if (result) {
            if (successCB) {
                var fullContact = require('./contacts').create(result);
                successCB(convertUtils.toCordovaFormat(fullContact));
            }
        }
        else {
            // no Entry object returned
            fail(ContactError.UNKNOWN_ERROR);
        }
    };
    var dupContact = convertUtils.toNativeFormat(utils.clone(this));
    exec(success, fail, "Contacts", "save", [dupContact]);
};


module.exports = Contact;

});

cordova.define("cordova-plugin-contacts.ContactAddress", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
* Contact address.
* @constructor
* @param {DOMString} id unique identifier, should only be set by native code
* @param formatted // NOTE: not a W3C standard
* @param streetAddress
* @param locality
* @param region
* @param postalCode
* @param country
*/

var ContactAddress = function(pref, type, formatted, streetAddress, locality, region, postalCode, country) {
    this.id = null;
    this.pref = (typeof pref != 'undefined' ? pref : false);
    this.type = type || null;
    this.formatted = formatted || null;
    this.streetAddress = streetAddress || null;
    this.locality = locality || null;
    this.region = region || null;
    this.postalCode = postalCode || null;
    this.country = country || null;
};

module.exports = ContactAddress;

});

cordova.define("cordova-plugin-contacts.ContactError", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 *  ContactError.
 *  An error code assigned by an implementation when an error has occurred
 * @constructor
 */
var ContactError = function(err) {
    this.code = (typeof err != 'undefined' ? err : null);
};

/**
 * Error codes
 */
ContactError.UNKNOWN_ERROR = 0;
ContactError.INVALID_ARGUMENT_ERROR = 1;
ContactError.TIMEOUT_ERROR = 2;
ContactError.PENDING_OPERATION_ERROR = 3;
ContactError.IO_ERROR = 4;
ContactError.NOT_SUPPORTED_ERROR = 5;
ContactError.OPERATION_CANCELLED_ERROR = 6;
ContactError.PERMISSION_DENIED_ERROR = 20;

module.exports = ContactError;

});

cordova.define("cordova-plugin-contacts.ContactField", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
* Generic contact field.
* @constructor
* @param {DOMString} id unique identifier, should only be set by native code // NOTE: not a W3C standard
* @param type
* @param value
* @param pref
*/
var ContactField = function(type, value, pref) {
    this.id = null;
    this.type = (type && type.toString()) || null;
    this.value = (value && value.toString()) || null;
    this.pref = (typeof pref != 'undefined' ? pref : false);
};

module.exports = ContactField;

});

cordova.define("cordova-plugin-contacts.ContactFieldType", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

    // Possible field names for various platforms.
    // Some field names are platform specific

    var fieldType = {
        addresses:      "addresses",
        birthday:       "birthday",
        categories:     "categories",
        country:        "country",
        department:     "department",
        displayName:    "displayName",
        emails:         "emails",
        familyName:     "familyName",
        formatted:      "formatted",
        givenName:      "givenName",
        honorificPrefix: "honorificPrefix",
        honorificSuffix: "honorificSuffix",
        id:             "id",
        ims:            "ims",
        locality:       "locality",
        middleName:     "middleName",
        name:           "name",
        nickname:       "nickname",
        note:           "note",
        organizations:  "organizations",
        phoneNumbers:   "phoneNumbers",
        photos:         "photos",
        postalCode:     "postalCode",
        region:         "region",
        streetAddress:  "streetAddress",
        title:          "title",
        urls:           "urls"
    };

    module.exports = fieldType;

});

cordova.define("cordova-plugin-contacts.ContactFindOptions", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * ContactFindOptions.
 * @constructor
 * @param filter used to match contacts against
 * @param multiple boolean used to determine if more than one contact should be returned
 * @param desiredFields 
 * @param hasPhoneNumber boolean used to filter the search and only return contacts that have a phone number informed
 */

var ContactFindOptions = function(filter, multiple, desiredFields, hasPhoneNumber) {
    this.filter = filter || '';
    this.multiple = (typeof multiple != 'undefined' ? multiple : false);
    this.desiredFields = typeof desiredFields != 'undefined' ? desiredFields : [];
    this.hasPhoneNumber = typeof hasPhoneNumber != 'undefined' ? hasPhoneNumber : false;
};

module.exports = ContactFindOptions;

});

cordova.define("cordova-plugin-contacts.ContactName", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
* Contact name.
* @constructor
* @param formatted // NOTE: not part of W3C standard
* @param familyName
* @param givenName
* @param middle
* @param prefix
* @param suffix
*/
var ContactName = function(formatted, familyName, givenName, middle, prefix, suffix) {
    this.formatted = formatted || null;
    this.familyName = familyName || null;
    this.givenName = givenName || null;
    this.middleName = middle || null;
    this.honorificPrefix = prefix || null;
    this.honorificSuffix = suffix || null;
};

module.exports = ContactName;

});

cordova.define("cordova-plugin-contacts.ContactOrganization", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
* Contact organization.
* @constructor
* @param pref
* @param type
* @param name
* @param dept
* @param title
*/

var ContactOrganization = function(pref, type, name, dept, title) {
    this.id = null;
    this.pref = (typeof pref != 'undefined' ? pref : false);
    this.type = type || null;
    this.name = name || null;
    this.department = dept || null;
    this.title = title || null;
};

module.exports = ContactOrganization;

});

cordova.define("cordova-plugin-contacts.contacts", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec'),
    ContactError = require('./ContactError'),
    Contact = require('./Contact'),
    fieldType = require('./ContactFieldType'),
    convertUtils = require('./convertUtils');

/**
* Represents a group of Contacts.
* @constructor
*/
var contacts = {
    fieldType: fieldType,
    /**
     * Returns an array of Contacts matching the search criteria.
     * @param fields that should be searched
     * @param successCB success callback
     * @param errorCB error callback
     * @param {ContactFindOptions} options that can be applied to contact searching
     * @return array of Contacts matching search criteria
     */
    find: function(fields, successCB, errorCB, options) {
        argscheck.checkArgs('afFO', 'contacts.find', arguments);
        if (!fields.length) {
            if (errorCB) {
                errorCB(new ContactError(ContactError.INVALID_ARGUMENT_ERROR));
            }
        } else {
            // missing 'options' param means return all contacts
            options = options || { filter: '', multiple: true };
            var win = function(result) {
                var cs = [];
                for (var i = 0, l = result.length; i < l; i++) {
                    cs.push(convertUtils.toCordovaFormat(contacts.create(result[i])));
                }
                successCB(cs);
            };
            exec(win, errorCB, "Contacts", "search", [fields, options]);
        }
    },
    
    /**
     * This function picks contact from phone using contact picker UI
     * @returns new Contact object
     */
    pickContact: function (successCB, errorCB) {

        argscheck.checkArgs('fF', 'contacts.pick', arguments);

        var win = function (result) {
            // if Contacts.pickContact return instance of Contact object
            // don't create new Contact object, use current
            var contact = result instanceof Contact ? result : contacts.create(result);
            successCB(convertUtils.toCordovaFormat(contact));
        };
        exec(win, errorCB, "Contacts", "pickContact", []);
    },

    /**
     * This function creates a new contact, but it does not persist the contact
     * to device storage. To persist the contact to device storage, invoke
     * contact.save().
     * @param properties an object whose properties will be examined to create a new Contact
     * @returns new Contact object
     */
    create: function(properties) {
        argscheck.checkArgs('O', 'contacts.create', arguments);
        var contact = new Contact();
        for (var i in properties) {
            if (typeof contact[i] !== 'undefined' && properties.hasOwnProperty(i)) {
                contact[i] = properties[i];
            }
        }
        return contact;
    }
};

module.exports = contacts;

});

cordova.define("cordova-plugin-contacts.convertUtils", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var utils = require('cordova/utils');

module.exports = {
    /**
    * Converts primitives into Complex Object
    * Currently only used for Date fields
    */
    toCordovaFormat: function (contact) {
        var value = contact.birthday;
        if (value !== null) {
            try {
              contact.birthday = new Date(parseFloat(value));
              
              //we might get 'Invalid Date' which does not throw an error
              //and is an instance of Date.
              if (isNaN(contact.birthday.getTime())) {
                contact.birthday = null;
              }

            } catch (exception){
              console.log("Cordova Contact toCordovaFormat error: exception creating date.");
            }
        }
        return contact;
    },

    /**
    * Converts Complex objects into primitives
    * Only conversion at present is for Dates.
    **/
    toNativeFormat: function (contact) {
        var value = contact.birthday;
        if (value !== null) {
            // try to make it a Date object if it is not already
            if (!utils.isDate(value)){
                try {
                    value = new Date(value);
                } catch(exception){
                    value = null;
                }
            }
            if (utils.isDate(value)){
                value = value.valueOf(); // convert to milliseconds
            }
            contact.birthday = value;
        }
        return contact;
    }
};

});

cordova.define("cordova-plugin-device.device", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var argscheck = require('cordova/argscheck'),
    channel = require('cordova/channel'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    cordova = require('cordova');

channel.createSticky('onCordovaInfoReady');
// Tell cordova channel to wait on the CordovaInfoReady event
channel.waitForInitialization('onCordovaInfoReady');

/**
 * This represents the mobile device, and provides properties for inspecting the model, version, UUID of the
 * phone, etc.
 * @constructor
 */
function Device() {
    this.available = false;
    this.platform = null;
    this.version = null;
    this.uuid = null;
    this.cordova = null;
    this.model = null;
    this.manufacturer = null;
    this.isVirtual = null;
    this.serial = null;

    var me = this;

    channel.onCordovaReady.subscribe(function() {
        me.getInfo(function(info) {
            //ignoring info.cordova returning from native, we should use value from cordova.version defined in cordova.js
            //TODO: CB-5105 native implementations should not return info.cordova
            var buildLabel = cordova.version;
            me.available = true;
            me.platform = info.platform;
            me.version = info.version;
            me.uuid = info.uuid;
            me.cordova = buildLabel;
            me.model = info.model;
            me.isVirtual = info.isVirtual;
            me.manufacturer = info.manufacturer || 'unknown';
            me.serial = info.serial || 'unknown';
            channel.onCordovaInfoReady.fire();
        },function(e) {
            me.available = false;
            utils.alert("[ERROR] Error initializing Cordova: " + e);
        });
    });
}

/**
 * Get device info
 *
 * @param {Function} successCallback The function to call when the heading data is available
 * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
 */
Device.prototype.getInfo = function(successCallback, errorCallback) {
    argscheck.checkArgs('fF', 'Device.getInfo', arguments);
    exec(successCallback, errorCallback, "Device", "getDeviceInfo", []);
};

module.exports = new Device();

});

cordova.define("cordova-plugin-http.CordovaHttpPlugin", function(require, exports, module) { /*global angular*/

/*
 * An HTTP Plugin for PhoneGap.
 */

var exec = require('cordova/exec');

// Thanks Mozilla: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_.22Unicode_Problem.22
function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

function mergeHeaders(globalHeaders, localHeaders) {
    var globalKeys = Object.keys(globalHeaders);
    var key;
    for (var i = 0; i < globalKeys.length; i++) {
        key = globalKeys[i];
        if (!localHeaders.hasOwnProperty(key)) {
            localHeaders[key] = globalHeaders[key];
        }
    }
    return localHeaders;
}

var http = {
    headers: {},
    sslPinning: false,
    getBasicAuthHeader: function(username, password) {
        return {'Authorization': 'Basic ' + b64EncodeUnicode(username + ':' + password)};
    },
    useBasicAuth: function(username, password) {
        this.headers.Authorization = 'Basic ' + b64EncodeUnicode(username + ':' + password);
    },
    setHeader: function(header, value) {
        this.headers[header] = value;
    },
    enableSSLPinning: function(enable, success, failure) {
        return exec(success, failure, "CordovaHttpPlugin", "enableSSLPinning", [enable]);
    },
    acceptAllCerts: function(allow, success, failure) {
        return exec(success, failure, "CordovaHttpPlugin", "acceptAllCerts", [allow]);
    },
    validateDomainName: function(validate, success, failure) {
        return exec(success, failure, "CordovaHttpPlugin", "validateDomainName", [validate]);
    },
    post: function(url, params, headers, success, failure) {
        headers = mergeHeaders(this.headers, headers);
        return exec(success, failure, "CordovaHttpPlugin", "post", [url, params, headers]);
    },
    get: function(url, params, headers, success, failure) {
        headers = mergeHeaders(this.headers, headers);
        return exec(success, failure, "CordovaHttpPlugin", "get", [url, params, headers]);
    },
    head: function(url, params, headers, success, failure) {
        headers = mergeHeaders(this.headers, headers);
        return exec(success, failure, "CordovaHttpPlugin", "head", [url, params, headers]);
    },
    uploadFile: function(url, params, headers, filePath, name, success, failure) {
        headers = mergeHeaders(this.headers, headers);
        return exec(success, failure, "CordovaHttpPlugin", "uploadFile", [url, params, headers, filePath, name]);
    },
    downloadFile: function(url, params, headers, filePath, success, failure) {
        /*
         *
         * Licensed to the Apache Software Foundation (ASF) under one
         * or more contributor license agreements.  See the NOTICE file
         * distributed with this work for additional information
         * regarding copyright ownership.  The ASF licenses this file
         * to you under the Apache License, Version 2.0 (the
         * "License"); you may not use this file except in compliance
         * with the License.  You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing,
         * software distributed under the License is distributed on an
         * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         * KIND, either express or implied.  See the License for the
         * specific language governing permissions and limitations
         * under the License.
         *
         * Modified by Andrew Stephan for Sync OnSet
         *
        */
        headers = mergeHeaders(this.headers, headers);
        var win = function(result) {
            var entry = new (require('cordova-plugin-file.FileEntry'))();
            entry.isDirectory = false;
            entry.isFile = true;
            entry.name = result.file.name;
            entry.fullPath = result.file.fullPath;
            entry.filesystem = new FileSystem(result.file.filesystemName || (result.file.filesystem == window.PERSISTENT ? 'persistent' : 'temporary'));
            entry.nativeURL = result.file.nativeURL;
            success(entry);
        };
        return exec(win, failure, "CordovaHttpPlugin", "downloadFile", [url, params, headers, filePath]);
    }
};

module.exports = http;

if (typeof angular !== "undefined") {
    angular.module('cordovaHTTP', []).factory('cordovaHTTP', function($timeout, $q) {
        function makePromise(fn, args, async) {
            var deferred = $q.defer();
            
            var success = function(response) {
                if (async) {
                    $timeout(function() {
                        deferred.resolve(response);
                    });
                } else {
                    deferred.resolve(response);
                }
            };
            
            var fail = function(response) {
                if (async) {
                    $timeout(function() {
                        deferred.reject(response);
                    });
                } else {
                    deferred.reject(response);
                }
            };
            
            args.push(success);
            args.push(fail);
            
            fn.apply(http, args);
            
            return deferred.promise;
        }
        
        var cordovaHTTP = {
            getBasicAuthHeader: http.getBasicAuthHeader,
            useBasicAuth: function(username, password) {
                return http.useBasicAuth(username, password);
            },
            setHeader: function(header, value) {
                return http.setHeader(header, value);
            },
            enableSSLPinning: function(enable) {
                return makePromise(http.enableSSLPinning, [enable]);
            },
            acceptAllCerts: function(allow) {
                return makePromise(http.acceptAllCerts, [allow]);
            },
            validateDomainName: function(validate) {
                return makePromise(http.validateDomainName, [validate]);
            },
            post: function(url, params, headers) {
                return makePromise(http.post, [url, params, headers], true);
            },
            get: function(url, params, headers) {
                return makePromise(http.get, [url, params, headers], true);
            },
            head: function(url, params, headers) {
                return makePromise(http.head, [url, params, headers], true);
            },
            uploadFile: function(url, params, headers, filePath, name) {
                return makePromise(http.uploadFile, [url, params, headers, filePath, name], true);
            },
            downloadFile: function(url, params, headers, filePath) {
                return makePromise(http.downloadFile, [url, params, headers, filePath], true);
            }
        };
        return cordovaHTTP;
    });
} else {
    window.cordovaHTTP = http;
}

});

cordova.define("cordova-plugin-file.DirectoryEntry", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    Entry = require('./Entry'),
    FileError = require('./FileError'),
    DirectoryReader = require('./DirectoryReader');

/**
 * An interface representing a directory on the file system.
 *
 * {boolean} isFile always false (readonly)
 * {boolean} isDirectory always true (readonly)
 * {DOMString} name of the directory, excluding the path leading to it (readonly)
 * {DOMString} fullPath the absolute full path to the directory (readonly)
 * {FileSystem} filesystem on which the directory resides (readonly)
 */
var DirectoryEntry = function(name, fullPath, fileSystem, nativeURL) {

    // add trailing slash if it is missing
    if ((fullPath) && !/\/$/.test(fullPath)) {
        fullPath += "/";
    }
    // add trailing slash if it is missing
    if (nativeURL && !/\/$/.test(nativeURL)) {
        nativeURL += "/";
    }
    DirectoryEntry.__super__.constructor.call(this, false, true, name, fullPath, fileSystem, nativeURL);
};

utils.extend(DirectoryEntry, Entry);

/**
 * Creates a new DirectoryReader to read entries from this directory
 */
DirectoryEntry.prototype.createReader = function() {
    return new DirectoryReader(this.toInternalURL());
};

/**
 * Creates or looks up a directory
 *
 * @param {DOMString} path either a relative or absolute path from this directory in which to look up or create a directory
 * @param {Flags} options to create or exclusively create the directory
 * @param {Function} successCallback is called with the new entry
 * @param {Function} errorCallback is called with a FileError
 */
DirectoryEntry.prototype.getDirectory = function(path, options, successCallback, errorCallback) {
    argscheck.checkArgs('sOFF', 'DirectoryEntry.getDirectory', arguments);
    var fs = this.filesystem;
    var win = successCallback && function(result) {
        var entry = new DirectoryEntry(result.name, result.fullPath, fs, result.nativeURL);
        successCallback(entry);
    };
    var fail = errorCallback && function(code) {
        errorCallback(new FileError(code));
    };
    exec(win, fail, "File", "getDirectory", [this.toInternalURL(), path, options]);
};

/**
 * Deletes a directory and all of it's contents
 *
 * @param {Function} successCallback is called with no parameters
 * @param {Function} errorCallback is called with a FileError
 */
DirectoryEntry.prototype.removeRecursively = function(successCallback, errorCallback) {
    argscheck.checkArgs('FF', 'DirectoryEntry.removeRecursively', arguments);
    var fail = errorCallback && function(code) {
        errorCallback(new FileError(code));
    };
    exec(successCallback, fail, "File", "removeRecursively", [this.toInternalURL()]);
};

/**
 * Creates or looks up a file
 *
 * @param {DOMString} path either a relative or absolute path from this directory in which to look up or create a file
 * @param {Flags} options to create or exclusively create the file
 * @param {Function} successCallback is called with the new entry
 * @param {Function} errorCallback is called with a FileError
 */
DirectoryEntry.prototype.getFile = function(path, options, successCallback, errorCallback) {
    argscheck.checkArgs('sOFF', 'DirectoryEntry.getFile', arguments);
    var fs = this.filesystem;
    var win = successCallback && function(result) {
        var FileEntry = require('./FileEntry');
        var entry = new FileEntry(result.name, result.fullPath, fs, result.nativeURL);
        successCallback(entry);
    };
    var fail = errorCallback && function(code) {
        errorCallback(new FileError(code));
    };
    exec(win, fail, "File", "getFile", [this.toInternalURL(), path, options]);
};

module.exports = DirectoryEntry;

});

cordova.define("cordova-plugin-file.DirectoryReader", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var exec = require('cordova/exec'),
    FileError = require('./FileError') ;

/**
 * An interface that lists the files and directories in a directory.
 */
function DirectoryReader(localURL) {
    this.localURL = localURL || null;
    this.hasReadEntries = false;
}

/**
 * Returns a list of entries from a directory.
 *
 * @param {Function} successCallback is called with a list of entries
 * @param {Function} errorCallback is called with a FileError
 */
DirectoryReader.prototype.readEntries = function(successCallback, errorCallback) {
    // If we've already read and passed on this directory's entries, return an empty list.
    if (this.hasReadEntries) {
        successCallback([]);
        return;
    }
    var reader = this;
    var win = typeof successCallback !== 'function' ? null : function(result) {
        var retVal = [];
        for (var i=0; i<result.length; i++) {
            var entry = null;
            if (result[i].isDirectory) {
                entry = new (require('./DirectoryEntry'))();
            }
            else if (result[i].isFile) {
                entry = new (require('./FileEntry'))();
            }
            entry.isDirectory = result[i].isDirectory;
            entry.isFile = result[i].isFile;
            entry.name = result[i].name;
            entry.fullPath = result[i].fullPath;
            entry.filesystem = new (require('./FileSystem'))(result[i].filesystemName);
            entry.nativeURL = result[i].nativeURL;
            retVal.push(entry);
        }
        reader.hasReadEntries = true;
        successCallback(retVal);
    };
    var fail = typeof errorCallback !== 'function' ? null : function(code) {
        errorCallback(new FileError(code));
    };
    exec(win, fail, "File", "readEntries", [this.localURL]);
};

module.exports = DirectoryReader;

});

cordova.define("cordova-plugin-file.Entry", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec'),
    FileError = require('./FileError'),
    Metadata = require('./Metadata');

/**
 * Represents a file or directory on the local file system.
 *
 * @param isFile
 *            {boolean} true if Entry is a file (readonly)
 * @param isDirectory
 *            {boolean} true if Entry is a directory (readonly)
 * @param name
 *            {DOMString} name of the file or directory, excluding the path
 *            leading to it (readonly)
 * @param fullPath
 *            {DOMString} the absolute full path to the file or directory
 *            (readonly)
 * @param fileSystem
 *            {FileSystem} the filesystem on which this entry resides
 *            (readonly)
 * @param nativeURL
 *            {DOMString} an alternate URL which can be used by native
 *            webview controls, for example media players.
 *            (optional, readonly)
 */
function Entry(isFile, isDirectory, name, fullPath, fileSystem, nativeURL) {
    this.isFile = !!isFile;
    this.isDirectory = !!isDirectory;
    this.name = name || '';
    this.fullPath = fullPath || '';
    this.filesystem = fileSystem || null;
    this.nativeURL = nativeURL || null;
}

/**
 * Look up the metadata of the entry.
 *
 * @param successCallback
 *            {Function} is called with a Metadata object
 * @param errorCallback
 *            {Function} is called with a FileError
 */
Entry.prototype.getMetadata = function(successCallback, errorCallback) {
    argscheck.checkArgs('FF', 'Entry.getMetadata', arguments);
    var success = successCallback && function(entryMetadata) {
        var metadata = new Metadata({
            size: entryMetadata.size,
            modificationTime: entryMetadata.lastModifiedDate
        });
        successCallback(metadata);
    };
    var fail = errorCallback && function(code) {
        errorCallback(new FileError(code));
    };
    exec(success, fail, "File", "getFileMetadata", [this.toInternalURL()]);
};

/**
 * Set the metadata of the entry.
 *
 * @param successCallback
 *            {Function} is called with a Metadata object
 * @param errorCallback
 *            {Function} is called with a FileError
 * @param metadataObject
 *            {Object} keys and values to set
 */
Entry.prototype.setMetadata = function(successCallback, errorCallback, metadataObject) {
    argscheck.checkArgs('FFO', 'Entry.setMetadata', arguments);
    exec(successCallback, errorCallback, "File", "setMetadata", [this.toInternalURL(), metadataObject]);
};

/**
 * Move a file or directory to a new location.
 *
 * @param parent
 *            {DirectoryEntry} the directory to which to move this entry
 * @param newName
 *            {DOMString} new name of the entry, defaults to the current name
 * @param successCallback
 *            {Function} called with the new DirectoryEntry object
 * @param errorCallback
 *            {Function} called with a FileError
 */
Entry.prototype.moveTo = function(parent, newName, successCallback, errorCallback) {
    argscheck.checkArgs('oSFF', 'Entry.moveTo', arguments);
    var fail = errorCallback && function(code) {
        errorCallback(new FileError(code));
    };
    var srcURL = this.toInternalURL(),
        // entry name
        name = newName || this.name,
        success = function(entry) {
            if (entry) {
                if (successCallback) {
                    // create appropriate Entry object
                    var newFSName = entry.filesystemName || (entry.filesystem && entry.filesystem.name);
                    var fs = newFSName ? new FileSystem(newFSName, { name: "", fullPath: "/" }) : new FileSystem(parent.filesystem.name, { name: "", fullPath: "/" });
                    var result = (entry.isDirectory) ? new (require('./DirectoryEntry'))(entry.name, entry.fullPath, fs, entry.nativeURL) : new (require('cordova-plugin-file.FileEntry'))(entry.name, entry.fullPath, fs, entry.nativeURL);
                    successCallback(result);
                }
            }
            else {
                // no Entry object returned
                if (fail) {
                    fail(FileError.NOT_FOUND_ERR);
                }
            }
        };

    // copy
    exec(success, fail, "File", "moveTo", [srcURL, parent.toInternalURL(), name]);
};

/**
 * Copy a directory to a different location.
 *
 * @param parent
 *            {DirectoryEntry} the directory to which to copy the entry
 * @param newName
 *            {DOMString} new name of the entry, defaults to the current name
 * @param successCallback
 *            {Function} called with the new Entry object
 * @param errorCallback
 *            {Function} called with a FileError
 */
Entry.prototype.copyTo = function(parent, newName, successCallback, errorCallback) {
    argscheck.checkArgs('oSFF', 'Entry.copyTo', arguments);
    var fail = errorCallback && function(code) {
        errorCallback(new FileError(code));
    };
    var srcURL = this.toInternalURL(),
        // entry name
        name = newName || this.name,
        // success callback
        success = function(entry) {
            if (entry) {
                if (successCallback) {
                    // create appropriate Entry object
                    var newFSName = entry.filesystemName || (entry.filesystem && entry.filesystem.name);
                    var fs = newFSName ? new FileSystem(newFSName, { name: "", fullPath: "/" }) : new FileSystem(parent.filesystem.name, { name: "", fullPath: "/" });
                    var result = (entry.isDirectory) ? new (require('./DirectoryEntry'))(entry.name, entry.fullPath, fs, entry.nativeURL) : new (require('cordova-plugin-file.FileEntry'))(entry.name, entry.fullPath, fs, entry.nativeURL);
                    successCallback(result);
                }
            }
            else {
                // no Entry object returned
                if (fail) {
                    fail(FileError.NOT_FOUND_ERR);
                }
            }
        };

    // copy
    exec(success, fail, "File", "copyTo", [srcURL, parent.toInternalURL(), name]);
};

/**
 * Return a URL that can be passed across the bridge to identify this entry.
 */
Entry.prototype.toInternalURL = function() {
    if (this.filesystem && this.filesystem.__format__) {
      return this.filesystem.__format__(this.fullPath, this.nativeURL);
    }
};

/**
 * Return a URL that can be used to identify this entry.
 * Use a URL that can be used to as the src attribute of a <video> or
 * <audio> tag. If that is not possible, construct a cdvfile:// URL.
 */
Entry.prototype.toURL = function() {
    if (this.nativeURL) {
      return this.nativeURL;
    }
    // fullPath attribute may contain the full URL in the case that
    // toInternalURL fails.
    return this.toInternalURL() || "file://localhost" + this.fullPath;
};

/**
 * Backwards-compatibility: In v1.0.0 - 1.0.2, .toURL would only return a
 * cdvfile:// URL, and this method was necessary to obtain URLs usable by the
 * webview.
 * See CB-6051, CB-6106, CB-6117, CB-6152, CB-6199, CB-6201, CB-6243, CB-6249,
 * and CB-6300.
 */
Entry.prototype.toNativeURL = function() {
    console.log("DEPRECATED: Update your code to use 'toURL'");
    return this.toURL();
};

/**
 * Returns a URI that can be used to identify this entry.
 *
 * @param {DOMString} mimeType for a FileEntry, the mime type to be used to interpret the file, when loaded through this URI.
 * @return uri
 */
Entry.prototype.toURI = function(mimeType) {
    console.log("DEPRECATED: Update your code to use 'toURL'");
    return this.toURL();
};

/**
 * Remove a file or directory. It is an error to attempt to delete a
 * directory that is not empty. It is an error to attempt to delete a
 * root directory of a file system.
 *
 * @param successCallback {Function} called with no parameters
 * @param errorCallback {Function} called with a FileError
 */
Entry.prototype.remove = function(successCallback, errorCallback) {
    argscheck.checkArgs('FF', 'Entry.remove', arguments);
    var fail = errorCallback && function(code) {
        errorCallback(new FileError(code));
    };
    exec(successCallback, fail, "File", "remove", [this.toInternalURL()]);
};

/**
 * Look up the parent DirectoryEntry of this entry.
 *
 * @param successCallback {Function} called with the parent DirectoryEntry object
 * @param errorCallback {Function} called with a FileError
 */
Entry.prototype.getParent = function(successCallback, errorCallback) {
    argscheck.checkArgs('FF', 'Entry.getParent', arguments);
    var fs = this.filesystem;
    var win = successCallback && function(result) {
        var DirectoryEntry = require('./DirectoryEntry');
        var entry = new DirectoryEntry(result.name, result.fullPath, fs, result.nativeURL);
        successCallback(entry);
    };
    var fail = errorCallback && function(code) {
        errorCallback(new FileError(code));
    };
    exec(win, fail, "File", "getParent", [this.toInternalURL()]);
};

module.exports = Entry;

});

cordova.define("cordova-plugin-file.File", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * Constructor.
 * name {DOMString} name of the file, without path information
 * fullPath {DOMString} the full path of the file, including the name
 * type {DOMString} mime type
 * lastModifiedDate {Date} last modified date
 * size {Number} size of the file in bytes
 */

var File = function(name, localURL, type, lastModifiedDate, size){
    this.name = name || '';
    this.localURL = localURL || null;
    this.type = type || null;
    this.lastModified = lastModifiedDate || null;
    // For backwards compatibility, store the timestamp in lastModifiedDate as well
    this.lastModifiedDate = lastModifiedDate || null;
    this.size = size || 0;

    // These store the absolute start and end for slicing the file.
    this.start = 0;
    this.end = this.size;
};

/**
 * Returns a "slice" of the file. Since Cordova Files don't contain the actual
 * content, this really returns a File with adjusted start and end.
 * Slices of slices are supported.
 * start {Number} The index at which to start the slice (inclusive).
 * end {Number} The index at which to end the slice (exclusive).
 */
File.prototype.slice = function(start, end) {
    var size = this.end - this.start;
    var newStart = 0;
    var newEnd = size;
    if (arguments.length) {
        if (start < 0) {
            newStart = Math.max(size + start, 0);
        } else {
            newStart = Math.min(size, start);
        }
    }

    if (arguments.length >= 2) {
        if (end < 0) {
            newEnd = Math.max(size + end, 0);
        } else {
            newEnd = Math.min(end, size);
        }
    }

    var newFile = new File(this.name, this.localURL, this.type, this.lastModified, this.size);
    newFile.start = this.start + newStart;
    newFile.end = this.start + newEnd;
    return newFile;
};


module.exports = File;

});

cordova.define("cordova-plugin-file.FileEntry", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    Entry = require('./Entry'),
    FileWriter = require('./FileWriter'),
    File = require('./File'),
    FileError = require('./FileError');

/**
 * An interface representing a file on the file system.
 *
 * {boolean} isFile always true (readonly)
 * {boolean} isDirectory always false (readonly)
 * {DOMString} name of the file, excluding the path leading to it (readonly)
 * {DOMString} fullPath the absolute full path to the file (readonly)
 * {FileSystem} filesystem on which the file resides (readonly)
 */
var FileEntry = function(name, fullPath, fileSystem, nativeURL) {
    // remove trailing slash if it is present
    if (fullPath && /\/$/.test(fullPath)) {
        fullPath = fullPath.substring(0, fullPath.length - 1);
    }
    if (nativeURL && /\/$/.test(nativeURL)) {
        nativeURL = nativeURL.substring(0, nativeURL.length - 1);
    }

    FileEntry.__super__.constructor.apply(this, [true, false, name, fullPath, fileSystem, nativeURL]);
};

utils.extend(FileEntry, Entry);

/**
 * Creates a new FileWriter associated with the file that this FileEntry represents.
 *
 * @param {Function} successCallback is called with the new FileWriter
 * @param {Function} errorCallback is called with a FileError
 */
FileEntry.prototype.createWriter = function(successCallback, errorCallback) {
    this.file(function(filePointer) {
        var writer = new FileWriter(filePointer);

        if (writer.localURL === null || writer.localURL === "") {
            if (errorCallback) {
                errorCallback(new FileError(FileError.INVALID_STATE_ERR));
            }
        } else {
            if (successCallback) {
                successCallback(writer);
            }
        }
    }, errorCallback);
};

/**
 * Returns a File that represents the current state of the file that this FileEntry represents.
 *
 * @param {Function} successCallback is called with the new File object
 * @param {Function} errorCallback is called with a FileError
 */
FileEntry.prototype.file = function(successCallback, errorCallback) {
    var localURL = this.toInternalURL();
    var win = successCallback && function(f) {
        var file = new File(f.name, localURL, f.type, f.lastModifiedDate, f.size);
        successCallback(file);
    };
    var fail = errorCallback && function(code) {
        errorCallback(new FileError(code));
    };
    exec(win, fail, "File", "getFileMetadata", [localURL]);
};


module.exports = FileEntry;

});

cordova.define("cordova-plugin-file.FileError", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * FileError
 */
function FileError(error) {
  this.code = error || null;
}

// File error codes
// Found in DOMException
FileError.NOT_FOUND_ERR = 1;
FileError.SECURITY_ERR = 2;
FileError.ABORT_ERR = 3;

// Added by File API specification
FileError.NOT_READABLE_ERR = 4;
FileError.ENCODING_ERR = 5;
FileError.NO_MODIFICATION_ALLOWED_ERR = 6;
FileError.INVALID_STATE_ERR = 7;
FileError.SYNTAX_ERR = 8;
FileError.INVALID_MODIFICATION_ERR = 9;
FileError.QUOTA_EXCEEDED_ERR = 10;
FileError.TYPE_MISMATCH_ERR = 11;
FileError.PATH_EXISTS_ERR = 12;

module.exports = FileError;

});

cordova.define("cordova-plugin-file.FileReader", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var exec = require('cordova/exec'),
    modulemapper = require('cordova/modulemapper'),
    utils = require('cordova/utils'),
    FileError = require('./FileError'),
    ProgressEvent = require('./ProgressEvent'),
    origFileReader = modulemapper.getOriginalSymbol(window, 'FileReader');

/**
 * This class reads the mobile device file system.
 *
 * For Android:
 *      The root directory is the root of the file system.
 *      To read from the SD card, the file name is "sdcard/my_file.txt"
 * @constructor
 */
var FileReader = function() {
    this._readyState = 0;
    this._error = null;
    this._result = null;
    this._progress = null;
    this._localURL = '';
    this._realReader = origFileReader ? new origFileReader() : {};
};

/**
 * Defines the maximum size to read at a time via the native API. The default value is a compromise between
 * minimizing the overhead of many exec() calls while still reporting progress frequently enough for large files.
 * (Note attempts to allocate more than a few MB of contiguous memory on the native side are likely to cause
 * OOM exceptions, while the JS engine seems to have fewer problems managing large strings or ArrayBuffers.)
 */
FileReader.READ_CHUNK_SIZE = 256*1024;

// States
FileReader.EMPTY = 0;
FileReader.LOADING = 1;
FileReader.DONE = 2;

utils.defineGetter(FileReader.prototype, 'readyState', function() {
    return this._localURL ? this._readyState : this._realReader.readyState;
});

utils.defineGetter(FileReader.prototype, 'error', function() {
    return this._localURL ? this._error: this._realReader.error;
});

utils.defineGetter(FileReader.prototype, 'result', function() {
    return this._localURL ? this._result: this._realReader.result;
});

function defineEvent(eventName) {
    utils.defineGetterSetter(FileReader.prototype, eventName, function() {
        return this._realReader[eventName] || null;
    }, function(value) {
        this._realReader[eventName] = value;
    });
}
defineEvent('onloadstart');    // When the read starts.
defineEvent('onprogress');     // While reading (and decoding) file or fileBlob data, and reporting partial file data (progress.loaded/progress.total)
defineEvent('onload');         // When the read has successfully completed.
defineEvent('onerror');        // When the read has failed (see errors).
defineEvent('onloadend');      // When the request has completed (either in success or failure).
defineEvent('onabort');        // When the read has been aborted. For instance, by invoking the abort() method.

function initRead(reader, file) {
    // Already loading something
    if (reader.readyState == FileReader.LOADING) {
      throw new FileError(FileError.INVALID_STATE_ERR);
    }

    reader._result = null;
    reader._error = null;
    reader._progress = 0;
    reader._readyState = FileReader.LOADING;

    if (typeof file.localURL == 'string') {
        reader._localURL = file.localURL;
    } else {
        reader._localURL = '';
        return true;
    }

    if (reader.onloadstart) {
        reader.onloadstart(new ProgressEvent("loadstart", {target:reader}));
    }
}

/**
 * Callback used by the following read* functions to handle incremental or final success.
 * Must be bound to the FileReader's this along with all but the last parameter,
 * e.g. readSuccessCallback.bind(this, "readAsText", "UTF-8", offset, totalSize, accumulate)
 * @param readType The name of the read function to call.
 * @param encoding Text encoding, or null if this is not a text type read.
 * @param offset Starting offset of the read.
 * @param totalSize Total number of bytes or chars to read.
 * @param accumulate A function that takes the callback result and accumulates it in this._result.
 * @param r Callback result returned by the last read exec() call, or null to begin reading.
 */
function readSuccessCallback(readType, encoding, offset, totalSize, accumulate, r) {
    if (this._readyState === FileReader.DONE) {
        return;
    }

    var CHUNK_SIZE = FileReader.READ_CHUNK_SIZE;
    if (readType === 'readAsDataURL') {
        // Windows proxy does not support reading file slices as Data URLs
        // so read the whole file at once.
        CHUNK_SIZE = cordova.platformId === 'windows' ? totalSize :
            // Calculate new chunk size for data URLs to be multiply of 3
            // Otherwise concatenated base64 chunks won't be valid base64 data
            FileReader.READ_CHUNK_SIZE - (FileReader.READ_CHUNK_SIZE % 3) + 3;
    }

    if (typeof r !== "undefined") {
        accumulate(r);
        this._progress = Math.min(this._progress + CHUNK_SIZE, totalSize);

        if (typeof this.onprogress === "function") {
            this.onprogress(new ProgressEvent("progress", {loaded:this._progress, total:totalSize}));
        }
    }

    if (typeof r === "undefined" || this._progress < totalSize) {
        var execArgs = [
            this._localURL,
            offset + this._progress,
            offset + this._progress + Math.min(totalSize - this._progress, CHUNK_SIZE)];
        if (encoding) {
            execArgs.splice(1, 0, encoding);
        }
        exec(
            readSuccessCallback.bind(this, readType, encoding, offset, totalSize, accumulate),
            readFailureCallback.bind(this),
            "File", readType, execArgs);
    } else {
        this._readyState = FileReader.DONE;

        if (typeof this.onload === "function") {
            this.onload(new ProgressEvent("load", {target:this}));
        }

        if (typeof this.onloadend === "function") {
            this.onloadend(new ProgressEvent("loadend", {target:this}));
        }
    }
}

/**
 * Callback used by the following read* functions to handle errors.
 * Must be bound to the FileReader's this, e.g. readFailureCallback.bind(this)
 */
function readFailureCallback(e) {
    if (this._readyState === FileReader.DONE) {
        return;
    }

    this._readyState = FileReader.DONE;
    this._result = null;
    this._error = new FileError(e);

    if (typeof this.onerror === "function") {
        this.onerror(new ProgressEvent("error", {target:this}));
    }

    if (typeof this.onloadend === "function") {
        this.onloadend(new ProgressEvent("loadend", {target:this}));
    }
}

/**
 * Abort reading file.
 */
FileReader.prototype.abort = function() {
    if (origFileReader && !this._localURL) {
        return this._realReader.abort();
    }
    this._result = null;

    if (this._readyState == FileReader.DONE || this._readyState == FileReader.EMPTY) {
      return;
    }

    this._readyState = FileReader.DONE;

    // If abort callback
    if (typeof this.onabort === 'function') {
        this.onabort(new ProgressEvent('abort', {target:this}));
    }
    // If load end callback
    if (typeof this.onloadend === 'function') {
        this.onloadend(new ProgressEvent('loadend', {target:this}));
    }
};

/**
 * Read text file.
 *
 * @param file          {File} File object containing file properties
 * @param encoding      [Optional] (see http://www.iana.org/assignments/character-sets)
 */
FileReader.prototype.readAsText = function(file, encoding) {
    if (initRead(this, file)) {
        return this._realReader.readAsText(file, encoding);
    }

    // Default encoding is UTF-8
    var enc = encoding ? encoding : "UTF-8";

    var totalSize = file.end - file.start;
    readSuccessCallback.bind(this)("readAsText", enc, file.start, totalSize, function(r) {
        if (this._progress === 0) {
            this._result = "";
        }
        this._result += r;
    }.bind(this));
};


/**
 * Read file and return data as a base64 encoded data url.
 * A data url is of the form:
 *      data:[<mediatype>][;base64],<data>
 *
 * @param file          {File} File object containing file properties
 */
FileReader.prototype.readAsDataURL = function(file) {
    if (initRead(this, file)) {
        return this._realReader.readAsDataURL(file);
    }

    var totalSize = file.end - file.start;
    readSuccessCallback.bind(this)("readAsDataURL", null, file.start, totalSize, function(r) {
        var commaIndex = r.indexOf(',');
        if (this._progress === 0) {
            this._result = r;
        } else {
            this._result += r.substring(commaIndex + 1);
        }
    }.bind(this));
};

/**
 * Read file and return data as a binary data.
 *
 * @param file          {File} File object containing file properties
 */
FileReader.prototype.readAsBinaryString = function(file) {
    if (initRead(this, file)) {
        return this._realReader.readAsBinaryString(file);
    }

    var totalSize = file.end - file.start;
    readSuccessCallback.bind(this)("readAsBinaryString", null, file.start, totalSize, function(r) {
        if (this._progress === 0) {
            this._result = "";
        }
        this._result += r;
    }.bind(this));
};

/**
 * Read file and return data as a binary data.
 *
 * @param file          {File} File object containing file properties
 */
FileReader.prototype.readAsArrayBuffer = function(file) {
    if (initRead(this, file)) {
        return this._realReader.readAsArrayBuffer(file);
    }

    var totalSize = file.end - file.start;
    readSuccessCallback.bind(this)("readAsArrayBuffer", null, file.start, totalSize, function(r) {
        var resultArray = (this._progress === 0 ? new Uint8Array(totalSize) : new Uint8Array(this._result));
        resultArray.set(new Uint8Array(r), this._progress);
        this._result = resultArray.buffer;
    }.bind(this));
};

module.exports = FileReader;

});

cordova.define("cordova-plugin-file.FileSystem", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var DirectoryEntry = require('./DirectoryEntry');

/**
 * An interface representing a file system
 *
 * @constructor
 * {DOMString} name the unique name of the file system (readonly)
 * {DirectoryEntry} root directory of the file system (readonly)
 */
var FileSystem = function(name, root) {
    this.name = name;
    if (root) {
        this.root = new DirectoryEntry(root.name, root.fullPath, this, root.nativeURL);
    } else {
        this.root = new DirectoryEntry(this.name, '/', this);
    }
};

FileSystem.prototype.__format__ = function(fullPath, nativeUrl) {
    return fullPath;
};

FileSystem.prototype.toJSON = function() {
    return "<FileSystem: " + this.name + ">";
};

// Use instead of encodeURI() when encoding just the path part of a URI rather than an entire URI.
FileSystem.encodeURIPath = function(path) {
    // Because # is a valid filename character, it must be encoded to prevent part of the
    // path from being parsed as a URI fragment.
    return encodeURI(path).replace(/#/g, '%23');
};

module.exports = FileSystem;

});

cordova.define("cordova-plugin-file.fileSystemPaths", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var exec = require('cordova/exec');
var channel = require('cordova/channel');

exports.file = {
    // Read-only directory where the application is installed.
    applicationDirectory: null,
    // Root of app's private writable storage
    applicationStorageDirectory: null,
    // Where to put app-specific data files.
    dataDirectory: null,
    // Cached files that should survive app restarts.
    // Apps should not rely on the OS to delete files in here.
    cacheDirectory: null,
    // Android: the application space on external storage.
    externalApplicationStorageDirectory: null,
    // Android: Where to put app-specific data files on external storage.
    externalDataDirectory: null,
    // Android: the application cache on external storage.
    externalCacheDirectory: null,
    // Android: the external storage (SD card) root.
    externalRootDirectory: null,
    // iOS: Temp directory that the OS can clear at will.
    tempDirectory: null,
    // iOS: Holds app-specific files that should be synced (e.g. to iCloud).
    syncedDataDirectory: null,
    // iOS: Files private to the app, but that are meaningful to other applications (e.g. Office files)
    documentsDirectory: null,
    // BlackBerry10: Files globally available to all apps
    sharedDirectory: null
};

channel.waitForInitialization('onFileSystemPathsReady');
channel.onCordovaReady.subscribe(function() {
    function after(paths) {
        for (var k in paths) {
            exports.file[k] = paths[k];
        }
        channel.initializationComplete('onFileSystemPathsReady');
    }
    exec(after, null, 'File', 'requestAllPaths', []);
});


});

cordova.define("cordova-plugin-file.fileSystems", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

// Overridden by Android, BlackBerry 10 and iOS to populate fsMap.
module.exports.getFs = function(name, callback) {
    callback(null);
};

});

cordova.define("cordova-plugin-file.FileUploadOptions", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * Options to customize the HTTP request used to upload files.
 * @constructor
 * @param fileKey {String}   Name of file request parameter.
 * @param fileName {String}  Filename to be used by the server. Defaults to image.jpg.
 * @param mimeType {String}  Mimetype of the uploaded file. Defaults to image/jpeg.
 * @param params {Object}    Object with key: value params to send to the server.
 * @param headers {Object}   Keys are header names, values are header values. Multiple
 *                           headers of the same name are not supported.
 */
var FileUploadOptions = function(fileKey, fileName, mimeType, params, headers, httpMethod) {
    this.fileKey = fileKey || null;
    this.fileName = fileName || null;
    this.mimeType = mimeType || null;
    this.params = params || null;
    this.headers = headers || null;
    this.httpMethod = httpMethod || null;
};

module.exports = FileUploadOptions;

});

cordova.define("cordova-plugin-file.FileUploadResult", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * FileUploadResult
 * @constructor
 */
module.exports = function FileUploadResult(size, code, content) {
	this.bytesSent = size;
	this.responseCode = code;
	this.response = content;
 };
});

cordova.define("cordova-plugin-file.FileWriter", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var exec = require('cordova/exec'),
    FileError = require('./FileError'),
    ProgressEvent = require('./ProgressEvent');

/**
 * This class writes to the mobile device file system.
 *
 * For Android:
 *      The root directory is the root of the file system.
 *      To write to the SD card, the file name is "sdcard/my_file.txt"
 *
 * @constructor
 * @param file {File} File object containing file properties
 * @param append if true write to the end of the file, otherwise overwrite the file
 */
var FileWriter = function(file) {
    this.fileName = "";
    this.length = 0;
    if (file) {
        this.localURL = file.localURL || file;
        this.length = file.size || 0;
    }
    // default is to write at the beginning of the file
    this.position = 0;

    this.readyState = 0; // EMPTY

    this.result = null;

    // Error
    this.error = null;

    // Event handlers
    this.onwritestart = null;   // When writing starts
    this.onprogress = null;     // While writing the file, and reporting partial file data
    this.onwrite = null;        // When the write has successfully completed.
    this.onwriteend = null;     // When the request has completed (either in success or failure).
    this.onabort = null;        // When the write has been aborted. For instance, by invoking the abort() method.
    this.onerror = null;        // When the write has failed (see errors).
};

// States
FileWriter.INIT = 0;
FileWriter.WRITING = 1;
FileWriter.DONE = 2;

/**
 * Abort writing file.
 */
FileWriter.prototype.abort = function() {
    // check for invalid state
    if (this.readyState === FileWriter.DONE || this.readyState === FileWriter.INIT) {
        throw new FileError(FileError.INVALID_STATE_ERR);
    }

    // set error
    this.error = new FileError(FileError.ABORT_ERR);

    this.readyState = FileWriter.DONE;

    // If abort callback
    if (typeof this.onabort === "function") {
        this.onabort(new ProgressEvent("abort", {"target":this}));
    }

    // If write end callback
    if (typeof this.onwriteend === "function") {
        this.onwriteend(new ProgressEvent("writeend", {"target":this}));
    }
};

/**
 * Writes data to the file
 *
 * @param data text or blob to be written
 * @param isPendingBlobReadResult {Boolean} true if the data is the pending blob read operation result
 */
FileWriter.prototype.write = function(data, isPendingBlobReadResult) {

    var that=this;
    var supportsBinary = (typeof window.Blob !== 'undefined' && typeof window.ArrayBuffer !== 'undefined');
    var isProxySupportBlobNatively = (cordova.platformId === "windows8" || cordova.platformId === "windows");
    var isBinary;

    // Check to see if the incoming data is a blob
    if (data instanceof File || (!isProxySupportBlobNatively && supportsBinary && data instanceof Blob)) {
        var fileReader = new FileReader();
        fileReader.onload = function() {
            // Call this method again, with the arraybuffer as argument
            FileWriter.prototype.write.call(that, this.result, true /* isPendingBlobReadResult */);
        };
        fileReader.onerror = function () {
            // DONE state
            that.readyState = FileWriter.DONE;

            // Save error
            that.error = this.error;

            // If onerror callback
            if (typeof that.onerror === "function") {
                that.onerror(new ProgressEvent("error", {"target":that}));
            }

            // If onwriteend callback
            if (typeof that.onwriteend === "function") {
                that.onwriteend(new ProgressEvent("writeend", {"target":that}));
            }
        };

        // WRITING state
        this.readyState = FileWriter.WRITING;

        if (supportsBinary) {
            fileReader.readAsArrayBuffer(data);
        } else {
            fileReader.readAsText(data);
        }
        return;
    }

    // Mark data type for safer transport over the binary bridge
    isBinary = supportsBinary && (data instanceof ArrayBuffer);
    if (isBinary && cordova.platformId === "windowsphone") {
        // create a plain array, using the keys from the Uint8Array view so that we can serialize it
        data = Array.apply(null, new Uint8Array(data));
    }
    
    // Throw an exception if we are already writing a file
    if (this.readyState === FileWriter.WRITING && !isPendingBlobReadResult) {
        throw new FileError(FileError.INVALID_STATE_ERR);
    }

    // WRITING state
    this.readyState = FileWriter.WRITING;

    var me = this;

    // If onwritestart callback
    if (typeof me.onwritestart === "function") {
        me.onwritestart(new ProgressEvent("writestart", {"target":me}));
    }

    // Write file
    exec(
        // Success callback
        function(r) {
            // If DONE (cancelled), then don't do anything
            if (me.readyState === FileWriter.DONE) {
                return;
            }

            // position always increases by bytes written because file would be extended
            me.position += r;
            // The length of the file is now where we are done writing.

            me.length = me.position;

            // DONE state
            me.readyState = FileWriter.DONE;

            // If onwrite callback
            if (typeof me.onwrite === "function") {
                me.onwrite(new ProgressEvent("write", {"target":me}));
            }

            // If onwriteend callback
            if (typeof me.onwriteend === "function") {
                me.onwriteend(new ProgressEvent("writeend", {"target":me}));
            }
        },
        // Error callback
        function(e) {
            // If DONE (cancelled), then don't do anything
            if (me.readyState === FileWriter.DONE) {
                return;
            }

            // DONE state
            me.readyState = FileWriter.DONE;

            // Save error
            me.error = new FileError(e);

            // If onerror callback
            if (typeof me.onerror === "function") {
                me.onerror(new ProgressEvent("error", {"target":me}));
            }

            // If onwriteend callback
            if (typeof me.onwriteend === "function") {
                me.onwriteend(new ProgressEvent("writeend", {"target":me}));
            }
        }, "File", "write", [this.localURL, data, this.position, isBinary]);
};

/**
 * Moves the file pointer to the location specified.
 *
 * If the offset is a negative number the position of the file
 * pointer is rewound.  If the offset is greater than the file
 * size the position is set to the end of the file.
 *
 * @param offset is the location to move the file pointer to.
 */
FileWriter.prototype.seek = function(offset) {
    // Throw an exception if we are already writing a file
    if (this.readyState === FileWriter.WRITING) {
        throw new FileError(FileError.INVALID_STATE_ERR);
    }

    if (!offset && offset !== 0) {
        return;
    }

    // See back from end of file.
    if (offset < 0) {
        this.position = Math.max(offset + this.length, 0);
    }
    // Offset is bigger than file size so set position
    // to the end of the file.
    else if (offset > this.length) {
        this.position = this.length;
    }
    // Offset is between 0 and file size so set the position
    // to start writing.
    else {
        this.position = offset;
    }
};

/**
 * Truncates the file to the size specified.
 *
 * @param size to chop the file at.
 */
FileWriter.prototype.truncate = function(size) {
    // Throw an exception if we are already writing a file
    if (this.readyState === FileWriter.WRITING) {
        throw new FileError(FileError.INVALID_STATE_ERR);
    }

    // WRITING state
    this.readyState = FileWriter.WRITING;

    var me = this;

    // If onwritestart callback
    if (typeof me.onwritestart === "function") {
        me.onwritestart(new ProgressEvent("writestart", {"target":this}));
    }

    // Write file
    exec(
        // Success callback
        function(r) {
            // If DONE (cancelled), then don't do anything
            if (me.readyState === FileWriter.DONE) {
                return;
            }

            // DONE state
            me.readyState = FileWriter.DONE;

            // Update the length of the file
            me.length = r;
            me.position = Math.min(me.position, r);

            // If onwrite callback
            if (typeof me.onwrite === "function") {
                me.onwrite(new ProgressEvent("write", {"target":me}));
            }

            // If onwriteend callback
            if (typeof me.onwriteend === "function") {
                me.onwriteend(new ProgressEvent("writeend", {"target":me}));
            }
        },
        // Error callback
        function(e) {
            // If DONE (cancelled), then don't do anything
            if (me.readyState === FileWriter.DONE) {
                return;
            }

            // DONE state
            me.readyState = FileWriter.DONE;

            // Save error
            me.error = new FileError(e);

            // If onerror callback
            if (typeof me.onerror === "function") {
                me.onerror(new ProgressEvent("error", {"target":me}));
            }

            // If onwriteend callback
            if (typeof me.onwriteend === "function") {
                me.onwriteend(new ProgressEvent("writeend", {"target":me}));
            }
        }, "File", "truncate", [this.localURL, size]);
};

module.exports = FileWriter;

});

cordova.define("cordova-plugin-file.Flags", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * Supplies arguments to methods that lookup or create files and directories.
 *
 * @param create
 *            {boolean} file or directory if it doesn't exist
 * @param exclusive
 *            {boolean} used with create; if true the command will fail if
 *            target path exists
 */
function Flags(create, exclusive) {
    this.create = create || false;
    this.exclusive = exclusive || false;
}

module.exports = Flags;

});

cordova.define("cordova-plugin-file.LocalFileSystem", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

exports.TEMPORARY = 0;
exports.PERSISTENT = 1;

});

cordova.define("cordova-plugin-file.Metadata", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * Information about the state of the file or directory
 *
 * {Date} modificationTime (readonly)
 */
var Metadata = function(metadata) {
    if (typeof metadata == "object") {
        this.modificationTime = new Date(metadata.modificationTime);
        this.size = metadata.size || 0;
    } else if (typeof metadata == "undefined") {
        this.modificationTime = null;
        this.size = 0;
    } else {
        /* Backwards compatiblity with platforms that only return a timestamp */
        this.modificationTime = new Date(metadata);
    }
};

module.exports = Metadata;

});

cordova.define("cordova-plugin-file.ProgressEvent", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

// If ProgressEvent exists in global context, use it already, otherwise use our own polyfill
// Feature test: See if we can instantiate a native ProgressEvent;
// if so, use that approach,
// otherwise fill-in with our own implementation.
//
// NOTE: right now we always fill in with our own. Down the road would be nice if we can use whatever is native in the webview.
var ProgressEvent = (function() {
    /*
    var createEvent = function(data) {
        var event = document.createEvent('Events');
        event.initEvent('ProgressEvent', false, false);
        if (data) {
            for (var i in data) {
                if (data.hasOwnProperty(i)) {
                    event[i] = data[i];
                }
            }
            if (data.target) {
                // TODO: cannot call <some_custom_object>.dispatchEvent
                // need to first figure out how to implement EventTarget
            }
        }
        return event;
    };
    try {
        var ev = createEvent({type:"abort",target:document});
        return function ProgressEvent(type, data) {
            data.type = type;
            return createEvent(data);
        };
    } catch(e){
    */
        return function ProgressEvent(type, dict) {
            this.type = type;
            this.bubbles = false;
            this.cancelBubble = false;
            this.cancelable = false;
            this.lengthComputable = false;
            this.loaded = dict && dict.loaded ? dict.loaded : 0;
            this.total = dict && dict.total ? dict.total : 0;
            this.target = dict && dict.target ? dict.target : null;
        };
    //}
})();

module.exports = ProgressEvent;

});

cordova.define("cordova-plugin-file.requestFileSystem", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

(function() {
    //For browser platform: not all browsers use this file.
    function checkBrowser() {
        if (cordova.platformId === "browser" && require('./isChrome')()) {
            module.exports = window.requestFileSystem || window.webkitRequestFileSystem;
            return true;
        }
        return false;
    }
    if (checkBrowser()) {
        return;
    }

    var argscheck = require('cordova/argscheck'),
        FileError = require('./FileError'),
        FileSystem = require('./FileSystem'),
        exec = require('cordova/exec');
    var fileSystems = require('./fileSystems');

    /**
     * Request a file system in which to store application data.
     * @param type  local file system type
     * @param size  indicates how much storage space, in bytes, the application expects to need
     * @param successCallback  invoked with a FileSystem object
     * @param errorCallback  invoked if error occurs retrieving file system
     */
    var requestFileSystem = function(type, size, successCallback, errorCallback) {
        argscheck.checkArgs('nnFF', 'requestFileSystem', arguments);
        var fail = function(code) {
            if (errorCallback) {
                errorCallback(new FileError(code));
            }
        };

        if (type < 0) {
            fail(FileError.SYNTAX_ERR);
        } else {
            // if successful, return a FileSystem object
            var success = function(file_system) {
                if (file_system) {
                    if (successCallback) {
                        fileSystems.getFs(file_system.name, function(fs) {
                            // This should happen only on platforms that haven't implemented requestAllFileSystems (windows)
                            if (!fs) {
                                fs = new FileSystem(file_system.name, file_system.root);
                            }
                            successCallback(fs);
                        });
                    }
                }
                else {
                    // no FileSystem object returned
                    fail(FileError.NOT_FOUND_ERR);
                }
            };
            exec(success, fail, "File", "requestFileSystem", [type, size]);
        }
    };

    module.exports = requestFileSystem;
})();

});

cordova.define("cordova-plugin-file.resolveLocalFileSystemURI", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/
(function() {
    //For browser platform: not all browsers use overrided `resolveLocalFileSystemURL`.
    function checkBrowser() {
        if (cordova.platformId === "browser" && require('./isChrome')()) {
            module.exports.resolveLocalFileSystemURL = window.resolveLocalFileSystemURL || window.webkitResolveLocalFileSystemURL;
            return true;
        }
        return false;
    }
    if (checkBrowser()) {
        return;
    }

    var argscheck = require('cordova/argscheck'),
        DirectoryEntry = require('./DirectoryEntry'),
        FileEntry = require('./FileEntry'),
        FileError = require('./FileError'),
        exec = require('cordova/exec');
    var fileSystems = require('./fileSystems');

    /**
     * Look up file system Entry referred to by local URI.
     * @param {DOMString} uri  URI referring to a local file or directory
     * @param successCallback  invoked with Entry object corresponding to URI
     * @param errorCallback    invoked if error occurs retrieving file system entry
     */
    module.exports.resolveLocalFileSystemURL = module.exports.resolveLocalFileSystemURL || function(uri, successCallback, errorCallback) {
        argscheck.checkArgs('sFF', 'resolveLocalFileSystemURI', arguments);
        // error callback
        var fail = function(error) {
            if (errorCallback) {
                errorCallback(new FileError(error));
            }
        };
        // sanity check for 'not:valid:filename' or '/not:valid:filename'
        // file.spec.12 window.resolveLocalFileSystemURI should error (ENCODING_ERR) when resolving invalid URI with leading /.
        if(!uri || uri.split(":").length > 2) {
            setTimeout( function() {
                fail(FileError.ENCODING_ERR);
            },0);
            return;
        }
        // if successful, return either a file or directory entry
        var success = function(entry) {
            if (entry) {
                if (successCallback) {
                    // create appropriate Entry object
                    var fsName = entry.filesystemName || (entry.filesystem && entry.filesystem.name) || (entry.filesystem == window.PERSISTENT ? 'persistent' : 'temporary');
                    fileSystems.getFs(fsName, function(fs) {
                        // This should happen only on platforms that haven't implemented requestAllFileSystems (windows)
                        if (!fs) {
                            fs = new FileSystem(fsName, {name:"", fullPath:"/"});
                        }
                        var result = (entry.isDirectory) ? new DirectoryEntry(entry.name, entry.fullPath, fs, entry.nativeURL) : new FileEntry(entry.name, entry.fullPath, fs, entry.nativeURL);
                        successCallback(result);
                    });
                }
            }
            else {
                // no Entry object returned
                fail(FileError.NOT_FOUND_ERR);
            }
        };

        exec(success, fail, "File", "resolveLocalFileSystemURI", [uri]);
    };

    module.exports.resolveLocalFileSystemURI = function() {
        console.log("resolveLocalFileSystemURI is deprecated. Please call resolveLocalFileSystemURL instead.");
        module.exports.resolveLocalFileSystemURL.apply(this, arguments);
    };
})();

});

cordova.define("cordova-plugin-inappbrowser.inappbrowser", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

(function() {
    // special patch to correctly work on Ripple emulator (CB-9760)
    if (window.parent && !!window.parent.ripple) { // https://gist.github.com/triceam/4658021
        module.exports = window.open.bind(window); // fallback to default window.open behaviour
        return;
    }

    var exec = require('cordova/exec');
    var channel = require('cordova/channel');
    var modulemapper = require('cordova/modulemapper');
    var urlutil = require('cordova/urlutil');

    function InAppBrowser() {
       this.channels = {
            'loadstart': channel.create('loadstart'),
            'loadstop' : channel.create('loadstop'),
            'loaderror' : channel.create('loaderror'),
            'exit' : channel.create('exit')
       };
    }

    InAppBrowser.prototype = {
        _eventHandler: function (event) {
            if (event && (event.type in this.channels)) {
                this.channels[event.type].fire(event);
            }
        },
        close: function (eventname) {
            exec(null, null, "InAppBrowser", "close", []);
        },
        show: function (eventname) {
            exec(null, null, "InAppBrowser", "show", []);
        },
        hide: function (eventname) {
            exec(null, null, "InAppBrowser", "hide", []);
        },
        addEventListener: function (eventname,f) {
            if (eventname in this.channels) {
                this.channels[eventname].subscribe(f);
            }
        },
        removeEventListener: function(eventname, f) {
            if (eventname in this.channels) {
                this.channels[eventname].unsubscribe(f);
            }
        },

        executeScript: function(injectDetails, cb) {
            if (injectDetails.code) {
                exec(cb, null, "InAppBrowser", "injectScriptCode", [injectDetails.code, !!cb]);
            } else if (injectDetails.file) {
                exec(cb, null, "InAppBrowser", "injectScriptFile", [injectDetails.file, !!cb]);
            } else {
                throw new Error('executeScript requires exactly one of code or file to be specified');
            }
        },

        insertCSS: function(injectDetails, cb) {
            if (injectDetails.code) {
                exec(cb, null, "InAppBrowser", "injectStyleCode", [injectDetails.code, !!cb]);
            } else if (injectDetails.file) {
                exec(cb, null, "InAppBrowser", "injectStyleFile", [injectDetails.file, !!cb]);
            } else {
                throw new Error('insertCSS requires exactly one of code or file to be specified');
            }
        }
    };

    module.exports = function(strUrl, strWindowName, strWindowFeatures, callbacks) {
        // Don't catch calls that write to existing frames (e.g. named iframes).
        if (window.frames && window.frames[strWindowName]) {
            var origOpenFunc = modulemapper.getOriginalSymbol(window, 'open');
            return origOpenFunc.apply(window, arguments);
        }

        strUrl = urlutil.makeAbsolute(strUrl);
        var iab = new InAppBrowser();

        callbacks = callbacks || {};
        for (var callbackName in callbacks) {
            iab.addEventListener(callbackName, callbacks[callbackName]);
        }

        var cb = function(eventname) {
           iab._eventHandler(eventname);
        };

        strWindowFeatures = strWindowFeatures || "";

        exec(cb, cb, "InAppBrowser", "open", [strUrl, strWindowName, strWindowFeatures]);
        return iab;
    };
})();

});

cordova.define("cordova-plugin-network-information.Connection", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * Network status
 */
module.exports = {
        UNKNOWN: "unknown",
        ETHERNET: "ethernet",
        WIFI: "wifi",
        CELL_2G: "2g",
        CELL_3G: "3g",
        CELL_4G: "4g",
        CELL:"cellular",
        NONE: "none"
};

});

cordova.define("cordova-plugin-network-information.network", function(require, exports, module) { /*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var exec = require('cordova/exec'),
    cordova = require('cordova'),
    channel = require('cordova/channel'),
    utils = require('cordova/utils');

// Link the onLine property with the Cordova-supplied network info.
// This works because we clobber the navigator object with our own
// object in bootstrap.js.
// Browser platform do not need to define this property, because
// it is already supported by modern browsers
if (cordova.platformId !== 'browser' && typeof navigator != 'undefined') {
    utils.defineGetter(navigator, 'onLine', function() {
        return this.connection.type != 'none';
    });
}

function NetworkConnection() {
    this.type = 'unknown';
}

/**
 * Get connection info
 *
 * @param {Function} successCallback The function to call when the Connection data is available
 * @param {Function} errorCallback The function to call when there is an error getting the Connection data. (OPTIONAL)
 */
NetworkConnection.prototype.getInfo = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "NetworkStatus", "getConnectionInfo", []);
};

var me = new NetworkConnection();
var timerId = null;
var timeout = 500;

channel.createSticky('onCordovaConnectionReady');
channel.waitForInitialization('onCordovaConnectionReady');

channel.onCordovaReady.subscribe(function() {
    me.getInfo(function(info) {
        me.type = info;
        if (info === "none") {
            // set a timer if still offline at the end of timer send the offline event
            timerId = setTimeout(function(){
                cordova.fireDocumentEvent("offline");
                timerId = null;
            }, timeout);
        } else {
            // If there is a current offline event pending clear it
            if (timerId !== null) {
                clearTimeout(timerId);
                timerId = null;
            }
            cordova.fireDocumentEvent("online");
        }

        // should only fire this once
        if (channel.onCordovaConnectionReady.state !== 2) {
            channel.onCordovaConnectionReady.fire();
        }
    },
    function (e) {
        // If we can't get the network info we should still tell Cordova
        // to fire the deviceready event.
        if (channel.onCordovaConnectionReady.state !== 2) {
            channel.onCordovaConnectionReady.fire();
        }
        console.log("Error initializing Network Connection: " + e);
    });
});

module.exports = me;

});

cordova.define("cordova-plugin-splashscreen.SplashScreen", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var exec = require('cordova/exec');

var splashscreen = {
    show:function() {
        exec(null, null, "SplashScreen", "show", []);
    },
    hide:function() {
        exec(null, null, "SplashScreen", "hide", []);
    }
};

module.exports = splashscreen;

});

cordova.define("cordova-plugin-x-socialsharing.SocialSharing", function(require, exports, module) { function SocialSharing() {
}

// Override this method (after deviceready) to set the location where you want the iPad popup arrow to appear.
// If not overridden with different values, the popup is not used. Example:
//
//   window.plugins.socialsharing.iPadPopupCoordinates = function() {
//     return "100,100,200,300";
//   };
SocialSharing.prototype.iPadPopupCoordinates = function () {
  // left,top,width,height
  return "-1,-1,-1,-1";
};

SocialSharing.prototype.setIPadPopupCoordinates = function (coords) {
  // left,top,width,height
  cordova.exec(function() {}, this._getErrorCallback(function() {}, "setIPadPopupCoordinates"), "SocialSharing", "setIPadPopupCoordinates", [coords]);
};

SocialSharing.prototype.available = function (callback) {
  cordova.exec(function (avail) {
    callback(avail ? true : false);
  }, null, "SocialSharing", "available", []);
};

// this is the recommended way to share as it is the most feature-rich with respect to what you pass in and get back
SocialSharing.prototype.shareWithOptions = function (options, successCallback, errorCallback) {
  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "shareWithOptions"), "SocialSharing", "shareWithOptions", [options]);
};

SocialSharing.prototype.share = function (message, subject, fileOrFileArray, url, successCallback, errorCallback) {
  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "share"), "SocialSharing", "share", [message, subject, this._asArray(fileOrFileArray), url]);
};

SocialSharing.prototype.shareViaTwitter = function (message, file /* multiple not allowed by twitter */, url, successCallback, errorCallback) {
  var fileArray = this._asArray(file);
  var ecb = this._getErrorCallback(errorCallback, "shareViaTwitter");
  if (fileArray.length > 1) {
    ecb("shareViaTwitter supports max one file");
  } else {
    cordova.exec(successCallback, ecb, "SocialSharing", "shareViaTwitter", [message, null, fileArray, url]);
  }
};

SocialSharing.prototype.shareViaFacebook = function (message, fileOrFileArray, url, successCallback, errorCallback) {
  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "shareViaFacebook"), "SocialSharing", "shareViaFacebook", [message, null, this._asArray(fileOrFileArray), url]);
};

SocialSharing.prototype.shareViaFacebookWithPasteMessageHint = function (message, fileOrFileArray, url, pasteMessageHint, successCallback, errorCallback) {
  pasteMessageHint = pasteMessageHint || "If you like you can paste a message from your clipboard";
  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "shareViaFacebookWithPasteMessageHint"), "SocialSharing", "shareViaFacebookWithPasteMessageHint", [message, null, this._asArray(fileOrFileArray), url, pasteMessageHint]);
};

SocialSharing.prototype.shareViaWhatsApp = function (message, fileOrFileArray, url, successCallback, errorCallback) {
  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "shareViaWhatsApp"), "SocialSharing", "shareViaWhatsApp", [message, null, this._asArray(fileOrFileArray), url, null]);
};

SocialSharing.prototype.shareViaWhatsAppToReceiver = function (receiver, message, fileOrFileArray, url, successCallback, errorCallback) {
  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "shareViaWhatsAppToReceiver"), "SocialSharing", "shareViaWhatsApp", [message, null, this._asArray(fileOrFileArray), url, receiver]);
};

SocialSharing.prototype.shareViaSMS = function (options, phonenumbers, successCallback, errorCallback) {
  var opts = options;
  if (typeof options == "string") {
    opts = {"message":options}; // for backward compatibility as the options param used to be the message
  }
  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "shareViaSMS"), "SocialSharing", "shareViaSMS", [opts, phonenumbers]);
};

SocialSharing.prototype.shareViaEmail = function (message, subject, toArray, ccArray, bccArray, fileOrFileArray, successCallback, errorCallback) {
  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "shareViaEmail"), "SocialSharing", "shareViaEmail", [message, subject, this._asArray(toArray), this._asArray(ccArray), this._asArray(bccArray), this._asArray(fileOrFileArray)]);
};

SocialSharing.prototype.canShareVia = function (via, message, subject, fileOrFileArray, url, successCallback, errorCallback) {
  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "canShareVia"), "SocialSharing", "canShareVia", [message, subject, this._asArray(fileOrFileArray), url, via]);
};

SocialSharing.prototype.canShareViaEmail = function (successCallback, errorCallback) {
  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "canShareViaEmail"), "SocialSharing", "canShareViaEmail", []);
};

SocialSharing.prototype.shareViaInstagram = function (message, fileOrFileArray, successCallback, errorCallback) {
  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "shareViaInstagram"), "SocialSharing", "shareViaInstagram", [message, null, this._asArray(fileOrFileArray), null]);
};

SocialSharing.prototype.shareVia = function (via, message, subject, fileOrFileArray, url, successCallback, errorCallback) {
  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "shareVia"), "SocialSharing", "shareVia", [message, subject, this._asArray(fileOrFileArray), url, via]);
};

SocialSharing.prototype.saveToPhotoAlbum = function (fileOrFileArray, successCallback, errorCallback) {
  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "saveToPhotoAlbum"), "SocialSharing", "saveToPhotoAlbum", [this._asArray(fileOrFileArray)]);
};

SocialSharing.prototype._asArray = function (param) {
  if (param == null) {
    param = [];
  } else if (typeof param === 'string') {
    param = new Array(param);
  }
  return param;
};

SocialSharing.prototype._getErrorCallback = function (ecb, functionName) {
  if (typeof ecb === 'function') {
    return ecb;
  } else {
    return function (result) {
      console.log("The injected error callback of '" + functionName + "' received: " + JSON.stringify(result));
    }
  }
};

SocialSharing.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.socialsharing = new SocialSharing();
  return window.plugins.socialsharing;
};

cordova.addConstructor(SocialSharing.install);
});

cordova.define("cordova-plugin-wechat.Wechat", function(require, exports, module) { var exec = require('cordova/exec');

module.exports = {
    Scene: {
        SESSION:  0, // 聊天界面
        TIMELINE: 1, // 朋友圈
        FAVORITE: 2  // 收藏
    },

    Type: {
        APP:     1,
        EMOTION: 2,
        FILE:    3,
        IMAGE:   4,
        MUSIC:   5,
        VIDEO:   6,
        WEBPAGE: 7
    },

    isInstalled: function (onSuccess, onError) {
        exec(onSuccess, onError, "Wechat", "isWXAppInstalled", []);
    },

    /**
     * Share a message to wechat app
     *
     * @example
     * <code>
     * Wechat.share({
     *     message: {
     *        title: "Message Title",
     *        description: "Message Description(optional)",
     *        mediaTagName: "Media Tag Name(optional)",
     *        thumb: "http://YOUR_THUMBNAIL_IMAGE",
     *        media: {
     *            type: Wechat.Type.WEBPAGE,   // webpage
     *            webpageUrl: "https://github.com/xu-li/cordova-plugin-wechat"    // webpage
     *        }
     *    },
     *    scene: Wechat.Scene.TIMELINE   // share to Timeline
     * }, function () {
     *     alert("Success");
     * }, function (reason) {
     *     alert("Failed: " + reason);
     * });
     * </code>
     */
    share: function (message, onSuccess, onError) {
        exec(onSuccess, onError, "Wechat", "share", [message]);
    },

    /**
     * Sending an auth request to Wechat
     *
     * @example
     * <code>
     * Wechat.auth(function (response) { alert(response.code); });
     * </code>
     */
    auth: function (scope, state, onSuccess, onError) {
        if (typeof scope == "function") {
            // Wechat.auth(function () { alert("Success"); });
            // Wechat.auth(function () { alert("Success"); }, function (error) { alert(error); });
            return exec(scope, state, "Wechat", "sendAuthRequest");
        }

        if (typeof state == "function") {
            // Wechat.auth("snsapi_userinfo", function () { alert("Success"); });
            // Wechat.auth("snsapi_userinfo", function () { alert("Success"); }, function (error) { alert(error); });
            return exec(state, onSuccess, "Wechat", "sendAuthRequest", [scope]);
        }

        return exec(onSuccess, onError, "Wechat", "sendAuthRequest", [scope, state]);
    },

    /**
     * Send a payment request
     *
     * @link https://pay.weixin.qq.com/wiki/doc/api/app.php?chapter=9_1
     * @example
     * <code>
     * var params = {
     *     mch_id: '10000100', // merchant id
     *     prepay_id: 'wx201411101639507cbf6ffd8b0779950874', // prepay id returned from server
     *     nonce: '1add1a30ac87aa2db72f57a2375d8fec', // nonce string returned from server
     *     timestamp: '1439531364', // timestamp
     *     sign: '0CB01533B8C1EF103065174F50BCA001', // signed string
     * };
     * Wechat.sendPaymentRequest(params, function () {
     *     alert("Success");
     * }, function (reason) {
     *     alert("Failed: " + reason);
     * });
     * </code>
     */
    sendPaymentRequest: function (params, onSuccess, onError) {
        exec(onSuccess, onError, "Wechat", "sendPaymentRequest", [params]);
    }
};

});

cordova.define("cordova-plugin-camera.CameraProxy", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

var HIGHEST_POSSIBLE_Z_INDEX = 2147483647;

function takePicture(success, error, opts) {
    if (opts && opts[2] === 1) {
        capture(success, error, opts);
    } else {
        var input = document.createElement('input');
        input.style.position = 'relative';
        input.style.zIndex = HIGHEST_POSSIBLE_Z_INDEX;
        input.className = 'cordova-camera-select';
        input.type = 'file';
        input.name = 'files[]';

        input.onchange = function(inputEvent) {
            var reader = new FileReader();
            reader.onload = function(readerEvent) {
                input.parentNode.removeChild(input);

                var imageData = readerEvent.target.result;

                return success(imageData.substr(imageData.indexOf(',') + 1));
            };

            reader.readAsDataURL(inputEvent.target.files[0]);
        };

        document.body.appendChild(input);
    }
}

function capture(success, errorCallback, opts) {
    var localMediaStream;
    var targetWidth = opts[3];
    var targetHeight = opts[4];

    targetWidth = targetWidth == -1?320:targetWidth;
    targetHeight = targetHeight == -1?240:targetHeight;

    var video = document.createElement('video');
    var button = document.createElement('button');
    var parent = document.createElement('div');
    parent.style.position = 'relative';
    parent.style.zIndex = HIGHEST_POSSIBLE_Z_INDEX;
    parent.className = 'cordova-camera-capture';
    parent.appendChild(video);
    parent.appendChild(button);

    video.width = targetWidth;
    video.height = targetHeight;
    button.innerHTML = 'Capture!';

    button.onclick = function() {
        // create a canvas and capture a frame from video stream
        var canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, targetWidth, targetHeight);

        // convert image stored in canvas to base64 encoded image
        var imageData = canvas.toDataURL('image/png');
        imageData = imageData.replace('data:image/png;base64,', '');

        // stop video stream, remove video and button.
        // Note that MediaStream.stop() is deprecated as of Chrome 47.
        if (localMediaStream.stop) {
            localMediaStream.stop();
        } else {
            localMediaStream.getTracks().forEach(function (track) {
                track.stop();
            });
        }
        parent.parentNode.removeChild(parent);

        return success(imageData);
    };

    navigator.getUserMedia = navigator.getUserMedia ||
                             navigator.webkitGetUserMedia ||
                             navigator.mozGetUserMedia ||
                             navigator.msGetUserMedia;

    var successCallback = function(stream) {
        localMediaStream = stream;
        video.src = window.URL.createObjectURL(localMediaStream);
        video.play();

        document.body.appendChild(parent);
    };

    if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true, audio: true}, successCallback, errorCallback);
    } else {
        alert('Browser does not support camera :(');
    }
}

module.exports = {
    takePicture: takePicture,
    cleanup: function(){}
};

require("cordova/exec/proxy").add("Camera",module.exports);

});

cordova.define("cordova-plugin-device.DeviceProxy", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */
var browser = require('cordova/platform');

function getPlatform() {
    return "browser";
}

function getModel() {
    return getBrowserInfo(true);
}

function getVersion() {
    return getBrowserInfo(false);
}

function getBrowserInfo(getModel) {
    var userAgent = navigator.userAgent;
    var returnVal = '';
    var offset;

    if ((offset = userAgent.indexOf('Chrome')) !== -1) {
        returnVal = (getModel) ? 'Chrome' : userAgent.substring(offset + 7);
    } else if ((offset = userAgent.indexOf('Safari')) !== -1) {
        if (getModel) {
            returnVal = 'Safari';
        } else {
            returnVal = userAgent.substring(offset + 7);

            if ((offset = userAgent.indexOf('Version')) !== -1) {
                returnVal = userAgent.substring(offset + 8);
            }
        }
    } else if ((offset = userAgent.indexOf('Firefox')) !== -1) {
        returnVal = (getModel) ? 'Firefox' : userAgent.substring(offset + 8);
    } else if ((offset = userAgent.indexOf('MSIE')) !== -1) {
        returnVal = (getModel) ? 'MSIE' : userAgent.substring(offset + 5);
    } else if ((offset = userAgent.indexOf('Trident')) !== -1) {
        returnVal = (getModel) ? 'MSIE' : '11';
    }

    if ((offset = returnVal.indexOf(';')) !== -1 || (offset = returnVal.indexOf(' ')) !== -1) {
        returnVal = returnVal.substring(0, offset);
    }

    return returnVal;
}


module.exports = {
    getDeviceInfo: function (success, error) {
        setTimeout(function () {
            success({
                cordova: browser.cordovaVersion,
                platform: getPlatform(),
                model: getModel(),
                version: getVersion(),
                uuid: null
            });
        }, 0);
    }
};

require("cordova/exec/proxy").add("Device", module.exports);

});

cordova.define("cordova-plugin-file.firefoxFileSystem", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/*global FILESYSTEM_PREFIX: true, module*/

FILESYSTEM_PREFIX = "file:///";

module.exports = {
    __format__: function(fullPath) {
        return (FILESYSTEM_PREFIX + this.name + (fullPath[0] === '/' ? '' : '/') + FileSystem.encodeURIPath(fullPath));
    }
};


});

cordova.define("cordova-plugin-file.isChrome", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

module.exports = function () {
    // window.webkitRequestFileSystem and window.webkitResolveLocalFileSystemURL are available only in Chrome and
    // possibly a good flag to indicate that we're running in Chrome
    return window.webkitRequestFileSystem && window.webkitResolveLocalFileSystemURL;
};

});

cordova.define("cordova-plugin-file.Preparing", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

(function () {
    /*global require*/

    //Only Chrome uses this file.
    if (!require('./isChrome')()) {
        return;
    }

    var channel = require('cordova/channel');
    var FileError = require('./FileError');
    var PERSISTENT_FS_QUOTA = 5 * 1024 * 1024;
    var filePluginIsReadyEvent = new Event('filePluginIsReady');

    var entryFunctionsCreated = false;
    var quotaWasRequested = false;
    var eventWasThrown = false;

    if (!window.requestFileSystem) {
        window.requestFileSystem = function(type, size, win, fail) {
            if (fail) {
                fail("Not supported");
            }
        };
    } else {
        window.requestFileSystem(window.TEMPORARY, 1, createFileEntryFunctions, function() {});
    }

    if (!window.resolveLocalFileSystemURL) {
        window.resolveLocalFileSystemURL = function(url, win, fail) {
            if(fail) {
                fail("Not supported");
            }
        };
    }

    // Resolves a filesystem entry by its path - which is passed either in standard (filesystem:file://) or
    // Cordova-specific (cdvfile://) universal way.
    // Aligns with specification: http://www.w3.org/TR/2011/WD-file-system-api-20110419/#widl-LocalFileSystem-resolveLocalFileSystemURL
    var nativeResolveLocalFileSystemURL = window.resolveLocalFileSystemURL || window.webkitResolveLocalFileSystemURL;
    window.resolveLocalFileSystemURL = function(url, win, fail) {
        /* If url starts with `cdvfile` then we need convert it to Chrome real url first:
          cdvfile://localhost/persistent/path/to/file -> filesystem:file://persistent/path/to/file */
        if (url.trim().substr(0,7) === "cdvfile") {
            /* Quirk:
            Plugin supports cdvfile://localhost (local resources) only.
            I.e. external resources are not supported via cdvfile. */
            if (url.indexOf("cdvfile://localhost") !== -1) {
                // Browser supports temporary and persistent only
                var indexPersistent = url.indexOf('persistent');
                var indexTemporary = url.indexOf('temporary');

                /* Chrome urls start with 'filesystem:' prefix. See quirk:
                   toURL function in Chrome returns filesystem:-prefixed path depending on application host.
                   For example, filesystem:file:///persistent/somefile.txt,
                   filesystem:http://localhost:8080/persistent/somefile.txt. */
                var prefix = 'filesystem:file:///';
                if (location.protocol !== 'file:') {
                    prefix = 'filesystem:' + location.origin + '/';
                }

                var result;
                if (indexPersistent !== -1) {
                    // cdvfile://localhost/persistent/path/to/file -> filesystem:file://persistent/path/to/file
                    // or filesystem:http://localhost:8080/persistent/path/to/file
                    result =  prefix + 'persistent' + url.substr(indexPersistent + 10);
                    nativeResolveLocalFileSystemURL(result, win, fail);
                    return;
                }

                if (indexTemporary !== -1) {
                    // cdvfile://localhost/temporary/path/to/file -> filesystem:file://temporary/path/to/file
                    // or filesystem:http://localhost:8080/temporary/path/to/file
                    result = prefix + 'temporary' + url.substr(indexTemporary + 9);
                    nativeResolveLocalFileSystemURL(result, win, fail);
                    return;
                }
            }

            // cdvfile other than local file resource is not supported
            if (fail) {
                fail(new FileError(FileError.ENCODING_ERR));
            }
        } else {
            nativeResolveLocalFileSystemURL(url, win, fail);
        }
    };

    function createFileEntryFunctions(fs) {
        fs.root.getFile('todelete_658674_833_4_cdv', {create: true}, function(fileEntry) {
            var fileEntryType = Object.getPrototypeOf(fileEntry);
            var entryType = Object.getPrototypeOf(fileEntryType);

            // Save the original method
            var origToURL = entryType.toURL;
            entryType.toURL = function () {
                var origURL = origToURL.call(this);
                if (this.isDirectory && origURL.substr(-1) !== '/') {
                    return origURL + '/';
                }
                return origURL;
            };

            entryType.toNativeURL = function () {
                console.warn("DEPRECATED: Update your code to use 'toURL'");
                return this.toURL();
            };

            entryType.toInternalURL = function() {
                if (this.toURL().indexOf("persistent") > -1) {
                    return "cdvfile://localhost/persistent" + this.fullPath;
                }

                if (this.toURL().indexOf("temporary") > -1) {
                    return "cdvfile://localhost/temporary" + this.fullPath;
                }
            };

            entryType.setMetadata = function(win, fail /*, metadata*/) {
                if (fail) {
                    fail("Not supported");
                }
            };

            fileEntry.createWriter(function(writer) {
                var originalWrite = writer.write;
                var writerProto = Object.getPrototypeOf(writer);
                writerProto.write = function(blob) {
                    if(blob instanceof Blob) {
                        originalWrite.apply(this, [blob]);
                    } else {
                        var realBlob = new Blob([blob]);
                        originalWrite.apply(this, [realBlob]);
                   }
                };

                fileEntry.remove(function(){ entryFunctionsCreated = true; }, function(){ /* empty callback */ });
          });
        });
    }

    window.initPersistentFileSystem = function(size, win, fail) {
        if (navigator.webkitPersistentStorage) {
            navigator.webkitPersistentStorage.requestQuota(size, win, fail);
            return;
        }

        fail("This browser does not support this function");
    };

    window.isFilePluginReadyRaised = function () { return eventWasThrown; };

    window.initPersistentFileSystem(PERSISTENT_FS_QUOTA, function() {
        console.log('Persistent fs quota granted');
        quotaWasRequested = true;
    }, function(e){
        console.log('Error occured while trying to request Persistent fs quota: ' + JSON.stringify(e));
    });

    channel.onCordovaReady.subscribe(function () {
        function dispatchEventIfReady() {
            if (entryFunctionsCreated && quotaWasRequested) {
                window.dispatchEvent(filePluginIsReadyEvent);
                eventWasThrown = true;
            } else {
                setTimeout(dispatchEventIfReady, 100);
            }
        }

        dispatchEventIfReady();
    }, false);
})();

});

cordova.define("cordova-plugin-file.browserFileProxy", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */
(function() {
    /*global require, exports, module*/
    /*global FILESYSTEM_PREFIX*/
    /*global IDBKeyRange*/

    /* Heavily based on https://github.com/ebidel/idb.filesystem.js */

    // For chrome we don't need to implement proxy methods
    // All functionality can be accessed natively.
    if (require('./isChrome')()) {
        var pathsPrefix = {
            // Read-only directory where the application is installed.
            applicationDirectory: location.origin + "/",
            // Where to put app-specific data files.
            dataDirectory: 'filesystem:file:///persistent/',
            // Cached files that should survive app restarts.
            // Apps should not rely on the OS to delete files in here.
            cacheDirectory: 'filesystem:file:///temporary/',
        };

        exports.requestAllPaths = function(successCallback) {
            successCallback(pathsPrefix);
        };

        require("cordova/exec/proxy").add("File", module.exports);
        return;
    }

    var LocalFileSystem = require('./LocalFileSystem'),
        FileSystem = require('./FileSystem'),
        FileEntry = require('./FileEntry'),
        FileError = require('./FileError'),
        DirectoryEntry = require('./DirectoryEntry'),
        File = require('./File');

    (function(exports, global) {
        var indexedDB = global.indexedDB || global.mozIndexedDB;
        if (!indexedDB) {
            throw "Firefox OS File plugin: indexedDB not supported";
        }

        var fs_ = null;

        var idb_ = {};
        idb_.db = null;
        var FILE_STORE_ = 'entries';

        var DIR_SEPARATOR = '/';

        var pathsPrefix = {
            // Read-only directory where the application is installed.
            applicationDirectory: location.origin + "/",
            // Where to put app-specific data files.
            dataDirectory: 'file:///persistent/',
            // Cached files that should survive app restarts.
            // Apps should not rely on the OS to delete files in here.
            cacheDirectory: 'file:///temporary/',
        };

        var unicodeLastChar = 65535;

    /*** Exported functionality ***/

        exports.requestFileSystem = function(successCallback, errorCallback, args) {
            var type = args[0];
            // Size is ignored since IDB filesystem size depends
            // on browser implementation and can't be set up by user
            var size = args[1]; // jshint ignore: line

            if (type !== LocalFileSystem.TEMPORARY && type !== LocalFileSystem.PERSISTENT) {
                if (errorCallback) {
                    errorCallback(FileError.INVALID_MODIFICATION_ERR);
                }
                return;
            }

            var name = type === LocalFileSystem.TEMPORARY ? 'temporary' : 'persistent';
            var storageName = (location.protocol + location.host).replace(/:/g, '_');

            var root = new DirectoryEntry('', DIR_SEPARATOR);
            fs_ = new FileSystem(name, root);

            idb_.open(storageName, function() {
                successCallback(fs_);
            }, errorCallback);
        };

        // Overridden by Android, BlackBerry 10 and iOS to populate fsMap
        require('./fileSystems').getFs = function(name, callback) {
            callback(new FileSystem(name, fs_.root));
        };

        // list a directory's contents (files and folders).
        exports.readEntries = function(successCallback, errorCallback, args) {
            var fullPath = args[0];

            if (typeof successCallback !== 'function') {
                throw Error('Expected successCallback argument.');
            }

            var path = resolveToFullPath_(fullPath);

            exports.getDirectory(function() {
                idb_.getAllEntries(path.fullPath + DIR_SEPARATOR, path.storagePath, function(entries) {
                    successCallback(entries);
                }, errorCallback);
            }, function() {
                if (errorCallback) {
                    errorCallback(FileError.NOT_FOUND_ERR);
                }
            }, [path.storagePath, path.fullPath, {create: false}]);
        };

        exports.getFile = function(successCallback, errorCallback, args) {
            var fullPath = args[0];
            var path = args[1];
            var options = args[2] || {};

            // Create an absolute path if we were handed a relative one.
            path = resolveToFullPath_(fullPath, path);

            idb_.get(path.storagePath, function(fileEntry) {
                if (options.create === true && options.exclusive === true && fileEntry) {
                    // If create and exclusive are both true, and the path already exists,
                    // getFile must fail.

                    if (errorCallback) {
                        errorCallback(FileError.PATH_EXISTS_ERR);
                    }
                } else if (options.create === true && !fileEntry) {
                    // If create is true, the path doesn't exist, and no other error occurs,
                    // getFile must create it as a zero-length file and return a corresponding
                    // FileEntry.
                    var newFileEntry = new FileEntry(path.fileName, path.fullPath, new FileSystem(path.fsName, fs_.root));

                    newFileEntry.file_ = new MyFile({
                        size: 0,
                        name: newFileEntry.name,
                        lastModifiedDate: new Date(),
                        storagePath: path.storagePath
                    });

                    idb_.put(newFileEntry, path.storagePath, successCallback, errorCallback);
                } else if (options.create === true && fileEntry) {
                    if (fileEntry.isFile) {
                        // Overwrite file, delete then create new.
                        idb_['delete'](path.storagePath, function() {
                            var newFileEntry = new FileEntry(path.fileName, path.fullPath, new FileSystem(path.fsName, fs_.root));

                            newFileEntry.file_ = new MyFile({
                                size: 0,
                                name: newFileEntry.name,
                                lastModifiedDate: new Date(),
                                storagePath: path.storagePath
                            });

                            idb_.put(newFileEntry, path.storagePath, successCallback, errorCallback);
                        }, errorCallback);
                    } else {
                        if (errorCallback) {
                            errorCallback(FileError.INVALID_MODIFICATION_ERR);
                        }
                    }
                } else if ((!options.create || options.create === false) && !fileEntry) {
                    // If create is not true and the path doesn't exist, getFile must fail.
                    if (errorCallback) {
                        errorCallback(FileError.NOT_FOUND_ERR);
                    }
                } else if ((!options.create || options.create === false) && fileEntry &&
                    fileEntry.isDirectory) {
                    // If create is not true and the path exists, but is a directory, getFile
                    // must fail.
                    if (errorCallback) {
                        errorCallback(FileError.TYPE_MISMATCH_ERR);
                    }
                } else {
                    // Otherwise, if no other error occurs, getFile must return a FileEntry
                    // corresponding to path.

                    successCallback(fileEntryFromIdbEntry(fileEntry));
                }
            }, errorCallback);
        };

        exports.getFileMetadata = function(successCallback, errorCallback, args) {
            var fullPath = args[0];

            exports.getFile(function(fileEntry) {
                successCallback(new File(fileEntry.file_.name, fileEntry.fullPath, '', fileEntry.file_.lastModifiedDate,
                    fileEntry.file_.size));
            }, errorCallback, [fullPath, null]);
        };

        exports.getMetadata = function(successCallback, errorCallback, args) {
            exports.getFile(function (fileEntry) {
                successCallback(
                    {
                        modificationTime: fileEntry.file_.lastModifiedDate,
                        size: fileEntry.file_.lastModifiedDate
                    });
            }, errorCallback, args);
        };

        exports.setMetadata = function(successCallback, errorCallback, args) {
            var fullPath = args[0];
            var metadataObject = args[1];

            exports.getFile(function (fileEntry) {
                  fileEntry.file_.lastModifiedDate = metadataObject.modificationTime;
                  idb_.put(fileEntry, fileEntry.file_.storagePath, successCallback, errorCallback);
            }, errorCallback, [fullPath, null]);
        };

        exports.write = function(successCallback, errorCallback, args) {
            var fileName = args[0],
                data = args[1],
                position = args[2],
                isBinary = args[3]; // jshint ignore: line

            if (!data) {
                if (errorCallback) {
                    errorCallback(FileError.INVALID_MODIFICATION_ERR);
                }
                return;
            }

            if (typeof data === 'string' || data instanceof String) {
                data = new Blob([data]);
            }

            exports.getFile(function(fileEntry) {
                var blob_ = fileEntry.file_.blob_;

                if (!blob_) {
                    blob_ = new Blob([data], {type: data.type});
                } else {
                    // Calc the head and tail fragments
                    var head = blob_.slice(0, position);
                    var tail = blob_.slice(position + (data.size || data.byteLength));

                    // Calc the padding
                    var padding = position - head.size;
                    if (padding < 0) {
                        padding = 0;
                    }

                    // Do the "write". In fact, a full overwrite of the Blob.
                    blob_ = new Blob([head, new Uint8Array(padding), data, tail],
                        {type: data.type});
                }

                // Set the blob we're writing on this file entry so we can recall it later.
                fileEntry.file_.blob_ = blob_;
                fileEntry.file_.lastModifiedDate = new Date() || null;
                fileEntry.file_.size = blob_.size;
                fileEntry.file_.name = blob_.name;
                fileEntry.file_.type = blob_.type;

                idb_.put(fileEntry, fileEntry.file_.storagePath, function() {
                    successCallback(data.size || data.byteLength);
                }, errorCallback);
            }, errorCallback, [fileName, null]);
        };

        exports.readAsText = function(successCallback, errorCallback, args) {
            var fileName = args[0],
                enc = args[1],
                startPos = args[2],
                endPos = args[3];

            readAs('text', fileName, enc, startPos, endPos, successCallback, errorCallback);
        };

        exports.readAsDataURL = function(successCallback, errorCallback, args) {
            var fileName = args[0],
                startPos = args[1],
                endPos = args[2];

            readAs('dataURL', fileName, null, startPos, endPos, successCallback, errorCallback);
        };

        exports.readAsBinaryString = function(successCallback, errorCallback, args) {
            var fileName = args[0],
                startPos = args[1],
                endPos = args[2];

            readAs('binaryString', fileName, null, startPos, endPos, successCallback, errorCallback);
        };

        exports.readAsArrayBuffer = function(successCallback, errorCallback, args) {
            var fileName = args[0],
                startPos = args[1],
                endPos = args[2];

            readAs('arrayBuffer', fileName, null, startPos, endPos, successCallback, errorCallback);
        };

        exports.removeRecursively = exports.remove = function(successCallback, errorCallback, args) {
            if (typeof successCallback !== 'function') {
                throw Error('Expected successCallback argument.');
            }

            var fullPath = resolveToFullPath_(args[0]).storagePath;
            if (fullPath === pathsPrefix.cacheDirectory || fullPath === pathsPrefix.dataDirectory) {
                errorCallback(FileError.NO_MODIFICATION_ALLOWED_ERR);
                return;
            }

            function deleteEntry(isDirectory) {
                // TODO: This doesn't protect against directories that have content in it.
                // Should throw an error instead if the dirEntry is not empty.
                idb_['delete'](fullPath, function() {
                    successCallback();
                }, function() {
                        if (errorCallback) { errorCallback(); }
                }, isDirectory);
            }

            // We need to to understand what we are deleting:
            exports.getDirectory(function(entry) {
                deleteEntry(entry.isDirectory);
            }, function(){
                //DirectoryEntry was already deleted or entry is FileEntry
                deleteEntry(false);
            }, [fullPath, null, {create: false}]);
        };

        exports.getDirectory = function(successCallback, errorCallback, args) {
            var fullPath = args[0];
            var path = args[1];
            var options = args[2];

            // Create an absolute path if we were handed a relative one.
            path = resolveToFullPath_(fullPath, path);

            idb_.get(path.storagePath, function(folderEntry) {
                if (!options) {
                    options = {};
                }

                if (options.create === true && options.exclusive === true && folderEntry) {
                    // If create and exclusive are both true, and the path already exists,
                    // getDirectory must fail.
                    if (errorCallback) {
                        errorCallback(FileError.PATH_EXISTS_ERR);
                    }
                    // There is a strange bug in mobilespec + FF, which results in coming to multiple else-if's
                    // so we are shielding from it with returns.
                    return;
                }

                if (options.create === true && !folderEntry) {
                    // If create is true, the path doesn't exist, and no other error occurs,
                    // getDirectory must create it as a zero-length file and return a corresponding
                    // MyDirectoryEntry.
                    var dirEntry = new DirectoryEntry(path.fileName, path.fullPath, new FileSystem(path.fsName, fs_.root));

                    idb_.put(dirEntry, path.storagePath, successCallback, errorCallback);
                    return;
                }

                if (options.create === true && folderEntry) {

                    if (folderEntry.isDirectory) {
                        // IDB won't save methods, so we need re-create the MyDirectoryEntry.
                        successCallback(new DirectoryEntry(folderEntry.name, folderEntry.fullPath, folderEntry.filesystem));
                    } else {
                        if (errorCallback) {
                            errorCallback(FileError.INVALID_MODIFICATION_ERR);
                        }
                    }
                    return;
                }

                if ((!options.create || options.create === false) && !folderEntry) {
                    // Handle root special. It should always exist.
                    if (path.fullPath === DIR_SEPARATOR) {
                        successCallback(fs_.root);
                        return;
                    }

                    // If create is not true and the path doesn't exist, getDirectory must fail.
                    if (errorCallback) {
                        errorCallback(FileError.NOT_FOUND_ERR);
                    }

                    return;
                }
                if ((!options.create || options.create === false) && folderEntry && folderEntry.isFile) {
                    // If create is not true and the path exists, but is a file, getDirectory
                    // must fail.
                    if (errorCallback) {
                        errorCallback(FileError.TYPE_MISMATCH_ERR);
                    }
                    return;
                }

                // Otherwise, if no other error occurs, getDirectory must return a
                // MyDirectoryEntry corresponding to path.

                // IDB won't' save methods, so we need re-create MyDirectoryEntry.
                successCallback(new DirectoryEntry(folderEntry.name, folderEntry.fullPath, folderEntry.filesystem));
            }, errorCallback);
        };

        exports.getParent = function(successCallback, errorCallback, args) {
            if (typeof successCallback !== 'function') {
                throw Error('Expected successCallback argument.');
            }

            var fullPath = args[0];
            //fullPath is like this:
            //file:///persistent/path/to/file or
            //file:///persistent/path/to/directory/

            if (fullPath === DIR_SEPARATOR || fullPath === pathsPrefix.cacheDirectory ||
                fullPath === pathsPrefix.dataDirectory) {
                successCallback(fs_.root);
                return;
            }

            //To delete all slashes at the end
            while (fullPath[fullPath.length - 1] === '/') {
                fullPath = fullPath.substr(0, fullPath.length - 1);
            }

            var pathArr = fullPath.split(DIR_SEPARATOR);
            pathArr.pop();
            var parentName = pathArr.pop();
            var path = pathArr.join(DIR_SEPARATOR) + DIR_SEPARATOR;

            //To get parent of root files
            var joined = path + parentName + DIR_SEPARATOR;//is like this: file:///persistent/
            if (joined === pathsPrefix.cacheDirectory || joined === pathsPrefix.dataDirectory) {
                exports.getDirectory(successCallback, errorCallback, [joined, DIR_SEPARATOR, {create: false}]);
                return;
            }

            exports.getDirectory(successCallback, errorCallback, [path, parentName, {create: false}]);
        };

        exports.copyTo = function(successCallback, errorCallback, args) {
            var srcPath = args[0];
            var parentFullPath = args[1];
            var name = args[2];

            if (name.indexOf('/') !== -1 || srcPath === parentFullPath + name) {
                if (errorCallback) {
                    errorCallback(FileError.INVALID_MODIFICATION_ERR);
                }

                return;
            }

            // Read src file
            exports.getFile(function(srcFileEntry) {

                var path = resolveToFullPath_(parentFullPath);
                //Check directory
                exports.getDirectory(function() {

                    // Create dest file
                    exports.getFile(function(dstFileEntry) {

                        exports.write(function() {
                            successCallback(dstFileEntry);
                        }, errorCallback, [dstFileEntry.file_.storagePath, srcFileEntry.file_.blob_, 0]);

                    }, errorCallback, [parentFullPath, name, {create: true}]);

                }, function() { if (errorCallback) { errorCallback(FileError.NOT_FOUND_ERR); }},
                [path.storagePath, null, {create:false}]);

            }, errorCallback, [srcPath, null]);
        };

        exports.moveTo = function(successCallback, errorCallback, args) {
            var srcPath = args[0];
            // parentFullPath and name parameters is ignored because
            // args is being passed downstream to exports.copyTo method
            var parentFullPath = args[1]; // jshint ignore: line
            var name = args[2]; // jshint ignore: line

            exports.copyTo(function (fileEntry) {

                exports.remove(function () {
                    successCallback(fileEntry);
                }, errorCallback, [srcPath]);

            }, errorCallback, args);
        };

        exports.resolveLocalFileSystemURI = function(successCallback, errorCallback, args) {
            var path = args[0];

            // Ignore parameters
            if (path.indexOf('?') !== -1) {
                path = String(path).split("?")[0];
            }

            // support for encodeURI
            if (/\%5/g.test(path) || /\%20/g.test(path)) {
                path = decodeURI(path);
            }

            if (path.trim()[0] === '/') {
                if (errorCallback) {
                    errorCallback(FileError.ENCODING_ERR);
                }
                return;
            }

            //support for cdvfile
            if (path.trim().substr(0,7) === "cdvfile") {
                if (path.indexOf("cdvfile://localhost") === -1) {
                    if (errorCallback) {
                        errorCallback(FileError.ENCODING_ERR);
                    }
                    return;
                }

                var indexPersistent = path.indexOf("persistent");
                var indexTemporary = path.indexOf("temporary");

                //cdvfile://localhost/persistent/path/to/file
                if (indexPersistent !== -1) {
                    path =  "file:///persistent" + path.substr(indexPersistent + 10);
                } else if (indexTemporary !== -1) {
                    path = "file:///temporary" + path.substr(indexTemporary + 9);
                } else {
                    if (errorCallback) {
                        errorCallback(FileError.ENCODING_ERR);
                    }
                    return;
                }
            }

            // to avoid path form of '///path/to/file'
            function handlePathSlashes(path) {
                var cutIndex  = 0;
                for (var i = 0; i < path.length - 1; i++) {
                    if (path[i] === DIR_SEPARATOR && path[i + 1] === DIR_SEPARATOR) {
                        cutIndex = i + 1;
                    } else break;
                }

                return path.substr(cutIndex);
            }

            // Handle localhost containing paths (see specs )
            if (path.indexOf('file://localhost/') === 0) {
                path = path.replace('file://localhost/', 'file:///');
            }

            if (path.indexOf(pathsPrefix.dataDirectory) === 0) {
                path = path.substring(pathsPrefix.dataDirectory.length - 1);
                path = handlePathSlashes(path);

                exports.requestFileSystem(function() {
                    exports.getFile(successCallback, function() {
                        exports.getDirectory(successCallback, errorCallback, [pathsPrefix.dataDirectory, path,
                        {create: false}]);
                    }, [pathsPrefix.dataDirectory, path, {create: false}]);
                }, errorCallback, [LocalFileSystem.PERSISTENT]);
            } else if (path.indexOf(pathsPrefix.cacheDirectory) === 0) {
                path = path.substring(pathsPrefix.cacheDirectory.length - 1);
                path = handlePathSlashes(path);

                exports.requestFileSystem(function() {
                    exports.getFile(successCallback, function() {
                        exports.getDirectory(successCallback, errorCallback, [pathsPrefix.cacheDirectory, path,
                        {create: false}]);
                    }, [pathsPrefix.cacheDirectory, path, {create: false}]);
                }, errorCallback, [LocalFileSystem.TEMPORARY]);
            } else if (path.indexOf(pathsPrefix.applicationDirectory) === 0) {
                path = path.substring(pathsPrefix.applicationDirectory.length);
                //TODO: need to cut out redundant slashes?

                var xhr = new XMLHttpRequest();
                xhr.open("GET", path, true);
                xhr.onreadystatechange = function () {
                    if (xhr.status === 200 && xhr.readyState === 4) {
                        exports.requestFileSystem(function(fs) {
                            fs.name = location.hostname;

                            //TODO: need to call exports.getFile(...) to handle errors correct
                            fs.root.getFile(path, {create: true}, writeFile, errorCallback);
                        }, errorCallback, [LocalFileSystem.PERSISTENT]);
                    }
                };

                xhr.onerror = function () {
                    if(errorCallback) {
                        errorCallback(FileError.NOT_READABLE_ERR);
                    }
                };

                xhr.send();
            } else {
                if(errorCallback) {
                    errorCallback(FileError.NOT_FOUND_ERR);
                }
            }

            function writeFile(entry) {
                entry.createWriter(function (fileWriter) {
                    fileWriter.onwriteend = function (evt) {
                        if (!evt.target.error) {
                            entry.filesystemName = location.hostname;
                            successCallback(entry);
                        }
                    };
                    fileWriter.onerror = function () {
                        if (errorCallback) {
                            errorCallback(FileError.NOT_READABLE_ERR);
                        }
                    };
                    fileWriter.write(new Blob([xhr.response]));
                }, errorCallback);
            }
        };

        exports.requestAllPaths = function(successCallback) {
            successCallback(pathsPrefix);
        };

    /*** Helpers ***/

        /**
         * Interface to wrap the native File interface.
         *
         * This interface is necessary for creating zero-length (empty) files,
         * something the Filesystem API allows you to do. Unfortunately, File's
         * constructor cannot be called directly, making it impossible to instantiate
         * an empty File in JS.
         *
         * @param {Object} opts Initial values.
         * @constructor
         */
        function MyFile(opts) {
            var blob_ = new Blob();

            this.size = opts.size || 0;
            this.name = opts.name || '';
            this.type = opts.type || '';
            this.lastModifiedDate = opts.lastModifiedDate || null;
            this.storagePath = opts.storagePath || '';

            // Need some black magic to correct the object's size/name/type based on the
            // blob that is saved.
            Object.defineProperty(this, 'blob_', {
                enumerable: true,
                get: function() {
                    return blob_;
                },
                set: function(val) {
                    blob_ = val;
                    this.size = blob_.size;
                    this.name = blob_.name;
                    this.type = blob_.type;
                    this.lastModifiedDate = blob_.lastModifiedDate;
                }.bind(this)
            });
        }

        MyFile.prototype.constructor = MyFile;

        // When saving an entry, the fullPath should always lead with a slash and never
        // end with one (e.g. a directory). Also, resolve '.' and '..' to an absolute
        // one. This method ensures path is legit!
        function resolveToFullPath_(cwdFullPath, path) {
            path = path || '';
            var fullPath = path;
            var prefix = '';

            cwdFullPath = cwdFullPath || DIR_SEPARATOR;
            if (cwdFullPath.indexOf(FILESYSTEM_PREFIX) === 0) {
                prefix = cwdFullPath.substring(0, cwdFullPath.indexOf(DIR_SEPARATOR, FILESYSTEM_PREFIX.length));
                cwdFullPath = cwdFullPath.substring(cwdFullPath.indexOf(DIR_SEPARATOR, FILESYSTEM_PREFIX.length));
            }

            var relativePath = path[0] !== DIR_SEPARATOR;
            if (relativePath) {
                fullPath = cwdFullPath;
                if (cwdFullPath !== DIR_SEPARATOR) {
                    fullPath += DIR_SEPARATOR + path;
                } else {
                    fullPath += path;
                }
            }

            // Remove doubled separator substrings
            var re = new RegExp(DIR_SEPARATOR + DIR_SEPARATOR, 'g');
            fullPath = fullPath.replace(re, DIR_SEPARATOR);

            // Adjust '..'s by removing parent directories when '..' flows in path.
            var parts = fullPath.split(DIR_SEPARATOR);
            for (var i = 0; i < parts.length; ++i) {
                var part = parts[i];
                if (part === '..') {
                    parts[i - 1] = '';
                    parts[i] = '';
                }
            }
            fullPath = parts.filter(function(el) {
                return el;
            }).join(DIR_SEPARATOR);

            // Add back in leading slash.
            if (fullPath[0] !== DIR_SEPARATOR) {
                fullPath = DIR_SEPARATOR + fullPath;
            }

            // Replace './' by current dir. ('./one/./two' -> one/two)
            fullPath = fullPath.replace(/\.\//g, DIR_SEPARATOR);

            // Replace '//' with '/'.
            fullPath = fullPath.replace(/\/\//g, DIR_SEPARATOR);

            // Replace '/.' with '/'.
            fullPath = fullPath.replace(/\/\./g, DIR_SEPARATOR);

            // Remove '/' if it appears on the end.
            if (fullPath[fullPath.length - 1] === DIR_SEPARATOR &&
                fullPath !== DIR_SEPARATOR) {
                fullPath = fullPath.substring(0, fullPath.length - 1);
            }

            var storagePath = prefix + fullPath;
            storagePath = decodeURI(storagePath);
            fullPath = decodeURI(fullPath);

            return {
                storagePath: storagePath,
                fullPath: fullPath,
                fileName: fullPath.split(DIR_SEPARATOR).pop(),
                fsName: prefix.split(DIR_SEPARATOR).pop()
            };
        }

        function fileEntryFromIdbEntry(fileEntry) {
            // IDB won't save methods, so we need re-create the FileEntry.
            var clonedFileEntry = new FileEntry(fileEntry.name, fileEntry.fullPath, fileEntry.filesystem);
            clonedFileEntry.file_ = fileEntry.file_;

            return clonedFileEntry;
        }

        function readAs(what, fullPath, encoding, startPos, endPos, successCallback, errorCallback) {
            exports.getFile(function(fileEntry) {
                var fileReader = new FileReader(),
                    blob = fileEntry.file_.blob_.slice(startPos, endPos);

                fileReader.onload = function(e) {
                    successCallback(e.target.result);
                };

                fileReader.onerror = errorCallback;

                switch (what) {
                    case 'text':
                        fileReader.readAsText(blob, encoding);
                        break;
                    case 'dataURL':
                        fileReader.readAsDataURL(blob);
                        break;
                    case 'arrayBuffer':
                        fileReader.readAsArrayBuffer(blob);
                        break;
                    case 'binaryString':
                        fileReader.readAsBinaryString(blob);
                        break;
                }

            }, errorCallback, [fullPath, null]);
        }

    /*** Core logic to handle IDB operations ***/

        idb_.open = function(dbName, successCallback, errorCallback) {
            var self = this;

            // TODO: FF 12.0a1 isn't liking a db name with : in it.
            var request = indexedDB.open(dbName.replace(':', '_')/*, 1 /*version*/);

            request.onerror = errorCallback || onError;

            request.onupgradeneeded = function(e) {
                // First open was called or higher db version was used.

                // console.log('onupgradeneeded: oldVersion:' + e.oldVersion,
                //           'newVersion:' + e.newVersion);

                self.db = e.target.result;
                self.db.onerror = onError;

                if (!self.db.objectStoreNames.contains(FILE_STORE_)) {
                    self.db.createObjectStore(FILE_STORE_/*,{keyPath: 'id', autoIncrement: true}*/);
                }
            };

            request.onsuccess = function(e) {
                self.db = e.target.result;
                self.db.onerror = onError;
                successCallback(e);
            };

            request.onblocked = errorCallback || onError;
        };

        idb_.close = function() {
            this.db.close();
            this.db = null;
        };

        idb_.get = function(fullPath, successCallback, errorCallback) {
            if (!this.db) {
                if (errorCallback) {
                    errorCallback(FileError.INVALID_MODIFICATION_ERR);
                }
                return;
            }

            var tx = this.db.transaction([FILE_STORE_], 'readonly');

            var request = tx.objectStore(FILE_STORE_).get(fullPath);

            tx.onabort = errorCallback || onError;
            tx.oncomplete = function() {
                successCallback(request.result);
            };
        };

        idb_.getAllEntries = function(fullPath, storagePath, successCallback, errorCallback) {
            if (!this.db) {
                if (errorCallback) {
                    errorCallback(FileError.INVALID_MODIFICATION_ERR);
                }
                return;
            }

            var results = [];

            if (storagePath[storagePath.length - 1] === DIR_SEPARATOR) {
                storagePath = storagePath.substring(0, storagePath.length - 1);
            }

            var range = IDBKeyRange.bound(storagePath + DIR_SEPARATOR + ' ',
                storagePath + DIR_SEPARATOR + String.fromCharCode(unicodeLastChar));

            var tx = this.db.transaction([FILE_STORE_], 'readonly');
            tx.onabort = errorCallback || onError;
            tx.oncomplete = function() {
                results = results.filter(function(val) {
                    var pathWithoutSlash = val.fullPath;

                    if (val.fullPath[val.fullPath.length - 1] === DIR_SEPARATOR) {
                        pathWithoutSlash = pathWithoutSlash.substr(0, pathWithoutSlash.length - 1);
                    }

                    var valPartsLen = pathWithoutSlash.split(DIR_SEPARATOR).length;
                    var fullPathPartsLen = fullPath.split(DIR_SEPARATOR).length;

                    /* Input fullPath parameter  equals '//' for root folder */
                    /* Entries in root folder has valPartsLen equals 2 (see below) */
                    if (fullPath[fullPath.length -1] === DIR_SEPARATOR && fullPath.trim().length === 2) {
                        fullPathPartsLen = 1;
                    } else if (fullPath[fullPath.length -1] === DIR_SEPARATOR) {
                        fullPathPartsLen = fullPath.substr(0, fullPath.length - 1).split(DIR_SEPARATOR).length;
                    } else {
                        fullPathPartsLen = fullPath.split(DIR_SEPARATOR).length;
                    }

                    if (valPartsLen === fullPathPartsLen + 1) {
                        // If this a subfolder and entry is a direct child, include it in
                        // the results. Otherwise, it's not an entry of this folder.
                        return val;
                    } else return false;
                });

                successCallback(results);
            };

            var request = tx.objectStore(FILE_STORE_).openCursor(range);

            request.onsuccess = function(e) {
                var cursor = e.target.result;
                if (cursor) {
                    var val = cursor.value;

                    results.push(val.isFile ? fileEntryFromIdbEntry(val) : new DirectoryEntry(val.name, val.fullPath, val.filesystem));
                    cursor['continue']();
                }
            };
        };

        idb_['delete'] = function(fullPath, successCallback, errorCallback, isDirectory) {
            if (!idb_.db) {
                if (errorCallback) {
                    errorCallback(FileError.INVALID_MODIFICATION_ERR);
                }
                return;
            }

            var tx = this.db.transaction([FILE_STORE_], 'readwrite');
            tx.oncomplete = successCallback;
            tx.onabort = errorCallback || onError;
            tx.oncomplete = function() {
                if (isDirectory) {
                    //We delete nested files and folders after deleting parent folder
                    //We use ranges: https://developer.mozilla.org/en-US/docs/Web/API/IDBKeyRange
                    fullPath = fullPath + DIR_SEPARATOR;

                    //Range contains all entries in the form fullPath<symbol> where
                    //symbol in the range from ' ' to symbol which has code `unicodeLastChar`
                    var range = IDBKeyRange.bound(fullPath + ' ', fullPath + String.fromCharCode(unicodeLastChar));

                    var newTx = this.db.transaction([FILE_STORE_], 'readwrite');
                    newTx.oncomplete = successCallback;
                    newTx.onabort = errorCallback || onError;
                    newTx.objectStore(FILE_STORE_)['delete'](range);
                } else {
                    successCallback();
                }
            };
            tx.objectStore(FILE_STORE_)['delete'](fullPath);
        };

        idb_.put = function(entry, storagePath, successCallback, errorCallback) {
            if (!this.db) {
                if (errorCallback) {
                    errorCallback(FileError.INVALID_MODIFICATION_ERR);
                }
                return;
            }

            var tx = this.db.transaction([FILE_STORE_], 'readwrite');
            tx.onabort = errorCallback || onError;
            tx.oncomplete = function() {
                // TODO: Error is thrown if we pass the request event back instead.
                successCallback(entry);
            };

            tx.objectStore(FILE_STORE_).put(entry, storagePath);
        };

        // Global error handler. Errors bubble from request, to transaction, to db.
        function onError(e) {
            switch (e.target.errorCode) {
                case 12:
                    console.log('Error - Attempt to open db with a lower version than the ' +
                        'current one.');
                    break;
                default:
                    console.log('errorCode: ' + e.target.errorCode);
            }

            console.log(e, e.code, e.message);
        }

    })(module.exports, window);

    require("cordova/exec/proxy").add("File", module.exports);
})();

});

cordova.define("cordova-plugin-inappbrowser.InAppBrowserProxy", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var modulemapper = require('cordova/modulemapper');

var browserWrap,
    popup,
    navigationButtonsDiv,
    navigationButtonsDivInner,
    backButton,
    forwardButton,
    closeButton;

function attachNavigationEvents(element, callback) {
    var onError = function () {
        callback({ type: "loaderror", url: this.contentWindow.location}, {keepCallback: true});
    };

    element.addEventListener("pageshow", function () {
        callback({ type: "loadstart", url: this.contentWindow.location}, {keepCallback: true});
    });

    element.addEventListener("load", function () {
        callback({ type: "loadstop", url: this.contentWindow.location}, {keepCallback: true});
    });

    element.addEventListener("error", onError);
    element.addEventListener("abort", onError);
}

var IAB = {
    close: function (win, lose) {
        if (browserWrap) {
            if (win) win({ type: "exit" });

            browserWrap.parentNode.removeChild(browserWrap);
            browserWrap = null;
            popup = null;
        }
    },

    show: function (win, lose) {
        if (browserWrap) {
            browserWrap.style.display = "block";
        }
    },

    open: function (win, lose, args) {
        var strUrl = args[0],
            target = args[1],
            features = args[2];

        if (target === "_self" || !target) {
            window.location = strUrl;
        } else if (target === "_system") {
            modulemapper.getOriginalSymbol(window, 'window.open').call(window, strUrl, "_blank");
        } else {
            // "_blank" or anything else
            if (!browserWrap) {
                browserWrap = document.createElement("div");
                browserWrap.style.position = "absolute";
                browserWrap.style.top = "0";
                browserWrap.style.left = "0";
                browserWrap.style.boxSizing = "border-box";
                browserWrap.style.borderWidth = "40px";
                browserWrap.style.width = "100vw";
                browserWrap.style.height = "100vh";
                browserWrap.style.borderStyle = "solid";
                browserWrap.style.borderColor = "rgba(0,0,0,0.25)";

                browserWrap.onclick = function () {
                    setTimeout(function () {
                        IAB.close(win);
                    }, 0);
                };

                document.body.appendChild(browserWrap);
            }

            if (features.indexOf("hidden=yes") !== -1) {
                browserWrap.style.display = "none";
            }

            popup = document.createElement("iframe");
            popup.style.borderWidth = "0px";
            popup.style.width = "100%";

            browserWrap.appendChild(popup);

            if (features.indexOf("location=yes") !== -1 || features.indexOf("location") === -1) {
                popup.style.height = "calc(100% - 60px)";
                popup.style.marginBottom = "-4px";

                navigationButtonsDiv = document.createElement("div");
                navigationButtonsDiv.style.height = "60px";
                navigationButtonsDiv.style.backgroundColor = "#404040";
                navigationButtonsDiv.style.zIndex = "999";
                navigationButtonsDiv.onclick = function (e) {
                    e.cancelBubble = true;
                };

                navigationButtonsDivInner = document.createElement("div");
                navigationButtonsDivInner.style.paddingTop = "10px";
                navigationButtonsDivInner.style.height = "50px";
                navigationButtonsDivInner.style.width = "160px";
                navigationButtonsDivInner.style.margin = "0 auto";
                navigationButtonsDivInner.style.backgroundColor = "#404040";
                navigationButtonsDivInner.style.zIndex = "999";
                navigationButtonsDivInner.onclick = function (e) {
                    e.cancelBubble = true;
                };


                backButton = document.createElement("button");
                backButton.style.width = "40px";
                backButton.style.height = "40px";
                backButton.style.borderRadius = "40px";

                backButton.innerHTML = "←";
                backButton.addEventListener("click", function (e) {
                    if (popup.canGoBack)
                        popup.goBack();
                });

                forwardButton = document.createElement("button");
                forwardButton.style.marginLeft = "20px";
                forwardButton.style.width = "40px";
                forwardButton.style.height = "40px";
                forwardButton.style.borderRadius = "40px";

                forwardButton.innerHTML = "→";
                forwardButton.addEventListener("click", function (e) {
                    if (popup.canGoForward)
                        popup.goForward();
                });

                closeButton = document.createElement("button");
                closeButton.style.marginLeft = "20px";
                closeButton.style.width = "40px";
                closeButton.style.height = "40px";
                closeButton.style.borderRadius = "40px";

                closeButton.innerHTML = "✖";
                closeButton.addEventListener("click", function (e) {
                    setTimeout(function () {
                        IAB.close(win);
                    }, 0);
                });

                // iframe navigation is not yet supported
                backButton.disabled = true;
                forwardButton.disabled = true;

                navigationButtonsDivInner.appendChild(backButton);
                navigationButtonsDivInner.appendChild(forwardButton);
                navigationButtonsDivInner.appendChild(closeButton);
                navigationButtonsDiv.appendChild(navigationButtonsDivInner);

                browserWrap.appendChild(navigationButtonsDiv);
            } else {
                popup.style.height = "100%";
            }

            // start listening for navigation events
            attachNavigationEvents(popup, win);

            popup.src = strUrl;
        }
    },

    injectScriptCode: function (win, fail, args) {
        var code = args[0],
            hasCallback = args[1];

        if (browserWrap && popup) {
            try {
                popup.contentWindow.eval(code);
                if (hasCallback) {
                    win([]);
                }
            } catch(e) {
                console.error('Error occured while trying to injectScriptCode: ' + JSON.stringify(e));
            }
        }
    },

    injectScriptFile: function (win, fail, args) {
        var msg = 'Browser cordova-plugin-inappbrowser injectScriptFile is not yet implemented';
        console.warn(msg);
        if (fail) {
            fail(msg);
        }
    }, 

    injectStyleCode: function (win, fail, args) {
        var msg = 'Browser cordova-plugin-inappbrowser injectStyleCode is not yet implemented';
        console.warn(msg);
        if (fail) {
            fail(msg);
        }
    },

    injectStyleFile: function (win, fail, args) {
        var msg = 'Browser cordova-plugin-inappbrowser injectStyleFile is not yet implemented';
        console.warn(msg);
        if (fail) {
            fail(msg);
        }
    }
};

module.exports = IAB;

require("cordova/exec/proxy").add("InAppBrowser", module.exports);

});

cordova.define("cordova-plugin-network-information.NetworkInfoProxy", function(require, exports, module) { /*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var cordova = require('cordova'),
    proxy = require("cordova/exec/proxy"),
    Connection = require('./Connection');

var type = navigator.onLine ? Connection.UNKNOWN : Connection.NONE;

// Subscribe to 'native' online/offline events
function onStatusChange(evt) {
    type = navigator.onLine ? Connection.UNKNOWN : Connection.NONE;
    // force async
    setTimeout(function(){
        cordova.fireDocumentEvent(evt.type);
    },0);
}

window.addEventListener('online', onStatusChange);
window.addEventListener('offline', onStatusChange);

proxy.add("NetworkStatus", {
    getConnectionInfo:function(cbSuccess) {
        // force async
        setTimeout(function(){
            cbSuccess(type);
        },0);
    }
});



});

cordova.define("cordova-plugin-splashscreen.SplashScreenProxy", function(require, exports, module) { /*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

// Default parameter values including image size can be changed in `config.xml`
var splashImageWidth = 170;
var splashImageHeight = 200;
var position = { x: 0, y: 0, width: splashImageWidth, height: splashImageHeight }; 
var localSplash; // the image to display
var localSplashImage;
var bgColor = "#464646";
var imageSrc = '/img/logo.png';
var splashScreenDelay = 3000; // in milliseconds
var showSplashScreen = true; // show splashcreen by default
var cordova = require('cordova');
var configHelper = cordova.require('cordova/confighelper');

function updateImageLocation() {
    position.width = Math.min(splashImageWidth, window.innerWidth);
    position.height = position.width * (splashImageHeight / splashImageWidth);

    localSplash.style.width = window.innerWidth + "px";
    localSplash.style.height = window.innerHeight + "px";
    localSplash.style.top = "0px";
    localSplash.style.left = "0px";

    localSplashImage.style.top = "50%";
    localSplashImage.style.left = "50%";
    localSplashImage.style.height = position.height + "px";
    localSplashImage.style.width = position.width + "px";
    localSplashImage.style.marginTop = (-position.height / 2) + "px";
    localSplashImage.style.marginLeft = (-position.width / 2) + "px";
}

function onResize() {
    updateImageLocation();
}

var SplashScreen = {
    setBGColor: function (cssBGColor) {
        bgColor = cssBGColor;
        if (localSplash) {
            localSplash.style.backgroundColor = bgColor;
        }
    },
    show: function () {
        if(!localSplash) {
            window.addEventListener("resize", onResize, false);
            localSplash = document.createElement("div");
            localSplash.style.backgroundColor = bgColor;
            localSplash.style.position = "absolute";

            localSplashImage = document.createElement("img");
            localSplashImage.src = imageSrc;
            localSplashImage.style.position = "absolute";

            updateImageLocation();

            localSplash.appendChild(localSplashImage);
            document.body.appendChild(localSplash);
        }
    },
    hide: function () {
        if(localSplash) {
            window.removeEventListener("resize", onResize, false);
            document.body.removeChild(localSplash);
            localSplash = null;
        }
    }
};

/**
 * Reads preferences via ConfigHelper and substitutes default parameters.
 */
function readPreferencesFromCfg(cfg) {
    try {
        var value = cfg.getPreferenceValue('ShowSplashScreen');
        if(typeof value != 'undefined') {
            showSplashScreen = value === 'true';
        }

        splashScreenDelay = cfg.getPreferenceValue('SplashScreenDelay') || splashScreenDelay;
        imageSrc = cfg.getPreferenceValue('SplashScreen') || imageSrc;
        bgColor = cfg.getPreferenceValue('SplashScreenBackgroundColor') || bgColor;
        splashImageWidth = cfg.getPreferenceValue('SplashScreenWidth') || splashImageWidth;
        splashImageHeight = cfg.getPreferenceValue('SplashScreenHeight') || splashImageHeight;
    } catch(e) {
        var msg = '[Browser][SplashScreen] Error occured on loading preferences from config.xml: ' + JSON.stringify(e);
        console.error(msg);
    }
}

/**
 * Shows and hides splashscreen if it is enabled, with a delay according the current preferences.
 */
function showAndHide() {
    if(showSplashScreen) {
        SplashScreen.show();

        window.setTimeout(function() {
            SplashScreen.hide();
        }, splashScreenDelay);
    }
}

/**
 * Tries to read config.xml and override default properties and then shows and hides splashcreen if it is enabled.
 */
(function initAndShow() {
    configHelper.readConfig(function(config) {
        readPreferencesFromCfg(config);
        showAndHide();
    }, function(err) {
        console.error(err);
    });
})();

module.exports = SplashScreen;

require("cordova/exec/proxy").add("SplashScreen", SplashScreen);


});
