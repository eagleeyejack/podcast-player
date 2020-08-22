"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getPodcastData = require('./get-podcast-data');

var savePodcastImage = require('./save-podcast-image');

var slugify = require('@sindresorhus/slugify');

var _require = require('fs/promises'),
    writeFile = _require.writeFile;

var categories = [{
  title: 'Podlediau Cymraeg',
  slug: 'cymraeg',
  podcasts: ['http://www.spreaker.com/show/2899984/episodes/feed', 'https://anchor.fm/s/1017df1c/podcast/rss', 'http://podcasts.files.bbci.co.uk/b007rkcg.rss', 'https://anchor.fm/s/43e3bc8/podcast/rss', 'http://podcasts.files.bbci.co.uk/b007rkcw.rss', 'https://anchor.fm/s/10751ab0/podcast/rss', 'https://feeds.soundcloud.com/users/soundcloud:users:706638973/sounds.rss', 'http://podcasts.files.bbci.co.uk/p04v1ffm.rss', 'https://podcasts.files.bbci.co.uk/p0808rf5.rss', 'https://podcasts.files.bbci.co.uk/p07n8qcv.rss', 'http://feeds.soundcloud.com/users/soundcloud:users:483179808/sounds.rss', 'https://caersalem.fireside.fm/rss', 'http://feeds.soundcloud.com/users/soundcloud:users:399462789/sounds.rss', 'https://anchor.fm/s/1065e61c/podcast/rss', 'https://anchor.fm/s/fe2f8ec/podcast/rss', 'https://feeds.buzzsprout.com/1091735.rss', 'http://feeds.soundcloud.com/users/soundcloud:users:262273210/sounds.rss', 'http://farmingconnect.libsyn.com/rss', 'http://www.cwmpawd.org/pregethau/?podcast', 'http://podcasts.files.bbci.co.uk/p06xm608.rss', 'https://podcasts.files.bbci.co.uk/p07jh2vj.rss', 'http://www.spreaker.com/show/2875385/episodes/feed', 'https://feeds.fireside.fm/clicorarchifs4c/rss', 'https://anchor.fm/s/1d55c20c/podcast/rss', 'http://dalalan.libsyn.com/rss', 'https://podcasts.files.bbci.co.uk/p07t8v40.rss', 'https://anchor.fm/s/6e30340/podcast/rss', 'http://podcasts.files.bbci.co.uk/p06r651t.rss', 'https://podcasts.files.bbci.co.uk/p078qclj.rss', 'http://feeds.feedburner.com/EglwysiBroAledPodlediad', 'https://ffitcymru.fireside.fm/rss', 'https://feeds.fireside.fm/ffitcymru2020/rss', 'http://podcasts.files.bbci.co.uk/b007rktl.rss', 'https://audioboom.com/channels/4969896.rss', 'https://anchor.fm/s/1136c084/podcast/rss', 'http://feeds.soundcloud.com/users/soundcloud:users:12862459/sounds.rss', 'https://anchor.fm/s/1ec0e428/podcast/rss', 'https://feed.podbean.com/welshchess/feed.xml', 'https://haclediad.fireside.fm/rss', 'https://anchor.fm/s/2b1e80a4/podcast/rss', 'https://anchor.fm/s/14e77c14/podcast/rss', 'https://hanshs4c.fireside.fm/rss', 'https://feeds.fireside.fm/hanshblascyntaf/rss', 'https://podcasts.files.bbci.co.uk/p07vp7f4.rss', 'https://feeds.soundcloud.com/users/soundcloud:users:828821062/sounds.rss', 'https://feeds.soundcloud.com/users/soundcloud:users:247362741/sounds.rss', 'https://anchor.fm/s/2e3b5550/podcast/rss', 'https://anchor.fm/s/13ccb128/podcast/rss', 'http://feeds.soundcloud.com/users/soundcloud:users:794382883/sounds.rss', 'https://anchor.fm/s/103fcb6c/podcast/rss', 'https://anchor.fm/s/244bf310/podcast/rss', 'https://anchor.fm/s/279f04e4/podcast/rss', 'http://podcasts.files.bbci.co.uk/p063rjy5.rss', 'http://podcasts.files.bbci.co.uk/b007sy3l.rss', 'https://feeds.soundcloud.com/users/soundcloud:users:732849445/sounds.rss', 'https://feeds.buzzsprout.com/1260962.rss', 'https://anchor.fm/s/151ccd4c/podcast/rss', 'http://podcasts.files.bbci.co.uk/p02nrvyj.rss', 'https://audioboom.com/channels/1770483.rss', 'https://anchor.fm/s/2fd5b978/podcast/rss', 'https://anchor.fm/s/1a8bfa50/podcast/rss', 'https://anchor.fm/s/bfcf5e8/podcast/rss', 'https://feed.podbean.com/ypodpeth/feed.xml', 'http://feeds.soundcloud.com/users/soundcloud:users:243855732/sounds.rss', 'http://feeds.soundcloud.com/users/soundcloud:users:496125714/sounds.rss', 'http://podcasts.files.bbci.co.uk/p06c29rn.rss', 'http://feeds.soundcloud.com/users/soundcloud:users:619206399/sounds.rss', 'http://feeds.soundcloud.com/users/soundcloud:users:575689005/sounds.rss', 'https://feeds.soundcloud.com/users/soundcloud:users:264404844/sounds.rss', 'https://feed.podbean.com/davidredbutton/feed.xml', 'http://feeds.soundcloud.com/users/soundcloud:users:497671380/sounds.rss', 'http://feeds.soundcloud.com/users/soundcloud:users:2809201/sounds.rss', 'https://anchor.fm/s/110023a8/podcast/rss', 'https://feeds.buzzsprout.com/1100825.rss', 'https://feeds.fireside.fm/seiat/rss', 'http://feeds.soundcloud.com/users/soundcloud:users:528825699/sounds.rss', 'http://podcasts.files.bbci.co.uk/p06sc599.rss', 'https://podcasts.files.bbci.co.uk/p07hsxm8.rss', 'https://anchor.fm/s/4e28d04/podcast/rss', 'http://feeds.soundcloud.com/users/soundcloud:users:327375574/sounds.rss', 'http://podcasts.files.bbci.co.uk/b054b8f3.rss', 'https://audioboom.com/channels/4931978.rss', 'http://podcasts.files.bbci.co.uk/p02pcb1j.rss', 'https://feed.podbean.com/bragdyrbeirdd/feed.xml', 'https://feeds.buzzsprout.com/1061998.rss', 'https://www.spreaker.com/show/3494831/episodes/feed', 'https://audioboom.com/channels/5005113.rss', 'https://anchor.fm/s/1ecb1e84/podcast/rss', 'http://feeds.soundcloud.com/users/soundcloud:users:812578396/sounds.rss', 'https://anchor.fm/s/bcf0c00/podcast/rss', 'https://feeds.soundcloud.com/users/soundcloud:users:725829466/sounds.rss', 'https://podcasts.files.bbci.co.uk/p0754kvy.rss', 'https://feeds.fireside.fm/yclwbdarllen/rss', 'https://www.spreaker.com/show/4275611/episodes/feed', 'https://anchor.fm/s/2d950844/podcast/rss', 'https://podcasts.files.bbci.co.uk/p08jrddk.rss', 'https://atleticohansh.fireside.fm/rss', 'http://feeds.soundcloud.com/users/soundcloud:users:598695261/sounds.rss', 'https://longmanpodcast.castos.com/yn-y-parth-1', 'https://anchor.fm/s/176804a4/podcast/rss', 'https://feeds.simplecast.com/DJdhuscY', 'https://anchor.fm/s/238f8ef0/podcast/rss', 'https://podcasts.files.bbci.co.uk/p08gt688.rss', 'https://anchor.fm/s/73cf314/podcast/rss', 'http://feeds.feedburner.com/welshwordoftheday', 'http://media-podcast.open.ac.uk/feeds/l196-croeso/audio/rss2.xml']
}];

