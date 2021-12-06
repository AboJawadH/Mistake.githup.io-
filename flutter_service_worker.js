'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "596267b44effbeadde59c4863263bff7",
"assets/assets/icons/carsIcons/icons8-car.png": "7fd6dcdef28e993ea62d4392b1dc8004",
"assets/assets/icons/carsIcons/icons8-retro_car.png": "2e613eaa089b47cd6fa45aa261d30de2",
"assets/assets/icons/hudIcons/icons8-about.png": "658b83758f795b476685cba20218c280",
"assets/assets/icons/hudIcons/icons8-android_os.png": "1b03338bcfac5e5ce2a9565d79d20ff0",
"assets/assets/icons/hudIcons/icons8-apple_logo.png": "1e1cb480192493da6c6c60032dd09166",
"assets/assets/icons/hudIcons/icons8-close_window.png": "d7a4d29a35e4b096c08aaa1f1f47c462",
"assets/assets/icons/hudIcons/icons8-high_priority.png": "8830dbee82c9b9098ebe65c3427afc0c",
"assets/assets/icons/hudIcons/icons8-info_squared.png": "a861cdca1e934a29e68da268a2344033",
"assets/assets/icons/hudIcons/icons8-tick_box.png": "f4f3de766370ea8b1dcd557586268297",
"assets/assets/icons/otherIcons/icons8-instagram.png": "39cf8349360e255d8d277e92dde7a1bf",
"assets/assets/icons/otherIcons/icons8-snapchat.png": "e9481a560c7ad877f293aaf0b0c4f76a",
"assets/assets/icons/otherIcons/icons8-twitter.png": "a09571ce0429c89dd8934133f9f725fa",
"assets/assets/icons/otherIcons/icons8-twitter_squared.png": "077b4ee8d72c312c1166ddcd6ddc85c9",
"assets/assets/icons/otherIcons/icons8-whatsapp%25202.png": "32574b78bc1eb52847bbe6ff1e92fddb",
"assets/assets/icons/otherIcons/icons8-whatsapp.png": "d82c7dd134cdbb9303b2d447003895cb",
"assets/assets/icons/tapBarIcons/icons8-cab_stand.png": "79c51ea5cfa65fcbaddc410e5a263508",
"assets/assets/icons/tapBarIcons/icons8-car.png": "39efea85a9e568cb1ecf09a78d27c30a",
"assets/assets/icons/tapBarIcons/icons8-discount%25202.png": "fecae30e61590705ea69d044b06c8176",
"assets/assets/icons/tapBarIcons/icons8-discount.png": "0aa1e3a40bbbb0e1ddd8a05d33539a63",
"assets/assets/icons/tapBarIcons/icons8-dog_house%25202.png": "1c890b6601a0e20488a658d2dca5a8b7",
"assets/assets/icons/tapBarIcons/icons8-dog_house.png": "56fc72962756896b240a195fe243a53b",
"assets/assets/icons/tapBarIcons/icons8-edit_property%25202.png": "b3d50118853d640b126db8db9ce5bcf6",
"assets/assets/icons/tapBarIcons/icons8-edit_property.png": "a773d4ffaf88ba2a3828eeb22705ff45",
"assets/assets/icons/tapBarIcons/icons8-fiat_500%25202.png": "23e74216728d1ee82770d57235d58327",
"assets/assets/icons/tapBarIcons/icons8-fiat_500.png": "d113f542ef2bda3e2619304b15eff7c5",
"assets/assets/icons/tapBarIcons/icons8-gift_card%25202.png": "b15bfeb674329262848226afefcb0069",
"assets/assets/icons/tapBarIcons/icons8-gift_card.png": "b8c26d888798f704aff1da9dff719873",
"assets/assets/icons/tapBarIcons/icons8-loyalty_card%25202.png": "bc569c7044e1a4c08d4ee0327e8050a4",
"assets/assets/icons/tapBarIcons/icons8-loyalty_card.png": "ff8a1e9a30d8ab1caa2bba5cad55c087",
"assets/assets/icons/tapBarIcons/icons8-map_marker%25202.png": "6067d7b483e09fb9023650e48bc3d0c1",
"assets/assets/icons/tapBarIcons/icons8-map_marker.png": "acee20d1dedd397fdc6f679f1b86d6df",
"assets/assets/icons/tapBarIcons/icons8-settings%25202.png": "c24b070444bb0fa4ffc8be54c51f1efe",
"assets/assets/icons/tapBarIcons/icons8-settings.png": "1ba29eaa2ec83732a90c1969a68c3844",
"assets/assets/icons/tapBarIcons/icons8-tesla_model_3%25202.png": "90ba999e9dce412df3a37f626ec1674c",
"assets/assets/icons/tapBarIcons/icons8-tesla_model_3.png": "90ba999e9dce412df3a37f626ec1674c",
"assets/assets/icons/tapBarIcons/icons8-to_do%25202.png": "106cafc1626655817cce4e7c9b093850",
"assets/assets/icons/tapBarIcons/icons8-to_do.png": "edb1172e4b49aace8737234f3ef059a3",
"assets/assets/images/logo/11123530043_632af83dd8_b.jpg": "80d17ed287bbd24af2b1bc8afac3bf7a",
"assets/assets/images/logo/2dca4861-69b2-4da4-b9d3-843ef349cb42.png": "24dc62880dd3d2ae084e094176145ed1",
"assets/assets/images/logo/about_us_text_ar_page-0001.jpg": "692c5e4ba10aed471310cfd326ecf72d",
"assets/assets/images/logo/about_us_text_en_page-0001.jpg": "32ee371476af415c7cf660d7162bccbf",
"assets/assets/images/logo/arAbout.png": "6f31f7a2c6b40e82fe60806246c01857",
"assets/assets/images/logo/enAbout.png": "cbdef8c94f3dd20d847ade5912783ba3",
"assets/assets/images/logo/logo%2520QGU.png": "f6b8b07e02d9a48cd8f0b90c5676598e",
"assets/assets/images/logo/map.png.jpg": "2cf92a614cf6a5f37dd9d3fda7d54ad8",
"assets/assets/images/logo/newLogo.png": "32867f55b3a2a796b44a78feb4650635",
"assets/assets/images/logo/uroadLogo.png": "9b88ccfec786e2715b9b4467b97f0196",
"assets/assets/images/logo/uroadLogoTransparent.png": "be16f9513edfc74be67b40947712576b",
"assets/assets/images/logo/What_is_Information_Technology.jpg": "652adf6d5544bbfcb85473537a9d4719",
"assets/assets/images/splash/onboarding1.png": "3ab3cde0f4b94954a092627e3872f3b5",
"assets/assets/images/splash/onboarding2.png": "8c280714aa740e1dd2c6755c2f7fe5b9",
"assets/assets/images/splash/onboarding3.png": "a157dc0ae1a2f55ca2089744926e000b",
"assets/assets/lottie/24950-httpslottiefilescomshareelmjr.json": "6517ab86b5c180eb6c534b36da579647",
"assets/assets/lottie/62633-lock-animation.json": "ffd6cabc9e69aeae4445964377cfb14c",
"assets/assets/lottie/lf30_editor_3mtegqap.json": "a5bd91bac51a60518a70f2343adb5c59",
"assets/assets/lottie/lf30_editor_q7dzfwka.json": "dc81236d45b39de4e437109f3033d88b",
"assets/assets/lottie/lf30_editor_vnujbra8.json": "8f07436162918b3331181aa6c2927b6e",
"assets/assets/lottie/logo.json": "8ce9b8541dedf7a396bfeb8d0a89da6a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d700ebee5e647e17273333328b2604ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "c176697f1efad15d924f7a7c64667e59",
"/": "c176697f1efad15d924f7a7c64667e59",
"main.dart.js": "f4b0e6ca31db2935552b4bc9dbdd3ae4",
"manifest.json": "89c9c5ff6b8d7775256d33cca522a8a7",
"version.json": "a5af020a70a7a641da591865786aadb7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
