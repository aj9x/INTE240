const lyrics = [
  { time: 0, text: "Introduction - David Byrne" },
  { time: 34, text: "I can't seem to face up to the facts" },
  { time: 38, text: "I'm tense and nervous and I can't relax" },
  { time: 42.3, text: "I can't sleep because my bed's on fire" },
  { time: 46.7, text: "Don't touch me I'm a real live wire" },
  { time: 51, text: "Psycho Killer, qu'est-ce que c'est?" },
  { time: 55, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
  { time: 59.5, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
  { time: 67, text: "Ay-ya-ya-ya-ya-ya, ooh" },
  { time: 80, text: "You start a conversation, you can't even finish it" },
  { time: 84, text: "You're talking a lot, but you're not saying anything" },
  { time: 88, text: "When I have nothing to say, my lips are sealed" },
  { time: 91.8, text: "Say something once, why say it again?" },
  { time: 97.1, text: "Psycho Killer, qu'est-ce que c'est?" },
  { time: 100.8, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
  { time: 105.1, text: "Run, run, run, run, run, run, run away, oh, oh, oh" },
  { time: 113.8, text: "Psycho Killer, qu'est-ce que c'est?" },
  { time: 117.6, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
  { time: 122.8, text: "Run, run, run, run, run, run, run away, oh, oh, oh" },
  { time: 130.2, text: "Ay-ya-ya-ya-ya-ya" },
  { time: 135, text: "Ce que j'ai fait, ce soir-là (2x)" },
  { time: 151.5, text: "Réalisant mon espoir" },
  { time: 155.8, text: "Je me lance vers la gloire, okay" },
  { time: 163.2, text: "Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah" },
  { time: 168, text: "We are vain and we are blind" },
  { time: 171.8, text: "I hate people when they're not polite" },
  { time: 176.5, text: "Psycho Killer, qu'est-ce que c'est?" },
  { time: 180.1, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
  { time: 185, text: "Run, run, run, run, run, run, run away, oh, oh, oh" },
  { time: 192.8, text: "Ay-ya-ya-ya-ya-ya, ooh" },
  { time: 200, text: "(Outro Instrumental)" },

  // Add more lyrics here with timestamps...
];
/*
    I can't seem to face up to the facts
    I'm tense and nervous and I can't relax
    I can't sleep 'cause my bed's on fire
    Don't touch me, I'm a real live wire
    Psycho Killer
    Qu'est-ce que c'est?
    Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
    Run, run, run, run, run, run, run away, oh-oh-oh
    Psycho Killer
    Qu'est-ce que c'est?
    Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
    Run, run, run, run, run, run, run away, oh, oh, oh, oh
    Ay-ya-ya-ya-ya-ya, ooh
    You start a conversation, you can't even finish it
    You're talking a lot, but you're not saying anything
    When I have nothing to say, my lips are sealed
    Say something once, why say it again?
    Psycho Killer
    Qu'est-ce que c'est?
    Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
    Run, run, run, run, run, run, run away, oh-oh-oh
    Psycho Killer
    Qu'est-ce que c'est?
    Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
    Run, run, run, run, run, run, run away, oh, oh, oh, oh
    Ay-ya-ya-ya-ya-ya
    Ce que j'ai fait, ce soir-là
    Ce qu'elle a dit, ce soir-là
    Réalisant mon espoir
    Je me lance vers la gloire, okay
    Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah
    We are vain and we are blind
    I hate people when they're not polite
    Psycho Killer
    Qu'est-ce que c'est?
    Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
    Run, run, run, run, run, run, run away, oh-oh-oh
    Psycho Killer
    Qu'est-ce que c'est?
    Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better
    Run, run, run, run, run, run, run away, oh, oh, oh, oh
    Ai-ya-ya-ya-ya-ya, ooh
    */
let currentLyricIndex = 0;
const audio = document.getElementById("audio");
const lyricElement = document.getElementById("lyric");
audio.addEventListener("play", () => {
  setInterval(displayLyrics, 100); // Update lyrics every 100ms for better
  accuracy;
});
function displayLyrics() {
  const currentTime = audio.currentTime;
  // Find the current lyric based on time
  if (
    currentLyricIndex < lyrics.length &&
    currentTime >= lyrics[currentLyricIndex].time
  ) {
    lyricElement.textContent = lyrics[currentLyricIndex].text;
    currentLyricIndex++;
  }
}
