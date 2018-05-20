const channelNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
    "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
const $onlineDiv = $('#online');
const $offlineDiv = $('#offline');
const $all = $('#all');
// const anchor=document.getElementsByTagName('a');
const $navLinks = $('li a');
let type = "streams";

$(document).ready(function () {

    getChannelInfo();
    $navLinks.on("click", onClick);

    function onClick(evt) {

        let activeLink = $(evt.target);
        let id = activeLink.attr('href');
        let currentDiv = $(id);
        let previosDiv = $('.active');
        previosDiv.removeClass('active');
        $('a.active').removeClass('active');
        activeLink.addClass('active');
        currentDiv.addClass('active');
    }

    function getChannelInfo() {
        channelNames.forEach(function (channel) {
            function makeUrl(type, name) {
                return "https://wind-bow.glitch.me/twitch-api/" + type + "/" + channel;
            }
            $.getJSON(makeUrl("streams", channel), function (data) {
                console.log(data);
                let status, game, name, logoUrl;
                let link = "https://www.twitch.tv/";
                if (data.stream == null) {

                    game = "Offline";
                    status = "offline";
                    name = channel;
                    link = link + name;
                    let html = `<div class="flex"><img src="assets/twitch-logo.svg" alt="" class="profile-img"><div class="text"><a href="${link}" target="_blank" class="link"><p class="user-name">${name}</p> </a><p class="stream">${game}</p></div><img src="assets/offline.svg" class="online-circle"></div>`;
                    $offlineDiv.append(html);
                    $all.append(html);
                }
                else if (data.stream == undefined) {
                    game = "Account Closed";
                    status = "offline";
                    name = channel;
                    link = link + name;
                    let html = `<div class="flex"><img src="assets/twitch-logo.svg" alt="" class="profile-img"><div class="text"><a href="${link}" target="_blank" class="link"><p class="user-name">${name}</p> </a><p class="stream">${game}</p></div><img src="assets/offline.svg" class="online-circle"></div>`;
                    $offlineDiv.append(html);
                    $all.append(html);
                }
                else {
                    game = data.stream.game;
                    status = "online";
                    name = data.stream.channel.display_name;
                    logoUrl = data.stream.channel.logo;
                    link = link + name;
                    let html = `<div class="flex"><img src="${logoUrl}" alt="" class="profile-img"><div class="text"><a href="${link}" target="_blank" class="link"><p class="user-name">${name}</p></a> <p class="stream">${game}</p></div><img src="assets/online.svg" class="online-circle"></div>`;
                    $onlineDiv.append(html);
                    $all.append(html);
                }

            })
        });


    }

});


    // for(let i=0;i<anchor.length;i++){
    //     anchor[i].addEventListener('click',anchorClick);
    // }

    // function anchorClick(e){
    //     console.log(e.target);
    //     console.log(e.target.getAttribute('href'));
    //     let id=e.target.getAttribute('href');
    //     let activeDiv=document.querySelector(id);
    //     activeDiv.innerHTML="";
    //     let previousActive=document.querySelectorAll('div.active');
    //     for(let i=0;i<previousActive.length;i++){
    //         previousActive[i].classList.remove('active');
    //     }
    //     document.querySelector('a.active').classList.remove('active');
    //     e.target.classList.add('active');
    //     activeDiv.classList.add('active');
    //     getChannelInfo();
    // }






    //https://wind-bow.glitch.me/twitch-api/streams/OgamingSC2

    //type=streams
    //channel=OgamingSC2



