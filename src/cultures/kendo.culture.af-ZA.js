(function( window, undefined ) {
    kendo.cultures["af-ZA"] = {
        name: "af-ZA",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "South African Rand",
                abbr: "ZAR",
                pattern: ["-$n","$n"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "R"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"],
                    namesAbbr: ["So.","Ma.","Di.","Wo.","Do.","Vr.","Sa."],
                    namesShort: ["So.","Ma.","Di.","Wo.","Do.","Vr.","Sa."]
                },
                months: {
                    names: ["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"],
                    namesAbbr: ["Jan.","Feb.","Mrt.","Apr.","Mei","Jun.","Jul.","Aug.","Sep.","Okt.","Nov.","Des."]
                },
                AM: ["vm.","vm.","VM."],
                PM: ["nm.","nm.","NM."],
                patterns: {
                    d: "yyyy-MM-dd",
                    D: "dddd, dd MMMM yyyy",
                    F: "dddd, dd MMMM yyyy h:mm:ss tt",
                    g: "yyyy-MM-dd h:mm tt",
                    G: "yyyy-MM-dd h:mm:ss tt",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "h:mm tt",
                    T: "h:mm:ss tt",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM yyyy",
                    Y: "MMMM yyyy"
                },
                "/": "-",
                ":": ":",
                firstDay: 0
            }
        }
    }
})(this);
