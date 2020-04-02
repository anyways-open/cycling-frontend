import { BrandingBase } from "../brandingBase";
import { ProfileConfig } from "../profileConfig";
import LocalSvg from "./assets/img/*.svg";
import GlobalSvg from "../../assets/img/*.svg";
import logo from "./assets/img/favicon-96.png";
import { IDictionary, Dictionary } from "../../Dictionary";
import { TranslatedString } from "../translatedString";

export class Branding extends BrandingBase {
    constructor() {
        super();

        this.logo = logo;
        this.apiKey = "a-non-operational-key";
        this.title = "LANTIS | Fietsrouteplanner";
        this.mapCenter = [4.3387,50.8435];
        this.mapStyle = 'https://api.maptiler.com/maps/3327a63f-c15d-462a-9f23-ebf73a14254a/style.json?key=jwL83LCYXcsbjHQxJcVH';
        this.mapZoom = 7;
        this.selectedProfile = 'profile1';
        this.profile1 =  {
            backendName: "bicycle.genk", // TODO The lantis network in shortcut is mapped as 'operator=Stad Genk' in order to reuse the Genk-specific profile. This should be fixed one day 
            backend: "https://api.anyways.eu/publish/opa/lantis/antwerpen/1/routing?", // overwrites the default backend endpoint
            reverseLatLon: true, // shortcut still uses lat,lon as format
            frontendName: {"nl": "Lantis-fietsneterk", "en": "Lantis network", "fr": "Équilibrée"},
            frontendSubtitle: {"nl": "Lantis-netwerk (Shortcut)", "en": "Lantis network", "fr": "Reseau Lantis"},
            frontendExplanation: {
                "nl": "Volgt het lantis fietsnetwerk, gebaseerd op de aangepaste shortcut van Lantis",
                "en": "",
                "fr": ""
            },
            frontendLogo: LocalSvg["bird"],

            layers: {
                "cyclenetworks": false,
                "cyclenetwork-tiles": false,
                "cyclenetwork-tiles-high": false,
                "cyclenodes-circles": false,
                "cyclenodes-circles-high": false,
                "cyclenodes-circles-center": false,
                "cyclenodes-labels": false,
                "cyclenodes-labels-high": false
            },
            routecolor: {
                backend: false, // set to true if 'cycle_network_colour'-attribute should be used (thus if cycle networks should be rendered)
                color: "#d9a300" // default colour
            }
        };
        this.profile2 =  {
            backendName: "bicycle.networks",
            frontendName: {"nl":"Knooppunten (OSM)", "en":"Node Network", "fr":""},
            frontendSubtitle: {"nl": "De knooppuntennetwerken", "en": "Follows the node networks", "fr": ""},
            frontendExplanation:
                {
                    "nl": "Volgt de knooppuntennetwerk. Gebaseerd op OpenStreetMap.",
                    "en": "Follows the node networks. Based on current OSM",
                    "fr": ""
                },
            frontendLogo: GlobalSvg["network"],

            layers: {
                "cyclenetworks": false,
                "cyclenetwork-tiles": {
                    "default": {
                        "line-opacity": 1
                    },
                    "route": {
                        "line-opacity": 0.5
                    }
                },
                "cyclenetwork-tiles-high": {
                    "default": {
                        "line-opacity": 1
                    },
                    "route": {
                        "line-opacity": 0.5
                    }
                },
                "cyclenodes-circles": true,
                "cyclenodes-circles-high": true,
                "cyclenodes-circles-center": true,
                "cyclenodes-labels": true,
                "cyclenodes-labels-high": true
            },
            routecolor: {
                backend: false,
                color: "#d9a300"
            }
        };
        this.profile3 = {
            backendName: "bicycle.fastest",
            frontendName: {"nl":"Snelst", "en":"Fastest","fr":""},
            frontendSubtitle:{"nl": "De snelste route (OSM)", "en":"", "fr":""},
            frontendExplanation:
                {
                    "nl": "De snelste route. Gebaseerd op OpenStreetMap",
                    "en": "The fastest route, based on current OSM",
                    "fr": ""
                },
            frontendLogo: GlobalSvg["fast"],
            layers: {
                "cyclenetworks": false,
                "cyclenetwork-tiles": false,
                "cyclenetwork-tiles-high": false,
                "cyclenodes-circles": false,
                "cyclenodes-circles-high": false,
                "cyclenodes-circles-center": false,
                "cyclenodes-labels": false,
                "cyclenodes-labels-high": false
            },
            routecolor: {
                backend: false,
                color: "#d9a300"
            }
        };

        this.languages = ["nl"];
        this.translations = new Dictionary<TranslatedString>();
        this.translations.add("document.title", {
            nl: "LANTIS | Fietsrouteplanner"
        });
        this.translations.add("fromInput.placeholder", {
            nl: "Van"
        });
        this.translations.add("toInput.placeholder", {
            nl: "Naar"
        });
    }
}