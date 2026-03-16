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
      let year = new Date().getFullYear();
      return "&#169; Nerds in Denial  " + year + ". Email us: nerdsindenial at gmail";
      break;
    case 5:
      return "tim wuz here 👉😎👉";
      break;
    case 6:
      return "alright no more easter eggs... have fun scrollin ;)";
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
        if (scrollCount > 0 && scrollCount % 50 === 0) {
          text = rareMessage(rareCount);
          rareCount++;
        } else if (scrollCount === 420) {
          text = "There's two moons.";
        } else if (scrollCount === 1337) {
          text = `The King was born June, 8 1946 to two American G.I.s, who were stationed in the American controlled, Alsace-Lorraine region. Because of their proximity, and their status as a couple with a small child, during the start of the Cold War, they were chosen to become American spies in Russia. This would mean that the King would finish his formal education in a Russian school system, but still have full legal citizenship in America. He graduates in Spring Of 1964 ranked halfway through his class, which made his parents and the US government happy that he wasn’t noticeable, though in actuality he wasn’t too bright. Because of his unique circumstances, being the cover for his parents, while tensions between the US and USSR continued to grow, the US government gave him an opportunity to join a secret government DNA investigation and test facility focusing on a number of ancient tribes and races. During this time he learned many secrets about history, was introduced to the idea of real magic, and witnessed multiple executions of key staff members for seemingly no good reason. Within no time he rose through the ranks and was named head of this particular facility, but even though not much time had passed every single person who was working when he was brought on was either dead or promoted. He adopted this style of management, although still didn’t fully understand why, he did know people who died usually had made a recent breakthrough or discovery, and now everyone reported to him. He was also given, by his old boss, contact information for hit men and clean up crews, both for professional and personal use. The year is 1969 and the 23 year old King is starting to accumulate more and more information about an ancient American race of lizard people who apparently had the power to connect their minds together using magic of some sort. As aforementioned magic wasn’t foreign to him, but all the “magic” they’d been able to back with some sort of science, usually the reports were instances of a controlled phenomenon that could often be explained by weather, but telepathy on a large scale would be a really big deal, so he kept it a secret to protect his life, though he had to make quarterly reports to his old boss, who had been promoted. In 1969 the United States government attempted to send a man to the moon unsuccessfully and his boss was in charge of overseeing many of the more technical processes involved. While the general public and even the current Federalist believed it was some divine force that failed the mission, the boss knew the truth, that the red moon was in a different location than they thought, and that the moon was made of gaseous Felicita Ishbul. All that was known about Felicata Ishbul is that there was a number of American tribes that grew a plant that would periodically glow, and that it could give them visions. It was widely synonymous with weed, but not really a recreational substance. The boss reached out to the king for information on the substance, so the king asked his team, who told him that they knew nothing, except it was the current working theory for the key to this ancient telepathy. The king chose not to share this information with his boss, but told his team to prepare for an excursion to a reservation that grew Felicata Ishbul. The king and his crew posed as students studying ancient American civilizations and culture. They were welcomed with open arms, and invited to visit the Felish fields, even to speak to the shaman, the leader of the people lawfully, and spiritually. The king ordered the members of his crew to smoke the Felish with the Shaman and write a full report of the effects they felt, and the king would opt out if asked so he could monitor the behavior of everyone. When the Felish was eventually brought up the King asked about the uses besides getting high. The Shaman gave him a non answer that got him nowhere, meanwhile the crew thought it was very profound because they were stoned. The reports were essentially the same, they felt silly, their thoughts raced, and they were especially hungry. The King was had also acquired a full Felish plant for study and analysis. The King proceeded to Kill that particular crew and focus on the plant. In May of 1970 the plant started to glow and the crew noticed traces of FCI radiating from the plant and being drawn in to all other life forms in proximity to it. Many tests were performed to crew members who had absorbed it. All they were able to figure out is that certain members had absorbed a higher concentration in the same amount of time as the others, though the concentration was for the most part static on both ends. Those who had a little had the same amount and those who had a lot had the same amount. About a week later the plant stopped glowing and radiating. Everyone involved was executed after making full reports. Through the 1970s the King continued to run the facility and often would interview shaman from reservations till he had met with all them and established rapport. He would be in contact with many of them to ask questions for his research while continuing to keep it all a secret from his boss. During this time he had heard legends from multiple accounts that the ancestors of these tribes would had used telepathic powers to fight against enemies, and that the Felish plants kept them connected. His biggest breakthrough was when he was able to test the blood of a shaman, and his FCI concentration was the same as his original test subjects that were in the higher concentration group. He deduced that the higher concentration was due to an ancestral connection to one of these ancient telepathic tribes.`;
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
