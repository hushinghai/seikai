/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.15 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
function BisexYear(a, b) {
    return 0 == a % 4 && 2 == b ? !0 : !1
}

function nbDaysPerMonth(a, b) {
    var c = gMonth_days[a];
    return BisexYear(b, a) && c++, c
}

function getMonthName(a, b) {
    switch (b) {
        case "FR":
            return gMonth_names_fr[a];
        case "US":
            return gMonth_names_us[a]
    }
}

function PadDigits(a, b) {
    a = a.toString();
    var c = "";
    if (b > a.length)
        for (i = 0; i < b - a.length; i++) c += "0";
    return c + a.toString()
}

function CountCar(a, b, c) {
    var d = a.split(b),
        e = d.length - 1;
    return e > c ? !0 : !1
}

function IsNumeric(a) {
    var b, c = "0123456789.-",
        d = !0;
    if (0 == a.length) return !1;
    for (i = 0; i < a.length && 1 == d; i++) b = a.charAt(i), -1 == c.indexOf(b) && (d = !1);
    return d
}

function checkInteger(a) {
    return newVal = parseInt(a.value), isNaN(newVal) ? (alert(gettext("Please enter an integer value.")), a.value = 0, a.focus()) : a.value = newVal, !1
}

function CheckNumeric(a, b, c, d, e) {
    var f = document.getElementById(a).value;
    f = f.replace(",", ""), document.getElementById(a).value = f;
    var g = 0;
    "F" == b ? (reg = new RegExp("[^0-9.]", "i"), g = 1) : reg = new RegExp("[^0-9]", "i");
    var h = CountCar(f, ".", g),
        i = GLOBAL_MAX_INTEGER;
    if (c && (i = c), reg.test(f) || h) document.getElementById(a).style.color = "#" + GLOBAL_RED, h && "I" == b ? alert(gettext("Please enter integer numbers here.")) : alert(gettext("Please enter numbers here.")), document.getElementById(a).value = f.substring(0, f.length - 1);
    else {
        var j = parseInt(f);
        j > i && i > 0 ? (alert(gettext("Numbers must be less or equal to") + " " + i + "."), document.getElementById(a).value = i, document.getElementById(a).focus()) : (document.getElementById(a).style.color = "#" + GLOBAL_BLACK, arguments.length >= 3 && d && d(e))
    }
}

function CheckNumeric_Localization(a, b, c, d, e) {
    var f = document.getElementById(a).value;
    f = f.replace(",", ""), document.getElementById(a).value = f;
    var g = 0;
    "F" == b ? (reg = new RegExp("[^0-9.]", "i"), g = 1) : reg = new RegExp("[^0-9]", "i");
    var h = CountCar(f, ".", g),
        i = GLOBAL_MAX_INTEGER;
    if (c && (i = c), reg.test(f) || h) document.getElementById(a).style.color = "#" + GLOBAL_RED, h && "I" == b ? display_error_msg("alert", "numericinteger", "register") : display_error_msg("alert", "numeric", "register"), document.getElementById(a).value = f.substring(0, f.length - 1);
    else {
        var j = parseInt(f);
        j > i && i > 0 ? (display_error_msg("alert", "numericlength", "register", i), document.getElementById(a).value = i, document.getElementById(a).focus()) : (document.getElementById(a).style.color = "#" + GLOBAL_BLACK, arguments.length >= 3 && d && d(e))
    }
}

function ShowCalendar(a, b) {
    var c = new Array;
    c[0] = "2000.01", c[1] = GLOBAL_LIMIT_DATE + ".01";
    var d = "click";
    GLOBAL_MODE_DATE = a;
    var e = a;
    Date.parse(b) || (b = new Date), Calendar.setup({
        inputField: a,
        button: e,
        eventName: d,
        ifFormat: "%m/%d/%Y",
        align: "Bl",
        range: c,
        date: new Date(b),
        cache: !0,
        electric: !1
    })
}

function AddToCalendar(a, b, c, d) {
    var e = b + "/calendar.ics?eid=" + c + "&calendar=" + a;
    if (d) e += "&date=" + d;
    else if (document.mgform && document.mgform.selecteddate) {
        if (document.mgform.selecteddate.selectedIndex < 1) return alert(gettext("Please select the date you would like to attend.")), void 0;
        e += "&date=" + document.mgform.selecteddate[document.mgform.selecteddate.selectedIndex].value
    }
    "outlook" == a || "ical" == a ? document.location.href = e : window.open(e, "calendar", "toolbar=yes, menubar=yes, location=yes, status=yes, scrollbars=yes,resizable=yes, width=800, height=600, left=0, top=0")
}

function CheckLimitDate(a) {
    var b = a.getFullYear(),
        c = new Date(a);
    if (b > GLOBAL_LIMIT_DATE) var d = new Date(GLOBAL_DEFAULT_LIMIT_DATE);
    else var d = c;
    return d
}

function Show(a, b) {
    document.getElementById(a) && "none" == document.getElementById(a).style.display && (document.getElementById(a).style.display = "undefined" != typeof b && "" != b ? b : "block")
}

function Hide(a) {
    document.getElementById(a) && "none" != document.getElementById(a).style.display && (document.getElementById(a).style.display = "none")
}

function ShowInline(a) {
    document.getElementById(a) && "none" == document.getElementById(a).style.display && (document.getElementById(a).style.display = "inline")
}

function HideInline(a) {
    document.getElementById(a) && "none" != document.getElementById(a).style.display && (document.getElementById(a).style.display = "none")
}

function Toggle(a) {
    document.getElementById(a) && ("none" == document.getElementById(a).style.display ? Show(a) : Hide(a))
}

function ToggleDiv(a, b) {
    document.getElementById(a) && ("none" == document.getElementById(a).style.display ? "undefined" != typeof b && "" != b ? Show(a, b) : Show(a) : Hide(a))
}

function checkEmail(a) {
    if (window.RegExp) {
        var b = "^[0-9a-zA-Z]+([.-]?[0-9a-zA-Z#'+/^`~_-]+)*@[0-9a-zA-Z]+[0-9a-zA-Z.-]*[.]{1}([a-zA-Z]{2,14})$",
            c = new RegExp(b);
        return c.test(a) ? !0 : !1
    }
    return a.indexOf("@") >= 0 ? !0 : !1
}

function CheckEmailExtended(a) {
    if (document.getElementById(a)) {
        if (email = document.getElementById(a).value, !checkEmail(email)) return alert(gettext("This is not a valid email address.")), document.getElementById(a).focus(), !1;
        if (AtPos = email.indexOf("@"), StopPos = email.lastIndexOf("."), Message = "", "" == email || -1 == AtPos || -1 == StopPos || AtPos > StopPos || 1 == StopPos - AtPos) return alert(gettext("This is not a valid email address.")), document.getElementById(a).focus(), !1
    }
    return !0
}

function saveOrgUrl() {
    var a = jQuery("#orgshortname").attr("value");
    if (!CheckShortname(a) && a) alert(gettext('Your "Personalized Organizer URL" can only include lowercase letters and numbers.'));
    else {
        var b = server + "/org/" + jQuery("#org_id").attr("value") + "/setorganizerurl/",
            c = {
                shortname: a,
                csrfmiddlewaretoken: jQuery.cookie("csrftoken")
            };
        jQuery.ajax({
            url: b,
            type: "POST",
            data: c,
            success: updateOrgShortname,
            error: throwFailure
        })
    }
}

function throwFailure() {
    alert(gettext("There was a problem updating your organizer URL. Please retry setting the organizer URL name again.\nIf the error persists, please contact us."))
}

function updateOrgShortname(a) {
    var b, c = a.shortname;
    return "error" in a ? (alert(a.error), void 0) : (b = c ? "http://" + c + "." + domain : server + "/org/" + oid, style && (b += "?s=" + style), jQuery("#organizer_url").html('<a href="' + b + '">' + b + "</a>"), ToggleDiv("organizer_personalizedurl"), void 0)
}

function CheckShortname(a) {
    if ("" == a) return !1;
    var b = "[^a-z0-9-]",
        c = new RegExp(b);
    return c.test(a) ? !1 : !0
}

function SetCookie(a, b, c) {
    var d = new Date,
        e = new Date;
    (null == c || 0 == c) && (c = 1), e.setTime(d.getTime() + 864e5 * c), document.cookie = a + "=" + encodeURIComponent(b) + ";expires=" + e.toGMTString()
}

function ReadCookie(a) {
    var b = "" + document.cookie,
        c = b.indexOf(a);
    if (-1 == c || "" == a) return "";
    var d = b.indexOf(";", c);
    return -1 == d && (d = b.length), unescape(b.substring(c + a.length + 1, d))
}

function EraseCookie(a) {
    SetCookie(a, "", -1)
}

function TestCookies() {
    return SetCookie("test", "1", 1), "1" == ReadCookie("test") ? (EraseCookie("test"), !0) : !1
}

function ShowDiv(a) {
    document.getElementById(a) && "none" == document.getElementById(a).style.display && (document.getElementById(a).style.display = "block")
}

function HideDiv(a) {
    document.getElementById(a) && "none" != document.getElementById(a).style.display && (document.getElementById(a).style.display = "none")
}

function ShowDivFromCheckbox(a, b) {
    a.checked ? (Show(b), document.getElementById(b).focus()) : ("channelsDiv" == b && ($("channels").options[0].selected = !0, $("channels_2").options[0].selected = !0, $("tags").value = ""), Hide(b))
}

function common_replace_car(a, b, c) {
    var d = a;
    if (document.getElementById(a) && (d = document.getElementById(a).value), b) var e = b;
    else var e = '"'; if (c) var f = c;
    else var f = "'";
    for (var g = d.split(""), h = 0; h < g.length; h++) wcar = g[h], wcar = wcar.replace(e, f), g[h] = wcar;
    return d = g.join("")
}

function CopyText(a, b) {
    var c = document.getElementById(a),
        d = document.getElementById(b);
    "" != c && "" != d && (d.value = c.value)
}

function ControlDate(a) {
    var b = document.getElementById(a);
    alert(b)
}

function ValidCheckBox(a) {
    if (document.getElementById(a)) {
        var b = document.getElementById(a),
            c = b.length,
            d = "";
        for (i = 0; c > i; i++) b[i].checked && (d = d + b[i].value + " ");
        return "" == d ? (Alert("No boxes checked."), !1) : !0
    }
}

function cGA(a) {
    "undefined" != typeof pageTracker && pageTracker._trackPageview(a)
}

function isInt(a) {
    return 0 == a.toString().search(/^-?[0-9]+$/)
}

function paddingSTR(a, b, c, d) {
    if ("undefined" == typeof b) var b = 0;
    if ("undefined" == typeof c) var c = " ";
    if ("undefined" == typeof d) var d = STR_PAD_RIGHT;
    if (b + 1 >= a.length) switch (d) {
        case STR_PAD_LEFT:
            a = Array(b + 1 - a.length).join(c) + a;
            break;
        case STR_PAD_BOTH:
            var e = Math.ceil((padlen = b - a.length) / 2),
                f = padlen - e;
            a = Array(f + 1).join(c) + a + Array(e + 1).join(c);
            break;
        default:
            a += Array(b + 1 - a.length).join(c)
    }
    return a
}

function checkHTML(a) {
    var b = c,
        c = document.getElementById(a).value;
    try {
        b = HTMLtoXML(c), b.length > 254 && (b = c)
    } catch (d) {
        b = c
    }
    return document.getElementById(a).value = b, !0
}

function splitTrim(a, b) {
    if (a.indexOf(b) >= 0) {
        for (var c = a.split(b), d = 0; d < c.length; d++) c[d] = c[d].trim();
        a = c.join(b)
    }
    return a
}

function UpperName(a) {
    return a.charAt(0).toUpperCase() + a.substring(1).toLowerCase()
}

function Capitalize(a, b) {
    var c = new Array;
    if (a.indexOf(b) >= 0) {
        var d = a.split(b);
        for (i = 0; i < d.length; i++) c.push(UpperName(d[i]));
        return c.join(b)
    }
    return a
}

function extendedCapitalize(a) {
    return upperZone = a.trim(), -1 == upperZone.indexOf(",") && (upperZone = upperZone.indexOf(" ") >= 0 ? Capitalize(upperZone, " ") : upperZone.indexOf("-") >= 0 ? Capitalize(upperZone, "-") : UpperName(upperZone)), upperZone
}

function stripHTML(a) {
    return a.replace(/<&#91;^>&#93;*>/g, "")
}

function limiteTextarea(c, d) {
    if (c.value.length < d) {
        for (a = c.value.split("\n"), b = 0, x = 0; x < a.length; x++) a[x].length >= c.cols && (b += Math.floor(a[x].length / c.cols));
        b += a.length, c.rows = b
    } else document.getElementById(c.name).value = c.value.substring(0, d)
}

function BuildDateJS(a, b, c, d) {
    if (document.getElementById(a)) {
        var e = document.getElementById(a).value,
            f = document.getElementById(d).value,
            g = document.getElementById(b).value,
            h = document.getElementById(c).value;
        if ("PM" == f) {
            var i = parseInt(g, 10);
            12 > i && (i += 12), g = i
        } else {
            var i = parseInt(g, 10);
            12 == i && (i = 0, g = i)
        }
        var j = "";
        j = " " + g + ":" + h + ":00";
        var k = new Date(e + j);
        return k
    }
}

function ComputeNewDate(a, b, c, d, e) {
    "" == c && (c = "0"), "" == d && (d = "0"), "" == e && (e = "0");
    var f = parseInt(c),
        g = parseInt(d),
        h = parseInt(e),
        i = 1e3 * (f * GLOBAL_DAY_SECOND + g * GLOBAL_HOUR_SECOND + h * GLOBAL_MN_SECOND),
        j = new Date(b);
    "" == a || "SUB" == a ? j.setTime(j.getTime() - i) : j.setTime(j.getTime() + i);
    var k = j.getHours(),
        l = j.getMinutes(),
        m = "AM",
        n = parseInt(k),
        o = parseInt(l);
    return n > 12 && (n -= 12, m = "PM"), {
        date: j.format("MM/DD/YYYY"),
        hour: PadDigits(n, 2),
        minute: PadDigits(o, 2),
        ampm: m
    }
}

function unescapeHTMLFixed(a) {
    newVal = new String(a);
    var b = document.createElement("div");
    return b.innerHTML = newVal.replace(/<\/?[^>]+>/gi, ""), b.childNodes.length < 1 ? "" : (newVal = b.childNodes[0].nodeValue, newVal = newVal.replace(/&quot;/gi, '"'), newVal = newVal.replace(/&#39;/gi, "'"))
}

function isValidURL(a) {
    var b = /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/;
    return b.test(a) ? !0 : !1
}

function ShowSticky(a, b) {
    document.all ? helpObj = document.all[b + "_help"] : document.getElementById && (helpObj = document.getElementById(b + "_help")), helpObj && "none" == helpObj.style.display && ShowHelp(a, b)
}

function ShowHelp(a, b) {
    a.id || (a = document.getElementById(b + "_source"));
    var c = document.getElementById(b + "_help");
    if (c)
        if ("" == c.style.display) {
            c.style.display = "none";
            var d = c.getElementsByTagName("DIV")[0];
            d.style.padding = "0px"
        } else {
            c.style.display = "";
            var d = c.getElementsByTagName("DIV")[0];
            d.style.padding = "10px";
            var e = 340;
            c.style.width && (e = parseInt(c.style.width.replace("px", "")));
            var f = helpGetOffsetLeft(a),
                g = window.innerWidth ? window.innerWidth - 25 : document.body.clientWidth;
            f + e > g && (f = g - e), newX = f;
            var h = c.offsetHeight,
                i = helpGetOffsetTop(a) + a.offsetHeight,
                j = window.innerHeight ? window.innerHeight - 25 : document.body.clientHeight;
            j = 500 > j ? 500 : j, i + h > j + helpGetScrollY() && (i = helpGetOffsetTop(a) - h), newY = i, c.style.top = newY + "px", c.style.left = newX + "px"
        }
}

function helpGetOffsetTop(a) {
    for (var b = a.offsetTop, c = a.offsetParent; c;) b += c.offsetTop, c = c.offsetParent;
    return b
}

function helpGetOffsetLeft(a) {
    for (var b = a.offsetLeft, c = a.offsetParent; c;) b += c.offsetLeft, c = c.offsetParent;
    return b
}

function helpGetScrollY() {
    var a = 0;
    return "number" == typeof window.pageYOffset ? a = window.pageYOffset : document.body && (document.body.scrollLeft || document.body.scrollTop) ? a = document.body.scrollTop : document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop) && (a = document.documentElement.scrollTop), a
}

function qh_hideElement(a, b) {
    if (document.all)
        for (i = 0; i < document.all.tags(a).length; i++)
            if (obj = document.all.tags(a)[i], obj && obj.offsetParent) {
                for (objLeft = obj.offsetLeft, objTop = obj.offsetTop, objParent = obj.offsetParent;
                    "BODY" != objParent.tagName.toUpperCase();) objLeft += objParent.offsetLeft, objTop += objParent.offsetTop, objParent = objParent.offsetParent;
                objHeight = obj.offsetHeight, objWidth = obj.offsetWidth, b.offsetLeft + b.offsetWidth <= objLeft || b.offsetTop + b.offsetHeight <= objTop || b.offsetTop >= objTop + objHeight || b.offsetLeft >= objLeft + objWidth || (obj.style.visibility = "hidden")
            }
}

function qh_showElement(a) {
    if (document.all)
        for (i = 0; i < document.all.tags(a).length; i++) obj = document.all.tags(a)[i], obj && obj.offsetParent && (obj.style.visibility = "")
}
var requirejs, require, define;
! function(global) {
    function isFunction(a) {
        return "[object Function]" === ostring.call(a)
    }

    function isArray(a) {
        return "[object Array]" === ostring.call(a)
    }

    function each(a, b) {
        if (a) {
            var c;
            for (c = 0; c < a.length && (!a[c] || !b(a[c], c, a)); c += 1);
        }
    }

    function eachReverse(a, b) {
        if (a) {
            var c;
            for (c = a.length - 1; c > -1 && (!a[c] || !b(a[c], c, a)); c -= 1);
        }
    }

    function hasProp(a, b) {
        return hasOwn.call(a, b)
    }

    function getOwn(a, b) {
        return hasProp(a, b) && a[b]
    }

    function eachProp(a, b) {
        var c;
        for (c in a)
            if (hasProp(a, c) && b(a[c], c)) break
    }

    function mixin(a, b, c, d) {
        return b && eachProp(b, function(b, e) {
            (c || !hasProp(a, e)) && (!d || "object" != typeof b || !b || isArray(b) || isFunction(b) || b instanceof RegExp ? a[e] = b : (a[e] || (a[e] = {}), mixin(a[e], b, c, d)))
        }), a
    }

    function bind(a, b) {
        return function() {
            return b.apply(a, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function defaultOnError(a) {
        throw a
    }

    function getGlobal(a) {
        if (!a) return a;
        var b = global;
        return each(a.split("."), function(a) {
            b = b[a]
        }), b
    }

    function makeError(a, b, c, d) {
        var e = new Error(b + "\nhttp://requirejs.org/docs/errors.html#" + a);
        return e.requireType = a, e.requireModules = d, c && (e.originalError = c), e
    }

    function newContext(a) {
        function b(a) {
            var b, c;
            for (b = 0; b < a.length; b++)
                if (c = a[b], "." === c) a.splice(b, 1), b -= 1;
                else if (".." === c) {
                if (0 === b || 1 == b && ".." === a[2] || ".." === a[b - 1]) continue;
                b > 0 && (a.splice(b - 1, 2), b -= 2)
            }
        }

        function c(a, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q = c && c.split("/"),
                r = x.map,
                s = r && r["*"];
            if (a && (a = a.split("/"), k = a.length - 1, x.nodeIdCompat && jsSuffixRegExp.test(a[k]) && (a[k] = a[k].replace(jsSuffixRegExp, "")), "." === a[0].charAt(0) && q && (p = q.slice(0, q.length - 1), a = p.concat(a)), b(a), a = a.join("/")), d && r && (q || s)) {
                g = a.split("/");
                a: for (h = g.length; h > 0; h -= 1) {
                    if (j = g.slice(0, h).join("/"), q)
                        for (i = q.length; i > 0; i -= 1)
                            if (f = getOwn(r, q.slice(0, i).join("/")), f && (f = getOwn(f, j))) {
                                l = f, m = h;
                                break a
                            }!n && s && getOwn(s, j) && (n = getOwn(s, j), o = h)
                }!l && n && (l = n, m = o),
                l && (g.splice(0, m, l), a = g.join("/"))
            }
            return e = getOwn(x.pkgs, a), e ? e : a
        }

        function d(a) {
            isBrowser && each(scripts(), function(b) {
                return b.getAttribute("data-requiremodule") === a && b.getAttribute("data-requirecontext") === u.contextName ? (b.parentNode.removeChild(b), !0) : void 0
            })
        }

        function e(a) {
            var b = getOwn(x.paths, a);
            return b && isArray(b) && b.length > 1 ? (b.shift(), u.require.undef(a), u.makeRequire(null, {
                skipMap: !0
            })([a]), !0) : void 0
        }

        function f(a) {
            var b, c = a ? a.indexOf("!") : -1;
            return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
        }

        function g(a, b, d, e) {
            var g, h, i, j, k = null,
                l = b ? b.name : null,
                m = a,
                n = !0,
                o = "";
            return a || (n = !1, a = "_@r" + (F += 1)), j = f(a), k = j[0], a = j[1], k && (k = c(k, l, e), h = getOwn(C, k)), a && (k ? o = h && h.normalize ? h.normalize(a, function(a) {
                return c(a, l, e)
            }) : -1 === a.indexOf("!") ? c(a, l, e) : a : (o = c(a, l, e), j = f(o), k = j[0], o = j[1], d = !0, g = u.nameToUrl(o))), i = !k || h || d ? "" : "_unnormalized" + (G += 1), {
                prefix: k,
                name: o,
                parentMap: b,
                unnormalized: !! i,
                url: g,
                originalName: m,
                isDefine: n,
                id: (k ? k + "!" + o : o) + i
            }
        }

        function h(a) {
            var b = a.id,
                c = getOwn(y, b);
            return c || (c = y[b] = new u.Module(a)), c
        }

        function i(a, b, c) {
            var d = a.id,
                e = getOwn(y, d);
            !hasProp(C, d) || e && !e.defineEmitComplete ? (e = h(a), e.error && "error" === b ? c(e.error) : e.on(b, c)) : "defined" === b && c(C[d])
        }

        function j(a, b) {
            var c = a.requireModules,
                d = !1;
            b ? b(a) : (each(c, function(b) {
                var c = getOwn(y, b);
                c && (c.error = a, c.events.error && (d = !0, c.emit("error", a)))
            }), d || req.onError(a))
        }

        function k() {
            globalDefQueue.length && (apsp.apply(B, [B.length, 0].concat(globalDefQueue)), globalDefQueue = [])
        }

        function l(a) {
            delete y[a], delete z[a]
        }

        function m(a, b, c) {
            var d = a.map.id;
            a.error ? a.emit("error", a.error) : (b[d] = !0, each(a.depMaps, function(d, e) {
                var f = d.id,
                    g = getOwn(y, f);
                !g || a.depMatched[e] || c[f] || (getOwn(b, f) ? (a.defineDep(e, C[f]), a.check()) : m(g, b, c))
            }), c[d] = !0)
        }

        function n() {
            var a, b, c = 1e3 * x.waitSeconds,
                f = c && u.startTime + c < (new Date).getTime(),
                g = [],
                h = [],
                i = !1,
                k = !0;
            if (!s) {
                if (s = !0, eachProp(z, function(a) {
                    var c = a.map,
                        j = c.id;
                    if (a.enabled && (c.isDefine || h.push(a), !a.error))
                        if (!a.inited && f) e(j) ? (b = !0, i = !0) : (g.push(j), d(j));
                        else if (!a.inited && a.fetched && c.isDefine && (i = !0, !c.prefix)) return k = !1
                }), f && g.length) return a = makeError("timeout", "Load timeout for modules: " + g, null, g), a.contextName = u.contextName, j(a);
                k && each(h, function(a) {
                    m(a, {}, {})
                }), f && !b || !i || !isBrowser && !isWebWorker || w || (w = setTimeout(function() {
                    w = 0, n()
                }, 50)), s = !1
            }
        }

        function o(a) {
            hasProp(C, a[0]) || h(g(a[0], null, !0)).init(a[1], a[2])
        }

        function p(a, b, c, d) {
            a.detachEvent && !isOpera ? d && a.detachEvent(d, b) : a.removeEventListener(c, b, !1)
        }

        function q(a) {
            var b = a.currentTarget || a.srcElement;
            return p(b, u.onScriptLoad, "load", "onreadystatechange"), p(b, u.onScriptError, "error"), {
                node: b,
                id: b && b.getAttribute("data-requiremodule")
            }
        }

        function r() {
            var a;
            for (k(); B.length;) {
                if (a = B.shift(), null === a[0]) return j(makeError("mismatch", "Mismatched anonymous define() module: " + a[a.length - 1]));
                o(a)
            }
        }
        var s, t, u, v, w, x = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            }, y = {}, z = {}, A = {}, B = [],
            C = {}, D = {}, E = {}, F = 1,
            G = 1;
        return v = {
            require: function(a) {
                return a.require ? a.require : a.require = u.makeRequire(a.map)
            },
            exports: function(a) {
                return a.usingExports = !0, a.map.isDefine ? a.exports ? C[a.map.id] = a.exports : a.exports = C[a.map.id] = {} : void 0
            },
            module: function(a) {
                return a.module ? a.module : a.module = {
                    id: a.map.id,
                    uri: a.map.url,
                    config: function() {
                        return getOwn(x.config, a.map.id) || {}
                    },
                    exports: a.exports || (a.exports = {})
                }
            }
        }, t = function(a) {
            this.events = getOwn(A, a.id) || {}, this.map = a, this.shim = getOwn(x.shim, a.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, t.prototype = {
            init: function(a, b, c, d) {
                d = d || {}, this.inited || (this.factory = b, c ? this.on("error", c) : this.events.error && (c = bind(this, function(a) {
                    this.emit("error", a)
                })), this.depMaps = a && a.slice(0), this.errback = c, this.inited = !0, this.ignore = d.ignore, d.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(a, b) {
                this.depMatched[a] || (this.depMatched[a] = !0, this.depCount -= 1, this.depExports[a] = b)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0, u.startTime = (new Date).getTime();
                    var a = this.map;
                    return this.shim ? (u.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this, function() {
                        return a.prefix ? this.callPlugin() : this.load()
                    })), void 0) : a.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function() {
                var a = this.map.url;
                D[a] || (D[a] = !0, u.load(this.map.id, a))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var a, b, c = this.map.id,
                        d = this.depExports,
                        e = this.exports,
                        f = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(f)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                        e = u.execCb(c, f, d, e)
                                    } catch (g) {
                                        a = g
                                    } else e = u.execCb(c, f, d, e);
                                    if (this.map.isDefine && void 0 === e && (b = this.module, b ? e = b.exports : this.usingExports && (e = this.exports)), a) return a.requireMap = this.map, a.requireModules = this.map.isDefine ? [this.map.id] : null, a.requireType = this.map.isDefine ? "define" : "require", j(this.error = a)
                                } else e = f;
                                this.exports = e, this.map.isDefine && !this.ignore && (C[c] = e, req.onResourceLoad && req.onResourceLoad(u, this.map, this.depMaps)), l(c), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            },
            callPlugin: function() {
                var a = this.map,
                    b = a.id,
                    d = g(a.prefix);
                this.depMaps.push(d), i(d, "defined", bind(this, function(d) {
                    var e, f, k, m = getOwn(E, this.map.id),
                        n = this.map.name,
                        o = this.map.parentMap ? this.map.parentMap.name : null,
                        p = u.makeRequire(a.parentMap, {
                            enableBuildCallback: !0
                        });
                    return this.map.unnormalized ? (d.normalize && (n = d.normalize(n, function(a) {
                        return c(a, o, !0)
                    }) || ""), f = g(a.prefix + "!" + n, this.map.parentMap), i(f, "defined", bind(this, function(a) {
                        this.init([], function() {
                            return a
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), k = getOwn(y, f.id), k && (this.depMaps.push(f), this.events.error && k.on("error", bind(this, function(a) {
                        this.emit("error", a)
                    })), k.enable()), void 0) : m ? (this.map.url = u.nameToUrl(m), this.load(), void 0) : (e = bind(this, function(a) {
                        this.init([], function() {
                            return a
                        }, null, {
                            enabled: !0
                        })
                    }), e.error = bind(this, function(a) {
                        this.inited = !0, this.error = a, a.requireModules = [b], eachProp(y, function(a) {
                            0 === a.map.id.indexOf(b + "_unnormalized") && l(a.map.id)
                        }), j(a)
                    }), e.fromText = bind(this, function(c, d) {
                        var f = a.name,
                            i = g(f),
                            k = useInteractive;
                        d && (c = d), k && (useInteractive = !1), h(i), hasProp(x.config, b) && (x.config[f] = x.config[b]);
                        try {
                            req.exec(c)
                        } catch (l) {
                            return j(makeError("fromtexteval", "fromText eval for " + b + " failed: " + l, l, [b]))
                        }
                        k && (useInteractive = !0), this.depMaps.push(i), u.completeLoad(f), p([f], e)
                    }), d.load(a.name, p, e, x), void 0)
                })), u.enable(d, this), this.pluginMaps[d.id] = d
            },
            enable: function() {
                z[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(a, b) {
                    var c, d, e;
                    if ("string" == typeof a) {
                        if (a = g(a, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[b] = a, e = getOwn(v, a.id)) return this.depExports[b] = e(this), void 0;
                        this.depCount += 1, i(a, "defined", bind(this, function(a) {
                            this.defineDep(b, a), this.check()
                        })), this.errback && i(a, "error", bind(this, this.errback))
                    }
                    c = a.id, d = y[c], hasProp(v, c) || !d || d.enabled || u.enable(a, this)
                })), eachProp(this.pluginMaps, bind(this, function(a) {
                    var b = getOwn(y, a.id);
                    b && !b.enabled && u.enable(a, this)
                })), this.enabling = !1, this.check()
            },
            on: function(a, b) {
                var c = this.events[a];
                c || (c = this.events[a] = []), c.push(b)
            },
            emit: function(a, b) {
                each(this.events[a], function(a) {
                    a(b)
                }), "error" === a && delete this.events[a]
            }
        }, u = {
            config: x,
            contextName: a,
            registry: y,
            defined: C,
            urlFetched: D,
            defQueue: B,
            Module: t,
            makeModuleMap: g,
            nextTick: req.nextTick,
            onError: j,
            configure: function(a) {
                a.baseUrl && "/" !== a.baseUrl.charAt(a.baseUrl.length - 1) && (a.baseUrl += "/");
                var b = x.shim,
                    c = {
                        paths: !0,
                        bundles: !0,
                        config: !0,
                        map: !0
                    };
                eachProp(a, function(a, b) {
                    c[b] ? (x[b] || (x[b] = {}), mixin(x[b], a, !0, !0)) : x[b] = a
                }), a.bundles && eachProp(a.bundles, function(a, b) {
                    each(a, function(a) {
                        a !== b && (E[a] = b)
                    })
                }), a.shim && (eachProp(a.shim, function(a, c) {
                    isArray(a) && (a = {
                        deps: a
                    }), !a.exports && !a.init || a.exportsFn || (a.exportsFn = u.makeShimExports(a)), b[c] = a
                }), x.shim = b), a.packages && each(a.packages, function(a) {
                    var b, c;
                    a = "string" == typeof a ? {
                        name: a
                    } : a, c = a.name, b = a.location, b && (x.paths[c] = a.location), x.pkgs[c] = a.name + "/" + (a.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                }), eachProp(y, function(a, b) {
                    a.inited || a.map.unnormalized || (a.map = g(b))
                }), (a.deps || a.callback) && u.require(a.deps || [], a.callback)
            },
            makeShimExports: function(a) {
                function b() {
                    var b;
                    return a.init && (b = a.init.apply(global, arguments)), b || a.exports && getGlobal(a.exports)
                }
                return b
            },
            makeRequire: function(b, e) {
                function f(c, d, i) {
                    var k, l, m;
                    return e.enableBuildCallback && d && isFunction(d) && (d.__requireJsBuild = !0), "string" == typeof c ? isFunction(d) ? j(makeError("requireargs", "Invalid require call"), i) : b && hasProp(v, c) ? v[c](y[b.id]) : req.get ? req.get(u, c, b, f) : (l = g(c, b, !1, !0), k = l.id, hasProp(C, k) ? C[k] : j(makeError("notloaded", 'Module name "' + k + '" has not been loaded yet for context: ' + a + (b ? "" : ". Use require([])")))) : (r(), u.nextTick(function() {
                        r(), m = h(g(null, b)), m.skipMap = e.skipMap, m.init(c, d, i, {
                            enabled: !0
                        }), n()
                    }), f)
                }
                return e = e || {}, mixin(f, {
                    isBrowser: isBrowser,
                    toUrl: function(a) {
                        var d, e = a.lastIndexOf("."),
                            f = a.split("/")[0],
                            g = "." === f || ".." === f;
                        return -1 !== e && (!g || e > 1) && (d = a.substring(e, a.length), a = a.substring(0, e)), u.nameToUrl(c(a, b && b.id, !0), d, !0)
                    },
                    defined: function(a) {
                        return hasProp(C, g(a, b, !1, !0).id)
                    },
                    specified: function(a) {
                        return a = g(a, b, !1, !0).id, hasProp(C, a) || hasProp(y, a)
                    }
                }), b || (f.undef = function(a) {
                    k();
                    var c = g(a, b, !0),
                        e = getOwn(y, a);
                    d(a), delete C[a], delete D[c.url], delete A[a], eachReverse(B, function(b, c) {
                        b[0] === a && B.splice(c, 1)
                    }), e && (e.events.defined && (A[a] = e.events), l(a))
                }), f
            },
            enable: function(a) {
                var b = getOwn(y, a.id);
                b && h(a).enable()
            },
            completeLoad: function(a) {
                var b, c, d, f = getOwn(x.shim, a) || {}, g = f.exports;
                for (k(); B.length;) {
                    if (c = B.shift(), null === c[0]) {
                        if (c[0] = a, b) break;
                        b = !0
                    } else c[0] === a && (b = !0);
                    o(c)
                }
                if (d = getOwn(y, a), !b && !hasProp(C, a) && d && !d.inited) {
                    if (!(!x.enforceDefine || g && getGlobal(g))) return e(a) ? void 0 : j(makeError("nodefine", "No define call for " + a, null, [a]));
                    o([a, f.deps || [], f.exportsFn])
                }
                n()
            },
            nameToUrl: function(a, b, c) {
                var d, e, f, g, h, i, j, k = getOwn(x.pkgs, a);
                if (k && (a = k), j = getOwn(E, a)) return u.nameToUrl(j, b, c);
                if (req.jsExtRegExp.test(a)) h = a + (b || "");
                else {
                    for (d = x.paths, e = a.split("/"), f = e.length; f > 0; f -= 1)
                        if (g = e.slice(0, f).join("/"), i = getOwn(d, g)) {
                            isArray(i) && (i = i[0]), e.splice(0, f, i);
                            break
                        }
                    h = e.join("/"), h += b || (/^data\:|\?/.test(h) || c ? "" : ".js"), h = ("/" === h.charAt(0) || h.match(/^[\w\+\.\-]+:/) ? "" : x.baseUrl) + h
                }
                return x.urlArgs ? h + ((-1 === h.indexOf("?") ? "?" : "&") + x.urlArgs) : h
            },
            load: function(a, b) {
                req.load(u, a, b)
            },
            execCb: function(a, b, c, d) {
                return b.apply(d, c)
            },
            onScriptLoad: function(a) {
                if ("load" === a.type || readyRegExp.test((a.currentTarget || a.srcElement).readyState)) {
                    interactiveScript = null;
                    var b = q(a);
                    u.completeLoad(b.id)
                }
            },
            onScriptError: function(a) {
                var b = q(a);
                return e(b.id) ? void 0 : j(makeError("scripterror", "Script error for: " + b.id, a, [b.id]))
            }
        }, u.require = u.makeRequire(), u
    }

    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(a) {
            return "interactive" === a.readyState ? interactiveScript = a : void 0
        }), interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.15",
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        apsp = ap.splice,
        isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
        isWebWorker = !isBrowser && "undefined" != typeof importScripts,
        readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        contexts = {}, cfg = {}, globalDefQueue = [],
        useInteractive = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs, requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(a, b, c, d) {
            var e, f, g = defContextName;
            return isArray(a) || "string" == typeof a || (f = a, isArray(b) ? (a = b, b = c, c = d) : a = []), f && f.context && (g = f.context), e = getOwn(contexts, g), e || (e = contexts[g] = req.s.newContext(g)), f && e.configure(f), e.require(a, b, c)
        }, req.config = function(a) {
            return req(a)
        }, req.nextTick = "undefined" != typeof setTimeout ? function(a) {
            setTimeout(a, 4)
        } : function(a) {
            a()
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), each(["toUrl", "undef", "defined", "specified"], function(a) {
            req[a] = function() {
                var b = contexts[defContextName];
                return b.require[a].apply(b, arguments)
            }
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(a) {
            var b = a.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return b.type = a.scriptType || "text/javascript", b.charset = "utf-8", b.async = !0, b
        }, req.load = function(a, b, c) {
            var d, e = a && a.config || {};
            if (isBrowser) return d = req.createNode(e, b, c), d.setAttribute("data-requirecontext", a.contextName), d.setAttribute("data-requiremodule", b), !d.attachEvent || d.attachEvent.toString && d.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (d.addEventListener("load", a.onScriptLoad, !1), d.addEventListener("error", a.onScriptError, !1)) : (useInteractive = !0, d.attachEvent("onreadystatechange", a.onScriptLoad)), d.src = c, currentlyAddingScript = d, baseElement ? head.insertBefore(d, baseElement) : head.appendChild(d), currentlyAddingScript = null, d;
            if (isWebWorker) try {
                importScripts(c), a.completeLoad(b)
            } catch (f) {
                a.onError(makeError("importscripts", "importScripts failed for " + b + " at " + c, f, [b]))
            }
        }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(a) {
            return head || (head = a.parentNode), dataMain = a.getAttribute("data-main"), dataMain ? (mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0) : void 0
        }), define = function(a, b, c) {
            var d, e;
            "string" != typeof a && (c = b, b = a, a = null), isArray(b) || (c = b, b = null), !b && isFunction(c) && (b = [], c.length && (c.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(a, c) {
                b.push(c)
            }), b = (1 === c.length ? ["require"] : ["require", "exports", "module"]).concat(b))), useInteractive && (d = currentlyAddingScript || getInteractiveScript(), d && (a || (a = d.getAttribute("data-requiremodule")), e = contexts[d.getAttribute("data-requirecontext")])), (e ? e.defQueue : globalDefQueue).push([a, b, c])
        }, define.amd = {
            jQuery: !0
        }, req.exec = function(text) {
            return eval(text)
        }, req(cfg)
    }
}(this), define("../../node_modules/requirejs/require", function() {}), require.config({
    paths: {
        text: "vendor/require-text",
        hb: "../../node_modules/requirejs-handlebars/hb",
        jquery172: "jquery/1.7.2/jquery-1.7.2",
        jquery: "eb/_shims/jquery",
        mediatorjs: "../../node_modules/mediatorjs/dist/amd/mediator_named",
        backbone_advice: "vendor/backbone.advice-1.0.0",
        backbone_stickit: "vendor/backbone.stickit-0.6.3",
        backbone_validation: "vendor/backbone-validation-0.8.0",
        backbone_babysitter: "../../node_modules/backbone.babysitter/lib/backbone.babysitter",
        backbone_wreqr: "../../node_modules/backbone.wreqr/lib/backbone.wreqr",
        underscore: "vendor/underscore-1.4.4",
        marionette: "../../node_modules/backbone.marionette/lib/backbone.marionette",
        "marionette-1.1": "vendor/backbone.marionette-1.1.0",
        recaptcha: "recaptcha/recaptcha_ajax",
        "jquery-placeholder": "vendor/jquery.placeholder-2.0.7",
        jquery_ui: "jqueryui/1.8.14/jquery-ui.min",
        jquery_autocomplete: "jqueryui/1.8.21/jquery-ui-1.8.21.autocomplete-only",
        q: "../../node_modules/q/q",
        dotdotdot: "../../node_modules/dotdotdot/src/js/jquery.dotdotdot",
        scribe: "vendor/scribe/scribe",
        "scribe-plugin-toolbar": "vendor/scribe/scribe-plugin-toolbar",
        "scribe-plugin-smart-lists": "vendor/scribe/scribe-plugin-smart-lists",
        "scribe-plugin-keyboard-shortcuts": "vendor/scribe/scribe-plugin-keyboard-shortcuts",
        "scribe-plugin-formatter-plain-text-convert-new-lines-to-html": "vendor/scribe/scribe-plugin-formatter-plain-text-convert-new-lines-to-html",
        dorsal: "../../node_modules/dorsal/dist/dorsal",
        zeroclipboard: "vendor/ZeroClipboard-1.1.7",
        "zeroclipboard-media": "vendor/zeroclipboard_media",
        rangeslider: "../../node_modules/rangeslider.js/dist/rangeslider",
        "bootstrap-tooltip": "../../node_modules/eb-styleguide/js/vendor/bootstrap/bootstrap-tooltip-amd",
        snap: "vendor/snap-0.2.0",
        "magnific-popup": "../../node_modules/magnific-popup/src/js/core",
        "magnific-popup-inline": "../../node_modules/magnific-popup/src/js/inline",
        "magnific-popup-image": "../../node_modules/magnific-popup/src/js/image",
        "magnific-popup-iframe": "../../node_modules/magnific-popup/src/js/iframe",
        "slick-carousel": "../../node_modules/slick-carousel/slick/slick",
        lucidum: "../../node_modules/lucidum/dist/lucidum",
        "kss-search": "../../node_modules/kss-search/dist/index",
        lunr: "../../node_modules/kss-search/node_modules/lunr/lunr.min",
        moment: "vendor/moment-2.4.0-with-langs-custom",
        amcharts: "amcharts/amcharts-2.8.3",
        eventbrite: "eb/_shims/eb",
        backbone: "eb/_shims/backbone",
        "backbone-events-standalone": "eb/_shims/backbone_events",
        jquery_cookie: "eb/_shims/jquery_cookie",
        instafeed: "eb/instafeed",
        gettext: "eb/_shims/gettext",
        three: "../../node_modules/reserved_seating/node_modules/three/three",
        rbush: "../../node_modules/reserved_seating/node_modules/rbush/rbush",
        tinycolor: "../../node_modules/reserved_seating/bower_components/tinycolor/tinycolor"
    },
    shim: {
        three: {
            exports: "THREE"
        },
        backbone_wreqr: {
            exports: "Backbone.Wreqr"
        },
        backbone_babysitter: {
            exports: "Backbone.BabySitter"
        },
        marionette: {
            deps: ["backbone_advice", "backbone_wreqr", "backbone_babysitter"],
            exports: "Backbone.Marionette"
        },
        "marionette-1.1": {
            deps: ["backbone_advice", "backbone_wreqr", "backbone_babysitter"],
            exports: "Backbone.Marionette"
        },
        backbone_advice: {
            exports: "Backbone.Advice",
            deps: ["vendor/backbone-1.0.0"]
        },
        backbone_validation: {
            exports: "Backbone.Validation",
            init: function() {
                EB.Backbone.Validation = Backbone.Validation
            }
        },
        recaptcha: {
            exports: "Recaptcha"
        },
        underscore: {
            exports: "_"
        },
        "magnific-popup": {
            deps: ["jquery"]
        },
        "magnific-popup-inline": {
            deps: ["magnific-popup"]
        },
        "magnific-popup-image": {
            deps: ["magnific-popup"]
        },
        "magnific-popup-iframe": {
            deps: ["magnific-popup"]
        },
        dotdotdot: {
            deps: ["jquery"]
        },
        amcharts: {
            deps: ["jquery"],
            exports: "AmCharts"
        },
        instafeed: {
            exports: "Instafeed"
        },
        "slick-carousel": {
            deps: ["jquery"]
        }
    },
    map: {
        "*": {
            "handlebars.runtime": "handlebars/handlebars",
            "backbone.wreqr": "backbone_wreqr"
        }
    },
    packages: [{
        name: "handlebars",
        location: "../../node_modules/handlebars/dist/amd",
        main: "./handlebars"
    }, {
        name: "templates",
        location: "../templates"
    }, {
        name: "eb-styleguide",
        location: "../../node_modules/eb-styleguide"
    }, {
        name: "reserved_seating",
        location: "../../node_modules/reserved_seating"
    }],
    config: {
        text: {
            useXhr: function() {
                return !0
            }
        }
    }
}), define("eb/require_base_config", function() {}),
/*!
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */
function(a, b) {
    function c(a) {
        var b, c, d = K[a] = {};
        for (a = a.split(/\s+/), b = 0, c = a.length; c > b; b++) d[a[b]] = !0;
        return d
    }

    function d(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(N, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : J.isNumeric(d) ? +d : M.test(d) ? J.parseJSON(d) : d
                } catch (f) {}
                J.data(a, c, d)
            } else d = b
        }
        return d
    }

    function e(a) {
        for (var b in a)
            if (("data" !== b || !J.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function f(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            f = b + "mark",
            g = J._data(a, d);
        !g || "queue" !== c && J._data(a, e) || "mark" !== c && J._data(a, f) || setTimeout(function() {
            J._data(a, e) || J._data(a, f) || (J.removeData(a, d, !0), g.fire())
        }, 0)
    }

    function g() {
        return !1
    }

    function h() {
        return !0
    }

    function i(a) {
        return !a || !a.parentNode || 11 === a.parentNode.nodeType
    }

    function j(a, b, c) {
        if (b = b || 0, J.isFunction(b)) return J.grep(a, function(a, d) {
            var e = !! b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return J.grep(a, function(a) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = J.grep(a, function(a) {
                return 1 === a.nodeType
            });
            if (kb.test(b)) return J.filter(b, d, !c);
            b = J.filter(b, d)
        }
        return J.grep(a, function(a) {
            return J.inArray(a, b) >= 0 === c
        })
    }

    function k(a) {
        var b = ob.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c
    }

    function l(a) {
        return J.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function m(a, b) {
        if (1 === b.nodeType && J.hasData(a)) {
            var c, d, e, f = J._data(a),
                g = J._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) J.event.add(b, c, h[c][d])
            }
            g.data && (g.data = J.extend({}, g.data))
        }
    }

    function n(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? b.outerHTML = a.outerHTML : "input" !== c || "checkbox" !== a.type && "radio" !== a.type ? "option" === c ? b.selected = a.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue : "script" === c && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(J.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"))
    }

    function o(a) {
        return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }

    function p(a) {
        ("checkbox" === a.type || "radio" === a.type) && (a.defaultChecked = a.checked)
    }

    function q(a) {
        var b = (a.nodeName || "").toLowerCase();
        "input" === b ? p(a) : "script" !== b && "undefined" != typeof a.getElementsByTagName && J.grep(a.getElementsByTagName("input"), p)
    }

    function r(a) {
        var b = G.createElement("div");
        return Cb.appendChild(b), b.innerHTML = a.outerHTML, b.firstChild
    }

    function s(a, b, c) {
        var d = "width" === b ? a.offsetWidth : a.offsetHeight,
            e = "width" === b ? 1 : 0,
            f = 4;
        if (d > 0) {
            if ("border" !== c)
                for (; f > e; e += 2) c || (d -= parseFloat(J.css(a, "padding" + Ob[e])) || 0), "margin" === c ? d += parseFloat(J.css(a, c + Ob[e])) || 0 : d -= parseFloat(J.css(a, "border" + Ob[e] + "Width")) || 0;
            return d + "px"
        }
        if (d = Db(a, b), (0 > d || null == d) && (d = a.style[b]), Kb.test(d)) return d;
        if (d = parseFloat(d) || 0, c)
            for (; f > e; e += 2) d += parseFloat(J.css(a, "padding" + Ob[e])) || 0, "padding" !== c && (d += parseFloat(J.css(a, "border" + Ob[e] + "Width")) || 0), "margin" === c && (d += parseFloat(J.css(a, c + Ob[e])) || 0);
        return d + "px"
    }

    function t(a) {
        return function(b, c) {
            if ("string" != typeof b && (c = b, b = "*"), J.isFunction(c))
                for (var d, e, f, g = b.toLowerCase().split(bc), h = 0, i = g.length; i > h; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c)
        }
    }

    function u(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === fc; k > j && (l || !h); j++) h = i[j](c, d, e), "string" == typeof h && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = u(a, c, d, e, h, g)));
        return !l && h || g["*"] || (h = u(a, c, d, e, "*", g)), h
    }

    function v(a, c) {
        var d, e, f = J.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && J.extend(!0, a, e)
    }

    function w(a, b, c, d) {
        if (J.isArray(b)) J.each(b, function(b, e) {
            c || Sb.test(a) ? d(a, e) : w(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== J.type(b)) d(a, b);
        else
            for (var e in b) w(a + "[" + e + "]", b[e], c, d)
    }

    function x(a, c, d) {
        var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (f in k) f in d && (c[k[f]] = d[f]);
        for (;
            "*" === j[0];) j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                }
        if (j[0] in d) g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
    }

    function y(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d, e, f, g, h, i, j, k, l = a.dataTypes,
            m = {}, n = l.length,
            o = l[0];
        for (d = 1; n > d; d++) {
            if (1 === d)
                for (e in a.converters) "string" == typeof e && (m[e.toLowerCase()] = a.converters[e]);
            if (g = o, o = l[d], "*" === o) o = g;
            else if ("*" !== g && g !== o) {
                if (h = g + " " + o, i = m[h] || m["* " + o], !i) {
                    k = b;
                    for (j in m)
                        if (f = j.split(" "), (f[0] === g || "*" === f[0]) && (k = m[f[1] + " " + o])) {
                            j = m[j], j === !0 ? i = k : k === !0 && (i = j);
                            break
                        }
                }
                i || k || J.error("No conversion from " + h.replace(" ", " to ")), i !== !0 && (c = i ? i(c) : k(j(c)))
            }
        }
        return c
    }

    function z() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function A() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function B() {
        return setTimeout(C, 0), rc = J.now()
    }

    function C() {
        rc = b
    }

    function D(a, b) {
        var c = {};
        return J.each(vc.concat.apply([], vc.slice(0, b)), function() {
            c[this] = a
        }), c
    }

    function E(a) {
        if (!sc[a]) {
            var b = G.body,
                c = J("<" + a + ">").appendTo(b),
                d = c.css("display");
            c.remove(), ("none" === d || "" === d) && (oc || (oc = G.createElement("iframe"), oc.frameBorder = oc.width = oc.height = 0), b.appendChild(oc), pc && oc.createElement || (pc = (oc.contentWindow || oc.contentDocument).document, pc.write((J.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), pc.close()), c = pc.createElement(a), pc.body.appendChild(c), d = J.css(c, "display"), b.removeChild(oc)), sc[a] = d
        }
        return sc[a]
    }

    function F(a) {
        return J.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    var G = a.document,
        H = a.navigator,
        I = a.location,
        J = function() {
            function c() {
                if (!h.isReady) {
                    try {
                        G.documentElement.doScroll("left")
                    } catch (a) {
                        return setTimeout(c, 1), void 0
                    }
                    h.ready()
                }
            }
            var d, e, f, g, h = function(a, b) {
                    return new h.fn.init(a, b, d)
                }, i = a.jQuery,
                j = a.$,
                k = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                l = /\S/,
                m = /^\s+/,
                n = /\s+$/,
                o = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                p = /^[\],:{}\s]*$/,
                q = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                r = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                s = /(?:^|:|,)(?:\s*\[)+/g,
                t = /(webkit)[ \/]([\w.]+)/,
                u = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                v = /(msie) ([\w.]+)/,
                w = /(mozilla)(?:.*? rv:([\w.]+))?/,
                x = /-([a-z]|[0-9])/gi,
                y = /^-ms-/,
                z = function(a, b) {
                    return (b + "").toUpperCase()
                }, A = H.userAgent,
                B = Object.prototype.toString,
                C = Object.prototype.hasOwnProperty,
                D = Array.prototype.push,
                E = Array.prototype.slice,
                F = String.prototype.trim,
                I = Array.prototype.indexOf,
                J = {};
            return h.fn = h.prototype = {
                constructor: h,
                init: function(a, c, d) {
                    var e, f, g, i;
                    if (!a) return this;
                    if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                    if ("body" === a && !c && G.body) return this.context = G, this[0] = G.body, this.selector = a, this.length = 1, this;
                    if ("string" == typeof a) {
                        if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : k.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                        if (e[1]) return c = c instanceof h ? c[0] : c, i = c ? c.ownerDocument || c : G, g = o.exec(a), g ? h.isPlainObject(c) ? (a = [G.createElement(g[1])], h.fn.attr.call(a, c, !0)) : a = [i.createElement(g[1])] : (g = h.buildFragment([e[1]], [i]), a = (g.cacheable ? h.clone(g.fragment) : g.fragment).childNodes), h.merge(this, a);
                        if (f = G.getElementById(e[2]), f && f.parentNode) {
                            if (f.id !== e[2]) return d.find(a);
                            this.length = 1, this[0] = f
                        }
                        return this.context = G, this.selector = a, this
                    }
                    return h.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), h.makeArray(a, this))
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function() {
                    return this.length
                },
                toArray: function() {
                    return E.call(this, 0)
                },
                get: function(a) {
                    return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
                },
                pushStack: function(a, b, c) {
                    var d = this.constructor();
                    return h.isArray(a) ? D.apply(d, a) : h.merge(d, a), d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d
                },
                each: function(a, b) {
                    return h.each(this, a, b)
                },
                ready: function(a) {
                    return h.bindReady(), f.add(a), this
                },
                eq: function(a) {
                    return a = +a, -1 === a ? this.slice(a) : this.slice(a, a + 1)
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                slice: function() {
                    return this.pushStack(E.apply(this, arguments), "slice", E.call(arguments).join(","))
                },
                map: function(a) {
                    return this.pushStack(h.map(this, function(b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: D,
                sort: [].sort,
                splice: [].splice
            }, h.fn.init.prototype = h.fn, h.extend = h.fn.extend = function() {
                var a, c, d, e, f, g, i = arguments[0] || {}, j = 1,
                    k = arguments.length,
                    l = !1;
                for ("boolean" == typeof i && (l = i, i = arguments[1] || {}, j = 2), "object" == typeof i || h.isFunction(i) || (i = {}), k === j && (i = this, --j); k > j; j++)
                    if (null != (a = arguments[j]))
                        for (c in a) d = i[c], e = a[c], i !== e && (l && e && (h.isPlainObject(e) || (f = h.isArray(e))) ? (f ? (f = !1, g = d && h.isArray(d) ? d : []) : g = d && h.isPlainObject(d) ? d : {}, i[c] = h.extend(l, g, e)) : e !== b && (i[c] = e));
                return i
            }, h.extend({
                noConflict: function(b) {
                    return a.$ === h && (a.$ = j), b && a.jQuery === h && (a.jQuery = i), h
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(a) {
                    a ? h.readyWait++ : h.ready(!0)
                },
                ready: function(a) {
                    if (a === !0 && !--h.readyWait || a !== !0 && !h.isReady) {
                        if (!G.body) return setTimeout(h.ready, 1);
                        if (h.isReady = !0, a !== !0 && --h.readyWait > 0) return;
                        f.fireWith(G, [h]), h.fn.trigger && h(G).trigger("ready").off("ready")
                    }
                },
                bindReady: function() {
                    if (!f) {
                        if (f = h.Callbacks("once memory"), "complete" === G.readyState) return setTimeout(h.ready, 1);
                        if (G.addEventListener) G.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", h.ready, !1);
                        else if (G.attachEvent) {
                            G.attachEvent("onreadystatechange", g), a.attachEvent("onload", h.ready);
                            var b = !1;
                            try {
                                b = null == a.frameElement
                            } catch (d) {}
                            G.documentElement.doScroll && b && c()
                        }
                    }
                },
                isFunction: function(a) {
                    return "function" === h.type(a)
                },
                isArray: Array.isArray || function(a) {
                    return "array" === h.type(a)
                },
                isWindow: function(a) {
                    return null != a && a == a.window
                },
                isNumeric: function(a) {
                    return !isNaN(parseFloat(a)) && isFinite(a)
                },
                type: function(a) {
                    return null == a ? String(a) : J[B.call(a)] || "object"
                },
                isPlainObject: function(a) {
                    if (!a || "object" !== h.type(a) || a.nodeType || h.isWindow(a)) return !1;
                    try {
                        if (a.constructor && !C.call(a, "constructor") && !C.call(a.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (c) {
                        return !1
                    }
                    var d;
                    for (d in a);
                    return d === b || C.call(a, d)
                },
                isEmptyObject: function(a) {
                    for (var b in a) return !1;
                    return !0
                },
                error: function(a) {
                    throw new Error(a)
                },
                parseJSON: function(b) {
                    return "string" == typeof b && b ? (b = h.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : p.test(b.replace(q, "@").replace(r, "]").replace(s, "")) ? new Function("return " + b)() : (h.error("Invalid JSON: " + b), void 0)) : null
                },
                parseXML: function(c) {
                    if ("string" != typeof c || !c) return null;
                    var d, e;
                    try {
                        a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                    } catch (f) {
                        d = b
                    }
                    return d && d.documentElement && !d.getElementsByTagName("parsererror").length || h.error("Invalid XML: " + c), d
                },
                noop: function() {},
                globalEval: function(b) {
                    b && l.test(b) && (a.execScript || function(b) {
                        a.eval.call(a, b)
                    })(b)
                },
                camelCase: function(a) {
                    return a.replace(y, "ms-").replace(x, z)
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                },
                each: function(a, c, d) {
                    var e, f = 0,
                        g = a.length,
                        i = g === b || h.isFunction(a);
                    if (d)
                        if (i) {
                            for (e in a)
                                if (c.apply(a[e], d) === !1) break
                        } else
                            for (; g > f && c.apply(a[f++], d) !== !1;);
                        else if (i) {
                        for (e in a)
                            if (c.call(a[e], e, a[e]) === !1) break
                    } else
                        for (; g > f && c.call(a[f], f, a[f++]) !== !1;);
                    return a
                },
                trim: F ? function(a) {
                    return null == a ? "" : F.call(a)
                } : function(a) {
                    return null == a ? "" : a.toString().replace(m, "").replace(n, "")
                },
                makeArray: function(a, b) {
                    var c = b || [];
                    if (null != a) {
                        var d = h.type(a);
                        null == a.length || "string" === d || "function" === d || "regexp" === d || h.isWindow(a) ? D.call(c, a) : h.merge(c, a)
                    }
                    return c
                },
                inArray: function(a, b, c) {
                    var d;
                    if (b) {
                        if (I) return I.call(b, a, c);
                        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                            if (c in b && b[c] === a) return c
                    }
                    return -1
                },
                merge: function(a, c) {
                    var d = a.length,
                        e = 0;
                    if ("number" == typeof c.length)
                        for (var f = c.length; f > e; e++) a[d++] = c[e];
                    else
                        for (; c[e] !== b;) a[d++] = c[e++];
                    return a.length = d, a
                },
                grep: function(a, b, c) {
                    var d, e = [];
                    c = !! c;
                    for (var f = 0, g = a.length; g > f; f++) d = !! b(a[f], f), c !== d && e.push(a[f]);
                    return e
                },
                map: function(a, c, d) {
                    var e, f, g = [],
                        i = 0,
                        j = a.length,
                        k = a instanceof h || j !== b && "number" == typeof j && (j > 0 && a[0] && a[j - 1] || 0 === j || h.isArray(a));
                    if (k)
                        for (; j > i; i++) e = c(a[i], i, d), null != e && (g[g.length] = e);
                    else
                        for (f in a) e = c(a[f], f, d), null != e && (g[g.length] = e);
                    return g.concat.apply([], g)
                },
                guid: 1,
                proxy: function(a, c) {
                    if ("string" == typeof c) {
                        var d = a[c];
                        c = a, a = d
                    }
                    if (!h.isFunction(a)) return b;
                    var e = E.call(arguments, 2),
                        f = function() {
                            return a.apply(c, e.concat(E.call(arguments)))
                        };
                    return f.guid = a.guid = a.guid || f.guid || h.guid++, f
                },
                access: function(a, c, d, e, f, g, i) {
                    var j, k = null == d,
                        l = 0,
                        m = a.length;
                    if (d && "object" == typeof d) {
                        for (l in d) h.access(a, c, l, d[l], 1, g, e);
                        f = 1
                    } else if (e !== b) {
                        if (j = i === b && h.isFunction(e), k && (j ? (j = c, c = function(a, b, c) {
                            return j.call(h(a), c)
                        }) : (c.call(a, e), c = null)), c)
                            for (; m > l; l++) c(a[l], d, j ? e.call(a[l], l, c(a[l], d)) : e, i);
                        f = 1
                    }
                    return f ? a : k ? c.call(a) : m ? c(a[0], d) : g
                },
                now: function() {
                    return (new Date).getTime()
                },
                uaMatch: function(a) {
                    a = a.toLowerCase();
                    var b = t.exec(a) || u.exec(a) || v.exec(a) || a.indexOf("compatible") < 0 && w.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    }
                },
                sub: function() {
                    function a(b, c) {
                        return new a.fn.init(b, c)
                    }
                    h.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(c, d) {
                        return d && d instanceof h && !(d instanceof a) && (d = a(d)), h.fn.init.call(this, c, d, b)
                    }, a.fn.init.prototype = a.fn;
                    var b = a(G);
                    return a
                },
                browser: {}
            }), h.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
                J["[object " + b + "]"] = b.toLowerCase()
            }), e = h.uaMatch(A), e.browser && (h.browser[e.browser] = !0, h.browser.version = e.version), h.browser.webkit && (h.browser.safari = !0), l.test(" ") && (m = /^[\s\xA0]+/, n = /[\s\xA0]+$/), d = h(G), G.addEventListener ? g = function() {
                G.removeEventListener("DOMContentLoaded", g, !1), h.ready()
            } : G.attachEvent && (g = function() {
                "complete" === G.readyState && (G.detachEvent("onreadystatechange", g), h.ready())
            }), h
        }(),
        K = {};
    J.Callbacks = function(a) {
        a = a ? K[a] || c(a) : {};
        var d, e, f, g, h, i, j = [],
            k = [],
            l = function(b) {
                var c, d, e, f;
                for (c = 0, d = b.length; d > c; c++) e = b[c], f = J.type(e), "array" === f ? l(e) : "function" === f && (a.unique && n.has(e) || j.push(e))
            }, m = function(b, c) {
                for (c = c || [], d = !a.memory || [b, c], e = !0, f = !0, i = g || 0, g = 0, h = j.length; j && h > i; i++)
                    if (j[i].apply(b, c) === !1 && a.stopOnFalse) {
                        d = !0;
                        break
                    }
                f = !1, j && (a.once ? d === !0 ? n.disable() : j = [] : k && k.length && (d = k.shift(), n.fireWith(d[0], d[1])))
            }, n = {
                add: function() {
                    if (j) {
                        var a = j.length;
                        l(arguments), f ? h = j.length : d && d !== !0 && (g = a, m(d[0], d[1]))
                    }
                    return this
                },
                remove: function() {
                    if (j)
                        for (var b = arguments, c = 0, d = b.length; d > c; c++)
                            for (var e = 0; e < j.length && (b[c] !== j[e] || (f && h >= e && (h--, i >= e && i--), j.splice(e--, 1), !a.unique)); e++);
                    return this
                },
                has: function(a) {
                    if (j)
                        for (var b = 0, c = j.length; c > b; b++)
                            if (a === j[b]) return !0;
                    return !1
                },
                empty: function() {
                    return j = [], this
                },
                disable: function() {
                    return j = k = d = b, this
                },
                disabled: function() {
                    return !j
                },
                lock: function() {
                    return k = b, d && d !== !0 || n.disable(), this
                },
                locked: function() {
                    return !k
                },
                fireWith: function(b, c) {
                    return k && (f ? a.once || k.push([b, c]) : a.once && d || m(b, c)), this
                },
                fire: function() {
                    return n.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!e
                }
            };
        return n
    };
    var L = [].slice;
    J.extend({
        Deferred: function(a) {
            var b, c = J.Callbacks("once memory"),
                d = J.Callbacks("once memory"),
                e = J.Callbacks("memory"),
                f = "pending",
                g = {
                    resolve: c,
                    reject: d,
                    notify: e
                }, h = {
                    done: c.add,
                    fail: d.add,
                    progress: e.add,
                    state: function() {
                        return f
                    },
                    isResolved: c.fired,
                    isRejected: d.fired,
                    then: function(a, b, c) {
                        return i.done(a).fail(b).progress(c), this
                    },
                    always: function() {
                        return i.done.apply(i, arguments).fail.apply(i, arguments), this
                    },
                    pipe: function(a, b, c) {
                        return J.Deferred(function(d) {
                            J.each({
                                done: [a, "resolve"],
                                fail: [b, "reject"],
                                progress: [c, "notify"]
                            }, function(a, b) {
                                var c, e = b[0],
                                    f = b[1];
                                J.isFunction(e) ? i[a](function() {
                                    c = e.apply(this, arguments), c && J.isFunction(c.promise) ? c.promise().then(d.resolve, d.reject, d.notify) : d[f + "With"](this === i ? d : this, [c])
                                }) : i[a](d[f])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (null == a) a = h;
                        else
                            for (var b in h) a[b] = h[b];
                        return a
                    }
                }, i = h.promise({});
            for (b in g) i[b] = g[b].fire, i[b + "With"] = g[b].fireWith;
            return i.done(function() {
                f = "resolved"
            }, d.disable, e.lock).fail(function() {
                f = "rejected"
            }, c.disable, e.lock), a && a.call(i, i), i
        },
        when: function(a) {
            function b(a) {
                return function(b) {
                    d[a] = arguments.length > 1 ? L.call(arguments, 0) : b, --h || i.resolveWith(i, d)
                }
            }

            function c(a) {
                return function(b) {
                    g[a] = arguments.length > 1 ? L.call(arguments, 0) : b, i.notifyWith(j, g)
                }
            }
            var d = L.call(arguments, 0),
                e = 0,
                f = d.length,
                g = new Array(f),
                h = f,
                i = 1 >= f && a && J.isFunction(a.promise) ? a : J.Deferred(),
                j = i.promise();
            if (f > 1) {
                for (; f > e; e++) d[e] && d[e].promise && J.isFunction(d[e].promise) ? d[e].promise().then(b(e), i.reject, c(e)) : --h;
                h || i.resolveWith(i, d)
            } else i !== a && i.resolveWith(i, f ? [a] : []);
            return j
        }
    }), J.support = function() {
        {
            var b, c, d, e, f, g, h, i, j, k, l, m = G.createElement("div");
            G.documentElement
        }
        if (m.setAttribute("className", "t"), m.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", c = m.getElementsByTagName("*"), d = m.getElementsByTagName("a")[0], !c || !c.length || !d) return {};
        e = G.createElement("select"), f = e.appendChild(G.createElement("option")), g = m.getElementsByTagName("input")[0], b = {
            leadingWhitespace: 3 === m.firstChild.nodeType,
            tbody: !m.getElementsByTagName("tbody").length,
            htmlSerialize: !! m.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: "/a" === d.getAttribute("href"),
            opacity: /^0.55/.test(d.style.opacity),
            cssFloat: !! d.style.cssFloat,
            checkOn: "on" === g.value,
            optSelected: f.selected,
            getSetAttribute: "t" !== m.className,
            enctype: !! G.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, J.boxModel = b.boxModel = "CSS1Compat" === G.compatMode, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
        try {
            delete m.test
        } catch (n) {
            b.deleteExpando = !1
        }
        if (!m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent("onclick", function() {
            b.noCloneEvent = !1
        }), m.cloneNode(!0).fireEvent("onclick")), g = G.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), g.setAttribute("name", "t"), m.appendChild(g), h = G.createDocumentFragment(), h.appendChild(m.lastChild), b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, h.removeChild(g), h.appendChild(m), m.attachEvent)
            for (k in {
                submit: 1,
                change: 1,
                focusin: 1
            }) j = "on" + k, l = j in m, l || (m.setAttribute(j, "return;"), l = "function" == typeof m[j]), b[k + "Bubbles"] = l;
        return h.removeChild(m), h = e = f = m = g = null, J(function() {
            var c, d, e, f, g, h, j, k, n, o, p, q, r = G.getElementsByTagName("body")[0];
            r && (j = 1, q = "padding:0;margin:0;border:", o = "position:absolute;top:0;left:0;width:1px;height:1px;", p = q + "0;visibility:hidden;", k = "style='" + o + q + "5px solid #000;", n = "<div " + k + "display:block;'><div style='" + q + "0;display:block;overflow:hidden;'></div></div><table " + k + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", c = G.createElement("div"), c.style.cssText = p + "width:0;height:0;position:static;top:0;margin-top:" + j + "px", r.insertBefore(c, r.firstChild), m = G.createElement("div"), c.appendChild(m), m.innerHTML = "<table><tr><td style='" + q + "0;display:none'></td><td>t</td></tr></table>", i = m.getElementsByTagName("td"), l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", b.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, a.getComputedStyle && (m.innerHTML = "", h = G.createElement("div"), h.style.width = "0", h.style.marginRight = "0", m.style.width = "2px", m.appendChild(h), b.reliableMarginRight = 0 === (parseInt((a.getComputedStyle(h, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)), "undefined" != typeof m.style.zoom && (m.innerHTML = "", m.style.width = m.style.padding = "1px", m.style.border = 0, m.style.overflow = "hidden", m.style.display = "inline", m.style.zoom = 1, b.inlineBlockNeedsLayout = 3 === m.offsetWidth, m.style.display = "block", m.style.overflow = "visible", m.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = 3 !== m.offsetWidth), m.style.cssText = o + p, m.innerHTML = n, d = m.firstChild, e = d.firstChild, f = d.nextSibling.firstChild.firstChild, g = {
                doesNotAddBorder: 5 !== e.offsetTop,
                doesAddBorderForTableAndCells: 5 === f.offsetTop
            }, e.style.position = "fixed", e.style.top = "20px", g.fixedPosition = 20 === e.offsetTop || 15 === e.offsetTop, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", g.subtractsBorderForOverflowNotVisible = -5 === e.offsetTop, g.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j, a.getComputedStyle && (m.style.marginTop = "1%", b.pixelMargin = "1%" !== (a.getComputedStyle(m, null) || {
                marginTop: 0
            }).marginTop), "undefined" != typeof c.style.zoom && (c.style.zoom = 1), r.removeChild(c), h = m = c = null, J.extend(b, g))
        }), b
    }();
    var M = /^(?:\{.*\}|\[.*\])$/,
        N = /([A-Z])/g;
    J.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (J.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? J.cache[a[J.expando]] : a[J.expando], !! a && !e(a)
        },
        data: function(a, c, d, e) {
            if (J.acceptData(a)) {
                var f, g, h, i = J.expando,
                    j = "string" == typeof c,
                    k = a.nodeType,
                    l = k ? J.cache : a,
                    m = k ? a[i] : a[i] && i,
                    n = "events" === c;
                if (m && l[m] && (n || e || l[m].data) || !j || d !== b) return m || (k ? a[i] = m = ++J.uuid : m = i), l[m] || (l[m] = {}, k || (l[m].toJSON = J.noop)), ("object" == typeof c || "function" == typeof c) && (e ? l[m] = J.extend(l[m], c) : l[m].data = J.extend(l[m].data, c)), f = g = l[m], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[J.camelCase(c)] = d), n && !g[c] ? f.events : (j ? (h = g[c], null == h && (h = g[J.camelCase(c)])) : h = g, h)
            }
        },
        removeData: function(a, b, c) {
            if (J.acceptData(a)) {
                var d, f, g, h = J.expando,
                    i = a.nodeType,
                    j = i ? J.cache : a,
                    k = i ? a[h] : h;
                if (j[k]) {
                    if (b && (d = c ? j[k] : j[k].data)) {
                        J.isArray(b) || (b in d ? b = [b] : (b = J.camelCase(b), b = b in d ? [b] : b.split(" ")));
                        for (f = 0, g = b.length; g > f; f++) delete d[b[f]];
                        if (!(c ? e : J.isEmptyObject)(d)) return
                    }(c || (delete j[k].data, e(j[k]))) && (J.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (J.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null))
                }
            }
        },
        _data: function(a, b, c) {
            return J.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = J.noData[a.nodeName.toLowerCase()];
                if (b) return !(b === !0 || a.getAttribute("classid") !== b)
            }
            return !0
        }
    }), J.fn.extend({
        data: function(a, c) {
            var e, f, g, h, i, j = this[0],
                k = 0,
                l = null;
            if (a === b) {
                if (this.length && (l = J.data(j), 1 === j.nodeType && !J._data(j, "parsedAttrs"))) {
                    for (g = j.attributes, i = g.length; i > k; k++) h = g[k].name, 0 === h.indexOf("data-") && (h = J.camelCase(h.substring(5)), d(j, h, l[h]));
                    J._data(j, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof a ? this.each(function() {
                J.data(this, a)
            }) : (e = a.split(".", 2), e[1] = e[1] ? "." + e[1] : "", f = e[1] + "!", J.access(this, function(c) {
                return c === b ? (l = this.triggerHandler("getData" + f, [e[0]]), l === b && j && (l = J.data(j, a), l = d(j, a, l)), l === b && e[1] ? this.data(e[0]) : l) : (e[1] = c, this.each(function() {
                    var b = J(this);
                    b.triggerHandler("setData" + f, e), J.data(this, a, c), b.triggerHandler("changeData" + f, e)
                }), void 0)
            }, null, c, arguments.length > 1, null, !1))
        },
        removeData: function(a) {
            return this.each(function() {
                J.removeData(this, a)
            })
        }
    }), J.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark", J._data(a, b, (J._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, c) {
            if (a !== !0 && (c = b, b = a, a = !1), b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (J._data(b, d) || 1) - 1;
                e ? J._data(b, d, e) : (J.removeData(b, d, !0), f(b, c, "mark"))
            }
        },
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = J._data(a, b), c && (!d || J.isArray(c) ? d = J._data(a, b, J.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = J.queue(a, b),
                d = c.shift(),
                e = {};
            "inprogress" === d && (d = c.shift()), d && ("fx" === b && c.unshift("inprogress"), J._data(a, b + ".run", e), d.call(a, function() {
                J.dequeue(a, b)
            }, e)), c.length || (J.removeData(a, b + "queue " + b + ".run", !0), f(a, b, "queue"))
        }
    }), J.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? J.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = J.queue(this, a, c);
                "fx" === a && "inprogress" !== b[0] && J.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                J.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = J.fx ? J.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function d() {
                --i || f.resolveWith(g, [g])
            }
            "string" != typeof a && (c = a, a = b), a = a || "fx";
            for (var e, f = J.Deferred(), g = this, h = g.length, i = 1, j = a + "defer", k = a + "queue", l = a + "mark"; h--;)(e = J.data(g[h], j, b, !0) || (J.data(g[h], k, b, !0) || J.data(g[h], l, b, !0)) && J.data(g[h], j, J.Callbacks("once memory"), !0)) && (i++, e.add(d));
            return d(), f.promise(c)
        }
    });
    var O, P, Q, R = /[\n\t\r]/g,
        S = /\s+/,
        T = /\r/g,
        U = /^(?:button|input)$/i,
        V = /^(?:button|input|object|select|textarea)$/i,
        W = /^a(?:rea)?$/i,
        X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Y = J.support.getSetAttribute;
    J.fn.extend({
        attr: function(a, b) {
            return J.access(this, J.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                J.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return J.access(this, J.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = J.propFix[a] || a, this.each(function() {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g, h;
            if (J.isFunction(a)) return this.each(function(b) {
                J(this).addClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a)
                for (b = a.split(S), c = 0, d = this.length; d > c; c++)
                    if (e = this[c], 1 === e.nodeType)
                        if (e.className || 1 !== b.length) {
                            for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++)~ f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
                            e.className = J.trim(f)
                        } else e.className = a;
            return this
        },
        removeClass: function(a) {
            var c, d, e, f, g, h, i;
            if (J.isFunction(a)) return this.each(function(b) {
                J(this).removeClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a || a === b)
                for (c = (a || "").split(S), d = 0, e = this.length; e > d; d++)
                    if (f = this[d], 1 === f.nodeType && f.className)
                        if (a) {
                            for (g = (" " + f.className + " ").replace(R, " "), h = 0, i = c.length; i > h; h++) g = g.replace(" " + c[h] + " ", " ");
                            f.className = J.trim(g)
                        } else f.className = "";
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return J.isFunction(a) ? this.each(function(c) {
                J(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var e, f = 0, g = J(this), h = b, i = a.split(S); e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                else("undefined" === c || "boolean" === c) && (this.className && J._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : J._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(R, " ").indexOf(b) > -1) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0]; {
                if (arguments.length) return e = J.isFunction(a), this.each(function(d) {
                    var f, g = J(this);
                    1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : J.isArray(f) && (f = J.map(f, function(a) {
                        return null == a ? "" : a + ""
                    })), c = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
                });
                if (f) return c = J.valHooks[f.type] || J.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(T, "") : null == d ? "" : d)
            }
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, f = a.selectedIndex,
                        g = [],
                        h = a.options,
                        i = "select-one" === a.type;
                    if (0 > f) return null;
                    for (c = i ? f : 0, d = i ? f + 1 : h.length; d > c; c++)
                        if (e = h[c], !(!e.selected || (J.support.optDisabled ? e.disabled : null !== e.getAttribute("disabled")) || e.parentNode.disabled && J.nodeName(e.parentNode, "optgroup"))) {
                            if (b = J(e).val(), i) return b;
                            g.push(b)
                        }
                    return i && !g.length && h.length ? J(h[f]).val() : g
                },
                set: function(a, b) {
                    var c = J.makeArray(b);
                    return J(a).find("option").each(function() {
                        this.selected = J.inArray(J(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1), c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            var f, g, h, i = a.nodeType;
            if (a && 3 !== i && 8 !== i && 2 !== i) return e && c in J.attrFn ? J(a)[c](d) : "undefined" == typeof a.getAttribute ? J.prop(a, c, d) : (h = 1 !== i || !J.isXMLDoc(a), h && (c = c.toLowerCase(), g = J.attrHooks[c] || (X.test(c) ? P : O)), d !== b ? null === d ? (J.removeAttr(a, c), void 0) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, "" + d), d) : g && "get" in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f))
        },
        removeAttr: function(a, b) {
            var c, d, e, f, g, h = 0;
            if (b && 1 === a.nodeType)
                for (d = b.toLowerCase().split(S), f = d.length; f > h; h++) e = d[h], e && (c = J.propFix[e] || e, g = X.test(e), g || J.attr(a, e, ""), a.removeAttribute(Y ? e : c), g && c in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (U.test(a.nodeName) && a.parentNode) J.error("type property can't be changed");
                    else if (!J.support.radioValue && "radio" === b && J.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    return O && J.nodeName(a, "button") ? O.get(a, b) : b in a ? a.value : null
                },
                set: function(a, b, c) {
                    return O && J.nodeName(a, "button") ? O.set(a, b, c) : (a.value = b, void 0)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            if (a && 3 !== h && 8 !== h && 2 !== h) return g = 1 !== h || !J.isXMLDoc(a), g && (c = J.propFix[c] || c, f = J.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : V.test(a.nodeName) || W.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), J.attrHooks.tabindex = J.propHooks.tabIndex, P = {
        get: function(a, c) {
            var d, e = J.prop(a, c);
            return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            return b === !1 ? J.removeAttr(a, c) : (d = J.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c
        }
    }, Y || (Q = {
        name: !0,
        id: !0,
        coords: !0
    }, O = J.valHooks.button = {
        get: function(a, c) {
            var d;
            return d = a.getAttributeNode(c), d && (Q[c] ? "" !== d.nodeValue : d.specified) ? d.nodeValue : b
        },
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = G.createAttribute(c), a.setAttributeNode(d)), d.nodeValue = b + ""
        }
    }, J.attrHooks.tabindex.set = O.set, J.each(["width", "height"], function(a, b) {
        J.attrHooks[b] = J.extend(J.attrHooks[b], {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        })
    }), J.attrHooks.contenteditable = {
        get: O.get,
        set: function(a, b, c) {
            "" === b && (b = "false"), O.set(a, b, c)
        }
    }), J.support.hrefNormalized || J.each(["href", "src", "width", "height"], function(a, c) {
        J.attrHooks[c] = J.extend(J.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return null === d ? b : d
            }
        })
    }), J.support.style || (J.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    }), J.support.optSelected || (J.propHooks.selected = J.extend(J.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    })), J.support.enctype || (J.propFix.enctype = "encoding"), J.support.checkOn || J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = {
            get: function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
        }
    }), J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = J.extend(J.valHooks[this], {
            set: function(a, b) {
                return J.isArray(b) ? a.checked = J.inArray(J(a).val(), b) >= 0 : void 0
            }
        })
    });
    var Z = /^(?:textarea|input|select)$/i,
        $ = /^([^\.]*)?(?:\.(.+))?$/,
        _ = /(?:^|\s)hover(\.\S+)?\b/,
        ab = /^key/,
        bb = /^(?:mouse|contextmenu)|click/,
        cb = /^(?:focusinfocus|focusoutblur)$/,
        db = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        eb = function(a) {
            var b = db.exec(a);
            return b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")), b
        }, fb = function(a, b) {
            var c = a.attributes || {};
            return !(b[1] && a.nodeName.toLowerCase() !== b[1] || b[2] && (c.id || {}).value !== b[2] || b[3] && !b[3].test((c["class"] || {}).value))
        }, gb = function(a) {
            return J.event.special.hover ? a : a.replace(_, "mouseenter$1 mouseleave$1")
        };
    J.event = {
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q;
            if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = J._data(a))) {
                for (d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = J.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
                    return "undefined" == typeof J || a && J.event.triggered === a.type ? b : J.event.dispatch.apply(h.elem, arguments)
                }, h.elem = a), c = J.trim(gb(c)).split(" "), j = 0; j < c.length; j++) k = $.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), q = J.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = J.event.special[l] || {}, n = J.extend({
                    type: l,
                    origType: k[1],
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    quick: f && eb(f),
                    namespace: m.join(".")
                }, o), p = i[l], p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))), q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), J.event.global[l] = !0;
                a = null
            }
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q, r = J.hasData(a) && J._data(a);
            if (r && (m = r.events)) {
                for (b = J.trim(gb(b || "")).split(" "), f = 0; f < b.length; f++)
                    if (g = $.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
                        for (n = J.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, p = m[h] || [], k = p.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = 0; l < p.length; l++) q = p[l], !e && i !== q.origType || c && c.guid !== q.guid || j && !j.test(q.namespace) || d && d !== q.selector && ("**" !== d || !q.selector) || (p.splice(l--, 1), q.selector && p.delegateCount--, n.remove && n.remove.call(a, q));
                        0 === p.length && k !== p.length && (n.teardown && n.teardown.call(a, j) !== !1 || J.removeEvent(a, h, r.handle), delete m[h])
                    } else
                        for (h in m) J.event.remove(a, h + b[f], c, d, !0);
                J.isEmptyObject(m) && (o = r.handle, o && (o.elem = null), J.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, e, f) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var g, h, i, j, k, l, m, n, o, p, q = c.type || c,
                    r = [];
                if (!cb.test(q + J.event.triggered) && (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), e && !J.event.customEvent[q] || J.event.global[q]))
                    if (c = "object" == typeof c ? c[J.expando] ? c : new J.Event(q, c) : new J.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q : "", e) {
                        if (c.result = b, c.target || (c.target = e), d = null != d ? J.makeArray(d) : [], d.unshift(c), m = J.event.special[q] || {}, !m.trigger || m.trigger.apply(e, d) !== !1) {
                            if (o = [
                                [e, m.bindType || q]
                            ], !f && !m.noBubble && !J.isWindow(e)) {
                                for (p = m.delegateType || q, j = cb.test(p + q) ? e : e.parentNode, k = null; j; j = j.parentNode) o.push([j, p]), k = j;
                                k && k === e.ownerDocument && o.push([k.defaultView || k.parentWindow || a, p])
                            }
                            for (i = 0; i < o.length && !c.isPropagationStopped(); i++) j = o[i][0], c.type = o[i][1], n = (J._data(j, "events") || {})[c.type] && J._data(j, "handle"), n && n.apply(j, d), n = l && j[l], n && J.acceptData(j) && n.apply(j, d) === !1 && c.preventDefault();
                            return c.type = q, f || c.isDefaultPrevented() || m._default && m._default.apply(e.ownerDocument, d) !== !1 || "click" === q && J.nodeName(e, "a") || !J.acceptData(e) || l && e[q] && ("focus" !== q && "blur" !== q || 0 !== c.target.offsetWidth) && !J.isWindow(e) && (k = e[l], k && (e[l] = null), J.event.triggered = q, e[q](), J.event.triggered = b, k && (e[l] = k)), c.result
                        }
                    } else {
                        g = J.cache;
                        for (i in g) g[i].events && g[i].events[q] && J.event.trigger(c, d, g[i].handle.elem, !0)
                    }
            }
        },
        dispatch: function(c) {
            c = J.event.fix(c || a.event);
            var d, e, f, g, h, i, j, k, l, m, n = (J._data(this, "events") || {})[c.type] || [],
                o = n.delegateCount,
                p = [].slice.call(arguments, 0),
                q = !c.exclusive && !c.namespace,
                r = J.event.special[c.type] || {}, s = [];
            if (p[0] = c, c.delegateTarget = this, !r.preDispatch || r.preDispatch.call(this, c) !== !1) {
                if (o && (!c.button || "click" !== c.type))
                    for (g = J(this), g.context = this.ownerDocument || this, f = c.target; f != this; f = f.parentNode || this)
                        if (f.disabled !== !0) {
                            for (i = {}, k = [], g[0] = f, d = 0; o > d; d++) l = n[d], m = l.selector, i[m] === b && (i[m] = l.quick ? fb(f, l.quick) : g.is(m)), i[m] && k.push(l);
                            k.length && s.push({
                                elem: f,
                                matches: k
                            })
                        }
                for (n.length > o && s.push({
                    elem: this,
                    matches: n.slice(o)
                }), d = 0; d < s.length && !c.isPropagationStopped(); d++)
                    for (j = s[d], c.currentTarget = j.elem, e = 0; e < j.matches.length && !c.isImmediatePropagationStopped(); e++) l = j.matches[e], (q || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) && (c.data = l.data, c.handleObj = l, h = ((J.event.special[l.origType] || {}).handle || l.handler).apply(j.elem, p), h !== b && (c.result = h, h === !1 && (c.preventDefault(), c.stopPropagation())));
                return r.postDispatch && r.postDispatch.call(this, c), c.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button,
                    h = c.fromElement;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || G, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[J.expando]) return a;
            var c, d, e = a,
                f = J.event.fixHooks[a.type] || {}, g = f.props ? this.props.concat(f.props) : this.props;
            for (a = J.Event(e), c = g.length; c;) d = g[--c], a[d] = e[d];
            return a.target || (a.target = e.srcElement || G), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey), f.filter ? f.filter(a, e) : a
        },
        special: {
            ready: {
                setup: J.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(a, b, c) {
                    J.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = J.extend(new J.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? J.event.trigger(e, null, b) : J.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, J.event.handle = J.event.dispatch, J.removeEvent = G.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, J.Event = function(a, b) {
        return this instanceof J.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? h : g) : this.type = a, b && J.extend(this, b), this.timeStamp = a && a.timeStamp || J.now(), this[J.expando] = !0, void 0) : new J.Event(a, b)
    }, J.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = h;
            var a = this.originalEvent;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = h;
            var a = this.originalEvent;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = h, this.stopPropagation()
        },
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        J.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    f.selector
                }
                return (!e || e !== d && !J.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), J.support.submitBubbles || (J.event.special.submit = {
        setup: function() {
            return J.nodeName(this, "form") ? !1 : (J.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target,
                    d = J.nodeName(c, "input") || J.nodeName(c, "button") ? c.form : b;
                d && !d._submit_attached && (J.event.add(d, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), d._submit_attached = !0)
            }), void 0)
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && J.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return J.nodeName(this, "form") ? !1 : (J.event.remove(this, "._submit"), void 0)
        }
    }), J.support.changeBubbles || (J.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (J.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), J.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1, J.event.simulate("change", this, a, !0))
            })), !1) : (J.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Z.test(b.nodeName) && !b._change_attached && (J.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || J.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            }), void 0)
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return J.event.remove(this, "._change"), Z.test(this.nodeName)
        }
    }), J.support.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0,
            d = function(a) {
                J.event.simulate(b, a.target, J.event.fix(a), !0)
            };
        J.event.special[b] = {
            setup: function() {
                0 === c++ && G.addEventListener(a, d, !0)
            },
            teardown: function() {
                0 === --c && G.removeEventListener(a, d, !0)
            }
        }
    }), J.fn.extend({
        on: function(a, c, d, e, f) {
            var h, i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = g;
            else if (!e) return this;
            return 1 === f && (h = e, e = function(a) {
                return J().off(a), h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = J.guid++)), this.each(function() {
                J.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                return J(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this
            }
            if ("object" == typeof a) {
                for (var f in a) this.off(f, c, a[f]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = g), this.each(function() {
                J.event.remove(this, a, d, c)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        live: function(a, b, c) {
            return J(this.context).on(a, this.selector, b, c), this
        },
        die: function(a, b) {
            return J(this.context).off(a, this.selector || "**", b), this
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 == arguments.length ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                J.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            return this[0] ? J.event.trigger(a, b, this[0], !0) : void 0
        },
        toggle: function(a) {
            var b = arguments,
                c = a.guid || J.guid++,
                d = 0,
                e = function(c) {
                    var e = (J._data(this, "lastToggle" + a.guid) || 0) % d;
                    return J._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1
                };
            for (e.guid = c; d < b.length;) b[d++].guid = c;
            return this.click(e)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        J.fn[b] = function(a, c) {
            return null == c && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }, J.attrFn && (J.attrFn[b] = !0), ab.test(b) && (J.event.fixHooks[b] = J.event.keyHooks), bb.test(b) && (J.event.fixHooks[b] = J.event.mouseHooks)
    }),
    /*!
     * Sizzle CSS Selector Engine
     *  Copyright 2011, The Dojo Foundation
     *  Released under the MIT, BSD, and GPL Licenses.
     *  More information: http://sizzlejs.com/
     */
    function() {
        function a(a, b, c, d, f, g) {
            for (var h = 0, i = d.length; i > h; h++) {
                var j = d[h];
                if (j) {
                    var k = !1;
                    for (j = j[a]; j;) {
                        if (j[e] === c) {
                            k = d[j.sizset];
                            break
                        }
                        if (1 !== j.nodeType || g || (j[e] = c, j.sizset = h), j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    d[h] = k
                }
            }
        }

        function c(a, b, c, d, f, g) {
            for (var h = 0, i = d.length; i > h; h++) {
                var j = d[h];
                if (j) {
                    var k = !1;
                    for (j = j[a]; j;) {
                        if (j[e] === c) {
                            k = d[j.sizset];
                            break
                        }
                        if (1 === j.nodeType)
                            if (g || (j[e] = c, j.sizset = h), "string" != typeof b) {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (m.filter(b, [j]).length > 0) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    d[h] = k
                }
            }
        }
        var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            e = "sizcache" + (Math.random() + "").replace(".", ""),
            f = 0,
            g = Object.prototype.toString,
            h = !1,
            i = !0,
            j = /\\/g,
            k = /\r\n/g,
            l = /\W/;
        [0, 0].sort(function() {
                return i = !1, 0
            });
        var m = function(a, b, c, e) {
            c = c || [], b = b || G;
            var f = b;
            if (1 !== b.nodeType && 9 !== b.nodeType) return [];
            if (!a || "string" != typeof a) return c;
            var h, i, j, k, l, n, q, r, t = !0,
                u = m.isXML(b),
                v = [],
                x = a;
            do
                if (d.exec(""), h = d.exec(x), h && (x = h[3], v.push(h[1]), h[2])) {
                    k = h[3];
                    break
                } while (h);
            if (v.length > 1 && p.exec(a))
                if (2 === v.length && o.relative[v[0]]) i = w(v[0] + v[1], b, e);
                else
                    for (i = o.relative[v[0]] ? [b] : m(v.shift(), b); v.length;) a = v.shift(), o.relative[a] && (a += v.shift()), i = w(a, i, e);
                else if (!e && v.length > 1 && 9 === b.nodeType && !u && o.match.ID.test(v[0]) && !o.match.ID.test(v[v.length - 1]) && (l = m.find(v.shift(), b, u), b = l.expr ? m.filter(l.expr, l.set)[0] : l.set[0]), b)
                for (l = e ? {
                    expr: v.pop(),
                    set: s(e)
                } : m.find(v.pop(), 1 !== v.length || "~" !== v[0] && "+" !== v[0] || !b.parentNode ? b : b.parentNode, u), i = l.expr ? m.filter(l.expr, l.set) : l.set, v.length > 0 ? j = s(i) : t = !1; v.length;) n = v.pop(), q = n, o.relative[n] ? q = v.pop() : n = "", null == q && (q = b), o.relative[n](j, q, u);
            else j = v = []; if (j || (j = i), j || m.error(n || a), "[object Array]" === g.call(j))
                if (t)
                    if (b && 1 === b.nodeType)
                        for (r = 0; null != j[r]; r++) j[r] && (j[r] === !0 || 1 === j[r].nodeType && m.contains(b, j[r])) && c.push(i[r]);
                    else
                        for (r = 0; null != j[r]; r++) j[r] && 1 === j[r].nodeType && c.push(i[r]);
                    else c.push.apply(c, j);
                    else s(j, c);
            return k && (m(k, f, c, e), m.uniqueSort(c)), c
        };
        m.uniqueSort = function(a) {
            if (u && (h = i, a.sort(u), h))
                for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
            return a
        }, m.matches = function(a, b) {
            return m(a, null, null, b)
        }, m.matchesSelector = function(a, b) {
            return m(b, null, null, [a]).length > 0
        }, m.find = function(a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = o.order.length; f > e; e++)
                if (h = o.order[e], (g = o.leftMatch[h].exec(a)) && (i = g[1], g.splice(1, 1), "\\" !== i.substr(i.length - 1) && (g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c), null != d))) {
                    a = a.replace(o.match[h], "");
                    break
                }
            return d || (d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []), {
                set: d,
                expr: a
            }
        }, m.filter = function(a, c, d, e) {
            for (var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]); a && c.length;) {
                for (h in o.filter)
                    if (null != (f = o.leftMatch[h].exec(a)) && f[2]) {
                        if (k = o.filter[h], l = f[1], g = !1, f.splice(1, 1), "\\" === l.substr(l.length - 1)) continue;
                        if (s === r && (r = []), o.preFilter[h])
                            if (f = o.preFilter[h](f, s, d, r, e, t)) {
                                if (f === !0) continue
                            } else g = i = !0;
                        if (f)
                            for (n = 0; null != (j = s[n]); n++) j && (i = k(j, f, n, s), p = e ^ i, d && null != i ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                        if (i !== b) {
                            if (d || (s = r), a = a.replace(o.match[h], ""), !g) return [];
                            break
                        }
                    }
                if (a === q) {
                    if (null != g) break;
                    m.error(a)
                }
                q = a
            }
            return s
        }, m.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        var n = m.getText = function(a) {
            var b, c, d = a.nodeType,
                e = "";
            if (d) {
                if (1 === d || 9 === d || 11 === d) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    if ("string" == typeof a.innerText) return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                } else if (3 === d || 4 === d) return a.nodeValue
            } else
                for (b = 0; c = a[b]; b++) 8 !== c.nodeType && (e += n(c));
            return e
        }, o = m.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function(a) {
                        return a.getAttribute("href")
                    },
                    type: function(a) {
                        return a.getAttribute("type")
                    }
                },
                relative: {
                    "+": function(a, b) {
                        var c = "string" == typeof b,
                            d = c && !l.test(b),
                            e = c && !d;
                        d && (b = b.toLowerCase());
                        for (var f, g = 0, h = a.length; h > g; g++)
                            if (f = a[g]) {
                                for (;
                                    (f = f.previousSibling) && 1 !== f.nodeType;);
                                a[g] = e || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
                            }
                        e && m.filter(b, a, !0)
                    },
                    ">": function(a, b) {
                        var c, d = "string" == typeof b,
                            e = 0,
                            f = a.length;
                        if (d && !l.test(b)) {
                            for (b = b.toLowerCase(); f > e; e++)
                                if (c = a[e]) {
                                    var g = c.parentNode;
                                    a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                }
                        } else {
                            for (; f > e; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                            d && m.filter(b, a, !0)
                        }
                    },
                    "": function(b, d, e) {
                        var g, h = f++,
                            i = c;
                        "string" != typeof d || l.test(d) || (d = d.toLowerCase(), g = d, i = a), i("parentNode", d, h, b, g, e)
                    },
                    "~": function(b, d, e) {
                        var g, h = f++,
                            i = c;
                        "string" != typeof d || l.test(d) || (d = d.toLowerCase(), g = d, i = a), i("previousSibling", d, h, b, g, e)
                    }
                },
                find: {
                    ID: function(a, b, c) {
                        if ("undefined" != typeof b.getElementById && !c) {
                            var d = b.getElementById(a[1]);
                            return d && d.parentNode ? [d] : []
                        }
                    },
                    NAME: function(a, b) {
                        if ("undefined" != typeof b.getElementsByName) {
                            for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; f > e; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                            return 0 === c.length ? null : c
                        }
                    },
                    TAG: function(a, b) {
                        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a[1]) : void 0
                    }
                },
                preFilter: {
                    CLASS: function(a, b, c, d, e, f) {
                        if (a = " " + a[1].replace(j, "") + " ", f) return a;
                        for (var g, h = 0; null != (g = b[h]); h++) g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[h] = !1));
                        return !1
                    },
                    ID: function(a) {
                        return a[1].replace(j, "")
                    },
                    TAG: function(a) {
                        return a[1].replace(j, "").toLowerCase()
                    },
                    CHILD: function(a) {
                        if ("nth" === a[1]) {
                            a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                        } else a[2] && m.error(a[0]);
                        return a[0] = f++, a
                    },
                    ATTR: function(a, b, c, d, e, f) {
                        var g = a[1] = a[1].replace(j, "");
                        return !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), "~=" === a[2] && (a[4] = " " + a[4] + " "), a
                    },
                    PSEUDO: function(a, b, c, e, f) {
                        if ("not" === a[1]) {
                            if (!((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))) {
                                var g = m.filter(a[3], b, c, !0 ^ f);
                                return c || e.push.apply(e, g), !1
                            }
                            a[3] = m(a[3], null, null, b)
                        } else if (o.match.POS.test(a[0]) || o.match.CHILD.test(a[0])) return !0;
                        return a
                    },
                    POS: function(a) {
                        return a.unshift(!0), a
                    }
                },
                filters: {
                    enabled: function(a) {
                        return a.disabled === !1 && "hidden" !== a.type
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        return a.checked === !0
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    parent: function(a) {
                        return !!a.firstChild
                    },
                    empty: function(a) {
                        return !a.firstChild
                    },
                    has: function(a, b, c) {
                        return !!m(c[3], a).length
                    },
                    header: function(a) {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function(a) {
                        var b = a.getAttribute("type"),
                            c = a.type;
                        return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
                    },
                    radio: function(a) {
                        return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                    },
                    checkbox: function(a) {
                        return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                    },
                    file: function(a) {
                        return "input" === a.nodeName.toLowerCase() && "file" === a.type
                    },
                    password: function(a) {
                        return "input" === a.nodeName.toLowerCase() && "password" === a.type
                    },
                    submit: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return ("input" === b || "button" === b) && "submit" === a.type
                    },
                    image: function(a) {
                        return "input" === a.nodeName.toLowerCase() && "image" === a.type
                    },
                    reset: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return ("input" === b || "button" === b) && "reset" === a.type
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    input: function(a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    },
                    focus: function(a) {
                        return a === a.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function(a, b) {
                        return 0 === b
                    },
                    last: function(a, b, c, d) {
                        return b === d.length - 1
                    },
                    even: function(a, b) {
                        return 0 === b % 2
                    },
                    odd: function(a, b) {
                        return 1 === b % 2
                    },
                    lt: function(a, b, c) {
                        return b < c[3] - 0
                    },
                    gt: function(a, b, c) {
                        return b > c[3] - 0
                    },
                    nth: function(a, b, c) {
                        return c[3] - 0 === b
                    },
                    eq: function(a, b, c) {
                        return c[3] - 0 === b
                    }
                },
                filter: {
                    PSEUDO: function(a, b, c, d) {
                        var e = b[1],
                            f = o.filters[e];
                        if (f) return f(a, c, b, d);
                        if ("contains" === e) return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                        if ("not" === e) {
                            for (var g = b[3], h = 0, i = g.length; i > h; h++)
                                if (g[h] === a) return !1;
                            return !0
                        }
                        m.error(e)
                    },
                    CHILD: function(a, b) {
                        var c, d, f, g, h, i, j = b[1],
                            k = a;
                        switch (j) {
                            case "only":
                            case "first":
                                for (; k = k.previousSibling;)
                                    if (1 === k.nodeType) return !1;
                                if ("first" === j) return !0;
                                k = a;
                            case "last":
                                for (; k = k.nextSibling;)
                                    if (1 === k.nodeType) return !1;
                                return !0;
                            case "nth":
                                if (c = b[2], d = b[3], 1 === c && 0 === d) return !0;
                                if (f = b[0], g = a.parentNode, g && (g[e] !== f || !a.nodeIndex)) {
                                    for (h = 0, k = g.firstChild; k; k = k.nextSibling) 1 === k.nodeType && (k.nodeIndex = ++h);
                                    g[e] = f
                                }
                                return i = a.nodeIndex - d, 0 === c ? 0 === i : 0 === i % c && i / c >= 0
                        }
                    },
                    ID: function(a, b) {
                        return 1 === a.nodeType && a.getAttribute("id") === b
                    },
                    TAG: function(a, b) {
                        return "*" === b && 1 === a.nodeType || !! a.nodeName && a.nodeName.toLowerCase() === b
                    },
                    CLASS: function(a, b) {
                        return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                    },
                    ATTR: function(a, b) {
                        var c = b[1],
                            d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
                            e = d + "",
                            f = b[2],
                            g = b[4];
                        return null == d ? "!=" === f : !f && m.attr ? null != d : "=" === f ? e === g : "*=" === f ? e.indexOf(g) >= 0 : "~=" === f ? (" " + e + " ").indexOf(g) >= 0 : g ? "!=" === f ? e !== g : "^=" === f ? 0 === e.indexOf(g) : "$=" === f ? e.substr(e.length - g.length) === g : "|=" === f ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                    },
                    POS: function(a, b, c, d) {
                        var e = b[2],
                            f = o.setFilters[e];
                        return f ? f(a, c, b, d) : void 0
                    }
                }
            }, p = o.match.POS,
            q = function(a, b) {
                return "\\" + (b - 0 + 1)
            };
        for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        o.match.globalPOS = p;
        var s = function(a, b) {
            return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a
        };
        try {
            Array.prototype.slice.call(G.documentElement.childNodes, 0)[0].nodeType
        } catch (t) {
            s = function(a, b) {
                var c = 0,
                    d = b || [];
                if ("[object Array]" === g.call(a)) Array.prototype.push.apply(d, a);
                else if ("number" == typeof a.length)
                    for (var e = a.length; e > c; c++) d.push(a[c]);
                else
                    for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var u, v;
        G.documentElement.compareDocumentPosition ? u = function(a, b) {
            return a === b ? (h = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
        } : (u = function(a, b) {
            if (a === b) return h = !0, 0;
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [],
                f = [],
                g = a.parentNode,
                i = b.parentNode,
                j = g;
            if (g === i) return v(a, b);
            if (!g) return -1;
            if (!i) return 1;
            for (; j;) e.unshift(j), j = j.parentNode;
            for (j = i; j;) f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; c > k && d > k; k++)
                if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        }, v = function(a, b, c) {
            if (a === b) return c;
            for (var d = a.nextSibling; d;) {
                if (d === b) return -1;
                d = d.nextSibling
            }
            return 1
        }),
        function() {
            var a = G.createElement("div"),
                c = "script" + (new Date).getTime(),
                d = G.documentElement;
            a.innerHTML = "<a name='" + c + "'/>", d.insertBefore(a, d.firstChild), G.getElementById(c) && (o.find.ID = function(a, c, d) {
                if ("undefined" != typeof c.getElementById && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, o.filter.ID = function(a, b) {
                var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                return 1 === a.nodeType && c && c.nodeValue === b
            }), d.removeChild(a), d = a = null
        }(),
        function() {
            var a = G.createElement("div");
            a.appendChild(G.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                var c = b.getElementsByTagName(a[1]);
                if ("*" === a[1]) {
                    for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (o.attrHandle.href = function(a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), G.querySelectorAll && ! function() {
            var a = m,
                b = G.createElement("div"),
                c = "__sizzle__";
            if (b.innerHTML = "<p class='TEST'></p>", !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                m = function(b, d, e, f) {
                    if (d = d || G, !f && !m.isXML(d)) {
                        var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (g && (1 === d.nodeType || 9 === d.nodeType)) {
                            if (g[1]) return s(d.getElementsByTagName(b), e);
                            if (g[2] && o.find.CLASS && d.getElementsByClassName) return s(d.getElementsByClassName(g[2]), e)
                        }
                        if (9 === d.nodeType) {
                            if ("body" === b && d.body) return s([d.body], e);
                            if (g && g[3]) {
                                var h = d.getElementById(g[3]);
                                if (!h || !h.parentNode) return s([], e);
                                if (h.id === g[3]) return s([h], e)
                            }
                            try {
                                return s(d.querySelectorAll(b), e)
                            } catch (i) {}
                        } else if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                            var j = d,
                                k = d.getAttribute("id"),
                                l = k || c,
                                n = d.parentNode,
                                p = /^\s*[+~]/.test(b);
                            k ? l = l.replace(/'/g, "\\$&") : d.setAttribute("id", l), p && n && (d = d.parentNode);
                            try {
                                if (!p || n) return s(d.querySelectorAll("[id='" + l + "'] " + b), e)
                            } catch (q) {} finally {
                                k || j.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, d, e, f)
                };
                for (var d in a) m[d] = a[d];
                b = null
            }
        }(),
        function() {
            var a = G.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var c = !b.call(G.createElement("div"), "div"),
                    d = !1;
                try {
                    b.call(G.documentElement, "[test!='']:sizzle")
                } catch (e) {
                    d = !0
                }
                m.matchesSelector = function(a, e) {
                    if (e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !m.isXML(a)) try {
                        if (d || !o.match.PSEUDO.test(e) && !/!=/.test(e)) {
                            var f = b.call(a, e);
                            if (f || !c || a.document && 11 !== a.document.nodeType) return f
                        }
                    } catch (g) {}
                    return m(e, null, null, [a]).length > 0
                }
            }
        }(),
        function() {
            var a = G.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>", a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
                return "undefined" == typeof b.getElementsByClassName || c ? void 0 : b.getElementsByClassName(a[1])
            }, a = null))
        }(), m.contains = G.documentElement.contains ? function(a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : G.documentElement.compareDocumentPosition ? function(a, b) {
            return !!(16 & a.compareDocumentPosition(b))
        } : function() {
            return !1
        }, m.isXML = function(a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        };
        var w = function(a, b, c) {
            for (var d, e = [], f = "", g = b.nodeType ? [b] : b; d = o.match.PSEUDO.exec(a);) f += d[0], a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*" : a;
            for (var h = 0, i = g.length; i > h; h++) m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = J.attr, m.selectors.attrMap = {}, J.find = m, J.expr = m.selectors, J.expr[":"] = J.expr.filters, J.unique = m.uniqueSort, J.text = m.getText, J.isXMLDoc = m.isXML, J.contains = m.contains
    }();
    var hb = /Until$/,
        ib = /^(?:parents|prevUntil|prevAll)/,
        jb = /,/,
        kb = /^.[^:#\[\.,]*$/,
        lb = Array.prototype.slice,
        mb = J.expr.match.globalPOS,
        nb = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    J.fn.extend({
        find: function(a) {
            var b, c, d = this;
            if ("string" != typeof a) return J(a).filter(function() {
                for (b = 0, c = d.length; c > b; b++)
                    if (J.contains(d[b], this)) return !0
            });
            var e, f, g, h = this.pushStack("", "find", a);
            for (b = 0, c = this.length; c > b; b++)
                if (e = h.length, J.find(a, this[b], h), b > 0)
                    for (f = e; f < h.length; f++)
                        for (g = 0; e > g; g++)
                            if (h[g] === h[f]) {
                                h.splice(f--, 1);
                                break
                            }
            return h
        },
        has: function(a) {
            var b = J(a);
            return this.filter(function() {
                for (var a = 0, c = b.length; c > a; a++)
                    if (J.contains(this, b[a])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(j(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(j(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && ("string" == typeof a ? mb.test(a) ? J(a, this.context).index(this[0]) >= 0 : J.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c, d, e = [],
                f = this[0];
            if (J.isArray(a)) {
                for (var g = 1; f && f.ownerDocument && f !== b;) {
                    for (c = 0; c < a.length; c++) J(f).is(a[c]) && e.push({
                        selector: a[c],
                        elem: f,
                        level: g
                    });
                    f = f.parentNode, g++
                }
                return e
            }
            var h = mb.test(a) || "string" != typeof a ? J(a, b || this.context) : 0;
            for (c = 0, d = this.length; d > c; c++)
                for (f = this[c]; f;) {
                    if (h ? h.index(f) > -1 : J.find.matchesSelector(f, a)) {
                        e.push(f);
                        break
                    }
                    if (f = f.parentNode, !f || !f.ownerDocument || f === b || 11 === f.nodeType) break
                }
            return e = e.length > 1 ? J.unique(e) : e, this.pushStack(e, "closest", a)
        },
        index: function(a) {
            return a ? "string" == typeof a ? J.inArray(this[0], J(a)) : J.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? J(a, b) : J.makeArray(a && a.nodeType ? [a] : a),
                d = J.merge(this.get(), c);
            return this.pushStack(i(c[0]) || i(d[0]) ? d : J.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), J.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return J.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return J.dir(a, "parentNode", c)
        },
        next: function(a) {
            return J.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return J.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return J.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return J.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return J.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return J.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return J.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return J.sibling(a.firstChild)
        },
        contents: function(a) {
            return J.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : J.makeArray(a.childNodes)
        }
    }, function(a, b) {
        J.fn[a] = function(c, d) {
            var e = J.map(this, b, c);
            return hb.test(a) || (d = c), d && "string" == typeof d && (e = J.filter(d, e)), e = this.length > 1 && !nb[a] ? J.unique(e) : e, (this.length > 1 || jb.test(d)) && ib.test(a) && (e = e.reverse()), this.pushStack(e, a, lb.call(arguments).join(","))
        }
    }), J.extend({
        filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? J.find.matchesSelector(b[0], a) ? [b[0]] : [] : J.find.matches(a, b)
        },
        dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !J(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
            return e
        },
        nth: function(a, b, c) {
            b = b || 1;
            for (var d = 0; a && (1 !== a.nodeType || ++d !== b); a = a[c]);
            return a
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var ob = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        pb = / jQuery\d+="(?:\d+|null)"/g,
        qb = /^\s+/,
        rb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        sb = /<([\w:]+)/,
        tb = /<tbody/i,
        ub = /<|&#?\w+;/,
        vb = /<(?:script|style)/i,
        wb = /<(?:script|object|embed|option|style)/i,
        xb = new RegExp("<(?:" + ob + ")[\\s/>]", "i"),
        yb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        zb = /\/(java|ecma)script/i,
        Ab = /^\s*<!(?:\[CDATA\[|\-\-)/,
        Bb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, Cb = k(G);
    Bb.optgroup = Bb.option, Bb.tbody = Bb.tfoot = Bb.colgroup = Bb.caption = Bb.thead, Bb.th = Bb.td, J.support.htmlSerialize || (Bb._default = [1, "div<div>", "</div>"]), J.fn.extend({
        text: function(a) {
            return J.access(this, function(a) {
                return a === b ? J.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(a))
            }, null, a, arguments.length)
        },
        wrapAll: function(a) {
            if (J.isFunction(a)) return this.each(function(b) {
                J(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = J(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return J.isFunction(a) ? this.each(function(b) {
                J(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = J(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = J.isFunction(a);
            return this.each(function(c) {
                J(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                1 === this.nodeType && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                1 === this.nodeType && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = J.clean(arguments);
                return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                return a.push.apply(a, J.clean(arguments)), a
            }
        },
        remove: function(a, b) {
            for (var c, d = 0; null != (c = this[d]); d++)(!a || J.filter(a, [c]).length) && (b || 1 !== c.nodeType || (J.cleanData(c.getElementsByTagName("*")), J.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                for (1 === a.nodeType && J.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return J.clone(this, a, b)
            })
        },
        html: function(a) {
            return J.access(this, function(a) {
                var c = this[0] || {}, d = 0,
                    e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(pb, "") : null;
                if (!("string" != typeof a || vb.test(a) || !J.support.leadingWhitespace && qb.test(a) || Bb[(sb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(rb, "<$1></$2>");
                    try {
                        for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (J.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function(a) {
            return this[0] && this[0].parentNode ? J.isFunction(a) ? this.each(function(b) {
                var c = J(this),
                    d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = J(a).detach()), this.each(function() {
                var b = this.nextSibling,
                    c = this.parentNode;
                J(this).remove(), b ? J(b).before(a) : J(c).append(a)
            })) : this.length ? this.pushStack(J(J.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            var e, f, g, h, i = a[0],
                j = [];
            if (!J.support.checkClone && 3 === arguments.length && "string" == typeof i && yb.test(i)) return this.each(function() {
                J(this).domManip(a, c, d, !0)
            });
            if (J.isFunction(i)) return this.each(function(e) {
                var f = J(this);
                a[0] = i.call(this, e, c ? f.html() : b), f.domManip(a, c, d)
            });
            if (this[0]) {
                if (h = i && i.parentNode, e = J.support.parentNode && h && 11 === h.nodeType && h.childNodes.length === this.length ? {
                    fragment: h
                } : J.buildFragment(a, this, j), g = e.fragment, f = 1 === g.childNodes.length ? g = g.firstChild : g.firstChild) {
                    c = c && J.nodeName(f, "tr");
                    for (var k = 0, m = this.length, n = m - 1; m > k; k++) d.call(c ? l(this[k], f) : this[k], e.cacheable || m > 1 && n > k ? J.clone(g, !0, !0) : g)
                }
                j.length && J.each(j, function(a, b) {
                    b.src ? J.ajax({
                        type: "GET",
                        global: !1,
                        url: b.src,
                        async: !1,
                        dataType: "script"
                    }) : J.globalEval((b.text || b.textContent || b.innerHTML || "").replace(Ab, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    }), J.buildFragment = function(a, b, c) {
        var d, e, f, g, h = a[0];
        return b && b[0] && (g = b[0].ownerDocument || b[0]), g.createDocumentFragment || (g = G), !(1 === a.length && "string" == typeof h && h.length < 512 && g === G && "<" === h.charAt(0)) || wb.test(h) || !J.support.checkClone && yb.test(h) || !J.support.html5Clone && xb.test(h) || (e = !0, f = J.fragments[h], f && 1 !== f && (d = f)), d || (d = g.createDocumentFragment(), J.clean(a, g, d, c)), e && (J.fragments[h] = f ? d : 1), {
            fragment: d,
            cacheable: e
        }
    }, J.fragments = {}, J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        J.fn[a] = function(c) {
            var d = [],
                e = J(c),
                f = 1 === this.length && this[0].parentNode;
            if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === e.length) return e[b](this[0]), this;
            for (var g = 0, h = e.length; h > g; g++) {
                var i = (g > 0 ? this.clone(!0) : this).get();
                J(e[g])[b](i), d = d.concat(i)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), J.extend({
        clone: function(a, b, c) {
            var d, e, f, g = J.support.html5Clone || J.isXMLDoc(a) || !xb.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : r(a);
            if (!(J.support.noCloneEvent && J.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || J.isXMLDoc(a)))
                for (n(a, g), d = o(a), e = o(g), f = 0; d[f]; ++f) e[f] && n(d[f], e[f]);
            if (b && (m(a, g), c))
                for (d = o(a), e = o(g), f = 0; d[f]; ++f) m(d[f], e[f]);
            return d = e = null, g
        },
        clean: function(a, b, c, d) {
            var e, f, g, h = [];
            b = b || G, "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || G);
            for (var i, j = 0; null != (i = a[j]); j++)
                if ("number" == typeof i && (i += ""), i) {
                    if ("string" == typeof i)
                        if (ub.test(i)) {
                            i = i.replace(rb, "<$1></$2>");
                            var l, m = (sb.exec(i) || ["", ""])[1].toLowerCase(),
                                n = Bb[m] || Bb._default,
                                o = n[0],
                                p = b.createElement("div"),
                                r = Cb.childNodes;
                            for (b === G ? Cb.appendChild(p) : k(b).appendChild(p), p.innerHTML = n[1] + i + n[2]; o--;) p = p.lastChild;
                            if (!J.support.tbody) {
                                var s = tb.test(i),
                                    t = "table" !== m || s ? "<table>" !== n[1] || s ? [] : p.childNodes : p.firstChild && p.firstChild.childNodes;
                                for (g = t.length - 1; g >= 0; --g) J.nodeName(t[g], "tbody") && !t[g].childNodes.length && t[g].parentNode.removeChild(t[g])
                            }!J.support.leadingWhitespace && qb.test(i) && p.insertBefore(b.createTextNode(qb.exec(i)[0]), p.firstChild), i = p.childNodes, p && (p.parentNode.removeChild(p), r.length > 0 && (l = r[r.length - 1], l && l.parentNode && l.parentNode.removeChild(l)))
                        } else i = b.createTextNode(i);
                    var u;
                    if (!J.support.appendChecked)
                        if (i[0] && "number" == typeof(u = i.length))
                            for (g = 0; u > g; g++) q(i[g]);
                        else q(i);
                    i.nodeType ? h.push(i) : h = J.merge(h, i)
                }
            if (c)
                for (e = function(a) {
                    return !a.type || zb.test(a.type)
                }, j = 0; h[j]; j++)
                    if (f = h[j], d && J.nodeName(f, "script") && (!f.type || zb.test(f.type))) d.push(f.parentNode ? f.parentNode.removeChild(f) : f);
                    else {
                        if (1 === f.nodeType) {
                            var v = J.grep(f.getElementsByTagName("script"), e);
                            h.splice.apply(h, [j + 1, 0].concat(v))
                        }
                        c.appendChild(f)
                    }
            return h
        },
        cleanData: function(a) {
            for (var b, c, d, e = J.cache, f = J.event.special, g = J.support.deleteExpando, h = 0; null != (d = a[h]); h++)
                if ((!d.nodeName || !J.noData[d.nodeName.toLowerCase()]) && (c = d[J.expando])) {
                    if (b = e[c], b && b.events) {
                        for (var i in b.events) f[i] ? J.event.remove(d, i) : J.removeEvent(d, i, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    g ? delete d[J.expando] : d.removeAttribute && d.removeAttribute(J.expando), delete e[c]
                }
        }
    });
    var Db, Eb, Fb, Gb = /alpha\([^)]*\)/i,
        Hb = /opacity=([^)]*)/,
        Ib = /([A-Z]|^ms)/g,
        Jb = /^[\-+]?(?:\d*\.)?\d+$/i,
        Kb = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        Lb = /^([\-+])=([\-+.\de]+)/,
        Mb = /^margin/,
        Nb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Ob = ["Top", "Right", "Bottom", "Left"];
    J.fn.css = function(a, c) {
        return J.access(this, function(a, c, d) {
            return d !== b ? J.style(a, c, d) : J.css(a, c)
        }, a, c, arguments.length > 1)
    }, J.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Db(a, "opacity");
                        return "" === c ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": J.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h = J.camelCase(c),
                    i = a.style,
                    j = J.cssHooks[h];
                if (c = J.cssProps[h] || h, d === b) return j && "get" in j && (f = j.get(a, !1, e)) !== b ? f : i[c];
                if (g = typeof d, "string" === g && (f = Lb.exec(d)) && (d = +(f[1] + 1) * +f[2] + parseFloat(J.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || J.cssNumber[h] || (d += "px"), j && "set" in j && (d = j.set(a, d)) === b))) try {
                    i[c] = d
                } catch (k) {}
            }
        },
        css: function(a, c, d) {
            var e, f;
            return c = J.camelCase(c), f = J.cssHooks[c], c = J.cssProps[c] || c, "cssFloat" === c && (c = "float"), f && "get" in f && (e = f.get(a, !0, d)) !== b ? e : Db ? Db(a, c) : void 0
        },
        swap: function(a, b, c) {
            var d, e, f = {};
            for (e in b) f[e] = a.style[e], a.style[e] = b[e];
            d = c.call(a);
            for (e in b) a.style[e] = f[e];
            return d
        }
    }), J.curCSS = J.css, G.defaultView && G.defaultView.getComputedStyle && (Eb = function(a, b) {
        var c, d, e, f, g = a.style;
        return b = b.replace(Ib, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), "" !== c || J.contains(a.ownerDocument.documentElement, a) || (c = J.style(a, b))), !J.support.pixelMargin && e && Mb.test(b) && Kb.test(c) && (f = g.width, g.width = c, c = e.width, g.width = f), c
    }), G.documentElement.currentStyle && (Fb = function(a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
            g = a.style;
        return null == f && g && (e = g[b]) && (f = e), Kb.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = "fontSize" === b ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)), "" === f ? "auto" : f
    }), Db = Eb || Fb, J.each(["height", "width"], function(a, b) {
        J.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 !== a.offsetWidth ? s(a, b, d) : J.swap(a, Nb, function() {
                    return s(a, b, d)
                }) : void 0
            },
            set: function(a, b) {
                return Jb.test(b) ? b + "px" : b
            }
        }
    }), J.support.opacity || (J.cssHooks.opacity = {
        get: function(a, b) {
            return Hb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = J.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, b >= 1 && "" === J.trim(f.replace(Gb, "")) && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = Gb.test(f) ? f.replace(Gb, e) : f + " " + e)
        }
    }), J(function() {
        J.support.reliableMarginRight || (J.cssHooks.marginRight = {
            get: function(a, b) {
                return J.swap(a, {
                    display: "inline-block"
                }, function() {
                    return b ? Db(a, "margin-right") : a.style.marginRight
                })
            }
        })
    }), J.expr && J.expr.filters && (J.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return 0 === b && 0 === c || !J.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || J.css(a, "display"))
    }, J.expr.filters.visible = function(a) {
        return !J.expr.filters.hidden(a)
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        J.cssHooks[a + b] = {
            expand: function(c) {
                var d, e = "string" == typeof c ? c.split(" ") : [c],
                    f = {};
                for (d = 0; 4 > d; d++) f[a + Ob[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        }
    });
    var Pb, Qb, Rb = /%20/g,
        Sb = /\[\]$/,
        Tb = /\r?\n/g,
        Ub = /#.*$/,
        Vb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Wb = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Xb = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Yb = /^(?:GET|HEAD)$/,
        Zb = /^\/\//,
        $b = /\?/,
        _b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        ac = /^(?:select|textarea)/i,
        bc = /\s+/,
        cc = /([?&])_=[^&]*/,
        dc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        ec = J.fn.load,
        fc = {}, gc = {}, hc = ["*/"] + ["*"];
    try {
        Pb = I.href
    } catch (ic) {
        Pb = G.createElement("a"), Pb.href = "", Pb = Pb.href
    }
    Qb = dc.exec(Pb.toLowerCase()) || [], J.fn.extend({
        load: function(a, c, d) {
            if ("string" != typeof a && ec) return ec.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var f = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var g = "GET";
            c && (J.isFunction(c) ? (d = c, c = b) : "object" == typeof c && (c = J.param(c, J.ajaxSettings.traditional), g = "POST"));
            var h = this;
            return J.ajax({
                url: a,
                type: g,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function(a) {
                        c = a
                    }), h.html(f ? J("<div>").append(c.replace(_b, "")).find(f) : c)), d && h.each(d, [c, b, a])
                }
            }), this
        },
        serialize: function() {
            return J.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? J.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || ac.test(this.nodeName) || Wb.test(this.type))
            }).map(function(a, b) {
                var c = J(this).val();
                return null == c ? null : J.isArray(c) ? J.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Tb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Tb, "\r\n")
                }
            }).get()
        }
    }), J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        J.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), J.each(["get", "post"], function(a, c) {
        J[c] = function(a, d, e, f) {
            return J.isFunction(d) && (f = f || e, e = d, d = b), J.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }), J.extend({
        getScript: function(a, c) {
            return J.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return J.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            return b ? v(a, J.ajaxSettings) : (b = a, a = J.ajaxSettings), v(a, b), a
        },
        ajaxSettings: {
            url: Pb,
            isLocal: Xb.test(Qb[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": hc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: t(fc),
        ajaxTransport: t(gc),
        ajax: function(a, c) {
            function d(a, c, d, g) {
                if (2 !== v) {
                    v = 2, i && clearTimeout(i), h = b, f = g || "", w.readyState = a > 0 ? 4 : 0;
                    var j, l, s, t, u, z = c,
                        A = d ? x(m, w, d) : b;
                    if (a >= 200 && 300 > a || 304 === a)
                        if (m.ifModified && ((t = w.getResponseHeader("Last-Modified")) && (J.lastModified[e] = t), (u = w.getResponseHeader("Etag")) && (J.etag[e] = u)), 304 === a) z = "notmodified", j = !0;
                        else try {
                            l = y(m, A), z = "success", j = !0
                        } catch (B) {
                            z = "parsererror", s = B
                        } else s = z, (!z || a) && (z = "error", 0 > a && (a = 0));
                    w.status = a, w.statusText = "" + (c || z), j ? p.resolveWith(n, [l, z, w]) : p.rejectWith(n, [w, z, s]), w.statusCode(r), r = b, k && o.trigger("ajax" + (j ? "Success" : "Error"), [w, m, j ? l : s]), q.fireWith(n, [w, z]), k && (o.trigger("ajaxComplete", [w, m]), --J.active || J.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = J.ajaxSetup({}, c),
                n = m.context || m,
                o = n !== m && (n.nodeType || n instanceof J) ? J(n) : J.event,
                p = J.Deferred(),
                q = J.Callbacks("once memory"),
                r = m.statusCode || {}, s = {}, t = {}, v = 0,
                w = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!v) {
                            var c = a.toLowerCase();
                            a = t[c] = t[c] || a, s[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === v ? f : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (2 === v) {
                            if (!g)
                                for (g = {}; c = Vb.exec(f);) g[c[1].toLowerCase()] = c[2];
                            c = g[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) {
                        return v || (m.mimeType = a), this
                    },
                    abort: function(a) {
                        return a = a || "abort", h && h.abort(a), d(0, a), this
                    }
                };
            if (p.promise(w), w.success = w.done, w.error = w.fail, w.complete = q.add, w.statusCode = function(a) {
                if (a) {
                    var b;
                    if (2 > v)
                        for (b in a) r[b] = [r[b], a[b]];
                    else b = a[w.status], w.then(b, b)
                }
                return this
            }, m.url = ((a || m.url) + "").replace(Ub, "").replace(Zb, Qb[1] + "//"), m.dataTypes = J.trim(m.dataType || "*").toLowerCase().split(bc), null == m.crossDomain && (j = dc.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] == Qb[1] && j[2] == Qb[2] && (j[3] || ("http:" === j[1] ? 80 : 443)) == (Qb[3] || ("http:" === Qb[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = J.param(m.data, m.traditional)), u(fc, m, c, w), 2 === v) return !1;
            if (k = m.global, m.type = m.type.toUpperCase(), m.hasContent = !Yb.test(m.type), k && 0 === J.active++ && J.event.trigger("ajaxStart"), !m.hasContent && (m.data && (m.url += ($b.test(m.url) ? "&" : "?") + m.data, delete m.data), e = m.url, m.cache === !1)) {
                var z = J.now(),
                    A = m.url.replace(cc, "$1_=" + z);
                m.url = A + (A === m.url ? ($b.test(m.url) ? "&" : "?") + "_=" + z : "")
            }(m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), m.ifModified && (e = e || m.url, J.lastModified[e] && w.setRequestHeader("If-Modified-Since", J.lastModified[e]), J.etag[e] && w.setRequestHeader("If-None-Match", J.etag[e])), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + hc + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === v)) return w.abort(), !1;
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) w[l](m[l]);
            if (h = u(gc, m, c, w)) {
                w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    v = 1, h.send(s, d)
                } catch (B) {
                    if (!(2 > v)) throw B;
                    d(-1, B)
                }
            } else d(-1, "No Transport");
            return w
        },
        param: function(a, c) {
            var d = [],
                e = function(a, b) {
                    b = J.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (c === b && (c = J.ajaxSettings.traditional), J.isArray(a) || a.jquery && !J.isPlainObject(a)) J.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (var f in a) w(f, a[f], c, e);
            return d.join("&").replace(Rb, "+")
        }
    }), J.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var jc = J.now(),
        kc = /(\=)\?(&|$)|\?\?/i;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return J.expando + "_" + jc++
        }
    }), J.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e = "string" == typeof b.data && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if ("jsonp" === b.dataTypes[0] || b.jsonp !== !1 && (kc.test(b.url) || e && kc.test(b.data))) {
            var f, g = b.jsonpCallback = J.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                h = a[g],
                i = b.url,
                j = b.data,
                k = "$1" + g + "$2";
            return b.jsonp !== !1 && (i = i.replace(kc, k), b.url === i && (e && (j = j.replace(kc, k)), b.data === j && (i += (/\?/.test(i) ? "&" : "?") + b.jsonp + "=" + g))), b.url = i, b.data = j, a[g] = function(a) {
                f = [a]
            }, d.always(function() {
                a[g] = h, f && J.isFunction(h) && a[g](f[0])
            }), b.converters["script json"] = function() {
                return f || J.error(g + " was not called"), f[0]
            }, b.dataTypes[0] = "json", "script"
        }
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                return J.globalEval(a), a
            }
        }
    }), J.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), J.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = G.head || G.getElementsByTagName("head")[0] || G.documentElement;
            return {
                send: function(e, f) {
                    c = G.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
                        (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
                    }, d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var lc, mc = a.ActiveXObject ? function() {
            for (var a in lc) lc[a](0, 1)
        } : !1,
        nc = 0;
    J.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && z() || A()
    } : z,
    function(a) {
        J.extend(J.support, {
            ajax: !! a,
            cors: !! a && "withCredentials" in a
        })
    }(J.ajaxSettings.xhr()), J.support.ajax && J.ajaxTransport(function(c) {
        if (!c.crossDomain || J.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
                        for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h])
                    } catch (j) {}
                    i.send(c.hasContent && c.data || null), d = function(a, e) {
                        var h, j, k, l, m;
                        try {
                            if (d && (e || 4 === i.readyState))
                                if (d = b, g && (i.onreadystatechange = J.noop, mc && delete lc[g]), e) 4 !== i.readyState && i.abort();
                                else {
                                    h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                                    try {
                                        l.text = i.responseText
                                    } catch (a) {}
                                    try {
                                        j = i.statusText
                                    } catch (n) {
                                        j = ""
                                    }
                                    h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                                }
                        } catch (o) {
                            e || f(-1, o)
                        }
                        l && f(h, j, l, k)
                    }, c.async && 4 !== i.readyState ? (g = ++nc, mc && (lc || (lc = {}, J(a).unload(mc)), lc[g] = d), i.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    });
    var oc, pc, qc, rc, sc = {}, tc = /^(?:toggle|show|hide)$/,
        uc = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        vc = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    J.fn.extend({
        show: function(a, b, c) {
            var d, e;
            if (a || 0 === a) return this.animate(D("show", 3), a, b, c);
            for (var f = 0, g = this.length; g > f; f++) d = this[f], d.style && (e = d.style.display, J._data(d, "olddisplay") || "none" !== e || (e = d.style.display = ""), ("" === e && "none" === J.css(d, "display") || !J.contains(d.ownerDocument.documentElement, d)) && J._data(d, "olddisplay", E(d.nodeName)));
            for (f = 0; g > f; f++) d = this[f], d.style && (e = d.style.display, ("" === e || "none" === e) && (d.style.display = J._data(d, "olddisplay") || ""));
            return this
        },
        hide: function(a, b, c) {
            if (a || 0 === a) return this.animate(D("hide", 3), a, b, c);
            for (var d, e, f = 0, g = this.length; g > f; f++) d = this[f], d.style && (e = J.css(d, "display"), "none" === e || J._data(d, "olddisplay") || J._data(d, "olddisplay", e));
            for (f = 0; g > f; f++) this[f].style && (this[f].style.display = "none");
            return this
        },
        _toggle: J.fn.toggle,
        toggle: function(a, b, c) {
            var d = "boolean" == typeof a;
            return J.isFunction(a) && J.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function() {
                var b = d ? a : J(this).is(":hidden");
                J(this)[b ? "show" : "hide"]()
            }) : this.animate(D("toggle", 3), a, b, c), this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            function e() {
                f.queue === !1 && J._mark(this);
                var b, c, d, e, g, h, i, j, k, l, m, n = J.extend({}, f),
                    o = 1 === this.nodeType,
                    p = o && J(this).is(":hidden");
                n.animatedProperties = {};
                for (d in a)
                    if (b = J.camelCase(d), d !== b && (a[b] = a[d], delete a[d]), (g = J.cssHooks[b]) && "expand" in g) {
                        h = g.expand(a[b]), delete a[b];
                        for (d in h) d in a || (a[d] = h[d])
                    }
                for (b in a) {
                    if (c = a[b], J.isArray(c) ? (n.animatedProperties[b] = c[1], c = a[b] = c[0]) : n.animatedProperties[b] = n.specialEasing && n.specialEasing[b] || n.easing || "swing", "hide" === c && p || "show" === c && !p) return n.complete.call(this);
                    !o || "height" !== b && "width" !== b || (n.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === J.css(this, "display") && "none" === J.css(this, "float") && (J.support.inlineBlockNeedsLayout && "inline" !== E(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                null != n.overflow && (this.style.overflow = "hidden");
                for (d in a) e = new J.fx(this, n, d), c = a[d], tc.test(c) ? (m = J._data(this, "toggle" + d) || ("toggle" === c ? p ? "show" : "hide" : 0), m ? (J._data(this, "toggle" + d, "show" === m ? "hide" : "show"), e[m]()) : e[c]()) : (i = uc.exec(c), j = e.cur(), i ? (k = parseFloat(i[2]), l = i[3] || (J.cssNumber[d] ? "" : "px"), "px" !== l && (J.style(this, d, (k || 1) + l), j = (k || 1) / e.cur() * j, J.style(this, d, j + l)), i[1] && (k = ("-=" === i[1] ? -1 : 1) * k + j), e.custom(j, k, l)) : e.custom(j, c, ""));
                return !0
            }
            var f = J.speed(b, c, d);
            return J.isEmptyObject(a) ? this.each(f.complete, [!1]) : (a = J.extend({}, a), f.queue === !1 ? this.each(e) : this.queue(f.queue, e))
        },
        stop: function(a, c, d) {
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                function b(a, b, c) {
                    var e = b[c];
                    J.removeData(a, c, !0), e.stop(d)
                }
                var c, e = !1,
                    f = J.timers,
                    g = J._data(this);
                if (d || J._unmark(!0, this), null == a)
                    for (c in g) g[c] && g[c].stop && c.indexOf(".run") === c.length - 4 && b(this, g, c);
                else g[c = a + ".run"] && g[c].stop && b(this, g, c);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (d ? f[c](!0) : f[c].saveState(), e = !0, f.splice(c, 1));
                d && e || J.dequeue(this, a)
            })
        }
    }), J.each({
        slideDown: D("show", 1),
        slideUp: D("hide", 1),
        slideToggle: D("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        J.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), J.extend({
        speed: function(a, b, c) {
            var d = a && "object" == typeof a ? J.extend({}, a) : {
                complete: c || !c && b || J.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !J.isFunction(b) && b
            };
            return d.duration = J.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in J.fx.speeds ? J.fx.speeds[d.duration] : J.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function(a) {
                J.isFunction(d.old) && d.old.call(this), d.queue ? J.dequeue(this, d.queue) : a !== !1 && J._unmark(this)
            }, d
        },
        easing: {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return -Math.cos(a * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), J.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (J.fx.step[this.prop] || J.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var a, b = J.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b : 0 : a
        },
        custom: function(a, c, d) {
            function e(a) {
                return f.step(a)
            }
            var f = this,
                g = J.fx;
            this.startTime = rc || B(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (J.cssNumber[this.prop] ? "" : "px"), e.queue = this.options.queue, e.elem = this.elem, e.saveState = function() {
                J._data(f.elem, "fxshow" + f.prop) === b && (f.options.hide ? J._data(f.elem, "fxshow" + f.prop, f.start) : f.options.show && J._data(f.elem, "fxshow" + f.prop, f.end))
            }, e() && J.timers.push(e) && !qc && (qc = setInterval(g.tick, g.interval))
        },
        show: function() {
            var a = J._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || J.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), J(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = J._data(this.elem, "fxshow" + this.prop) || J.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b, c, d, e = rc || B(),
                f = !0,
                g = this.elem,
                h = this.options;
            if (a || e >= h.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), h.animatedProperties[this.prop] = !0;
                for (b in h.animatedProperties) h.animatedProperties[b] !== !0 && (f = !1);
                if (f) {
                    if (null == h.overflow || J.support.shrinkWrapBlocks || J.each(["", "X", "Y"], function(a, b) {
                        g.style["overflow" + b] = h.overflow[a]
                    }), h.hide && J(g).hide(), h.hide || h.show)
                        for (b in h.animatedProperties) J.style(g, b, h.orig[b]), J.removeData(g, "fxshow" + b, !0), J.removeData(g, "toggle" + b, !0);
                    d = h.complete, d && (h.complete = !1, d.call(g))
                }
                return !1
            }
            return 1 / 0 == h.duration ? this.now = e : (c = e - this.startTime, this.state = c / h.duration, this.pos = J.easing[h.animatedProperties[this.prop]](this.state, c, 0, 1, h.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, J.extend(J.fx, {
        tick: function() {
            for (var a, b = J.timers, c = 0; c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || J.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(qc), qc = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                J.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), J.each(vc.concat.apply([], vc), function(a, b) {
        b.indexOf("margin") && (J.fx.step[b] = function(a) {
            J.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), J.expr && J.expr.filters && (J.expr.filters.animated = function(a) {
        return J.grep(J.timers, function(b) {
            return a === b.elem
        }).length
    });
    var wc, xc = /^t(?:able|d|h)$/i,
        yc = /^(?:body|html)$/i;
    wc = "getBoundingClientRect" in G.documentElement ? function(a, b, c, d) {
        try {
            d = a.getBoundingClientRect()
        } catch (e) {}
        if (!d || !J.contains(c, a)) return d ? {
            top: d.top,
            left: d.left
        } : {
            top: 0,
            left: 0
        };
        var f = b.body,
            g = F(b),
            h = c.clientTop || f.clientTop || 0,
            i = c.clientLeft || f.clientLeft || 0,
            j = g.pageYOffset || J.support.boxModel && c.scrollTop || f.scrollTop,
            k = g.pageXOffset || J.support.boxModel && c.scrollLeft || f.scrollLeft,
            l = d.top + j - h,
            m = d.left + k - i;
        return {
            top: l,
            left: m
        }
    } : function(a, b, c) {
        for (var d, e = a.offsetParent, f = a, g = b.body, h = b.defaultView, i = h ? h.getComputedStyle(a, null) : a.currentStyle, j = a.offsetTop, k = a.offsetLeft;
            (a = a.parentNode) && a !== g && a !== c && (!J.support.fixedPosition || "fixed" !== i.position);) d = h ? h.getComputedStyle(a, null) : a.currentStyle, j -= a.scrollTop, k -= a.scrollLeft, a === e && (j += a.offsetTop, k += a.offsetLeft, !J.support.doesNotAddBorder || J.support.doesAddBorderForTableAndCells && xc.test(a.nodeName) || (j += parseFloat(d.borderTopWidth) || 0, k += parseFloat(d.borderLeftWidth) || 0), f = e, e = a.offsetParent), J.support.subtractsBorderForOverflowNotVisible && "visible" !== d.overflow && (j += parseFloat(d.borderTopWidth) || 0, k += parseFloat(d.borderLeftWidth) || 0), i = d;
        return ("relative" === i.position || "static" === i.position) && (j += g.offsetTop, k += g.offsetLeft), J.support.fixedPosition && "fixed" === i.position && (j += Math.max(c.scrollTop, g.scrollTop), k += Math.max(c.scrollLeft, g.scrollLeft)), {
            top: j,
            left: k
        }
    }, J.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            J.offset.setOffset(this, a, b)
        });
        var c = this[0],
            d = c && c.ownerDocument;
        return d ? c === d.body ? J.offset.bodyOffset(c) : wc(c, d, d.documentElement) : null
    }, J.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            return J.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(J.css(a, "marginTop")) || 0, c += parseFloat(J.css(a, "marginLeft")) || 0), {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = J.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = J(a),
                h = g.offset(),
                i = J.css(a, "top"),
                j = J.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && J.inArray("auto", [i, j]) > -1,
                l = {}, m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), J.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l)
        }
    }, J.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = yc.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            return c.top -= parseFloat(J.css(a, "marginTop")) || 0, c.left -= parseFloat(J.css(a, "marginLeft")) || 0, d.top += parseFloat(J.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(J.css(b[0], "borderLeftWidth")) || 0, {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || G.body; a && !yc.test(a.nodeName) && "static" === J.css(a, "position");) a = a.offsetParent;
                return a
            })
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        J.fn[a] = function(e) {
            return J.access(this, function(a, e, f) {
                var g = F(a);
                return f === b ? g ? c in g ? g[c] : J.support.boxModel && g.document.documentElement[e] || g.document.body[e] : a[e] : (g ? g.scrollTo(d ? J(g).scrollLeft() : f, d ? f : J(g).scrollTop()) : a[e] = f, void 0)
            }, a, e, arguments.length, null)
        }
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        var d = "client" + a,
            e = "scroll" + a,
            f = "offset" + a;
        J.fn["inner" + a] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(J.css(a, c, "padding")) : this[c]() : null
        }, J.fn["outer" + a] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(J.css(b, c, a ? "margin" : "border")) : this[c]() : null
        }, J.fn[c] = function(a) {
            return J.access(this, function(a, c, g) {
                var h, i, j, k;
                return J.isWindow(a) ? (h = a.document, i = h.documentElement[d], J.support.boxModel && i || h.body && h.body[d] || i) : 9 === a.nodeType ? (h = a.documentElement, h[d] >= h[e] ? h[d] : Math.max(a.body[e], h[e], a.body[f], h[f])) : g === b ? (j = J.css(a, c), k = parseFloat(j), J.isNumeric(k) ? k : j) : (J(a).css(c, g), void 0)
            }, c, a, arguments.length, null)
        }
    }), a.jQuery = a.$ = J, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return J
    })
}(window), define("jquery172", function() {}), define("jquery", ["require", "jquery172"], function(a) {
    "use strict";
    var b = a("jquery172");
    return window.jQuery ? window.jQuery : b
}), this.JSON || (JSON = function() {
    function f(a) {
        return 10 > a ? "0" + a : a
    }

    function quote(a) {
        return escapeable.lastIndex = 0, escapeable.test(a) ? '"' + a.replace(escapeable, function(a) {
            var b = meta[a];
            return "string" == typeof b ? b : "\\u" + ("0000" + (+a.charCodeAt(0)).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function str(a, b) {
        var c, d, e, f, g, h = gap,
            i = b[a];
        switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
            case "string":
                return quote(i);
            case "number":
                return isFinite(i) ? String(i) : "null";
            case "boolean":
            case "null":
                return String(i);
            case "object":
                if (!i) return "null";
                if (gap += indent, g = [], "number" == typeof i.length && !i.propertyIsEnumerable("length")) {
                    for (f = i.length, c = 0; f > c; c += 1) g[c] = str(c, i) || "null";
                    return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e
                }
                if (rep && "object" == typeof rep)
                    for (f = rep.length, c = 0; f > c; c += 1) d = rep[c], "string" == typeof d && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                else
                    for (d in i) Object.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e
        }
    }
    Date.prototype.toJSON = function() {
        return this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z"
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    };
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapeable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
    return {
        stringify: function(a, b, c) {
            var d;
            if (gap = "", indent = "", "number" == typeof c)
                for (d = 0; c > d; d += 1) indent += " ";
            else "string" == typeof c && (indent = c); if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON.stringify");
            return str("", {
                "": a
            })
        },
        parse: function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && "object" == typeof e)
                    for (c in e) Object.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
                return reviver.call(a, b, e)
            }
            var j;
            if (cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                return "\\u" + ("0000" + (+a.charCodeAt(0)).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        }
    }
}()), define("json2", function() {}), // Copyright 2009-2012 by contributors, MIT License
// vim: ts=4 sts=4 sw=4 expandtab
function(a) {
    "function" == typeof define ? define("vendor/es5-shim", a) : "function" == typeof YUI && YUI.add("es5", a), a()
}(function() {
    function a() {}

    function b(a) {
        return a = +a, a !== a ? a = 0 : 0 !== a && a !== 1 / 0 && a !== -(1 / 0) && (a = (a > 0 || -1) * Math.floor(Math.abs(a))), a
    }

    function c(a) {
        var b = typeof a;
        return null === a || "undefined" === b || "boolean" === b || "number" === b || "string" === b
    }

    function d(a) {
        var b, d, e;
        if (c(a)) return a;
        if (d = a.valueOf, "function" == typeof d && (b = d.call(a), c(b))) return b;
        if (e = a.toString, "function" == typeof e && (b = e.call(a), c(b))) return b;
        throw new TypeError
    }
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if ("function" != typeof c) throw new TypeError("Function.prototype.bind called on incompatible " + c);
        var d = m.call(arguments, 1),
            e = function() {
                if (this instanceof e) {
                    var a = c.apply(this, d.concat(m.call(arguments)));
                    return Object(a) === a ? a : this
                }
                return c.apply(b, d.concat(m.call(arguments)))
            };
        return c.prototype && (a.prototype = c.prototype, e.prototype = new a, a.prototype = null), e
    });
    var e, f, g, h, i, j = Function.prototype.call,
        k = Array.prototype,
        l = Object.prototype,
        m = k.slice,
        n = j.bind(l.toString),
        o = j.bind(l.hasOwnProperty);
    if ((i = o(l, "__defineGetter__")) && (e = j.bind(l.__defineGetter__), f = j.bind(l.__defineSetter__), g = j.bind(l.__lookupGetter__), h = j.bind(l.__lookupSetter__)), 2 != [1, 2].splice(0).length) {
        var p = Array.prototype.splice;
        Array.prototype.splice = function() {
            function a(a) {
                for (var b = []; a--;) b.unshift(a);
                return b
            }
            var b, c = [];
            return c.splice.bind(c, 0, 0).apply(null, a(20)), c.splice.bind(c, 0, 0).apply(null, a(26)), b = c.length, c.splice(5, 0, "XXX"), b + 1 == c.length ? !0 : void 0
        }() ? function(a, b) {
            return arguments.length ? p.apply(this, [void 0 === a ? 0 : a, void 0 === b ? this.length - a : b].concat(m.call(arguments, 2))) : []
        } : function(a, b) {
            var c, d = m.call(arguments, 2),
                e = d.length;
            if (!arguments.length) return [];
            if (void 0 === a && (a = 0), void 0 === b && (b = this.length - a), e > 0) {
                if (0 >= b) {
                    if (a == this.length) return this.push.apply(this, d), [];
                    if (0 == a) return this.unshift.apply(this, d), []
                }
                return c = m.call(this, a, a + b), d.push.apply(d, m.call(this, a + b, this.length)), d.unshift.apply(d, m.call(this, 0, a)), d.unshift(0, this.length), p.apply(this, d), c
            }
            return p.call(this, a, b)
        }
    }
    if (1 != [].unshift(0)) {
        var q = Array.prototype.unshift;
        Array.prototype.unshift = function() {
            return q.apply(this, arguments), this.length
        }
    }
    Array.isArray || (Array.isArray = function(a) {
        return "[object Array]" == n(a)
    });
    var r = Object("a"),
        s = "a" != r[0] || !(0 in r);
    if (Array.prototype.forEach || (Array.prototype.forEach = function(a) {
        var b = G(this),
            c = s && "[object String]" == n(this) ? this.split("") : b,
            d = arguments[1],
            e = -1,
            f = c.length >>> 0;
        if ("[object Function]" != n(a)) throw new TypeError;
        for (; ++e < f;) e in c && a.call(d, c[e], e, b)
    }), Array.prototype.map || (Array.prototype.map = function(a) {
        var b = G(this),
            c = s && "[object String]" == n(this) ? this.split("") : b,
            d = c.length >>> 0,
            e = Array(d),
            f = arguments[1];
        if ("[object Function]" != n(a)) throw new TypeError(a + " is not a function");
        for (var g = 0; d > g; g++) g in c && (e[g] = a.call(f, c[g], g, b));
        return e
    }), Array.prototype.filter || (Array.prototype.filter = function(a) {
        var b, c = G(this),
            d = s && "[object String]" == n(this) ? this.split("") : c,
            e = d.length >>> 0,
            f = [],
            g = arguments[1];
        if ("[object Function]" != n(a)) throw new TypeError(a + " is not a function");
        for (var h = 0; e > h; h++) h in d && (b = d[h], a.call(g, b, h, c) && f.push(b));
        return f
    }), Array.prototype.every || (Array.prototype.every = function(a) {
        var b = G(this),
            c = s && "[object String]" == n(this) ? this.split("") : b,
            d = c.length >>> 0,
            e = arguments[1];
        if ("[object Function]" != n(a)) throw new TypeError(a + " is not a function");
        for (var f = 0; d > f; f++)
            if (f in c && !a.call(e, c[f], f, b)) return !1;
        return !0
    }), Array.prototype.some || (Array.prototype.some = function(a) {
        var b = G(this),
            c = s && "[object String]" == n(this) ? this.split("") : b,
            d = c.length >>> 0,
            e = arguments[1];
        if ("[object Function]" != n(a)) throw new TypeError(a + " is not a function");
        for (var f = 0; d > f; f++)
            if (f in c && a.call(e, c[f], f, b)) return !0;
        return !1
    }), Array.prototype.reduce || (Array.prototype.reduce = function(a) {
        var b = G(this),
            c = s && "[object String]" == n(this) ? this.split("") : b,
            d = c.length >>> 0;
        if ("[object Function]" != n(a)) throw new TypeError(a + " is not a function");
        if (!d && 1 == arguments.length) throw new TypeError("reduce of empty array with no initial value");
        var e, f = 0;
        if (arguments.length >= 2) e = arguments[1];
        else
            for (;;) {
                if (f in c) {
                    e = c[f++];
                    break
                }
                if (++f >= d) throw new TypeError("reduce of empty array with no initial value")
            }
        for (; d > f; f++) f in c && (e = a.call(void 0, e, c[f], f, b));
        return e
    }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function(a) {
        var b = G(this),
            c = s && "[object String]" == n(this) ? this.split("") : b,
            d = c.length >>> 0;
        if ("[object Function]" != n(a)) throw new TypeError(a + " is not a function");
        if (!d && 1 == arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
        var e, f = d - 1;
        if (arguments.length >= 2) e = arguments[1];
        else
            for (;;) {
                if (f in c) {
                    e = c[f--];
                    break
                }
                if (--f < 0) throw new TypeError("reduceRight of empty array with no initial value")
            }
        if (0 > f) return e;
        do f in this && (e = a.call(void 0, e, c[f], f, b)); while (f--);
        return e
    }), Array.prototype.indexOf && -1 == [0, 1].indexOf(1, 2) || (Array.prototype.indexOf = function(a) {
        var c = s && "[object String]" == n(this) ? this.split("") : G(this),
            d = c.length >>> 0;
        if (!d) return -1;
        var e = 0;
        for (arguments.length > 1 && (e = b(arguments[1])), e = e >= 0 ? e : Math.max(0, d + e); d > e; e++)
            if (e in c && c[e] === a) return e;
        return -1
    }), Array.prototype.lastIndexOf && -1 == [0, 1].lastIndexOf(0, -3) || (Array.prototype.lastIndexOf = function(a) {
        var c = s && "[object String]" == n(this) ? this.split("") : G(this),
            d = c.length >>> 0;
        if (!d) return -1;
        var e = d - 1;
        for (arguments.length > 1 && (e = Math.min(e, b(arguments[1]))), e = e >= 0 ? e : d - Math.abs(e); e >= 0; e--)
            if (e in c && a === c[e]) return e;
        return -1
    }), !Object.keys) {
        var t = !0,
            u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            v = u.length;
        for (var w in {
            toString: null
        }) t = !1;
        Object.keys = function H(a) {
            if ("object" != typeof a && "function" != typeof a || null === a) throw new TypeError("Object.keys called on a non-object");
            var H = [];
            for (var b in a) o(a, b) && H.push(b);
            if (t)
                for (var c = 0, d = v; d > c; c++) {
                    var e = u[c];
                    o(a, e) && H.push(e)
                }
            return H
        }
    }
    var x = -621987552e5,
        y = "-000001";
    Date.prototype.toISOString && -1 !== new Date(x).toISOString().indexOf(y) || (Date.prototype.toISOString = function() {
        var a, b, c, d, e;
        if (!isFinite(this)) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
        for (d = this.getUTCFullYear(), e = this.getUTCMonth(), d += Math.floor(e / 12), e = (e % 12 + 12) % 12, a = [e + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()], d = (0 > d ? "-" : d > 9999 ? "+" : "") + ("00000" + Math.abs(d)).slice(d >= 0 && 9999 >= d ? -4 : -6), b = a.length; b--;) c = a[b], 10 > c && (a[b] = "0" + c);
        return d + "-" + a.slice(0, 2).join("-") + "T" + a.slice(2).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice(-3) + "Z"
    });
    var z = !1;
    try {
        z = Date.prototype.toJSON && null === new Date(0 / 0).toJSON() && -1 !== new Date(x).toJSON().indexOf(y) && Date.prototype.toJSON.call({
            toISOString: function() {
                return !0
            }
        })
    } catch (A) {}
    z || (Date.prototype.toJSON = function() {
        var a, b = Object(this),
            c = d(b);
        if ("number" == typeof c && !isFinite(c)) return null;
        if (a = b.toISOString, "function" != typeof a) throw new TypeError("toISOString property is not callable");
        return a.call(b)
    }), Date = function(a) {
        function b(c, d, e, f, g, h, i) {
            var j = arguments.length;
            if (this instanceof a) {
                var k = 1 == j && String(c) === c ? new a(b.parse(c)) : j >= 7 ? new a(c, d, e, f, g, h, i) : j >= 6 ? new a(c, d, e, f, g, h) : j >= 5 ? new a(c, d, e, f, g) : j >= 4 ? new a(c, d, e, f) : j >= 3 ? new a(c, d, e) : j >= 2 ? new a(c, d) : j >= 1 ? new a(c) : new a;
                return k.constructor = b, k
            }
            return a.apply(this, arguments)
        }

        function c(a, b) {
            var c = b > 1 ? 1 : 0;
            return f[b] + Math.floor((a - 1969 + c) / 4) - Math.floor((a - 1901 + c) / 100) + Math.floor((a - 1601 + c) / 400) + 365 * (a - 1970)
        }

        function d(b) {
            return Number(new a(1970, 0, 1, 0, 0, 0, b))
        }
        var e = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
            f = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
        for (var g in a) b[g] = a[g];
        return b.now = a.now, b.UTC = a.UTC, b.prototype = a.prototype, b.prototype.constructor = b, b.parse = function(b) {
            var f = e.exec(b);
            if (f) {
                var g, h = Number(f[1]),
                    i = Number(f[2] || 1) - 1,
                    j = Number(f[3] || 1) - 1,
                    k = Number(f[4] || 0),
                    l = Number(f[5] || 0),
                    m = Number(f[6] || 0),
                    n = Math.floor(1e3 * Number(f[7] || 0)),
                    o = Boolean(f[4] && !f[8]),
                    p = "-" === f[9] ? 1 : -1,
                    q = Number(f[10] || 0),
                    r = Number(f[11] || 0);
                return (l > 0 || m > 0 || n > 0 ? 24 : 25) > k && 60 > l && 60 > m && 1e3 > n && i > -1 && 12 > i && 24 > q && 60 > r && j > -1 && j < c(h, i + 1) - c(h, i) && (g = 60 * (24 * (c(h, i) + j) + k + q * p), g = 1e3 * (60 * (g + l + r * p) + m) + n, o && (g = d(g)), g >= -864e13 && 864e13 >= g) ? g : 0 / 0
            }
            return a.parse.apply(this, arguments)
        }, b
    }(Date), Date.now || (Date.now = function() {
        return (new Date).getTime()
    }), Number.prototype.toFixed && "0.000" === 8e-5.toFixed(3) && "0" !== .9.toFixed(0) && "1.25" === 1.255.toFixed(2) && "1000000000000000128" === 0xde0b6b3a7640080.toFixed(0) || ! function() {
        function a(a, b) {
            for (var c = -1; ++c < g;) b += a * h[c], h[c] = b % f, b = Math.floor(b / f)
        }

        function b(a) {
            for (var b = g, c = 0; --b >= 0;) c += h[b], h[b] = Math.floor(c / a), c = c % a * f
        }

        function c() {
            for (var a = g, b = ""; --a >= 0;)
                if ("" !== b || 0 === a || 0 !== h[a]) {
                    var c = String(h[a]);
                    "" === b ? b = c : b += "0000000".slice(0, 7 - c.length) + c
                }
            return b
        }

        function d(a, b, c) {
            return 0 === b ? c : 1 === b % 2 ? d(a, b - 1, c * a) : d(a * a, b / 2, c)
        }

        function e(a) {
            for (var b = 0; a >= 4096;) b += 12, a /= 4096;
            for (; a >= 2;) b += 1, a /= 2;
            return b
        }
        var f, g, h;
        f = 1e7, g = 6, h = [0, 0, 0, 0, 0, 0], Number.prototype.toFixed = function(f) {
            var g, h, i, j, k, l, m, n;
            if (g = Number(f), g = g !== g ? 0 : Math.floor(g), 0 > g || g > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
            if (h = Number(this), h !== h) return "NaN";
            if (-1e21 >= h || h >= 1e21) return String(h);
            if (i = "", 0 > h && (i = "-", h = -h), j = "0", h > 1e-21)
                if (k = e(h * d(2, 69, 1)) - 69, l = 0 > k ? h * d(2, -k, 1) : h / d(2, k, 1), l *= 4503599627370496, k = 52 - k, k > 0) {
                    for (a(0, l), m = g; m >= 7;) a(1e7, 0), m -= 7;
                    for (a(d(10, m, 1), 0), m = k - 1; m >= 23;) b(1 << 23), m -= 23;
                    b(1 << m), a(1, 1), b(2), j = c()
                } else a(0, l), a(1 << -k, 0), j = c() + "0.00000000000000000000".slice(2, 2 + g);
            return g > 0 ? (n = j.length, j = g >= n ? i + "0.0000000000000000000".slice(0, g - n + 2) + j : i + j.slice(0, n - g) + "." + j.slice(n - g)) : j = i + j, j
        }
    }();
    var B = String.prototype.split;
    if (2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 0 === "".split(/.?/).length || ".".split(/()()/).length > 1 ? ! function() {
        var a = void 0 === /()??/.exec("")[1];
        String.prototype.split = function(b, c) {
            var d = this;
            if (void 0 === b && 0 === c) return [];
            if ("[object RegExp]" !== Object.prototype.toString.call(b)) return B.apply(this, arguments);
            var e, f, g, h, i = [],
                j = (b.ignoreCase ? "i" : "") + (b.multiline ? "m" : "") + (b.extended ? "x" : "") + (b.sticky ? "y" : ""),
                k = 0,
                b = new RegExp(b.source, j + "g");
            for (d += "", a || (e = new RegExp("^" + b.source + "$(?!\\s)", j)), c = void 0 === c ? -1 >>> 0 : c >>> 0;
                (f = b.exec(d)) && (g = f.index + f[0].length, !(g > k && (i.push(d.slice(k, f.index)), !a && f.length > 1 && f[0].replace(e, function() {
                    for (var a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (f[a] = void 0)
                }), f.length > 1 && f.index < d.length && Array.prototype.push.apply(i, f.slice(1)), h = f[0].length, k = g, i.length >= c)));) b.lastIndex === f.index && b.lastIndex++;
            return k === d.length ? (h || !b.test("")) && i.push("") : i.push(d.slice(k)), i.length > c ? i.slice(0, c) : i
        }
    }() : "0".split(void 0, 0).length && (String.prototype.split = function(a, b) {
        return void 0 === a && 0 === b ? [] : B.apply(this, arguments)
    }), "".substr && "b" !== "0b".substr(-1)) {
        var C = String.prototype.substr;
        String.prototype.substr = function(a, b) {
            return C.call(this, 0 > a ? (a = this.length + a) < 0 ? 0 : a : a, b)
        }
    }
    var D = "	\n\f\r   ᠎             　\u2028\u2029﻿";
    if (!String.prototype.trim || D.trim()) {
        D = "[" + D + "]";
        var E = new RegExp("^" + D + D + "*"),
            F = new RegExp(D + D + "*$");
        String.prototype.trim = function() {
            if (void 0 === this || null === this) throw new TypeError("can't convert " + this + " to object");
            return String(this).replace(E, "").replace(F, "")
        }
    }
    var G = function(a) {
        if (null == a) throw new TypeError("can't convert " + a + " to object");
        return Object(a)
    }
}),
function(a) {
    window.EB = window.EB || {};
    var b, c, d, e, f, g, h, i, j, k, l = [],
        m = /(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?/,
        n = /(?:(.+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?/,
        o = {
            name: "popup",
            width: 550,
            height: 450
        };
    a.extend(window.EB, {
        logging: !1,
        log: function() {
            if (EB.logging) try {
                window.console.log.apply(window.console, arguments)
            } catch (a) {
                try {
                    opera.postError.apply(opera, arguments)
                } catch (a) {
                    alert(Array.prototype.join.call(arguments, " "))
                }
            }
        },
        namespace: function(a) {
            var b, c = a.split("."),
                d = this,
                e = c.length;
            for (b = 0, e; e > b; b++) d[c[b]] || (d[c[b]] = {}), d = d[c[b]];
            return d
        },
        getEBCurrentSchemeServer: function() {
            return f
        },
        getEBServer: function() {
            return c
        },
        getEBDomain: function() {
            return d
        },
        getEBSubdomain: function() {
            return e
        },
        getEBFulldomain: function() {
            return e + "." + d
        },
        getQueueServer: function() {
            return g || ""
        },
        getMediaUrl: function() {
            return b
        },
        getUid: function() {
            return h
        },
        getUrl: function() {
            return i
        },
        getUrlRegex: function() {
            return j
        },
        getUrlLooseRegex: function() {
            return k
        },
        MobileUtils: {
            isIOS: function() {
                return navigator.platform.indexOf("iPod") > -1 || navigator.platform.indexOf("iPad") > -1 || navigator.platform.indexOf("iPhone") > -1
            },
            clickEvent: function() {
                return this.isIOS() ? "touchend" : "click"
            }
        },
        preloadImages: function() {
            for (var a = arguments.length, b = a; b--;) tmpImg = document.createElement("img"), tmpImg.src = arguments[b], l.push(tmpImg)
        },
        init: function(a) {
            b = a.mediaUrl, c = a.ebServer, d = a.ebDomain, e = a.ebSubdomain, f = a.ebCurrentSchemeServer, g = a.ebQueueServer, h = a.uid, i = a.url, j = a.urlRegex || m, k = a.urlLooseRegex || n
        },
        simplePopup: function(b) {
            var c = a.extend({}, o, b),
                d = window.open(c.url, c.name, "toolbar=yes,width=" + c.width + ",height=" + c.height);
            window.focus && d.focus()
        }
    })
}(jQuery), define("eb/eb", function() {}), window.EB = window.EB || {}, EB.Analytics = function(a, b) {
    "use strict";

    function c(a) {
        return window.MIXPANEL_DEFAULT_PROPERTIES && (a = _.defaults({}, a, window.MIXPANEL_DEFAULT_PROPERTIES)), a
    }
    var d, e;
    return {
        DEFAULT_TIMEOUT: 300,
        init: function(a, b) {
            d = a, e = b
        },
        registerTracker: function(b, c) {
            var d = {
                allowLinker: !0
            }, e = {};
            "undefined" != typeof c && "user" in c && (e.userId = c.user), a.isEmptyObject(e) ? ga("create", b, "auto", d) : ga("create", b, e, d), ga("set", "forceSSL", !0)
        },
        trackPageView: function(a) {
            e && e._trackPageview(a)
        },
        trackEventFromLink: function(c) {
            var d, e = new Date;
            "function" == typeof navigator.sendBeacon ? (c.useBeacon = !0, b.Analytics.trackEvent(c)) : (e.setMinutes(e.getMinutes() + 5), d = {
                expires: e,
                path: "/"
            }, c.page = document.location.pathname, c.referrer = document.referrer, a.cookie("ebEventToTrack", JSON.stringify(c), d))
        },
        gaOptionsFromEBProperties: function(a) {
            var b = {};
            return "page" in a && (b.page = a.page), "referrer" in a && (b.referrer = a.referrer), "useBeacon" in a && (b.useBeacon = a.useBeacon), "fromCookie" in a && (b.nonInteraction = !0), b
        },
        sendGoogleAnalyticsAction: function(b, c) {
            "function" == typeof window.ga && (a.isEmptyObject(c) ? ga("send", b) : ga("send", b, c))
        },
        trackEvent: function(a) {
            var c = b.Analytics.gaOptionsFromEBProperties(a),
                d = {
                    hitType: "event"
                };
            "category" in a && (d.eventCategory = a.category, "action" in a && (d.eventAction = a.action, "label" in a && (d.eventLabel = a.label), b.Analytics.sendGoogleAnalyticsAction(d, c)))
        },
        trackUserTiming: function(a) {
            var c = b.Analytics.gaOptionsFromEBProperties(a),
                d = {
                    hitType: "timing"
                };
            "category" in a && (d.timingCategory = a.category, "var" in a && (d.timingVar = a["var"], "value" in a && (d.timingValue = a.value, "label" in a && (d.timingLabel = a.label), b.Analytics.sendGoogleAnalyticsAction(d, c))))
        },
        trackPendingInternalLink: function(c) {
            var d, e = a.cookie(c);
            if (e) try {
                a.removeCookie(c), d = JSON.parse(e), "MX" === c && d.actionName && d.properties && b.Analytics.track(d.actionName, d.properties), "ebEventToTrack" === c && (d.fromCookie = !0, b.Analytics.trackEvent(d))
            } catch (f) {}
        },
        trackInternalLink: function(b, d) {
            var e, f = new Date;
            f.setMinutes(f.getMinutes() + 5), e = {
                expires: f,
                path: "/"
            };
            var g = {
                actionName: b,
                properties: c(d)
            };
            a.cookie("MX", JSON.stringify(g), e)
        },
        track: function(a, b, d) {
            "object" == typeof window.mixpanel ? window.mixpanel.track(a, c(b), d) : "function" == typeof d && d()
        },
        trackWithTimeout: function(a, c, d, e) {
            var f = _.once(d);
            void 0 === e && (e = b.Analytics.DEFAULT_TIMEOUT), window.setTimeout(f, e), b.Analytics.track(a, c, f)
        },
        trackLinks: function(a, b, d) {
            "object" == typeof window.mixpanel && window.mixpanel.track_links(a, b, c(d))
        },
        trackForms: function(a, b, d) {
            "object" == typeof window.mixpanel && window.mixpanel.track_forms(a, b, c(d))
        },
        registerProperties: function(a) {
            "object" == typeof window.mixpanel && window.mixpanel.register(a)
        },
        trackExperimentConversion: function(c) {
            if (c.conversionMeta = c.conversionMeta ? JSON.stringify(c.conversionMeta) : null, !c.isOutboundLinkClick) {
                var d = {
                    type: "POST",
                    url: "/ajax/track_experiment_conversion/",
                    data: {
                        experiment_name: c.experimentName,
                        conversion_type: c.conversionType,
                        conversion_meta: c.conversionMeta
                    }
                };
                return c.isOutboundLinkClickNoCookie && _.extend(d, {
                    async: !1,
                    timeout: 200
                }), a.ajax(d).pipe(function(b) {
                    return b.success ? b : a.Deferred().reject(b.errors)
                })
            }
            b.Analytics.addInternalNavigationAnalyticsCookieData({
                e: c.experimentName,
                ec: c.conversionType,
                em: c.conversionMeta
            })
        },
        analyticsAction: function(b, c, d) {
            a.post("/ajax/analytics/action", {
                action: b,
                dimensions: JSON.stringify(c),
                metrics: JSON.stringify(d)
            })
        },
        addInternalNavigationAnalyticsCookieData: function(b) {
            var c, d, e = a.cookie("AN"),
                f = new Date;
            if (f.setMinutes(f.getMinutes() + 5), d = {
                expires: f,
                path: "/"
            }, e) try {
                c = JSON.parse(e), "object" == typeof c && _.extend(b, c)
            } catch (g) {}
            a.cookie("AN", JSON.stringify(b), d)
        },
        trackInternalNavigationAction: function(a, c, d) {
            b.Analytics.addInternalNavigationAnalyticsCookieData({
                a: a,
                d: c,
                m: d
            })
        },
        recordAction: function(c, e) {
            d && c.name && c.category && b.Analytics.trackPageView("/" + d + "_" + c.name + "-" + c.category);
            var f = "/recordaction",
                g = window.fb_uid;
            b.Facebook && b.Facebook.loginStatus.session && (g = b.Facebook.loginStatus.session.uid);
            var h = {
                uid: b.getUid ? b.getUid() : b.uid || window.uid,
                fb_uid: g || b.fb_uid || window.fb_uid,
                eid: c.eid || b.eid || window.eid,
                action_category: c.category,
                action: c.name,
                action_id: c.id,
                url: window.url_escaped || b.getUrl()
            }, i = {
                    url: f,
                    type: "POST",
                    data: h,
                    success: function() {
                        b.log("Action " + c.name + "_" + c.category + " tracked.")
                    },
                    error: function() {
                        b.log("ERROR: Action " + c.name + "_" + c.category + " not tracked.")
                    }
                };
            a.ajax(a.extend({}, i, e))
        },
        recordEventPageView: function(b) {
            a.ajax({
                url: "/eventclick",
                type: "POST",
                data: {
                    eid: b
                }
            })
        }
    }
}(jQuery, EB), "function" == typeof define && define("eb/analytics", [], function() {
    "use strict";
    return EB.Analytics
});
var GLOBAL_LIMIT_DATE = 2037,
    GLOBAL_DEFAULT_LIMIT_DATE = "01/01/2037",
    GLOBAL_DISPLAY_CALENDAR = !1,
    GLOBAL_MODE_DATE = "",
    GLOBAL_MAX_INTEGER = 1e6,
    GLOBAL_MAX_QUANTITY = 1e4,
    GLOBAL_RED = "DC143C",
    GLOBAL_BLACK = "000000",
    GLOBAL_DAY_SECOND = 86400,
    GLOBAL_HOUR_SECOND = 3600,
    GLOBAL_MN_SECOND = 60,
    GLOBAL_ID_MESSAGE = "",
    GLOBAL_ID_MESSAGE_SOURCE = "",
    GLOBAL_TIMEOUT_MESSAGE = 3e3,
    GLOBAL_API_KEY_UPPERCASE = !0,
    GLOBAL_API_KEY_LENGTH = 16,
    GLOBAL_API_KEY_NUMBER = !0,
    gMonth_names_fr = {}, gMonth_names_us = {}, gMonth_days = {};
gMonth_days["01"] = 31, gMonth_days["1"] = 31, gMonth_days["02"] = 28, gMonth_days["2"] = 28, gMonth_days["03"] = 31, gMonth_days["3"] = 31, gMonth_days["04"] = 30, gMonth_days["4"] = 30, gMonth_days["05"] = 31, gMonth_days["5"] = 31, gMonth_days["06"] = 30, gMonth_days["6"] = 30, gMonth_days["07"] = 31, gMonth_days["7"] = 31, gMonth_days["08"] = 31, gMonth_days["8"] = 31, gMonth_days["09"] = 30, gMonth_days["9"] = 30, gMonth_days["10"] = 31, gMonth_days["11"] = 30, gMonth_days["12"] = 31, gMonth_names_fr["01"] = "Janvier", gMonth_names_fr["1"] = "Janvier", gMonth_names_fr["02"] = "Février", gMonth_names_fr["2"] = "Février", gMonth_names_fr["03"] = "Mars", gMonth_names_fr["3"] = "Mars", gMonth_names_fr["04"] = "Avril", gMonth_names_fr["4"] = "Avril", gMonth_names_fr["05"] = "Mai", gMonth_names_fr["5"] = "Janvier", gMonth_names_fr["06"] = "Juin", gMonth_names_fr["6"] = "Juin", gMonth_names_fr["07"] = "Juillet", gMonth_names_fr["7"] = "Janvier", gMonth_names_fr["08"] = "Août", gMonth_names_fr["8"] = "Août", gMonth_names_fr["09"] = "Septembre", gMonth_names_fr["9"] = "Septembre", gMonth_names_fr["10"] = "Octobre", gMonth_names_fr["11"] = "Novembre", gMonth_names_fr["12"] = "Décembre", gMonth_names_us["01"] = "January", gMonth_names_us["1"] = "January", gMonth_names_us["02"] = "February", gMonth_names_us["2"] = "February", gMonth_names_us["03"] = "March", gMonth_names_us["3"] = "March", gMonth_names_us["04"] = "April", gMonth_names_us["4"] = "April", gMonth_names_us["05"] = "May", gMonth_names_us["5"] = "May", gMonth_names_us["06"] = "June", gMonth_names_us["6"] = "June", gMonth_names_us["07"] = "July", gMonth_names_us["7"] = "July", gMonth_names_us["08"] = "August", gMonth_names_us["8"] = "August", gMonth_names_us["09"] = "September", gMonth_names_us["9"] = "September", gMonth_names_us["10"] = "October", gMonth_names_us["11"] = "November", gMonth_names_us["12"] = "December";
var STR_PAD_LEFT = 1,
    STR_PAD_RIGHT = 2,
    STR_PAD_BOTH = 3;
String.prototype.trim = function() {
    return this.replace(/^\s+/, "").replace(/\s+$/, "")
}, String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
};
var escapeHTML = function() {
    "use strict";
    var a = {
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "/": "&#47;",
        "<": "&lt;",
        ">": "&gt;"
    };
    return function(b) {
        return b.replace(/[\"&'\/<>]/g, function(b) {
            return a[b]
        })
    }
}();
define("core/common", function() {}), define("core/quickhelp", function() {}), window.EB = window.EB || {}, EB.Intl = function() {
    var a, b, c, d, e, f, g, h, i = {
            SYMBOL_PLACEHOLDER: "¤",
            PRECEDING_SPACE_PLACEHOLDER: " ¤",
            PROCEEDING_SPACE_PLACEHOLDER: "¤ ",
            DECIMAL_REGEX: /0.00/,
            THOUSANDS_REGEX: /#.##/
        }, j = function(a) {
            e = a
        }, k = function() {
            return e || "$"
        }, l = function() {
            var a = [],
                b = [],
                e = {};
            if ("undefined" == typeof c) throw new Error("EB.Intl.getCurrencyFormat requires a currencyFormat. Pass one in via init.");
            return d ? d : (a = i.DECIMAL_REGEX.exec(c), b = i.THOUSANDS_REGEX.exec(c), e = {
                isSymbolSuffix: c.indexOf(i.SYMBOL_PLACEHOLDER) > 0,
                hasSymbolSpace: c.indexOf(i.PRECEDING_SPACE_PLACEHOLDER) >= 0 || c.indexOf(i.PROCEEDING_SPACE_PLACEHOLDER) >= 0,
                decimalSeparator: a && b ? a[0].replace(/0/g, "") : ".",
                thousandsSeparator: a && b ? b[0].replace(/#/g, "") : ","
            }, d = e, e)
        }, m = function() {
            return {
                precision: 2,
                decimal: l().decimalSeparator,
                thousand: l().thousandsSeparator
            }
        }, n = function() {
            var a = l().hasSymbolSpace ? " " : "";
            return {
                symbol: k(),
                precision: 2,
                decimal: l().decimalSeparator,
                thousand: l().thousandsSeparator,
                format: l().isSymbolSuffix ? "%v" + a + "%s" : "%s" + a + "%v"
            }
        }, o = function(a, b) {
            if ("undefined" == typeof window.accounting) throw new Error("Accounting.js is required for EB.Intl.formatNumber().");
            return window.accounting.formatNumber(a, jQuery.extend({}, m(), b || {}))
        }, p = function(a, b) {
            if ("undefined" == typeof window.accounting) throw new Error("Accounting.js is required for EB.Intl.formatMoney().");
            return window.accounting.formatMoney(a, jQuery.extend({}, n(), b || {}))
        }, q = function(a, b) {
            if ("undefined" == typeof window.accounting) throw new Error("Accounting.js is required for EB.Intl.unformat().");
            return window.accounting.unformat(a, b || r())
        }, r = function() {
            return l().decimalSeparator
        }, s = function() {
            return l().thousandsSeparator
        }, t = function(a, b, c, d) {
            if (a = parseInt(a, 10), "True" === f || f === !0) {
                if ("undefined" == typeof c) throw gettext("ValueError: Locale requires ampm") + g;
                "PM" === c.value ? (a += 12, 24 === a && (a = 12)) : "AM" == c.value && 12 == a && (a = 0)
            } else if ("undefined" != typeof c && !d) throw gettext("ValueError: ampm given for locale that does not use it") + " " + g;
            return a + ":" + b + ":00"
        }, u = function(a) {
            if (D()) return a;
            var b = a.split("/");
            return b[1] + "/" + b[0] + "/" + b[2]
        }, v = function() {
            return a
        }, w = function() {
            return b
        }, x = function() {
            return f
        }, y = function() {
            return g
        }, z = function() {
            return h
        }, A = function(a) {
            return new Date(Date.parse(u(a)))
        }, B = function(a, b, c, d, e) {
            var f = u(a),
                g = t(b, c, d, e),
                h = f + " " + g;
            return new Date(Date.parse(h))
        }, C = function(a) {
            return u(a)
        }, D = function() {
            return "MM/dd/yyyy" === b
        }, E = function() {
            return "dd/MM/yyyy" === b
        }, F = function(a) {
            return a < new Date
        }, G = function(a, b) {
            return !(a > b || b > a)
        }, H = function(a, b) {
            var c, d = function(a, b) {
                    if (a = a.toString(), a.length < b)
                        for (; b > 1;) a = "0" + a, b -= 1;
                    return a
                };
            void 0 === b && (b = w() + (x() ? " h:mm A" : " H:mm")), c = b, c = c.replace("yyyy", a.getFullYear()), c = c.replace("yy", a.getFullYear().toString().substr(2, 2)), c = c.replace("MM", d(a.getMonth() + 1, 2)), c = c.replace("M", a.getMonth() + 1), c = c.replace("dd", d(a.getDate(), 2)), c = c.replace("d", a.getDate()), c = c.replace("HH", d(a.getHours(), 2)), c = c.replace("H", a.getHours());
            var e = 12 == a.getHours() ? 12 : a.getHours() % 12;
            return c = c.replace("hh", d(e, 2)), c = c.replace("h", e), c = c.replace("mm", d(a.getMinutes(), 2)), c = c.replace("ss", d(a.getSeconds(), 2)), c = c.replace("A", a.getHours() > 11 ? "PM" : "AM"), c = c.replace("a", a.getHours() > 11 ? "pm" : "am")
        }, I = function(a) {
            return H(a, w())
        }, J = function(a) {
            return H(a, x() ? " h:mm A" : " H:mm")
        };
    return {
        init: function(a) {
            b = a.dateFormat, c = a.currencyFormat, f = a.usesAMPM, g = a.locale, h = a.language
        },
        getIntlClock: v,
        getDateFormat: w,
        setCurrencySymbol: j,
        getCurrencySymbol: k,
        getCurrencyFormat: l,
        getDecimalSeparator: r,
        getThousandsSeparator: s,
        formatNumber: o,
        formatMoney: p,
        unformat: q,
        getUsesAMPM: x,
        dateObjFromDateParts: B,
        dateObjFromDatePicker: A,
        dateStringForLocale: C,
        isPast: F,
        isEqual: G,
        getLocale: y,
        getLanguage: z,
        usesMMDDYYYY: D,
        usesDDMMYYYY: E,
        formatDate: I,
        formatTime: J,
        formatDateTime: H,
        cleanDate: u,
        cleanTime: t
    }
}(EB), define("eb/intl", function() {}), //     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.
function() {
    var a = this,
        b = a._,
        c = {}, d = Array.prototype,
        e = Object.prototype,
        f = Function.prototype,
        g = d.push,
        h = d.slice,
        i = d.concat,
        j = e.toString,
        k = e.hasOwnProperty,
        l = d.forEach,
        m = d.map,
        n = d.reduce,
        o = d.reduceRight,
        p = d.filter,
        q = d.every,
        r = d.some,
        s = d.indexOf,
        t = d.lastIndexOf,
        u = Array.isArray,
        v = Object.keys,
        w = f.bind,
        x = function(a) {
            return a instanceof x ? a : this instanceof x ? (this._wrapped = a, void 0) : new x(a)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : a._ = x, x.VERSION = "1.4.4";
    var y = x.each = x.forEach = function(a, b, d) {
        if (null != a)
            if (l && a.forEach === l) a.forEach(b, d);
            else if (a.length === +a.length) {
            for (var e = 0, f = a.length; f > e; e++)
                if (b.call(d, a[e], e, a) === c) return
        } else
            for (var g in a)
                if (x.has(a, g) && b.call(d, a[g], g, a) === c) return
    };
    x.map = x.collect = function(a, b, c) {
        var d = [];
        return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function(a, e, f) {
            d[d.length] = b.call(c, a, e, f)
        }), d)
    };
    var z = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), n && a.reduce === n) return d && (b = x.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
        if (y(a, function(a, f, g) {
            e ? c = b.call(d, c, a, f, g) : (c = a, e = !0)
        }), !e) throw new TypeError(z);
        return c
    }, x.reduceRight = x.foldr = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), o && a.reduceRight === o) return d && (b = x.bind(b, d)), e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = x.keys(a);
            f = g.length
        }
        if (y(a, function(h, i, j) {
            i = g ? g[--f] : --f, e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0)
        }), !e) throw new TypeError(z);
        return c
    }, x.find = x.detect = function(a, b, c) {
        var d;
        return A(a, function(a, e, f) {
            return b.call(c, a, e, f) ? (d = a, !0) : void 0
        }), d
    }, x.filter = x.select = function(a, b, c) {
        var d = [];
        return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function(a, e, f) {
            b.call(c, a, e, f) && (d[d.length] = a)
        }), d)
    }, x.reject = function(a, b, c) {
        return x.filter(a, function(a, d, e) {
            return !b.call(c, a, d, e)
        }, c)
    }, x.every = x.all = function(a, b, d) {
        b || (b = x.identity);
        var e = !0;
        return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function(a, f, g) {
            return (e = e && b.call(d, a, f, g)) ? void 0 : c
        }), !! e)
    };
    var A = x.some = x.any = function(a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function(a, f, g) {
            return e || (e = b.call(d, a, f, g)) ? c : void 0
        }), !! e)
    };
    x.contains = x.include = function(a, b) {
        return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function(a) {
            return a === b
        })
    }, x.invoke = function(a, b) {
        var c = h.call(arguments, 2),
            d = x.isFunction(b);
        return x.map(a, function(a) {
            return (d ? b : a[b]).apply(a, c)
        })
    }, x.pluck = function(a, b) {
        return x.map(a, function(a) {
            return a[b]
        })
    }, x.where = function(a, b, c) {
        return x.isEmpty(b) ? c ? null : [] : x[c ? "find" : "filter"](a, function(a) {
            for (var c in b)
                if (b[c] !== a[c]) return !1;
            return !0
        })
    }, x.findWhere = function(a, b) {
        return x.where(a, b, !0)
    }, x.max = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.max.apply(Math, a);
        if (!b && x.isEmpty(a)) return -1 / 0;
        var d = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return y(a, function(a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g >= d.computed && (d = {
                value: a,
                computed: g
            })
        }), d.value
    }, x.min = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.min.apply(Math, a);
        if (!b && x.isEmpty(a)) return 1 / 0;
        var d = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return y(a, function(a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g < d.computed && (d = {
                value: a,
                computed: g
            })
        }), d.value
    }, x.shuffle = function(a) {
        var b, c = 0,
            d = [];
        return y(a, function(a) {
            b = x.random(c++), d[c - 1] = d[b], d[b] = a
        }), d
    };
    var B = function(a) {
        return x.isFunction(a) ? a : function(b) {
            return b[a]
        }
    };
    x.sortBy = function(a, b, c) {
        var d = B(b);
        return x.pluck(x.map(a, function(a, b, e) {
            return {
                value: a,
                index: b,
                criteria: d.call(c, a, b, e)
            }
        }).sort(function(a, b) {
            var c = a.criteria,
                d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (d > c || void 0 === d) return -1
            }
            return a.index < b.index ? -1 : 1
        }), "value")
    };
    var C = function(a, b, c, d) {
        var e = {}, f = B(b || x.identity);
        return y(a, function(b, g) {
            var h = f.call(c, b, g, a);
            d(e, h, b)
        }), e
    };
    x.groupBy = function(a, b, c) {
        return C(a, b, c, function(a, b, c) {
            (x.has(a, b) ? a[b] : a[b] = []).push(c)
        })
    }, x.countBy = function(a, b, c) {
        return C(a, b, c, function(a, b) {
            x.has(a, b) || (a[b] = 0), a[b]++
        })
    }, x.sortedIndex = function(a, b, c, d) {
        c = null == c ? x.identity : B(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f;) {
            var h = f + g >>> 1;
            c.call(d, a[h]) < e ? f = h + 1 : g = h
        }
        return f
    }, x.toArray = function(a) {
        return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : []
    }, x.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length
    }, x.first = x.head = x.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : h.call(a, 0, b)
    }, x.initial = function(a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b))
    }, x.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0))
    }, x.rest = x.tail = x.drop = function(a, b, c) {
        return h.call(a, null == b || c ? 1 : b)
    }, x.compact = function(a) {
        return x.filter(a, x.identity)
    };
    var D = function(a, b, c) {
        return y(a, function(a) {
            x.isArray(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a)
        }), c
    };
    x.flatten = function(a, b) {
        return D(a, b, [])
    }, x.without = function(a) {
        return x.difference(a, h.call(arguments, 1))
    }, x.uniq = x.unique = function(a, b, c, d) {
        x.isFunction(b) && (d = c, c = b, b = !1);
        var e = c ? x.map(a, c, d) : a,
            f = [],
            g = [];
        return y(e, function(c, d) {
            (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c), f.push(a[d]))
        }), f
    }, x.union = function() {
        return x.uniq(i.apply(d, arguments))
    }, x.intersection = function(a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a), function(a) {
            return x.every(b, function(b) {
                return x.indexOf(b, a) >= 0
            })
        })
    }, x.difference = function(a) {
        var b = i.apply(d, h.call(arguments, 1));
        return x.filter(a, function(a) {
            return !x.contains(b, a)
        })
    }, x.zip = function() {
        for (var a = h.call(arguments), b = x.max(x.pluck(a, "length")), c = new Array(b), d = 0; b > d; d++) c[d] = x.pluck(a, "" + d);
        return c
    }, x.object = function(a, b) {
        if (null == a) return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }, x.indexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = 0,
            e = a.length;
        if (c) {
            if ("number" != typeof c) return d = x.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c
        }
        if (s && a.indexOf === s) return a.indexOf(b, c);
        for (; e > d; d++)
            if (a[d] === b) return d;
        return -1
    }, x.lastIndexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = null != c;
        if (t && a.lastIndexOf === t) return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (var e = d ? c : a.length; e--;)
            if (a[e] === b) return e;
        return -1
    }, x.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e;) f[e++] = a, a += c;
        return f
    }, x.bind = function(a, b) {
        if (a.bind === w && w) return w.apply(a, h.call(arguments, 1));
        var c = h.call(arguments, 2);
        return function() {
            return a.apply(b, c.concat(h.call(arguments)))
        }
    }, x.partial = function(a) {
        var b = h.call(arguments, 1);
        return function() {
            return a.apply(this, b.concat(h.call(arguments)))
        }
    }, x.bindAll = function(a) {
        var b = h.call(arguments, 1);
        return 0 === b.length && (b = x.functions(a)), y(b, function(b) {
            a[b] = x.bind(a[b], a)
        }), a
    }, x.memoize = function(a, b) {
        var c = {};
        return b || (b = x.identity),
        function() {
            var d = b.apply(this, arguments);
            return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
        }
    }, x.delay = function(a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        }, b)
    }, x.defer = function(a) {
        return x.delay.apply(x, [a, 1].concat(h.call(arguments, 1)))
    }, x.throttle = function(a, b) {
        var c, d, e, f, g = 0,
            h = function() {
                g = new Date, e = null, f = a.apply(c, d)
            };
        return function() {
            var i = new Date,
                j = b - (i - g);
            return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), f
        }
    }, x.debounce = function(a, b, c) {
        var d, e;
        return function() {
            var f = this,
                g = arguments,
                h = function() {
                    d = null, c || (e = a.apply(f, g))
                }, i = c && !d;
            return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e
        }
    }, x.once = function(a) {
        var b, c = !1;
        return function() {
            return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b)
        }
    }, x.wrap = function(a, b) {
        return function() {
            var c = [a];
            return g.apply(c, arguments), b.apply(this, c)
        }
    }, x.compose = function() {
        var a = arguments;
        return function() {
            for (var b = arguments, c = a.length - 1; c >= 0; c--) b = [a[c].apply(this, b)];
            return b[0]
        }
    }, x.after = function(a, b) {
        return 0 >= a ? b() : function() {
            return --a < 1 ? b.apply(this, arguments) : void 0
        }
    }, x.keys = v || function(a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [];
        for (var c in a) x.has(a, c) && (b[b.length] = c);
        return b
    }, x.values = function(a) {
        var b = [];
        for (var c in a) x.has(a, c) && b.push(a[c]);
        return b
    }, x.pairs = function(a) {
        var b = [];
        for (var c in a) x.has(a, c) && b.push([c, a[c]]);
        return b
    }, x.invert = function(a) {
        var b = {};
        for (var c in a) x.has(a, c) && (b[a[c]] = c);
        return b
    }, x.functions = x.methods = function(a) {
        var b = [];
        for (var c in a) x.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, x.extend = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b)
                for (var c in b) a[c] = b[c]
        }), a
    }, x.pick = function(a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        return y(c, function(c) {
            c in a && (b[c] = a[c])
        }), b
    }, x.omit = function(a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        for (var e in a) x.contains(c, e) || (b[e] = a[e]);
        return b
    }, x.defaults = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b)
                for (var c in b) null == a[c] && (a[c] = b[c])
        }), a
    }, x.clone = function(a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a
    }, x.tap = function(a, b) {
        return b(a), a
    };
    var E = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof x && (a = a._wrapped), b instanceof x && (b = b._wrapped);
        var e = j.call(a);
        if (e != j.call(b)) return !1;
        switch (e) {
            case "[object String]":
                return a == String(b);
            case "[object Number]":
                return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
            case "[object Date]":
            case "[object Boolean]":
                return +a == +b;
            case "[object RegExp]":
                return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        if ("object" != typeof a || "object" != typeof b) return !1;
        for (var f = c.length; f--;)
            if (c[f] == a) return d[f] == b;
        c.push(a), d.push(b);
        var g = 0,
            h = !0;
        if ("[object Array]" == e) {
            if (g = a.length, h = g == b.length)
                for (; g-- && (h = E(a[g], b[g], c, d)););
        } else {
            var i = a.constructor,
                k = b.constructor;
            if (i !== k && !(x.isFunction(i) && i instanceof i && x.isFunction(k) && k instanceof k)) return !1;
            for (var l in a)
                if (x.has(a, l) && (g++, !(h = x.has(b, l) && E(a[l], b[l], c, d)))) break;
            if (h) {
                for (l in b)
                    if (x.has(b, l) && !g--) break;
                h = !g
            }
        }
        return c.pop(), d.pop(), h
    };
    x.isEqual = function(a, b) {
        return E(a, b, [], [])
    }, x.isEmpty = function(a) {
        if (null == a) return !0;
        if (x.isArray(a) || x.isString(a)) return 0 === a.length;
        for (var b in a)
            if (x.has(a, b)) return !1;
        return !0
    }, x.isElement = function(a) {
        return !(!a || 1 !== a.nodeType)
    }, x.isArray = u || function(a) {
        return "[object Array]" == j.call(a)
    }, x.isObject = function(a) {
        return a === Object(a)
    }, y(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(a) {
        x["is" + a] = function(b) {
            return j.call(b) == "[object " + a + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function(a) {
        return !(!a || !x.has(a, "callee"))
    }), "function" != typeof / . / && (x.isFunction = function(a) {
        return "function" == typeof a
    }), x.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }, x.isNaN = function(a) {
        return x.isNumber(a) && a != +a
    }, x.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a)
    }, x.isNull = function(a) {
        return null === a
    }, x.isUndefined = function(a) {
        return void 0 === a
    }, x.has = function(a, b) {
        return k.call(a, b)
    }, x.noConflict = function() {
        return a._ = b, this
    }, x.identity = function(a) {
        return a
    }, x.times = function(a, b, c) {
        for (var d = Array(a), e = 0; a > e; e++) d[e] = b.call(c, e);
        return d
    }, x.random = function(a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
    };
    var F = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    F.unescape = x.invert(F.escape);
    var G = {
        escape: new RegExp("[" + x.keys(F.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(F.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function(a) {
        x[a] = function(b) {
            return null == b ? "" : ("" + b).replace(G[a], function(b) {
                return F[a][b]
            })
        }
    }), x.result = function(a, b) {
        if (null == a) return null;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c
    }, x.mixin = function(a) {
        y(x.functions(a), function(b) {
            var c = x[b] = a[b];
            x.prototype[b] = function() {
                var a = [this._wrapped];
                return g.apply(a, arguments), L.call(this, c.apply(x, a))
            }
        })
    };
    var H = 0;
    x.uniqueId = function(a) {
        var b = ++H + "";
        return a ? a + b : b
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var I = /(.)^/,
        J = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, K = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(a, b, c) {
        var d;
        c = x.defaults({}, c, x.templateSettings);
        var e = new RegExp([(c.escape || I).source, (c.interpolate || I).source, (c.evaluate || I).source].join("|") + "|$", "g"),
            f = 0,
            g = "__p+='";
        a.replace(e, function(b, c, d, e, h) {
            return g += a.slice(f, h).replace(K, function(a) {
                return "\\" + J[a]
            }), c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"), d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"), e && (g += "';\n" + e + "\n__p+='"), f = h + b.length, b
        }), g += "';\n", c.variable || (g = "with(obj||{}){\n" + g + "}\n"), g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
        try {
            d = new Function(c.variable || "obj", "_", g)
        } catch (h) {
            throw h.source = g, h
        }
        if (b) return d(b, x);
        var i = function(a) {
            return d.call(this, a, x)
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + g + "}", i
    }, x.chain = function(a) {
        return x(a).chain()
    };
    var L = function(a) {
        return this._chain ? x(a).chain() : a
    };
    x.mixin(x), y(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" != a && "splice" != a || 0 !== c.length || delete c[0], L.call(this, c)
        }
    }), y(["concat", "join", "slice"], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            return L.call(this, b.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}.call(this), define("underscore", function(a) {
    return function() {
        var b;
        return b || a._
    }
}(this)), define("handlebars/handlebars/safe-string", ["exports"], function(a) {
    "use strict";

    function b(a) {
        this.string = a
    }
    b.prototype.toString = function() {
        return "" + this.string
    }, a["default"] = b
}), define("handlebars/handlebars/utils", ["./safe-string", "exports"], function(a, b) {
    "use strict";

    function c(a) {
        return h[a] || "&amp;"
    }

    function d(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }

    function e(a) {
        return a instanceof g ? a.toString() : a || 0 === a ? (a = "" + a, j.test(a) ? a.replace(i, c) : a) : ""
    }

    function f(a) {
        return a || 0 === a ? m(a) && 0 === a.length ? !0 : !1 : !0
    }
    var g = a["default"],
        h = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }, i = /[&<>"'`]/g,
        j = /[&<>"'`]/;
    b.extend = d;
    var k = Object.prototype.toString;
    b.toString = k; // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
    var l = function(a) {
        return "function" == typeof a
    };
    l(/x/) && (l = function(a) {
        return "function" == typeof a && "[object Function]" === k.call(a)
    });
    var l;
    b.isFunction = l;
    var m = Array.isArray || function(a) {
            return a && "object" == typeof a ? "[object Array]" === k.call(a) : !1
        };
    b.isArray = m, b.escapeExpression = e, b.isEmpty = f
}), define("handlebars/handlebars/exception", ["exports"], function(a) {
    "use strict";

    function b() {
        for (var a = Error.prototype.constructor.apply(this, arguments), b = 0; b < c.length; b++) this[c[b]] = a[c[b]]
    }
    var c = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    b.prototype = new Error, a["default"] = b
}), define("handlebars/handlebars/base", ["./utils", "./exception", "exports"], function(a, b, c) {
    "use strict";

    function d(a, b) {
        this.helpers = a || {}, this.partials = b || {}, e(this)
    }

    function e(a) {
        a.registerHelper("helperMissing", function(a) {
            if (2 === arguments.length) return void 0;
            throw new Error("Missing helper: '" + a + "'")
        }), a.registerHelper("blockHelperMissing", function(b, c) {
            var d = c.inverse || function() {}, e = c.fn;
            return m(b) && (b = b.call(this)), b === !0 ? e(this) : b === !1 || null == b ? d(this) : l(b) ? b.length > 0 ? a.helpers.each(b, c) : d(this) : e(b)
        }), a.registerHelper("each", function(a, b) {
            var c, d = b.fn,
                e = b.inverse,
                f = 0,
                g = "";
            if (m(a) && (a = a.call(this)), b.data && (c = q(b.data)), a && "object" == typeof a)
                if (l(a))
                    for (var h = a.length; h > f; f++) c && (c.index = f, c.first = 0 === f, c.last = f === a.length - 1), g += d(a[f], {
                        data: c
                    });
                else
                    for (var i in a) a.hasOwnProperty(i) && (c && (c.key = i), g += d(a[i], {
                        data: c
                    }), f++);
            return 0 === f && (g = e(this)), g
        }), a.registerHelper("if", function(a, b) {
            return m(a) && (a = a.call(this)), !b.hash.includeZero && !a || g.isEmpty(a) ? b.inverse(this) : b.fn(this)
        }), a.registerHelper("unless", function(b, c) {
            return a.helpers["if"].call(this, b, {
                fn: c.inverse,
                inverse: c.fn,
                hash: c.hash
            })
        }), a.registerHelper("with", function(a, b) {
            return m(a) && (a = a.call(this)), g.isEmpty(a) ? void 0 : b.fn(a)
        }), a.registerHelper("log", function(b, c) {
            var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
            a.log(d, b)
        })
    }

    function f(a, b) {
        p.log(a, b)
    }
    var g = a,
        h = b["default"],
        i = "1.1.2";
    c.VERSION = i;
    var j = 4;
    c.COMPILER_REVISION = j;
    var k = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: ">= 1.0.0"
    };
    c.REVISION_CHANGES = k;
    var l = g.isArray,
        m = g.isFunction,
        n = g.toString,
        o = "[object Object]";
    c.HandlebarsEnvironment = d, d.prototype = {
        constructor: d,
        logger: p,
        log: f,
        registerHelper: function(a, b, c) {
            if (n.call(a) === o) {
                if (c || b) throw new h("Arg not supported with multiple helpers");
                g.extend(this.helpers, a)
            } else c && (b.not = c), this.helpers[a] = b
        },
        registerPartial: function(a, b) {
            n.call(a) === o ? g.extend(this.partials, a) : this.partials[a] = b
        }
    };
    var p = {
        methodMap: {
            0: "debug",
            1: "info",
            2: "warn",
            3: "error"
        },
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        log: function(a, b) {
            if (p.level <= a) {
                var c = p.methodMap[a];
                "undefined" != typeof console && console[c] && console[c].call(console, b)
            }
        }
    };
    c.logger = p, c.log = f;
    var q = function(a) {
        var b = {};
        return g.extend(b, a), b
    };
    c.createFrame = q
}), define("handlebars/handlebars/runtime", ["./utils", "./exception", "./base", "exports"], function(a, b, c, d) {
    "use strict";

    function e(a) {
        var b = a && a[0] || 1,
            c = m;
        if (b !== c) {
            if (c > b) {
                var d = n[c],
                    e = n[b];
                throw new Error("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
            }
            throw new Error("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
        }
    }

    function f(a, b) {
        if (!b) throw new Error("No environment passed to template");
        var c;
        c = b.compile ? function(a, c, d, e, f, g) {
            var h = i.apply(this, arguments);
            if (h) return h;
            var j = {
                helpers: e,
                partials: f,
                data: g
            };
            return f[c] = b.compile(a, {
                data: void 0 !== g
            }, b), f[c](d, j)
        } : function(a, b) {
            var c = i.apply(this, arguments);
            if (c) return c;
            throw new l("The partial " + b + " could not be compiled when running in runtime-only mode")
        };
        var d = {
            escapeExpression: k.escapeExpression,
            invokePartial: c,
            programs: [],
            program: function(a, b, c) {
                var d = this.programs[a];
                return c ? d = h(a, b, c) : d || (d = this.programs[a] = h(a, b)), d
            },
            merge: function(a, b) {
                var c = a || b;
                return a && b && a !== b && (c = {}, k.extend(c, b), k.extend(c, a)), c
            },
            programWithDepth: g,
            noop: j,
            compilerInfo: null
        };
        return function(c, f) {
            f = f || {};
            var g, h, i = f.partial ? f : b;
            f.partial || (g = f.helpers, h = f.partials);
            var j = a.call(d, i, c, g, h, f.data);
            return f.partial || e(d.compilerInfo), j
        }
    }

    function g(a, b, c) {
        var d = Array.prototype.slice.call(arguments, 3),
            e = function(a, e) {
                return e = e || {}, b.apply(this, [a, e.data || c].concat(d))
            };
        return e.program = a, e.depth = d.length, e
    }

    function h(a, b, c) {
        var d = function(a, d) {
            return d = d || {}, b(a, d.data || c)
        };
        return d.program = a, d.depth = 0, d
    }

    function i(a, b, c, d, e, f) {
        var g = {
            partial: !0,
            helpers: d,
            partials: e,
            data: f
        };
        if (void 0 === a) throw new l("The partial " + b + " could not be found");
        return a instanceof Function ? a(c, g) : void 0
    }

    function j() {
        return ""
    }
    var k = a,
        l = b["default"],
        m = c.COMPILER_REVISION,
        n = c.REVISION_CHANGES;
    d.template = f, d.programWithDepth = g, d.program = h, d.invokePartial = i, d.noop = j
}), define("handlebars/handlebars.runtime", ["./handlebars/base", "./handlebars/safe-string", "./handlebars/exception", "./handlebars/utils", "./handlebars/runtime", "exports"], function(a, b, c, d, e, f) {
    "use strict";
    var g = a,
        h = b["default"],
        i = c["default"],
        j = d,
        k = e,
        l = function() {
            var a = new g.HandlebarsEnvironment;
            return j.extend(a, g), a.SafeString = h, a.Exception = i, a.Utils = j, a.VM = k, a.template = function(b) {
                return k.template(b, a)
            }, a
        }, m = l();
    m.create = l, f["default"] = m
}), define("handlebars/handlebars/compiler/ast", ["../exception", "exports"], function(a, b) {
    "use strict";

    function c(a, b, d) {
        this.type = "program", this.statements = a, this.strip = {}, d ? (this.inverse = new c(d, b), this.strip.right = b.left) : b && (this.strip.left = b.right)
    }

    function d(a, b, c, d) {
        this.type = "mustache", this.hash = b, this.strip = d;
        var e = c[3] || c[2];
        this.escaped = "{" !== e && "&" !== e;
        var f = this.id = a[0],
            g = this.params = a.slice(1),
            h = this.eligibleHelper = f.isSimple;
        this.isHelper = h && (g.length || b)
    }

    function e(a, b, c) {
        this.type = "partial", this.partialName = a, this.context = b, this.strip = c
    }

    function f(a, b, c, d) {
        if (a.id.original !== d.path.original) throw new p(a.id.original + " doesn't match " + d.path.original);
        this.type = "block", this.mustache = a, this.program = b, this.inverse = c, this.strip = {
            left: a.strip.left,
            right: d.strip.right
        }, (b || c).strip.left = a.strip.right, (c || b).strip.right = d.strip.left, c && !b && (this.isInverse = !0)
    }

    function g(a) {
        this.type = "content", this.string = a
    }

    function h(a) {
        this.type = "hash", this.pairs = a
    }

    function i(a) {
        this.type = "ID";
        for (var b = "", c = [], d = 0, e = 0, f = a.length; f > e; e++) {
            var g = a[e].part;
            if (b += (a[e].separator || "") + g, ".." === g || "." === g || "this" === g) {
                if (c.length > 0) throw new p("Invalid path: " + b);
                ".." === g ? d++ : this.isScoped = !0
            } else c.push(g)
        }
        this.original = b, this.parts = c, this.string = c.join("."), this.depth = d, this.isSimple = 1 === a.length && !this.isScoped && 0 === d, this.stringModeValue = this.string
    }

    function j(a) {
        this.type = "PARTIAL_NAME", this.name = a.original
    }

    function k(a) {
        this.type = "DATA", this.id = a
    }

    function l(a) {
        this.type = "STRING", this.original = this.string = this.stringModeValue = a
    }

    function m(a) {
        this.type = "INTEGER", this.original = this.integer = a, this.stringModeValue = Number(a)
    }

    function n(a) {
        this.type = "BOOLEAN", this.bool = a, this.stringModeValue = "true" === a
    }

    function o(a) {
        this.type = "comment", this.comment = a
    }
    var p = a["default"];
    b.ProgramNode = c, b.MustacheNode = d, b.PartialNode = e, b.BlockNode = f, b.ContentNode = g, b.HashNode = h, b.IdNode = i, b.PartialNameNode = j, b.DataNode = k, b.StringNode = l, b.IntegerNode = m, b.BooleanNode = n, b.CommentNode = o
}), define("handlebars/handlebars/compiler/parser", ["exports"], function(a) {
    "use strict";
    var b = function() {
        function a(a, b) {
            return {
                left: "~" === a[2],
                right: "~" === b[0] || "~" === b[1]
            }
        }

        function b() {
            this.yy = {}
        }
        var c = {
            trace: function() {},
            yy: {},
            symbols_: {
                error: 2,
                root: 3,
                statements: 4,
                EOF: 5,
                program: 6,
                simpleInverse: 7,
                statement: 8,
                openInverse: 9,
                closeBlock: 10,
                openBlock: 11,
                mustache: 12,
                partial: 13,
                CONTENT: 14,
                COMMENT: 15,
                OPEN_BLOCK: 16,
                inMustache: 17,
                CLOSE: 18,
                OPEN_INVERSE: 19,
                OPEN_ENDBLOCK: 20,
                path: 21,
                OPEN: 22,
                OPEN_UNESCAPED: 23,
                CLOSE_UNESCAPED: 24,
                OPEN_PARTIAL: 25,
                partialName: 26,
                partial_option0: 27,
                inMustache_repetition0: 28,
                inMustache_option0: 29,
                dataName: 30,
                param: 31,
                STRING: 32,
                INTEGER: 33,
                BOOLEAN: 34,
                hash: 35,
                hash_repetition_plus0: 36,
                hashSegment: 37,
                ID: 38,
                EQUALS: 39,
                DATA: 40,
                pathSegments: 41,
                SEP: 42,
                $accept: 0,
                $end: 1
            },
            terminals_: {
                2: "error",
                5: "EOF",
                14: "CONTENT",
                15: "COMMENT",
                16: "OPEN_BLOCK",
                18: "CLOSE",
                19: "OPEN_INVERSE",
                20: "OPEN_ENDBLOCK",
                22: "OPEN",
                23: "OPEN_UNESCAPED",
                24: "CLOSE_UNESCAPED",
                25: "OPEN_PARTIAL",
                32: "STRING",
                33: "INTEGER",
                34: "BOOLEAN",
                38: "ID",
                39: "EQUALS",
                40: "DATA",
                42: "SEP"
            },
            productions_: [0, [3, 2],
                [3, 1],
                [6, 2],
                [6, 3],
                [6, 2],
                [6, 1],
                [6, 1],
                [6, 0],
                [4, 1],
                [4, 2],
                [8, 3],
                [8, 3],
                [8, 1],
                [8, 1],
                [8, 1],
                [8, 1],
                [11, 3],
                [9, 3],
                [10, 3],
                [12, 3],
                [12, 3],
                [13, 4],
                [7, 2],
                [17, 3],
                [17, 1],
                [31, 1],
                [31, 1],
                [31, 1],
                [31, 1],
                [31, 1],
                [35, 1],
                [37, 3],
                [26, 1],
                [26, 1],
                [26, 1],
                [30, 2],
                [21, 1],
                [41, 3],
                [41, 1],
                [27, 0],
                [27, 1],
                [28, 0],
                [28, 2],
                [29, 0],
                [29, 1],
                [36, 1],
                [36, 2]
            ],
            performAction: function(b, c, d, e, f, g) {
                var h = g.length - 1;
                switch (f) {
                    case 1:
                        return new e.ProgramNode(g[h - 1]);
                    case 2:
                        return new e.ProgramNode([]);
                    case 3:
                        this.$ = new e.ProgramNode([], g[h - 1], g[h]);
                        break;
                    case 4:
                        this.$ = new e.ProgramNode(g[h - 2], g[h - 1], g[h]);
                        break;
                    case 5:
                        this.$ = new e.ProgramNode(g[h - 1], g[h], []);
                        break;
                    case 6:
                        this.$ = new e.ProgramNode(g[h]);
                        break;
                    case 7:
                        this.$ = new e.ProgramNode([]);
                        break;
                    case 8:
                        this.$ = new e.ProgramNode([]);
                        break;
                    case 9:
                        this.$ = [g[h]];
                        break;
                    case 10:
                        g[h - 1].push(g[h]), this.$ = g[h - 1];
                        break;
                    case 11:
                        this.$ = new e.BlockNode(g[h - 2], g[h - 1].inverse, g[h - 1], g[h]);
                        break;
                    case 12:
                        this.$ = new e.BlockNode(g[h - 2], g[h - 1], g[h - 1].inverse, g[h]);
                        break;
                    case 13:
                        this.$ = g[h];
                        break;
                    case 14:
                        this.$ = g[h];
                        break;
                    case 15:
                        this.$ = new e.ContentNode(g[h]);
                        break;
                    case 16:
                        this.$ = new e.CommentNode(g[h]);
                        break;
                    case 17:
                        this.$ = new e.MustacheNode(g[h - 1][0], g[h - 1][1], g[h - 2], a(g[h - 2], g[h]));
                        break;
                    case 18:
                        this.$ = new e.MustacheNode(g[h - 1][0], g[h - 1][1], g[h - 2], a(g[h - 2], g[h]));
                        break;
                    case 19:
                        this.$ = {
                            path: g[h - 1],
                            strip: a(g[h - 2], g[h])
                        };
                        break;
                    case 20:
                        this.$ = new e.MustacheNode(g[h - 1][0], g[h - 1][1], g[h - 2], a(g[h - 2], g[h]));
                        break;
                    case 21:
                        this.$ = new e.MustacheNode(g[h - 1][0], g[h - 1][1], g[h - 2], a(g[h - 2], g[h]));
                        break;
                    case 22:
                        this.$ = new e.PartialNode(g[h - 2], g[h - 1], a(g[h - 3], g[h]));
                        break;
                    case 23:
                        this.$ = a(g[h - 1], g[h]);
                        break;
                    case 24:
                        this.$ = [
                            [g[h - 2]].concat(g[h - 1]), g[h]
                        ];
                        break;
                    case 25:
                        this.$ = [
                            [g[h]], null
                        ];
                        break;
                    case 26:
                        this.$ = g[h];
                        break;
                    case 27:
                        this.$ = new e.StringNode(g[h]);
                        break;
                    case 28:
                        this.$ = new e.IntegerNode(g[h]);
                        break;
                    case 29:
                        this.$ = new e.BooleanNode(g[h]);
                        break;
                    case 30:
                        this.$ = g[h];
                        break;
                    case 31:
                        this.$ = new e.HashNode(g[h]);
                        break;
                    case 32:
                        this.$ = [g[h - 2], g[h]];
                        break;
                    case 33:
                        this.$ = new e.PartialNameNode(g[h]);
                        break;
                    case 34:
                        this.$ = new e.PartialNameNode(new e.StringNode(g[h]));
                        break;
                    case 35:
                        this.$ = new e.PartialNameNode(new e.IntegerNode(g[h]));
                        break;
                    case 36:
                        this.$ = new e.DataNode(g[h]);
                        break;
                    case 37:
                        this.$ = new e.IdNode(g[h]);
                        break;
                    case 38:
                        g[h - 2].push({
                            part: g[h],
                            separator: g[h - 1]
                        }), this.$ = g[h - 2];
                        break;
                    case 39:
                        this.$ = [{
                            part: g[h]
                        }];
                        break;
                    case 42:
                        this.$ = [];
                        break;
                    case 43:
                        g[h - 1].push(g[h]);
                        break;
                    case 46:
                        this.$ = [g[h]];
                        break;
                    case 47:
                        g[h - 1].push(g[h])
                }
            },
            table: [{
                3: 1,
                4: 2,
                5: [1, 3],
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                22: [1, 13],
                23: [1, 14],
                25: [1, 15]
            }, {
                1: [3]
            }, {
                5: [1, 16],
                8: 17,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                22: [1, 13],
                23: [1, 14],
                25: [1, 15]
            }, {
                1: [2, 2]
            }, {
                5: [2, 9],
                14: [2, 9],
                15: [2, 9],
                16: [2, 9],
                19: [2, 9],
                20: [2, 9],
                22: [2, 9],
                23: [2, 9],
                25: [2, 9]
            }, {
                4: 20,
                6: 18,
                7: 19,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 21],
                20: [2, 8],
                22: [1, 13],
                23: [1, 14],
                25: [1, 15]
            }, {
                4: 20,
                6: 22,
                7: 19,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 21],
                20: [2, 8],
                22: [1, 13],
                23: [1, 14],
                25: [1, 15]
            }, {
                5: [2, 13],
                14: [2, 13],
                15: [2, 13],
                16: [2, 13],
                19: [2, 13],
                20: [2, 13],
                22: [2, 13],
                23: [2, 13],
                25: [2, 13]
            }, {
                5: [2, 14],
                14: [2, 14],
                15: [2, 14],
                16: [2, 14],
                19: [2, 14],
                20: [2, 14],
                22: [2, 14],
                23: [2, 14],
                25: [2, 14]
            }, {
                5: [2, 15],
                14: [2, 15],
                15: [2, 15],
                16: [2, 15],
                19: [2, 15],
                20: [2, 15],
                22: [2, 15],
                23: [2, 15],
                25: [2, 15]
            }, {
                5: [2, 16],
                14: [2, 16],
                15: [2, 16],
                16: [2, 16],
                19: [2, 16],
                20: [2, 16],
                22: [2, 16],
                23: [2, 16],
                25: [2, 16]
            }, {
                17: 23,
                21: 24,
                30: 25,
                38: [1, 28],
                40: [1, 27],
                41: 26
            }, {
                17: 29,
                21: 24,
                30: 25,
                38: [1, 28],
                40: [1, 27],
                41: 26
            }, {
                17: 30,
                21: 24,
                30: 25,
                38: [1, 28],
                40: [1, 27],
                41: 26
            }, {
                17: 31,
                21: 24,
                30: 25,
                38: [1, 28],
                40: [1, 27],
                41: 26
            }, {
                21: 33,
                26: 32,
                32: [1, 34],
                33: [1, 35],
                38: [1, 28],
                41: 26
            }, {
                1: [2, 1]
            }, {
                5: [2, 10],
                14: [2, 10],
                15: [2, 10],
                16: [2, 10],
                19: [2, 10],
                20: [2, 10],
                22: [2, 10],
                23: [2, 10],
                25: [2, 10]
            }, {
                10: 36,
                20: [1, 37]
            }, {
                4: 38,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 7],
                22: [1, 13],
                23: [1, 14],
                25: [1, 15]
            }, {
                7: 39,
                8: 17,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 21],
                20: [2, 6],
                22: [1, 13],
                23: [1, 14],
                25: [1, 15]
            }, {
                17: 23,
                18: [1, 40],
                21: 24,
                30: 25,
                38: [1, 28],
                40: [1, 27],
                41: 26
            }, {
                10: 41,
                20: [1, 37]
            }, {
                18: [1, 42]
            }, {
                18: [2, 42],
                24: [2, 42],
                28: 43,
                32: [2, 42],
                33: [2, 42],
                34: [2, 42],
                38: [2, 42],
                40: [2, 42]
            }, {
                18: [2, 25],
                24: [2, 25]
            }, {
                18: [2, 37],
                24: [2, 37],
                32: [2, 37],
                33: [2, 37],
                34: [2, 37],
                38: [2, 37],
                40: [2, 37],
                42: [1, 44]
            }, {
                21: 45,
                38: [1, 28],
                41: 26
            }, {
                18: [2, 39],
                24: [2, 39],
                32: [2, 39],
                33: [2, 39],
                34: [2, 39],
                38: [2, 39],
                40: [2, 39],
                42: [2, 39]
            }, {
                18: [1, 46]
            }, {
                18: [1, 47]
            }, {
                24: [1, 48]
            }, {
                18: [2, 40],
                21: 50,
                27: 49,
                38: [1, 28],
                41: 26
            }, {
                18: [2, 33],
                38: [2, 33]
            }, {
                18: [2, 34],
                38: [2, 34]
            }, {
                18: [2, 35],
                38: [2, 35]
            }, {
                5: [2, 11],
                14: [2, 11],
                15: [2, 11],
                16: [2, 11],
                19: [2, 11],
                20: [2, 11],
                22: [2, 11],
                23: [2, 11],
                25: [2, 11]
            }, {
                21: 51,
                38: [1, 28],
                41: 26
            }, {
                8: 17,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 3],
                22: [1, 13],
                23: [1, 14],
                25: [1, 15]
            }, {
                4: 52,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 5],
                22: [1, 13],
                23: [1, 14],
                25: [1, 15]
            }, {
                14: [2, 23],
                15: [2, 23],
                16: [2, 23],
                19: [2, 23],
                20: [2, 23],
                22: [2, 23],
                23: [2, 23],
                25: [2, 23]
            }, {
                5: [2, 12],
                14: [2, 12],
                15: [2, 12],
                16: [2, 12],
                19: [2, 12],
                20: [2, 12],
                22: [2, 12],
                23: [2, 12],
                25: [2, 12]
            }, {
                14: [2, 18],
                15: [2, 18],
                16: [2, 18],
                19: [2, 18],
                20: [2, 18],
                22: [2, 18],
                23: [2, 18],
                25: [2, 18]
            }, {
                18: [2, 44],
                21: 56,
                24: [2, 44],
                29: 53,
                30: 60,
                31: 54,
                32: [1, 57],
                33: [1, 58],
                34: [1, 59],
                35: 55,
                36: 61,
                37: 62,
                38: [1, 63],
                40: [1, 27],
                41: 26
            }, {
                38: [1, 64]
            }, {
                18: [2, 36],
                24: [2, 36],
                32: [2, 36],
                33: [2, 36],
                34: [2, 36],
                38: [2, 36],
                40: [2, 36]
            }, {
                14: [2, 17],
                15: [2, 17],
                16: [2, 17],
                19: [2, 17],
                20: [2, 17],
                22: [2, 17],
                23: [2, 17],
                25: [2, 17]
            }, {
                5: [2, 20],
                14: [2, 20],
                15: [2, 20],
                16: [2, 20],
                19: [2, 20],
                20: [2, 20],
                22: [2, 20],
                23: [2, 20],
                25: [2, 20]
            }, {
                5: [2, 21],
                14: [2, 21],
                15: [2, 21],
                16: [2, 21],
                19: [2, 21],
                20: [2, 21],
                22: [2, 21],
                23: [2, 21],
                25: [2, 21]
            }, {
                18: [1, 65]
            }, {
                18: [2, 41]
            }, {
                18: [1, 66]
            }, {
                8: 17,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 4],
                22: [1, 13],
                23: [1, 14],
                25: [1, 15]
            }, {
                18: [2, 24],
                24: [2, 24]
            }, {
                18: [2, 43],
                24: [2, 43],
                32: [2, 43],
                33: [2, 43],
                34: [2, 43],
                38: [2, 43],
                40: [2, 43]
            }, {
                18: [2, 45],
                24: [2, 45]
            }, {
                18: [2, 26],
                24: [2, 26],
                32: [2, 26],
                33: [2, 26],
                34: [2, 26],
                38: [2, 26],
                40: [2, 26]
            }, {
                18: [2, 27],
                24: [2, 27],
                32: [2, 27],
                33: [2, 27],
                34: [2, 27],
                38: [2, 27],
                40: [2, 27]
            }, {
                18: [2, 28],
                24: [2, 28],
                32: [2, 28],
                33: [2, 28],
                34: [2, 28],
                38: [2, 28],
                40: [2, 28]
            }, {
                18: [2, 29],
                24: [2, 29],
                32: [2, 29],
                33: [2, 29],
                34: [2, 29],
                38: [2, 29],
                40: [2, 29]
            }, {
                18: [2, 30],
                24: [2, 30],
                32: [2, 30],
                33: [2, 30],
                34: [2, 30],
                38: [2, 30],
                40: [2, 30]
            }, {
                18: [2, 31],
                24: [2, 31],
                37: 67,
                38: [1, 68]
            }, {
                18: [2, 46],
                24: [2, 46],
                38: [2, 46]
            }, {
                18: [2, 39],
                24: [2, 39],
                32: [2, 39],
                33: [2, 39],
                34: [2, 39],
                38: [2, 39],
                39: [1, 69],
                40: [2, 39],
                42: [2, 39]
            }, {
                18: [2, 38],
                24: [2, 38],
                32: [2, 38],
                33: [2, 38],
                34: [2, 38],
                38: [2, 38],
                40: [2, 38],
                42: [2, 38]
            }, {
                5: [2, 22],
                14: [2, 22],
                15: [2, 22],
                16: [2, 22],
                19: [2, 22],
                20: [2, 22],
                22: [2, 22],
                23: [2, 22],
                25: [2, 22]
            }, {
                5: [2, 19],
                14: [2, 19],
                15: [2, 19],
                16: [2, 19],
                19: [2, 19],
                20: [2, 19],
                22: [2, 19],
                23: [2, 19],
                25: [2, 19]
            }, {
                18: [2, 47],
                24: [2, 47],
                38: [2, 47]
            }, {
                39: [1, 69]
            }, {
                21: 56,
                30: 60,
                31: 70,
                32: [1, 57],
                33: [1, 58],
                34: [1, 59],
                38: [1, 28],
                40: [1, 27],
                41: 26
            }, {
                18: [2, 32],
                24: [2, 32],
                38: [2, 32]
            }],
            defaultActions: {
                3: [2, 2],
                16: [2, 1],
                50: [2, 41]
            },
            parseError: function(a) {
                throw new Error(a)
            },
            parse: function(a) {
                function b() {
                    var a;
                    return a = c.lexer.lex() || 1, "number" != typeof a && (a = c.symbols_[a] || a), a
                }
                var c = this,
                    d = [0],
                    e = [null],
                    f = [],
                    g = this.table,
                    h = "",
                    i = 0,
                    j = 0,
                    k = 0;
                this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                var l = this.lexer.yylloc;
                f.push(l);
                var m = this.lexer.options && this.lexer.options.ranges;
                "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                for (var n, o, p, q, r, s, t, u, v, w = {};;) {
                    if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : ((null === n || "undefined" == typeof n) && (n = b()), q = g[p] && g[p][n]), "undefined" == typeof q || !q.length || !q[0]) {
                        var x = "";
                        if (!k) {
                            v = [];
                            for (s in g[p]) this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                            x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), this.parseError(x, {
                                text: this.lexer.match,
                                token: this.terminals_[n] || n,
                                line: this.lexer.yylineno,
                                loc: l,
                                expected: v
                            })
                        }
                    }
                    if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
                    switch (q[0]) {
                        case 1:
                            d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, l = this.lexer.yylloc, k > 0 && k--);
                            break;
                        case 2:
                            if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = {
                                first_line: f[f.length - (t || 1)].first_line,
                                last_line: f[f.length - 1].last_line,
                                first_column: f[f.length - (t || 1)].first_column,
                                last_column: f[f.length - 1].last_column
                            }, m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]), r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f), "undefined" != typeof r) return r;
                            t && (d = d.slice(0, 2 * -1 * t), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], d.push(u);
                            break;
                        case 3:
                            return !0
                    }
                }
                return !0
            }
        }, d = function() {
                var a = {
                    EOF: 1,
                    parseError: function(a, b) {
                        if (!this.yy.parser) throw new Error(a);
                        this.yy.parser.parseError(a, b)
                    },
                    setInput: function(a) {
                        return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0
                        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                    },
                    input: function() {
                        var a = this._input[0];
                        this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a;
                        var b = a.match(/(?:\r\n?|\n).*/g);
                        return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), a
                    },
                    unput: function(a) {
                        var b = a.length,
                            c = a.split(/(?:\r\n?|\n)/g);
                        this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), this.offset -= b;
                        var d = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);
                        var e = this.yylloc.range;
                        return this.yylloc = {
                            first_line: this.yylloc.first_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.first_column,
                            last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b
                        }, this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]), this
                    },
                    more: function() {
                        return this._more = !0, this
                    },
                    less: function(a) {
                        this.unput(this.match.slice(a))
                    },
                    pastInput: function() {
                        var a = this.matched.substr(0, this.matched.length - this.match.length);
                        return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "")
                    },
                    upcomingInput: function() {
                        var a = this.match;
                        return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "")
                    },
                    showPosition: function() {
                        var a = this.pastInput(),
                            b = new Array(a.length + 1).join("-");
                        return a + this.upcomingInput() + "\n" + b + "^"
                    },
                    next: function() {
                        if (this.done) return this.EOF;
                        this._input || (this.done = !0);
                        var a, b, c, d, e;
                        this._more || (this.yytext = "", this.match = "");
                        for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]), !c || b && !(c[0].length > b[0].length) || (b = c, d = g, this.options.flex)); g++);
                        return b ? (e = b[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length
                        }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        })
                    },
                    lex: function() {
                        var a = this.next();
                        return "undefined" != typeof a ? a : this.lex()
                    },
                    begin: function(a) {
                        this.conditionStack.push(a)
                    },
                    popState: function() {
                        return this.conditionStack.pop()
                    },
                    _currentRules: function() {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                    },
                    topState: function() {
                        return this.conditionStack[this.conditionStack.length - 2]
                    },
                    pushState: function(a) {
                        this.begin(a)
                    }
                };
                return a.options = {}, a.performAction = function(a, b, c, d) {
                    function e(a, c) {
                        return b.yytext = b.yytext.substr(a, b.yyleng - c)
                    }
                    switch (c) {
                        case 0:
                            if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext) return 14;
                            break;
                        case 1:
                            return 14;
                        case 2:
                            return "\\" !== b.yytext.slice(-1) && this.popState(), "\\" === b.yytext.slice(-1) && e(0, 1), 14;
                        case 3:
                            return e(0, 4), this.popState(), 15;
                        case 4:
                            return 25;
                        case 5:
                            return 16;
                        case 6:
                            return 20;
                        case 7:
                            return 19;
                        case 8:
                            return 19;
                        case 9:
                            return 23;
                        case 10:
                            return 22;
                        case 11:
                            this.popState(), this.begin("com");
                            break;
                        case 12:
                            return e(3, 5), this.popState(), 15;
                        case 13:
                            return 22;
                        case 14:
                            return 39;
                        case 15:
                            return 38;
                        case 16:
                            return 38;
                        case 17:
                            return 42;
                        case 18:
                            break;
                        case 19:
                            return this.popState(), 24;
                        case 20:
                            return this.popState(), 18;
                        case 21:
                            return b.yytext = e(1, 2).replace(/\\"/g, '"'), 32;
                        case 22:
                            return b.yytext = e(1, 2).replace(/\\'/g, "'"), 32;
                        case 23:
                            return 40;
                        case 24:
                            return 34;
                        case 25:
                            return 34;
                        case 26:
                            return 33;
                        case 27:
                            return 38;
                        case 28:
                            return b.yytext = e(1, 2), 38;
                        case 29:
                            return "INVALID";
                        case 30:
                            return 5
                    }
                }, a.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s])))/, /^(?:false(?=([~}\s])))/, /^(?:-?[0-9]+(?=([~}\s])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], a.conditions = {
                    mu: {
                        rules: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                        inclusive: !1
                    },
                    emu: {
                        rules: [2],
                        inclusive: !1
                    },
                    com: {
                        rules: [3],
                        inclusive: !1
                    },
                    INITIAL: {
                        rules: [0, 1, 30],
                        inclusive: !0
                    }
                }, a
            }();
        return c.lexer = d, b.prototype = c, c.Parser = b, new b
    }();
    a["default"] = b
}), define("handlebars/handlebars/compiler/base", ["./parser", "./ast", "exports"], function(a, b, c) {
    "use strict";

    function d(a) {
        return a.constructor === f.ProgramNode ? a : (e.yy = f, e.parse(a))
    }
    var e = a["default"],
        f = b;
    c.parser = e, c.parse = d
}), define("handlebars/handlebars/compiler/javascript-compiler", ["../base", "exports"], function(a, b) {
    "use strict";

    function c(a) {
        this.value = a
    }

    function d() {}
    var e = a.COMPILER_REVISION,
        f = a.REVISION_CHANGES,
        g = a.log;
    d.prototype = {
        nameLookup: function(a, b) {
            var c, e;
            return 0 === a.indexOf("depth") && (c = !0), e = /^[0-9]+$/.test(b) ? a + "[" + b + "]" : d.isValidJavaScriptVariableName(b) ? a + "." + b : a + "['" + b + "']", c ? "(" + a + " && " + e + ")" : e
        },
        appendToBuffer: function(a) {
            return this.environment.isSimple ? "return " + a + ";" : {
                appendToBuffer: !0,
                content: a,
                toString: function() {
                    return "buffer += " + a + ";"
                }
            }
        },
        initializeBuffer: function() {
            return this.quotedString("")
        },
        namespace: "Handlebars",
        compile: function(a, b, c, d) {
            this.environment = a, this.options = b || {}, g("debug", this.environment.disassemble() + "\n\n"), this.name = this.environment.name, this.isChild = !! c, this.context = c || {
                programs: [],
                environments: [],
                aliases: {}
            }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = {
                list: []
            }, this.compileStack = [], this.inlineStack = [], this.compileChildren(a, b);
            var e, f = a.opcodes;
            this.i = 0;
            for (var h = f.length; this.i < h; this.i++) e = f[this.i], "DECLARE" === e.opcode ? this[e.name] = e.value : this[e.opcode].apply(this, e.args), e.opcode !== this.stripNext && (this.stripNext = !1);
            return this.pushSource(""), this.createFunctionContext(d)
        },
        preamble: function() {
            var a = [];
            if (this.isChild) a.push("");
            else {
                var b = this.namespace,
                    c = "helpers = this.merge(helpers, " + b + ".helpers);";
                this.environment.usePartial && (c = c + " partials = this.merge(partials, " + b + ".partials);"), this.options.data && (c += " data = data || {};"), a.push(c)
            }
            this.environment.isSimple ? a.push("") : a.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = a
        },
        createFunctionContext: function(a) {
            var b = this.stackVars.concat(this.registers.list);
            if (b.length > 0 && (this.source[1] = this.source[1] + ", " + b.join(", ")), !this.isChild)
                for (var c in this.context.aliases) this.context.aliases.hasOwnProperty(c) && (this.source[1] = this.source[1] + ", " + c + "=" + this.context.aliases[c]);
            this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.pushSource("return buffer;");
            for (var d = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], h = 0, i = this.environment.depths.list.length; i > h; h++) d.push("depth" + this.environment.depths.list[h]);
            var j = this.mergeSource();
            if (!this.isChild) {
                var k = e,
                    l = f[k];
                j = "this.compilerInfo = [" + k + ",'" + l + "'];\n" + j
            }
            if (a) return d.push(j), Function.apply(this, d);
            var m = "function " + (this.name || "") + "(" + d.join(",") + ") {\n  " + j + "}";
            return g("debug", m + "\n\n"), m
        },
        mergeSource: function() {
            for (var a, b = "", c = 0, d = this.source.length; d > c; c++) {
                var e = this.source[c];
                e.appendToBuffer ? a = a ? a + "\n    + " + e.content : e.content : (a && (b += "buffer += " + a + ";\n  ", a = void 0), b += e + "\n  ")
            }
            return b
        },
        blockValue: function() {
            this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
            var a = ["depth0"];
            this.setupParams(0, a), this.replaceStack(function(b) {
                return a.splice(1, 0, b), "blockHelperMissing.call(" + a.join(", ") + ")"
            })
        },
        ambiguousBlockValue: function() {
            this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
            var a = ["depth0"];
            this.setupParams(0, a);
            var b = this.topStack();
            a.splice(1, 0, b), a[a.length - 1] = "options", this.pushSource("if (!" + this.lastHelper + ") { " + b + " = blockHelperMissing.call(" + a.join(", ") + "); }")
        },
        appendContent: function(a) {
            this.pendingContent && (a = this.pendingContent + a), this.stripNext && (a = a.replace(/^\s+/, "")), this.pendingContent = a
        },
        strip: function() {
            this.pendingContent && (this.pendingContent = this.pendingContent.replace(/\s+$/, "")), this.stripNext = "strip"
        },
        append: function() {
            this.flushInline();
            var a = this.popStack();
            this.pushSource("if(" + a + " || " + a + " === 0) { " + this.appendToBuffer(a) + " }"), this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
        },
        appendEscaped: function() {
            this.context.aliases.escapeExpression = "this.escapeExpression", this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
        },
        getContext: function(a) {
            this.lastContext !== a && (this.lastContext = a)
        },
        lookupOnContext: function(a) {
            this.push(this.nameLookup("depth" + this.lastContext, a, "context"))
        },
        pushContext: function() {
            this.pushStackLiteral("depth" + this.lastContext)
        },
        resolvePossibleLambda: function() {
            this.context.aliases.functionType = '"function"', this.replaceStack(function(a) {
                return "typeof " + a + " === functionType ? " + a + ".apply(depth0) : " + a
            })
        },
        lookup: function(a) {
            this.replaceStack(function(b) {
                return b + " == null || " + b + " === false ? " + b + " : " + this.nameLookup(b, a, "context")
            })
        },
        lookupData: function() {
            this.push("data")
        },
        pushStringParam: function(a, b) {
            this.pushStackLiteral("depth" + this.lastContext), this.pushString(b), "string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a)
        },
        emptyHash: function() {
            this.pushStackLiteral("{}"), this.options.stringParams && (this.register("hashTypes", "{}"), this.register("hashContexts", "{}"))
        },
        pushHash: function() {
            this.hash = {
                values: [],
                types: [],
                contexts: []
            }
        },
        popHash: function() {
            var a = this.hash;
            this.hash = void 0, this.options.stringParams && (this.register("hashContexts", "{" + a.contexts.join(",") + "}"), this.register("hashTypes", "{" + a.types.join(",") + "}")), this.push("{\n    " + a.values.join(",\n    ") + "\n  }")
        },
        pushString: function(a) {
            this.pushStackLiteral(this.quotedString(a))
        },
        push: function(a) {
            return this.inlineStack.push(a), a
        },
        pushLiteral: function(a) {
            this.pushStackLiteral(a)
        },
        pushProgram: function(a) {
            null != a ? this.pushStackLiteral(this.programExpression(a)) : this.pushStackLiteral(null)
        },
        invokeHelper: function(a, b) {
            this.context.aliases.helperMissing = "helpers.helperMissing";
            var c = this.lastHelper = this.setupHelper(a, b, !0),
                d = this.nameLookup("depth" + this.lastContext, b, "context");
            this.push(c.name + " || " + d), this.replaceStack(function(a) {
                return a + " ? " + a + ".call(" + c.callParams + ") : helperMissing.call(" + c.helperMissingParams + ")"
            })
        },
        invokeKnownHelper: function(a, b) {
            var c = this.setupHelper(a, b);
            this.push(c.name + ".call(" + c.callParams + ")")
        },
        invokeAmbiguous: function(a, b) {
            this.context.aliases.functionType = '"function"', this.pushStackLiteral("{}");
            var c = this.setupHelper(0, a, b),
                d = this.lastHelper = this.nameLookup("helpers", a, "helper"),
                e = this.nameLookup("depth" + this.lastContext, a, "context"),
                f = this.nextStack();
            this.pushSource("if (" + f + " = " + d + ") { " + f + " = " + f + ".call(" + c.callParams + "); }"), this.pushSource("else { " + f + " = " + e + "; " + f + " = typeof " + f + " === functionType ? " + f + ".call(" + c.callParams + ") : " + f + "; }")
        },
        invokePartial: function(a) {
            var b = [this.nameLookup("partials", a, "partial"), "'" + a + "'", this.popStack(), "helpers", "partials"];
            this.options.data && b.push("data"), this.context.aliases.self = "this", this.push("self.invokePartial(" + b.join(", ") + ")")
        },
        assignToHash: function(a) {
            var b, c, d = this.popStack();
            this.options.stringParams && (c = this.popStack(), b = this.popStack());
            var e = this.hash;
            b && e.contexts.push("'" + a + "': " + b), c && e.types.push("'" + a + "': " + c), e.values.push("'" + a + "': (" + d + ")")
        },
        compiler: d,
        compileChildren: function(a, b) {
            for (var c, d, e = a.children, f = 0, g = e.length; g > f; f++) {
                c = e[f], d = new this.compiler;
                var h = this.matchExistingProgram(c);
                null == h ? (this.context.programs.push(""), h = this.context.programs.length, c.index = h, c.name = "program" + h, this.context.programs[h] = d.compile(c, b, this.context), this.context.environments[h] = c) : (c.index = h, c.name = "program" + h)
            }
        },
        matchExistingProgram: function(a) {
            for (var b = 0, c = this.context.environments.length; c > b; b++) {
                var d = this.context.environments[b];
                if (d && d.equals(a)) return b
            }
        },
        programExpression: function(a) {
            if (this.context.aliases.self = "this", null == a) return "self.noop";
            for (var b, c = this.environment.children[a], d = c.depths.list, e = [c.index, c.name, "data"], f = 0, g = d.length; g > f; f++) b = d[f], 1 === b ? e.push("depth0") : e.push("depth" + (b - 1));
            return (0 === d.length ? "self.program(" : "self.programWithDepth(") + e.join(", ") + ")"
        },
        register: function(a, b) {
            this.useRegister(a), this.pushSource(a + " = " + b + ";")
        },
        useRegister: function(a) {
            this.registers[a] || (this.registers[a] = !0, this.registers.list.push(a))
        },
        pushStackLiteral: function(a) {
            return this.push(new c(a))
        },
        pushSource: function(a) {
            this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))), this.pendingContent = void 0), a && this.source.push(a)
        },
        pushStack: function(a) {
            this.flushInline();
            var b = this.incrStack();
            return a && this.pushSource(b + " = " + a + ";"), this.compileStack.push(b), b
        },
        replaceStack: function(a) {
            var b, d = "",
                e = this.isInline();
            if (e) {
                var f = this.popStack(!0);
                if (f instanceof c) b = f.value;
                else {
                    var g = this.stackSlot ? this.topStackName() : this.incrStack();
                    d = "(" + this.push(g) + " = " + f + "),", b = this.topStack()
                }
            } else b = this.topStack();
            var h = a.call(this, b);
            return e ? ((this.inlineStack.length || this.compileStack.length) && this.popStack(), this.push("(" + d + h + ")")) : (/^stack/.test(b) || (b = this.nextStack()), this.pushSource(b + " = (" + d + h + ");")), b
        },
        nextStack: function() {
            return this.pushStack()
        },
        incrStack: function() {
            return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
        },
        topStackName: function() {
            return "stack" + this.stackSlot
        },
        flushInline: function() {
            var a = this.inlineStack;
            if (a.length) {
                this.inlineStack = [];
                for (var b = 0, d = a.length; d > b; b++) {
                    var e = a[b];
                    e instanceof c ? this.compileStack.push(e) : this.pushStack(e)
                }
            }
        },
        isInline: function() {
            return this.inlineStack.length
        },
        popStack: function(a) {
            var b = this.isInline(),
                d = (b ? this.inlineStack : this.compileStack).pop();
            return !a && d instanceof c ? d.value : (b || this.stackSlot--, d)
        },
        topStack: function(a) {
            var b = this.isInline() ? this.inlineStack : this.compileStack,
                d = b[b.length - 1];
            return !a && d instanceof c ? d.value : d
        },
        quotedString: function(a) {
            return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
        },
        setupHelper: function(a, b, c) {
            var d = [];
            this.setupParams(a, d, c);
            var e = this.nameLookup("helpers", b, "helper");
            return {
                params: d,
                name: e,
                callParams: ["depth0"].concat(d).join(", "),
                helperMissingParams: c && ["depth0", this.quotedString(b)].concat(d).join(", ")
            }
        },
        setupParams: function(a, b, c) {
            var d, e, f, g = [],
                h = [],
                i = [];
            g.push("hash:" + this.popStack()), e = this.popStack(), f = this.popStack(), (f || e) && (f || (this.context.aliases.self = "this", f = "self.noop"), e || (this.context.aliases.self = "this", e = "self.noop"), g.push("inverse:" + e), g.push("fn:" + f));
            for (var j = 0; a > j; j++) d = this.popStack(), b.push(d), this.options.stringParams && (i.push(this.popStack()), h.push(this.popStack()));
            return this.options.stringParams && (g.push("contexts:[" + h.join(",") + "]"), g.push("types:[" + i.join(",") + "]"), g.push("hashContexts:hashContexts"), g.push("hashTypes:hashTypes")), this.options.data && g.push("data:data"), g = "{" + g.join(",") + "}", c ? (this.register("options", g), b.push("options")) : b.push(g), b.join(", ")
        }
    };
    for (var h = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), i = d.RESERVED_WORDS = {}, j = 0, k = h.length; k > j; j++) i[h[j]] = !0;
    d.isValidJavaScriptVariableName = function(a) {
        return !d.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(a) ? !0 : !1
    }, b["default"] = d
}), define("handlebars/handlebars/compiler/compiler", ["../exception", "./base", "./javascript-compiler", "./ast", "exports"], function(a, b, c, d, e) {
    "use strict";

    function f() {}

    function g(a, b) {
        if (null == a || "string" != typeof a && a.constructor !== l.ProgramNode) throw new i("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);
        b = b || {}, "data" in b || (b.data = !0);
        var c = j(a),
            d = (new f).compile(c, b);
        return (new k).compile(d, b)
    }

    function h(a, b, c) {
        function d() {
            var d = j(a),
                e = (new f).compile(d, b),
                g = (new k).compile(e, b, void 0, !0);
            return c.template(g)
        }
        if (null == a || "string" != typeof a && a.constructor !== l.ProgramNode) throw new i("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);
        b = b || {}, "data" in b || (b.data = !0);
        var e;
        return function(a, b) {
            return e || (e = d()), e.call(this, a, b)
        }
    }
    var i = a["default"],
        j = b.parse,
        k = c["default"],
        l = d;
    e.Compiler = f, f.prototype = {
        compiler: f,
        disassemble: function() {
            for (var a, b, c, d = this.opcodes, e = [], f = 0, g = d.length; g > f; f++)
                if (a = d[f], "DECLARE" === a.opcode) e.push("DECLARE " + a.name + "=" + a.value);
                else {
                    b = [];
                    for (var h = 0; h < a.args.length; h++) c = a.args[h], "string" == typeof c && (c = '"' + c.replace("\n", "\\n") + '"'), b.push(c);
                    e.push(a.opcode + " " + b.join(" "))
                }
            return e.join("\n")
        },
        equals: function(a) {
            var b = this.opcodes.length;
            if (a.opcodes.length !== b) return !1;
            for (var c = 0; b > c; c++) {
                var d = this.opcodes[c],
                    e = a.opcodes[c];
                if (d.opcode !== e.opcode || d.args.length !== e.args.length) return !1;
                for (var f = 0; f < d.args.length; f++)
                    if (d.args[f] !== e.args[f]) return !1
            }
            if (b = this.children.length, a.children.length !== b) return !1;
            for (c = 0; b > c; c++)
                if (!this.children[c].equals(a.children[c])) return !1;
            return !0
        },
        guid: 0,
        compile: function(a, b) {
            this.opcodes = [], this.children = [], this.depths = {
                list: []
            }, this.options = b;
            var c = this.options.knownHelpers;
            if (this.options.knownHelpers = {
                helperMissing: !0,
                blockHelperMissing: !0,
                each: !0,
                "if": !0,
                unless: !0,
                "with": !0,
                log: !0
            }, c)
                for (var d in c) this.options.knownHelpers[d] = c[d];
            return this.accept(a)
        },
        accept: function(a) {
            var b, c = a.strip || {};
            return c.left && this.opcode("strip"), b = this[a.type](a), c.right && this.opcode("strip"), b
        },
        program: function(a) {
            for (var b = a.statements, c = 0, d = b.length; d > c; c++) this.accept(b[c]);
            return this.isSimple = 1 === d, this.depths.list = this.depths.list.sort(function(a, b) {
                return a - b
            }), this
        },
        compileProgram: function(a) {
            var b, c = (new this.compiler).compile(a, this.options),
                d = this.guid++;
            this.usePartial = this.usePartial || c.usePartial, this.children[d] = c;
            for (var e = 0, f = c.depths.list.length; f > e; e++) b = c.depths.list[e], 2 > b || this.addDepth(b - 1);
            return d
        },
        block: function(a) {
            var b = a.mustache,
                c = a.program,
                d = a.inverse;
            c && (c = this.compileProgram(c)), d && (d = this.compileProgram(d));
            var e = this.classifyMustache(b);
            "helper" === e ? this.helperMustache(b, c, d) : "simple" === e ? (this.simpleMustache(b), this.opcode("pushProgram", c), this.opcode("pushProgram", d), this.opcode("emptyHash"), this.opcode("blockValue")) : (this.ambiguousMustache(b, c, d), this.opcode("pushProgram", c), this.opcode("pushProgram", d), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
        },
        hash: function(a) {
            var b, c, d = a.pairs;
            this.opcode("pushHash");
            for (var e = 0, f = d.length; f > e; e++) b = d[e], c = b[1], this.options.stringParams ? (c.depth && this.addDepth(c.depth), this.opcode("getContext", c.depth || 0), this.opcode("pushStringParam", c.stringModeValue, c.type)) : this.accept(c), this.opcode("assignToHash", b[0]);
            this.opcode("popHash")
        },
        partial: function(a) {
            var b = a.partialName;
            this.usePartial = !0, a.context ? this.ID(a.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", b.name), this.opcode("append")
        },
        content: function(a) {
            this.opcode("appendContent", a.string)
        },
        mustache: function(a) {
            var b = this.options,
                c = this.classifyMustache(a);
            "simple" === c ? this.simpleMustache(a) : "helper" === c ? this.helperMustache(a) : this.ambiguousMustache(a), a.escaped && !b.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
        },
        ambiguousMustache: function(a, b, c) {
            var d = a.id,
                e = d.parts[0],
                f = null != b || null != c;
            this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("invokeAmbiguous", e, f)
        },
        simpleMustache: function(a) {
            var b = a.id;
            "DATA" === b.type ? this.DATA(b) : b.parts.length ? this.ID(b) : (this.addDepth(b.depth), this.opcode("getContext", b.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
        },
        helperMustache: function(a, b, c) {
            var d = this.setupFullMustacheParams(a, b, c),
                e = a.id.parts[0];
            if (this.options.knownHelpers[e]) this.opcode("invokeKnownHelper", d.length, e);
            else {
                if (this.options.knownHelpersOnly) throw new Error("You specified knownHelpersOnly, but used the unknown helper " + e);
                this.opcode("invokeHelper", d.length, e)
            }
        },
        ID: function(a) {
            this.addDepth(a.depth), this.opcode("getContext", a.depth);
            var b = a.parts[0];
            b ? this.opcode("lookupOnContext", a.parts[0]) : this.opcode("pushContext");
            for (var c = 1, d = a.parts.length; d > c; c++) this.opcode("lookup", a.parts[c])
        },
        DATA: function(a) {
            if (this.options.data = !0, a.id.isScoped || a.id.depth) throw new i("Scoped data references are not supported: " + a.original);
            this.opcode("lookupData");
            for (var b = a.id.parts, c = 0, d = b.length; d > c; c++) this.opcode("lookup", b[c])
        },
        STRING: function(a) {
            this.opcode("pushString", a.string)
        },
        INTEGER: function(a) {
            this.opcode("pushLiteral", a.integer)
        },
        BOOLEAN: function(a) {
            this.opcode("pushLiteral", a.bool)
        },
        comment: function() {},
        opcode: function(a) {
            this.opcodes.push({
                opcode: a,
                args: [].slice.call(arguments, 1)
            })
        },
        declare: function(a, b) {
            this.opcodes.push({
                opcode: "DECLARE",
                name: a,
                value: b
            })
        },
        addDepth: function(a) {
            if (isNaN(a)) throw new Error("EWOT");
            0 !== a && (this.depths[a] || (this.depths[a] = !0, this.depths.list.push(a)))
        },
        classifyMustache: function(a) {
            var b = a.isHelper,
                c = a.eligibleHelper,
                d = this.options;
            if (c && !b) {
                var e = a.id.parts[0];
                d.knownHelpers[e] ? b = !0 : d.knownHelpersOnly && (c = !1)
            }
            return b ? "helper" : c ? "ambiguous" : "simple"
        },
        pushParams: function(a) {
            for (var b, c = a.length; c--;) b = a[c], this.options.stringParams ? (b.depth && this.addDepth(b.depth), this.opcode("getContext", b.depth || 0), this.opcode("pushStringParam", b.stringModeValue, b.type)) : this[b.type](b)
        },
        setupMustacheParams: function(a) {
            var b = a.params;
            return this.pushParams(b), a.hash ? this.hash(a.hash) : this.opcode("emptyHash"), b
        },
        setupFullMustacheParams: function(a, b, c) {
            var d = a.params;
            return this.pushParams(d), this.opcode("pushProgram", b), this.opcode("pushProgram", c), a.hash ? this.hash(a.hash) : this.opcode("emptyHash"), d
        }
    }, e.precompile = g, e.compile = h
}), define("handlebars/handlebars", ["./handlebars.runtime", "./handlebars/compiler/ast", "./handlebars/compiler/base", "./handlebars/compiler/compiler", "./handlebars/compiler/javascript-compiler", "exports"], function(a, b, c, d, e, f) {
    "use strict";
    var g = a["default"],
        h = b,
        i = c.parser,
        j = c.parse,
        k = d.Compiler,
        l = d.compile,
        m = d.precompile,
        n = e["default"],
        o = g.create,
        p = function() {
            var a = o();
            return a.compile = function(b, c) {
                return l(b, c, a)
            }, a.precompile = m, a.AST = h, a.Compiler = k, a.JavaScriptCompiler = n, a.Parser = i, a.parse = j, a
        };
    g = p(), g.create = p, f["default"] = g
}), define("handlebars", ["handlebars/handlebars"], function(a) {
    return a
}), define("eb-styleguide/js/template_helpers/amd/chain_helper", ["require", "underscore", "handlebars"], function(a) {
    "use strict";

    function b() {
        var a = c.first(arguments).replace(/\s+/, " ").split(" "),
            b = c.rest(arguments);
        return c(a).each(function(a) {
            return "string" != typeof a ? !1 : (b[0] = d["default"] ? d["default"].helpers[a].apply(null, b) : d.helpers[a].apply(null, b), !1)
        }), b[0]
    }
    var c = a("underscore"),
        d = a("handlebars");
    d["default"] ? d["default"].registerHelper("chain", b) : d.registerHelper("chain", b)
}), define("eb-styleguide/js/template_helpers/amd/i18n_helper", ["require", "handlebars"], function(a) {
    "use strict";

    function b(a, b) {
        return "undefined" != typeof window.gettext && (a = window.gettext(a)), "undefined" != typeof window.interpolate && (a = "object" == typeof b ? window.interpolate(a, b.hash, !0) : window.interpolate(a, Array.prototype.slice.call(arguments, 1), !1)), a
    }
    var c = a("handlebars");
    c["default"] ? c["default"].registerHelper("_", b) : c.registerHelper("_", b)
}), define("eb-styleguide/js/template_helpers/amd/mark_safe_helper", ["require", "handlebars"], function(a) {
    "use strict";

    function b(a) {
        return c["default"] ? new c["default"].SafeString(a) : new c.SafeString(a)
    }
    var c = a("handlebars");
    c["default"] ? c["default"].registerHelper("markSafe", b) : c.registerHelper("markSafe", b)
}), define("eb-styleguide/js/template_helpers/amd/widont", ["require", "jquery", "handlebars"], function(a) {
    "use strict";

    function b(a) {
        var b = c.trim(a).split(" "),
            f = b.pop(),
            g = 0;
        if (0 === b.length) return f;
        for (g = 0; g < b.length; g++) b[g] = d["default"] ? d["default"].Utils.escapeExpression(b[g]) : d.Utils.escapeExpression(b[g]);
        return f = d["default"] ? d["default"].Utils.escapeExpression(f) : d.Utils.escapeExpression(f), b.push(b.pop() + e + f), b.join(" ")
    }
    var c = a("jquery"),
        d = a("handlebars"),
        e = "&nbsp;";
    return b
}), define("eb-styleguide/js/template_helpers/amd/widont_helper", ["require", "handlebars", "./widont"], function(a) {
    "use strict";

    function b(a) {
        return c["default"] ? new c["default"].SafeString(d(a)) : new c.SafeString(d(a))
    }
    var c = a("handlebars"),
        d = a("./widont");
    c["default"] ? c["default"].registerHelper("widont", b) : c.registerHelper("widont", b)
}), require(["eb-styleguide/js/template_helpers/amd/chain_helper", "eb-styleguide/js/template_helpers/amd/i18n_helper", "eb-styleguide/js/template_helpers/amd/mark_safe_helper", "eb-styleguide/js/template_helpers/amd/widont_helper"], function() {}), define("require/core/bootstrap", function() {}), //     (c) 2010-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org
function() {
    var a, b = this,
        c = b.Backbone,
        d = [],
        e = d.push,
        f = d.slice,
        g = d.splice;
    a = "undefined" != typeof exports ? exports : b.Backbone = {}, a.VERSION = "1.0.0";
    var h = b._;
    h || "undefined" == typeof require || (h = require("underscore")), a.$ = b.jQuery || b.Zepto || b.ender || b.$, a.noConflict = function() {
        return b.Backbone = c, this
    }, a.emulateHTTP = !1, a.emulateJSON = !1;
    var i = a.Events = {
        on: function(a, b, c) {
            if (!k(this, "on", a, [b, c]) || !b) return this;
            this._events || (this._events = {});
            var d = this._events[a] || (this._events[a] = []);
            return d.push({
                callback: b,
                context: c,
                ctx: c || this
            }), this
        },
        once: function(a, b, c) {
            if (!k(this, "once", a, [b, c]) || !b) return this;
            var d = this,
                e = h.once(function() {
                    d.off(a, e), b.apply(this, arguments)
                });
            return e._callback = b, this.on(a, e, c)
        },
        off: function(a, b, c) {
            var d, e, f, g, i, j, l, m;
            if (!this._events || !k(this, "off", a, [b, c])) return this;
            if (!a && !b && !c) return this._events = {}, this;
            for (g = a ? [a] : h.keys(this._events), i = 0, j = g.length; j > i; i++)
                if (a = g[i], f = this._events[a]) {
                    if (this._events[a] = d = [], b || c)
                        for (l = 0, m = f.length; m > l; l++) e = f[l], (b && b !== e.callback && b !== e.callback._callback || c && c !== e.context) && d.push(e);
                    d.length || delete this._events[a]
                }
            return this
        },
        trigger: function(a) {
            if (!this._events) return this;
            var b = f.call(arguments, 1);
            if (!k(this, "trigger", a, b)) return this;
            var c = this._events[a],
                d = this._events.all;
            return c && l(c, b), d && l(d, arguments), this
        },
        stopListening: function(a, b, c) {
            var d = this._listeners;
            if (!d) return this;
            var e = !b && !c;
            "object" == typeof b && (c = this), a && ((d = {})[a._listenerId] = a);
            for (var f in d) d[f].off(b, c, this), e && delete this._listeners[f];
            return this
        }
    }, j = /\s+/,
        k = function(a, b, c, d) {
            if (!c) return !0;
            if ("object" == typeof c) {
                for (var e in c) a[b].apply(a, [e, c[e]].concat(d));
                return !1
            }
            if (j.test(c)) {
                for (var f = c.split(j), g = 0, h = f.length; h > g; g++) a[b].apply(a, [f[g]].concat(d));
                return !1
            }
            return !0
        }, l = function(a, b) {
            var c, d = -1,
                e = a.length,
                f = b[0],
                g = b[1],
                h = b[2];
            switch (b.length) {
                case 0:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx);
                    return;
                case 1:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f);
                    return;
                case 2:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f, g);
                    return;
                case 3:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f, g, h);
                    return;
                default:
                    for (; ++d < e;)(c = a[d]).callback.apply(c.ctx, b)
            }
        }, m = {
            listenTo: "on",
            listenToOnce: "once"
        };
    h.each(m, function(a, b) {
        i[b] = function(b, c, d) {
            var e = this._listeners || (this._listeners = {}),
                f = b._listenerId || (b._listenerId = h.uniqueId("l"));
            return e[f] = b, "object" == typeof c && (d = this), b[a](c, d, this), this
        }
    }), i.bind = i.on, i.unbind = i.off, h.extend(a, i);
    var n = a.Model = function(a, b) {
        var c, d = a || {};
        b || (b = {}), this.cid = h.uniqueId("c"), this.attributes = {}, h.extend(this, h.pick(b, o)), b.parse && (d = this.parse(d, b) || {}), (c = h.result(this, "defaults")) && (d = h.defaults({}, d, c)), this.set(d, b), this.changed = {}, this.initialize.apply(this, arguments)
    }, o = ["url", "urlRoot", "collection"];
    h.extend(n.prototype, i, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function() {
            return h.clone(this.attributes)
        },
        sync: function() {
            return a.sync.apply(this, arguments)
        },
        get: function(a) {
            return this.attributes[a]
        },
        escape: function(a) {
            return h.escape(this.get(a))
        },
        has: function(a) {
            return null != this.get(a)
        },
        set: function(a, b, c) {
            var d, e, f, g, i, j, k, l;
            if (null == a) return this;
            if ("object" == typeof a ? (e = a, c = b) : (e = {})[a] = b, c || (c = {}), !this._validate(e, c)) return !1;
            f = c.unset, i = c.silent, g = [], j = this._changing, this._changing = !0, j || (this._previousAttributes = h.clone(this.attributes), this.changed = {}), l = this.attributes, k = this._previousAttributes, this.idAttribute in e && (this.id = e[this.idAttribute]);
            for (d in e) b = e[d], h.isEqual(l[d], b) || g.push(d), h.isEqual(k[d], b) ? delete this.changed[d] : this.changed[d] = b, f ? delete l[d] : l[d] = b;
            if (!i) {
                g.length && (this._pending = !0);
                for (var m = 0, n = g.length; n > m; m++) this.trigger("change:" + g[m], this, l[g[m]], c)
            }
            if (j) return this;
            if (!i)
                for (; this._pending;) this._pending = !1, this.trigger("change", this, c);
            return this._pending = !1, this._changing = !1, this
        },
        unset: function(a, b) {
            return this.set(a, void 0, h.extend({}, b, {
                unset: !0
            }))
        },
        clear: function(a) {
            var b = {};
            for (var c in this.attributes) b[c] = void 0;
            return this.set(b, h.extend({}, a, {
                unset: !0
            }))
        },
        hasChanged: function(a) {
            return null == a ? !h.isEmpty(this.changed) : h.has(this.changed, a)
        },
        changedAttributes: function(a) {
            if (!a) return this.hasChanged() ? h.clone(this.changed) : !1;
            var b, c = !1,
                d = this._changing ? this._previousAttributes : this.attributes;
            for (var e in a) h.isEqual(d[e], b = a[e]) || ((c || (c = {}))[e] = b);
            return c
        },
        previous: function(a) {
            return null != a && this._previousAttributes ? this._previousAttributes[a] : null
        },
        previousAttributes: function() {
            return h.clone(this._previousAttributes)
        },
        fetch: function(a) {
            a = a ? h.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
            var b = this,
                c = a.success;
            return a.success = function(d) {
                return b.set(b.parse(d, a), a) ? (c && c(b, d, a), b.trigger("sync", b, d, a), void 0) : !1
            }, L(this, a), this.sync("read", this, a)
        },
        save: function(a, b, c) {
            var d, e, f, g = this.attributes;
            if (null == a || "object" == typeof a ? (d = a, c = b) : (d = {})[a] = b, !(!d || c && c.wait || this.set(d, c))) return !1;
            if (c = h.extend({
                validate: !0
            }, c), !this._validate(d, c)) return !1;
            d && c.wait && (this.attributes = h.extend({}, g, d)), void 0 === c.parse && (c.parse = !0);
            var i = this,
                j = c.success;
            return c.success = function(a) {
                i.attributes = g;
                var b = i.parse(a, c);
                return c.wait && (b = h.extend(d || {}, b)), h.isObject(b) && !i.set(b, c) ? !1 : (j && j(i, a, c), i.trigger("sync", i, a, c), void 0)
            }, L(this, c), e = this.isNew() ? "create" : c.patch ? "patch" : "update", "patch" === e && (c.attrs = d), f = this.sync(e, this, c), d && c.wait && (this.attributes = g), f
        },
        destroy: function(a) {
            a = a ? h.clone(a) : {};
            var b = this,
                c = a.success,
                d = function() {
                    b.trigger("destroy", b, b.collection, a)
                };
            if (a.success = function(e) {
                (a.wait || b.isNew()) && d(), c && c(b, e, a), b.isNew() || b.trigger("sync", b, e, a)
            }, this.isNew()) return a.success(), !1;
            L(this, a);
            var e = this.sync("delete", this, a);
            return a.wait || d(), e
        },
        url: function() {
            var a = h.result(this, "urlRoot") || h.result(this.collection, "url") || K();
            return this.isNew() ? a : a + ("/" === a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function(a) {
            return a
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return null == this.id
        },
        isValid: function(a) {
            return this._validate({}, h.extend(a || {}, {
                validate: !0
            }))
        },
        _validate: function(a, b) {
            if (!b.validate || !this.validate) return !0;
            a = h.extend({}, this.attributes, a);
            var c = this.validationError = this.validate(a, b) || null;
            return c ? (this.trigger("invalid", this, c, h.extend(b || {}, {
                validationError: c
            })), !1) : !0
        }
    });
    var p = ["keys", "values", "pairs", "invert", "pick", "omit"];
    h.each(p, function(a) {
        n.prototype[a] = function() {
            var b = f.call(arguments);
            return b.unshift(this.attributes), h[a].apply(h, b)
        }
    });
    var q = a.Collection = function(a, b) {
        b || (b = {}), b.url && (this.url = b.url), b.model && (this.model = b.model), void 0 !== b.comparator && (this.comparator = b.comparator), this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, h.extend({
            silent: !0
        }, b))
    }, r = {
            add: !0,
            remove: !0,
            merge: !0
        }, s = {
            add: !0,
            merge: !1,
            remove: !1
        };
    h.extend(q.prototype, i, {
        model: n,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a)
            })
        },
        sync: function() {
            return a.sync.apply(this, arguments)
        },
        add: function(a, b) {
            return this.set(a, h.defaults(b || {}, s))
        },
        remove: function(a, b) {
            a = h.isArray(a) ? a.slice() : [a], b || (b = {});
            var c, d, e, f;
            for (c = 0, d = a.length; d > c; c++) f = this.get(a[c]), f && (delete this._byId[f.id], delete this._byId[f.cid], e = this.indexOf(f), this.models.splice(e, 1), this.length--, b.silent || (b.index = e, f.trigger("remove", f, this, b)), this._removeReference(f));
            return this
        },
        set: function(a, b) {
            b = h.defaults(b || {}, r), b.parse && (a = this.parse(a, b)), h.isArray(a) || (a = a ? [a] : []);
            var c, d, f, i, j, k = b.at,
                l = this.comparator && null == k && b.sort !== !1,
                m = h.isString(this.comparator) ? this.comparator : null,
                n = [],
                o = [],
                p = {};
            for (c = 0, d = a.length; d > c; c++)(f = this._prepareModel(a[c], b)) && ((i = this.get(f)) ? (b.remove && (p[i.cid] = !0), b.merge && (i.set(f.attributes, b), l && !j && i.hasChanged(m) && (j = !0))) : b.add && (n.push(f), f.on("all", this._onModelEvent, this), this._byId[f.cid] = f, null != f.id && (this._byId[f.id] = f)));
            if (b.remove) {
                for (c = 0, d = this.length; d > c; ++c) p[(f = this.models[c]).cid] || o.push(f);
                o.length && this.remove(o, b)
            }
            if (n.length && (l && (j = !0), this.length += n.length, null != k ? g.apply(this.models, [k, 0].concat(n)) : e.apply(this.models, n)), j && this.sort({
                silent: !0
            }), b.silent) return this;
            for (c = 0, d = n.length; d > c; c++)(f = n[c]).trigger("add", f, this, b);
            return j && this.trigger("sort", this, b), this
        },
        reset: function(a, b) {
            b || (b = {});
            for (var c = 0, d = this.models.length; d > c; c++) this._removeReference(this.models[c]);
            return b.previousModels = this.models, this._reset(), this.add(a, h.extend({
                silent: !0
            }, b)), b.silent || this.trigger("reset", this, b), this
        },
        push: function(a, b) {
            return a = this._prepareModel(a, b), this.add(a, h.extend({
                at: this.length
            }, b)), a
        },
        pop: function(a) {
            var b = this.at(this.length - 1);
            return this.remove(b, a), b
        },
        unshift: function(a, b) {
            return a = this._prepareModel(a, b), this.add(a, h.extend({
                at: 0
            }, b)), a
        },
        shift: function(a) {
            var b = this.at(0);
            return this.remove(b, a), b
        },
        slice: function(a, b) {
            return this.models.slice(a, b)
        },
        get: function(a) {
            return null == a ? void 0 : this._byId[null != a.id ? a.id : a.cid || a]
        },
        at: function(a) {
            return this.models[a]
        },
        where: function(a, b) {
            return h.isEmpty(a) ? b ? void 0 : [] : this[b ? "find" : "filter"](function(b) {
                for (var c in a)
                    if (a[c] !== b.get(c)) return !1;
                return !0
            })
        },
        findWhere: function(a) {
            return this.where(a, !0)
        },
        sort: function(a) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return a || (a = {}), h.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(h.bind(this.comparator, this)), a.silent || this.trigger("sort", this, a), this
        },
        sortedIndex: function(a, b, c) {
            b || (b = this.comparator);
            var d = h.isFunction(b) ? b : function(a) {
                    return a.get(b)
                };
            return h.sortedIndex(this.models, a, d, c)
        },
        pluck: function(a) {
            return h.invoke(this.models, "get", a)
        },
        fetch: function(a) {
            a = a ? h.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
            var b = a.success,
                c = this;
            return a.success = function(d) {
                var e = a.reset ? "reset" : "set";
                c[e](d, a), b && b(c, d, a), c.trigger("sync", c, d, a)
            }, L(this, a), this.sync("read", this, a)
        },
        create: function(a, b) {
            if (b = b ? h.clone(b) : {}, !(a = this._prepareModel(a, b))) return !1;
            b.wait || this.add(a, b);
            var c = this,
                d = b.success;
            return b.success = function(e) {
                b.wait && c.add(a, b), d && d(a, e, b)
            }, a.save(null, b), a
        },
        parse: function(a) {
            return a
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {}
        },
        _prepareModel: function(a, b) {
            if (a instanceof n) return a.collection || (a.collection = this), a;
            b || (b = {}), b.collection = this;
            var c = new this.model(a, b);
            return c._validate(a, b) ? c : (this.trigger("invalid", this, a, b), !1)
        },
        _removeReference: function(a) {
            this === a.collection && delete a.collection, a.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(a, b, c, d) {
            ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments))
        }
    });
    var t = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    h.each(t, function(a) {
        q.prototype[a] = function() {
            var b = f.call(arguments);
            return b.unshift(this.models), h[a].apply(h, b)
        }
    });
    var u = ["groupBy", "countBy", "sortBy"];
    h.each(u, function(a) {
        q.prototype[a] = function(b, c) {
            var d = h.isFunction(b) ? b : function(a) {
                    return a.get(b)
                };
            return h[a](this.models, d, c)
        }
    });
    var v = a.View = function(a) {
        this.cid = h.uniqueId("view"), this._configure(a || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
    }, w = /^(\S+)\s*(.*)$/,
        x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    h.extend(v.prototype, i, {
        tagName: "div",
        $: function(a) {
            return this.$el.find(a)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(), this.stopListening(), this
        },
        setElement: function(b, c) {
            return this.$el && this.undelegateEvents(), this.$el = b instanceof a.$ ? b : a.$(b), this.el = this.$el[0], c !== !1 && this.delegateEvents(), this
        },
        delegateEvents: function(a) {
            if (!a && !(a = h.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var b in a) {
                var c = a[b];
                if (h.isFunction(c) || (c = this[a[b]]), c) {
                    var d = b.match(w),
                        e = d[1],
                        f = d[2];
                    c = h.bind(c, this), e += ".delegateEvents" + this.cid, "" === f ? this.$el.on(e, c) : this.$el.on(e, f, c)
                }
            }
            return this
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid), this
        },
        _configure: function(a) {
            this.options && (a = h.extend({}, h.result(this, "options"), a)), h.extend(this, h.pick(a, x)), this.options = a
        },
        _ensureElement: function() {
            if (this.el) this.setElement(h.result(this, "el"), !1);
            else {
                var b = h.extend({}, h.result(this, "attributes"));
                this.id && (b.id = h.result(this, "id")), this.className && (b["class"] = h.result(this, "className"));
                var c = a.$("<" + h.result(this, "tagName") + ">").attr(b);
                this.setElement(c, !1)
            }
        }
    }), a.sync = function(b, c, d) {
        var e = y[b];
        h.defaults(d || (d = {}), {
            emulateHTTP: a.emulateHTTP,
            emulateJSON: a.emulateJSON
        });
        var f = {
            type: e,
            dataType: "json"
        };
        if (d.url || (f.url = h.result(c, "url") || K()), null != d.data || !c || "create" !== b && "update" !== b && "patch" !== b || (f.contentType = "application/json", f.data = JSON.stringify(d.attrs || c.toJSON(d))), d.emulateJSON && (f.contentType = "application/x-www-form-urlencoded", f.data = f.data ? {
            model: f.data
        } : {}), d.emulateHTTP && ("PUT" === e || "DELETE" === e || "PATCH" === e)) {
            f.type = "POST", d.emulateJSON && (f.data._method = e);
            var g = d.beforeSend;
            d.beforeSend = function(a) {
                return a.setRequestHeader("X-HTTP-Method-Override", e), g ? g.apply(this, arguments) : void 0
            }
        }
        "GET" === f.type || d.emulateJSON || (f.processData = !1), "PATCH" !== f.type || !window.ActiveXObject || window.external && window.external.msActiveXFilteringEnabled || (f.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var i = d.xhr = a.ajax(h.extend(f, d));
        return c.trigger("request", c, i, d), i
    };
    var y = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    a.ajax = function() {
        return a.$.ajax.apply(a.$, arguments)
    };
    var z = a.Router = function(a) {
        a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
    }, A = /\((.*?)\)/g,
        B = /(\(\?)?:\w+/g,
        C = /\*\w+/g,
        D = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    h.extend(z.prototype, i, {
        initialize: function() {},
        route: function(b, c, d) {
            h.isRegExp(b) || (b = this._routeToRegExp(b)), h.isFunction(c) && (d = c, c = ""), d || (d = this[c]);
            var e = this;
            return a.history.route(b, function(f) {
                var g = e._extractParameters(b, f);
                d && d.apply(e, g), e.trigger.apply(e, ["route:" + c].concat(g)), e.trigger("route", c, g), a.history.trigger("route", e, c, g)
            }), this
        },
        navigate: function(b, c) {
            return a.history.navigate(b, c), this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = h.result(this, "routes");
                for (var a, b = h.keys(this.routes); null != (a = b.pop());) this.route(a, this.routes[a])
            }
        },
        _routeToRegExp: function(a) {
            return a = a.replace(D, "\\$&").replace(A, "(?:$1)?").replace(B, function(a, b) {
                return b ? a : "([^/]+)"
            }).replace(C, "(.*?)"), new RegExp("^" + a + "$")
        },
        _extractParameters: function(a, b) {
            var c = a.exec(b).slice(1);
            return h.map(c, function(a) {
                return a ? decodeURIComponent(a) : null
            })
        }
    });
    var E = a.History = function() {
        this.handlers = [], h.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
    }, F = /^[#\/]|\s+$/g,
        G = /^\/+|\/+$/g,
        H = /msie [\w.]+/,
        I = /\/$/;
    E.started = !1, h.extend(E.prototype, i, {
        interval: 50,
        getHash: function(a) {
            var b = (a || this).location.href.match(/#(.*)$/);
            return b ? b[1] : ""
        },
        getFragment: function(a, b) {
            if (null == a)
                if (this._hasPushState || !this._wantsHashChange || b) {
                    a = this.location.pathname;
                    var c = this.root.replace(I, "");
                    a.indexOf(c) || (a = a.substr(c.length))
                } else a = this.getHash();
            return a.replace(F, "")
        },
        start: function(b) {
            if (E.started) throw new Error("Backbone.history has already been started");
            E.started = !0, this.options = h.extend({}, {
                root: "/"
            }, this.options, b), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !! this.options.pushState, this._hasPushState = !! (this.options.pushState && this.history && this.history.pushState);
            var c = this.getFragment(),
                d = document.documentMode,
                e = H.exec(navigator.userAgent.toLowerCase()) && (!d || 7 >= d);
            this.root = ("/" + this.root + "/").replace(G, "/"), e && this._wantsHashChange && (this.iframe = a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(c)), this._hasPushState ? a.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !e ? a.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = c;
            var f = this.location,
                g = f.pathname.replace(/[^\/]$/, "$&/") === this.root;
            return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !g ? (this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && g && f.hash && (this.fragment = this.getHash().replace(F, ""), this.history.replaceState({}, document.title, this.root + this.fragment + f.search)), this.options.silent ? void 0 : this.loadUrl())
        },
        stop: function() {
            a.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), E.started = !1
        },
        route: function(a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            })
        },
        checkUrl: function() {
            var a = this.getFragment();
            return a === this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe))), a === this.fragment ? !1 : (this.iframe && this.navigate(a), this.loadUrl() || this.loadUrl(this.getHash()), void 0)
        },
        loadUrl: function(a) {
            var b = this.fragment = this.getFragment(a),
                c = h.any(this.handlers, function(a) {
                    return a.route.test(b) ? (a.callback(b), !0) : void 0
                });
            return c
        },
        navigate: function(a, b) {
            if (!E.started) return !1;
            if (b && b !== !0 || (b = {
                trigger: b
            }), a = this.getFragment(a || ""), this.fragment !== a) {
                this.fragment = a;
                var c = this.root + a;
                if (this._hasPushState) this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c);
                else {
                    if (!this._wantsHashChange) return this.location.assign(c);
                    this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, a, b.replace))
                }
                b.trigger && this.loadUrl(a)
            }
        },
        _updateHash: function(a, b, c) {
            if (c) {
                var d = a.href.replace(/(javascript:|#).*$/, "");
                a.replace(d + "#" + b)
            } else a.hash = "#" + b
        }
    }), a.history = new E;
    var J = function(a, b) {
        var c, d = this;
        c = a && h.has(a, "constructor") ? a.constructor : function() {
            return d.apply(this, arguments)
        }, h.extend(c, d, b);
        var e = function() {
            this.constructor = c
        };
        return e.prototype = d.prototype, c.prototype = new e, a && h.extend(c.prototype, a), c.__super__ = d.prototype, c
    };
    n.extend = q.extend = z.extend = v.extend = E.extend = J;
    var K = function() {
        throw new Error('A "url" property or function must be specified')
    }, L = function(a, b) {
            var c = b.error;
            b.error = function(d) {
                c && c(a, d, b), a.trigger("error", a, d, b)
            }
        }
}.call(this), define("vendor/backbone-1.0.0", function() {}), // Copyright 2013 Dataminr
// Licensed under The MIT License
// http://opensource.org/licenses/MIT
// work derived from https://github.com/twitter/flight/blob/master/lib/advice.js
// ==========================================
// Copyright 2013 Twitter, Inc
// Licensed under The MIT License
// http://opensource.org/licenses/MIT
// ==========================================
Backbone.Advice = {
    around: function(a, b) {
        return function() {
            var c = [].slice.call(arguments, 0);
            return b.apply(this, [_.bind(a, this)].concat(c))
        }
    },
    before: function(a, b) {
        return this.around(a, function() {
            var a, c = [].slice.call(arguments, 0),
                d = c.shift();
            return a = "function" == typeof b ? b : b.obj[b.fnName], a.apply(this, c), d.apply(this, c)
        })
    },
    after: function(a, b) {
        return this.around(a, function() {
            var a, c = [].slice.call(arguments, 0),
                d = c.shift(),
                e = (d.unbound || d).apply(this, c);
            return a = "function" == typeof b ? b : b.obj[b.fnName], a.apply(this, c), e
        })
    },
    clobber: function(a, b) {
        var c = this;
        if ("function" == typeof c && (c = this.prototype), _.isString(a)) {
            var d = a;
            a = {}, a[d] = b
        }
        return _.extend(c, a), this
    },
    addToObj: function(a) {
        var b = this;
        return "function" == typeof b && (b = this.prototype), _.each(a, function(a, c) {
            b[c] = _.extend(_.clone(Backbone.Advice.findVal(b, c)) || {}, a)
        }), this
    },
    setDefaults: function(a) {
        var b = this;
        return "function" == typeof b && (b = this.prototype), _.each(a, function(a, c) {
            Backbone.Advice.findVal(b, c) || (b[c] = a)
        }), this
    },
    findVal: function(a, b) {
        for (; !a[b] && a.prototype;) a = a.prototype;
        return a[b]
    },
    mixin: function(a, b) {
        return this.mixedIn = _.clone(this.mixedIn) || [], this.__super__ && this.mixedOptions != this.__super__.constructor.mixedOptions || (this.mixedOptions = _.clone(this.mixedOptions) || {}), _.extend(this.mixedOptions, b), _.isArray(a) || (a = [a]), a = _(a).map(function(a) {
            return _.isFunction(a) ? !_.contains(this.mixedIn, a) && (this.mixedIn.push(a), a) ? a.call(this, this.mixedOptions) : void 0 : a
        }, this), _(a).each(function(a) {
            a && (a = _.clone(a), _(["mixin", "around", "after", "before", "clobber", "addToObj", "setDefaults"]).each(function(b) {
                a[b] && ("mixin" == b ? this[b](a[b], this.mixedOptions) : this[b](a[b]), delete a[b])
            }, this), _.each(_.keys(a), function(b) {
                if (_.isFunction(a[b])) this.after(b, a[b]);
                else if (_.isObject(a[b]) && !_.isArray(a[b])) {
                    var c = {};
                    c[b] = a[b], this.addToObj(c)
                } else this.clobber(b, a[b])
            }, this))
        }, this), this
    },
    hasMixin: function(a) {
        var b = this.mixedIn || this.constructor.mixedIn;
        return _.contains(b, a)
    },
    addMixin: function(a) {
        ["before", "after", "around"].forEach(function(b) {
            a[b] = function(a, c) {
                if ("object" == typeof a) return _.each(_.keys(a), function(c) {
                    this[b](c, a[c])
                }, this), this;
                var d = this;
                "function" == typeof d && (d = this.prototype);
                var e = Backbone.Advice.findVal(d, a);
                return "function" != typeof e && (e = _.identity), d[a] = Backbone.Advice[b](e, c), this
            }
        }), a.mixin = Backbone.Advice.mixin, a.addToObj = Backbone.Advice.addToObj, a.setDefaults = Backbone.Advice.setDefaults, a.findVal = Backbone.Advice.findVal, a.clobber = Backbone.Advice.clobber, a.prototype.hasMixin = a.hasMixin = Backbone.Advice.hasMixin
    }
}, Backbone.Advice.addMixin(Backbone.View), Backbone.Advice.addMixin(Backbone.Model), Backbone.Advice.addMixin(Backbone.Collection), define("backbone_advice", ["vendor/backbone-1.0.0"], function(a) {
    return function() {
        var b;
        return b || a.Backbone.Advice
    }
}(this)),
function(a, b, c, d, e) {
    "use strict";
    b.Backbone = b.Backbone || e, b.Backbone.Model = e.Model.extend({
        callbackHandler: function() {
            var a = arguments;
            return function() {
                var b, c = a.length;
                for (b = 0; c > b; b++) "function" == typeof a[b] && a[b].apply(this, arguments)
            }
        }
    })
}(jQuery, EB, window, window._, window.Backbone), define("eb/_backbone/model", function() {}),
function(a, b, c, d, e) {
    "use strict";
    b.Backbone = b.Backbone || e, b.Backbone.View = e.View.extend({
        show: function() {
            this.$el.removeClass("hidden")
        },
        hide: function() {
            this.$el.addClass("hidden")
        },
        assign: function(a, b) {
            this.subviewAction("assign", a, b)
        },
        append: function(a, b) {
            this.subviewAction("append", a, b)
        },
        subviewAction: function(a, b, c) {
            var e;
            d.isObject(b) ? e = b : (e = {}, e[b] = c), e && d.each(e, function(b, c) {
                this["_" + a](b, c)
            }, this)
        },
        _append: function(a, b) {
            this.$(b).append(a.render().$el), a.setElement(a.$el)
        },
        _assign: function(a, b) {
            a.setElement(this.$(b)).render()
        }
    })
}(jQuery, EB, window, window._, window.Backbone), define("eb/_backbone/view", function() {}),
function(a, b, c, d, e) {
    "use strict";
    b.Backbone = b.Backbone || e, b.Backbone.Router = e.Router.extend({
        registerRoute: function(a, b, c, d) {
            var e = this;
            if ("undefined" == typeof d && (d = this), "function" != typeof c) throw new Error("Route callback must be a function.");
            this.registeredRoutes || (this.registeredRoutes = {}), b in this.registeredRoutes || (this.registeredRoutes[b] = [], this.route(a, b, function() {
                e.doRoute(b, arguments)
            })), this.registeredRoutes[b].push({
                callback: c,
                context: d
            })
        },
        doRoute: function(a, b) {
            var c = -1,
                d = 0,
                e = this.registeredRoutes[a],
                f = null;
            for (c = 0, d = e.length; d > c; c++) f = e[c], f.callback.apply(f.context, b)
        }
    })
}(jQuery, EB, window, window._, window.Backbone), define("eb/_backbone/router", function() {}),
function(a, b, c, d, e) {
    "use strict";
    b.Backbone = b.Backbone || e, b.Backbone.Collection = e.Collection.extend({})
}(jQuery, EB, window, window._, window.Backbone), define("eb/_backbone/collection", function() {}), define("backbone", ["vendor/backbone-1.0.0", "backbone_advice", "eb/_backbone/model", "eb/_backbone/view", "eb/_backbone/router", "eb/_backbone/collection"], function() {
    "use strict";
    return window.EB.Backbone
}), define("backbone-events-standalone", ["require", "underscore", "backbone"], function(a) {
    var b = a("underscore"),
        c = a("backbone");
    return c.Events.mixin = function(a) {
        b.extend(a, c.Events)
    }, c.Events
}), define("mediatorjs", ["require", "exports", "module", "backbone-events-standalone"], function(a, b, c) {
    (function() {
        var b, d, e;
        b = a("backbone-events-standalone"), d = function() {
            function a() {}
            return a.prototype.attributes = {}, a.prototype.set = function(a, b) {
                return this.attributes[a] = b
            }, a.prototype.get = function(a) {
                return this.attributes[a]
            }, a
        }(), b.mixin(d.prototype), e = new d, e.Mediator = d, c.exports = e
    }).call(this)
}),
/**
 * @license
 * Copyright 2014 Eventbrite
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*! dorsal - v0.4.0 - 2014-07-11 */
function(a, b) {
    "object" == typeof exports ? module.exports = b() : "function" == typeof define && define.amd ? define("dorsal", [], b) : a.Dorsal = b()
}(this, function() {
    function a(a, b) {
        var c = a.length,
            d = 0;
        if (a.indexOf) return a.indexOf(b);
        for (; c > d; d++)
            if (a[d] === b) return d;
        return -1
    }
    var b = function() {
        function a() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
            return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
        }
    }(),
        c = function() {};
    c.prototype.VERSION = "0.4.0", c.prototype.CSS_PREFIX = ".js-d-", c.prototype.DATA_IGNORE_PREFIX = "xd", c.prototype.DATA_PREFIX = "d", c.prototype.DATA_DORSAL_WIRED = "data-" + c.prototype.DATA_IGNORE_PREFIX + "-wired", c.prototype.GUID_KEY = "dorsal-guid", c.prototype.ELEMENT_TO_PLUGINS_MAP = {}, c.prototype.registerPlugin = function(a, b) {
        this.plugins || (this.plugins = {}), this.plugins[a] = b
    }, c.prototype.unregisterPlugin = function(a) {
        delete this.plugins[a]
    }, c.prototype._getDatasetAttributes = function(a) {
        var b = a.dataset,
            c = {};
        for (var d in b)
            if (new RegExp("^" + this.DATA_PREFIX + "[A-Z]").test(d)) {
                var e = d.substr(this.DATA_PREFIX.length),
                    f = e[0].toLowerCase() + e.substr(1);
                c[f] = b[d]
            }
        return c
    }, c.prototype._normalizeDataAttribute = function(a) {
        return a.toUpperCase().replace("-", "")
    }, c.prototype._getDataAttributes = function(a) {
        var b = {}, c = a.attributes,
            d = c.length,
            e = "name",
            f = 0;
        for (f = 0; d > f; f++)
            if (new RegExp("^data-" + this.DATA_PREFIX + "-").test(c[f][e])) {
                var g = c[f][e].substr(5 + this.DATA_PREFIX.length + 1).toLowerCase().replace(/(\-[a-zA-Z])/g, this._normalizeDataAttribute);
                b[g] = c[f].value
            }
        return b
    }, c.prototype._getAttributes = function(a) {
        return a.dataset ? this._getDatasetAttributes(a) : this._getDataAttributes(a)
    }, c.prototype._runPlugin = function(a, c) {
        if (a.getAttribute(this.DATA_DORSAL_WIRED) && -1 !== a.getAttribute(this.DATA_DORSAL_WIRED).indexOf(c)) return !1;
        var d = this._getAttributes(a),
            e = a.getAttribute(this.DATA_DORSAL_WIRED),
            f = this.plugins[c],
            g = {
                el: a,
                data: d
            }, h = a.getAttribute(this.GUID_KEY);
        h || (h = b(), a.setAttribute(this.GUID_KEY, h), this.ELEMENT_TO_PLUGINS_MAP[h] = {}), "function" == typeof f ? this.ELEMENT_TO_PLUGINS_MAP[h][c] = f.call(a, g) : "object" == typeof f && (this.ELEMENT_TO_PLUGINS_MAP[h][c] = f.create.call(a, g)), e ? a.setAttribute(this.DATA_DORSAL_WIRED, e + " " + c) : a.setAttribute(this.DATA_DORSAL_WIRED, c)
    }, c.prototype._wireElement = function(a, b, c) {
        var d = this;
        window.setTimeout(function() {
            var e, f = d.CSS_PREFIX + b,
                g = a.querySelectorAll(f);
            a !== document && a.className.indexOf(f.substr(1)) > -1 && (e = d._runPlugin(a, b), c.notify(b, e, d));
            for (var h, i = 0; h = g[i]; i++) e = d._runPlugin(h, b), c.notify(b, e, d)
        }, 0)
    }, c.prototype._detachPlugin = function(b, d) {
        var e, f = !1;
        return "string" != typeof b.getAttribute(this.DATA_DORSAL_WIRED) ? !1 : (b.getAttribute(this.DATA_DORSAL_WIRED).indexOf(d) > -1 && this.plugins[d].destroy && (this.plugins[d].destroy({
            el: b,
            data: this._getAttributes(b),
            instance: this.ELEMENT_TO_PLUGINS_MAP[b.getAttribute(c.prototype.GUID_KEY)][d]
        }), f = !0), e = b.getAttribute(this.DATA_DORSAL_WIRED).split(" "), e.splice(a(e, d), 1), b.setAttribute(this.DATA_DORSAL_WIRED, e.join(" ")), f)
    }, c.prototype.unwire = function(a, b) {
        if (b) return this._detachPlugin(a, b);
        for (var c, d = a.getAttribute(this.DATA_DORSAL_WIRED).split(" "), e = d.length, f = !1, g = 0; e > g; g++) c = d[g], this._detachPlugin(a, c) && (f = !0);
        return f
    }, c.prototype.wire = function(a, b) {
        var c = new DorsalDeferred(this),
            d = Object.keys(this.plugins),
            e = void 0 !== b ? 1 : d.length,
            f = 0;
        if (c.promise().progress(function() {
            f++, f === e && c.resolve()
        }), !this.plugins) throw new Error("No plugins registered with Dorsal");
        if (b) return this._wireElement(a, [b], c), c.promise();
        for (var g = 0, h = d.length, a = a || document; h > g; g++) this._wireElement(a, d[g], c);
        return c.promise()
    }, c.prototype.rewire = function(a, b) {
        return this.unwire(a, b), this.wire(a, b)
    };
    var d = new c;
    return d.create = function() {
        return new c
    }, DorsalDeferred = function(a) {
        var b, c = "pending",
            d = [],
            e = [],
            f = [],
            g = this;
        return b = {
            state: function() {
                return g.state()
            },
            done: function(b) {
                return "resolved" === c && b.call(g, a), d.push(b), g
            },
            fail: function(b) {
                return "rejected" === c && b.call(g, a), e.push(b), g
            },
            progress: function(a) {
                return f.push(a), g
            }
        }, g.state = function() {
            return c
        }, g.notify = function() {
            var a, b = f.length;
            for (a = 0; b > a; a++) f[a].apply(g, arguments)
        }, g.reject = function() {
            var b, d = e.length;
            for (c = "rejected", b = 0; d > b; b++) e[b].call(g, a)
        }, g.resolve = function() {
            var b, e = d.length;
            for (c = "resolved", b = 0; e > b; b++) d[b].call(g, a)
        }, g.promise = function() {
            return b
        }, g
    }, d
}),
/**
 * @license RequireJS text 2.0.10 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
define("text", ["module"], function(a) {
    "use strict";
    var b, c, d, e, f, g = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
        h = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        i = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        j = "undefined" != typeof location && location.href,
        k = j && location.protocol && location.protocol.replace(/\:/, ""),
        l = j && location.hostname,
        m = j && (location.port || void 0),
        n = {}, o = a.config && a.config() || {};
    return b = {
        version: "2.0.10",
        strip: function(a) {
            if (a) {
                a = a.replace(h, "");
                var b = a.match(i);
                b && (a = b[1])
            } else a = "";
            return a
        },
        jsEscape: function(a) {
            return a.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        },
        createXhr: o.createXhr || function() {
            var a, b, c;
            if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject)
                for (b = 0; 3 > b; b += 1) {
                    c = g[b];
                    try {
                        a = new ActiveXObject(c)
                    } catch (d) {}
                    if (a) {
                        g = [c];
                        break
                    }
                }
            return a
        },
        parseName: function(a) {
            var b, c, d, e = !1,
                f = a.indexOf("."),
                g = 0 === a.indexOf("./") || 0 === a.indexOf("../");
            return -1 !== f && (!g || f > 1) ? (b = a.substring(0, f), c = a.substring(f + 1, a.length)) : b = a, d = c || b, f = d.indexOf("!"), -1 !== f && (e = "strip" === d.substring(f + 1), d = d.substring(0, f), c ? c = d : b = d), {
                moduleName: b,
                ext: c,
                strip: e
            }
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function(a, c, d, e) {
            var f, g, h, i = b.xdRegExp.exec(a);
            return i ? (f = i[2], g = i[3], g = g.split(":"), h = g[1], g = g[0], !(f && f !== c || g && g.toLowerCase() !== d.toLowerCase() || (h || g) && h !== e)) : !0
        },
        finishLoad: function(a, c, d, e) {
            d = c ? b.strip(d) : d, o.isBuild && (n[a] = d), e(d)
        },
        load: function(a, c, d, e) {
            if (e.isBuild && !e.inlineText) return d(), void 0;
            o.isBuild = e.isBuild;
            var f = b.parseName(a),
                g = f.moduleName + (f.ext ? "." + f.ext : ""),
                h = c.toUrl(g),
                i = o.useXhr || b.useXhr;
            return 0 === h.indexOf("empty:") ? (d(), void 0) : (!j || i(h, k, l, m) ? b.get(h, function(c) {
                b.finishLoad(a, f.strip, c, d)
            }, function(a) {
                d.error && d.error(a)
            }) : c([g], function(a) {
                b.finishLoad(f.moduleName + "." + f.ext, f.strip, a, d)
            }), void 0)
        },
        write: function(a, c, d) {
            if (n.hasOwnProperty(c)) {
                var e = b.jsEscape(n[c]);
                d.asModule(a + "!" + c, "define(function () { return '" + e + "';});\n")
            }
        },
        writeFile: function(a, c, d, e, f) {
            var g = b.parseName(c),
                h = g.ext ? "." + g.ext : "",
                i = g.moduleName + h,
                j = d.toUrl(g.moduleName + h) + ".js";
            b.load(i, d, function() {
                var c = function(a) {
                    return e(j, a)
                };
                c.asModule = function(a, b) {
                    return e.asModule(a, j, b)
                }, b.write(a, i, c, f)
            }, f)
        }
    }, "node" === o.env || !o.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] ? (c = require.nodeRequire("fs"), b.get = function(a, b, d) {
        try {
            var e = c.readFileSync(a, "utf8");
            0 === e.indexOf("﻿") && (e = e.substring(1)), b(e)
        } catch (f) {
            d(f)
        }
    }) : "xhr" === o.env || !o.env && b.createXhr() ? b.get = function(a, c, d, e) {
        var f, g = b.createXhr();
        if (g.open("GET", a, !0), e)
            for (f in e) e.hasOwnProperty(f) && g.setRequestHeader(f.toLowerCase(), e[f]);
        o.onXhr && o.onXhr(g, a), g.onreadystatechange = function() {
            var b, e;
            4 === g.readyState && (b = g.status, b > 399 && 600 > b ? (e = new Error(a + " HTTP status: " + b), e.xhr = g, d(e)) : c(g.responseText), o.onXhrComplete && o.onXhrComplete(g, a))
        }, g.send(null)
    } : "rhino" === o.env || !o.env && "undefined" != typeof Packages && "undefined" != typeof java ? b.get = function(a, b) {
        var c, d, e = "utf-8",
            f = new java.io.File(a),
            g = java.lang.System.getProperty("line.separator"),
            h = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(f), e)),
            i = "";
        try {
            for (c = new java.lang.StringBuffer, d = h.readLine(), d && d.length() && 65279 === d.charAt(0) && (d = d.substring(1)), null !== d && c.append(d); null !== (d = h.readLine());) c.append(g), c.append(d);
            i = String(c.toString())
        } finally {
            h.close()
        }
        b(i)
    } : ("xpconnect" === o.env || !o.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (d = Components.classes, e = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"), f = "@mozilla.org/windows-registry-key;1" in d, b.get = function(a, b) {
        var c, g, h, i = {};
        f && (a = a.replace(/\//g, "\\")), h = new FileUtils.File(a);
        try {
            c = d["@mozilla.org/network/file-input-stream;1"].createInstance(e.nsIFileInputStream), c.init(h, 1, 0, !1), g = d["@mozilla.org/intl/converter-input-stream;1"].createInstance(e.nsIConverterInputStream), g.init(c, "utf-8", c.available(), e.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), g.readString(c.available(), i), g.close(), c.close(), b(i.value)
        } catch (j) {
            throw new Error((h && h.path || "") + ": " + j)
        }
    }), b
}), define("hb", ["text", "handlebars", "module"], function(a, b, c) {
    var d, e = c.config(),
        f = b.hasOwnProperty("default"),
        g = f ? b["default"] : b,
        h = {}, i = f ? 'define("{{pluginName}}!{{moduleName}}", ["handlebars.runtime"], function(hr) {return hr["default"].template({{{fn}}})});' : 'define("{{pluginName}}!{{moduleName}}", ["handlebars"], function(handlebars) {return handlebars.template({{{fn}}})});',
        j = function(a, b, c, d) {
            c.isBuild ? (h[a] = d, b()) : b(g.compile(d))
        }, k = function(b, c, d, f) {
            var g, h = j.bind(null, b, d, f),
                i = e && "function" == typeof e.preProcess;
            i && (g = e.preProcess.bind(null, h, {
                moduleName: b,
                parentRequire: c,
                config: f,
                pluginConfig: e
            })), a.load(b, c, i ? g : h, f)
        }, l = function(a, b, c) {
            if (!g.precompile && require.nodeRequire) try {
                g = require.nodeRequire("handlebars")
            } catch (e) {
                process.stdout.write("\nLooks like the runtime version of Handlebars is used.\n"), process.stderr.write("Install handlebars with npm to precompile templates: npm install handlebars --save-dev\n\n")
            }
            b in h && (d || (d = g.compile(i)), c(d({
                pluginName: a,
                moduleName: b,
                fn: g.precompile(h[b])
            })))
        };
    return {
        load: k,
        write: l
    }
}), define("hb!eb-styleguide/js/ui_components/clearable_input/clearable_input.handlebars", ["handlebars.runtime"], function(a) {
    return a["default"].template(function(a, b, c, d, e) {
        return this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {}, '<div class="responsive-form__input--icon__container close-button hide-large">\n    <a href="#" class="js-clear-input">\n        <i class="ico-cross"></i><span class="is-hidden-accessible">x</span>\n    </a>\n</div>\n'
    })
}), define("eb-styleguide/js/ui_components/clearable_input/clearable_input_view", ["require", "underscore", "jquery", "dorsal", "backbone", "hb!./clearable_input.handlebars"], function(a) {
    "use strict";
    var b = a("underscore"),
        c = a("jquery"),
        d = a("dorsal"),
        e = a("backbone"),
        f = a("hb!./clearable_input.handlebars"),
        g = e.View.extend({
            events: {
                "click .js-clear-input": "handleClearSearch",
                "keyup input": "updateClearButtonVisibility"
            },
            initialize: function() {
                b.bindAll(this, "handleClearSearch", "updateClearButtonVisibility"), this.$clearEl = c(f()), this.$el.append(this.$clearEl), this.$input = this.$("input"), this.updateClearButtonVisibility()
            },
            handleClearSearch: function(a) {
                a.preventDefault(), this.$input.val(""), this.$input.trigger("focus"), this.$clearEl.addClass("is-hidden")
            },
            updateClearButtonVisibility: function() {
                this.$input.val().length > 0 ? this.$clearEl.removeClass("is-hidden") : this.$clearEl.addClass("is-hidden")
            }
        });
    return d.registerPlugin("clearable-input", {
        create: function(a) {
            return new g({
                el: a.el
            })
        },
        destroy: function(a) {
            a.instance.remove()
        }
    }), g
}), define("eb-styleguide/js/ui_components/clipboard/model", ["require", "underscore", "backbone"], function(a) {
    "use strict";
    var b = (a("underscore"), a("backbone"));
    return b.Model.extend({
        COPIED_EVENT: "copied",
        SELECTED_EVENT: "selected"
    })
}), define("bootstrap-tooltip", ["jquery"], function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("tooltip", a, b)
    };
    b.prototype = {
        constructor: b,
        init: function(b, c, d) {
            var e, f, g, h, i;
            for (this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = !0, g = this.options.trigger.split(" "), i = g.length; i--;) h = g[i], "click" == h ? this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)) : "manual" != h && (e = "hover" == h ? "mouseenter" : "focus", f = "hover" == h ? "mouseleave" : "blur", this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this)));
            this.options.selector ? this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function(b) {
            return b = a.extend({}, a.fn[this.type].defaults, this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                show: b.delay,
                hide: b.delay
            }), b
        },
        enter: function(b) {
            var c, d = a.fn[this.type].defaults,
                e = {};
            return this._options && a.each(this._options, function(a, b) {
                d[a] != b && (e[a] = b)
            }, this), c = a(b.currentTarget)[this.type](e).data(this.type), c.options.delay && c.options.delay.show ? (clearTimeout(this.timeout), c.hoverState = "in", this.timeout = setTimeout(function() {
                "in" == c.hoverState && c.show()
            }, c.options.delay.show), void 0) : c.show()
        },
        leave: function(b) {
            var c = a(b.currentTarget)[this.type](this._options).data(this.type);
            return this.timeout && clearTimeout(this.timeout), c.options.delay && c.options.delay.hide ? (c.hoverState = "out", this.timeout = setTimeout(function() {
                "out" == c.hoverState && c.hide()
            }, c.options.delay.hide), void 0) : c.hide()
        },
        show: function() {
            var b, c, d, e, f, g, h = a.Event("show");
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                switch (b = this.tip(), this.setContent(), this.options.animation && b.addClass("fade"), f = "function" == typeof this.options.placement ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement, b.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }), this.options.container ? b.appendTo(this.options.container) : b.insertAfter(this.$element), c = this.getPosition(), d = b[0].offsetWidth, e = b[0].offsetHeight, f) {
                    case "bottom":
                        g = {
                            top: c.top + c.height,
                            left: c.left + c.width / 2 - d / 2
                        };
                        break;
                    case "top":
                        g = {
                            top: c.top - e,
                            left: c.left + c.width / 2 - d / 2
                        };
                        break;
                    case "left":
                        g = {
                            top: c.top + c.height / 2 - e / 2,
                            left: c.left - d
                        };
                        break;
                    case "right":
                        g = {
                            top: c.top + c.height / 2 - e / 2,
                            left: c.left + c.width
                        }
                }
                this.applyPlacement(g, f), this.$element.trigger("shown")
            }
        },
        applyPlacement: function(a, b) {
            var c, d, e, f, g = this.tip(),
                h = g[0].offsetWidth,
                i = g[0].offsetHeight;
            g.offset(a).addClass(b).addClass("in"), c = g[0].offsetWidth, d = g[0].offsetHeight, "top" == b && d != i && (a.top = a.top + i - d, f = !0), "bottom" == b || "top" == b ? (e = 0, a.left < 0 && (e = -2 * a.left, a.left = 0, g.offset(a), c = g[0].offsetWidth, d = g[0].offsetHeight), this.replaceArrow(e - h + c, c, "left")) : this.replaceArrow(d - i, d, "top"), f && g.offset(a)
        },
        replaceArrow: function(a, b, c) {
            this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
        },
        setContent: function() {
            var a = this.tip(),
                b = this.getTitle();
            a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
        },
        hide: function() {
            function b() {
                var b = setTimeout(function() {
                    c.off(a.support.transition.end).detach()
                }, 500);
                c.one(a.support.transition.end, function() {
                    clearTimeout(b), c.detach()
                })
            }
            var c = this.tip(),
                d = a.Event("hide");
            return this.$element.trigger(d), d.isDefaultPrevented() ? void 0 : (c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? b() : c.detach(), this.$element.trigger("hidden"), this)
        },
        fixTitle: function() {
            var a = this.$element;
            (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
        },
        hasContent: function() {
            return this.getTitle()
        },
        getPosition: function() {
            var b = this.$element[0];
            return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
                width: b.offsetWidth,
                height: b.offsetHeight
            }, this.$element.offset())
        },
        getTitle: function() {
            var a, b = this.$element,
                c = this.options;
            return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
        },
        tip: function() {
            return this.$tip = this.$tip || a(this.options.template)
        },
        arrow: function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        },
        toggle: function(b) {
            var c = b ? a(b.currentTarget)[this.type](this._options).data(this.type) : this;
            c.tip().hasClass("in") ? c.hide() : c.show()
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    var c = a.fn.tooltip;
    return a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("tooltip"),
                f = "object" == typeof c && c;
            e || d.data("tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c, this
    }, b
}),
/*!
 * zeroclipboard
 * The Zero Clipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie, and a JavaScript interface.
 * Copyright 2012 Jon Rohan, James M. Greene, .
 * Released under the MIT license
 * http://jonrohan.github.com/ZeroClipboard/
 * v1.1.7
 */
function() {
    "use strict";
    var a, b = function(a, b) {
            var c = a.style[b];
            if (a.currentStyle ? c = a.currentStyle[b] : window.getComputedStyle && (c = document.defaultView.getComputedStyle(a, null).getPropertyValue(b)), "auto" == c && "cursor" == b)
                for (var d = ["a"], e = 0; e < d.length; e++)
                    if (a.tagName.toLowerCase() == d[e]) return "pointer";
            return c
        }, c = function(a) {
            if (m.prototype._singleton) {
                a || (a = window.event);
                var b;
                this !== window ? b = this : a.target ? b = a.target : a.srcElement && (b = a.srcElement), m.prototype._singleton.setCurrent(b)
            }
        }, d = function(a, b, c) {
            a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
        }, e = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        }, f = function(a, b) {
            if (a.addClass) return a.addClass(b), a;
            if (b && "string" == typeof b) {
                var c = (b || "").split(/\s+/);
                if (1 === a.nodeType)
                    if (a.className) {
                        for (var d = " " + a.className + " ", e = a.className, f = 0, g = c.length; g > f; f++) d.indexOf(" " + c[f] + " ") < 0 && (e += " " + c[f]);
                        a.className = e.replace(/^\s+|\s+$/g, "")
                    } else a.className = b
            }
            return a
        }, g = function(a, b) {
            if (a.removeClass) return a.removeClass(b), a;
            if (b && "string" == typeof b || void 0 === b) {
                var c = (b || "").split(/\s+/);
                if (1 === a.nodeType && a.className)
                    if (b) {
                        for (var d = (" " + a.className + " ").replace(/[\n\t]/g, " "), e = 0, f = c.length; f > e; e++) d = d.replace(" " + c[e] + " ", " ");
                        a.className = d.replace(/^\s+|\s+$/g, "")
                    } else a.className = ""
            }
            return a
        }, h = function(a) {
            var c = {
                left: 0,
                top: 0,
                width: a.width || a.offsetWidth || 0,
                height: a.height || a.offsetHeight || 0,
                zIndex: 9999
            }, d = b(a, "zIndex");
            for (d && "auto" != d && (c.zIndex = parseInt(d, 10)); a;) {
                var e = parseInt(b(a, "borderLeftWidth"), 10),
                    f = parseInt(b(a, "borderTopWidth"), 10);
                c.left += isNaN(a.offsetLeft) ? 0 : a.offsetLeft, c.left += isNaN(e) ? 0 : e, c.top += isNaN(a.offsetTop) ? 0 : a.offsetTop, c.top += isNaN(f) ? 0 : f, a = a.offsetParent
            }
            return c
        }, i = function(a) {
            return (a.indexOf("?") >= 0 ? "&" : "?") + "nocache=" + (new Date).getTime()
        }, j = function(a) {
            var b = [];
            return a.trustedDomains && ("string" == typeof a.trustedDomains ? b.push("trustedDomain=" + a.trustedDomains) : b.push("trustedDomain=" + a.trustedDomains.join(","))), b.join("&")
        }, k = function(a, b) {
            if (b.indexOf) return b.indexOf(a);
            for (var c = 0, d = b.length; d > c; c++)
                if (b[c] === a) return c;
            return -1
        }, l = function(a) {
            if ("string" == typeof a) throw new TypeError("ZeroClipboard doesn't accept query strings.");
            return a.length ? a : [a]
        }, m = function(a, b) {
            if (a && (m.prototype._singleton || this).glue(a), m.prototype._singleton) return m.prototype._singleton;
            m.prototype._singleton = this, this.options = {};
            for (var c in o) this.options[c] = o[c];
            for (var d in b) this.options[d] = b[d];
            this.handlers = {}, m.detectFlashSupport() && p()
        }, n = [];
    m.prototype.setCurrent = function(c) {
        a = c, this.reposition(), c.getAttribute("title") && this.setTitle(c.getAttribute("title")), this.setHandCursor("pointer" == b(c, "cursor"))
    }, m.prototype.setText = function(a) {
        a && "" !== a && (this.options.text = a, this.ready() && this.flashBridge.setText(a))
    }, m.prototype.setTitle = function(a) {
        a && "" !== a && this.htmlBridge.setAttribute("title", a)
    }, m.prototype.setSize = function(a, b) {
        this.ready() && this.flashBridge.setSize(a, b)
    }, m.prototype.setHandCursor = function(a) {
        this.ready() && this.flashBridge.setHandCursor(a)
    }, m.version = "1.1.7";
    var o = {
        moviePath: "ZeroClipboard.swf",
        trustedDomains: null,
        text: null,
        hoverClass: "zeroclipboard-is-hover",
        activeClass: "zeroclipboard-is-active",
        allowScriptAccess: "sameDomain"
    };
    m.setDefaults = function(a) {
        for (var b in a) o[b] = a[b]
    }, m.destroy = function() {
        m.prototype._singleton.unglue(n);
        var a = m.prototype._singleton.htmlBridge;
        a.parentNode.removeChild(a), delete m.prototype._singleton
    }, m.detectFlashSupport = function() {
        var a = !1;
        try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (a = !0)
        } catch (b) {
            navigator.mimeTypes["application/x-shockwave-flash"] && (a = !0)
        }
        return a
    };
    var p = function() {
        var a = m.prototype._singleton,
            b = document.getElementById("global-zeroclipboard-html-bridge");
        if (!b) {
            var c = '      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="' + a.options.moviePath + i(a.options.moviePath) + '"/>         <param name="allowScriptAccess" value="' + a.options.allowScriptAccess + '"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="' + j(a.options) + '"/>         <embed src="' + a.options.moviePath + i(a.options.moviePath) + '"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="always"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="' + j(a.options) + '"           scale="exactfit">         </embed>       </object>';
            b = document.createElement("div"), b.id = "global-zeroclipboard-html-bridge", b.setAttribute("class", "global-zeroclipboard-container"), b.setAttribute("data-clipboard-ready", !1), b.style.position = "absolute", b.style.left = "-9999px", b.style.top = "-9999px", b.style.width = "15px", b.style.height = "15px", b.style.zIndex = "9999", b.innerHTML = c, document.body.appendChild(b)
        }
        a.htmlBridge = b, a.flashBridge = document["global-zeroclipboard-flash-bridge"] || b.children[0].lastElementChild
    };
    m.prototype.resetBridge = function() {
        this.htmlBridge.style.left = "-9999px", this.htmlBridge.style.top = "-9999px", this.htmlBridge.removeAttribute("title"), this.htmlBridge.removeAttribute("data-clipboard-text"), g(a, this.options.activeClass), a = null, this.options.text = null
    }, m.prototype.ready = function() {
        var a = this.htmlBridge.getAttribute("data-clipboard-ready");
        return "true" === a || a === !0
    }, m.prototype.reposition = function() {
        if (!a) return !1;
        var b = h(a);
        this.htmlBridge.style.top = b.top + "px", this.htmlBridge.style.left = b.left + "px", this.htmlBridge.style.width = b.width + "px", this.htmlBridge.style.height = b.height + "px", this.htmlBridge.style.zIndex = b.zIndex + 1, this.setSize(b.width, b.height)
    }, m.dispatch = function(a, b) {
        m.prototype._singleton.receiveEvent(a, b)
    }, m.prototype.on = function(a, b) {
        for (var c = a.toString().split(/\s/g), d = 0; d < c.length; d++) a = c[d].toLowerCase().replace(/^on/, ""), this.handlers[a] || (this.handlers[a] = b);
        this.handlers.noflash && !m.detectFlashSupport() && this.receiveEvent("onNoFlash", null)
    }, m.prototype.addEventListener = m.prototype.on, m.prototype.off = function(a, b) {
        for (var c = a.toString().split(/\s/g), d = 0; d < c.length; d++) {
            a = c[d].toLowerCase().replace(/^on/, "");
            for (var e in this.handlers) e === a && this.handlers[e] === b && delete this.handlers[e]
        }
    }, m.prototype.removeEventListener = m.prototype.off, m.prototype.receiveEvent = function(b, c) {
        b = b.toString().toLowerCase().replace(/^on/, "");
        var d = a;
        switch (b) {
            case "load":
                if (c && parseFloat(c.flashVersion.replace(",", ".").replace(/[^0-9\.]/gi, "")) < 10) return this.receiveEvent("onWrongFlash", {
                    flashVersion: c.flashVersion
                }), void 0;
                this.htmlBridge.setAttribute("data-clipboard-ready", !0);
                break;
            case "mouseover":
                f(d, this.options.hoverClass);
                break;
            case "mouseout":
                g(d, this.options.hoverClass), this.resetBridge();
                break;
            case "mousedown":
                f(d, this.options.activeClass);
                break;
            case "mouseup":
                g(d, this.options.activeClass);
                break;
            case "datarequested":
                var e = d.getAttribute("data-clipboard-target"),
                    h = e ? document.getElementById(e) : null;
                if (h) {
                    var i = h.value || h.textContent || h.innerText;
                    i && this.setText(i)
                } else {
                    var j = d.getAttribute("data-clipboard-text");
                    j && this.setText(j)
                }
                break;
            case "complete":
                this.options.text = null
        }
        if (this.handlers[b]) {
            var k = this.handlers[b];
            "function" == typeof k ? k.call(d, this, c) : "string" == typeof k && window[k].call(d, this, c)
        }
    }, m.prototype.glue = function(a) {
        a = l(a);
        for (var b = 0; b < a.length; b++) - 1 == k(a[b], n) && (n.push(a[b]), d(a[b], "mouseover", c))
    }, m.prototype.unglue = function(a) {
        a = l(a);
        for (var b = 0; b < a.length; b++) {
            e(a[b], "mouseover", c);
            var d = k(a[b], n); - 1 != d && n.splice(d, 1)
        }
    }, "undefined" != typeof module ? module.exports = m : "function" == typeof define && define.amd && define("zeroclipboard", [], function() {
        return m
    }), window.ZeroClipboard = m
}(), define("eb/media/path", ["require", "underscore"], function(a) {
    "use strict";

    function b(a, b) {
        for (var c = a.split("/"), e = b.split("/"), f = "" === d.first(c); c.length > 0 && "" === d.last(c);) c.pop();
        d.each(e, function(a) {
            if ("." !== a)
                if (".." === a) try {
                    c.pop()
                } catch (b) {} else c.push(a)
        });
        var g = c.join("/");
        return f && "/" !== g.charAt(0) && (g = "/" + g), g
    }

    function c(a) {
        return b(a, "..")
    }
    var d = a("underscore");
    return {
        join: b,
        dirname: c
    }
}), define("eb/media/url", ["./path"], function(a) {
    "use strict";

    function b() {
        var b = window.requirejs.s.contexts._.config.baseUrl,
            c = a.join(b, "../../..");
        return c
    }
    return b
}), define("zeroclipboard-media", ["./eb/media/path", "eb/media/url"], function(a, b) {
    "use strict";
    return function() {
        return a.join(b(), "django/images/event_page/ZeroClipboard-1.1.7.swf")
    }
}), define("eb-styleguide/js/ui_components/clipboard/zeroclipboard", ["require", "underscore", "zeroclipboard", "zeroclipboard-media"], function(a) {
    "use strict";

    function b(a, b) {
        i.glue(a), g.push(a.get(0)), h.push(b)
    }

    function c(a) {
        i.unglue(a);
        var b = d.indexOf(g, a.get(0));
        0 > b || (g.splice(b, 1), h.splice(b, 1))
    }
    var d = a("underscore"),
        e = a("zeroclipboard"),
        f = a("zeroclipboard-media"),
        g = [],
        h = [],
        i = new e(void 0, {
            moviePath: f(),
            allowScriptAccess: "always",
            trustedDomains: window.location.hostname
        });
    return i.on("dataRequested", function(a) {
        var b = this,
            c = d.indexOf(g, b);
        0 > c || h[c](a)
    }), {
        register: b,
        unregister: c,
        detectFlashSupport: e.detectFlashSupport
    }
}), define("eb-styleguide/js/ui_components/clipboard/view", ["require", "underscore", "backbone", "bootstrap-tooltip", "./zeroclipboard"], function(a) {
    "use strict";
    var b = a("underscore"),
        c = a("backbone"),
        d = a("bootstrap-tooltip"),
        e = a("./zeroclipboard"),
        f = {
            title: window.gettext("Copied"),
            placement: "bottom"
        }, g = {
            trigger: "manual"
        }, h = c.View.extend({
            initialize: function(a) {
                this.tooltip = new d(this.el, b.defaults({}, g, a || {}, f)), this.delay = a.delay, b.isNumber(this.delay) || (this.delay = 3e3), this.listenTo(this.model, this.model.COPIED_EVENT, this.showTooltip)
            },
            showTooltip: function() {
                this.tooltip.show(), this.delay > 0 && setTimeout(b.bind(function() {
                    this.tooltip.hide()
                }, this), this.delay)
            }
        }),
        i = c.View.extend({
            events: {
                click: "handleClick"
            },
            initialize: function() {
                b.bindAll(this, "getDataToCopy"), this.supportsZeroClipboardHelper() && e.register(this.$el, this.getDataToCopy)
            },
            supportsZeroClipboardHelper: function() {
                return e.detectFlashSupport()
            },
            getDataToCopy: function(a) {
                var b = this.model.get("input");
                a.setText(b), this.model.trigger(this.model.COPIED_EVENT)
            },
            handleClick: function(a) {
                a.stopPropagation(), a.preventDefault(), this.model.trigger(this.model.SELECTED_EVENT)
            }
        }),
        j = c.View.extend({
            events: function() {
                var a = {
                    change: "updateModel"
                };
                return this.supportsTouch ? a.touchend = "handleFocus" : a.focus = "handleFocus", a
            },
            testIsTouch: function() {
                return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch
            },
            initialize: function(a) {
                this.initial = a.input, this.updateModel(), this.listenTo(this.model, this.model.SELECTED_EVENT, this.selectInput), this.supportsTouch = this.testIsTouch(), this.supportsTouch && this.$el.removeAttr("readonly")
            },
            getValue: function() {
                return this.initial || this.$el.val() || this.$el.text()
            },
            handleFocus: function() {
                this.model.trigger(this.model.SELECTED_EVENT)
            },
            selectInput: function() {
                this.supportsTouch && !this.$el.is(":focus") && this.$el.focus(), b.delay(b.bind(function() {
                    this.el.setSelectionRange ? this.el.setSelectionRange(0, 9999) : this.$el.select()
                }, this), 0)
            },
            updateModel: function() {
                this.model.set("input", this.getValue())
            }
        });
    return {
        ButtonView: i,
        SourceView: j,
        ContainerView: h
    }
}), define("eb-styleguide/js/ui_components/clipboard/app", ["underscore", "jquery", "./model", "./view", "dorsal"], function(a, b, c, d, e) {
    "use strict";
    e.registerPlugin("clipboard", function(e) {
        var f = new c;
        new d.ContainerView(a.defaults({}, {
            model: f,
            el: this
        }, e.data)), new d.ButtonView({
            model: f,
            el: b(this).find(".js-xd-clipboard-trigger").get(0)
        }), new d.SourceView({
            model: f,
            el: b(this).find(".js-xd-clipboard-source").get(0)
        })
    })
}), define("eb-styleguide/js/ui_components/datepicker", ["require", "jquery", "dorsal"], function(a) {
    "use strict";
    var b = a("jquery"),
        c = a("dorsal");
    c.registerPlugin("datepicker", function(a) {
        var c = b(this);
        "function" == typeof c.datepicker && b(this).datepicker(a)
    })
}), define("eb-styleguide/js/ui_components/table/expandable", ["require", "dorsal", "jquery"], function(a) {
    "use strict";
    var b = a("dorsal"),
        c = a("jquery"),
        d = Backbone.View.extend({
            events: {
                "click .js-xd-table-expandable-director": "handleDirectorClick"
            },
            handleDirectorClick: function(a) {
                a.preventDefault(), c(a.currentTarget).closest("tr").toggleClass("is-row-expanded").nextUntil(".responsive-table__row--expandable", ".responsive-table__row--expandable__sub-row").toggleClass("is-hidden")
            }
        });
    return b.registerPlugin("table-expandable", function(a) {
        return new d({
            el: a.el
        }).render()
    }), d
}), define("eb-styleguide/js/ui_components/file_picker", ["require", "underscore", "jquery", "backbone", "dorsal"], function(a) {
    "use strict";
    var b = a("underscore"),
        c = a("jquery"),
        d = a("backbone"),
        e = a("dorsal"),
        f = d.View.extend({
            initialize: function(a) {
                b.bindAll(this, "handleFileSelection", "handleFileSelectClick", "getFileName"), this.$inputElement = a.inputElement, this.$buttonElement = a.buttonElement, this.$fileNameElement = a.fileNameElement, this.$inputElement.on("change", this.handleFileSelection), this.$buttonElement.on("click", this.handleFileSelectClick), this.fileName = ""
            },
            handleFileSelection: function() {
                this.fileName = this.$inputElement.val().split("\\").pop(), this.$fileNameElement.html(this.fileName || window.gettext("No file selected")), this.trigger("fileSelected")
            },
            handleFileSelectClick: function(a) {
                a.preventDefault(), this.$inputElement.click()
            },
            getFileName: function() {
                return this.fileName
            }
        });
    return e.registerPlugin("file-picker", function(a) {
        var d = c(a.el),
            e = d.find(".js-file-picker__input"),
            g = d.find(".js-file-picker__button"),
            h = d.find(".js-file-picker__file-name");
        return new f(b.extend({}, a || {}, {
            inputElement: e,
            buttonElement: g,
            fileNameElement: h
        }))
    }), f
});
var CLOSE_EVENT = "Close",
    BEFORE_CLOSE_EVENT = "BeforeClose",
    AFTER_CLOSE_EVENT = "AfterClose",
    BEFORE_APPEND_EVENT = "BeforeAppend",
    MARKUP_PARSE_EVENT = "MarkupParse",
    OPEN_EVENT = "Open",
    CHANGE_EVENT = "Change",
    NS = "mfp",
    EVENT_NS = "." + NS,
    READY_CLASS = "mfp-ready",
    REMOVING_CLASS = "mfp-removing",
    PREVENT_CLOSE_CLASS = "mfp-prevent-close",
    mfp, MagnificPopup = function() {}, _isJQ = !! window.jQuery,
    _prevStatus, _window = $(window),
    _body, _document, _prevContentType, _wrapClasses, _currPopupType, _mfpOn = function(a, b) {
        mfp.ev.on(NS + a + EVENT_NS, b)
    }, _getEl = function(a, b, c, d) {
        var e = document.createElement("div");
        return e.className = "mfp-" + a, c && (e.innerHTML = c), d ? b && b.appendChild(e) : (e = $(e), b && e.appendTo(b)), e
    }, _mfpTrigger = function(a, b) {
        mfp.ev.triggerHandler(NS + a, b), mfp.st.callbacks && (a = a.charAt(0).toLowerCase() + a.slice(1), mfp.st.callbacks[a] && mfp.st.callbacks[a].apply(mfp, $.isArray(b) ? b : [b]))
    }, _getCloseBtn = function(a) {
        return a === _currPopupType && mfp.currTemplate.closeBtn || (mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace("%title%", mfp.st.tClose)), _currPopupType = a), mfp.currTemplate.closeBtn
    }, _checkInstance = function() {
        $.magnificPopup.instance || (mfp = new MagnificPopup, mfp.init(), $.magnificPopup.instance = mfp)
    }, supportsTransitions = function() {
        var a = document.createElement("p").style,
            b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition) return !0;
        for (; b.length;)
            if (b.pop() + "Transition" in a) return !0;
        return !1
    };
MagnificPopup.prototype = {
    constructor: MagnificPopup,
    init: function() {
        var a = navigator.appVersion;
        mfp.isIE7 = -1 !== a.indexOf("MSIE 7."), mfp.isIE8 = -1 !== a.indexOf("MSIE 8."), mfp.isLowIE = mfp.isIE7 || mfp.isIE8, mfp.isAndroid = /android/gi.test(a), mfp.isIOS = /iphone|ipad|ipod/gi.test(a), mfp.supportsTransition = supportsTransitions(), mfp.probablyMobile = mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), _document = $(document), mfp.popupsCache = {}
    },
    open: function(a) {
        _body || (_body = $(document.body));
        var b;
        if (a.isObj === !1) {
            mfp.items = a.items.toArray(), mfp.index = 0;
            var c, d = a.items;
            for (b = 0; b < d.length; b++)
                if (c = d[b], c.parsed && (c = c.el[0]), c === a.el[0]) {
                    mfp.index = b;
                    break
                }
        } else mfp.items = $.isArray(a.items) ? a.items : [a.items], mfp.index = a.index || 0; if (mfp.isOpen) return mfp.updateItemHTML(), void 0;
        mfp.types = [], _wrapClasses = "", mfp.ev = a.mainEl && a.mainEl.length ? a.mainEl.eq(0) : _document, a.key ? (mfp.popupsCache[a.key] || (mfp.popupsCache[a.key] = {}), mfp.currTemplate = mfp.popupsCache[a.key]) : mfp.currTemplate = {}, mfp.st = $.extend(!0, {}, $.magnificPopup.defaults, a), mfp.fixedContentPos = "auto" === mfp.st.fixedContentPos ? !mfp.probablyMobile : mfp.st.fixedContentPos, mfp.st.modal && (mfp.st.closeOnContentClick = !1, mfp.st.closeOnBgClick = !1, mfp.st.showCloseBtn = !1, mfp.st.enableEscapeKey = !1), mfp.bgOverlay || (mfp.bgOverlay = _getEl("bg").on("click" + EVENT_NS, function() {
            mfp.close()
        }), mfp.wrap = _getEl("wrap").attr("tabindex", -1).on("click" + EVENT_NS, function(a) {
            mfp._checkIfClose(a.target) && mfp.close()
        }), mfp.container = _getEl("container", mfp.wrap)), mfp.contentContainer = _getEl("content"), mfp.st.preloader && (mfp.preloader = _getEl("preloader", mfp.container, mfp.st.tLoading));
        var e = $.magnificPopup.modules;
        for (b = 0; b < e.length; b++) {
            var f = e[b];
            f = f.charAt(0).toUpperCase() + f.slice(1), mfp["init" + f].call(mfp)
        }
        _mfpTrigger("BeforeOpen"), mfp.st.showCloseBtn && (mfp.st.closeBtnInside ? (_mfpOn(MARKUP_PARSE_EVENT, function(a, b, c, d) {
            c.close_replaceWith = _getCloseBtn(d.type)
        }), _wrapClasses += " mfp-close-btn-in") : mfp.wrap.append(_getCloseBtn())), mfp.st.alignTop && (_wrapClasses += " mfp-align-top"), mfp.fixedContentPos ? mfp.wrap.css({
            overflow: mfp.st.overflowY,
            overflowX: "hidden",
            overflowY: mfp.st.overflowY
        }) : mfp.wrap.css({
            top: _window.scrollTop(),
            position: "absolute"
        }), (mfp.st.fixedBgPos === !1 || "auto" === mfp.st.fixedBgPos && !mfp.fixedContentPos) && mfp.bgOverlay.css({
            height: _document.height(),
            position: "absolute"
        }), mfp.st.enableEscapeKey && _document.on("keyup" + EVENT_NS, function(a) {
            27 === a.keyCode && mfp.close()
        }), _window.on("resize" + EVENT_NS, function() {
            mfp.updateSize()
        }), mfp.st.closeOnContentClick || (_wrapClasses += " mfp-auto-cursor"), _wrapClasses && mfp.wrap.addClass(_wrapClasses);
        var g = mfp.wH = _window.height(),
            h = {};
        if (mfp.fixedContentPos && mfp._hasScrollBar(g)) {
            var i = mfp._getScrollbarSize();
            i && (h.marginRight = i)
        }
        mfp.fixedContentPos && (mfp.isIE7 ? $("body, html").css("overflow", "hidden") : h.overflow = "hidden");
        var j = mfp.st.mainClass;
        return mfp.isIE7 && (j += " mfp-ie7"), j && mfp._addClassToMFP(j), mfp.updateItemHTML(), _mfpTrigger("BuildControls"), $("html").css(h), mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || _body), mfp._lastFocusedEl = document.activeElement, setTimeout(function() {
            mfp.content ? (mfp._addClassToMFP(READY_CLASS), mfp._setFocus()) : mfp.bgOverlay.addClass(READY_CLASS), _document.on("focusin" + EVENT_NS, mfp._onFocusIn)
        }, 16), mfp.isOpen = !0, mfp.updateSize(g), _mfpTrigger(OPEN_EVENT), a
    },
    close: function() {
        mfp.isOpen && (_mfpTrigger(BEFORE_CLOSE_EVENT), mfp.isOpen = !1, mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition ? (mfp._addClassToMFP(REMOVING_CLASS), setTimeout(function() {
            mfp._close()
        }, mfp.st.removalDelay)) : mfp._close())
    },
    _close: function() {
        _mfpTrigger(CLOSE_EVENT);
        var a = REMOVING_CLASS + " " + READY_CLASS + " ";
        if (mfp.bgOverlay.detach(), mfp.wrap.detach(), mfp.container.empty(), mfp.st.mainClass && (a += mfp.st.mainClass + " "), mfp._removeClassFromMFP(a), mfp.fixedContentPos) {
            var b = {
                marginRight: ""
            };
            mfp.isIE7 ? $("body, html").css("overflow", "") : b.overflow = "", $("html").css(b)
        }
        _document.off("keyup" + EVENT_NS + " focusin" + EVENT_NS), mfp.ev.off(EVENT_NS), mfp.wrap.attr("class", "mfp-wrap").removeAttr("style"), mfp.bgOverlay.attr("class", "mfp-bg"), mfp.container.attr("class", "mfp-container"), !mfp.st.showCloseBtn || mfp.st.closeBtnInside && mfp.currTemplate[mfp.currItem.type] !== !0 || mfp.currTemplate.closeBtn && mfp.currTemplate.closeBtn.detach(), mfp._lastFocusedEl && $(mfp._lastFocusedEl).focus(), mfp.currItem = null, mfp.content = null, mfp.currTemplate = null, mfp.prevHeight = 0, _mfpTrigger(AFTER_CLOSE_EVENT)
    },
    updateSize: function(a) {
        if (mfp.isIOS) {
            var b = document.documentElement.clientWidth / window.innerWidth,
                c = window.innerHeight * b;
            mfp.wrap.css("height", c), mfp.wH = c
        } else mfp.wH = a || _window.height();
        mfp.fixedContentPos || mfp.wrap.css("height", mfp.wH), _mfpTrigger("Resize")
    },
    updateItemHTML: function() {
        var a = mfp.items[mfp.index];
        mfp.contentContainer.detach(), mfp.content && mfp.content.detach(), a.parsed || (a = mfp.parseEl(mfp.index));
        var b = a.type;
        if (_mfpTrigger("BeforeChange", [mfp.currItem ? mfp.currItem.type : "", b]), mfp.currItem = a, !mfp.currTemplate[b]) {
            var c = mfp.st[b] ? mfp.st[b].markup : !1;
            _mfpTrigger("FirstMarkupParse", c), mfp.currTemplate[b] = c ? $(c) : !0
        }
        _prevContentType && _prevContentType !== a.type && mfp.container.removeClass("mfp-" + _prevContentType + "-holder");
        var d = mfp["get" + b.charAt(0).toUpperCase() + b.slice(1)](a, mfp.currTemplate[b]);
        mfp.appendContent(d, b), a.preloaded = !0, _mfpTrigger(CHANGE_EVENT, a), _prevContentType = a.type, mfp.container.prepend(mfp.contentContainer), _mfpTrigger("AfterChange")
    },
    appendContent: function(a, b) {
        mfp.content = a, a ? mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[b] === !0 ? mfp.content.find(".mfp-close").length || mfp.content.append(_getCloseBtn()) : mfp.content = a : mfp.content = "", _mfpTrigger(BEFORE_APPEND_EVENT), mfp.container.addClass("mfp-" + b + "-holder"), mfp.contentContainer.append(mfp.content)
    },
    parseEl: function(a) {
        var b, c = mfp.items[a];
        if (c.tagName ? c = {
            el: $(c)
        } : (b = c.type, c = {
            data: c,
            src: c.src
        }), c.el) {
            for (var d = mfp.types, e = 0; e < d.length; e++)
                if (c.el.hasClass("mfp-" + d[e])) {
                    b = d[e];
                    break
                }
            c.src = c.el.attr("data-mfp-src"), c.src || (c.src = c.el.attr("href"))
        }
        return c.type = b || mfp.st.type || "inline", c.index = a, c.parsed = !0, mfp.items[a] = c, _mfpTrigger("ElementParse", c), mfp.items[a]
    },
    addGroup: function(a, b) {
        var c = function(c) {
            c.mfpEl = this, mfp._openClick(c, a, b)
        };
        b || (b = {});
        var d = "click.magnificPopup";
        b.mainEl = a, b.items ? (b.isObj = !0, a.off(d).on(d, c)) : (b.isObj = !1, b.delegate ? a.off(d).on(d, b.delegate, c) : (b.items = a, a.off(d).on(d, c)))
    },
    _openClick: function(a, b, c) {
        var d = void 0 !== c.midClick ? c.midClick : $.magnificPopup.defaults.midClick;
        if (d || 2 !== a.which && !a.ctrlKey && !a.metaKey) {
            var e = void 0 !== c.disableOn ? c.disableOn : $.magnificPopup.defaults.disableOn;
            if (e)
                if ($.isFunction(e)) {
                    if (!e.call(mfp)) return !0
                } else if (_window.width() < e) return !0;
            a.type && (a.preventDefault(), mfp.isOpen && a.stopPropagation()), c.el = $(a.mfpEl), c.delegate && (c.items = b.find(c.delegate)), mfp.open(c)
        }
    },
    updateStatus: function(a, b) {
        if (mfp.preloader) {
            _prevStatus !== a && mfp.container.removeClass("mfp-s-" + _prevStatus), b || "loading" !== a || (b = mfp.st.tLoading);
            var c = {
                status: a,
                text: b
            };
            _mfpTrigger("UpdateStatus", c), a = c.status, b = c.text, mfp.preloader.html(b), mfp.preloader.find("a").on("click", function(a) {
                a.stopImmediatePropagation()
            }), mfp.container.addClass("mfp-s-" + a), _prevStatus = a
        }
    },
    _checkIfClose: function(a) {
        if (!$(a).hasClass(PREVENT_CLOSE_CLASS)) {
            var b = mfp.st.closeOnContentClick,
                c = mfp.st.closeOnBgClick;
            if (b && c) return !0;
            if (!mfp.content || $(a).hasClass("mfp-close") || mfp.preloader && a === mfp.preloader[0]) return !0;
            if (a === mfp.content[0] || $.contains(mfp.content[0], a)) {
                if (b) return !0
            } else if (c && $.contains(document, a)) return !0;
            return !1
        }
    },
    _addClassToMFP: function(a) {
        mfp.bgOverlay.addClass(a), mfp.wrap.addClass(a)
    },
    _removeClassFromMFP: function(a) {
        this.bgOverlay.removeClass(a), mfp.wrap.removeClass(a)
    },
    _hasScrollBar: function(a) {
        return (mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (a || _window.height())
    },
    _setFocus: function() {
        (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus()
    },
    _onFocusIn: function(a) {
        return a.target === mfp.wrap[0] || $.contains(mfp.wrap[0], a.target) ? void 0 : (mfp._setFocus(), !1)
    },
    _parseMarkup: function(a, b, c) {
        var d;
        c.data && (b = $.extend(c.data, b)), _mfpTrigger(MARKUP_PARSE_EVENT, [a, b, c]), $.each(b, function(b, c) {
            if (void 0 === c || c === !1) return !0;
            if (d = b.split("_"), d.length > 1) {
                var e = a.find(EVENT_NS + "-" + d[0]);
                if (e.length > 0) {
                    var f = d[1];
                    "replaceWith" === f ? e[0] !== c[0] && e.replaceWith(c) : "img" === f ? e.is("img") ? e.attr("src", c) : e.replaceWith('<img src="' + c + '" class="' + e.attr("class") + '" />') : e.attr(d[1], c)
                }
            } else a.find(EVENT_NS + "-" + b).html(c)
        })
    },
    _getScrollbarSize: function() {
        if (void 0 === mfp.scrollbarSize) {
            var a = document.createElement("div");
            a.id = "mfp-sbm", a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), mfp.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
        }
        return mfp.scrollbarSize
    }
}, $.magnificPopup = {
    instance: null,
    proto: MagnificPopup.prototype,
    modules: [],
    open: function(a, b) {
        return _checkInstance(), a = a ? $.extend(!0, {}, a) : {}, a.isObj = !0, a.index = b || 0, this.instance.open(a)
    },
    close: function() {
        return $.magnificPopup.instance && $.magnificPopup.instance.close()
    },
    registerModule: function(a, b) {
        b.options && ($.magnificPopup.defaults[a] = b.options), $.extend(this.proto, b.proto), this.modules.push(a)
    },
    defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading..."
    }
}, $.fn.magnificPopup = function(a) {
    _checkInstance();
    var b = $(this);
    if ("string" == typeof a)
        if ("open" === a) {
            var c, d = _isJQ ? b.data("magnificPopup") : b[0].magnificPopup,
                e = parseInt(arguments[1], 10) || 0;
            d.items ? c = d.items[e] : (c = b, d.delegate && (c = c.find(d.delegate)), c = c.eq(e)), mfp._openClick({
                mfpEl: c
            }, b, d)
        } else mfp.isOpen && mfp[a].apply(mfp, Array.prototype.slice.call(arguments, 1));
        else a = $.extend(!0, {}, a), _isJQ ? b.data("magnificPopup", a) : b[0].magnificPopup = a, mfp.addGroup(b, a);
    return b
}, define("magnific-popup", ["jquery"], function() {});
var INLINE_NS = "inline",
    _hiddenClass, _inlinePlaceholder, _lastInlineElement, _putInlineElementsBack = function() {
        _lastInlineElement && (_inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach(), _lastInlineElement = null)
    };
$.magnificPopup.registerModule(INLINE_NS, {
    options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found"
    },
    proto: {
        initInline: function() {
            mfp.types.push(INLINE_NS), _mfpOn(CLOSE_EVENT + "." + INLINE_NS, function() {
                _putInlineElementsBack()
            })
        },
        getInline: function(a, b) {
            if (_putInlineElementsBack(), a.src) {
                var c = mfp.st.inline,
                    d = $(a.src);
                if (d.length) {
                    var e = d[0].parentNode;
                    e && e.tagName && (_inlinePlaceholder || (_hiddenClass = c.hiddenClass, _inlinePlaceholder = _getEl(_hiddenClass), _hiddenClass = "mfp-" + _hiddenClass), _lastInlineElement = d.after(_inlinePlaceholder).detach().removeClass(_hiddenClass)), mfp.updateStatus("ready")
                } else mfp.updateStatus("error", c.tNotFound), d = $("<div>");
                return a.inlineElement = d, d
            }
            return mfp.updateStatus("ready"), mfp._parseMarkup(b, {}, a), b
        }
    }
}), define("magnific-popup-inline", ["magnific-popup"], function() {});
var _imgInterval, _getTitle = function(a) {
        if (a.data && void 0 !== a.data.title) return a.data.title;
        var b = mfp.st.image.titleSrc;
        if (b) {
            if ($.isFunction(b)) return b.call(mfp, a);
            if (a.el) return a.el.attr(b) || ""
        }
        return ""
    };
$.magnificPopup.registerModule("image", {
    options: {
        markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
        initImage: function() {
            var a = mfp.st.image,
                b = ".image";
            mfp.types.push("image"), _mfpOn(OPEN_EVENT + b, function() {
                "image" === mfp.currItem.type && a.cursor && _body.addClass(a.cursor)
            }), _mfpOn(CLOSE_EVENT + b, function() {
                a.cursor && _body.removeClass(a.cursor), _window.off("resize" + EVENT_NS)
            }), _mfpOn("Resize" + b, mfp.resizeImage), mfp.isLowIE && _mfpOn("AfterChange", mfp.resizeImage)
        },
        resizeImage: function() {
            var a = mfp.currItem;
            if (a && a.img && mfp.st.image.verticalFit) {
                var b = 0;
                mfp.isLowIE && (b = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", mfp.wH - b)
            }
        },
        _onImageHasSize: function(a) {
            a.img && (a.hasSize = !0, _imgInterval && clearInterval(_imgInterval), a.isCheckingImgSize = !1, _mfpTrigger("ImageHasSize", a), a.imgHidden && (mfp.content && mfp.content.removeClass("mfp-loading"), a.imgHidden = !1))
        },
        findImageSize: function(a) {
            var b = 0,
                c = a.img[0],
                d = function(e) {
                    _imgInterval && clearInterval(_imgInterval), _imgInterval = setInterval(function() {
                        return c.naturalWidth > 0 ? (mfp._onImageHasSize(a), void 0) : (b > 200 && clearInterval(_imgInterval), b++, 3 === b ? d(10) : 40 === b ? d(50) : 100 === b && d(500), void 0)
                    }, e)
                };
            d(1)
        },
        getImage: function(a, b) {
            var c = 0,
                d = function() {
                    a && (a.img[0].complete ? (a.img.off(".mfploader"), a === mfp.currItem && (mfp._onImageHasSize(a), mfp.updateStatus("ready")), a.hasSize = !0, a.loaded = !0, _mfpTrigger("ImageLoadComplete")) : (c++, 200 > c ? setTimeout(d, 100) : e()))
                }, e = function() {
                    a && (a.img.off(".mfploader"), a === mfp.currItem && (mfp._onImageHasSize(a), mfp.updateStatus("error", f.tError.replace("%url%", a.src))), a.hasSize = !0, a.loaded = !0, a.loadError = !0)
                }, f = mfp.st.image,
                g = b.find(".mfp-img");
            if (g.length) {
                var h = document.createElement("img");
                h.className = "mfp-img", a.img = $(h).on("load.mfploader", d).on("error.mfploader", e), h.src = a.src, g.is("img") && (a.img = a.img.clone()), h = a.img[0], h.naturalWidth > 0 ? a.hasSize = !0 : h.width || (a.hasSize = !1)
            }
            return mfp._parseMarkup(b, {
                title: _getTitle(a),
                img_replaceWith: a.img
            }, a), mfp.resizeImage(), a.hasSize ? (_imgInterval && clearInterval(_imgInterval), a.loadError ? (b.addClass("mfp-loading"), mfp.updateStatus("error", f.tError.replace("%url%", a.src))) : (b.removeClass("mfp-loading"), mfp.updateStatus("ready")), b) : (mfp.updateStatus("loading"), a.loading = !0, a.hasSize || (a.imgHidden = !0, b.addClass("mfp-loading"), mfp.findImageSize(a)), b)
        }
    }
}), define("magnific-popup-image", ["magnific-popup"], function() {});
var IFRAME_NS = "iframe",
    _emptyPage = "//about:blank",
    _fixIframeBugs = function(a) {
        if (mfp.currTemplate[IFRAME_NS]) {
            var b = mfp.currTemplate[IFRAME_NS].find("iframe");
            b.length && (a || (b[0].src = _emptyPage), mfp.isIE8 && b.css("display", a ? "block" : "none"))
        }
    };
$.magnificPopup.registerModule(IFRAME_NS, {
    options: {
        markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
            youtube: {
                index: "youtube.com",
                id: "v=",
                src: "//www.youtube.com/embed/%id%?autoplay=1"
            },
            vimeo: {
                index: "vimeo.com/",
                id: "/",
                src: "//player.vimeo.com/video/%id%?autoplay=1"
            },
            gmaps: {
                index: "//maps.google.",
                src: "%id%&output=embed"
            }
        }
    },
    proto: {
        initIframe: function() {
            mfp.types.push(IFRAME_NS), _mfpOn("BeforeChange", function(a, b, c) {
                b !== c && (b === IFRAME_NS ? _fixIframeBugs() : c === IFRAME_NS && _fixIframeBugs(!0))
            }), _mfpOn(CLOSE_EVENT + "." + IFRAME_NS, function() {
                _fixIframeBugs()
            })
        },
        getIframe: function(a, b) {
            var c = a.src,
                d = mfp.st.iframe;
            $.each(d.patterns, function() {
                return c.indexOf(this.index) > -1 ? (this.id && (c = "string" == typeof this.id ? c.substr(c.lastIndexOf(this.id) + this.id.length, c.length) : this.id.call(this, c)), c = this.src.replace("%id%", c), !1) : void 0
            });
            var e = {};
            return d.srcAction && (e[d.srcAction] = c), mfp._parseMarkup(b, e, a), mfp.updateStatus("ready"), b
        }
    }
}), define("magnific-popup-iframe", ["magnific-popup"], function() {}), define("eb-styleguide/js/ui_components/modal/modal_view", ["require", "dorsal", "jquery", "backbone", "magnific-popup", "magnific-popup-inline", "magnific-popup-image", "magnific-popup-iframe"], function(a) {
    "use strict";
    var b, c = a("dorsal"),
        d = a("jquery"),
        e = a("backbone"),
        f = (a("magnific-popup"), a("magnific-popup-inline"), a("magnific-popup-image"), a("magnific-popup-iframe"), /^(#|\.)[\w-]+/);
    return b = e.View.extend({
        initialize: function(a) {
            _.bindAll(this, "_config", "create", "saveInitialValues", "reset", "handleModalOpen", "handleModalClose", "handleWrapperClick"), "undefined" != typeof a && this.create(a)
        },
        create: function(a) {
            var b = "undefined" == typeof a.data.modalOptions ? {} : d.parseJSON(a.data.modalOptions);
            this.modalConfig = this._config(b), d(a.el).magnificPopup(this.modalConfig);
            var c = d(a.el).attr("href");
            if (f.test(c)) try {
                this.$modalEl = d(c)
            } catch (e) {
                this.$modalEl = d()
            } else this.$modalEl = d()
        },
        saveInitialValues: function() {
            this.$modalEl.find("input, select, textarea").each(function() {
                /radio|checkbox/.test(d(this).attr("type")) ? d(this).data("initial", this.checked) : d(this).data("initial", d(this).val())
            })
        },
        open: function(a) {
            this.modalConfig = this._config(a), this.$modalEl = d(a.items.src), d.magnificPopup.open(this.modalConfig)
        },
        close: function() {
            d.magnificPopup.close()
        },
        reset: function() {
            var a = this.$modalEl;
            window.setTimeout(function() {
                a.find("input, select, textarea").each(function() {
                    var a = d(this);
                    /radio|checkbox/.test(a.attr("type")) ? this.checked !== Boolean(a.data("initial")) && a.trigger("click") : a.val(a.data("initial") || "").trigger("change").trigger("blur")
                })
            }, 100)
        },
        handleWrapperClick: function(a) {
            (d(a.target).hasClass("mfp-container") || d(a.target).hasClass("mfp-content")) && this.reset()
        },
        handleModalOpen: function() {
            this.modalConfig.modal || (this.$modalEl.find(".mfp-close").on("click", this.reset), this.modalConfig.closeOnBgClick !== !1 && d(".mfp-wrap").on("click", this.handleWrapperClick)), this.saveInitialValues()
        },
        handleModalClose: function() {
            this.modalConfig.modal || (this.$modalEl.find(".mfp-close").off("click", this.reset), this.modalConfig.closeOnBgClick !== !1 && d(".mfp-wrap").off("click", this.handleWrapperClick))
        },
        _config: function(a) {
            var b = this,
                c = {
                    type: "inline",
                    fixedContentPos: !0,
                    closeMarkup: '<i class="mfp-close default-mfp-close ico-circle-cross ico--medium"></i>',
                    alignTop: !0,
                    removalDelay: 300,
                    mainClass: "modal__animation",
                    callbacks: {
                        open: b.handleModalOpen,
                        close: b.handleModalClose
                    }
                };
            return d.extend({}, c, a)
        }
    }), c.registerPlugin("modal", function(a) {
        var c;
        return d(function() {
            c = new b(a), c.$modalEl.find(".js-xd-modal-reset").on("click", c.reset), c.$modalEl.find(".js-xd-modal-close").on("click", c.close)
        }), c
    }), b
}), define("eb-styleguide/js/ui_components/pagination/pagination", ["require", "underscore", "jquery", "backbone"], function(a) {
    "use strict";
    var b = (a("underscore"), a("jquery")),
        c = a("backbone"),
        d = c.View.extend({
            initialize: function(a) {
                this.options = a, this.itemTemplate = a.itemTemplate, a.currentPage || (a.currentPage = 0), this.numPages = Math.ceil(a.collection.length / a.numPerPage), this.$pageContainer = this.$(".js-pagination-items"), this.initialRender()
            },
            events: {
                "click .js-pagination-previous": "handlePreviousClick",
                "click .js-pagination-next": "handleNextClick",
                "click .js-pagination-page": "handlePageClick"
            },
            initialRender: function() {
                {
                    var a, c;
                    this.$(".js-pagination-pages")
                }
                for (a = 0; a < this.numPages; a++) c = b("<a/>", {
                    text: a + 1,
                    "class": "js-pagination-page"
                }), c.attr("data-pagination-page", a), b("<li />").append(c).insertBefore(this.$(".js-pagination-pages li:last-child"));
                this.numPages <= 1 && this.$(".js-pagination-navigation").hide(), this.render()
            },
            render: function() {
                this.updatePage(this.options.currentPage), this.updateNavigation(), this.trigger("pageChange")
            },
            updatePage: function(a) {
                var c = this.options.collection,
                    d = 0,
                    e = this.options.numPerPage * a,
                    f = e + this.options.numPerPage;
                for (this.$pageContainer.html(""), d = e; f > d; d++) d < c.length && this.$pageContainer.append(b(this.itemTemplate(c[d])))
            },
            updateNavigation: function() {
                this.$(".js-pagination-previous").toggleClass("disabled", 0 === this.options.currentPage), this.$(".js-pagination-next").toggleClass("disabled", this.options.currentPage === this.numPages - 1), this.$(".is-selected").removeClass("is-selected"), this.$('[data-pagination-page="' + this.options.currentPage + '"]').addClass("is-selected")
            },
            handlePreviousClick: function(a) {
                a.preventDefault(), this.options.currentPage > 0 && this.options.currentPage--, this.render()
            },
            handleNextClick: function(a) {
                a.preventDefault(), this.options.currentPage < this.numPages - 1 && this.options.currentPage++, this.render()
            },
            handlePageClick: function(a) {
                a.preventDefault(), this.options.currentPage = parseInt(b(a.target).attr("data-pagination-page"), 10), this.render()
            }
        });
    return d
}),
/**
 * @license
 * Copyright 2014 Eventbrite
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*! lucidum - v0.0.4 - 2014-08-11 */
function(a, b) {
    "object" == typeof exports ? module.exports = b() : "function" == typeof define && define.amd ? define("lucidum", [], b) : a.Lucidum = b()
}(this, function() {
    var a = function(a) {
        var b = document.createElement("canvas"),
            c = document.getElementsByTagName("body")[0],
            d = a.naturalWidth || a.width,
            e = a.naturalHeight || a.height;
        b.width = d, b.height = e, b.style.display = "none", c.appendChild(b);
        try {
            var f = b.getContext("2d");
            f.drawImage(a, 0, 0);
            var g = f.getImageData(0, 0, d, e)
        } catch (h) {
            throw c.removeChild(b), h
        }
        return c.removeChild(b), b = null, g.data
    }, b = function(a) {
            var b, c, d, e = {}, f = a.length % 3 ? 4 : 3;
            for (c = 0, d = a.length; d > c; c += f) b = a[c] + "," + a[c + 1] + "," + a[c + 2], e[b] = void 0 === e[b] ? 1 : e[b] + 1;
            return e
        }, c = function(c) {
            this.imageEl = c, this.imageData = a(this.imageEl), this.reducedImageData = this.reduceColors(this.imageData), this.colorCounts = b(this.reducedImageData)
        };
    return c.prototype.VERSION = "0.0.4", c.prototype.REDUCED_COLOR_COUNT = 28672, c.prototype.PERCEPTION_FACTOR_R = 1, c.prototype.PERCEPTION_FACTOR_G = 2, c.prototype.PERCEPTION_FACTOR_B = .7, c.prototype.GRAY_THRESHOLD = 40, c.prototype.reduceColors = function(a) {
        var b, c, d, e = Math.pow(this.REDUCED_COLOR_COUNT, 1 / 3),
            f = 256 / e,
            g = [],
            h = this.PERCEPTION_FACTOR_R * f,
            i = this.PERCEPTION_FACTOR_G * f,
            j = this.PERCEPTION_FACTOR_B * f;
        for (b = 0, c = a.length; c > b; b += 4) d = (a[b] + a[b + 1] + a[b + 2]) / 3, Math.abs(d - a[b]) < this.GRAY_THRESHOLD / this.PERCEPTION_FACTOR_R && Math.abs(d - a[b + 1]) < this.GRAY_THRESHOLD / this.PERCEPTION_FACTOR_G && Math.abs(d - a[b + 2]) < this.GRAY_THRESHOLD / this.PERCEPTION_FACTOR_B || g.push(Math.floor(Math.floor(a[b] / h) * h), Math.floor(Math.floor(a[b + 1] / i) * i), Math.floor(Math.floor(a[b + 2] / j) * j));
        return g
    }, c.prototype.getUniqueColors = function() {
        return Object.keys(this.colorCounts)
    }, c.prototype.getColorCount = function() {
        return this.getUniqueColors().length
    }, c.prototype.getDominantColor = function() {
        var a = this,
            b = Object.keys(this.colorCounts).map(function(b) {
                return a.colorCounts[b]
            }),
            c = Object.keys(this.colorCounts),
            d = Math.max.apply(Math, b);
        return c[b.indexOf(d)]
    }, c
}), define("eb-styleguide/js/ui_components/poster/poster_view", ["require", "dorsal", "jquery", "underscore", "backbone", "lucidum"], function(a) {
    "use strict";
    var b, c = a("dorsal"),
        d = a("jquery"),
        e = a("underscore"),
        f = a("backbone"),
        g = a("lucidum");
    return b = f.View.extend({
        ANIMATION_MAX_DELAY: 500,
        events: {
            click: "handlePosterClicked",
            "click .js-xd-preferred-link": "handlePreferredLinkClicked"
        },
        initialize: function() {
            e.bindAll(this, "initializeImage", "deferredRender", "renderWhenVisible", "handleScroll", "handlePosterClicked"), this.lucidumDfd = new d.Deferred, this.initializeImage()
        },
        initializeImage: function() {
            var a = this;
            d(function() {
                var b = a.$(".js-poster-image").get(0).src,
                    c = new Image;
                c.crossOrigin = "anonymous", c.onload = function() {
                    try {
                        a.lucidum = new g(this), a.lucidumDfd.resolve()
                    } catch (b) {
                        a.lucidumDfd.reject()
                    }
                }, c.src = b
            })
        },
        isVisible: function() {
            var a = this.$el.offset().top,
                b = d(window).scrollTop(),
                c = d(window).height();
            return a > b && b + c > a ? !0 : !1
        },
        render: function() {
            return this.lucidumDfd.done(this.deferredRender), this
        },
        deferredRender: function() {
            this.renderWhenVisible()
        },
        renderWhenVisible: function() {
            var a = "rgb(" + this.lucidum.getDominantColor() + ")";
            window.setTimeout(function() {
                this.$el.css("borderTopColor", a), this.$(".js-poster-decoration").css("backgroundColor", a)
            }.bind(this), Math.random() * this.ANIMATION_MAX_DELAY + 20)
        },
        handleScroll: function() {
            this.isVisible() && (this.renderWhenVisible(), d(window).off("scroll", this.handleScroll))
        },
        handlePosterClicked: function(a) {
            a.preventDefault(), this.$(".js-xd-preferred-link").length && this.$(".js-xd-preferred-link")[0].click()
        },
        handlePreferredLinkClicked: function(a) {
            a.stopPropagation()
        }
    }), c.registerPlugin("poster", function(a) {
        var c = new b(a).render();
        return c
    }), b
}), define("eb-styleguide/js/ui_components/retina/retina", ["require", "jquery", "dorsal"], function(a) {
    "use strict";
    var b = a("jquery"),
        c = a("dorsal");
    c.registerPlugin("retina", function(a) {
        var c = b(this);
        if (!(c.attr("srcset") && "srcset" in document.createElement("img")) && (window.devicePixelRatio && window.devicePixelRatio > 1.3 || window.location.search.indexOf("force_retina_display") >= 0) && a.data.retinaSrc) {
            var d = new Image;
            d.onload = function() {
                c.attr("src", d.src)
            }, d.src = a.data.retinaSrc
        }
    })
}), define("eb-styleguide/js/ui_components/table/scrollable", ["require", "dorsal"], function(a) {
    "use strict";
    var b = a("dorsal"),
        c = Backbone.View.extend({
            initialize: function(a) {
                this.scrollableHeight = a.scrollableHeight, this.$tableCaption = this.$("caption").detach()
            },
            render: function() {
                return this.$el.wrap('<div class="responsive-table--scrollable__wrapper" />').wrap('<div class="responsive-table--scrollable__scroll" />'), this.scrollableHeight && this.$el.closest(".responsive-table--scrollable__scroll").height(this.scrollableHeight), this.renderCaption(), this
            },
            renderCaption: function() {
                this.$tableCaption.length > 0 && this.$el.closest(".responsive-table--scrollable__wrapper").before($("<div />", {
                    "class": "responsive-table__caption",
                    html: this.$tableCaption.html()
                }))
            }
        });
    return b.registerPlugin("table-scrollable", function(a) {
        return new c({
            el: a.el,
            scrollableHeight: a.data.scrollableHeight
        }).render()
    }), c
}), define("eb-styleguide/js/ui_components/segmented_radio/segmented_radio_view", ["require", "backbone", "dorsal"], function(a) {
    "use strict";
    var b = a("backbone"),
        c = a("dorsal"),
        d = b.View.extend({
            className: "js-segmented-radio segmented-control",
            events: {
                "click .segmented-control__segment": "handleSegmentClicked"
            },
            initialize: function(a) {
                _.bindAll(this, "renderSegment", "handleSegmentClicked"), this.$radiosContainer = $(a.radiosContainer), this.$radios = this.$radiosContainer.find('input[type="radio"]'), this.$labels = this.$radiosContainer.find('input[type="radio"] + label')
            },
            handleSegmentClicked: function(a) {
                var b = $(a.currentTarget),
                    c = b.data("index");
                a.preventDefault(), b.hasClass("is-selected") || b.hasClass("segmented-control__segment--disabled") || ($(this.$radios[c]).trigger("click"), this.$(".is-selected").removeClass("is-selected"), b.addClass("is-selected"))
            },
            renderSegment: function(a, b) {
                var c = $("<a/>", {
                    href: "#",
                    "class": "segmented-control__segment"
                }).html(a.innerHTML);
                c.data("index", b), c.toggleClass("is-selected", this.$radios[b].checked), $(this.$radios[b]).is(":disabled") && c.addClass("segmented-control__segment--disabled"), this.$el.append(c)
            },
            render: function() {
                return this.$radios.addClass("is-hidden"), this.$labels.addClass("is-hidden"), _.each(this.$labels, this.renderSegment), this.$radiosContainer.append(this.$el), this
            }
        });
    return c.registerPlugin("segmented", function(a) {
        new d({
            radiosContainer: a.el
        }).render()
    }), d
}), define("hb!eb-styleguide/js/ui_components/custom_select/custom_select_wrapper.handlebars", ["handlebars.runtime"], function(a) {
    return a["default"].template(function(a, b, c, d, e) {
        this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
        var f, g = "",
            h = "function",
            i = this.escapeExpression;
        return g += '<div class="', (f = c.parentClass) ? f = f.call(b, {
            hash: {},
            data: e
        }) : (f = b && b.parentClass, f = typeof f === h ? f.call(b, {
            hash: {},
            data: e
        }) : f), g += i(f) + ' custom-select-container clrfix">\n</div>\n'
    })
}), define("hb!eb-styleguide/js/ui_components/custom_select/custom_select_internal.handlebars", ["handlebars.runtime"], function(a) {
    return a["default"].template(function(a, b, c, d, e) {
        this.compilerInfo = [4, ">= 1.0.0"], c = this.merge(c, a.helpers), e = e || {};
        var f, g = "",
            h = "function",
            i = this.escapeExpression;
        return g += '<span class="custom-select-value">', (f = c.select_value) ? f = f.call(b, {
            hash: {},
            data: e
        }) : (f = b && b.select_value, f = typeof f === h ? f.call(b, {
            hash: {},
            data: e
        }) : f), g += i(f) + '</span>\n<div class="custom-select-arrow"></div>\n'
    })
}), define("eb-styleguide/js/ui_components/custom_select/custom_select_view", ["require", "jquery", "backbone", "dorsal", "hb!./custom_select_wrapper.handlebars", "hb!./custom_select_internal.handlebars"], function(a) {
    "use strict";
    var b, c = a("jquery"),
        d = a("backbone"),
        e = a("dorsal"),
        f = a("hb!./custom_select_wrapper.handlebars"),
        g = a("hb!./custom_select_internal.handlebars");
    return b = d.View.extend({
        events: {
            change: "handleSelectChange",
            focus: "handleSelectFocus",
            blur: "handleSelectBlur"
        },
        handleSelectChange: function() {
            this.selectItem()
        },
        handleSelectFocus: function() {
            this.addWrapperFocus()
        },
        handleSelectBlur: function() {
            this.removeWrapperFocus()
        },
        initialize: function(a) {
            if (_.bindAll(this, "selectItem"), "undefined" == typeof a || "undefined" == typeof a.element) throw "SelectBox 'element' undefined";
            this.parentClass = "responsive-form__select", "string" == typeof a.parentClass && (this.parentClass = a.parentClass), a.element && a.element.className && (this.parentClass += " " + a.element.className), this.$el = c(a.element), this.template = g, this.wrapperTemplate = f, this.$el.val() === c(this.$el.find("option").get(0)).val() && c(this.$el.find("option").get(0)).attr("selected", "selected"), this.initialRender()
        },
        initialRender: function() {
            this.$wrapper = c(this.wrapperTemplate({
                parentClass: this.parentClass
            })), this.$el.wrap(this.$wrapper), this.$wrapper = this.$el.parent(), this.$wrapper.prepend(c(this.template({
                select_value: this.$el.find('option[value="' + this.$el.val() + '"]').text()
            }))), this.$span = this.$wrapper.find(".custom-select-value")
        },
        selectItem: function() {
            this.updateText(), this.trigger("change", this.$el.val())
        },
        addWrapperFocus: function() {
            this.$wrapper.addClass("responsive-form__select--focus")
        },
        removeWrapperFocus: function() {
            this.$wrapper.removeClass("responsive-form__select--focus")
        },
        updateText: function() {
            this.$span.text(this.text())
        },
        val: function() {
            return this.$el.val()
        },
        text: function() {
            return this.$el.find("option:selected").text()
        }
    }), e.registerPlugin("select-box", function(a) {
        new b({
            element: a.el,
            parentClass: "responsive-form__select"
        })
    }), b
}), define("eb-styleguide/js/ui_components/skip_links/skip_links", ["require", "dorsal", "jquery"], function(a) {
    "use strict";
    var b = a("dorsal"),
        c = a("jquery");
    b.registerPlugin("skip-links", {
        create: function(a) {
            var b = c(a.el),
                d = c(b.attr("href"));
            return b.on("click", function(a) {
                a.preventDefault(), d.trigger("focus")
            }), b
        },
        destroy: function(a) {
            a.instance.remove()
        }
    })
}), define("eb-styleguide/js/ui_components/table/stacked", ["require", "dorsal", "jquery"], function(a) {
    "use strict";
    var b = a("dorsal"),
        c = a("jquery"),
        d = Backbone.View.extend({
            render: function() {
                var a = this.$("th"),
                    b = this.$("tbody tr, tfoot tr");
                return a.each(function(a, d) {
                    var e = b.children("td:nth-child(" + (a + 1) + ")").not(":has(.responsive-table--stacked__content)");
                    e.length > 0 && (e.wrapInner(c("<div />", {
                        "class": "responsive-table--stacked__content"
                    })), e.not(".js-xd-table-stacked-no-header").prepend(c("<span />", {
                        "class": "responsive-table--stacked__header",
                        html: d.innerText || d.textContent
                    })))
                }), this.$el.addClass("responsive-table--stacked"), this.$("tfoot").detach().appendTo(this.$el), this
            }
        });
    return b.registerPlugin("table-stacked", function(a) {
        return new d({
            el: a.el
        }).render()
    }), d
}), define("eb-styleguide/js/ui_components/table/sticky", ["require", "dorsal", "jquery"], function(a) {
    "use strict";
    var b = a("dorsal"),
        c = a("jquery"),
        d = Backbone.View.extend({
            initialize: function(a) {
                this.stickyDefault = a.stickyDefault, this.columnWidthOverride = a.columnWidthOverride, this.$tableCaption = this.$("caption").detach(), this.$tableClone = this.getClonedTable()
            },
            render: function() {
                return this.$el.parent().hasClass("responsive-table--sticky__scrollable") ? this.getStickyColumn().html(this.getClonedTable()) : (this.renderScrollableTable(), this.renderStickyColumn(), this.renderCaption(), this.getStickyColumn().is(":visible") && this.resizeTableCells()), this
            },
            renderScrollableTable: function() {
                this.$el.addClass("responsive-table--sticky").wrap('<div class="' + this.getWrapperClass() + '" />').wrap('<div class="responsive-table--sticky__scrollable" />')
            },
            renderStickyColumn: function() {
                this.getWrapper().append(this.$tableClone), this.$tableClone.wrap('<div class="responsive-table--sticky__pinned" />')
            },
            renderCaption: function() {
                this.$tableCaption.length > 0 && this.getWrapper().before(c("<div />", {
                    "class": "responsive-table__caption",
                    html: this.$tableCaption.html()
                }))
            },
            resizeTableCells: function() {
                var a = this;
                this.columnWidthOverride && (this.getStickyColumn().width(this.columnWidthOverride), this.$el.css("margin-left", this.columnWidthOverride + "px")), this.$tableClone.find("tr").each(function(b, d) {
                    var e = Math.max(a.$("tr:eq(" + b + ")").height(), c(d).height());
                    c(d).height(e), a.$("tr:eq(" + b + ")").height(e)
                })
            },
            getClonedTable: function() {
                return this.$el.clone().removeClass("js-d-table-sticky responsive-table--sticky").removeAttr("id")
            },
            getWrapper: function() {
                return this.$el.closest(".responsive-table--sticky__wrapper")
            },
            getStickyColumn: function() {
                return this.getWrapper().find(".responsive-table--sticky__pinned")
            },
            getWrapperClass: function() {
                var a = "responsive-table--sticky__wrapper";
                return ("true" === this.stickyDefault || "" === this.stickyDefault) && (a += " is-sticky-default"), a
            }
        });
    return b.registerPlugin("table-sticky", function(a) {
        return new d({
            el: a.el,
            stickyDefault: a.data.stickyDefault,
            columnWidthOverride: a.data.columnWidth
        }).render()
    }), d
}), define("eb-styleguide/js/ui_components/switch/switch_view", ["require", "backbone", "dorsal"], function(a) {
    "use strict";
    var b = a("backbone"),
        c = a("dorsal"),
        d = b.View.extend({
            className: "js-switch-view",
            isDraggable: !1,
            initialize: function(a) {
                var b = this;
                if (d.STATE_NORMAL = "normal", d.STATE_DRAGGED = "dragged", _.bindAll(this, "switchButtonClicked", "handleMouseDragStart", "updateToggleButton", "handleMouseDrag", "handleTouchDrag", "handleMouseDragEnd", "handleMouseDragOff", "updateToggleSize", "checkboxChanged"), this.$checkbox = $(a.checkbox), this.currentState = d.STATE_NORMAL, 1 !== this.$checkbox.length || "checkbox" !== this.$checkbox.attr("type")) throw new Error("SwitchView expects a checkbox as an option");
                this.isSelected = this.$checkbox.prop("checked"), this.isDisabled = this.$checkbox.prop("disabled"), this.$switchButton = $("<a/>", {
                    href: "#",
                    "class": this.className + "-button"
                }), this.$switchIcon = $("<i/>"), this.$el.on("click", this.switchButtonClicked), this.$el.on("mousemove", this.switchButtonEnter), this.$switchButton.on("mousedown", this.handleMouseDragStart), this.$switchButton.on("touchstart", this.handleMouseDragStart), this.$switchButton.on("mousemove", this.handleMouseDrag), this.$switchButton.on("touchmove", this.handleTouchDrag), this.$switchButton.on("mouseup", this.handleMouseDragEnd), this.$switchButton.on("mouseleave", this.handleMouseDragOff), this.$switchButton.on("touchend", this.handleMouseDragOff), this.$checkbox.on("change", this.checkboxChanged), this.$checkbox.on("alternate-button", function(a, c) {
                    return b.updateToggleButton(c)
                }), this.updateToggleButton()
            },
            render: function() {
                return this.$el.addClass("switch"), this.$switchButton.addClass("switch__button"), this.$switchButton.attr("draggable", "false"), this.$el.append(this.$switchButton), this.$el.append(this.$switchIcon), this.$el.insertBefore(this.$checkbox), this.$checkbox.detach().appendTo(this.$el).hide(), this
            },
            switchButtonClicked: function(a) {
                a.preventDefault(), this.isDisabled || this.isDraggable === !1 && this.currentState === d.STATE_NORMAL && (this.isSelected = !this.isSelected, this.updateToggleButton(), this.trigger("toggle"), this.$checkbox.trigger("toggle"))
            },
            switchButtonEnter: function(a) {
                a.preventDefault(), this.isDraggable && (this.isDraggable = !1)
            },
            handleMouseDragStart: function() {
                this.isDraggable = !0, this.currentState = d.STATE_NORMAL, this.originalPosition = this.$switchButton.offset().left - this.$el.offset().left
            },
            handleMouseDragEnd: function(a) {
                if (a.preventDefault(), this.isDraggable) {
                    this.draggedPosition = this.$switchButton.offset().left - this.$el.offset().left;
                    var b = this.$el.width() / 4 - 5;
                    this.$switchButton.css("left", ""), this.$switchButton.removeClass("switch__button--draggable"), (this.draggedPosition - this.originalPosition > b || this.originalPosition - this.draggedPosition > b) && (this.currentState = d.STATE_NORMAL, this.$el.trigger("click"))
                }
                this.isDraggable = !1
            },
            handleMouseDragOff: function(a) {
                if (a.preventDefault(), this.isDraggable) {
                    this.draggedPosition = this.$switchButton.offset().left - this.$el.offset().left;
                    var b = this.$el.width() / 4 - 5;
                    this.$switchButton.css("left", ""), this.$switchButton.removeClass("switch__button--draggable"), (this.draggedPosition - this.originalPosition > b || this.originalPosition - this.draggedPosition > b) && (this.currentState = d.STATE_NORMAL, this.isDraggable = !1, this.$el.trigger("click"))
                }
                this.isDraggable = !1
            },
            handleMouseDrag: function(a) {
                var b = (a.clientX, a.clientX - this.$el.offset().left - this.$switchButton.width() / 2 + 5),
                    c = a.clientX - this.$el.offset().left + this.$switchButton.width() / 2 + 5;
                this.isDraggable && c < this.$el.width() - 5 && b > 5 && (this.currentState = d.STATE_DRAGGED, this.$switchButton.addClass("switch__button--draggable"), this.$switchButton.css("left", b))
            },
            handleTouchDrag: function(a) {
                a.preventDefault();
                var b = a.pageX || a.originalEvent.touches[0].pageX,
                    c = b - this.$el.offset().left - this.$switchButton.width() / 2 + 5,
                    e = b - this.$el.offset().left + this.$switchButton.width() / 2 + 5;
                this.isDraggable && e < this.$el.width() - 5 && c > 5 && (this.currentState = d.STATE_DRAGGED, this.$switchButton.addClass("switch__button--draggable"), this.$switchButton.css("left", c))
            },
            checkboxChanged: function() {
                this.isSelected = this.$checkbox.prop("checked"), this.updateToggleButton(), this.trigger("toggle", this.isSelected)
            },
            updateToggleButton: function(a) {
                void 0 !== a && (this.isSelected = a), this.$switchButton.toggleClass("switch__button--selected", this.isSelected), this.$checkbox.prop("checked", this.isSelected), this.updateToggleSize(this.isSelected), this.$el.toggleClass("switch--disabled", this.isDisabled), this.isSelected ? (this.$el.addClass("switch--selected"), this.$switchIcon.addClass("ico-checkmark ico--color-brand-white")) : (this.$el.removeClass("switch--selected"), this.$switchIcon.removeClass("ico-checkmark ico--color-brand-white"))
            },
            updateToggleSize: function() {
                this.$checkbox.hasClass("switch--small") && (this.$el.addClass("switch--small"), this.$switchIcon.addClass("ico--small")), this.$checkbox.hasClass("switch--large") && (this.$el.addClass("switch--large"), this.$switchIcon.addClass("ico--large"))
            },
            enable: function() {
                this.$checkbox.prop("disabled", !1), this.isDisabled = !1, this.updateToggleButton()
            },
            disable: function() {
                this.$checkbox.prop("disabled", !0), this.isDisabled = !0, this.updateToggleButton()
            }
        });
    return c.registerPlugin("switch", function(a) {
        return new d({
            checkbox: a.el
        }).render()
    }), d
}), define("eb-styleguide/js/ui_components/tooltip/tooltip_view", ["require", "dorsal", "bootstrap-tooltip"], function(a) {
    "use strict";
    var b = a("dorsal"),
        c = a("bootstrap-tooltip");
    return b.registerPlugin("tooltip", function(a) {
        new c(a.el)
    }), c
}), define("eb-styleguide/js/ui_components/truncate/truncate", ["require", "dorsal", "jquery"], function(a) {
    "use strict";
    var b = a("dorsal"),
        c = a("jquery");
    b.registerPlugin("truncate-multiline", function(a) {
        var b = c(a.el),
            d = b.find("> a");
        return a.el.offsetHeight < a.el.scrollHeight && c("<div/>").addClass("text--truncated-two-line__truncation").appendTo(d.length ? d : b), b
    })
}), define("eb-styleguide/js/ui_components/view_director/view_director", ["require", "jquery", "backbone", "dorsal"], function(a) {
    "use strict";
    var b, c = a("jquery"),
        d = a("backbone"),
        e = a("dorsal");
    return b = d.View.extend({
        initialize: function(a) {
            _.bindAll(this, "_handleDirectorClick"), this.autoToggle = !0, this.director = a.director, this.view = a.view, "undefined" != typeof a.autoToggle && (this.autoToggle = a.autoToggle), this.director.on("click", this._handleDirectorClick)
        },
        _handleDirectorClick: function(a) {
            a.preventDefault(), this.director.hasClass("is-active") && this.autoToggle ? this.deselect() : this.select()
        },
        select: function() {
            this.director.addClass("is-active"), this.view.addClass("is-active"), this.trigger("select", this), this.director.trigger("select.view-director"), this.view.trigger("select.view-director")
        },
        deselect: function() {
            this.director.removeClass("is-active"), this.view.removeClass("is-active"), this.trigger("deselect", this), this.director.trigger("deselect.view-director"), this.view.trigger("deselect.view-director")
        }
    }), e.registerPlugin("toggle", function(a) {
        new b({
            director: c(a.el).find(".js-xd-toggle-director"),
            view: c(a.el).find(".js-xd-toggle-view"),
            autoToggle: !0
        })
    }), b
}), define("eb-styleguide/js/ui_components/view_director/view_director_group", ["require", "jquery", "./view_director", "backbone", "dorsal"], function(a) {
    "use strict";
    var b, c = a("jquery"),
        d = a("./view_director"),
        e = a("backbone"),
        f = a("dorsal");
    return b = e.View.extend({
        initialize: function(a) {
            if (_.bindAll(this, "_initializeViewDirector", "_setupCollapsibleTabs"), "undefined" == typeof a || "undefined" == typeof a.directorGroup || "undefined" == typeof a.viewGroup) throw "directorGroup undefined";
            this.noViewActive = !1, this.multipleViewActive = !1, this.collapseTabs = !1, this.directorGroup = a.directorGroup, this.viewGroup = a.viewGroup, "undefined" != typeof a.noViewActive && (this.noViewActive = a.noViewActive), "undefined" != typeof a.multipleViewActive && (this.multipleViewActive = a.multipleViewActive), "undefined" != typeof a.collapseTabs && (this.collapseTabs = a.collapseTabs), this.viewDirectorGroup = [], _.each(this.directorGroup, this._initializeViewDirector)
        },
        _initializeViewDirector: function(a, b) {
            this.viewDirectorGroup[b] = new d({
                director: c(a),
                view: c(this.viewGroup[b]),
                autoToggle: this.noViewActive
            }), this.multipleViewActive || this.listenTo(this.viewDirectorGroup[b], "select", this._handleViewDirector), this.collapseTabs && this._setupCollapsibleTabs(a, this.viewGroup[b])
        },
        _handleViewDirector: function(a) {
            _.each(this.viewDirectorGroup, function(b) {
                b !== a && b.deselect()
            })
        },
        _setupCollapsibleTabs: function(a, b) {
            var d = c(a),
                e = c(b),
                f = d.hasClass("is-active") ? "is-active" : "",
                g = c('<h3 class="tabs-collapse-header hide-large">' + d.text() + "</h3>"),
                h = "tab-substitute";
            g.addClass(f), d.data(h, g), e.before(g), d.parents(".js-d-tabs-collapse").addClass("tabs-collapse"), d.on("select.view-director", function() {
                var a = c(this).data(h);
                a.addClass("is-active")
            }), d.on("deselect.view-director", function() {
                var a = c(this).data(h);
                a.removeClass("is-active")
            }), g.on("click", function() {
                d.trigger("click")
            })
        }
    }), f.registerPlugin("accordion", function(a) {
        new b({
            directorGroup: c(a.el).find(".js-xd-accordion-header"),
            viewGroup: c(a.el).find(".js-xd-accordion-content"),
            multipleViewActive: !0,
            noViewActive: !0
        })
    }), f.registerPlugin("tabs", function(a) {
        new b({
            directorGroup: c(a.el).find(".js-xd-tabs-header"),
            viewGroup: c(a.el).find(".js-xd-tabs-content")
        })
    }), f.registerPlugin("tabs-collapse", function(a) {
        var d = "true" === a.data.tabsMultipleopen ? !0 : !1;
        new b({
            directorGroup: c(a.el).find(".js-xd-tabs-header"),
            viewGroup: c(a.el).find(".js-xd-tabs-content"),
            collapseTabs: !0,
            multipleViewActive: d,
            noViewActive: d
        })
    }), b
}), define("eb-styleguide/js/ui_components/component_library", ["require", "dorsal", "./clearable_input/clearable_input_view", "./clipboard/app", "./datepicker", "./table/expandable", "./file_picker", "./modal/modal_view", "./pagination/pagination", "./poster/poster_view", "./retina/retina", "./table/scrollable", "./segmented_radio/segmented_radio_view", "./custom_select/custom_select_view", "./skip_links/skip_links", "./table/stacked", "./table/sticky", "./switch/switch_view", "./tooltip/tooltip_view", "./truncate/truncate", "./view_director/view_director_group", "jquery"], function(a) {
    "use strict";
    var b = a("dorsal"),
        c = (a("./clearable_input/clearable_input_view"), a("./clipboard/app"), a("./datepicker"), a("./table/expandable"), a("./file_picker"), a("./modal/modal_view"), a("./pagination/pagination"), a("./poster/poster_view"), a("./retina/retina"), a("./table/scrollable"), a("./segmented_radio/segmented_radio_view"), a("./custom_select/custom_select_view"), a("./skip_links/skip_links"), a("./table/stacked"), a("./table/sticky"), a("./switch/switch_view"), a("./tooltip/tooltip_view"), a("./truncate/truncate"), a("./view_director/view_director_group"), a("jquery")),
        d = c.Deferred();
    return {
        Dorsal: b,
        wireAll: function() {
            return b.wire().done(function() {
                d.resolve()
            }), this.promise()
        },
        promise: function() {
            return d.promise()
        },
        then: function() {
            return d.then.apply(d, arguments)
        }
    }
});
/*

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
var Handlebars = {};
! function(a, b) {
    a.VERSION = "1.0.0", a.COMPILER_REVISION = 4, a.REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: ">= 1.0.0"
    }, a.helpers = {}, a.partials = {};
    var c = Object.prototype.toString,
        d = "[object Function]",
        e = "[object Object]";
    a.registerHelper = function(b, d, f) {
        if (c.call(b) === e) {
            if (f || d) throw new a.Exception("Arg not supported with multiple helpers");
            a.Utils.extend(this.helpers, b)
        } else f && (d.not = f), this.helpers[b] = d
    }, a.registerPartial = function(b, d) {
        c.call(b) === e ? a.Utils.extend(this.partials, b) : this.partials[b] = d
    }, a.registerHelper("helperMissing", function(a) {
        if (2 === arguments.length) return b;
        throw new Error("Missing helper: '" + a + "'")
    }), a.registerHelper("blockHelperMissing", function(b, e) {
        var f = e.inverse || function() {}, g = e.fn,
            h = c.call(b);
        return h === d && (b = b.call(this)), b === !0 ? g(this) : b === !1 || null == b ? f(this) : "[object Array]" === h ? b.length > 0 ? a.helpers.each(b, e) : f(this) : g(b)
    }), a.K = function() {}, a.createFrame = Object.create || function(b) {
        a.K.prototype = b;
        var c = new a.K;
        return a.K.prototype = null, c
    }, a.logger = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        methodMap: {
            0: "debug",
            1: "info",
            2: "warn",
            3: "error"
        },
        log: function(b, c) {
            if (a.logger.level <= b) {
                var d = a.logger.methodMap[b];
                "undefined" != typeof console && console[d] && console[d].call(console, c)
            }
        }
    }, a.log = function(b, c) {
        a.logger.log(b, c)
    }, a.registerHelper("each", function(b, e) {
        var f, g = e.fn,
            h = e.inverse,
            i = 0,
            j = "",
            k = c.call(b);
        if (k === d && (b = b.call(this)), e.data && (f = a.createFrame(e.data)), b && "object" == typeof b)
            if (b instanceof Array)
                for (var l = b.length; l > i; i++) f && (f.index = i), j += g(b[i], {
                    data: f
                });
            else
                for (var m in b) b.hasOwnProperty(m) && (f && (f.key = m), j += g(b[m], {
                    data: f
                }), i++);
        return 0 === i && (j = h(this)), j
    }), a.registerHelper("if", function(b, e) {
        var f = c.call(b);
        return f === d && (b = b.call(this)), !b || a.Utils.isEmpty(b) ? e.inverse(this) : e.fn(this)
    }), a.registerHelper("unless", function(b, c) {
        return a.helpers["if"].call(this, b, {
            fn: c.inverse,
            inverse: c.fn
        })
    }), a.registerHelper("with", function(b, e) {
        var f = c.call(b);
        return f === d && (b = b.call(this)), a.Utils.isEmpty(b) ? void 0 : e.fn(b)
    }), a.registerHelper("log", function(b, c) {
        var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
        a.log(d, b)
    });
    var f = function() {
        function a() {
            this.yy = {}
        }
        var b = {
            trace: function() {},
            yy: {},
            symbols_: {
                error: 2,
                root: 3,
                program: 4,
                EOF: 5,
                simpleInverse: 6,
                statements: 7,
                statement: 8,
                openInverse: 9,
                closeBlock: 10,
                openBlock: 11,
                mustache: 12,
                partial: 13,
                CONTENT: 14,
                COMMENT: 15,
                OPEN_BLOCK: 16,
                inMustache: 17,
                CLOSE: 18,
                OPEN_INVERSE: 19,
                OPEN_ENDBLOCK: 20,
                path: 21,
                OPEN: 22,
                OPEN_UNESCAPED: 23,
                CLOSE_UNESCAPED: 24,
                OPEN_PARTIAL: 25,
                partialName: 26,
                params: 27,
                hash: 28,
                dataName: 29,
                param: 30,
                STRING: 31,
                INTEGER: 32,
                BOOLEAN: 33,
                hashSegments: 34,
                hashSegment: 35,
                ID: 36,
                EQUALS: 37,
                DATA: 38,
                pathSegments: 39,
                SEP: 40,
                $accept: 0,
                $end: 1
            },
            terminals_: {
                2: "error",
                5: "EOF",
                14: "CONTENT",
                15: "COMMENT",
                16: "OPEN_BLOCK",
                18: "CLOSE",
                19: "OPEN_INVERSE",
                20: "OPEN_ENDBLOCK",
                22: "OPEN",
                23: "OPEN_UNESCAPED",
                24: "CLOSE_UNESCAPED",
                25: "OPEN_PARTIAL",
                31: "STRING",
                32: "INTEGER",
                33: "BOOLEAN",
                36: "ID",
                37: "EQUALS",
                38: "DATA",
                40: "SEP"
            },
            productions_: [0, [3, 2],
                [4, 2],
                [4, 3],
                [4, 2],
                [4, 1],
                [4, 1],
                [4, 0],
                [7, 1],
                [7, 2],
                [8, 3],
                [8, 3],
                [8, 1],
                [8, 1],
                [8, 1],
                [8, 1],
                [11, 3],
                [9, 3],
                [10, 3],
                [12, 3],
                [12, 3],
                [13, 3],
                [13, 4],
                [6, 2],
                [17, 3],
                [17, 2],
                [17, 2],
                [17, 1],
                [17, 1],
                [27, 2],
                [27, 1],
                [30, 1],
                [30, 1],
                [30, 1],
                [30, 1],
                [30, 1],
                [28, 1],
                [34, 2],
                [34, 1],
                [35, 3],
                [35, 3],
                [35, 3],
                [35, 3],
                [35, 3],
                [26, 1],
                [26, 1],
                [26, 1],
                [29, 2],
                [21, 1],
                [39, 3],
                [39, 1]
            ],
            performAction: function(a, b, c, d, e, f) {
                var g = f.length - 1;
                switch (e) {
                    case 1:
                        return f[g - 1];
                    case 2:
                        this.$ = new d.ProgramNode([], f[g]);
                        break;
                    case 3:
                        this.$ = new d.ProgramNode(f[g - 2], f[g]);
                        break;
                    case 4:
                        this.$ = new d.ProgramNode(f[g - 1], []);
                        break;
                    case 5:
                        this.$ = new d.ProgramNode(f[g]);
                        break;
                    case 6:
                        this.$ = new d.ProgramNode([], []);
                        break;
                    case 7:
                        this.$ = new d.ProgramNode([]);
                        break;
                    case 8:
                        this.$ = [f[g]];
                        break;
                    case 9:
                        f[g - 1].push(f[g]), this.$ = f[g - 1];
                        break;
                    case 10:
                        this.$ = new d.BlockNode(f[g - 2], f[g - 1].inverse, f[g - 1], f[g]);
                        break;
                    case 11:
                        this.$ = new d.BlockNode(f[g - 2], f[g - 1], f[g - 1].inverse, f[g]);
                        break;
                    case 12:
                        this.$ = f[g];
                        break;
                    case 13:
                        this.$ = f[g];
                        break;
                    case 14:
                        this.$ = new d.ContentNode(f[g]);
                        break;
                    case 15:
                        this.$ = new d.CommentNode(f[g]);
                        break;
                    case 16:
                        this.$ = new d.MustacheNode(f[g - 1][0], f[g - 1][1]);
                        break;
                    case 17:
                        this.$ = new d.MustacheNode(f[g - 1][0], f[g - 1][1]);
                        break;
                    case 18:
                        this.$ = f[g - 1];
                        break;
                    case 19:
                        this.$ = new d.MustacheNode(f[g - 1][0], f[g - 1][1], "&" === f[g - 2][2]);
                        break;
                    case 20:
                        this.$ = new d.MustacheNode(f[g - 1][0], f[g - 1][1], !0);
                        break;
                    case 21:
                        this.$ = new d.PartialNode(f[g - 1]);
                        break;
                    case 22:
                        this.$ = new d.PartialNode(f[g - 2], f[g - 1]);
                        break;
                    case 23:
                        break;
                    case 24:
                        this.$ = [
                            [f[g - 2]].concat(f[g - 1]), f[g]
                        ];
                        break;
                    case 25:
                        this.$ = [
                            [f[g - 1]].concat(f[g]), null
                        ];
                        break;
                    case 26:
                        this.$ = [
                            [f[g - 1]], f[g]
                        ];
                        break;
                    case 27:
                        this.$ = [
                            [f[g]], null
                        ];
                        break;
                    case 28:
                        this.$ = [
                            [f[g]], null
                        ];
                        break;
                    case 29:
                        f[g - 1].push(f[g]), this.$ = f[g - 1];
                        break;
                    case 30:
                        this.$ = [f[g]];
                        break;
                    case 31:
                        this.$ = f[g];
                        break;
                    case 32:
                        this.$ = new d.StringNode(f[g]);
                        break;
                    case 33:
                        this.$ = new d.IntegerNode(f[g]);
                        break;
                    case 34:
                        this.$ = new d.BooleanNode(f[g]);
                        break;
                    case 35:
                        this.$ = f[g];
                        break;
                    case 36:
                        this.$ = new d.HashNode(f[g]);
                        break;
                    case 37:
                        f[g - 1].push(f[g]), this.$ = f[g - 1];
                        break;
                    case 38:
                        this.$ = [f[g]];
                        break;
                    case 39:
                        this.$ = [f[g - 2], f[g]];
                        break;
                    case 40:
                        this.$ = [f[g - 2], new d.StringNode(f[g])];
                        break;
                    case 41:
                        this.$ = [f[g - 2], new d.IntegerNode(f[g])];
                        break;
                    case 42:
                        this.$ = [f[g - 2], new d.BooleanNode(f[g])];
                        break;
                    case 43:
                        this.$ = [f[g - 2], f[g]];
                        break;
                    case 44:
                        this.$ = new d.PartialNameNode(f[g]);
                        break;
                    case 45:
                        this.$ = new d.PartialNameNode(new d.StringNode(f[g]));
                        break;
                    case 46:
                        this.$ = new d.PartialNameNode(new d.IntegerNode(f[g]));
                        break;
                    case 47:
                        this.$ = new d.DataNode(f[g]);
                        break;
                    case 48:
                        this.$ = new d.IdNode(f[g]);
                        break;
                    case 49:
                        f[g - 2].push({
                            part: f[g],
                            separator: f[g - 1]
                        }), this.$ = f[g - 2];
                        break;
                    case 50:
                        this.$ = [{
                            part: f[g]
                        }]
                }
            },
            table: [{
                3: 1,
                4: 2,
                5: [2, 7],
                6: 3,
                7: 4,
                8: 6,
                9: 7,
                11: 8,
                12: 9,
                13: 10,
                14: [1, 11],
                15: [1, 12],
                16: [1, 13],
                19: [1, 5],
                22: [1, 14],
                23: [1, 15],
                25: [1, 16]
            }, {
                1: [3]
            }, {
                5: [1, 17]
            }, {
                5: [2, 6],
                7: 18,
                8: 6,
                9: 7,
                11: 8,
                12: 9,
                13: 10,
                14: [1, 11],
                15: [1, 12],
                16: [1, 13],
                19: [1, 19],
                20: [2, 6],
                22: [1, 14],
                23: [1, 15],
                25: [1, 16]
            }, {
                5: [2, 5],
                6: 20,
                8: 21,
                9: 7,
                11: 8,
                12: 9,
                13: 10,
                14: [1, 11],
                15: [1, 12],
                16: [1, 13],
                19: [1, 5],
                20: [2, 5],
                22: [1, 14],
                23: [1, 15],
                25: [1, 16]
            }, {
                17: 23,
                18: [1, 22],
                21: 24,
                29: 25,
                36: [1, 28],
                38: [1, 27],
                39: 26
            }, {
                5: [2, 8],
                14: [2, 8],
                15: [2, 8],
                16: [2, 8],
                19: [2, 8],
                20: [2, 8],
                22: [2, 8],
                23: [2, 8],
                25: [2, 8]
            }, {
                4: 29,
                6: 3,
                7: 4,
                8: 6,
                9: 7,
                11: 8,
                12: 9,
                13: 10,
                14: [1, 11],
                15: [1, 12],
                16: [1, 13],
                19: [1, 5],
                20: [2, 7],
                22: [1, 14],
                23: [1, 15],
                25: [1, 16]
            }, {
                4: 30,
                6: 3,
                7: 4,
                8: 6,
                9: 7,
                11: 8,
                12: 9,
                13: 10,
                14: [1, 11],
                15: [1, 12],
                16: [1, 13],
                19: [1, 5],
                20: [2, 7],
                22: [1, 14],
                23: [1, 15],
                25: [1, 16]
            }, {
                5: [2, 12],
                14: [2, 12],
                15: [2, 12],
                16: [2, 12],
                19: [2, 12],
                20: [2, 12],
                22: [2, 12],
                23: [2, 12],
                25: [2, 12]
            }, {
                5: [2, 13],
                14: [2, 13],
                15: [2, 13],
                16: [2, 13],
                19: [2, 13],
                20: [2, 13],
                22: [2, 13],
                23: [2, 13],
                25: [2, 13]
            }, {
                5: [2, 14],
                14: [2, 14],
                15: [2, 14],
                16: [2, 14],
                19: [2, 14],
                20: [2, 14],
                22: [2, 14],
                23: [2, 14],
                25: [2, 14]
            }, {
                5: [2, 15],
                14: [2, 15],
                15: [2, 15],
                16: [2, 15],
                19: [2, 15],
                20: [2, 15],
                22: [2, 15],
                23: [2, 15],
                25: [2, 15]
            }, {
                17: 31,
                21: 24,
                29: 25,
                36: [1, 28],
                38: [1, 27],
                39: 26
            }, {
                17: 32,
                21: 24,
                29: 25,
                36: [1, 28],
                38: [1, 27],
                39: 26
            }, {
                17: 33,
                21: 24,
                29: 25,
                36: [1, 28],
                38: [1, 27],
                39: 26
            }, {
                21: 35,
                26: 34,
                31: [1, 36],
                32: [1, 37],
                36: [1, 28],
                39: 26
            }, {
                1: [2, 1]
            }, {
                5: [2, 2],
                8: 21,
                9: 7,
                11: 8,
                12: 9,
                13: 10,
                14: [1, 11],
                15: [1, 12],
                16: [1, 13],
                19: [1, 19],
                20: [2, 2],
                22: [1, 14],
                23: [1, 15],
                25: [1, 16]
            }, {
                17: 23,
                21: 24,
                29: 25,
                36: [1, 28],
                38: [1, 27],
                39: 26
            }, {
                5: [2, 4],
                7: 38,
                8: 6,
                9: 7,
                11: 8,
                12: 9,
                13: 10,
                14: [1, 11],
                15: [1, 12],
                16: [1, 13],
                19: [1, 19],
                20: [2, 4],
                22: [1, 14],
                23: [1, 15],
                25: [1, 16]
            }, {
                5: [2, 9],
                14: [2, 9],
                15: [2, 9],
                16: [2, 9],
                19: [2, 9],
                20: [2, 9],
                22: [2, 9],
                23: [2, 9],
                25: [2, 9]
            }, {
                5: [2, 23],
                14: [2, 23],
                15: [2, 23],
                16: [2, 23],
                19: [2, 23],
                20: [2, 23],
                22: [2, 23],
                23: [2, 23],
                25: [2, 23]
            }, {
                18: [1, 39]
            }, {
                18: [2, 27],
                21: 44,
                24: [2, 27],
                27: 40,
                28: 41,
                29: 48,
                30: 42,
                31: [1, 45],
                32: [1, 46],
                33: [1, 47],
                34: 43,
                35: 49,
                36: [1, 50],
                38: [1, 27],
                39: 26
            }, {
                18: [2, 28],
                24: [2, 28]
            }, {
                18: [2, 48],
                24: [2, 48],
                31: [2, 48],
                32: [2, 48],
                33: [2, 48],
                36: [2, 48],
                38: [2, 48],
                40: [1, 51]
            }, {
                21: 52,
                36: [1, 28],
                39: 26
            }, {
                18: [2, 50],
                24: [2, 50],
                31: [2, 50],
                32: [2, 50],
                33: [2, 50],
                36: [2, 50],
                38: [2, 50],
                40: [2, 50]
            }, {
                10: 53,
                20: [1, 54]
            }, {
                10: 55,
                20: [1, 54]
            }, {
                18: [1, 56]
            }, {
                18: [1, 57]
            }, {
                24: [1, 58]
            }, {
                18: [1, 59],
                21: 60,
                36: [1, 28],
                39: 26
            }, {
                18: [2, 44],
                36: [2, 44]
            }, {
                18: [2, 45],
                36: [2, 45]
            }, {
                18: [2, 46],
                36: [2, 46]
            }, {
                5: [2, 3],
                8: 21,
                9: 7,
                11: 8,
                12: 9,
                13: 10,
                14: [1, 11],
                15: [1, 12],
                16: [1, 13],
                19: [1, 19],
                20: [2, 3],
                22: [1, 14],
                23: [1, 15],
                25: [1, 16]
            }, {
                14: [2, 17],
                15: [2, 17],
                16: [2, 17],
                19: [2, 17],
                20: [2, 17],
                22: [2, 17],
                23: [2, 17],
                25: [2, 17]
            }, {
                18: [2, 25],
                21: 44,
                24: [2, 25],
                28: 61,
                29: 48,
                30: 62,
                31: [1, 45],
                32: [1, 46],
                33: [1, 47],
                34: 43,
                35: 49,
                36: [1, 50],
                38: [1, 27],
                39: 26
            }, {
                18: [2, 26],
                24: [2, 26]
            }, {
                18: [2, 30],
                24: [2, 30],
                31: [2, 30],
                32: [2, 30],
                33: [2, 30],
                36: [2, 30],
                38: [2, 30]
            }, {
                18: [2, 36],
                24: [2, 36],
                35: 63,
                36: [1, 64]
            }, {
                18: [2, 31],
                24: [2, 31],
                31: [2, 31],
                32: [2, 31],
                33: [2, 31],
                36: [2, 31],
                38: [2, 31]
            }, {
                18: [2, 32],
                24: [2, 32],
                31: [2, 32],
                32: [2, 32],
                33: [2, 32],
                36: [2, 32],
                38: [2, 32]
            }, {
                18: [2, 33],
                24: [2, 33],
                31: [2, 33],
                32: [2, 33],
                33: [2, 33],
                36: [2, 33],
                38: [2, 33]
            }, {
                18: [2, 34],
                24: [2, 34],
                31: [2, 34],
                32: [2, 34],
                33: [2, 34],
                36: [2, 34],
                38: [2, 34]
            }, {
                18: [2, 35],
                24: [2, 35],
                31: [2, 35],
                32: [2, 35],
                33: [2, 35],
                36: [2, 35],
                38: [2, 35]
            }, {
                18: [2, 38],
                24: [2, 38],
                36: [2, 38]
            }, {
                18: [2, 50],
                24: [2, 50],
                31: [2, 50],
                32: [2, 50],
                33: [2, 50],
                36: [2, 50],
                37: [1, 65],
                38: [2, 50],
                40: [2, 50]
            }, {
                36: [1, 66]
            }, {
                18: [2, 47],
                24: [2, 47],
                31: [2, 47],
                32: [2, 47],
                33: [2, 47],
                36: [2, 47],
                38: [2, 47]
            }, {
                5: [2, 10],
                14: [2, 10],
                15: [2, 10],
                16: [2, 10],
                19: [2, 10],
                20: [2, 10],
                22: [2, 10],
                23: [2, 10],
                25: [2, 10]
            }, {
                21: 67,
                36: [1, 28],
                39: 26
            }, {
                5: [2, 11],
                14: [2, 11],
                15: [2, 11],
                16: [2, 11],
                19: [2, 11],
                20: [2, 11],
                22: [2, 11],
                23: [2, 11],
                25: [2, 11]
            }, {
                14: [2, 16],
                15: [2, 16],
                16: [2, 16],
                19: [2, 16],
                20: [2, 16],
                22: [2, 16],
                23: [2, 16],
                25: [2, 16]
            }, {
                5: [2, 19],
                14: [2, 19],
                15: [2, 19],
                16: [2, 19],
                19: [2, 19],
                20: [2, 19],
                22: [2, 19],
                23: [2, 19],
                25: [2, 19]
            }, {
                5: [2, 20],
                14: [2, 20],
                15: [2, 20],
                16: [2, 20],
                19: [2, 20],
                20: [2, 20],
                22: [2, 20],
                23: [2, 20],
                25: [2, 20]
            }, {
                5: [2, 21],
                14: [2, 21],
                15: [2, 21],
                16: [2, 21],
                19: [2, 21],
                20: [2, 21],
                22: [2, 21],
                23: [2, 21],
                25: [2, 21]
            }, {
                18: [1, 68]
            }, {
                18: [2, 24],
                24: [2, 24]
            }, {
                18: [2, 29],
                24: [2, 29],
                31: [2, 29],
                32: [2, 29],
                33: [2, 29],
                36: [2, 29],
                38: [2, 29]
            }, {
                18: [2, 37],
                24: [2, 37],
                36: [2, 37]
            }, {
                37: [1, 65]
            }, {
                21: 69,
                29: 73,
                31: [1, 70],
                32: [1, 71],
                33: [1, 72],
                36: [1, 28],
                38: [1, 27],
                39: 26
            }, {
                18: [2, 49],
                24: [2, 49],
                31: [2, 49],
                32: [2, 49],
                33: [2, 49],
                36: [2, 49],
                38: [2, 49],
                40: [2, 49]
            }, {
                18: [1, 74]
            }, {
                5: [2, 22],
                14: [2, 22],
                15: [2, 22],
                16: [2, 22],
                19: [2, 22],
                20: [2, 22],
                22: [2, 22],
                23: [2, 22],
                25: [2, 22]
            }, {
                18: [2, 39],
                24: [2, 39],
                36: [2, 39]
            }, {
                18: [2, 40],
                24: [2, 40],
                36: [2, 40]
            }, {
                18: [2, 41],
                24: [2, 41],
                36: [2, 41]
            }, {
                18: [2, 42],
                24: [2, 42],
                36: [2, 42]
            }, {
                18: [2, 43],
                24: [2, 43],
                36: [2, 43]
            }, {
                5: [2, 18],
                14: [2, 18],
                15: [2, 18],
                16: [2, 18],
                19: [2, 18],
                20: [2, 18],
                22: [2, 18],
                23: [2, 18],
                25: [2, 18]
            }],
            defaultActions: {
                17: [2, 1]
            },
            parseError: function(a) {
                throw new Error(a)
            },
            parse: function(a) {
                function b() {
                    var a;
                    return a = c.lexer.lex() || 1, "number" != typeof a && (a = c.symbols_[a] || a), a
                }
                var c = this,
                    d = [0],
                    e = [null],
                    f = [],
                    g = this.table,
                    h = "",
                    i = 0,
                    j = 0,
                    k = 0;
                this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                var l = this.lexer.yylloc;
                f.push(l);
                var m = this.lexer.options && this.lexer.options.ranges;
                "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                for (var n, o, p, q, r, s, t, u, v, w = {};;) {
                    if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : ((null === n || "undefined" == typeof n) && (n = b()), q = g[p] && g[p][n]), "undefined" == typeof q || !q.length || !q[0]) {
                        var x = "";
                        if (!k) {
                            v = [];
                            for (s in g[p]) this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                            x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), this.parseError(x, {
                                text: this.lexer.match,
                                token: this.terminals_[n] || n,
                                line: this.lexer.yylineno,
                                loc: l,
                                expected: v
                            })
                        }
                    }
                    if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
                    switch (q[0]) {
                        case 1:
                            d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, l = this.lexer.yylloc, k > 0 && k--);
                            break;
                        case 2:
                            if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = {
                                first_line: f[f.length - (t || 1)].first_line,
                                last_line: f[f.length - 1].last_line,
                                first_column: f[f.length - (t || 1)].first_column,
                                last_column: f[f.length - 1].last_column
                            }, m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]), r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f), "undefined" != typeof r) return r;
                            t && (d = d.slice(0, 2 * -1 * t), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], d.push(u);
                            break;
                        case 3:
                            return !0
                    }
                }
                return !0
            }
        }, c = function() {
                var a = {
                    EOF: 1,
                    parseError: function(a, b) {
                        if (!this.yy.parser) throw new Error(a);
                        this.yy.parser.parseError(a, b)
                    },
                    setInput: function(a) {
                        return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0
                        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                    },
                    input: function() {
                        var a = this._input[0];
                        this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a;
                        var b = a.match(/(?:\r\n?|\n).*/g);
                        return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), a
                    },
                    unput: function(a) {
                        var b = a.length,
                            c = a.split(/(?:\r\n?|\n)/g);
                        this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), this.offset -= b;
                        var d = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);
                        var e = this.yylloc.range;
                        return this.yylloc = {
                            first_line: this.yylloc.first_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.first_column,
                            last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b
                        }, this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]), this
                    },
                    more: function() {
                        return this._more = !0, this
                    },
                    less: function(a) {
                        this.unput(this.match.slice(a))
                    },
                    pastInput: function() {
                        var a = this.matched.substr(0, this.matched.length - this.match.length);
                        return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "")
                    },
                    upcomingInput: function() {
                        var a = this.match;
                        return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "")
                    },
                    showPosition: function() {
                        var a = this.pastInput(),
                            b = new Array(a.length + 1).join("-");
                        return a + this.upcomingInput() + "\n" + b + "^"
                    },
                    next: function() {
                        if (this.done) return this.EOF;
                        this._input || (this.done = !0);
                        var a, b, c, d, e;
                        this._more || (this.yytext = "", this.match = "");
                        for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]), !c || b && !(c[0].length > b[0].length) || (b = c, d = g, this.options.flex)); g++);
                        return b ? (e = b[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length
                        }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        })
                    },
                    lex: function() {
                        var a = this.next();
                        return "undefined" != typeof a ? a : this.lex()
                    },
                    begin: function(a) {
                        this.conditionStack.push(a)
                    },
                    popState: function() {
                        return this.conditionStack.pop()
                    },
                    _currentRules: function() {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                    },
                    topState: function() {
                        return this.conditionStack[this.conditionStack.length - 2]
                    },
                    pushState: function(a) {
                        this.begin(a)
                    }
                };
                return a.options = {}, a.performAction = function(a, b, c, d) {
                    switch (c) {
                        case 0:
                            return b.yytext = "\\", 14;
                        case 1:
                            if ("\\" !== b.yytext.slice(-1) && this.begin("mu"), "\\" === b.yytext.slice(-1) && (b.yytext = b.yytext.substr(0, b.yyleng - 1), this.begin("emu")), b.yytext) return 14;
                            break;
                        case 2:
                            return 14;
                        case 3:
                            return "\\" !== b.yytext.slice(-1) && this.popState(), "\\" === b.yytext.slice(-1) && (b.yytext = b.yytext.substr(0, b.yyleng - 1)), 14;
                        case 4:
                            return b.yytext = b.yytext.substr(0, b.yyleng - 4), this.popState(), 15;
                        case 5:
                            return 25;
                        case 6:
                            return 16;
                        case 7:
                            return 20;
                        case 8:
                            return 19;
                        case 9:
                            return 19;
                        case 10:
                            return 23;
                        case 11:
                            return 22;
                        case 12:
                            this.popState(), this.begin("com");
                            break;
                        case 13:
                            return b.yytext = b.yytext.substr(3, b.yyleng - 5), this.popState(), 15;
                        case 14:
                            return 22;
                        case 15:
                            return 37;
                        case 16:
                            return 36;
                        case 17:
                            return 36;
                        case 18:
                            return 40;
                        case 19:
                            break;
                        case 20:
                            return this.popState(), 24;
                        case 21:
                            return this.popState(), 18;
                        case 22:
                            return b.yytext = b.yytext.substr(1, b.yyleng - 2).replace(/\\"/g, '"'), 31;
                        case 23:
                            return b.yytext = b.yytext.substr(1, b.yyleng - 2).replace(/\\'/g, "'"), 31;
                        case 24:
                            return 38;
                        case 25:
                            return 33;
                        case 26:
                            return 33;
                        case 27:
                            return 32;
                        case 28:
                            return 36;
                        case 29:
                            return b.yytext = b.yytext.substr(1, b.yyleng - 2), 36;
                        case 30:
                            return "INVALID";
                        case 31:
                            return 5
                    }
                }, a.rules = [/^(?:\\\\(?=(\{\{)))/, /^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\{\{>)/, /^(?:\{\{#)/, /^(?:\{\{\/)/, /^(?:\{\{\^)/, /^(?:\{\{\s*else\b)/, /^(?:\{\{\{)/, /^(?:\{\{&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{)/, /^(?:=)/, /^(?:\.(?=[}\/ ]))/, /^(?:\.\.)/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}\}\})/, /^(?:\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=[}\s]))/, /^(?:false(?=[}\s]))/, /^(?:-?[0-9]+(?=[}\s]))/, /^(?:[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.]))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], a.conditions = {
                    mu: {
                        rules: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                        inclusive: !1
                    },
                    emu: {
                        rules: [3],
                        inclusive: !1
                    },
                    com: {
                        rules: [4],
                        inclusive: !1
                    },
                    INITIAL: {
                        rules: [0, 1, 2, 31],
                        inclusive: !0
                    }
                }, a
            }();
        return b.lexer = c, a.prototype = b, b.Parser = a, new a
    }();
    a.Parser = f, a.parse = function(b) {
        return b.constructor === a.AST.ProgramNode ? b : (a.Parser.yy = a.AST, a.Parser.parse(b))
    }, a.AST = {}, a.AST.ProgramNode = function(b, c) {
        this.type = "program", this.statements = b, c && (this.inverse = new a.AST.ProgramNode(c))
    }, a.AST.MustacheNode = function(a, b, c) {
        this.type = "mustache", this.escaped = !c, this.hash = b;
        var d = this.id = a[0],
            e = this.params = a.slice(1),
            f = this.eligibleHelper = d.isSimple;
        this.isHelper = f && (e.length || b)
    }, a.AST.PartialNode = function(a, b) {
        this.type = "partial", this.partialName = a, this.context = b
    }, a.AST.BlockNode = function(b, c, d, e) {
        var f = function(b, c) {
            if (b.original !== c.original) throw new a.Exception(b.original + " doesn't match " + c.original)
        };
        f(b.id, e), this.type = "block", this.mustache = b, this.program = c, this.inverse = d, this.inverse && !this.program && (this.isInverse = !0)
    }, a.AST.ContentNode = function(a) {
        this.type = "content", this.string = a
    }, a.AST.HashNode = function(a) {
        this.type = "hash", this.pairs = a
    }, a.AST.IdNode = function(b) {
        this.type = "ID";
        for (var c = "", d = [], e = 0, f = 0, g = b.length; g > f; f++) {
            var h = b[f].part;
            if (c += (b[f].separator || "") + h, ".." === h || "." === h || "this" === h) {
                if (d.length > 0) throw new a.Exception("Invalid path: " + c);
                ".." === h ? e++ : this.isScoped = !0
            } else d.push(h)
        }
        this.original = c, this.parts = d, this.string = d.join("."), this.depth = e, this.isSimple = 1 === b.length && !this.isScoped && 0 === e, this.stringModeValue = this.string
    }, a.AST.PartialNameNode = function(a) {
        this.type = "PARTIAL_NAME", this.name = a.original
    }, a.AST.DataNode = function(a) {
        this.type = "DATA", this.id = a
    }, a.AST.StringNode = function(a) {
        this.type = "STRING", this.original = this.string = this.stringModeValue = a
    }, a.AST.IntegerNode = function(a) {
        this.type = "INTEGER", this.original = this.integer = a, this.stringModeValue = Number(a)
    }, a.AST.BooleanNode = function(a) {
        this.type = "BOOLEAN", this.bool = a, this.stringModeValue = "true" === a
    }, a.AST.CommentNode = function(a) {
        this.type = "comment", this.comment = a
    };
    var g = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    a.Exception = function() {
        for (var a = Error.prototype.constructor.apply(this, arguments), b = 0; b < g.length; b++) this[g[b]] = a[g[b]]
    }, a.Exception.prototype = new Error, a.SafeString = function(a) {
        this.string = a
    }, a.SafeString.prototype.toString = function() {
        return "" + this.string
    };
    var h = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, i = /[&<>"'`]/g,
        j = /[&<>"'`]/,
        k = function(a) {
            return h[a] || "&amp;"
        };
    a.Utils = {
        extend: function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        escapeExpression: function(b) {
            return b instanceof a.SafeString ? b.toString() : null == b || b === !1 ? "" : (b = "" + b, j.test(b) ? b.replace(i, k) : b)
        },
        isEmpty: function(a) {
            return a || 0 === a ? "[object Array]" === c.call(a) && 0 === a.length ? !0 : !1 : !0
        }
    };
    var l = a.Compiler = function() {}, m = a.JavaScriptCompiler = function() {};
    l.prototype = {
        compiler: l,
        disassemble: function() {
            for (var a, b, c, d = this.opcodes, e = [], f = 0, g = d.length; g > f; f++)
                if (a = d[f], "DECLARE" === a.opcode) e.push("DECLARE " + a.name + "=" + a.value);
                else {
                    b = [];
                    for (var h = 0; h < a.args.length; h++) c = a.args[h], "string" == typeof c && (c = '"' + c.replace("\n", "\\n") + '"'), b.push(c);
                    e.push(a.opcode + " " + b.join(" "))
                }
            return e.join("\n")
        },
        equals: function(a) {
            var b = this.opcodes.length;
            if (a.opcodes.length !== b) return !1;
            for (var c = 0; b > c; c++) {
                var d = this.opcodes[c],
                    e = a.opcodes[c];
                if (d.opcode !== e.opcode || d.args.length !== e.args.length) return !1;
                for (var f = 0; f < d.args.length; f++)
                    if (d.args[f] !== e.args[f]) return !1
            }
            if (b = this.children.length, a.children.length !== b) return !1;
            for (c = 0; b > c; c++)
                if (!this.children[c].equals(a.children[c])) return !1;
            return !0
        },
        guid: 0,
        compile: function(a, b) {
            this.children = [], this.depths = {
                list: []
            }, this.options = b;
            var c = this.options.knownHelpers;
            if (this.options.knownHelpers = {
                helperMissing: !0,
                blockHelperMissing: !0,
                each: !0,
                "if": !0,
                unless: !0,
                "with": !0,
                log: !0
            }, c)
                for (var d in c) this.options.knownHelpers[d] = c[d];
            return this.program(a)
        },
        accept: function(a) {
            return this[a.type](a)
        },
        program: function(a) {
            var b, c = a.statements;
            this.opcodes = [];
            for (var d = 0, e = c.length; e > d; d++) b = c[d], this[b.type](b);
            return this.isSimple = 1 === e, this.depths.list = this.depths.list.sort(function(a, b) {
                return a - b
            }), this
        },
        compileProgram: function(a) {
            var b, c = (new this.compiler).compile(a, this.options),
                d = this.guid++;
            this.usePartial = this.usePartial || c.usePartial, this.children[d] = c;
            for (var e = 0, f = c.depths.list.length; f > e; e++) b = c.depths.list[e], 2 > b || this.addDepth(b - 1);
            return d
        },
        block: function(a) {
            var b = a.mustache,
                c = a.program,
                d = a.inverse;
            c && (c = this.compileProgram(c)), d && (d = this.compileProgram(d));
            var e = this.classifyMustache(b);
            "helper" === e ? this.helperMustache(b, c, d) : "simple" === e ? (this.simpleMustache(b), this.opcode("pushProgram", c), this.opcode("pushProgram", d), this.opcode("emptyHash"), this.opcode("blockValue")) : (this.ambiguousMustache(b, c, d), this.opcode("pushProgram", c), this.opcode("pushProgram", d), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
        },
        hash: function(a) {
            var b, c, d = a.pairs;
            this.opcode("pushHash");
            for (var e = 0, f = d.length; f > e; e++) b = d[e], c = b[1], this.options.stringParams ? (c.depth && this.addDepth(c.depth), this.opcode("getContext", c.depth || 0), this.opcode("pushStringParam", c.stringModeValue, c.type)) : this.accept(c), this.opcode("assignToHash", b[0]);
            this.opcode("popHash")
        },
        partial: function(a) {
            var b = a.partialName;
            this.usePartial = !0, a.context ? this.ID(a.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", b.name), this.opcode("append")
        },
        content: function(a) {
            this.opcode("appendContent", a.string)
        },
        mustache: function(a) {
            var b = this.options,
                c = this.classifyMustache(a);
            "simple" === c ? this.simpleMustache(a) : "helper" === c ? this.helperMustache(a) : this.ambiguousMustache(a), a.escaped && !b.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
        },
        ambiguousMustache: function(a, b, c) {
            var d = a.id,
                e = d.parts[0],
                f = null != b || null != c;
            this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("invokeAmbiguous", e, f)
        },
        simpleMustache: function(a) {
            var b = a.id;
            "DATA" === b.type ? this.DATA(b) : b.parts.length ? this.ID(b) : (this.addDepth(b.depth), this.opcode("getContext", b.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
        },
        helperMustache: function(a, b, c) {
            var d = this.setupFullMustacheParams(a, b, c),
                e = a.id.parts[0];
            if (this.options.knownHelpers[e]) this.opcode("invokeKnownHelper", d.length, e);
            else {
                if (this.options.knownHelpersOnly) throw new Error("You specified knownHelpersOnly, but used the unknown helper " + e);
                this.opcode("invokeHelper", d.length, e)
            }
        },
        ID: function(a) {
            this.addDepth(a.depth), this.opcode("getContext", a.depth);
            var b = a.parts[0];
            b ? this.opcode("lookupOnContext", a.parts[0]) : this.opcode("pushContext");
            for (var c = 1, d = a.parts.length; d > c; c++) this.opcode("lookup", a.parts[c])
        },
        DATA: function(b) {
            if (this.options.data = !0, b.id.isScoped || b.id.depth) throw new a.Exception("Scoped data references are not supported: " + b.original);
            this.opcode("lookupData");
            for (var c = b.id.parts, d = 0, e = c.length; e > d; d++) this.opcode("lookup", c[d])
        },
        STRING: function(a) {
            this.opcode("pushString", a.string)
        },
        INTEGER: function(a) {
            this.opcode("pushLiteral", a.integer)
        },
        BOOLEAN: function(a) {
            this.opcode("pushLiteral", a.bool)
        },
        comment: function() {},
        opcode: function(a) {
            this.opcodes.push({
                opcode: a,
                args: [].slice.call(arguments, 1)
            })
        },
        declare: function(a, b) {
            this.opcodes.push({
                opcode: "DECLARE",
                name: a,
                value: b
            })
        },
        addDepth: function(a) {
            if (isNaN(a)) throw new Error("EWOT");
            0 !== a && (this.depths[a] || (this.depths[a] = !0, this.depths.list.push(a)))
        },
        classifyMustache: function(a) {
            var b = a.isHelper,
                c = a.eligibleHelper,
                d = this.options;
            if (c && !b) {
                var e = a.id.parts[0];
                d.knownHelpers[e] ? b = !0 : d.knownHelpersOnly && (c = !1)
            }
            return b ? "helper" : c ? "ambiguous" : "simple"
        },
        pushParams: function(a) {
            for (var b, c = a.length; c--;) b = a[c], this.options.stringParams ? (b.depth && this.addDepth(b.depth), this.opcode("getContext", b.depth || 0), this.opcode("pushStringParam", b.stringModeValue, b.type)) : this[b.type](b)
        },
        setupMustacheParams: function(a) {
            var b = a.params;
            return this.pushParams(b), a.hash ? this.hash(a.hash) : this.opcode("emptyHash"), b
        },
        setupFullMustacheParams: function(a, b, c) {
            var d = a.params;
            return this.pushParams(d), this.opcode("pushProgram", b), this.opcode("pushProgram", c), a.hash ? this.hash(a.hash) : this.opcode("emptyHash"), d
        }
    };
    var n = function(a) {
        this.value = a
    };
    m.prototype = {
        nameLookup: function(a, b) {
            return /^[0-9]+$/.test(b) ? a + "[" + b + "]" : m.isValidJavaScriptVariableName(b) ? a + "." + b : a + "['" + b + "']"
        },
        appendToBuffer: function(a) {
            return this.environment.isSimple ? "return " + a + ";" : {
                appendToBuffer: !0,
                content: a,
                toString: function() {
                    return "buffer += " + a + ";"
                }
            }
        },
        initializeBuffer: function() {
            return this.quotedString("")
        },
        namespace: "Handlebars",
        compile: function(b, c, d, e) {
            this.environment = b, this.options = c || {}, a.log(a.logger.DEBUG, this.environment.disassemble() + "\n\n"), this.name = this.environment.name, this.isChild = !! d, this.context = d || {
                programs: [],
                environments: [],
                aliases: {}
            }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = {
                list: []
            }, this.compileStack = [], this.inlineStack = [], this.compileChildren(b, c);
            var f, g = b.opcodes;
            for (this.i = 0, r = g.length; this.i < r; this.i++) f = g[this.i], "DECLARE" === f.opcode ? this[f.name] = f.value : this[f.opcode].apply(this, f.args);
            return this.createFunctionContext(e)
        },
        nextOpcode: function() {
            var a = this.environment.opcodes;
            return a[this.i + 1]
        },
        eat: function() {
            this.i = this.i + 1
        },
        preamble: function() {
            var a = [];
            if (this.isChild) a.push("");
            else {
                var b = this.namespace,
                    c = "helpers = this.merge(helpers, " + b + ".helpers);";
                this.environment.usePartial && (c = c + " partials = this.merge(partials, " + b + ".partials);"), this.options.data && (c += " data = data || {};"), a.push(c)
            }
            this.environment.isSimple ? a.push("") : a.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = a
        },
        createFunctionContext: function(b) {
            var c = this.stackVars.concat(this.registers.list);
            if (c.length > 0 && (this.source[1] = this.source[1] + ", " + c.join(", ")), !this.isChild)
                for (var d in this.context.aliases) this.context.aliases.hasOwnProperty(d) && (this.source[1] = this.source[1] + ", " + d + "=" + this.context.aliases[d]);
            this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.source.push("return buffer;");
            for (var e = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], f = 0, g = this.environment.depths.list.length; g > f; f++) e.push("depth" + this.environment.depths.list[f]);
            var h = this.mergeSource();
            if (!this.isChild) {
                var i = a.COMPILER_REVISION,
                    j = a.REVISION_CHANGES[i];
                h = "this.compilerInfo = [" + i + ",'" + j + "'];\n" + h
            }
            if (b) return e.push(h), Function.apply(this, e);
            var k = "function " + (this.name || "") + "(" + e.join(",") + ") {\n  " + h + "}";
            return a.log(a.logger.DEBUG, k + "\n\n"), k
        },
        mergeSource: function() {
            for (var a, c = "", d = 0, e = this.source.length; e > d; d++) {
                var f = this.source[d];
                f.appendToBuffer ? a = a ? a + "\n    + " + f.content : f.content : (a && (c += "buffer += " + a + ";\n  ", a = b), c += f + "\n  ")
            }
            return c
        },
        blockValue: function() {
            this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
            var a = ["depth0"];
            this.setupParams(0, a), this.replaceStack(function(b) {
                return a.splice(1, 0, b), "blockHelperMissing.call(" + a.join(", ") + ")"
            })
        },
        ambiguousBlockValue: function() {
            this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
            var a = ["depth0"];
            this.setupParams(0, a);
            var b = this.topStack();
            a.splice(1, 0, b), a[a.length - 1] = "options", this.source.push("if (!" + this.lastHelper + ") { " + b + " = blockHelperMissing.call(" + a.join(", ") + "); }")
        },
        appendContent: function(a) {
            this.source.push(this.appendToBuffer(this.quotedString(a)))
        },
        append: function() {
            this.flushInline();
            var a = this.popStack();
            this.source.push("if(" + a + " || " + a + " === 0) { " + this.appendToBuffer(a) + " }"), this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
        },
        appendEscaped: function() {
            this.context.aliases.escapeExpression = "this.escapeExpression", this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
        },
        getContext: function(a) {
            this.lastContext !== a && (this.lastContext = a)
        },
        lookupOnContext: function(a) {
            this.push(this.nameLookup("depth" + this.lastContext, a, "context"))
        },
        pushContext: function() {
            this.pushStackLiteral("depth" + this.lastContext)
        },
        resolvePossibleLambda: function() {
            this.context.aliases.functionType = '"function"', this.replaceStack(function(a) {
                return "typeof " + a + " === functionType ? " + a + ".apply(depth0) : " + a
            })
        },
        lookup: function(a) {
            this.replaceStack(function(b) {
                return b + " == null || " + b + " === false ? " + b + " : " + this.nameLookup(b, a, "context")
            })
        },
        lookupData: function() {
            this.push("data")
        },
        pushStringParam: function(a, b) {
            this.pushStackLiteral("depth" + this.lastContext), this.pushString(b), "string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a)
        },
        emptyHash: function() {
            this.pushStackLiteral("{}"), this.options.stringParams && (this.register("hashTypes", "{}"), this.register("hashContexts", "{}"))
        },
        pushHash: function() {
            this.hash = {
                values: [],
                types: [],
                contexts: []
            }
        },
        popHash: function() {
            var a = this.hash;
            this.hash = b, this.options.stringParams && (this.register("hashContexts", "{" + a.contexts.join(",") + "}"), this.register("hashTypes", "{" + a.types.join(",") + "}")), this.push("{\n    " + a.values.join(",\n    ") + "\n  }")
        },
        pushString: function(a) {
            this.pushStackLiteral(this.quotedString(a))
        },
        push: function(a) {
            return this.inlineStack.push(a), a
        },
        pushLiteral: function(a) {
            this.pushStackLiteral(a)
        },
        pushProgram: function(a) {
            null != a ? this.pushStackLiteral(this.programExpression(a)) : this.pushStackLiteral(null)
        },
        invokeHelper: function(a, b) {
            this.context.aliases.helperMissing = "helpers.helperMissing";
            var c = this.lastHelper = this.setupHelper(a, b, !0),
                d = this.nameLookup("depth" + this.lastContext, b, "context");
            this.push(c.name + " || " + d), this.replaceStack(function(a) {
                return a + " ? " + a + ".call(" + c.callParams + ") : helperMissing.call(" + c.helperMissingParams + ")"
            })
        },
        invokeKnownHelper: function(a, b) {
            var c = this.setupHelper(a, b);
            this.push(c.name + ".call(" + c.callParams + ")")
        },
        invokeAmbiguous: function(a, b) {
            this.context.aliases.functionType = '"function"', this.pushStackLiteral("{}");
            var c = this.setupHelper(0, a, b),
                d = this.lastHelper = this.nameLookup("helpers", a, "helper"),
                e = this.nameLookup("depth" + this.lastContext, a, "context"),
                f = this.nextStack();
            this.source.push("if (" + f + " = " + d + ") { " + f + " = " + f + ".call(" + c.callParams + "); }"), this.source.push("else { " + f + " = " + e + "; " + f + " = typeof " + f + " === functionType ? " + f + ".apply(depth0) : " + f + "; }")
        },
        invokePartial: function(a) {
            var b = [this.nameLookup("partials", a, "partial"), "'" + a + "'", this.popStack(), "helpers", "partials"];
            this.options.data && b.push("data"), this.context.aliases.self = "this", this.push("self.invokePartial(" + b.join(", ") + ")")
        },
        assignToHash: function(a) {
            var b, c, d = this.popStack();
            this.options.stringParams && (c = this.popStack(), b = this.popStack());
            var e = this.hash;
            b && e.contexts.push("'" + a + "': " + b), c && e.types.push("'" + a + "': " + c), e.values.push("'" + a + "': (" + d + ")")
        },
        compiler: m,
        compileChildren: function(a, b) {
            for (var c, d, e = a.children, f = 0, g = e.length; g > f; f++) {
                c = e[f], d = new this.compiler;
                var h = this.matchExistingProgram(c);
                null == h ? (this.context.programs.push(""), h = this.context.programs.length, c.index = h, c.name = "program" + h, this.context.programs[h] = d.compile(c, b, this.context), this.context.environments[h] = c) : (c.index = h, c.name = "program" + h)
            }
        },
        matchExistingProgram: function(a) {
            for (var b = 0, c = this.context.environments.length; c > b; b++) {
                var d = this.context.environments[b];
                if (d && d.equals(a)) return b
            }
        },
        programExpression: function(a) {
            if (this.context.aliases.self = "this", null == a) return "self.noop";
            for (var b, c = this.environment.children[a], d = c.depths.list, e = [c.index, c.name, "data"], f = 0, g = d.length; g > f; f++) b = d[f], 1 === b ? e.push("depth0") : e.push("depth" + (b - 1));
            return (0 === d.length ? "self.program(" : "self.programWithDepth(") + e.join(", ") + ")"
        },
        register: function(a, b) {
            this.useRegister(a), this.source.push(a + " = " + b + ";")
        },
        useRegister: function(a) {
            this.registers[a] || (this.registers[a] = !0, this.registers.list.push(a))
        },
        pushStackLiteral: function(a) {
            return this.push(new n(a))
        },
        pushStack: function(a) {
            this.flushInline();
            var b = this.incrStack();
            return a && this.source.push(b + " = " + a + ";"), this.compileStack.push(b), b
        },
        replaceStack: function(a) {
            var b, c = "",
                d = this.isInline();
            if (d) {
                var e = this.popStack(!0);
                if (e instanceof n) b = e.value;
                else {
                    var f = this.stackSlot ? this.topStackName() : this.incrStack();
                    c = "(" + this.push(f) + " = " + e + "),", b = this.topStack()
                }
            } else b = this.topStack();
            var g = a.call(this, b);
            return d ? ((this.inlineStack.length || this.compileStack.length) && this.popStack(), this.push("(" + c + g + ")")) : (/^stack/.test(b) || (b = this.nextStack()), this.source.push(b + " = (" + c + g + ");")), b
        },
        nextStack: function() {
            return this.pushStack()
        },
        incrStack: function() {
            return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
        },
        topStackName: function() {
            return "stack" + this.stackSlot
        },
        flushInline: function() {
            var a = this.inlineStack;
            if (a.length) {
                this.inlineStack = [];
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    d instanceof n ? this.compileStack.push(d) : this.pushStack(d)
                }
            }
        },
        isInline: function() {
            return this.inlineStack.length
        },
        popStack: function(a) {
            var b = this.isInline(),
                c = (b ? this.inlineStack : this.compileStack).pop();
            return !a && c instanceof n ? c.value : (b || this.stackSlot--, c)
        },
        topStack: function(a) {
            var b = this.isInline() ? this.inlineStack : this.compileStack,
                c = b[b.length - 1];
            return !a && c instanceof n ? c.value : c
        },
        quotedString: function(a) {
            return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
        },
        setupHelper: function(a, b, c) {
            var d = [];
            this.setupParams(a, d, c);
            var e = this.nameLookup("helpers", b, "helper");
            return {
                params: d,
                name: e,
                callParams: ["depth0"].concat(d).join(", "),
                helperMissingParams: c && ["depth0", this.quotedString(b)].concat(d).join(", ")
            }
        },
        setupParams: function(a, b, c) {
            var d, e, f, g = [],
                h = [],
                i = [];
            g.push("hash:" + this.popStack()), e = this.popStack(), f = this.popStack(), (f || e) && (f || (this.context.aliases.self = "this", f = "self.noop"), e || (this.context.aliases.self = "this", e = "self.noop"), g.push("inverse:" + e), g.push("fn:" + f));
            for (var j = 0; a > j; j++) d = this.popStack(), b.push(d), this.options.stringParams && (i.push(this.popStack()), h.push(this.popStack()));
            return this.options.stringParams && (g.push("contexts:[" + h.join(",") + "]"), g.push("types:[" + i.join(",") + "]"), g.push("hashContexts:hashContexts"), g.push("hashTypes:hashTypes")), this.options.data && g.push("data:data"), g = "{" + g.join(",") + "}", c ? (this.register("options", g), b.push("options")) : b.push(g), b.join(", ")
        }
    };
    for (var o = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), p = m.RESERVED_WORDS = {}, q = 0, r = o.length; r > q; q++) p[o[q]] = !0;
    m.isValidJavaScriptVariableName = function(a) {
        return !m.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(a) ? !0 : !1
    }, a.precompile = function(b, c) {
        if (null == b || "string" != typeof b && b.constructor !== a.AST.ProgramNode) throw new a.Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + b);
        c = c || {}, "data" in c || (c.data = !0);
        var d = a.parse(b),
            e = (new l).compile(d, c);
        return (new m).compile(e, c)
    }, a.compile = function(c, d) {
        function e() {
            var e = a.parse(c),
                f = (new l).compile(e, d),
                g = (new m).compile(f, d, b, !0);
            return a.template(g)
        }
        if (null == c || "string" != typeof c && c.constructor !== a.AST.ProgramNode) throw new a.Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + c);
        d = d || {}, "data" in d || (d.data = !0);
        var f;
        return function(a, b) {
            return f || (f = e()), f.call(this, a, b)
        }
    }, a.VM = {
        template: function(b) {
            var c = {
                escapeExpression: a.Utils.escapeExpression,
                invokePartial: a.VM.invokePartial,
                programs: [],
                program: function(b, c, d) {
                    var e = this.programs[b];
                    return d ? e = a.VM.program(b, c, d) : e || (e = this.programs[b] = a.VM.program(b, c)), e
                },
                merge: function(b, c) {
                    var d = b || c;
                    return b && c && (d = {}, a.Utils.extend(d, c), a.Utils.extend(d, b)), d
                },
                programWithDepth: a.VM.programWithDepth,
                noop: a.VM.noop,
                compilerInfo: null
            };
            return function(d, e) {
                e = e || {};
                var f = b.call(c, a, d, e.helpers, e.partials, e.data),
                    g = c.compilerInfo || [],
                    h = g[0] || 1,
                    i = a.COMPILER_REVISION;
                if (h !== i) {
                    if (i > h) {
                        var j = a.REVISION_CHANGES[i],
                            k = a.REVISION_CHANGES[h];
                        throw "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + j + ") or downgrade your runtime to an older version (" + k + ")."
                    }
                    throw "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + g[1] + ")."
                }
                return f
            }
        },
        programWithDepth: function(a, b, c) {
            var d = Array.prototype.slice.call(arguments, 3),
                e = function(a, e) {
                    return e = e || {}, b.apply(this, [a, e.data || c].concat(d))
                };
            return e.program = a, e.depth = d.length, e
        },
        program: function(a, b, c) {
            var d = function(a, d) {
                return d = d || {}, b(a, d.data || c)
            };
            return d.program = a, d.depth = 0, d
        },
        noop: function() {
            return ""
        },
        invokePartial: function(c, d, e, f, g, h) {
            var i = {
                helpers: f,
                partials: g,
                data: h
            };
            if (c === b) throw new a.Exception("The partial " + d + " could not be found");
            if (c instanceof Function) return c(e, i);
            if (a.compile) return g[d] = a.compile(c, {
                data: h !== b
            }), g[d](e, i);
            throw new a.Exception("The partial " + d + " could not be compiled when running in runtime-only mode")
        }
    }, a.template = a.VM.template
}(Handlebars), define("vendor/handlebars-1.0.0", function() {}), // Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://github.com/marionettejs/backbone.wreqr
function(a, b) {
    if ("function" == typeof define && define.amd) define("backbone_wreqr", ["backbone", "underscore"], function(a, c) {
        return b(a, c)
    });
    else if ("undefined" != typeof exports) {
        var c = require("backbone"),
            d = require("underscore");
        module.exports = b(c, d)
    } else b(a.Backbone, a._)
}(this, function(a, b) {
    "use strict";
    var c = a.Wreqr,
        d = a.Wreqr = {};
    return a.Wreqr.VERSION = "1.3.1", a.Wreqr.noConflict = function() {
        return a.Wreqr = c, this
    }, d.Handlers = function(a, b) {
        var c = function(a) {
            this.options = a, this._wreqrHandlers = {}, b.isFunction(this.initialize) && this.initialize(a)
        };
        return c.extend = a.Model.extend, b.extend(c.prototype, a.Events, {
            setHandlers: function(a) {
                b.each(a, function(a, c) {
                    var d = null;
                    b.isObject(a) && !b.isFunction(a) && (d = a.context, a = a.callback), this.setHandler(c, a, d)
                }, this)
            },
            setHandler: function(a, b, c) {
                var d = {
                    callback: b,
                    context: c
                };
                this._wreqrHandlers[a] = d, this.trigger("handler:add", a, b, c)
            },
            hasHandler: function(a) {
                return !!this._wreqrHandlers[a]
            },
            getHandler: function(a) {
                var b = this._wreqrHandlers[a];
                if (b) return function() {
                    var a = Array.prototype.slice.apply(arguments);
                    return b.callback.apply(b.context, a)
                }
            },
            removeHandler: function(a) {
                delete this._wreqrHandlers[a]
            },
            removeAllHandlers: function() {
                this._wreqrHandlers = {}
            }
        }), c
    }(a, b), d.CommandStorage = function() {
        var c = function(a) {
            this.options = a, this._commands = {}, b.isFunction(this.initialize) && this.initialize(a)
        };
        return b.extend(c.prototype, a.Events, {
            getCommands: function(a) {
                var b = this._commands[a];
                return b || (b = {
                    command: a,
                    instances: []
                }, this._commands[a] = b), b
            },
            addCommand: function(a, b) {
                var c = this.getCommands(a);
                c.instances.push(b)
            },
            clearCommands: function(a) {
                var b = this.getCommands(a);
                b.instances = []
            }
        }), c
    }(), d.Commands = function(a) {
        return a.Handlers.extend({
            storageType: a.CommandStorage,
            constructor: function(b) {
                this.options = b || {}, this._initializeStorage(this.options), this.on("handler:add", this._executeCommands, this);
                var c = Array.prototype.slice.call(arguments);
                a.Handlers.prototype.constructor.apply(this, c)
            },
            execute: function(a, b) {
                a = arguments[0], b = Array.prototype.slice.call(arguments, 1), this.hasHandler(a) ? this.getHandler(a).apply(this, b) : this.storage.addCommand(a, b)
            },
            _executeCommands: function(a, c, d) {
                var e = this.storage.getCommands(a);
                b.each(e.instances, function(a) {
                    c.apply(d, a)
                }), this.storage.clearCommands(a)
            },
            _initializeStorage: function(a) {
                var c, d = a.storageType || this.storageType;
                c = b.isFunction(d) ? new d : d, this.storage = c
            }
        })
    }(d), d.RequestResponse = function(a) {
        return a.Handlers.extend({
            request: function() {
                var a = arguments[0],
                    b = Array.prototype.slice.call(arguments, 1);
                return this.hasHandler(a) ? this.getHandler(a).apply(this, b) : void 0
            }
        })
    }(d), d.EventAggregator = function(a, b) {
        var c = function() {};
        return c.extend = a.Model.extend, b.extend(c.prototype, a.Events), c
    }(a, b), d.Channel = function() {
        var c = function(b) {
            this.vent = new a.Wreqr.EventAggregator, this.reqres = new a.Wreqr.RequestResponse, this.commands = new a.Wreqr.Commands, this.channelName = b
        };
        return b.extend(c.prototype, {
            reset: function() {
                return this.vent.off(), this.vent.stopListening(), this.reqres.removeAllHandlers(), this.commands.removeAllHandlers(), this
            },
            connectEvents: function(a, b) {
                return this._connect("vent", a, b), this
            },
            connectCommands: function(a, b) {
                return this._connect("commands", a, b), this
            },
            connectRequests: function(a, b) {
                return this._connect("reqres", a, b), this
            },
            _connect: function(a, c, d) {
                if (c) {
                    d = d || this;
                    var e = "vent" === a ? "on" : "setHandler";
                    b.each(c, function(c, f) {
                        this[a][e](f, b.bind(c, d))
                    }, this)
                }
            }
        }), c
    }(d), d.radio = function(a) {
        var c = function() {
            this._channels = {}, this.vent = {}, this.commands = {}, this.reqres = {}, this._proxyMethods()
        };
        b.extend(c.prototype, {
            channel: function(a) {
                if (!a) throw new Error("Channel must receive a name");
                return this._getChannel(a)
            },
            _getChannel: function(b) {
                var c = this._channels[b];
                return c || (c = new a.Channel(b), this._channels[b] = c), c
            },
            _proxyMethods: function() {
                b.each(["vent", "commands", "reqres"], function(a) {
                    b.each(d[a], function(b) {
                        this[a][b] = e(this, a, b)
                    }, this)
                }, this)
            }
        });
        var d = {
            vent: ["on", "off", "trigger", "once", "stopListening", "listenTo", "listenToOnce"],
            commands: ["execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"],
            reqres: ["request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"]
        }, e = function(a, b, c) {
                return function(d) {
                    var e = a._getChannel(d)[b],
                        f = Array.prototype.slice.call(arguments, 1);
                    return e[c].apply(e, f)
                }
            };
        return new c
    }(d), a.Wreqr
}), // Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://github.com/marionettejs/backbone.babysitter
function(a, b) {
    if ("function" == typeof define && define.amd) define("backbone_babysitter", ["backbone", "underscore"], function(a, c) {
        return b(a, c)
    });
    else if ("undefined" != typeof exports) {
        var c = require("backbone"),
            d = require("underscore");
        module.exports = b(c, d)
    } else b(a.Backbone, a._)
}(this, function(a, b) {
    "use strict";
    var c = a.ChildViewContainer;
    return a.ChildViewContainer = function(a, b) {
        var c = function(a) {
            this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), b.each(a, this.add, this)
        };
        b.extend(c.prototype, {
            add: function(a, b) {
                var c = a.cid;
                return this._views[c] = a, a.model && (this._indexByModel[a.model.cid] = c), b && (this._indexByCustom[b] = c), this._updateLength(), this
            },
            findByModel: function(a) {
                return this.findByModelCid(a.cid)
            },
            findByModelCid: function(a) {
                var b = this._indexByModel[a];
                return this.findByCid(b)
            },
            findByCustom: function(a) {
                var b = this._indexByCustom[a];
                return this.findByCid(b)
            },
            findByIndex: function(a) {
                return b.values(this._views)[a]
            },
            findByCid: function(a) {
                return this._views[a]
            },
            remove: function(a) {
                var c = a.cid;
                return a.model && delete this._indexByModel[a.model.cid], b.any(this._indexByCustom, function(a, b) {
                    return a === c ? (delete this._indexByCustom[b], !0) : void 0
                }, this), delete this._views[c], this._updateLength(), this
            },
            call: function(a) {
                this.apply(a, b.tail(arguments))
            },
            apply: function(a, c) {
                b.each(this._views, function(d) {
                    b.isFunction(d[a]) && d[a].apply(d, c || [])
                })
            },
            _updateLength: function() {
                this.length = b.size(this._views)
            }
        });
        var d = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
        return b.each(d, function(a) {
            c.prototype[a] = function() {
                var c = b.values(this._views),
                    d = [c].concat(b.toArray(arguments));
                return b[a].apply(b, d)
            }
        }), c
    }(a, b), a.ChildViewContainer.VERSION = "0.1.4", a.ChildViewContainer.noConflict = function() {
        return a.ChildViewContainer = c, this
    }, a.ChildViewContainer
}); // Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://marionettejs.com
/*!
 * Includes BabySitter
 * https://github.com/marionettejs/backbone.babysitter/
 *
 * Includes Wreqr
 * https://github.com/marionettejs/backbone.wreqr/
 */
var Marionette = function(a, b, c) {
    "use strict";

    function d(a, b) {
        var c = new Error(a);
        throw c.name = b || "Error", c
    } // Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
    // Distributed under MIT license
    //
    // http://github.com/marionettejs/backbone.babysitter
    ! function(a, b) {
        var c = a.ChildViewContainer;
        return a.ChildViewContainer = function(a, b) {
            var c = function(a) {
                this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), b.each(a, this.add, this)
            };
            b.extend(c.prototype, {
                add: function(a, b) {
                    var c = a.cid;
                    return this._views[c] = a, a.model && (this._indexByModel[a.model.cid] = c), b && (this._indexByCustom[b] = c), this._updateLength(), this
                },
                findByModel: function(a) {
                    return this.findByModelCid(a.cid)
                },
                findByModelCid: function(a) {
                    var b = this._indexByModel[a];
                    return this.findByCid(b)
                },
                findByCustom: function(a) {
                    var b = this._indexByCustom[a];
                    return this.findByCid(b)
                },
                findByIndex: function(a) {
                    return b.values(this._views)[a]
                },
                findByCid: function(a) {
                    return this._views[a]
                },
                remove: function(a) {
                    var c = a.cid;
                    return a.model && delete this._indexByModel[a.model.cid], b.any(this._indexByCustom, function(a, b) {
                        return a === c ? (delete this._indexByCustom[b], !0) : void 0
                    }, this), delete this._views[c], this._updateLength(), this
                },
                call: function(a) {
                    this.apply(a, b.tail(arguments))
                },
                apply: function(a, c) {
                    b.each(this._views, function(d) {
                        b.isFunction(d[a]) && d[a].apply(d, c || [])
                    })
                },
                _updateLength: function() {
                    this.length = b.size(this._views)
                }
            });
            var d = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
            return b.each(d, function(a) {
                c.prototype[a] = function() {
                    var c = b.values(this._views),
                        d = [c].concat(b.toArray(arguments));
                    return b[a].apply(b, d)
                }
            }), c
        }(a, b), a.ChildViewContainer.VERSION = "0.1.4", a.ChildViewContainer.noConflict = function() {
            return a.ChildViewContainer = c, this
        }, a.ChildViewContainer
    }(b, c), // Copyright (c)2014 Derick Bailey, Muted Solutions, LLC.
    // Distributed under MIT license
    //
    // http://github.com/marionettejs/backbone.wreqr
    function(a, b) {
        var c = a.Wreqr,
            d = a.Wreqr = {};
        return a.Wreqr.VERSION = "1.3.1", a.Wreqr.noConflict = function() {
            return a.Wreqr = c, this
        }, d.Handlers = function(a, b) {
            var c = function(a) {
                this.options = a, this._wreqrHandlers = {}, b.isFunction(this.initialize) && this.initialize(a)
            };
            return c.extend = a.Model.extend, b.extend(c.prototype, a.Events, {
                setHandlers: function(a) {
                    b.each(a, function(a, c) {
                        var d = null;
                        b.isObject(a) && !b.isFunction(a) && (d = a.context, a = a.callback), this.setHandler(c, a, d)
                    }, this)
                },
                setHandler: function(a, b, c) {
                    var d = {
                        callback: b,
                        context: c
                    };
                    this._wreqrHandlers[a] = d, this.trigger("handler:add", a, b, c)
                },
                hasHandler: function(a) {
                    return !!this._wreqrHandlers[a]
                },
                getHandler: function(a) {
                    var b = this._wreqrHandlers[a];
                    if (b) return function() {
                        var a = Array.prototype.slice.apply(arguments);
                        return b.callback.apply(b.context, a)
                    }
                },
                removeHandler: function(a) {
                    delete this._wreqrHandlers[a]
                },
                removeAllHandlers: function() {
                    this._wreqrHandlers = {}
                }
            }), c
        }(a, b), d.CommandStorage = function() {
            var c = function(a) {
                this.options = a, this._commands = {}, b.isFunction(this.initialize) && this.initialize(a)
            };
            return b.extend(c.prototype, a.Events, {
                getCommands: function(a) {
                    var b = this._commands[a];
                    return b || (b = {
                        command: a,
                        instances: []
                    }, this._commands[a] = b), b
                },
                addCommand: function(a, b) {
                    var c = this.getCommands(a);
                    c.instances.push(b)
                },
                clearCommands: function(a) {
                    var b = this.getCommands(a);
                    b.instances = []
                }
            }), c
        }(), d.Commands = function(a) {
            return a.Handlers.extend({
                storageType: a.CommandStorage,
                constructor: function(b) {
                    this.options = b || {}, this._initializeStorage(this.options), this.on("handler:add", this._executeCommands, this);
                    var c = Array.prototype.slice.call(arguments);
                    a.Handlers.prototype.constructor.apply(this, c)
                },
                execute: function(a, b) {
                    a = arguments[0], b = Array.prototype.slice.call(arguments, 1), this.hasHandler(a) ? this.getHandler(a).apply(this, b) : this.storage.addCommand(a, b)
                },
                _executeCommands: function(a, c, d) {
                    var e = this.storage.getCommands(a);
                    b.each(e.instances, function(a) {
                        c.apply(d, a)
                    }), this.storage.clearCommands(a)
                },
                _initializeStorage: function(a) {
                    var c, d = a.storageType || this.storageType;
                    c = b.isFunction(d) ? new d : d, this.storage = c
                }
            })
        }(d), d.RequestResponse = function(a) {
            return a.Handlers.extend({
                request: function() {
                    var a = arguments[0],
                        b = Array.prototype.slice.call(arguments, 1);
                    return this.hasHandler(a) ? this.getHandler(a).apply(this, b) : void 0
                }
            })
        }(d), d.EventAggregator = function(a, b) {
            var c = function() {};
            return c.extend = a.Model.extend, b.extend(c.prototype, a.Events), c
        }(a, b), d.Channel = function() {
            var c = function(b) {
                this.vent = new a.Wreqr.EventAggregator, this.reqres = new a.Wreqr.RequestResponse, this.commands = new a.Wreqr.Commands, this.channelName = b
            };
            return b.extend(c.prototype, {
                reset: function() {
                    return this.vent.off(), this.vent.stopListening(), this.reqres.removeAllHandlers(), this.commands.removeAllHandlers(), this
                },
                connectEvents: function(a, b) {
                    return this._connect("vent", a, b), this
                },
                connectCommands: function(a, b) {
                    return this._connect("commands", a, b), this
                },
                connectRequests: function(a, b) {
                    return this._connect("reqres", a, b), this
                },
                _connect: function(a, c, d) {
                    if (c) {
                        d = d || this;
                        var e = "vent" === a ? "on" : "setHandler";
                        b.each(c, function(c, f) {
                            this[a][e](f, b.bind(c, d))
                        }, this)
                    }
                }
            }), c
        }(d), d.radio = function(a) {
            var c = function() {
                this._channels = {}, this.vent = {}, this.commands = {}, this.reqres = {}, this._proxyMethods()
            };
            b.extend(c.prototype, {
                channel: function(a) {
                    if (!a) throw new Error("Channel must receive a name");
                    return this._getChannel(a)
                },
                _getChannel: function(b) {
                    var c = this._channels[b];
                    return c || (c = new a.Channel(b), this._channels[b] = c), c
                },
                _proxyMethods: function() {
                    b.each(["vent", "commands", "reqres"], function(a) {
                        b.each(d[a], function(b) {
                            this[a][b] = e(this, a, b)
                        }, this)
                    }, this)
                }
            });
            var d = {
                vent: ["on", "off", "trigger", "once", "stopListening", "listenTo", "listenToOnce"],
                commands: ["execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"],
                reqres: ["request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"]
            }, e = function(a, b, c) {
                    return function(d) {
                        var e = a._getChannel(d)[b],
                            f = Array.prototype.slice.call(arguments, 1);
                        return e[c].apply(e, f)
                    }
                };
            return new c
        }(d), a.Wreqr
    }(b, c);
    var e = {};
    b.Marionette = e, e.$ = b.$;
    var f = Array.prototype.slice;
    return e.extend = b.Model.extend, e.getOption = function(a, b) {
        if (a && b) {
            var c;
            return c = a.options && b in a.options && void 0 !== a.options[b] ? a.options[b] : a[b]
        }
    }, e.normalizeMethods = function(a) {
        var b, d = {};
        return c.each(a, function(a, e) {
            b = a, c.isFunction(b) || (b = this[b]), b && (d[e] = b)
        }, this), d
    }, e.normalizeUIKeys = function(a, b) {
        return "undefined" != typeof a ? (c.each(c.keys(a), function(c) {
            var d = /@ui.[a-zA-Z_$0-9]*/g;
            c.match(d) && (a[c.replace(d, function(a) {
                return b[a.slice(4)]
            })] = a[c], delete a[c])
        }), a) : void 0
    }, e.actAsCollection = function(a, b) {
        var d = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck"];
        c.each(d, function(d) {
            a[d] = function() {
                var a = c.values(c.result(this, b)),
                    e = [a].concat(c.toArray(arguments));
                return c[d].apply(c, e)
            }
        })
    }, e.triggerMethod = function() {
        function a(a, b, c) {
            return c.toUpperCase()
        }
        var b = /(^|:)(\w)/gi,
            d = function(d) {
                var e = "on" + d.replace(b, a),
                    f = this[e];
                return c.isFunction(this.trigger) && this.trigger.apply(this, arguments), c.isFunction(f) ? f.apply(this, c.tail(arguments)) : void 0
            };
        return d
    }(), e.MonitorDOMRefresh = function(a) {
        function b(a) {
            a._isShown = !0, e(a)
        }

        function d(a) {
            a._isRendered = !0, e(a)
        }

        function e(a) {
            a._isShown && a._isRendered && f(a) && c.isFunction(a.triggerMethod) && a.triggerMethod("dom:refresh")
        }

        function f(b) {
            return a.contains(b.el)
        }
        return function(a) {
            a.listenTo(a, "show", function() {
                b(a)
            }), a.listenTo(a, "render", function() {
                d(a)
            })
        }
    }(document.documentElement),
    function(a) {
        function b(a, b, e, f) {
            var g = f.split(/\s+/);
            c.each(g, function(c) {
                var f = a[c];
                f || d("Method '" + c + "' was configured as an event handler, but does not exist."), a.listenTo(b, e, f)
            })
        }

        function e(a, b, c, d) {
            a.listenTo(b, c, d)
        }

        function f(a, b, d, e) {
            var f = e.split(/\s+/);
            c.each(f, function(c) {
                var e = a[c];
                a.stopListening(b, d, e)
            })
        }

        function g(a, b, c, d) {
            a.stopListening(b, c, d)
        }

        function h(a, b, d, e, f) {
            b && d && (c.isFunction(d) && (d = d.call(a)), c.each(d, function(d, g) {
                c.isFunction(d) ? e(a, b, g, d) : f(a, b, g, d)
            }))
        }
        a.bindEntityEvents = function(a, c, d) {
            h(a, c, d, e, b)
        }, a.unbindEntityEvents = function(a, b, c) {
            h(a, b, c, g, f)
        }
    }(e), e.Callbacks = function() {
        this._deferred = e.$.Deferred(), this._callbacks = []
    }, c.extend(e.Callbacks.prototype, {
        add: function(a, b) {
            this._callbacks.push({
                cb: a,
                ctx: b
            }), this._deferred.done(function(c, d) {
                b && (c = b), a.call(c, d)
            })
        },
        run: function(a, b) {
            this._deferred.resolve(b, a)
        },
        reset: function() {
            var a = this._callbacks;
            this._deferred = e.$.Deferred(), this._callbacks = [], c.each(a, function(a) {
                this.add(a.cb, a.ctx)
            }, this)
        }
    }), e.Controller = function(a) {
        this.triggerMethod = e.triggerMethod, this.options = a || {}, c.isFunction(this.initialize) && this.initialize(this.options)
    }, e.Controller.extend = e.extend, c.extend(e.Controller.prototype, b.Events, {
        close: function() {
            this.stopListening();
            var a = Array.prototype.slice.call(arguments);
            this.triggerMethod.apply(this, ["close"].concat(a)), this.off()
        }
    }), e.Region = function(a) {
        if (this.options = a || {}, this.el = e.getOption(this, "el"), this.el || d("An 'el' must be specified for a region.", "NoElError"), this.initialize) {
            var b = Array.prototype.slice.apply(arguments);
            this.initialize.apply(this, b)
        }
    }, c.extend(e.Region, {
        buildRegion: function(a, b) {
            var e = c.isString(a),
                f = c.isString(a.selector),
                g = c.isUndefined(a.regionType),
                h = c.isFunction(a);
            h || e || f || d("Region must be specified as a Region type, a selector string or an object with selector property");
            var i, j;
            e && (i = a), a.selector && (i = a.selector, delete a.selector), h && (j = a), !h && g && (j = b), a.regionType && (j = a.regionType, delete a.regionType), (e || h) && (a = {}), a.el = i;
            var k = new j(a);
            return a.parentEl && (k.getEl = function(b) {
                var d = a.parentEl;
                return c.isFunction(d) && (d = d()), d.find(b)
            }), k
        }
    }), c.extend(e.Region.prototype, b.Events, {
        show: function(a, b) {
            this.ensureEl();
            var d = b || {}, f = a.isClosed || c.isUndefined(a.$el),
                g = a !== this.currentView,
                h = !! d.preventClose,
                i = !h && g;
            return i && this.close(), a.render(), e.triggerMethod.call(this, "before:show", a), c.isFunction(a.triggerMethod) ? a.triggerMethod("before:show") : e.triggerMethod.call(a, "before:show"), (g || f) && this.open(a), this.currentView = a, e.triggerMethod.call(this, "show", a), c.isFunction(a.triggerMethod) ? a.triggerMethod("show") : e.triggerMethod.call(a, "show"), this
        },
        ensureEl: function() {
            this.$el && 0 !== this.$el.length || (this.$el = this.getEl(this.el))
        },
        getEl: function(a) {
            return e.$(a)
        },
        open: function(a) {
            this.$el.empty().append(a.el)
        },
        close: function() {
            var a = this.currentView;
            a && !a.isClosed && (a.close ? a.close() : a.remove && a.remove(), e.triggerMethod.call(this, "close", a), delete this.currentView)
        },
        attachView: function(a) {
            this.currentView = a
        },
        reset: function() {
            this.close(), delete this.$el
        }
    }), e.Region.extend = e.extend, e.RegionManager = function(a) {
        var b = a.Controller.extend({
            constructor: function(b) {
                this._regions = {}, a.Controller.prototype.constructor.call(this, b)
            },
            addRegions: function(a, b) {
                var d = {};
                return c.each(a, function(a, e) {
                    c.isString(a) && (a = {
                        selector: a
                    }), a.selector && (a = c.defaults({}, a, b));
                    var f = this.addRegion(e, a);
                    d[e] = f
                }, this), d
            },
            addRegion: function(b, d) {
                var e, f = c.isObject(d),
                    g = c.isString(d),
                    h = !! d.selector;
                return e = g || f && h ? a.Region.buildRegion(d, a.Region) : c.isFunction(d) ? a.Region.buildRegion(d, a.Region) : d, this._store(b, e), this.triggerMethod("region:add", b, e), e
            },
            get: function(a) {
                return this._regions[a]
            },
            removeRegion: function(a) {
                var b = this._regions[a];
                this._remove(a, b)
            },
            removeRegions: function() {
                c.each(this._regions, function(a, b) {
                    this._remove(b, a)
                }, this)
            },
            closeRegions: function() {
                c.each(this._regions, function(a) {
                    a.close()
                }, this)
            },
            close: function() {
                this.removeRegions(), a.Controller.prototype.close.apply(this, arguments)
            },
            _store: function(a, b) {
                this._regions[a] = b, this._setLength()
            },
            _remove: function(a, b) {
                b.close(), b.stopListening(), delete this._regions[a], this._setLength(), this.triggerMethod("region:remove", a, b)
            },
            _setLength: function() {
                this.length = c.size(this._regions)
            }
        });
        return a.actAsCollection(b.prototype, "_regions"), b
    }(e), e.TemplateCache = function(a) {
        this.templateId = a
    }, c.extend(e.TemplateCache, {
        templateCaches: {},
        get: function(a) {
            var b = this.templateCaches[a];
            return b || (b = new e.TemplateCache(a), this.templateCaches[a] = b), b.load()
        },
        clear: function() {
            var a, b = f.call(arguments),
                c = b.length;
            if (c > 0)
                for (a = 0; c > a; a++) delete this.templateCaches[b[a]];
            else this.templateCaches = {}
        }
    }), c.extend(e.TemplateCache.prototype, {
        load: function() {
            if (this.compiledTemplate) return this.compiledTemplate;
            var a = this.loadTemplate(this.templateId);
            return this.compiledTemplate = this.compileTemplate(a), this.compiledTemplate
        },
        loadTemplate: function(a) {
            var b = e.$(a).html();
            return b && 0 !== b.length || d("Could not find template: '" + a + "'", "NoTemplateError"), b
        },
        compileTemplate: function(a) {
            return c.template(a)
        }
    }), e.Renderer = {
        render: function(a, b) {
            a || d("Cannot render the template since it's false, null or undefined.", "TemplateNotFoundError");
            var c;
            return c = "function" == typeof a ? a : e.TemplateCache.get(a), c(b)
        }
    }, e.View = b.View.extend({
        constructor: function(a) {
            c.bindAll(this, "render"), this.options = c.extend({}, c.result(this, "options"), c.isFunction(a) ? a.call(this) : a), this.events = this.normalizeUIKeys(c.result(this, "events")), c.isObject(this.behaviors) && new e.Behaviors(this), b.View.prototype.constructor.apply(this, arguments), e.MonitorDOMRefresh(this), this.listenTo(this, "show", this.onShowCalled)
        },
        triggerMethod: e.triggerMethod,
        normalizeMethods: e.normalizeMethods,
        getTemplate: function() {
            return e.getOption(this, "template")
        },
        mixinTemplateHelpers: function(a) {
            a = a || {};
            var b = e.getOption(this, "templateHelpers");
            return c.isFunction(b) && (b = b.call(this)), c.extend(a, b)
        },
        normalizeUIKeys: function(a) {
            var b = c.result(this, "ui");
            return e.normalizeUIKeys(a, b)
        },
        configureTriggers: function() {
            if (this.triggers) {
                var a = {}, b = this.normalizeUIKeys(c.result(this, "triggers"));
                return c.each(b, function(b, d) {
                    var e = c.isObject(b),
                        f = e ? b.event : b;
                    a[d] = function(a) {
                        if (a) {
                            var c = a.preventDefault,
                                d = a.stopPropagation,
                                g = e ? b.preventDefault : c,
                                h = e ? b.stopPropagation : d;
                            g && c && c.apply(a), h && d && d.apply(a)
                        }
                        var i = {
                            view: this,
                            model: this.model,
                            collection: this.collection
                        };
                        this.triggerMethod(f, i)
                    }
                }, this), a
            }
        },
        delegateEvents: function(a) {
            this._delegateDOMEvents(a), e.bindEntityEvents(this, this.model, e.getOption(this, "modelEvents")), e.bindEntityEvents(this, this.collection, e.getOption(this, "collectionEvents"))
        },
        _delegateDOMEvents: function(a) {
            a = a || this.events, c.isFunction(a) && (a = a.call(this));
            var d = {}, e = c.result(this, "behaviorEvents") || {}, f = this.configureTriggers();
            c.extend(d, e, a, f), b.View.prototype.delegateEvents.call(this, d)
        },
        undelegateEvents: function() {
            var a = Array.prototype.slice.call(arguments);
            b.View.prototype.undelegateEvents.apply(this, a), e.unbindEntityEvents(this, this.model, e.getOption(this, "modelEvents")), e.unbindEntityEvents(this, this.collection, e.getOption(this, "collectionEvents"))
        },
        onShowCalled: function() {},
        close: function() {
            if (!this.isClosed) {
                var a = Array.prototype.slice.call(arguments),
                    b = this.triggerMethod.apply(this, ["before:close"].concat(a));
                b !== !1 && (this.isClosed = !0, this.triggerMethod.apply(this, ["close"].concat(a)), this.unbindUIElements(), this.remove())
            }
        },
        bindUIElements: function() {
            if (this.ui) {
                this._uiBindings || (this._uiBindings = this.ui);
                var a = c.result(this, "_uiBindings");
                this.ui = {}, c.each(c.keys(a), function(b) {
                    var c = a[b];
                    this.ui[b] = this.$(c)
                }, this)
            }
        },
        unbindUIElements: function() {
            this.ui && this._uiBindings && (c.each(this.ui, function(a, b) {
                delete this.ui[b]
            }, this), this.ui = this._uiBindings, delete this._uiBindings)
        }
    }), e.ItemView = e.View.extend({
        constructor: function() {
            e.View.prototype.constructor.apply(this, arguments)
        },
        serializeData: function() {
            var a = {};
            return this.model ? a = this.model.toJSON() : this.collection && (a = {
                items: this.collection.toJSON()
            }), a
        },
        render: function() {
            this.isClosed = !1, this.triggerMethod("before:render", this), this.triggerMethod("item:before:render", this);
            var a = this.serializeData();
            a = this.mixinTemplateHelpers(a);
            var b = this.getTemplate(),
                c = e.Renderer.render(b, a);
            return this.$el.html(c), this.bindUIElements(), this.triggerMethod("render", this), this.triggerMethod("item:rendered", this), this
        },
        close: function() {
            this.isClosed || (this.triggerMethod("item:before:close"), e.View.prototype.close.apply(this, arguments), this.triggerMethod("item:closed"))
        }
    }), e.CollectionView = e.View.extend({
        itemViewEventPrefix: "itemview",
        constructor: function() {
            this._initChildViewStorage(), e.View.prototype.constructor.apply(this, arguments), this._initialEvents(), this.initRenderBuffer()
        },
        initRenderBuffer: function() {
            this.elBuffer = document.createDocumentFragment(), this._bufferedChildren = []
        },
        startBuffering: function() {
            this.initRenderBuffer(), this.isBuffering = !0
        },
        endBuffering: function() {
            this.isBuffering = !1, this.appendBuffer(this, this.elBuffer), this._triggerShowBufferedChildren(), this.initRenderBuffer()
        },
        _triggerShowBufferedChildren: function() {
            this._isShown && (c.each(this._bufferedChildren, function(a) {
                c.isFunction(a.triggerMethod) ? a.triggerMethod("show") : e.triggerMethod.call(a, "show")
            }), this._bufferedChildren = [])
        },
        _initialEvents: function() {
            this.collection && (this.listenTo(this.collection, "add", this.addChildView), this.listenTo(this.collection, "remove", this.removeItemView), this.listenTo(this.collection, "reset", this.render))
        },
        addChildView: function(a) {
            this.closeEmptyView();
            var b = this.getItemView(a),
                c = this.collection.indexOf(a);
            this.addItemView(a, b, c)
        },
        onShowCalled: function() {
            this.children.each(function(a) {
                c.isFunction(a.triggerMethod) ? a.triggerMethod("show") : e.triggerMethod.call(a, "show")
            })
        },
        triggerBeforeRender: function() {
            this.triggerMethod("before:render", this), this.triggerMethod("collection:before:render", this)
        },
        triggerRendered: function() {
            this.triggerMethod("render", this), this.triggerMethod("collection:rendered", this)
        },
        render: function() {
            return this.isClosed = !1, this.triggerBeforeRender(), this._renderChildren(), this.triggerRendered(), this
        },
        _renderChildren: function() {
            this.startBuffering(), this.closeEmptyView(), this.closeChildren(), this.isEmpty(this.collection) ? this.showEmptyView() : this.showCollection(), this.endBuffering()
        },
        showCollection: function() {
            var a;
            this.collection.each(function(b, c) {
                a = this.getItemView(b), this.addItemView(b, a, c)
            }, this)
        },
        showEmptyView: function() {
            var a = this.getEmptyView();
            if (a && !this._showingEmptyView) {
                this._showingEmptyView = !0;
                var c = new b.Model;
                this.addItemView(c, a, 0)
            }
        },
        closeEmptyView: function() {
            this._showingEmptyView && (this.closeChildren(), delete this._showingEmptyView)
        },
        getEmptyView: function() {
            return e.getOption(this, "emptyView")
        },
        getItemView: function() {
            var a = e.getOption(this, "itemView");
            return a || d("An `itemView` must be specified", "NoItemViewError"), a
        },
        addItemView: function(a, b, d) {
            var f = e.getOption(this, "itemViewOptions");
            c.isFunction(f) && (f = f.call(this, a, d));
            var g = this.buildItemView(a, b, f);
            return this.addChildViewEventForwarding(g), this.triggerMethod("before:item:added", g), this.children.add(g), this.renderItemView(g, d), this._isShown && !this.isBuffering && (c.isFunction(g.triggerMethod) ? g.triggerMethod("show") : e.triggerMethod.call(g, "show")), this.triggerMethod("after:item:added", g), g
        },
        addChildViewEventForwarding: function(a) {
            var b = e.getOption(this, "itemViewEventPrefix");
            this.listenTo(a, "all", function() {
                var d = f.call(arguments),
                    g = d[0],
                    h = this.normalizeMethods(this.getItemEvents());
                d[0] = b + ":" + g, d.splice(1, 0, a), "undefined" != typeof h && c.isFunction(h[g]) && h[g].apply(this, d), e.triggerMethod.apply(this, d)
            }, this)
        },
        getItemEvents: function() {
            return c.isFunction(this.itemEvents) ? this.itemEvents.call(this) : this.itemEvents
        },
        renderItemView: function(a, b) {
            a.render(), this.appendHtml(this, a, b)
        },
        buildItemView: function(a, b, d) {
            var e = c.extend({
                model: a
            }, d);
            return new b(e)
        },
        removeItemView: function(a) {
            var b = this.children.findByModel(a);
            this.removeChildView(b), this.checkEmpty()
        },
        removeChildView: function(a) {
            a && (a.close ? a.close() : a.remove && a.remove(), this.stopListening(a), this.children.remove(a)), this.triggerMethod("item:removed", a)
        },
        isEmpty: function() {
            return !this.collection || 0 === this.collection.length
        },
        checkEmpty: function() {
            this.isEmpty(this.collection) && this.showEmptyView()
        },
        appendBuffer: function(a, b) {
            a.$el.append(b)
        },
        appendHtml: function(a, b) {
            a.isBuffering ? (a.elBuffer.appendChild(b.el), a._bufferedChildren.push(b)) : a.$el.append(b.el)
        },
        _initChildViewStorage: function() {
            this.children = new b.ChildViewContainer
        },
        close: function() {
            this.isClosed || (this.triggerMethod("collection:before:close"), this.closeChildren(), this.triggerMethod("collection:closed"), e.View.prototype.close.apply(this, arguments))
        },
        closeChildren: function() {
            this.children.each(function(a) {
                this.removeChildView(a)
            }, this), this.checkEmpty()
        }
    }), e.CompositeView = e.CollectionView.extend({
        constructor: function() {
            e.CollectionView.prototype.constructor.apply(this, arguments)
        },
        _initialEvents: function() {
            this.once("render", function() {
                this.collection && (this.listenTo(this.collection, "add", this.addChildView), this.listenTo(this.collection, "remove", this.removeItemView), this.listenTo(this.collection, "reset", this._renderChildren))
            })
        },
        getItemView: function() {
            var a = e.getOption(this, "itemView") || this.constructor;
            return a || d("An `itemView` must be specified", "NoItemViewError"), a
        },
        serializeData: function() {
            var a = {};
            return this.model && (a = this.model.toJSON()), a
        },
        render: function() {
            this.isRendered = !0, this.isClosed = !1, this.resetItemViewContainer(), this.triggerBeforeRender();
            var a = this.renderModel();
            return this.$el.html(a), this.bindUIElements(), this.triggerMethod("composite:model:rendered"), this._renderChildren(), this.triggerMethod("composite:rendered"), this.triggerRendered(), this
        },
        _renderChildren: function() {
            this.isRendered && (this.triggerMethod("composite:collection:before:render"), e.CollectionView.prototype._renderChildren.call(this), this.triggerMethod("composite:collection:rendered"))
        },
        renderModel: function() {
            var a = {};
            a = this.serializeData(), a = this.mixinTemplateHelpers(a);
            var b = this.getTemplate();
            return e.Renderer.render(b, a)
        },
        appendBuffer: function(a, b) {
            var c = this.getItemViewContainer(a);
            c.append(b)
        },
        appendHtml: function(a, b) {
            if (a.isBuffering) a.elBuffer.appendChild(b.el), a._bufferedChildren.push(b);
            else {
                var c = this.getItemViewContainer(a);
                c.append(b.el)
            }
        },
        getItemViewContainer: function(a) {
            if ("$itemViewContainer" in a) return a.$itemViewContainer;
            var b, f = e.getOption(a, "itemViewContainer");
            if (f) {
                var g = c.isFunction(f) ? f.call(a) : f;
                b = "@" === g.charAt(0) && a.ui ? a.ui[g.substr(4)] : a.$(g), b.length <= 0 && d("The specified `itemViewContainer` was not found: " + a.itemViewContainer, "ItemViewContainerMissingError")
            } else b = a.$el;
            return a.$itemViewContainer = b, b
        },
        resetItemViewContainer: function() {
            this.$itemViewContainer && delete this.$itemViewContainer
        }
    }), e.Layout = e.ItemView.extend({
        regionType: e.Region,
        constructor: function(a) {
            a = a || {}, this._firstRender = !0, this._initializeRegions(a), e.ItemView.prototype.constructor.call(this, a)
        },
        render: function() {
            return this.isClosed && this._initializeRegions(), this._firstRender ? this._firstRender = !1 : this.isClosed || this._reInitializeRegions(), e.ItemView.prototype.render.apply(this, arguments)
        },
        close: function() {
            this.isClosed || (this.regionManager.close(), e.ItemView.prototype.close.apply(this, arguments))
        },
        addRegion: function(a, b) {
            var c = {};
            return c[a] = b, this._buildRegions(c)[a]
        },
        addRegions: function(a) {
            return this.regions = c.extend({}, this.regions, a), this._buildRegions(a)
        },
        removeRegion: function(a) {
            return delete this.regions[a], this.regionManager.removeRegion(a)
        },
        getRegion: function(a) {
            return this.regionManager.get(a)
        },
        _buildRegions: function(a) {
            var b = this,
                c = {
                    regionType: e.getOption(this, "regionType"),
                    parentEl: function() {
                        return b.$el
                    }
                };
            return this.regionManager.addRegions(a, c)
        },
        _initializeRegions: function(a) {
            var b;
            this._initRegionManager(), b = c.isFunction(this.regions) ? this.regions(a) : this.regions || {}, this.addRegions(b)
        },
        _reInitializeRegions: function() {
            this.regionManager.closeRegions(), this.regionManager.each(function(a) {
                a.reset()
            })
        },
        _initRegionManager: function() {
            this.regionManager = new e.RegionManager, this.listenTo(this.regionManager, "region:add", function(a, b) {
                this[a] = b, this.trigger("region:add", a, b)
            }), this.listenTo(this.regionManager, "region:remove", function(a, b) {
                delete this[a], this.trigger("region:remove", a, b)
            })
        }
    }), e.Behavior = function(a, b) {
        function c(b, c) {
            this.view = c, this.defaults = a.result(this, "defaults") || {}, this.options = a.extend({}, this.defaults, b), this.$ = function() {
                return this.view.$.apply(this.view, arguments)
            }, this.initialize.apply(this, arguments)
        }
        return a.extend(c.prototype, b.Events, {
            initialize: function() {},
            close: function() {
                this.stopListening()
            },
            triggerMethod: e.triggerMethod
        }), c.extend = e.extend, c
    }(c, b), e.Behaviors = function(a, b) {
        function c(a) {
            this.behaviors = c.parseBehaviors(a, b.result(a, "behaviors")), c.wrap(a, this.behaviors, ["bindUIElements", "unbindUIElements", "delegateEvents", "undelegateEvents", "behaviorEvents", "triggerMethod", "setElement", "close"])
        }
        var d = {
            setElement: function(a, c) {
                a.apply(this, b.tail(arguments, 2)), b.each(c, function(a) {
                    a.$el = this.$el
                }, this)
            },
            close: function(a, c) {
                var d = b.tail(arguments, 2);
                a.apply(this, d), b.invoke(c, "close", d)
            },
            bindUIElements: function(a, c) {
                a.apply(this), b.invoke(c, a)
            },
            unbindUIElements: function(a, c) {
                a.apply(this), b.invoke(c, a)
            },
            triggerMethod: function(a, c) {
                var d = b.tail(arguments, 2);
                a.apply(this, d), b.each(c, function(b) {
                    a.apply(b, d)
                })
            },
            delegateEvents: function(c, d) {
                var e = b.tail(arguments, 2);
                c.apply(this, e), b.each(d, function(b) {
                    a.bindEntityEvents(b, this.model, a.getOption(b, "modelEvents")), a.bindEntityEvents(b, this.collection, a.getOption(b, "collectionEvents"))
                }, this)
            },
            undelegateEvents: function(c, d) {
                var e = b.tail(arguments, 2);
                c.apply(this, e), b.each(d, function(b) {
                    a.unbindEntityEvents(b, this.model, a.getOption(b, "modelEvents")), a.unbindEntityEvents(b, this.collection, a.getOption(b, "collectionEvents"))
                }, this)
            },
            behaviorEvents: function(c, d) {
                var e = {}, f = b.result(this, "ui");
                return b.each(d, function(c, d) {
                    var g = {}, h = b.clone(b.result(c, "events")) || {}, i = b.result(c, "ui"),
                        j = b.extend({}, f, i);
                    h = a.normalizeUIKeys(h, j), b.each(b.keys(h), function(a) {
                        var e = new Array(d + 2).join(" "),
                            f = a + e,
                            i = b.isFunction(h[a]) ? h[a] : c[h[a]];
                        g[f] = b.bind(i, c)
                    }), e = b.extend(e, g)
                }), e
            }
        };
        return b.extend(c, {
            behaviorsLookup: function() {
                throw new Error("You must define where your behaviors are stored. See https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.behaviors.md#behaviorslookup")
            },
            getBehaviorClass: function(a, d) {
                return a.behaviorClass ? a.behaviorClass : b.isFunction(c.behaviorsLookup) ? c.behaviorsLookup.apply(this, arguments)[d] : c.behaviorsLookup[d]
            },
            parseBehaviors: function(a, d) {
                return b.map(d, function(b, d) {
                    var e = c.getBehaviorClass(b, d);
                    return new e(b, a)
                })
            },
            wrap: function(a, c, e) {
                b.each(e, function(e) {
                    a[e] = b.partial(d[e], a[e], c)
                })
            }
        }), c
    }(e, c), e.AppRouter = b.Router.extend({
        constructor: function(a) {
            b.Router.prototype.constructor.apply(this, arguments), this.options = a || {};
            var c = e.getOption(this, "appRoutes"),
                d = this._getController();
            this.processAppRoutes(d, c), this.on("route", this._processOnRoute, this)
        },
        appRoute: function(a, b) {
            var c = this._getController();
            this._addAppRoute(c, a, b)
        },
        _processOnRoute: function(a, b) {
            var d = c.invert(this.appRoutes)[a];
            c.isFunction(this.onRoute) && this.onRoute(a, d, b)
        },
        processAppRoutes: function(a, b) {
            if (b) {
                var d = c.keys(b).reverse();
                c.each(d, function(c) {
                    this._addAppRoute(a, c, b[c])
                }, this)
            }
        },
        _getController: function() {
            return e.getOption(this, "controller")
        },
        _addAppRoute: function(a, b, e) {
            var f = a[e];
            f || d("Method '" + e + "' was not found on the controller"), this.route(b, e, c.bind(f, a))
        }
    }), e.Application = function(a) {
        this._initRegionManager(), this._initCallbacks = new e.Callbacks, this.vent = new b.Wreqr.EventAggregator, this.commands = new b.Wreqr.Commands, this.reqres = new b.Wreqr.RequestResponse, this.submodules = {}, c.extend(this, a), this.triggerMethod = e.triggerMethod
    }, c.extend(e.Application.prototype, b.Events, {
        execute: function() {
            this.commands.execute.apply(this.commands, arguments)
        },
        request: function() {
            return this.reqres.request.apply(this.reqres, arguments)
        },
        addInitializer: function(a) {
            this._initCallbacks.add(a)
        },
        start: function(a) {
            this.triggerMethod("initialize:before", a), this._initCallbacks.run(a, this), this.triggerMethod("initialize:after", a), this.triggerMethod("start", a)
        },
        addRegions: function(a) {
            return this._regionManager.addRegions(a)
        },
        closeRegions: function() {
            this._regionManager.closeRegions()
        },
        removeRegion: function(a) {
            this._regionManager.removeRegion(a)
        },
        getRegion: function(a) {
            return this._regionManager.get(a)
        },
        module: function(a, b) {
            var c = e.Module.getClass(b),
                d = f.call(arguments);
            return d.unshift(this), c.create.apply(c, d)
        },
        _initRegionManager: function() {
            this._regionManager = new e.RegionManager, this.listenTo(this._regionManager, "region:add", function(a, b) {
                this[a] = b
            }), this.listenTo(this._regionManager, "region:remove", function(a) {
                delete this[a]
            })
        }
    }), e.Application.extend = e.extend, e.Module = function(a, b, d) {
        this.moduleName = a, this.options = c.extend({}, this.options, d), this.initialize = d.initialize || this.initialize, this.submodules = {}, this._setupInitializersAndFinalizers(), this.app = b, this.startWithParent = !0, this.triggerMethod = e.triggerMethod, c.isFunction(this.initialize) && this.initialize(this.options, a, b)
    }, e.Module.extend = e.extend, c.extend(e.Module.prototype, b.Events, {
        initialize: function() {},
        addInitializer: function(a) {
            this._initializerCallbacks.add(a)
        },
        addFinalizer: function(a) {
            this._finalizerCallbacks.add(a)
        },
        start: function(a) {
            this._isInitialized || (c.each(this.submodules, function(b) {
                b.startWithParent && b.start(a)
            }), this.triggerMethod("before:start", a), this._initializerCallbacks.run(a, this), this._isInitialized = !0, this.triggerMethod("start", a))
        },
        stop: function() {
            this._isInitialized && (this._isInitialized = !1, e.triggerMethod.call(this, "before:stop"), c.each(this.submodules, function(a) {
                a.stop()
            }), this._finalizerCallbacks.run(void 0, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(), e.triggerMethod.call(this, "stop"))
        },
        addDefinition: function(a, b) {
            this._runModuleDefinition(a, b)
        },
        _runModuleDefinition: function(a, d) {
            if (a) {
                var f = c.flatten([this, this.app, b, e, e.$, c, d]);
                a.apply(this, f)
            }
        },
        _setupInitializersAndFinalizers: function() {
            this._initializerCallbacks = new e.Callbacks, this._finalizerCallbacks = new e.Callbacks
        }
    }), c.extend(e.Module, {
        create: function(a, b, d) {
            var e = a,
                g = f.call(arguments);
            g.splice(0, 3), b = b.split(".");
            var h = b.length,
                i = [];
            return i[h - 1] = d, c.each(b, function(b, c) {
                var f = e;
                e = this._getModule(f, b, a, d), this._addModuleDefinition(f, e, i[c], g)
            }, this), e
        },
        _getModule: function(a, b, d, e) {
            var f = c.extend({}, e),
                g = this.getClass(e),
                h = a[b];
            return h || (h = new g(b, d, f), a[b] = h, a.submodules[b] = h), h
        },
        getClass: function(a) {
            var b = e.Module;
            return a ? a.prototype instanceof b ? a : a.moduleClass || b : b
        },
        _addModuleDefinition: function(a, b, c, d) {
            var e = this._getDefine(c),
                f = this._getStartWithParent(c, b);
            e && b.addDefinition(e, d), this._addStartWithParent(a, b, f)
        },
        _getStartWithParent: function(a, b) {
            var d;
            return c.isFunction(a) && a.prototype instanceof e.Module ? (d = b.constructor.prototype.startWithParent, c.isUndefined(d) ? !0 : d) : c.isObject(a) ? (d = a.startWithParent, c.isUndefined(d) ? !0 : d) : !0
        },
        _getDefine: function(a) {
            return !c.isFunction(a) || a.prototype instanceof e.Module ? c.isObject(a) ? a.define : null : a
        },
        _addStartWithParent: function(a, b, c) {
            b.startWithParent = b.startWithParent && c, b.startWithParent && !b.startWithParentIsConfigured && (b.startWithParentIsConfigured = !0, a.addInitializer(function(a) {
                b.startWithParent && b.start(a)
            }))
        }
    }), e
}(this, Backbone, _);
define("marionette", ["backbone_advice", "backbone_wreqr", "backbone_babysitter"], function(a) {
    return function() {
        var b;
        return b || a.Backbone.Marionette
    }
}(this)), // The MIT License
// Copyright (c) 2012 The New York Times, CMS Group, Matthew DeLambo <delambo@gmail.com> 
//
function(a) {
    Backbone.Stickit = {
        _handlers: [],
        addHandler: function(a) {
            a = _.map(_.flatten([a]), function(a) {
                return _.extend({
                    updateModel: !0,
                    updateView: !0,
                    updateMethod: "text"
                }, a)
            }), this._handlers = this._handlers.concat(a)
        }
    }, _.extend(Backbone.View.prototype, {
        _modelBindings: null,
        unstickit: function(a) {
            _.each(this._modelBindings, _.bind(function(b, c) {
                return a && b.model !== a ? !1 : (b.model.off(b.event, b.fn), delete this._modelBindings[c], void 0)
            }, this)), this._modelBindings = _.compact(this._modelBindings), this.$el.off(".stickit" + (a ? "." + a.cid : ""))
        },
        stickit: function(a, b) {
            var d = this,
                m = a || this.model,
                n = ".stickit." + m.cid,
                o = b || this.bindings || {};
            this._modelBindings || (this._modelBindings = []), this.unstickit(m), _.each(_.keys(o), function(a) {
                var b, p, q, r, s = o[a] || {}, t = _.uniqueId();
                ":el" != a ? b = d.$(a) : (b = d.$el, a = ""), b.length && (_.isString(s) && (s = {
                    observe: s
                }), r = i(b, s), q = r.observe, p = _.extend({
                    bindKey: t
                }, r.setOptions || {}), j(d, b, r, m, q), k(d, b, r, m, q), q && (_.each(r.events || [], function(c) {
                    var f = c + n,
                        h = function(a) {
                            var c = r.getVal.call(d, b, a, r);
                            e(d, r.updateModel, c, r) && g(m, q, c, p, d, r)
                        };
                    "" === a ? d.$el.on(f, h) : d.$el.on(f, a, h)
                }), _.each(_.flatten([q]), function(a) {
                    f(m, d, "change:" + a, function(a, c, e) {
                        (null == e || e.bindKey != t) && l(d, b, r, h(a, q, r, d), a)
                    })
                }), l(d, b, r, h(m, q, r, d), m, !0)), c(d, r.initialize, b, m, r))
            }), this.remove = _.wrap(this.remove, function(a) {
                d.unstickit(), a && a.call(d)
            })
        }
    });
    var b = function(a, b) {
        var c = (b || "").split("."),
            d = _.reduce(c, function(a, b) {
                return a[b]
            }, a);
        return null == d ? a : d
    }, c = function(a, b) {
            return b ? (_.isString(b) ? a[b] : b).apply(a, _.toArray(arguments).slice(2)) : void 0
        }, d = function(a) {
            return a.find("option").not(function() {
                return !this.selected
            })
        }, e = function(a, b) {
            return _.isBoolean(b) ? b : _.isFunction(b) || _.isString(b) ? c.apply(this, _.toArray(arguments)) : !1
        }, f = function(a, b, c, d) {
            a.on(c, d, b), b._modelBindings.push({
                model: a,
                event: c,
                fn: d
            })
        }, g = function(a, b, d, e, f, g) {
            g.onSet && (d = c(f, g.onSet, d, g)), a.set(b, d, e)
        }, h = function(a, b, d, e) {
            var f, g = function(b) {
                    var c = d.escape ? a.escape(b) : a.get(b);
                    return _.isUndefined(c) ? "" : c
                };
            return f = _.isArray(b) ? _.map(b, g) : g(b), d.onGet ? c(e, d.onGet, f, d) : f
        }, i = function(a, b) {
            var c = [{
                updateModel: !1,
                updateView: !0,
                updateMethod: "text",
                update: function(a, b, c, d) {
                    a[d.updateMethod](b)
                },
                getVal: function(a, b, c) {
                    return a[c.updateMethod]()
                }
            }];
            _.each(Backbone.Stickit._handlers, function(b) {
                a.is(b.selector) && c.push(b)
            }), c.push(b);
            var d = _.extend.apply(_, c);
            return delete d.selector, d
        }, j = function(a, b, c, d, e) {
            var g = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"];
            _.each(c.attributes || [], function(c) {
                var i = "",
                    j = c.observe || (c.observe = e),
                    k = function() {
                        var e = _.indexOf(g, c.name, !0) > -1 ? "prop" : "attr",
                            f = h(d, j, c, a);
                        "class" == c.name ? (b.removeClass(i).addClass(f), i = f) : b[e](c.name, f)
                    };
                _.each(_.flatten([j]), function(b) {
                    f(d, a, "change:" + b, k)
                }), k()
            })
        }, k = function(a, b, d, e, g) {
            if (null != d.visible) {
                var i = function() {
                    var f = d.visible,
                        i = d.visibleFn,
                        j = h(e, g, d, a),
                        k = !! j;
                    (_.isFunction(f) || _.isString(f)) && (k = c(a, f, j, d)), i ? c(a, i, b, k, d) : k ? b.show() : b.hide()
                };
                _.each(_.flatten([g]), function(b) {
                    f(e, a, "change:" + b, i)
                }), i()
            }
        }, l = function(a, b, d, f, g, h) {
            e(a, d.updateView, f, d) && (d.update.call(a, b, f, g, d), h || c(a, d.afterUpdate, b, f, d))
        };
    Backbone.Stickit.addHandler([{
        selector: '[contenteditable="true"]',
        updateMethod: "html",
        events: ["keyup", "change", "paste", "cut"]
    }, {
        selector: "input",
        events: ["keyup", "change", "paste", "cut"],
        update: function(a, b) {
            a.val(b)
        },
        getVal: function(a) {
            var b = a.val();
            return a.is('[type="number"]') ? null == b ? b : Number(b) : b
        }
    }, {
        selector: "textarea",
        events: ["keyup", "change", "paste", "cut"],
        update: function(a, b) {
            a.val(b)
        },
        getVal: function(a) {
            return a.val()
        }
    }, {
        selector: 'input[type="radio"]',
        events: ["change"],
        update: function(a, b) {
            a.filter('[value="' + b + '"]').prop("checked", !0)
        },
        getVal: function(a) {
            return a.filter(":checked").val()
        }
    }, {
        selector: 'input[type="checkbox"]',
        events: ["change"],
        update: function(b, c) {
            b.length > 1 ? (c || (c = []), _.each(b, function(b) {
                _.indexOf(c, a(b).val()) > -1 ? a(b).prop("checked", !0) : a(b).prop("checked", !1)
            })) : _.isBoolean(c) ? b.prop("checked", c) : b.prop("checked", c == b.val())
        },
        getVal: function(b) {
            var c;
            if (b.length > 1) c = _.reduce(b, function(b, c) {
                return a(c).prop("checked") && b.push(a(c).val()), b
            }, []);
            else {
                c = b.prop("checked");
                var d = b.val();
                "on" != d && null != d && (c = c ? b.val() : null)
            }
            return c
        }
    }, {
        selector: "select",
        events: ["change"],
        update: function(d, e, f, g) {
            var h, i = g.selectOptions,
                j = i && i.collection || void 0,
                k = d.prop("multiple");
            if (!i) {
                i = {};
                var l = function(a) {
                    return a.find("option").map(function() {
                        return {
                            value: this.value,
                            label: this.text
                        }
                    }).get()
                };
                d.find("optgroup").length ? (j = {
                    opt_labels: []
                }, _.each(d.find("optgroup"), function(b) {
                    var c = a(b).attr("label");
                    j.opt_labels.push(c), j[c] = l(a(b))
                })) : j = l(d)
            }
            i.valuePath = i.valuePath || "value", i.labelPath = i.labelPath || "label";
            var m = function(c, d, e) {
                i.defaultOption && (c = _.clone(c), c.unshift("__default__")), _.each(c, function(c) {
                    var f = a("<option/>"),
                        g = c,
                        h = function(a, b) {
                            f.text(a), g = b, f.data("stickit_bind_val", g), _.isArray(g) || _.isObject(g) || f.val(g)
                        };
                    "__default__" === c ? h(i.defaultOption.label, i.defaultOption.value) : h(b(c, i.labelPath), b(c, i.valuePath)), !k && null != g && null != e && g == e || _.isObject(e) && _.isEqual(g, e) ? f.prop("selected", !0) : k && _.isArray(e) && _.each(e, function(a) {
                        _.isObject(a) && (a = b(a, i.valuePath)), (a == g || _.isObject(a) && _.isEqual(g, a)) && f.prop("selected", !0)
                    }), d.append(f)
                })
            };
            d.html("");
            var n = function(a, c) {
                var d = window;
                return 0 === c.indexOf("this.") && (d = a), c = c.replace(/^[a-z]*\.(.+)$/, "$1"), b(d, c)
            };
            h = _.isString(j) ? n(this, j) : _.isFunction(j) ? c(this, j, d, g) : j, h instanceof Backbone.Collection && (h = h.toJSON()), _.isArray(h) ? m(h, d, e) : _.each(h.opt_labels, function(b) {
                var c = a("<optgroup/>").attr("label", b);
                m(h[b], c, e), d.append(c)
            })
        },
        getVal: function(b) {
            var c;
            return c = b.prop("multiple") ? a(d(b).map(function() {
                return a(this).data("stickit_bind_val")
            })).get() : d(b).data("stickit_bind_val")
        }
    }])
}(window.jQuery || window.Zepto), define("backbone_stickit", function() {}), // Copyright (c) 2011-2013 Thomas Pedersen
// Distributed under MIT License
//
// Documentation and full license available at:
// http://thedersen.com/projects/backbone-validation
Backbone.Validation = function(a) {
    "use strict";
    var b = {
        forceUpdate: !1,
        selector: "name",
        labelFormatter: "sentenceCase",
        valid: Function.prototype,
        invalid: Function.prototype
    }, c = {
            formatLabel: function(a, c) {
                return i[b.labelFormatter](a, c)
            },
            format: function() {
                var a = Array.prototype.slice.call(arguments),
                    b = a.shift();
                return b.replace(/\{(\d+)\}/g, function(b, c) {
                    return "undefined" != typeof a[c] ? a[c] : b
                })
            }
        }, d = function(b, c, e) {
            return c = c || {}, e = e || "", a.each(b, function(a, f) {
                b.hasOwnProperty(f) && (!a || "object" != typeof a || a instanceof Date || a instanceof RegExp || a instanceof Backbone.Model || a instanceof Backbone.Collection ? c[e + f] = a : d(a, c, e + f + "."))
            }), c
        }, e = function() {
            var e = function(b) {
                return a.reduce(a.keys(b.validation || {}), function(a, b) {
                    return a[b] = void 0, a
                }, {})
            }, g = function(b, c) {
                    var d = b.validation ? b.validation[c] || {} : {};
                    return (a.isFunction(d) || a.isString(d)) && (d = {
                        fn: d
                    }), a.isArray(d) || (d = [d]), a.reduce(d, function(b, c) {
                        return a.each(a.without(a.keys(c), "msg"), function(a) {
                            b.push({
                                fn: j[a],
                                val: c[a],
                                msg: c.msg
                            })
                        }), b
                    }, [])
                }, h = function(b, d, e, f) {
                    return a.reduce(g(b, d), function(g, h) {
                        var i = a.extend({}, c, j),
                            k = h.fn.call(i, e, d, h.val, b, f);
                        return k === !1 || g === !1 ? !1 : k && !g ? h.msg || k : g
                    }, "")
                }, i = function(b, c) {
                    var e, f = {}, g = !0,
                        i = a.clone(c),
                        j = d(c);
                    return a.each(j, function(a, c) {
                        e = h(b, c, a, i), e && (f[c] = e, g = !1)
                    }), {
                        invalidAttrs: f,
                        isValid: g
                    }
                }, k = function(b, c) {
                    return {
                        preValidate: function(b, c) {
                            return h(this, b, c, a.extend({}, this.attributes))
                        },
                        isValid: function(b) {
                            var c = d(this.attributes);
                            return a.isString(b) ? !h(this, b, c[b], a.extend({}, this.attributes)) : a.isArray(b) ? a.reduce(b, function(b, d) {
                                return b && !h(this, d, c[d], a.extend({}, this.attributes))
                            }, !0, this) : (b === !0 && this.validate(), this.validation ? this._isValid : !0)
                        },
                        validate: function(f, g) {
                            var h = this,
                                j = !f,
                                k = a.extend({}, c, g),
                                l = e(h),
                                m = a.extend({}, l, h.attributes, f),
                                n = d(f || m),
                                o = i(h, m);
                            return h._isValid = o.isValid, a.each(l, function(a, c) {
                                var d = o.invalidAttrs.hasOwnProperty(c);
                                d || k.valid(b, c, k.selector)
                            }), a.each(l, function(a, c) {
                                var d = o.invalidAttrs.hasOwnProperty(c),
                                    e = n.hasOwnProperty(c);
                                d && (e || j) && k.invalid(b, c, o.invalidAttrs[c], k.selector)
                            }), a.defer(function() {
                                h.trigger("validated", h._isValid, h, o.invalidAttrs), h.trigger("validated:" + (h._isValid ? "valid" : "invalid"), h, o.invalidAttrs)
                            }), !k.forceUpdate && a.intersection(a.keys(o.invalidAttrs), a.keys(n)).length > 0 ? o.invalidAttrs : void 0
                        }
                    }
                }, l = function(b, c, d) {
                    a.extend(c, k(b, d))
                }, m = function(a) {
                    delete a.validate, delete a.preValidate, delete a.isValid
                }, n = function(a) {
                    l(this.view, a, this.options)
                }, o = function(a) {
                    m(a)
                };
            return {
                version: "0.8.0",
                configure: function(c) {
                    a.extend(b, c)
                },
                bind: function(c, d) {
                    var e = c.model,
                        g = c.collection;
                    if (d = a.extend({}, b, f, d), "undefined" == typeof e && "undefined" == typeof g) throw "Before you execute the binding your view must have a model or a collection.\nSee http://thedersen.com/projects/backbone-validation/#using-form-model-validation for more information.";
                    e ? l(c, e, d) : g && (g.each(function(a) {
                        l(c, a, d)
                    }), g.bind("add", n, {
                        view: c,
                        options: d
                    }), g.bind("remove", o))
                },
                unbind: function(a) {
                    var b = a.model,
                        c = a.collection;
                    b && m(a.model), c && (c.each(function(a) {
                        m(a)
                    }), c.unbind("add", n), c.unbind("remove", o))
                },
                mixin: k(null, b)
            }
        }(),
        f = e.callbacks = {
            valid: function(a, b, c) {
                a.$("[" + c + '~="' + b + '"]').removeClass("invalid").removeAttr("data-error")
            },
            invalid: function(a, b, c, d) {
                a.$("[" + d + '~="' + b + '"]').addClass("invalid").attr("data-error", c)
            }
        }, g = e.patterns = {
            digits: /^\d+$/,
            number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,
            email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
            url: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
        }, h = e.messages = {
            required: "{0} is required",
            acceptance: "{0} must be accepted",
            min: "{0} must be greater than or equal to {1}",
            max: "{0} must be less than or equal to {1}",
            range: "{0} must be between {1} and {2}",
            length: "{0} must be {1} characters",
            minLength: "{0} must be at least {1} characters",
            maxLength: "{0} must be at most {1} characters",
            rangeLength: "{0} must be between {1} and {2} characters",
            oneOf: "{0} must be one of: {1}",
            equalTo: "{0} must be the same as {1}",
            pattern: "{0} must be a valid {1}"
        }, i = e.labelFormatters = {
            none: function(a) {
                return a
            },
            sentenceCase: function(a) {
                return a.replace(/(?:^\w|[A-Z]|\b\w)/g, function(a, b) {
                    return 0 === b ? a.toUpperCase() : " " + a.toLowerCase()
                }).replace("_", " ")
            },
            label: function(a, b) {
                return b.labels && b.labels[a] || i.sentenceCase(a, b)
            }
        }, j = e.validators = function() {
            var b = String.prototype.trim ? function(a) {
                    return null === a ? "" : String.prototype.trim.call(a)
                } : function(a) {
                    var b = /^\s+/,
                        c = /\s+$/;
                    return null === a ? "" : a.toString().replace(b, "").replace(c, "")
                }, c = function(b) {
                    return a.isNumber(b) || a.isString(b) && b.match(g.number)
                }, d = function(c) {
                    return !(a.isNull(c) || a.isUndefined(c) || a.isString(c) && "" === b(c))
                };
            return {
                fn: function(b, c, d, e, f) {
                    return a.isString(d) && (d = e[d]), d.call(e, b, c, f)
                },
                required: function(b, c, e, f, g) {
                    var i = a.isFunction(e) ? e.call(f, b, c, g) : e;
                    return i || d(b) ? i && !d(b) ? this.format(h.required, this.formatLabel(c, f)) : void 0 : !1
                },
                acceptance: function(b, c, d, e) {
                    return "true" === b || a.isBoolean(b) && b !== !1 ? void 0 : this.format(h.acceptance, this.formatLabel(c, e))
                },
                min: function(a, b, d, e) {
                    return !c(a) || d > a ? this.format(h.min, this.formatLabel(b, e), d) : void 0
                },
                max: function(a, b, d, e) {
                    return !c(a) || a > d ? this.format(h.max, this.formatLabel(b, e), d) : void 0
                },
                range: function(a, b, d, e) {
                    return !c(a) || a < d[0] || a > d[1] ? this.format(h.range, this.formatLabel(b, e), d[0], d[1]) : void 0
                },
                length: function(a, c, e, f) {
                    return d(a) && b(a).length === e ? void 0 : this.format(h.length, this.formatLabel(c, f), e)
                },
                minLength: function(a, c, e, f) {
                    return !d(a) || b(a).length < e ? this.format(h.minLength, this.formatLabel(c, f), e) : void 0
                },
                maxLength: function(a, c, e, f) {
                    return !d(a) || b(a).length > e ? this.format(h.maxLength, this.formatLabel(c, f), e) : void 0
                },
                rangeLength: function(a, c, e, f) {
                    return !d(a) || b(a).length < e[0] || b(a).length > e[1] ? this.format(h.rangeLength, this.formatLabel(c, f), e[0], e[1]) : void 0
                },
                oneOf: function(b, c, d, e) {
                    return a.include(d, b) ? void 0 : this.format(h.oneOf, this.formatLabel(c, e), d.join(", "))
                },
                equalTo: function(a, b, c, d, e) {
                    return a !== e[c] ? this.format(h.equalTo, this.formatLabel(b, d), this.formatLabel(c, d)) : void 0
                },
                pattern: function(a, b, c, e) {
                    return d(a) && a.toString().match(g[c] || c) ? void 0 : this.format(h.pattern, this.formatLabel(b, e), c)
                }
            }
        }();
    return e
}(_), define("backbone_validation", function(a) {
    return function() {
        var b, c;
        return c = function() {
            EB.Backbone.Validation = Backbone.Validation
        }, b = c.apply(a, arguments), b || a.Backbone.Validation
    }
}(this)),
function(a, b, c, d, e) {
    "use strict";
    c.namespace("Backbone.Mixins");
    var f = function(a, b) {
        "object" == typeof a && "function" != typeof b.View.mixin && (a.addMixin(b.View), a.addMixin(b.Model), a.addMixin(b.Collection))
    };
    f(e.Advice, c.Backbone), f(e.Advice, e), c.Backbone.Mixins.enforceDependencies = function(a) {
        this.around("initialize", function(c, d, e) {
            var f = "undefined" == typeof this.attributes && "undefined" == typeof this.fetch;
            if (f && (e = d), "undefined" == typeof e) throw new Error("Missing options");
            var g = this.requiredOptions || a.dependencies;
            if (!g) throw new Error("Missing list of dependencies");
            b.each(g, function(a) {
                if ("undefined" == typeof e[a]) throw new Error("Missing required dependency: " + a);
                this[a] = e[a]
            }, this), c(e)
        })
    }, c.Backbone.Mixins.rejectWithServerErrors = function(b) {
        this.setDefaults({
            rejectWithServerErrors: function() {
                return a.Deferred().reject({
                    __all__: b.serverErrorMessage || window.gettext("Whoops! Someone must have pulled a plug somewhere... try again.")
                })
            }
        })
    }, c.Backbone.Mixins.rejectIfServerValidationErrors = function() {
        this.setDefaults({
            rejectIfServerValidationErrors: function(b) {
                return b.success ? b : a.Deferred().reject(this.processServerValidationErrors(b))
            },
            processServerValidationErrors: function(a) {
                return a.errors
            }
        }), this.after("initialize", function() {
            b.bindAll(this, "rejectIfServerValidationErrors", "processServerValidationErrors")
        })
    }, c.Backbone.Mixins.withTemplate = function(a) {
        this.after("initialize", function() {
            if (!a.template && !a.templateName && !this.getTemplateName) throw new Error("Missing templateName or getTemplateName function");
            this.template = "function" == typeof a.template ? a.template : d.templates[a.templateName || this.getTemplateName()]
        }), this.around("render", function(a) {
            return this.$el.html(this.template(this.getContextData(), this.getTemplateOptions())), a(), this
        }), this.setDefaults({
            getContextData: function() {
                return this.model ? this.model.toJSON() : {}
            },
            getTemplateOptions: function() {
                return a.templateOptions || {}
            }
        })
    };
    var g = function(a) {
        var c = {
            events: ["blur", "cut", "paste", "change"],
            onSet: "onSet"
        };
        this.after("initialize", function() {
            var d = a && a.bindings || this.bindings;
            if (!d) throw new Error("Bindings missing");
            b.each(b.keys(d), function(a) {
                var e = d[a];
                b.isString(e) && (e = b.extend({
                    observe: e
                }, c), d[a] = e)
            }), this.bindings = d
        }), this.setDefaults({
            onSet: function(a) {
                return a
            }
        })
    };
    c.Backbone.Mixins.withStickit = function(a) {
        this.mixin(g, a), this.after("render", function() {
            this.stickit()
        })
    }, c.Backbone.Mixins.withStickitForMarionette = function(a) {
        this.mixin(g, a), this.before("onRender", function() {
            this.stickit()
        }), this.after("onShow", function() {
            this.stickit()
        })
    }, c.Backbone.Mixins.withInputValidation = function() {
        this.after("initialize", function() {
            if (!this.model) throw new Error("Missing model");
            c.Backbone.Validation.bind(this, {
                forceUpdate: !0
            }), b.bindAll(this, "displayValidationErrors", "handleFormLevelError", "resetValidationErrors", "bindValidationToEvent"), this.errors = {}
        }), this.around("onSet", function(a, b, c) {
            b = a(b, c);
            var d = this.model.preValidate(c.observe, b);
            return !d || !b && this.ignoreEmptyValues() ? this.hideFieldValidationError(c.observe) : this.showFieldValidationError(c.observe, d), b
        }), this.setDefaults({
            ignoreEmptyValues: function() {
                return !0
            },
            handleFormLevelError: function(a) {
                e.Events.trigger("pageNotification", {
                    type: "error",
                    messages: [a]
                })
            },
            getSelectorForAttr: function(a) {
                return b.find(b.keys(this.bindings), function(b) {
                    return this.bindings[b].observe === a ? b : void 0
                }, this)
            },
            get$InputForAttr: function(a) {
                return this.$(this.getSelectorForAttr(a))
            },
            get$ErrorMessageForAttr: function(a) {
                return this.$(".js-error-for-" + a)
            },
            showFieldValidationError: function(a, b) {
                this.get$InputForAttr(a).addClass("has-form-input-error"), this.get$ErrorMessageForAttr(a).removeClass("is-hidden").html(b), this.errors[a] = b
            },
            hideFieldValidationError: function(a) {
                this.get$InputForAttr(a).removeClass("has-form-input-error"), this.get$ErrorMessageForAttr(a).addClass("is-hidden").html(""), this.errors[a] && delete this.errors[a]
            },
            displayValidationErrors: function(a) {
                this.errors = a, b.each(a, function(c, d) {
                    if (a.hasOwnProperty(d)) {
                        if (b.isArray(c) && c.length > 0 && (c = c[0]), "__all__" === d) return this.handleFormLevelError(c), void 0;
                        this.showFieldValidationError(d, c), this.model.once("change:" + d, b.bind(function() {
                            this.hideFieldValidationError(d)
                        }, this))
                    }
                }, this), b.isEmpty(a) || this.postDisplayValidationErrorsHook(a)
            },
            resetValidationErrors: function() {
                b.isEmpty(this.errors) || (b.each(this.errors, function(a, b) {
                    this.errors.hasOwnProperty(b) && this.hideFieldValidationError(b)
                }, this), this.errors = {})
            },
            validateView: function() {
                var a = this.model.validate(void 0, {
                    forceUpdate: !1
                });
                return a ? (this.displayValidationErrors(a), this.$(".form__field-error").not(":empty").length > 0 && this.trigger("validationFail", a), !0) : (this.trigger("validationSuccess"), !1)
            },
            bindValidationToEvent: function(a, b, c) {
                this.listenTo(a, b, function() {
                    this.onSet(a.get(c), {
                        observe: c
                    })
                })
            },
            postDisplayValidationErrorsHook: function() {}
        })
    }, c.Backbone.Mixins.collectionView = function(c) {
        if (!c.containerSelector) throw new Error("Missing container selector");
        if (!c.viewClass) throw new Error("Missing View Class");
        this.setDefaults({
            handleModelAdded: function(a) {
                var c, d;
                d = this.viewParameters || {}, d.model = a, c = new this.viewClass(d), c.$el.data("cid", a.cid), this.modelCIDViewMap[a.cid] = c, this.container.append(c.render().el), 1 === b.size(this.modelCIDViewMap) && this.handleFirstViewAdded(c), this.handleViewAdded(c, a)
            },
            handleModelDeleted: function(a) {
                var b = this.modelCIDViewMap[a.cid];
                delete this.modelCIDViewMap[a.cid], this.collection.length < 1 && this.handleNoViews(), this.handleViewRemoved(b)
            },
            renderView: function(a) {
                var b = this.modelCIDViewMap[a.cid];
                this.container.append(b.render().el)
            },
            handleFirstViewAdded: function() {},
            handleNoViews: function() {},
            handleViewAdded: function() {},
            handleViewRemoved: function() {}
        }), this.after("initialize", function() {
            if (b.bindAll(this, "handleModelAdded", "handleModelDeleted", "renderView", "handleFirstViewAdded", "handleNoViews", "handleViewAdded", "handleViewRemoved"), this.modelCIDViewMap = {}, this.viewClass = c.viewClass, !this.collection || !c.collectionClass) throw new Error("Missing collection");
            this.collection = this.collection || c.collectionClass({}), this.listenTo(this.collection, "add", this.handleModelAdded), this.listenTo(this.collection, "remove", this.handleModelDeleted)
        }), this.after("render", function() {
            this.container = a("<div>"), this.collection.each(this.handleModelAdded), this.$(c.containerSelector).append(this.container), this.trigger("collection:rendered")
        })
    }, c.Backbone.Mixins.sortableCollectionView = function(d) {
        if (!d.handle) throw new Error("Missing handle");
        this.mixin([c.Backbone.Mixins.collectionView], {
            containerSelector: d.containerSelector,
            viewClass: d.viewClass,
            collectionClass: d.collectionClass
        }), this.setDefaults({
            handleViewMoved: function() {
                this.container.children().each(this.setModelIndex), this.collection.sort()
            },
            setModelIndex: function(b, c) {
                var d = a(c).data("cid");
                this.collection.get(d).set("index", b)
            }
        }), this.after("initialize", function() {
            b.bindAll(this, "handleViewMoved", "setModelIndex")
        }), this.after("render", function() {
            this.container.on("sortstop", this.handleViewMoved), this.container.sortable({
                axis: "y",
                containment: "parent",
                handle: d.handle,
                tolerance: "pointer",
                zIndex: 6,
                cursor: "pointer"
            })
        })
    }, c.Backbone.Mixins.withDynamicFormPost = function() {
        this.setDefaults({
            dynamicFormPost: function(b, c) {
                var d, e = a('<form action="' + b + '" method="POST"></form>');
                for (d in c) c.hasOwnProperty(d) && e.append(a('<input type="hidden" name="' + d + '" value="' + c[d] + '"/>'));
                e.appendTo(this.$el).trigger("submit")
            }
        }), this.after("initialize", function() {
            b.bindAll(this, "dynamicFormPost")
        })
    }, c.Backbone.Mixins.disabledInputs = function() {
        this.setDefaults({
            disableInputs: function() {
                this.$("btn").addClass("btn--disabled"), this.$("input").prop("disabled", !0), this.$("textarea").prop("disabled", !0), this.$("select").prop("disabled", !0)
            }
        }), this.after("initialize", function() {
            b.bindAll(this, "disableInputs")
        })
    }, c.Backbone.Mixins.sortableByIndex = function() {
        this.setDefaults({
            comparator: function(a) {
                return a.get("index")
            },
            handleModelAdd: function(a) {
                this.maxIndex += 1, a.set("index", this.maxIndex)
            },
            handleModelRemove: function() {
                this.maxIndex -= 1, this.setIndexes()
            },
            setIndexes: function() {
                this.each(function(a, b) {
                    a.set("index", b)
                })
            }
        }), this.after("initialize", function() {
            b.bindAll(this, "handleModelAdd", "handleModelRemove", "setIndexes"), this.maxIndex = -1, this.on("add", this.handleModelAdd), this.on("remove", this.handleModelRemove)
        }), this.after("reset", function() {
            this.setIndexes(), this.maxIndex = this.length - 1
        })
    }, c.Backbone.Mixins.autocompleteHelpers = function() {
        this.setDefaults({
            _highlightText: function(b, c) {
                var d = new RegExp("(" + a.ui.autocomplete.escapeRegex(c) + ")", "ig");
                return b.replace(d, '<span class="text-body--significant">$1</span>')
            },
            _renderItem: function(b, c) {
                return a("<li></li>").data("item.autocomplete", c).append(a("<a></a>").html(c.label)).appendTo(b)
            },
            _populateAutocomplete: function() {
                a(this).autocomplete("search")
            }
        })
    }, "function" == typeof define && define("eb/backbone/mixins", ["backbone_advice", "backbone_stickit", "backbone_validation"], function(a) {
        return f(a, c.Backbone), f(a, e), c.Backbone.Mixins
    })
}(window.jQuery, window._, window.EB, window.Handlebars, window.Backbone),
function(a) {
    "use strict";
    Handlebars.registerHelper("_", function(b, c) {
        return "undefined" != typeof a.gettext && (b = a.gettext(b)), "undefined" != typeof a.interpolate && (b = "object" == typeof c ? a.interpolate(b, c.hash, !0) : a.interpolate(b, Array.prototype.slice.call(arguments, 1), !1)), b
    })
}(window), define("eb/handlebars/i18n_helper", function() {}),
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
function(a) {
    a(jQuery)
}(function(a) {
    function b(a) {
        return h.raw ? a : encodeURIComponent(a)
    }

    function c(a) {
        return h.raw ? a : decodeURIComponent(a)
    }

    function d(a) {
        return b(h.json ? JSON.stringify(a) : String(a))
    }

    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            a = decodeURIComponent(a.replace(g, " "))
        } catch (b) {
            return
        }
        try {
            return h.json ? JSON.parse(a) : a
        } catch (b) {}
    }

    function f(b, c) {
        var d = h.raw ? b : e(b);
        return a.isFunction(c) ? c(d) : d
    }
    var g = /\+/g,
        h = a.cookie = function(e, g, i) {
            if (void 0 !== g && !a.isFunction(g)) {
                if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                    var j = i.expires,
                        k = i.expires = new Date;
                    k.setDate(k.getDate() + j)
                }
                return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
            }
            for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                var p = m[n].split("="),
                    q = c(p.shift()),
                    r = p.join("=");
                if (e && e === q) {
                    l = f(r, g);
                    break
                }
                e || void 0 === (r = f(r)) || (l[q] = r)
            }
            return l
        };
    h.defaults = {}, a.removeCookie = function(b, c) {
        return void 0 !== a.cookie(b) ? (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })), !0) : !1
    }
}), define("jquery.cookie", function() {}),
function(a, b) {
    b(document).ajaxSend(function(a, c, d) {
        function e(a) {
            var c = null;
            if (document.cookie && "" !== document.cookie)
                for (var d = document.cookie.split(";"), e = 0; e < d.length; e++) {
                    var f = b.trim(d[e]);
                    if (f.substring(0, a.length + 1) === a + "=") {
                        c = decodeURIComponent(f.substring(a.length + 1));
                        break
                    }
                }
            return c
        }

        function f(a) {
            var b = document.location.host,
                c = document.location.protocol,
                d = "//" + b,
                e = c + d;
            return a === e || a.slice(0, e.length + 1) === e + "/" || a === d || a.slice(0, d.length + 1) === d + "/" || !/^(\/\/|http:|https:).*/.test(a)
        }

        function g(a) {
            return /^(GET|HEAD|OPTIONS|TRACE)$/.test(a)
        }!g(d.type) && f(d.url) && c.setRequestHeader("X-CSRFToken", e("csrftoken"))
    })
}(window.EB = window.EB || {}, jQuery), define("eb/csrfcookie", function() {});