function getPodcast(url) {
  var data, meta, filename;
  return regeneratorRuntime.async(function getPodcast$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(getPodcastData(url, 1));

        case 3:
          data = _context.sent;
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 9:
          if (!data.meta) {
            _context.next = 19;
            break;
          }

          meta = data.meta;
          filename = slugify(meta.title, {
            decamelize: false
          });

          if (!meta.originalImage) {
            _context.next = 16;
            break;
          }

          _context.next = 15;
          return regeneratorRuntime.awrap(savePodcastImage(filename, meta.originalImage));

        case 15:
          meta.image = "/img/podcast-images/".concat(filename, ".png");

        case 16:
          return _context.abrupt("return", meta);

        case 19:
          return _context.abrupt("return", {
            url: url
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

function getAllData(categories) {
  var categoryPodcastPromises = categories.map(function (category) {
    var urls = category.podcasts;
    return Promise.all(urls.map(getPodcast));
  });
  return Promise.all(_toConsumableArray(categoryPodcastPromises));
}

function getInitialState(data) {
  var byUrl = {};
  data.forEach(function (podcast) {
    return byUrl[podcast.url] = {
      meta: podcast
    };
  });
  var initialState = {
    byUrl: byUrl,
    categories: categories
  };
  return initialState;
}

getAllData(categories).then(function (data) {
  var initialState = getInitialState(data.flat(1));
  writeFile('./src/initial-state.json', JSON.stringify(initialState, null, 2));
});