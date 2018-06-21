// js
console.log("interested in looking behind the scenes? check out the source code on github: https://github.com/Legend-of-iPhoenix/legend-of-iphoenix.github.io/tree/master/src");
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments)
}
gtag("js", new Date)
gtag("config", "UA-109579764-3")
// "project_name": "status|link|description"
// status is one of "wip", "abandoned", "complete"
// if link starts with '/', it is a relative path, otherwise it is a github repo.
// description is raw html that is shown to the user.
var projects = {
  "Village": "wip|/Village|An esoteric programming language where you are a forgetful village chief that has to write everything down.",
  "PolyJS": "wip|Legend-of-iPhoenix/PolyJS|A fast, lightweight library for drawing 2D polygons to a HTML5 Canvas.",
  "iChat": "wip|Legend-of-iPhoenix/iChat|A bare-bones, highly customizable chat embed for use with Google Firebase.",
  "markdown-bbcode-html": "wip|/markdown-bbcode-html|A tool to convert basic Markdown into BBCode and HTML.",
  "BlockNinja": "wip|Legend-of-iPhoenix/BlockNinja|A fruit ninja analogue written in Pythonista 3 for iOS.",
  "TheButton": "abandoned|jcgter777/TheButton|A fun king-of-the-hill game for clicking a button.",
  "cant-help-you": "complete|/cant-help-you|A simple webpage and creator tool to send to people you arenot going to help for various customizable reasons.",
  "ascii-pi": "complete|/ascii-pi|Draws an ASCII art greek letter <em>pi</em> in exactly 360 characters of JavaScript. My first attempt at JavaScript golfing!",
  "3d-cube": "complete|/3d-cube|A spinning ASCII art cube, in 500 bytes of JavaScript.",
  "rainbow": "complete|/rainbow|A tiny near-miss quine that draws itself in all of its flashy rainbow glory.",
  "clock": "complete|/clock|A heavily golfed JavaScript 7-segment display clock. Does not observe timezones."
};

// "project_name": "status|link|description"
// status is the same as other project type (see above)
// link is the number in the http://ceme.tech/DL<num> download page shortlink.
var calcProjects = {
  "Procrastinate": "complete|1747|A game about homework and essays. Features an advanced Google Docs and Sublime Text mockup. Recieved first place in Cemetech Contest 21!",
  "Plane Mania": "complete|1619|Quite possibly my most complex game ever. Simulates how it feels owning a small airline, where you buy planes, access to airports, adjust profits, fix planes, and much more. I made a demo video, <a href='https://youtu.be/Iy6PLCyRo6k'>check it out</a>! Part of my Cemetech Contest 20 entry, which recieved an honorable mention.",
  "World of Yum": "complete|1608|A fun game about eating fish food and avoiding toxic pollutants! Features customizable fish, a high scores table, and more! Part of my Cemetech Contest 20 entry.",
  "Adventures of JETMAN": "complete|1652|Fly around the screen collecting squares! Includes a highscores table and an advanced movement system.",
  "CalcType": "complete|1639|A typing speed test for the TI-84+CE calculators",
  "Simon": "complete|1553|My first \"good\" TI-BASIC game, a port of the electronic memory game <a href='https://en.wikipedia.org/wiki/Simon_(game)'>Simon</a>.",
  "Stacker": "complete|1760|A port of the classic arcade game of the same name.",
  "Bouncy Ball Simulator 2017": "complete|1707|This game is strangely fun and satisfying. You get to launch a bouncy ball around in a small room with semi-realistic physics.",
  "Stick Hero CE": "complete|1618|A port of the popular game Stick Hero. Of all the ports I've made, this one has to be my favorite."
}

window.onload = x => {
  document.getElementById("projects").innerHTML = "";
  document.getElementById("calcProjects").innerHTML = "";

  Object.keys(projects).map(project => {
    var data = projects[project].split("|");
    if (data[1].charAt(0) != "/") {
      data[1] = "https://github.com/" + data[1]
    }
    document.getElementById("projects").innerHTML += '<li class="project"><a class="' + data[0] + '" href="' + data[1] + '">' + project + '</a>: ' + data[2] + ' <em>Status: ' + data[0].toUpperCase() + '</em></li>';
  });
  Object.keys(calcProjects).map(calcProject => {
    var data = calcProjects[calcProject].split("|");
    document.getElementById("calcProjects").innerHTML += '<li class="project"><a class="' + data[0] + '" href="http://ceme.tech/DL' + data[1] + '">' + calcProject + '</a>: ' + data[2] + ' <em>Status: ' + data[0].toUpperCase() + '</em></li>';
  });
}