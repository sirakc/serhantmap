const markers = [
    {
        id: 1,
        city: 'New York',
        color: 'blue',
        coordinates: [40.73061, -73.935242],
        value: 70,
    },
    {
        id: 2,
        city: 'Singapore',
        color: 'red',
        coordinates: [1.3521, 103.8198],
        value: 70,
    },
    {
        id: 3,
        city: 'San Francisco',
        color: 'orange',
        coordinates: [37.773972, -122.431297],
        value: 70,
    },
    {
        id: 4,
        city: 'Beijing',
        color: 'gold',
        coordinates: [39.9042, 116.4074],
        value: 70,
    },
    {
        id: 5,
        city: 'London',
        color: 'green',
        coordinates: [51.5074, 0.1278],
        value: 70,
    },
    {
        id: 6,
        city: 'Los Angeles',
        color: 'gold',
        coordinates: [29.7604, -95.3698],
        value: 70,
    },
    {
        id: 7,
        city: "",
        color: "",
        coordinates: [-31.35363694, 23.29101563],
        value: 70
    },
    {
        id: 8,
        city: "",
        color: "",
        coordinates: [42.00032515, 12.72216797],
        value: 70
    },
    {
        id: 9,
        city: "",
        color: "",
        coordinates: [35.6828387, 139.7594549],
        value: 70
    },
    {
        id: 10,
        city: "",
        color: "",
        coordinates: [48.8588897, 2.32004103],
        value: 70
    },
    {
        id: 11,
        city: "",
        color: "",
        coordinates: [-20.9110137, -45.2093727],
        value: 70
    },
    {
        id: 12,
        city: "",
        color: "",
        coordinates: [59.97239745, 10.77572919],
        value: 70
    },
    {
        id: 13,
        city: "",
        color: "",
        coordinates: [28.6141793, 77.2022662],
        value: 70
    },
    {
        id: 14,
        city: "",
        color: "",
        coordinates: [55.4792046, 37.3273304],
        value: 70
    },
    {
        id: 15,
        city: "",
        color: "",
        coordinates: [53.550341, 10.000654],
        value: 70
    },
    {
        id: 16,
        city: "",
        color: "",
        coordinates: [55.9533456, -3.1883749],
        value: 70
    },

    {
        id: 17,
        city: "",
        color: "",
        coordinates: [22.5677459, 88.3476023],
        value: 70
    },
    {
        id: 18,
        city: "",
        color: "",
        coordinates: [-12.46044, 130.8410469],
        value: 70
    },
    {
        id: 19,
        city: "",
        color: "",
        coordinates: [19.32055625, -99.15170107],
        value: 70
    },


    {
        id: 20,
        city: 'New York',
        color: 'blue',
        coordinates: [57.1482429, -2.0928095],
        value: 70,
    },
    {
        id: 21,
        city: 'New York',
        color: 'blue',
        coordinates: [-34.9261475, 138.60048999],
        value: 70,
    },
    {
        id: 22,
        city: 'Singapore',
        color: 'red',
        coordinates: [52.3727598, 4.8936041],
        value: 70,
    },
    {
        id: 23,
        city: 'San Francisco',
        color: 'orange',
        coordinates: [39.9207774, 32.854067],
        value: 70,
    },
    {
        id: 24,
        city: 'Beijing',
        color: 'gold',
        coordinates: [-25.2800459, -57.6343814],
        value: 70,
    },
    {
        id: 25,
        city: 'London',
        color: 'green',
        coordinates: [37.9839412, 23.7283052],
        value: 70,
    },
    {
        id: 26,
        city: 'Los Angeles',
        color: 'gold',
        coordinates: [13.97804802, 100.18913269],
        value: 70,
    },
    {
        id: 27,
        city: "",
        color: "",
        coordinates: [41.3828939, 2.1774322],
        value: 70
    },
    {
        id: 28,
        city: "",
        color: "",
        coordinates: [-1.45056, -48.4682453],
        value: 70
    },
    {
        id: 29,
        city: "",
        color: "",
        coordinates: [54.5964411, -5.9302761],
        value: 70
    },
    {
        id: 30,
        city: "",
        color: "",
        coordinates: [44.8178131, 20.4568974],
        value: 70
    },
    {
        id: 31,
        city: "",
        color: "",
        coordinates: [52.5170365, 13.3888599],
        value: 70
    },
    {
        id: 32,
        city: "",
        color: "",
        coordinates: [52.4796992, -1.9026911],
        value: 70
    },
    {
        id: 33,
        city: "",
        color: "",
        coordinates: [4.59808, -74.0760439],
        value: 70
    },
    {
        id: 34,
        city: "",
        color: "",
        coordinates: [18.9387711, 72.8353355],
        value: 70
    },
    {
        id: 35,
        city: "",
        color: "",
        coordinates: [44.79384015, -0.60630859],
        value: 70
    },
    {
        id: 36,
        city: "",
        color: "",
        coordinates: [53.0758196, 8.8071646],
        value: 70
    },

    {
        id: 37,
        city: "",
        color: "",
        coordinates: [-27.4689682, 153.0234991],
        value: 70
    },
    {
        id: 38,
        city: "",
        color: "",
        coordinates: [51.46769696, -2.5756073],
        value: 70
    },
    {
        id: 39,
        city: "",
        color: "",
        coordinates: [50.8465573, 4.351697],
        value: 70
    },
    {
        id: 40,
        city: 'New York',
        color: 'blue',
        coordinates: [44.4361414, 26.1027202],
        value: 70,
    },
    {
        id: 41,
        city: 'Singapore',
        color: 'red',
        coordinates: [47.54130958, 19.08805847],
        value: 70,
    },
    {
        id: 42,
        city: 'San Francisco',
        color: 'orange',
        coordinates: [-34.6075682, -58.4370894],
        value: 70,
    },
    {
        id: 43,
        city: 'Beijing',
        color: 'gold',
        coordinates: [23.1301964, 113.2592945],
        value: 70,
    },
    {
        id: 5,
        city: 'London',
        color: 'green',
        coordinates: [10.506098, -66.9146017],
        value: 70,
    },
    {
        id: 6,
        city: 'Los Angeles',
        color: 'gold',
        coordinates: [29.7604, -95.3698],
        value: 70,
    },
    {
        id: 7,
        city: "",
        color: "",
        coordinates: [4.9371143, -52.3258307],
        value: 70
    },
    {
        id: 8,
        city: "",
        color: "",
        coordinates: [28.5000001, -106.0000001],
        value: 70
    },
    {
        id: 9,
        city: "",
        color: "",
        coordinates: [55.6867243, 12.5700724],
        value: 70
    },
    {
        id: 10,
        city: "",
        color: "",
        coordinates: [48.8588897, 2.32004103],
        value: 70
    },
    {
        id: 11,
        city: "",
        color: "",
        coordinates: [14.693425, -17.447938],
        value: 70
    },
    {
        id: 12,
        city: "",
        color: "",
        coordinates: [52.289597, 104.280586],
        value: 70
    },
    {
        id: 13,
        city: "",
        color: "",
        coordinates: [-6.1753942, 106.827183],
        value: 70
    },
    {
        id: 14,
        city: "",
        color: "",
        coordinates: [17.9712148, -76.7928128],
        value: 70
    },
    {
        id: 15,
        city: "",
        color: "",
        coordinates: [-33.8548157, 151.2164539],
        value: 70
    },
    {
        id: 16,
        city: "",
        color: "",
        coordinates: [19.333333, -96.666667],
        value: 70
    },

    {
        id: 17,
        city: "",
        color: "",
        coordinates: [52.2319581, 21.0067249],
        value: 70
    },
    {
        id: 18,
        city: "",
        color: "",
        coordinates: [52.30952817, 104.25836563],
        value: 70
    },
    {
        id: 19,
        city: "",
        color: "",
        coordinates: [33.1154683, 129.7874339],
        value: 70
    },


];
export default markers;
