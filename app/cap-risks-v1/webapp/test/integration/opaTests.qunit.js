sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/caprisksv1/test/integration/FirstJourney',
		'ns/caprisksv1/test/integration/pages/RisksList',
		'ns/caprisksv1/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/caprisksv1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);