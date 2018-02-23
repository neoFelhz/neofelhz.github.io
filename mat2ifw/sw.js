"use strict";
(function() {
    self.importScripts("https://cdnjs.cat.net/ajax/libs/sw-toolbox/3.6.1/sw-toolbox.js");
    self.toolbox.options.debug = false;
    self.toolbox.options.networkTimeoutSeconds = 5;
    self.toolbox.router.get("/(.*)", self.toolbox.fastest, {
        origin: /cdnjs\.cat\.net/,
        cache: {
            name: "staticAssetsCache",
            maxEntries: 100
        }
    });
    self.toolbox.router.get("/(.*)", self.toolbox.fastest, {
        origin: /s\.nfz\.yecdn\.com/,
        cache: {
            name: "staticAssetsCache",
            maxEntries: 100
        }
    });
    self.toolbox.router.get("/mat2ifw/$", self.toolbox.networkFirst, {
        cache: {
            name: "PageCache",
            maxEntries: 100
        }
    });
    self.toolbox.router.get("/mat2ifw/\?(.*)$", self.toolbox.networkFirst, {
        cache: {
            name: "PageCache",
            maxEntries: 100
        }
    });
    self.toolbox.router.get("/mat2ifw/", self.toolbox.networkFirst, {
        cache: {
            name: "PageCache",
            maxEntries: 100
        }
    });

    /* NoCache */
    self.toolbox.router.get("/sw.js", self.toolbox.networkFirst),
    self.toolbox.router.get("/(.*).php(.*)", self.toolbox.networkOnly),
	self.toolbox.router.get("/(.*)", self.toolbox.networkOnly, {origin: /ga\.fir\.im/,});

    self.addEventListener("install",
        function(event) {return event.waitUntil(self.skipWaiting())
    });
    self.addEventListener("activate",
        function(event) {return event.waitUntil(self.clients.claim())
    })
})();