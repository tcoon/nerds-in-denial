// main.js

const headlines = [
  {
      "outlet": "Dissociated Press",
      "headline": "BREAKING: The Federalist Legalizes Psychedelic Cannabis Alternative \"Felicata Ishbul\" Nationwide"
  },
  {
      "outlet": "Dissociated Press",
      "headline": "FOR IMMEDIATE RELEASE: The Federalist makes official decree to ban calling him \"king\", says term has \"bad optics\""
  },
  {
      "outlet": "Dissociated Press",
      "headline": "FBI detains recording artist Echelon .45 on sedition charges, raids Los Angeles apartment"
  },
  {
      "outlet": "Faux News",
      "headline": "Storming Of Castle Deemed \"Antifa Co-opted Event\", Patriots Told Not To Worry"
  },
  {
      "outlet": "Faux News",
      "headline": "Working Long Hours for Little Pay? Here's How to Pull Yourself Up by the Bootstraps and Suck it Up:"
  },
  {
      "outlet": "Faux News",
      "headline": "Federalist calls in National Guard to assist with handling active riots at the castle"
  },
  {
      "outlet": "Faux News",
      "headline": "Disney-Microsoft-CNN-CBS-FOX-Reuters-Apple-Trader Joe's merger completed - stocks at all time high"
  },
  {
      "outlet": "The Monroe Times",
      "headline": "Federalist Announces New \"Felicata Festival\" in Rochester, NY"
  },
  {
      "outlet": "The Monroe Times",
      "headline": "New BROVID-69 variant \"Ligma\" discovered by scientists in Djibouti"
  },
  {
      "outlet": "The Monroe Times",
      "headline": "Opinion: The Fed's executive order to close the border with Canada isn't just irrational. It's unconstitutional."
  },
  {
      "outlet": "Briebart",
      "headline": "How radical leftists are destroying the dairy industry through vegan cheese alternatives"
  },
  {
      "outlet": "Briebart",
      "headline": "THE LEFT is trying to cancel your FAVORITE pizza topping!!"
  },
  {
      "outlet": "Briebart",
      "headline": "CHEESE DENIERS ARRESTED AT CAPITOL"
  },
  {
      "outlet": "The ROC Post",
      "headline": "Peepin' Pete Still At Large: Here's What You Need To Know"
  },
  {
      "outlet": "The ROC Post",
      "headline": "Federalist pulls 2,000 troops out of the Canadian war front to focus on snuffing out domestic radicals"
  },
  {
      "outlet": "The ROC Post",
      "headline": "Soma, silence, serenity: a view from inside the Albion Public Reconditioning Center"
  },
  {
      "outlet": "Humfeed",
      "headline": "Top 5 captured Federalist defecters - you WON'T BELIEVE what the FBI did to #3!!!"
  },
  {
      "outlet": "Humfeed",
      "headline": "Fun Night Uses For Felicata 🌟😍🌟"
  },
  {
      "outlet": "Humfeed",
      "headline": "DUAL-LUNAR ECLIPSE - Take this quiz to see how your sign's aura may be affected by this event 👀"
  }
]

const rareMessage = function (rareCount) {
  switch(rareCount) {
    case 0:
      return "havin fun scrollin there, bud? :)";
      break;
    case 1:
      return "there's no secret or anything down here, just endless bars";
      break;
    case 2:
      return "man you are dedicated";
      break;
    case 3:
      return "I guess we'll put the copyright down here somewhere";
      break;
    case 4:
      return "&#169; Nerds in Denial 2024. Email us: nerdsindenial at gmail";
      break;
    case 5:
      return "tim wuz here 👉😎👉";
      break;
    case 6:
      return "alright no more easter eggs. have fun scrollin :)";
      break;
    default:
      return ".bars";
      break;
  }
}

const bars = [
  ".bars",
  ".bars",
  ".bars",
  ".bars",
  ".bars",
  ".bars",
  ".bars",
  ".bars",
  ".bars",
  ".bars",
  ".bars",
  ".bars",
  ".bars",
  ".bars",
  ".bars",
  ".BARS",
  ".......bars",
  ".bars?",
  ".bars!",
  ".baaars",
  ".BARS?",
  ".BARS!",
  ".BAAAAAAAARS"
];

const setHeadlines = function (wrapper) {
  var used = [];
  $(wrapper).each((i, elem) => {
    $(elem).empty();

    let rand = Math.floor(Math.random() * headlines.length);
    while (used.includes(rand)) {
      rand = Math.floor(Math.random() * headlines.length);
    }
    let headlineObj = headlines[rand];

    $(elem).append("<h5>" + headlineObj.headline + "</h5>");
    $(elem).append("<p>" + headlineObj.outlet + "</p>");

    used.push(rand);
  });
}

$(document).ready(() => {

  var scrollCount = 0;
  var rareCount = 0;
  var nav = false;

  $(document).scroll(() => {
      if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
        let text = "";
        if (scrollCount > 0 && scrollCount % 50 == 0) {
          text = rareMessage(rareCount);
          rareCount++;
        } else {
          text = bars[Math.floor(Math.random() * bars.length)];
        }
        $("#bars").append($("<li>").html(text));
        scrollCount++;
      }
  });

  setHeadlines('.headline');

  $('#headlineRefresh').click(() => {
    setHeadlines('.headline');
  });

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
});
