import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        sliderDisplay: [
            {id: 0,
             imageLink:require("./assets/images/1.jpg")
            },
             {id: 1,
             imageLink:require("./assets/images/2.png")
            },
             {id: 2,
             imageLink:require("./assets/images/3.jpg")
            },
             {id: 3,
             imageLink:require("./assets/images/4.png")
            },
             {id: 4,
             imageLink:require("./assets/images/5.jpg")
            },
             {id: 5,
             imageLink:require("./assets/images/6.jpg")
            },
             {id: 6,
             imageLink:require("./assets/images/7.jpg")
            }
        ],
        productDisplay: [
            {id : 1,
             imageLink: require("./assets/images/rangy/range.jpg"),
             view1: require('./assets/images/rangy/1.jpg'),
             view2: require('./assets/images/rangy/2.jpg'),
             view3: require('./assets/images/rangy/3.jpg'),
             view4: require('./assets/images/rangy/4.jpg'),
             view5: require('./assets/images/rangy/5.jpg'),
             name: "Range Rover Sport (2019)",
             price: "42,000,000",
             make: "Range Rover (Sport HSE Dynamic)",
             year: "2019",
             fuel: "diesel",
             transmission: "automatic",
             engine: "Ingenium 3.0L 6cylinder",
             designExterior: [
                {id: 1, info: "Premium LED headlights with signature DRL Led Headlights"},
                {id: 2, info: "Power Fold, Heated Door Mirrors"},
                {id: 3, info: "Rear and Front Parking Aid with Rear View Camera"},
                {id: 4, info: 'Headlight power wash'},
                {id: 5, info: 'Roof rack mounting provisions'},
                {id: 6, info: 'Acoustic laminated windscreen'},
                {id: 7, info: 'Left to Right Easy Config Headlights'}
             ],
             interior: [
                {id: 1, info: "Dark Satin Brushed Aluminium trim finisher"},
                {id: 2, info: "60:40 rear seat fold"},
                {id: 3, info: "Ebony/Ebony with Ebony seats - Grained Leather"},
                {id: 4, info: "5 seats"},
                {id: 5, info: "Electric windows with one-touch open/close and anti-trap"},
                {id: 6, info: "Ambient Interior Lighting"},
                {id: 7, info: "Manually adjustable steering column"} 
             ],
             powerSound: [
                {id: 1, info: "Enhanced Sound System"},
                {id: 2, info: "Smartphone Pack"},
                {id: 3, info: "Interactive Driver Display"},
                {id: 4, info: "Navigation Pro"},
                {id: 5, info: "Pro Services and Wi-Fi Hotspot"},
                {id: 6, info: "12V power socket(s)"},
                {id: 7, info: "Remote Premium"}
             ],
             wheelsChasis: [
                {id: 1, info: "Front wheel track (mm) => 1.692"},
                {id: 2, info: "Rear wheel track (mm) => 1.686"},
                {id: 3, info: "Wheelbase (mm) => 2.923"},
                {id: 4, info: "Length (mm) => 4.879"},
                {id: 5, info: "Approach Angle => 26°"},
                {id: 6, info: "Departure Angle => 26.2°"},
                {id: 7, info: "Departure Angle => 26.2°"}
             ],
             performanceFuelEconomy: [
                {id: 1, info: "Maximum speed km/h (mph) - 	209 (130)"},
                {id: 2, info: "Acceleration (secs) 0-100 km/h (0-60mph) => 7,7 (7,2)"},
                {id: 3, info: "Combined NEDC Equivalent (NEDC2) Consumption-l/100km(mpg)=> 6,9 (40,9)‡"},
                {id: 4, info: "Combined NEDC Equivalent (NEDC2) CO₂ Emissions - g/km => 182‡"},
                {id: 5, info: "Tank capacity (litres approx.) => 86"},
                {id: 6, info: "Gross Vehicle Weight (GVW) (kg) => 3.050 (5 Seat) / 3.150 (7 Seat)"}
             ]
            },
    
            {id : 2,
             imageLink: require("./assets/images/hilux/Toyota-Hilux.jpg"),
             view1: require('./assets/images/hilux/1.jpg'),
             view2: require('./assets/images/hilux/2.jpg'),
             view3: require('./assets/images/hilux/3.jpg'),
             view4: require('./assets/images/hilux/4.jpg'),
             view5: require('./assets/images/hilux/5.jpg'),
             name: "Toyota Hilux (2019)",
             price: "19,000,000",
             make: "Toyota (Hilux)",
             year: "2019",
             fuel: "diesel",
             transmission: "automatic",
             engine: "2.4L turbodiesel",
             designExterior: [
                {id: 1, info: "Privacy glass on rear windows"},
                {id: 2, info: "Chrome surround on upper front grille (Special Edition)"},
                {id: 3, info: "Chrome window frame"},
                {id: 4, info: 'Smart Entry & Start System'},
                {id: 5, info: 'Hard tonneau cover'},
                {id: 6, info: 'Side step with foot grip'},
                {id: 7, info: '17" 6 spoke black machined alloy wheel with Bridgestone winter tyres'}
             ],
             interior: [
                {id: 1, info: "Touch 2 with Go Navigation"},
                {id: 2, info: "Leather seats"},
                {id: 3, info: "Footwell illumination"},
                {id: 4, info: "Leather gear shift knob"},
                {id: 5, info: "Push-button start"},
                {id: 6, info: '"4.2" screen for information display'},
                {id: 7, info: "Automatic air conditioning"} 
             ],
             powerSound: [
                {id: 1, info: "Toyota Touch® 2 multimedia system"},
                {id: 2, info: "6 speakers"},
                {id: 3, info: "Some Hilux info"},
                {id: 4, info: "Some Hilux info"},
                {id: 5, info: "Some Hilux info"},
                {id: 6, info: "Some Hilux info"},
                {id: 7, info: "Some Hilux info"}
             ],
             wheelsChasis: [
                {id: 1, info: "Some Hilux info"},
                {id: 2, info: "Some Hilux info"},
                {id: 3, info: "Some Hilux info"},
                {id: 4, info: "Some Hilux info"},
                {id: 5, info: "Some Hilux info"},
                {id: 6, info: "Some Hilux info"},
                {id: 7, info: "Some Hilux info"}
             ],
             performanceFuelEconomy: [
                {id: 1, info: "Combined driving (litres/100 km): 6.9 l/100 km"},
                {id: 2, info: "CO2 combined driving (g/km): 183 g/km"},
                {id: 3, info: "Fuel tank capacity (litres)	80"},
                {id: 4, info: "Maximum speed (km/h)	170"},
                {id: 5, info: "0–100 km/h (secs)	12.8"},
                {id: 6, info: "Recommended fuel grade	48 OR MORE (CETANE)"},
                {id: 7, info: "Maximum torque (Nm/rpm)	400/1600-2000"}
             ]
            },
            {id : 3,
             imageLink: require("./assets/images/cullinan/Cullinan.jpg"),
             view1: require('./assets/images/cullinan/1.jpg'),
             view2: require('./assets/images/cullinan/2.jpg'),
             view3: require('./assets/images/cullinan/3.jpg'),
             view4: require('./assets/images/cullinan/4.jpg'),
             view5: require('./assets/images/cullinan/5.jpg'),
             name: "Rolls Royce Cullinan(2019)",
             price: "145,000,000",
             make: "Rolls Roys (Cullinan)",
             year: "2019",
             fuel: "petrol",
             transmission: "automatic",
             engine: "6.7L twin-turbo V-12",
             designExterior: [
                {id: 1, info: "Some Rolls Royce Cullinan info"},
                {id: 2, info: "Some Rolls Royce Cullinan info"},
                {id: 3, info: "Some Rolls Royce Cullinan info"},
                {id: 4, info: 'Some Rolls Royce Cullinan info'},
                {id: 5, info: 'Some Rolls Royce Cullinan info'},
                {id: 6, info: 'Some Rolls Royce Cullinan info'},
                {id: 7, info: 'Some Rolls Royce Cullinan info'}
             ],
             interior: [
                {id: 1, info: "Some Rolls Royce Cullinan info"},
                {id: 2, info: "Some Rolls Royce Cullinan info"},
                {id: 3, info: "Some Rolls Royce Cullinan info"},
                {id: 4, info: "Some Rolls Royce Cullinan info"},
                {id: 5, info: "Some Rolls Royce Cullinan info"},
                {id: 6, info: "Some Rolls Royce Cullinan info"},
                {id: 7, info: "Some Rolls Royce Cullinan info"} 
             ],
             powerSound: [
                {id: 1, info: "Some Rolls Royce Cullinan info"},
                {id: 2, info: "Some Rolls Royce Cullinan info"},
                {id: 3, info: "Some Rolls Royce Cullinan info"},
                {id: 4, info: "Some Rolls Royce Cullinan info"},
                {id: 5, info: "Some Rolls Royce Cullinan info"},
                {id: 6, info: "Some Rolls Royce Cullinan info"},
                {id: 7, info: "Some Rolls Royce Cullinan info"}
             ],
             wheelsChasis: [
                {id: 1, info: "Some Rolls Royce Cullinan info"},
                {id: 2, info: "Some Rolls Royce Cullinan info"},
                {id: 3, info: "Some Rolls Royce Cullinan info"},
                {id: 4, info: "Some Rolls Royce Cullinan info"},
                {id: 5, info: "Some Rolls Royce Cullinan info"},
                {id: 6, info: "Some Rolls Royce Cullinan info"},
                {id: 7, info: "Some Rolls Royce Cullinan info"}
             ],
             performanceFuelEconomy: [
                {id: 1, info: "CO2 emission: 330-328 g/km"},
                {id: 2, info: "Fuel consumption: 19.5 mpg / 14.5 l/100km"},
                {id: 3, info: "Some Rolls Royce Cullinan info"},
                {id: 4, info: "Some Rolls Royce Cullinan info"},
                {id: 5, info: "Some Rolls Royce Cullinan info"},
                {id: 6, info: "Some Rolls Royce Cullinan info"},
                {id: 7, info: "Some Rolls Royce Cullinan info"}
             ]
            },
            {id : 4,
             imageLink: require("./assets/images/challenger/challenger.jpg"),
             view1: require('./assets/images/challenger/1.jpg'),
             view2: require('./assets/images/challenger/2.jpg'),
             view3: require('./assets/images/challenger/3.jpg'),
             view4: require('./assets/images/challenger/4.jpg'),
             view5: require('./assets/images/challenger/5.jpg'),
             name: "Challenger R/T (2018)",
             price: "19,000,000",
             make: "Dodge (Challenger)",
             year: "2018",
             fuel: "petrol",
             transmission: "6-speed manual",
             engine: "5.7L Hemi V8",
             designExterior: [
                {id: 1, info: "Some Dodge (Challenger) info"},
                {id: 2, info: "Some Dodge (Challenger) info"},
                {id: 3, info: "Some Dodge (Challenger) info"},
                {id: 4, info: 'Some Dodge (Challenger) info'},
                {id: 5, info: 'Some Dodge (Challenger) info'},
                {id: 6, info: 'Some Dodge (Challenger) info'},
                {id: 7, info: 'Some Dodge (Challenger) info'}
             ],
             interior: [
                {id: 1, info: "Some Dodge (Challenger) info"},
                {id: 2, info: "Some Dodge (Challenger) info"},
                {id: 3, info: "Some Dodge (Challenger) info"},
                {id: 4, info: "Some Dodge (Challenger) info"},
                {id: 5, info: "Some Dodge (Challenger) info"},
                {id: 6, info: "Some Dodge (Challenger) info"},
                {id: 7, info: "Some Dodge (Challenger) info"} 
             ],
             powerSound: [
                {id: 1, info: "Some Dodge (Challenger) info"},
                {id: 2, info: "Some Dodge (Challenger) info"},
                {id: 3, info: "Some Dodge (Challenger) info"},
                {id: 4, info: "Some Dodge (Challenger) info"},
                {id: 5, info: "Some Dodge (Challenger) info"},
                {id: 6, info: "Some Dodge (Challenger) info"},
                {id: 7, info: "Some Dodge (Challenger) info"}
             ],
             wheelsChasis: [
                {id: 1, info: "Some Dodge (Challenger) info"},
                {id: 2, info: "Some Dodge (Challenger) info"},
                {id: 3, info: "Some Dodge (Challenger) info"},
                {id: 4, info: "Some Dodge (Challenger) info"},
                {id: 5, info: "Some Dodge (Challenger) info"},
                {id: 6, info: "Some Dodge (Challenger) info"},
                {id: 7, info: "Some Dodge (Challenger) info"}
             ],
             performanceFuelEconomy: [
                {id: 1, info: "Some Dodge (Challenger) info"},
                {id: 2, info: "Some Dodge (Challenger) info"},
                {id: 3, info: "Some Dodge (Challenger) info"},
                {id: 4, info: "Some Dodge (Challenger) info"},
                {id: 5, info: "Some Dodge (Challenger) info"},
                {id: 6, info: "Some Dodge (Challenger) info"},
                {id: 7, info: "Some Dodge (Challenger) info"}
             ]
            
            },
            {id : 5,
             imageLink: require("./assets/images/black range/otherrange.jpg"),
             view1: require('./assets/images/black range/1.jpg'),
             view2: require('./assets/images/black range/2.jpg'),
             view3: require('./assets/images/black range/3.jpg'),
             view4: require('./assets/images/black range/4.jpg'),
             view5: require('./assets/images/black range/5.jpg'),
             name: "Range Rover Sport (2016)",
             price: "22,000,000",
             make: "Range Rover (Sport)",
             year: "2016",
             fuel: "petrol",
             transmission: "automatic",
             engine: "Supercharged 3.0L V6",
             designExterior: [
                {id: 1, info: "Range Rover Sport (2016)"},
                {id: 2, info: "Range Rover Sport (2016)"},
                {id: 3, info: "Range Rover Sport (2016)"},
                {id: 4, info: 'Range Rover Sport (2016)'},
                {id: 5, info: 'Range Rover Sport (2016)'},
                {id: 6, info: 'Range Rover Sport (2016)'},
                {id: 7, info: 'Range Rover Sport (2016)'}
             ],
             interior: [
                {id: 1, info: "Range Rover Sport (2016)"},
                {id: 2, info: "Range Rover Sport (2016)"},
                {id: 3, info: "Range Rover Sport (2016)"},
                {id: 4, info: "Range Rover Sport (2016)"},
                {id: 5, info: "Range Rover Sport (2016)"},
                {id: 6, info: "Range Rover Sport (2016)"},
                {id: 7, info: "Range Rover Sport (2016)"} 
             ],
             powerSound: [
                {id: 1, info: "Range Rover Sport (2016)"},
                {id: 2, info: "Range Rover Sport (2016)"},
                {id: 3, info: "Range Rover Sport (2016)"},
                {id: 4, info: "Range Rover Sport (2016)"},
                {id: 5, info: "Range Rover Sport (2016)"},
                {id: 6, info: "Range Rover Sport (2016)"},
                {id: 7, info: "Range Rover Sport (2016)"}
             ],
             wheelsChasis: [
                {id: 1, info: "Range Rover Sport (2016)"},
                {id: 2, info: "Range Rover Sport (2016)"},
                {id: 3, info: "Range Rover Sport (2016)"},
                {id: 4, info: "Range Rover Sport (2016)"},
                {id: 5, info: "Range Rover Sport (2016)"},
                {id: 6, info: "Range Rover Sport (2016)"},
                {id: 7, info: "Range Rover Sport (2016)"}
             ],
             performanceFuelEconomy: [
                {id: 1, info: "Range Rover Sport (2016)"},
                {id: 2, info: "Range Rover Sport (2016)"},
                {id: 3, info: "Range Rover Sport (2016)"},
                {id: 4, info: "Range Rover Sport (2016)"},
                {id: 5, info: "Range Rover Sport (2016)"},
                {id: 6, info: "Range Rover Sport (2016)"},
                {id: 7, info: "Range Rover Sport (2016)"}
             ]
            },
            {id : 6,
             imageLink: require("./assets/images/black benzo/gle.jpg"),
             view1: require('./assets/images/black benzo/1.jpg'),
             view2: require('./assets/images/black benzo/2.jpg'),
             view3: require('./assets/images/black benzo/3.jpg'),
             view4: require('./assets/images/black benzo/4.jpg'),
             view5: require('./assets/images/black benzo/5.jpg'),
             name: "S63 AMG (2016)",
             price: "34,000,000",
             make: "Mercedes Benz(S63 AMG)",
             year: "2016",
             fuel: "petrol",
             transmission: "automatic",
             engine: "bi-turbo 5.5L V8",
             designExterior: [
                {id: 1, info: "AMG Bodystyling"},
                {id: 2, info: "AMG-specific Radiator Grille"},
                {id: 3, info: "LED Intelligent light System With Swarovski Crystals"},
                {id: 4, info: 'Mercedes Benz(S63 AMG)'},
                {id: 5, info: 'Mercedes Benz(S63 AMG)'},
                {id: 6, info: 'Mercedes Benz(S63 AMG)'},
                {id: 7, info: 'Mercedes Benz(S63 AMG)'}
             ],
             interior: [
                {id: 1, info: "AMG Instrument Cluster"},
                {id: 2, info: "AMG Performance Steering Whee"},
                {id: 3, info: "AMG Sill Panels"},
                {id: 4, info: "AMG Sports Seats"},
                {id: 5, info: "AMG Dynamic select"},
                {id: 6, info: "Amg Performance Exhaust System"},
                {id: 7, info: ""} 
             ],
             powerSound: [
                {id: 1, info: "Mercedes Benz(S63 AMG)"},
                {id: 2, info: "Mercedes Benz(S63 AMG)"},
                {id: 3, info: "Mercedes Benz(S63 AMG)"},
                {id: 4, info: "Mercedes Benz(S63 AMG)"},
                {id: 5, info: "Mercedes Benz(S63 AMG)"},
                {id: 6, info: "Mercedes Benz(S63 AMG)"},
                {id: 7, info: "Mercedes Benz(S63 AMG)"}
             ],
             performanceFuelEconomy: [
                {id: 1, info: "AMG Light-Alloy Wheels"},
                {id: 2, info: "Torque 900 Nm"},
                {id: 3, info: "Acceleration 3.5 s (0-100 km/h)"},
                {id: 4, info: "Maximum Speed 250 km/h"},
                {id: 5, info: "Combined fuel consumption 11.2 l/100 km"},
                {id: 6, info: "Combined CO2 emissions 254 g/km"},
                {id: 7, info: "Power 450 kW (612 HP)"}
             ],
             wheelsChasis: [
                {id: 1, info: "Power 450 kW (612 HP)"},
                {id: 2, info: "Mercedes Benz(S63 AMG)"},
                {id: 3, info: "Mercedes Benz(S63 AMG)"},
                {id: 4, info: "Mercedes Benz(S63 AMG)"},
                {id: 5, info: "Mercedes Benz(S63 AMG)"},
                {id: 6, info: "Mercedes Benz(S63 AMG)"},
                {id: 7, info: "Mercedes Benz(S63 AMG)"}
             ]
            },
            {id : 7,
             imageLink: require("./assets/images/white benzo/benzo.jpg"),
             view1: require('./assets/images/white benzo/1.jpg'),
             view2: require('./assets/images/white benzo/2.jpg'),
             view3: require('./assets/images/white benzo/3.jpg'),
             view4: require('./assets/images/white benzo/4.jpg'),
             view5: require('./assets/images/white benzo/5.jpg'),
             name: "E 400 4MATIC (2018)",
             price: "29,000,000",
             make: "Mercedes Benz (E 400)",
             year: "2018",
             fuel: "petrol",
             transmission: "auto",
             engine: "3.0L V6",
             designExterior: [
                {id: 1, info: "Mercedes Benz (E 400)"},
                {id: 2, info: "Mercedes Benz (E 400)"},
                {id: 3, info: "Mercedes Benz (E 400)"},
                {id: 4, info: 'Mercedes Benz (E 400)'},
                {id: 5, info: 'Mercedes Benz (E 400)'},
                {id: 6, info: 'Mercedes Benz (E 400)'},
                {id: 7, info: 'Mercedes Benz (E 400)'}
             ],
             interior: [
                {id: 1, info: "Mercedes Benz (E 400)"},
                {id: 2, info: "Mercedes Benz (E 400)"},
                {id: 3, info: "Mercedes Benz (E 400)"},
                {id: 4, info: "Mercedes Benz (E 400)"},
                {id: 5, info: "Mercedes Benz (E 400)"},
                {id: 6, info: "Mercedes Benz (E 400)"},
                {id: 7, info: "Mercedes Benz (E 400)"} 
             ],
             powerSound: [
                {id: 1, info: "Mercedes Benz (E 400)"},
                {id: 2, info: "Mercedes Benz (E 400)"},
                {id: 3, info: "Mercedes Benz (E 400)"},
                {id: 4, info: "Mercedes Benz (E 400)"},
                {id: 5, info: "Mercedes Benz (E 400)"},
                {id: 6, info: "Mercedes Benz (E 400)"},
                {id: 7, info: "Mercedes Benz (E 400)"}
             ],
             wheelsChasis: [
                {id: 1, info: "Mercedes Benz (E 400)"},
                {id: 2, info: "Mercedes Benz (E 400)"},
                {id: 3, info: "Mercedes Benz (E 400)"},
                {id: 4, info: "Mercedes Benz (E 400)"},
                {id: 5, info: "Mercedes Benz (E 400)"},
                {id: 6, info: "Mercedes Benz (E 400)"},
                {id: 7, info: "Mercedes Benz (E 400)"}
             ],
             performanceFuelEconomy: [
                {id: 1, info: "Mercedes Benz (E 400)"},
                {id: 2, info: "Mercedes Benz (E 400)"},
                {id: 3, info: "Mercedes Benz (E 400)"},
                {id: 4, info: "Mercedes Benz (E 400)"},
                {id: 5, info: "Mercedes Benz (E 400)"},
                {id: 6, info: "Mercedes Benz (E 400)"},
                {id: 7, info: "Mercedes Benz (E 400)"}
             ]
            },
            {id : 8,
             imageLink: require("./assets/images/audi/audi.jpg"),
             view1: require('./assets/images/audi/1.jpg'),
             view2: require('./assets/images/audi/2.jpg'),
             view3: require('./assets/images/audi/3.jpg'),
             view4: require('./assets/images/audi/4.jpg'),
             view5: require('./assets/images/audi/5.jpg'),
             name: "Audi S8 (2017)",
             price: "30,000,000",
             make: "Audi (S8)",
             year: "2017",
             fuel: "petrol",
             transmission: "automatic",
             engine: "turbocharged 4.0L V8",
             designExterior: [
                {id: 1, info: "Heated mirrors"},
                {id: 2, info: "Front and rear Fog/driving lights"},
                {id: 3, info: "Windshield wipers - rain sensing"},
                {id: 4, info: '1st row regular express open/close sliding and tilting glass Sunroof'},
                {id: 5, info: 'Keyfob (all doors) Remote keyless entry'},
                {id: 6, info: 'Audi S8 (2017)'},
                {id: 7, info: 'Audi S8 (2017)'}
             ],
             interior: [
                {id: 1, info: "Leather Seat trim"},
                {id: 2, info: "Navigation system"},
                {id: 3, info: "Driver and front passenger heated-cushion, heated-seatback Heated front seats"},
                {id: 4, info: "Rear air conditioning, with separate controls"},
                {id: 5, info: "Front air conditioning, dual zone automatic"},
                {id: 6, info: "Audi S8 (2017)"},
                {id: 7, info: "Audi S8 (2017)"} 
             ],
             powerSound: [
                {id: 1, info: "Bang & Olufsen 3D Advanced Sound System"},
                {id: 2, info: "Audi S8 (2017)"},
                {id: 3, info: "Audi S8 (2017)"},
                {id: 4, info: "Audi S8 (2017)"},
                {id: 5, info: "Audi S8 (2017)"},
                {id: 6, info: "Audi S8 (2017)"},
                {id: 7, info: "Audi S8 (2017)"}
             ],
             wheelsChasis: [
                {id: 1, info: "Audi S8 (2017)"},
                {id: 2, info: "Audi S8 (2017)"},
                {id: 3, info: "Audi S8 (2017)"},
                {id: 4, info: "Audi S8 (2017)"},
                {id: 5, info: "Audi S8 (2017)"},
                {id: 6, info: "Audi S8 (2017)"},
                {id: 7, info: "Audi S8 (2017)"}
             ],
             performanceFuelEconomy: [
                {id: 1, info: "605 @ 6,100 rpm Horsepower"},
                {id: 2, info: "517 @ 1,750 rpm Torque"},
                {id: 3, info: "ABS and driveline Traction control"},
                {id: 4, info: "Audi S8 (2017)"},
                {id: 5, info: "Audi S8 (2017)"},
                {id: 6, info: "Audi S8 (2017)"},
                {id: 7, info: "Audi S8 (2017)"}
             ]
            },
            {id : 9,
             imageLink: require("./assets/images/navigator/navi.jpg"),
             view1: require('./assets/images/navigator/1.jpg'),
             view2: require('./assets/images/navigator/2.jpg'),
             view3: require('./assets/images/navigator/3.jpg'),
             view4: require('./assets/images/navigator/4.jpg'),
             view5: require('./assets/images/navigator/5.jpg'),
             name: "Cardillac Escalade (2016)",
             price: "26,000,000",
             make: "Cardillac (Escalade Platinum)",
             year: "2016",
             fuel: "petrol",
             transmission: "8-speed automatic",
             engine: "6.2L V8",
             designExterior: [
                {id: 1, info: "Power assited steps"},
                {id: 2, info: "Cutting-edge Illumination"},
                {id: 3, info: "Invincible rear  wiper"},
                {id: 4, info: 'Concierge lighting'},
                {id: 5, info: 'Hands-free liftgate'},
                {id: 6, info: 'Roof rails'},
                {id: 7, info: 'Chrome Bodyside Moldings'}
             ],
             interior: [
                {id: 1, info: "Premium leather seating surfaces on 1st and 2nd rows"},
                {id: 2, info: "Heated and cooled driver and front-passenger seats"},
                {id: 3, info: "Power sunroof"},
                {id: 4, info: "Automatic Seat Belt Tightening"},
                {id: 5, info: "Adaptive Cruise Contro"},
                {id: 6, info: "Wireless Charging"},
                {id: 7, info: "Entertainment System (fold down 9” diagonal screen)"} 
             ],
             powerSound: [
                {id: 1, info: "Bose® Centerpoint® Surround Sound 16-speaker audio system"},
                {id: 2, info: "Cardillac (Escalade Platinum)"},
                {id: 3, info: "Cardillac (Escalade Platinum)"},
                {id: 4, info: "Cardillac (Escalade Platinum)"},
                {id: 5, info: "Cardillac (Escalade Platinum)"},
                {id: 6, info: "Cardillac (Escalade Platinum)"},
                {id: 7, info: "Cardillac (Escalade Platinum)"}
             ],
             wheelsChasis: [
                {id: 1, info: "22-Inch polishedalloy wheels"},
                {id: 2, info: "Cardillac (Escalade Platinum)"},
                {id: 3, info: "Cardillac (Escalade Platinum)"},
                {id: 4, info: "Cardillac (Escalade Platinum)"},
                {id: 5, info: "Cardillac (Escalade Platinum)"},
                {id: 6, info: "Cardillac (Escalade Platinum)"},
                {id: 7, info: "Cardillac (Escalade Platinum)"}
             ],
             performanceFuelEconomy: [
                {id: 1, info: "6.2L V8 Engine"},
                {id: 2, info: "10-speed automatic transmission"},
                {id: 3, info: "Selectable Magnetic Ride Control Suspension"},
                {id: 4, info: "StabiliTrak"},
                {id: 5, info: "Engine block heater"},
                {id: 6, info: "Enhanced Automatic Emergency Braking"},
                {id: 7, info: "Cardillac (Escalade Platinum)"}
             ]
            }
        ],
        productDetailsDisplay: null,
        show: true,
        noShow: false,
        currentHeader: null,
        toBeUsedByPeculiarInfoPage: null
    },
    mutations:{
        putSomethingInproductDetailsDisplay(state, data){
            state.productDetailsDisplay = data;
        },
        
        changeShow(state){
            let saka = state.show;
            state.show = !saka ;
        },
        changeNoShow(state){
            let manje = state.noShow
            state.noShow = !manje;
        },
        updateCurrentHeader(state, data){
            state.currentHeader = data;
        },
        updateToBeUsedByPeculiarInfoPage(state, data){
           state.toBeUsedByPeculiarInfoPage = data;
        }
    }
})

export default store;
