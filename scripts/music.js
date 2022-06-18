// music.js

// shamelessly stolen from https://www.learningjquery.com/2012/06/get-url-parameters-using-jquery
const getUrlParameter = function (sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

// in retrospect, this could be simplified but im too lazy
const links = {
  ep1: {
    'sites': {
      'spotify': 'https://open.spotify.com/album/79zRZhxLOc5C6UpdMKmhIF',
      'apple': 'https://music.apple.com/us/album/its-gone-too-far-ep/1574069920',
      'bandcamp': 'https://nerdsindenial.bandcamp.com/album/its-gone-too-far-ep',
      'amazon': 'https://www.amazon.com/dp/B0981JG1JB',
      'pandora': 'https://www.pandora.com/artist/nerds-in-denial/its-gone-too-far-explicit/ALdKz4tmlqXd5fP',
      'deezer': 'https://deezer.page.link/ZRjPptBpoSi8mU3Q9',
      'youtube': 'https://www.youtube.com/playlist?list=OLAK5uy_k7EPh2dvcy-tM8P22iPbvTwasXWMco-Pc'
    }
  },
  ep2: {
    'sites': {
      'spotify': 'https://open.spotify.com/album/7pw1STaMgLuFdYWzvwzMKQ',
      'apple': 'https://music.apple.com/us/album/a-sunset-serenade-ep/1579793695',
      'bandcamp': 'https://nerdsindenial.bandcamp.com/album/a-sunset-serenade-ep',
      'amazon': 'https://www.amazon.com/dp/B09BXRMHD5',
      'pandora': 'https://www.pandora.com/artist/nerds-in-denial/a-sunset-serenade-explicit/AL9jdxgV5m4pcjc',
      'deezer': 'https://deezer.page.link/3DaPEpeHKF2sHDiUA',
      'youtube': 'https://www.youtube.com/playlist?list=OLAK5uy_kA-qZxJt7KrIquCWTcxoDlOnd_o06QR80'
    }
  },
  ep3: {
    'sites': {
      'spotify': 'https://open.spotify.com/album/4GeoI4nUuOs41GqZt667Zw',
      'apple': 'https://music.apple.com/us/album/mimosas-at-noon-ep/1586294108',
      'bandcamp': 'https://nerdsindenial.bandcamp.com/album/mimosas-at-noon-ep',
      'amazon': 'https://www.amazon.com/dp/B09GJN9BRF',
      'pandora': 'https://www.pandora.com/artist/nerds-in-denial/mimosas-at-noon-explicit/ALnlv7fkqx2pjc9',
      'deezer': 'https://deezer.page.link/sSf7MGTtMYWcHLY98',
      'youtube': 'https://www.youtube.com/playlist?list=OLAK5uy_nGSvTSNlR3cSV6C9AtGhNSG9o6EOViI5c'
    }
  },
  ep4: {
    'sites': {
      'spotify': 'https://open.spotify.com/album/0vN4X7ifohdFwSM6v3khTc',
      'apple': 'https://music.apple.com/us/album/out-of-the-country-into-the-castle-ep/1595461531',
      'bandcamp': 'https://nerdsindenial.bandcamp.com/album/out-of-the-country-into-the-castle-ep',
      'amazon': 'https://www.amazon.com/dp/B09LTBHXNN',
      'pandora': 'https://www.pandora.com/artist/nerds-in-denial/out-of-the-country-into-the-castle-explicit/ALJtzvvbtlJ9t4g',
      'deezer': 'https://deezer.page.link/mENyWzQ2GkBNETZq6',
      'youtube': 'https://www.youtube.com/playlist?list=OLAK5uy_nEHhAqcpNRGEiWBoBF7irHRg00fYhULkQ'
    }
  },
  ep5: {
    'sites': {
      'spotify': '',
      'apple': '',
      'bandcamp': '',
      'amazon': '',
      'pandora': '',
      'deezer': '',
      'youtube': ''
    }
  },
  bars: {
    'sites': {
      'spotify': '',
      'apple': '',
      'bandcamp': '',
      'amazon': '',
      'pandora': '',
      'deezer': '',
      'youtube': ''
    }
  },
  take2: {
    'sites': {
      'spotify': 'https://open.spotify.com/album/2FbOWZ5RqMrT0bjOgBeB14',
      'apple': 'https://music.apple.com/us/album/take-two/1136455755',
      'bandcamp': 'https://nerdsindenial.bandcamp.com/album/take-two',
      'amazon': 'https://www.amazon.com/dp/B01ISW49QM',
      'pandora': '',  // N/A
      'deezer': 'https://deezer.page.link/NKhnicEHMw5dMaMy5',
      'youtube': 'https://www.youtube.com/playlist?list=OLAK5uy_mq0LzrDaLo_uhvFmGbcIck9SgrBZBPF1Q'
    }
  },
  oldies: {
    'sites': {
      'bandcamp1': 'https://nerdsindenial.bandcamp.com/track/drug-money-2',
      'bandcamp2': 'https://nerdsindenial.bandcamp.com/track/five-days-time-2'
    }
  }
}

const addSite = function (site, link) {
  if (!link || link == '') {
    return;
  }

  let href = link;
  let title;
  let src;

  switch (site) {
    case "spotify":
      title = 'Spotify';
      src = 'img/spotify.webp';
      break;
    case "apple":
      title = 'iTunes';
      src = 'img/applemusic.webp';
      break;
    case "bandcamp":
      title = 'Bandcamp';
      src = 'img/bandcamp.webp';
      break;
    case "amazon":
      title = 'Amazon Music';
      src = 'img/amazonmusic.webp';
      break;
    case "pandora":
      title = 'Pandora';
      src = 'img/pandora.webp';
      break;
    case "deezer":
      title = 'Deezer';
      src = 'img/deezer.webp';
      break;
    case "youtube":
      title = 'YouTube';
      src = 'img/youtube.webp';
      break;
    case "bandcampDrugMoney":
      title = 'Bandcamp';
      src = 'img/drugmoney.webp'
      break;
    case "bandcampFiveDaysTime":
      title = 'Bandcamp';
      src = 'img/fivedaystime.webp'
      break;
    default:
      break; 
  }

  $('#siteHeader').after('\
      <a href="' + href + '" title="' + title + '" target="_blank" rel=”noopener noreferrer”>\
        <img class="links" src="' + src + '"/>\
      </a>'
  );
}

const addAllSites = function (currRelease) {
  addSite('youtube', links[currRelease]['sites']['youtube']);
  addSite('deezer', links[currRelease]['sites']['deezer']);
  addSite('pandora', links[currRelease]['sites']['pandora']);
  addSite('amazon', links[currRelease]['sites']['amazon']);
  addSite('bandcamp', links[currRelease]['sites']['bandcamp']);
  addSite('apple', links[currRelease]['sites']['apple']);
  addSite('spotify', links[currRelease]['sites']['spotify']);
}

const addMusic = function (title, file) {
  let shortFileSplit = file.split("/");
  let shortFile = shortFileSplit[shortFileSplit.length - 1].split(".")[0];
  let id = shortFile;

  $('#musicHeader').after('\
    <p class="musicTitle"> ' + title + '</p>\
    <audio id="' + id + '" src="' + file + '" controls/>\
  ');
}

$(document).ready(() => {
  var nav = false;
  var currRelease = getUrlParameter('release');

  switch(currRelease) {
    case "ep1":
      $('#title').html(".bars EP #1 - It's Gone Too Far (2021)");
      $('#logoSmol').attr('src', 'img/ep1.webp');
      addAllSites(currRelease);
      addMusic('Wasted', 'music/ep1/wasted.mp3');
      addMusic('Don\'t Step On That Crack', 'music/ep1/crack.mp3');
      addMusic('Mezzothelionus', 'music/ep1/mezzo.mp3');
      addMusic('Gringo Meets His Maker', 'music/ep1/gringo.mp3');
      addMusic('It\'s Gone Too Far (Single Version)', 'music/ep1/toofar.mp3', true);
      break;
    case "ep2":
      $('#title').html(".bars EP #2 - A Sunset Serenade (2021)");
      $('#logoSmol').attr('src', 'img/ep2.webp');
      addAllSites(currRelease);
      addMusic('Above & Below: The Continuing Tale of Frankie Tinniman', 'music/ep2/abovebelow.mp3');
      addMusic('Colored Pastels', 'music/ep2/pastels.mp3');
      addMusic('Sizmo Co.', 'music/ep2/sizmo.mp3');
      addMusic('Bonnie the Butcher', 'music/ep2/bonnie.mp3');
      addMusic('A Sunset Serenade', 'music/ep2/sunset.mp3', true);
      break;
    case "ep3":
      $('#title').html(".bars EP #3 - Mimosas at Noon (2021)");
      $('#logoSmol').attr('src', 'img/ep3.webp');
      addAllSites(currRelease);
      addMusic('Garden of Seven Leaves', 'music/ep3/garden.mp3');
      addMusic('New Girl in the Room', 'music/ep3/newgirl.mp3');
      addMusic('Country Road Car Insurance', 'music/ep3/countryroad.mp3');
      addMusic('Red Ringlets', 'music/ep3/ringlets.mp3');
      addMusic('Mimosas at Noon', 'music/ep3/mimosas.mp3', true);
      break;
    case "ep4":
    $('#logoSmol').attr('src', 'img/ep4.webp');
      $('#title').html(".bars EP #4 - Out of the Country / Into the Castle (2021)");
      addAllSites(currRelease);
      addMusic('Sammy, Are You In There?', 'music/ep4/sammy.mp3');  
      addMusic('GENESIS & BEYOND', 'music/ep4/GENBEY.mp3');
      addMusic('Ode to the Lost Ones', 'music/ep4/ode.mp3');
      addMusic('Bachman\'s Dock Disks', 'music/ep4/bachman.mp3');
      addMusic('genesis and beyond', 'music/ep4/genesisbeyond.mp3');
      addMusic('Out of the Country / Into the Castle', 'music/ep4/otcitc.mp3', true);
      break;
    case "ep5":
      //$('#logoSmol').attr('src', 'img/ep5.webp');
      $('#title').html(".bars EP #5 - Felicata Ishbul (2022)");
      $('#siteHeader').after('\
        <p>Coming soon...</p>'
      );
      $('#musicHeader').after('\
        <p>Coming soon...</p>'
      );
      break;
    case "bars":
      $('#title').html(".bars (2022)");
      $('#siteHeader').after('\
        <p>Coming soon...</p>'
      );
      $('#musicHeader').after('\
        <p>Coming soon...</p>'
      );
      break;
      break;
    case "take2":
    $('#logoSmol').attr('src', 'img/take2.webp');
      $('#title').html("Take Two (2016)");
      addAllSites(currRelease);
      addMusic('Till Next Time', 'music/take2/nexttime.mp3');
      addMusic('A Storm Passes... And So Do You', 'music/take2/storm.mp3');
      addMusic('Autophobia', 'music/take2/auto.mp3');
      addMusic('Crazy', 'music/take2/crazy.mp3');
      addMusic('Persistence Can Be Such A Bitch', 'music/take2/persistence.mp3');
      addMusic('Miranda Rights', 'music/take2/miranda.mp3');
      addMusic('Just A Little Time', 'music/take2/littletime.mp3');
      addMusic('Starling', 'music/take2/starling.mp3');
      addMusic('Interlude', 'music/take2/interlude.mp3');
      break;
    case "oldies":
    $('#logoSmol').attr('src', 'img/oldies.webp');
      $('#title').html("The Real Old Stuff...");
      addSite('bandcampDrugMoney', links[currRelease]['sites']['bandcamp1']);
      addSite('bandcampFiveDaysTime', links[currRelease]['sites']['bandcamp2']);
      addMusic('Drug Money (2014)', 'music/oldies/drugs.mp3');
      addMusic('Five Days\' Time (2015)', 'music/oldies/five.mp3');
      break;
    default:
      $('#title').html("Stop messin' with the url, ya dillweed!");
      break;
  }

  $('#navigationBtn').click(() => {
    nav = !nav;
    if (nav) {
      // expand
      $('#navigationBtn').css("background-color", "black");
      $('.location').show();

      $('#navigationBtn').empty();
      $('#navigationBtn').append('<p><b>Menu&nbsp;&#9650;</b></p>');
    } else {
      // collapse
      $('#navigationBtn').css("background-color", "gray");
      $('.location').hide();

      $('#navigationBtn').empty();
      $('#navigationBtn').append('<p><b>Menu&nbsp;&#9660;</b></p>');
    }
  });


  // this is gross lol
  //
  // it keeps you from playing multiple files at once,
  // and styles the currently playing file
  document.querySelectorAll('audio').forEach( (audioStart) => {
    audioStart.addEventListener('play', (event) => {

      // style the playing track
      $(audioStart).prev().css('font-weight', 'bold');
      $(audioStart).prev().css('font-size', '1em');
      let currTitle = $(audioStart).prev().html();
      if (currTitle.indexOf('🎵') == -1) {
        $(audioStart).prev().html('🎵\u00A0' + currTitle + '\u00A0🎵');
      }

      // un-style and pause previously playing track if applicable
      document.querySelectorAll('audio').forEach( (audio) => {
        if (audio === audioStart) {
          return;
        }
        let title = $(audio).prev().html();
        if (title.indexOf('🎵') > -1) {
          $(audio).prev().css('font-weight', 'normal');
          $(audio).prev().css('font-size', '0.85em');
          audio.pause();
          $(audio).prev().html(title.replace(/🎵|&nbsp; |&nbsp;| &nbsp;\./g,''));
        }
      });

      // send it
      audioStart.play();
    });
  });
});
