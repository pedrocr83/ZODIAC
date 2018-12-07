$(document).ready(function(){

  $('#day').datetimepicker({format:"DD",viewMode:"days",});
  $('#month').datetimepicker({format:"MM",viewMode:"months",});
  $('#year').datetimepicker({format:"YYYY",viewMode:"years",});

  var $day = $('#day');
  var $month = $('#month');
  var $year = $('#year');

  var rat = ["1960", "1972", "1984", "1996", "2008", "2020"];
  var ox = ["1961", "1973", "1985", "1997", "2009", "2021"];
  var tiger = ["1962", "1974", "1986", "1998", "2010", "2022"];
  var rabbit = ["1963", "1975", "1987", "1999", "2011", "2023"];
  var dragon = ["1964", "1976", "1988", "2000", "2012", "2024"];
  var snake = ["1965", "1977", "1989", "2001", "2013", "2025"];
  var horse = ["1966", "1978", "1990", "2002", "2014", "2026"];
  var sheep = ["1967", "1979", "1991", "2003", "2015", "2027"];
  var monkey = ["1968", "1980", "1992", "2004", "2016", "2028"];
  var rooster = ["1969", "1981", "1993", "2005", "2017", "2029"];
  var dog = ["1970", "1982", "1994", "2006", "2018", "2030"];
  var pig = ["1971", "1983", "1995", "2007", "2019", "2031"];

  var previewTimer1 = setInterval(updateWestern, 200);
  var previewTimer2 = setInterval(updateChinese, 200);

  function showChinese_soap(image) {
    var sourceOfPicture = image;
    var img1 = document.getElementById('chinese_soap')
    img1.src = sourceOfPicture.replace();
    img1.style.display = "block";
    img1.style.float = "left";
    img1.style.margin = "auto";
    img1.style.height = "50vh";
    img1.style.width = "26vw";
    img1.style.padding = "2vw";
    img1.classList.add("fadein");
  }

  function showChinese_can(image) {
    var sourceOfPicture = image;
    var img1 = document.getElementById('chinese_can')
    img1.src = sourceOfPicture.replace();
    img1.style.display = "block";
    img1.style.float = "left";
    img1.style.margin = "auto";
    img1.style.height = "50vh";
    img1.style.width = "20vw";
    img1.style.padding = "2vw";
    img1.classList.add("fadein");
  }

  function showWestern(image) {
    var sourceOfPicture = image;
    var img1 = document.getElementById('western')
    img1.src = sourceOfPicture.replace();
    img1.style.display = "block";
    img1.style.margin = "auto";
    img1.style.height = "50vh";
    img1.style.width = "20vw";
    img1.classList.add("fadein");
  }
  function updateWestern(){
    /*Definir variaveis para análise das imagens*/

    var month = $month.val();
    var day = $day.val();
    /*Ciclos para definir o que é mostrado*/
    if (month == 12 & day > 21 | month == 1 & day < 22){showWestern('images/western/capricorn.png')}
    if (month == 1 & day > 21 | month == 2 & day < 22){showWestern('images/western/aquarius.png')}
    if (month == 2 & day > 21 | month == 3 & day < 22){showWestern('images/western/pisces.png')}
    if (month == 3 & day > 21 | month == 4 & day < 22){showWestern('images/western/aries.png')}
    if (month == 4 & day > 21 | month == 5 & day < 22){showWestern('images/western/taurus.png')}
    if (month == 5 & day > 21 | month == 6 & day < 22){showWestern('images/western/gemini.png')}
    if (month == 6 & day > 21 | month == 7 & day < 22){showWestern('images/western/cancer.png')}
    if (month == 7 & day > 21 | month == 8 & day < 22){showWestern('images/western/leo.png')}
    if (month == 8 & day > 21 | month == 9 & day < 22){showWestern('images/western/virgo.png')}
    if (month == 9 & day > 21 | month == 10 & day < 22){showWestern('images/western/libra.png')}
    if (month == 10 & day > 21 | month == 11 & day < 22){showWestern('images/western/scorpio.png')}
    if (month == 11 & day > 21 | month == 12 & day < 22){showWestern('images/western/sagittarius.png')}
  }
  function updateChinese(){
    var year = $year.val();

    /*Ciclos para definir o que é mostrado*/
    if (rat.includes(year) == true){
      showChinese_soap('images/chinese/soap/rat.jpg');
      showChinese_can('images/chinese/can/rat.jpg');
    }
    if (ox.includes(year) == true){
      showChinese_soap('images/chinese/soap/ox.jpg');
      showChinese_can('images/chinese/can/ox.jpg')
    }
    if (tiger.includes(year) == true){
      showChinese_soap('images/chinese/soap/tiger.jpg');
      showChinese_can('images/chinese/can/tiger.jpg')
    }
    if (rabbit.includes(year) == true){
      showChinese_soap('images/chinese/soap/rabbit.jpg');
      showChinese_can('images/chinese/can/rabbit.jpg')
    }
    if (dragon.includes(year) == true){
      showChinese_soap('images/chinese/soap/dragon.jpg');
      showChinese_can('images/chinese/can/dragon.jpg')
    }
    if (snake.includes(year) == true){
      showChinese_soap('images/chinese/soap/snake.jpg');
      showChinese_can('images/chinese/can/snake.jpg')
    }
    if (horse.includes(year) == true){
      showChinese_soap('images/chinese/soap/horse.jpg');
      showChinese_can('images/chinese/can/horse.jpg')
    }

    if (sheep.includes(year) == true){
      showChinese_soap('images/chinese/soap/goat.jpg');
      showChinese_can('images/chinese/can/goat.jpg')
    }
    if (monkey.includes(year) == true){
      showChinese_soap('images/chinese/soap/monkey.jpg');
      showChinese_can('images/chinese/can/monkey.jpg')
    }
    if (rooster.includes(year) == true){
      showChinese_soap('images/chinese/soap/rooster.jpg');
      showChinese_can('images/chinese/can/rooster.jpg')
    }
    if (dog.includes(year) == true){
      showChinese_soap('images/chinese/soap/dog.jpg');
      showChinese_can('images/chinese/can/dog.jpg')
    }
    if (pig.includes(year) == true){
      showChinese_soap('images/chinese/soap/pig.jpg');
      showChinese_can('images/chinese/can/pig.jpg')
    }
  }

});
