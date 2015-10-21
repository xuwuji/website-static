		$(function () {
    // Instanciate the map
    $('#europe_map').highcharts('Map', {
        chart : {
            borderWidth : 1
        },

        title : {
            text : 'Footprint In Europe'
        },
        subtitle : {
            text : ''
        },

        legend: {
            enabled: false
        },

        series : [{
            name: 'Country',
            mapData: Highcharts.maps['custom/europe'],
            data: [{
                code: 'ES',
                value: 1
            }, {
                code: 'DE',
                value: 1
            }, {
                code: 'DK',
                value: 1
            }, {
                code: 'IT',
                value: 1
            }],
            joinBy: ['iso-a2', 'code'],
            dataLabels: {
                enabled: true,
                color: 'white',
                formatter: function () {
                    if (this.point.value) {
                        return this.point.name;
                    }
                }
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '{point.name}'
            }
        }]
    });
});


        $(function () {

    // Instanciate the map
    $('#asia_map').highcharts('Map', {

        chart : {
            borderWidth : 1
        },

        title : {
            text : 'Footprint In Asia'
        },
        subtitle : {
            text : ''
        },

        legend: {
            enabled: false
        },

        series : [{
            name: 'Country',
            mapData: Highcharts.maps['custom/asia'],
            data: [{
                code: 'CN',
                value: 1
            }, {
                code: 'AE',
                value: 1
            }, {
                code: 'SG',
                value: 1
            }],
            joinBy: ['iso-a2', 'code'],
            dataLabels: {
                enabled: true,
                color: 'white',
                formatter: function () {
                    if (this.point.value) {
                        return this.point.name;
                    }
                }
            },
            tooltip: {
                headerFormat: '',
                pointFormat: '{point.name}'
            }
        }]
    });
});