/**
 * Proxy Auto-Configuration (PAC) file
 * @link https://findproxyforurl.com/pac-functions/
 */

var PROXY_DIRECT = "DIRECT",
    PROXY_BLOCK = "PROXY 127.0.0.1:8021",
    PROXY_GOOGLE = "PROXY 216.58.209.78:80",
    PROXY_WEB_BLOCK_APP = "PROXY 5.9.40.99:80",
    s = function (u, r) {
        return shExpMatch(u, r);
    },
    d = function (h, r) {
        return dnsDomainIs(h, r);
    },
    n = function (h, r, m) {
        return isInNet(h, r, m);
    },
    e = function (u) {
        var h;

        if (u.indexOf("://") > -1) {
            h = u.split('/')[2];
        } else {
            h = u.split('/')[0];
        }

        h = h.split(':')[0];

        return h.split('.').reverse();
    }
;

function FindProxyForURL(url, host) {
    var u = url.toLowerCase(),
        h = host.toLowerCase(),
        a = e(u),
        b = a[0],
        c = a[1],
        f = c.length,
        t = c[f - 1],
        z = c[f - 2]
    ;

    if (d(h, "dtG7A1.configtest.wl.is")) {
        return PROXY_WEB_BLOCK_APP;
    }

    if (d(h, "wl.is") || d(h, "weblockapp.com") || n(h, "17.0.0.0", "255.0.0.0")) {
        return PROXY_DIRECT;
    }

    if (b == "com") {
        if (t == "3") {
            if (d(h, "admtpmp123.com") || d(h, "wafmedia3.com")) return PROXY_BLOCK;
        }
        if (t == "2") {
            if (d(h, "aimg.fc2.com") || d(h, "adshost2.com") || d(h, "affiliate.fc2.com")) return PROXY_BLOCK;
        }
        if (t == "4") {
            if (d(h, "admtpmp124.com") || d(h, "clk1004.com")) return PROXY_BLOCK;
        }
        if (t == "a") {
            if (z == "i") {
                if (d(h, "wigetmedia.com") || d(h, "engine.a.redditmedia.com") || d(h, "conversantmedia.com") || d(h, "lfstmedia.com") || d(h, "xtendmedia.com") || d(h, "vdopia.com") || d(h, "amazemobilemedia.com") || d(h, "tremormedia.com") || d(h, "cdn.millennialmedia.com") || d(h, "andomedia.com")) return PROXY_BLOCK;
            } else if (z == "v") {
                if (d(h, "kochava.com") || d(h, "mojiva.com") || d(h, "adelva.com")) return PROXY_BLOCK;
            } else if (d(h, "atemda.com") || d(h, "adtoma.com") || d(h, "bnmla.com") || d(h, "atwola.com") || d(h, "komoona.com") || d(h, "eclkmpsa.com") || d(h, "transpera.com") || d(h, "atedra.com") || d(h, "admeta.com") || d(h, "plista.com") || d(h, "de17a.com") || d(h, "videoplaza.com")) return PROXY_BLOCK;
        }
        if (t == "c") {
            if (z == "i") {
                if (d(h, "cxpublic.com") || d(h, "adsymptotic.com") || d(h, "pubmatic.com")) return PROXY_BLOCK;
            } else if (d(h, "contentabc.com") || d(h, "adztec.com")) return PROXY_BLOCK;
        }
        if (t == "b") {
            if (z == "a") {
                if (d(h, "crosspromo.zeptolab.com") || d(h, "bms.zeptolab.com") || d(h, "asp.animelab.com")) return PROXY_BLOCK;
            } else if (z == "e") {
                if (d(h, "ucweb.com") || d(h, "ox\u002Dd.advanceweb.com") || d(h, "sa.entireweb.com")) return PROXY_BLOCK;
            } else if (z == "o") {
                if (d(h, "admob.com") || d(h, "hot\u002Dmob.com") || d(h, "revmob.com")) return PROXY_BLOCK;
            } else if (d(h, "m2pub.com") || d(h, "tremorhub.com")) return PROXY_BLOCK;
        }
        if (t == "e") {
            if (z == "c") {
                if (d(h, "adnetworkperformance.com") || d(h, "widespace.com") || d(h, "startappservice.com") || d(h, "delivery.trafficforce.com") || d(h, "valuecommerce.com")) return PROXY_BLOCK;
            } else if (z == "g") {
                if (d(h, "bounceexchange.com") || s(u, "*admax*") && d(h, "nexage.com") || d(h, "startappexchange.com") || d(h, "tradeadexchange.com")) return PROXY_BLOCK;
            } else if (z == "n") {
                if (d(h, "admngronline.com") || d(h, "algovid.com") && s(u, "*watchcartoononline*") || d(h, "madsone.com")) return PROXY_BLOCK;
            } else if (z == "s") {
                if (d(h, "trafficposse.com") || d(h, "adinfuse.com") || d(h, "mobilefuse.com") || d(h, "adhese.com") || d(h, "postrelease.com") || d(h, "cxense.com") || d(h, "uauniverse.com") || d(h, "openxenterprise.com") || d(h, "clickfuse.com")) return PROXY_BLOCK;
            } else if (z == "v") {
                if (d(h, "redirectnative.com") || d(h, "swrve.com") || d(h, "pushnative.com") || d(h, "inner\u002Dactive.com") || d(h, "advertserve.com") || d(h, "adsnative.com")) return PROXY_BLOCK;
            } else if (d(h, "delivery.brokerbabe.com") || d(h, "adotube.com") || d(h, "amobee.com") || d(h, "adblade.com") || d(h, "ad4game.com") || d(h, "lockerdome.com") || d(h, "vungle.com") || d(h, "greystripe.com") || d(h, "omniture.com") || d(h, "awempire.com") || d(h, "pubdirecte.com")) return PROXY_BLOCK;
        }
        if (t == "d") {
            if (z == "a") {
                if (d(h, "opt.ximad.com") || d(h, "restartad.com") || d(h, "brucelead.com") || d(h, "bead\u002Dad.com") || d(h, "sbs\u002Dad.com") || d(h, "mediamixad.com") || d(h, "dotandad.com")) return PROXY_BLOCK;
            } else if (d(h, "adspeed.com") || d(h, "mgid.com") || d(h, "innovid.com") || d(h, "360yield.com") || d(h, "appflood.com") || d(h, "unityads.unity3d.com") || d(h, "untd.com")) return PROXY_BLOCK;
        }
        if (t == "g") {
            if (z == "n") {
                if (d(h, "bnserving.com") || d(h, "advertising.com") || d(h, "billytesting.com") || d(h, "integral\u002Dmarketing.com") || d(h, "flashtalking.com") || d(h, "cold\u002Dcold\u002Dfreezing.com")) return PROXY_BLOCK;
            } else if (d(h, "trafmag.com")) return PROXY_BLOCK;
        }
        if (t == "i") {
            if (z == "b") {
                if (d(h, "bebi.com") || d(h, "zumobi.com") || d(h, "inmobi.com")) return PROXY_BLOCK;
            } else if (d(h, "cdn.media.amp.avai.com") || d(h, "insightexpressai.com") || d(h, "upsight\u002Dapi.com") || d(h, "mobusi.com") || d(h, "dotomi.com")) return PROXY_BLOCK;
        }
        if (t == "h") {
            if (z == "s") {
                if (d(h, "airpush.com") || d(h, "adcash.com") || d(h, "europacash.com")) return PROXY_BLOCK;
            } else if (z == "c") {
                if (d(h, "aimatch.com") || d(h, "clmbtech.com") || d(h, "adnotch.com") || d(h, "adinch.com")) return PROXY_BLOCK;
            } else if (d(h, "sharethrough.com") || d(h, "adbooth.com")) return PROXY_BLOCK;
        }
        if (t == "k") {
            if (d(h, "iconpeak.com") || d(h, "ackak.com") || d(h, "exoclick.com") || d(h, "openclick.com") || d(h, "adzerk.com") || d(h, "adapi.addealsnetwork.com") || s(u, "*get_ad.php*") && d(h, "tapatalk.com")) return PROXY_BLOCK;
        }
        if (t == "m") {
            if (z == "e") {
                if (d(h, "dra.amazon\u002Dadsystem.com") || d(h, "ir\u002Dna.amazon\u002Dadsystem.com") || d(h, "aax.amazon\u002Dadsystem.com") || d(h, "aax\u002Dus\u002Deast.amazon\u002Dadsystem.com") || d(h, "s.amazon\u002Dadsystem.com") || d(h, "api.unthem.com") || d(h, "aax\u002Deu.amazon\u002Dadsystem.com") || d(h, "c.amazon\u002Dadsystem.com") || d(h, "aax\u002Dus\u002Dpdx.amazon\u002Dadsystem.com")) return PROXY_BLOCK;
            } else if (d(h, "redtram.com") || d(h, "epom.com") || d(h, "ad131m.com") || d(h, "ad120m.com") || d(h, "castplatform.com") || d(h, "adform.com") || d(h, "gumgum.com") || d(h, "adnium.com") || d(h, "mdotm.com") || d(h, "ad127m.com") || d(h, "adcel.vrvm.com") || d(h, "ad132m.com")) return PROXY_BLOCK;
        }
        if (t == "l") {
            if (z == "a") {
                if (d(h, "ad.prismamediadigital.com") || d(h, "exponential.com") || d(h, "adversal.com") || d(h, "appodeal.com")) return PROXY_BLOCK;
            } else if (z == "l") {
                if (d(h, "misterbell.com") || d(h, "brightroll.com") || d(h, "adroll.com") || d(h, "btrll.com")) return PROXY_BLOCK;
            } else if (d(h, "padsdel.com") || d(h, "liverail.com") || d(h, "adwhirl.com") || d(h, "projectwonderful.com")) return PROXY_BLOCK;
        }
        if (t == "o") {
            if (z == "e") {
                if (d(h, "criteo.com") || d(h, "wbdds.jeuxvideo.com") || d(h, "veeseo.com")) return PROXY_BLOCK;
            } else if (z == "o") {
                if (d(h, "gemini.yahoo.com") || d(h, "beap\u002Dbc.yahoo.com") || d(h, "m.yap.yahoo.com") || d(h, "soundwave.mobile.yahoo.com") || d(h, "ads.yahoo.com") || d(h, "adserver.yahoo.com")) return PROXY_BLOCK;
            } else if (d(h, "globaltraffico.com") || d(h, "zedo.com") || d(h, "sekindo.com") || d(h, "chango.com") || d(h, "yieldmo.com") || d(h, "smaato.com")) return PROXY_BLOCK;
        }
        if (t == "n") {
            if (z == "r") {
                if (d(h, "mtburn.com") || d(h, "turn.com") || d(h, "ziiporn.com")) return PROXY_BLOCK;
            } else if (z == "d") {
                if (d(h, "eacdn.com") || d(h, "inmobicdn.com") || d(h, "c.jsrdn.com") || d(h, "akncdn.com") || d(h, "cb\u002Dcdn.com")) return PROXY_BLOCK;
            } else if (z == "o") {
                if (d(h, "tribalfusion.com") || d(h, "nspmotion.com") || d(h, "clkmon.com") || d(h, "amazonaws.com") && s(u, "*/adversion*") || d(h, "adition.com") || d(h, "performancehorizon.com") || d(h, "mopub.com") && !s(u, "*filmon*") || d(h, "adfalcon.com")) return PROXY_BLOCK;
            } else if (d(h, "applovin.com") || d(h, "playhaven.com")) return PROXY_BLOCK;
        }
        if (t == "p") {
            if (z == "a") {
                if (d(h, "heyzap.com") || d(h, "a.jumptap.com") || d(h, "appserver\u002Dap.com")) return PROXY_BLOCK;
            } else if (d(h, "user\u002Dagent\u002Dtracker.herokuapp.com") || d(h, "startapp.com") || d(h, "rtbpop.com") || d(h, "adtop.com")) return PROXY_BLOCK;
        }
        if (t == "s") {
            if (z == "d") {
                if (d(h, "onclkds.com") || d(h, "juicyads.com") || d(h, "bcfads.com") || d(h, "beaverads.com") || d(h, "exoticads.com") || d(h, "marsads.com") || d(h, "buysellads.com") || d(h, "moatads.com") || d(h, "appads.com") || d(h, "mads.com") || d(h, "mobile.aws.weather.com") && s(u, "*/ads.json") || d(h, "tapjoyads.com") || d(h, "carbonads.com") || d(h, "hotwords.com") || d(h, "mellowads.com") || d(h, "zestads.com") || d(h, "1phads.com") || d(h, "ketads.com") || d(h, "openvideoads.com") || d(h, "pflexads.com") || d(h, "mng\u002Dads.com") || d(h, "medyanetads.com") || d(h, "youtube.com") && s(u, "*/_get_ads*") || d(h, "propellerads.com")) return PROXY_BLOCK;
            } else if (z == "k") {
                if (d(h, "ecpmrocks.com") || d(h, "hkg1.aastocks.com") || d(h, "mobtrks.com") || d(h, "mobytrks.com") || d(h, "terraclicks.com") || d(h, "ox\u002Dd.majorgeeks.com") || d(h, "infolinks.com") || d(h, "yumenetworks.com") || d(h, "keywordblocks.com") || d(h, "adtaxinetworks.com")) return PROXY_BLOCK;
            } else if (z == "t") {
                if (d(h, "adacts.com") || d(h, "bbelements.com") || d(h, "medialets.com")) return PROXY_BLOCK;
            } else if (d(h, "medialytics.com") || d(h, "admeasures.com") || d(h, "addthis.com") && !d(h, "s7.addthis.com") || d(h, "clkdeals.com") || d(h, "otherlevels.com") || d(h, "propellerpops.com") || d(h, "traffpartners.com") || !s(u, "*.gif*") && d(h, "mpnrs.com") || d(h, "ligatus.com") || d(h, "traffichaus.com") || d(h, "serving\u002Dsys.com") || d(h, "ad\u002Dsys.com") || d(h, "adnxs.com") || d(h, "drnxs.com")) return PROXY_BLOCK;
        }
        if (t == "r") {
            if (z == "e") {
                if (d(h, "kixer.com") || d(h, "wwwpromoter.com") || d(h, "yieldmanager.com") || d(h, "eyewonder.com") || d(h, "adkeeper.com") || !s(u, "*/click*") && !s(u, "*itunesredir*") && d(h, "tradedoubler.com") || d(h, "liveadexchanger.com") || d(h, "fyber.com") || d(h, "bidvertiser.com") || d(h, "applifier.com") || d(h, "mob\u002Dserver.com") || d(h, "smartadserver.com") || d(h, "ad\u002Dcenter.com")) return PROXY_BLOCK;
            } else if (z == "o") {
                if (d(h, "image.click.livedoor.com") || d(h, "exelator.com") || d(h, "adtailor.com")) return PROXY_BLOCK;
            } else if (d(h, "ad\u002Dstir.com") || d(h, "cpmstar.com") || d(h, "adgear.com") || d(h, "clickmngr.com")) return PROXY_BLOCK;
        }
        if (t == "t") {
            if (z == "f") {
                if (d(h, "igpiphone.gameloft.com") || d(h, "cdn.applift.com") || d(h, "ingameads.gameloft.com") || d(h, "201205igp.gameloft.com") || d(h, "igp06.gameloft.com") || d(h, "578756.gameloft.com")) return PROXY_BLOCK;
            } else if (z == "n") {
                if (d(h, "adsinstant.com") || d(h, "liveintent.com") || d(h, "revcontent.com") || d(h, "quantcount.com")) return PROXY_BLOCK;
            } else if (d(h, "rubiconproject.com") || d(h, "questionmarket.com") || d(h, "adsmarket.com") || d(h, "appsdt.com") || d(h, "lijit.com") || d(h, "mobiright.com") || d(h, "atdmt.com") || !s(u, "*configure*") && d(h, "adtilt.com") || d(h, "leadbolt.com") || d(h, "avocarrot.com") || d(h, "apprupt.com") || d(h, "admost.com") || d(h, "chartboost.com") || d(h, "reklamport.com") || d(h, "adexprt.com") || d(h, "scanscout.com") || d(h, "intellitxt.com") || d(h, "appnext.com")) return PROXY_BLOCK;
        }
        if (t == "w") {
            if (d(h, "bannerflow.com") || d(h, "adnow.com")) return PROXY_BLOCK;
        }
        if (t == "v") {
            if (d(h, "n208adserv.com") || d(h, "onclasrv.com") || d(h, "directrev.com") || d(h, "clkrev.com") || d(h, "tom.itv.com")) return PROXY_BLOCK;
        }
        if (t == "y") {
            if (z == "l") {
                if (d(h, "adsupply.com") || d(h, "adtaily.com") || d(h, "4dsply.com")) return PROXY_BLOCK;
            } else if (d(h, "sponsorpay.com") || d(h, "doubleverify.com") || d(h, "trafficjunky.com") || d(h, "tapjoy.com") || d(h, "adcolony.com") || d(h, "ads.flurry.com") || d(h, "mobiletheory.com")) return PROXY_BLOCK;
        }
        if (t == "x") {
            if (d(h, "atlassbx.com") || d(h, "mediaplex.com") || d(h, "adpdx.com") || d(h, "mobclix.com") || d(h, "mobfox.com") || d(h, "servedbyopenx.com") || d(h, "openx.com") || d(h, "adk2x.com")) return PROXY_BLOCK;
        }
        if (t == "z") {
            if (d(h, "altrooz.com") || d(h, "adbuddiz.com") || d(h, "zestadz.com")) return PROXY_BLOCK;
        }
        if (d(h, "ximad.com") && s(u, "*/ad3/*") || d(h, "movi11.com") || d(h, "wafmedia5.com") || d(h, "admtpmp127.com") || d(h, "leadzu.com")) return PROXY_BLOCK;
    } else if (b == "net") {
        if (t == "a") {
            if (d(h, "adorika.net") || d(h, "clickterra.net") || d(h, "chitika.net")) return PROXY_BLOCK;
        }
        if (t == "e") {
            if (d(h, "redintelligence.net") || d(h, "accesstrade.net") || d(h, "mobilefuse.net") || d(h, "adglare.net") || d(h, "yen.appsfire.net") || d(h, "trafficgate.net") || d(h, "adverserve.net") || d(h, "api.pubnative.net")) return PROXY_BLOCK;
        }
        if (t == "d") {
            if (!d(h, "heise.nuggad.net") && d(h, "nuggad.net") || d(h, "rnmd.net") || d(h, "content\u002Dad.net")) return PROXY_BLOCK;
        }
        if (t == "k") {
            if (d(h, "fastclick.net") || d(h, "connect.decknetwork.net") || d(h, "adzerk.net")) return PROXY_BLOCK;
        }
        if (t == "m") {
            if (d(h, "adform.net") || d(h, "adverticum.net") || d(h, "alea.adam.daum.net")) return PROXY_BLOCK;
        }
        if (t == "o") {
            if (d(h, "reporo.net") || d(h, "criteo.net") || d(h, "adsmogo.net") || d(h, "smaato.net")) return PROXY_BLOCK;
        }
        if (t == "n") {
            if (d(h, "inmobicdn.net") || d(h, "s1.2mdn.net") || d(h, "popadscdn.net")) return PROXY_BLOCK;
        }
        if (t == "p") {
            if (d(h, "adformdsp.net") || d(h, "lduhtrp.net") || d(h, "smartclip.net")) return PROXY_BLOCK;
        }
        if (t == "s") {
            if (z == "d") {
                if (d(h, "everestads.net") || d(h, "onclickads.net") || d(h, "carbonads.net") || d(h, "popads.net") || d(h, "msads.net")) return PROXY_BLOCK;
            } else if (d(h, "playnomics.net") || d(h, "vaxadserver.azurewebsites.net") || d(h, "zucks.net") || d(h, "leadboltapps.net") || d(h, "intermarkets.net")) return PROXY_BLOCK;
        }
        if (t == "r") {
            if (z == "e") {
                if (d(h, "admaster.net") || d(h, "adjuggler.net") || d(h, "readserver.net") || d(h, "admixer.net")) return PROXY_BLOCK;
            } else if (d(h, "adadvisor.net") || d(h, "adsfactor.net")) return PROXY_BLOCK;
        }
        if (t == "t") {
            if (d(h, "adsrocket.net") || d(h, "leadbolt.net")) return PROXY_BLOCK;
        }
        if (t == "y") {
            if (d(h, "buzzcity.net") || d(h, "trafficjunky.net")) return PROXY_BLOCK;
        }
        if (d(h, "2o7.net") || d(h, "cubecdn.net") && s(u, "*/js/loader_*") || d(h, "adfonic.net") || d(h, "yieldlab.net") || d(h, "e\u002Dplanning.net") || d(h, "revsci.net") || d(h, "adbooth.net") || d(h, "crwdcntrl.net") || d(h, "uimserv.net") || d(h, "openx.net")) return PROXY_BLOCK;
    } else if (b == "kr") {
        if (t == "o") {
            if (z == "c") {
                if (d(h, "theprimead.co.kr") || d(h, "adapi.about.co.kr") || d(h, "cauly.co.kr") || d(h, "tpmn.co.kr") || d(h, "realssp.co.kr") || d(h, "ad.about.co.kr") || d(h, "imadrep.co.kr") || d(h, "ad4989.co.kr")) return PROXY_BLOCK;
            }
        }
    } else if (b == "org") {
        if (t == "s") {
            if (d(h, "4chan\u002Dads.org") || d(h, "openvideoads.org")) return PROXY_BLOCK;
        }
        if (t == "r") {
            if (d(h, "adsrvr.org") || d(h, "zwaar.org")) return PROXY_BLOCK;
        }
        if (d(h, "adtrace.org") || d(h, "ketchapp.org") || d(h, "info.a7.org") || d(h, "openx.org")) return PROXY_BLOCK;
    } else if (b == "de") {
        if (t == "l") {
            if (d(h, "damoh.spiegel.de") || d(h, "brightroll.de")) return PROXY_BLOCK;
        }
        if (d(h, "madvertise.de") || d(h, "movad.de") || d(h, "adtech.de") || d(h, "advolution.de") || d(h, "adspirit.de")) return PROXY_BLOCK;
    } else if (b == "mobi") {
        if (d(h, "yoc.mobi") || d(h, "inner\u002Dactive.mobi") || d(h, "adsmogo.mobi") || d(h, "mocean.mobi") || d(h, "mydas.mobi") || d(h, "adver.mobi") || d(h, "vserv.mobi")) return PROXY_BLOCK;
    } else if (b == "vn") {
        if (d(h, "vcmedia.vn") || d(h, "ad360.vn") || d(h, "eclick.vn") || d(h, "adtimaserver.vn") || d(h, "admicro.vn")) return PROXY_BLOCK;
    } else if (b == "info") {
        if (d(h, "print.theyeshivaworld.info") || d(h, "spotscenered.info") || d(h, "appshelf.ttpsdk.info") || d(h, "houseads.ttpsdk.info")) return PROXY_BLOCK;
    } else if (b == "jp") {
        if (d(h, "advg.jp") || d(h, "openxmarket.jp") || d(h, "openx.jp") || d(h, "zucks.co.jp")) return PROXY_BLOCK;
    } else if (b == "pl") {
        if (d(h, "i\u002Dstream.pl") || d(h, "adocean.pl") || d(h, "adtaily.pl")) return PROXY_BLOCK;
    } else if (b == "tv") {
        if (d(h, "teads.tv") || d(h, "adap.tv") || d(h, "videoplaza.tv")) return PROXY_BLOCK;
    } else if (b == "se") {
        if (d(h, "adrotator.se") || d(h, "fusion.dn.se") || d(h, "emediate.se")) return PROXY_BLOCK;
    } else if (b == "io") {
        if (d(h, "firstimpression.io") || d(h, "liftoff.io")) return PROXY_BLOCK;
    } else if (b == "asia") {
        if (d(h, "snapmobile.asia") || d(h, "pixels.asia")) return PROXY_BLOCK;
    } else if (b == "biz") {
        if (d(h, "trafficfactory.biz") || d(h, "rarenok.biz")) return PROXY_BLOCK;
    } else if (b == "cz") {
        if (d(h, "imedia.cz")) return PROXY_BLOCK;
    } else if (b == "il") {
        if (d(h, "fus.yad2.co.il")) return PROXY_BLOCK;
    } else if (b == "co") {
        if (d(h, "adk2.co")) return PROXY_BLOCK;
    } else if (b == "tw") {
        if (d(h, "adspending01.bwnet.com.tw")) return PROXY_BLOCK;
    } else if (b == "me") {
        if (d(h, "kiip.me")) return PROXY_BLOCK;
    } else if (b == "cn") {
        if (d(h, "admaster.com.cn")) return PROXY_BLOCK;
    } else if (b == "ru") {
        if (d(h, "admobi.ru")) return PROXY_BLOCK;
    } else if (b == "dk") {
        if (d(h, "emediate.dk")) return PROXY_BLOCK;
    } else if (b == "fr") {
        if (d(h, "ad2play.ftv\u002Dpublicite.fr")) return PROXY_BLOCK;
    } else if (b == "si") {
        if (d(h, "interseek.si")) return PROXY_BLOCK;
    } else if (b == "gr") {
        if (d(h, "adman.gr")) return PROXY_BLOCK;
    } else if (b == "li") {
        if (d(h, "kau.li")) return PROXY_BLOCK;
    } else if (b == "ua") {
        if (d(h, "holder.com.ua")) return PROXY_BLOCK;
    } else if (b == "ad") {
        if (d(h, "content.ad")) return PROXY_BLOCK;
    } else if (b == "at") {
        if (d(h, "ad.adworx.at")) return PROXY_BLOCK;
    } else if (b == "space") {
        if (d(h, "dlski.space")) return PROXY_BLOCK;
    } else if (b == "eu") {
        if (d(h, "emediate.eu")) return PROXY_BLOCK;
    } else if (b == "es") {
        if (d(h, "kimia.es")) return PROXY_BLOCK;
    }

    if (((!s(u, "*/aclk*") && !s(u, "*/pagead/conversion.js") && d(h, "googleadservices.com")) || (!s(u, "*/gpt_mobile.js") && d(h, "googletagservices.com") && !s(u, "*/gpt.js")) || (d(h, "pagead2.googlesyndication.com") || d(h, "pagead1.googlesyndication.com") || d(h, "pagead3.googlesyndication.com") || d(h, "pagead.googlesyndication.com"))) || s(h, "*.cj.com") || ((d(h, "connect.facebook.net") && s(u, "*/sdk/xfbml.ad.*")) || (s(u, "*/plugins/ad.*") && d(h, "facebook.com"))) || ((s(u, "*/*adname*") && d(h, "flipboard.com")) || (s(u, "*/flare/*") && d(h, "flipboard.com")) || (d(h, "flipboard.com") && s(u, "*/flipmag/admanager.js")) || (d(h, "flipboard.com") && s(u, "*/adcreative/*"))) || ((s(u, "*mobile.php*") && d(h, "pub.sapo.pt")) || (s(u, "*vast.php*") && d(h, "pub.sapo.pt"))) || (n(h, "89.207.18.1", "255.255.255.0")) || (s(h, "*.manage.com") || s(h, "manage.com")) || (d(h, "doubleciick.net") || d(h, "doubleclick.net") || d(h, "pubads.g.doubleclick.net") || d(h, "googleads.g.doubleclick.net") || (!s(u, "*ythome*") && !d(h, "stats.g.doubleclick.net") && d(h, "doubleclick.net") && !d(h, "static.doubleclick.net"))) || s(h, "inmobisdk*.akamaihd.net") || ((s(u, "*/delivery/*") && d(h, "supersonicads.com")) || (s(u, "*supersonicads*.akamaihd.net/*")) || (d(h, "ultraadserver.com") && s(u, "*/api*")) || (d(h, "ssacdn.com"))) || (d(h, "h2.msn.com") || d(h, "rad.msn.com") || (s(u, "*/adsadclient*") && d(h, "msn.com")) || d(h, "stjjp.msn.com") || d(h, "udc.msn.com")) || s(h, "media.net") || s(u, "*/interstitiel/interstitiel.xml*") || ((d(h, "graph.facebook.com") && s(u, "*/network_ads")) || (s(u, "*/network_ads*") && d(h, "graph.facebook.com")) || (s(u, "*advertise*") && d(h, "graph.facebook.com"))) || s(u, "*/openx/www/images/*") || s(h, "cj.com") || ((!s(u, "*goalmobileapp*") && d(h, "taboola.com")) || d(h, "taboolasyndication.com")) || (s(u, "*speednetwor*.com/*xbanner.*") || s(u, "*speednetwor*.com/*xpopup.*") || s(u, "*speednetwor*.com*smart.js") || s(u, "*speednetwor*.com*adclickurl*")) || ((d(h, "amazonaws.com") && s(u, "*admarvel*")) || d(h, "admarvel.com")) || s(u, "*/openx/www/api/v*/*.php*") || s(u, "*/openx/www/delivery/*.php*") || s(h, "*.media.net") || s(h, "m*.2mdn.net") || s(h, "*.cheap\u002Dads.net")) return PROXY_BLOCK;

    if (d(h, "adtechus.com") || d(h, "fwmrm.net")) {
        return PROXY_GOOGLE;
    }

    return PROXY_DIRECT;
}