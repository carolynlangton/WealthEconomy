//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

(function () {
    'use strict';

    var controllerId = 'organizationListController';
    angular.module('main')
        .controller(controllerId, ['organizationService', 'logger', organizationListController]);

    function organizationListController(organizationService, logger) {

        logger = logger.forSource(controllerId);
        var logError = logger.logError;
        var logSuccess = logger.logSuccess;

        var vm = this;
        vm.deleteOrganization = deleteOrganization;
        vm.organizationSet = [];

        initialize();

        function initialize() {
            getOrganizationSet();
        };

        function deleteOrganization(organization) {
            organizationService.deleteOrganization(organization);

            organizationService.saveChanges()
                .then(function () {
                    vm.organizationSet.splice(vm.organizationSet.indexOf(organization), 1);
                    logSuccess("Hooray we saved", null, true);
                })
                .catch(function (error) {
                    logError("Boooo, we failed: " + error.message, null, true);
                    // Todo: more sophisticated recovery. 
                    // Here we just blew it all away and start over
                    // refresh();
                })
        };

        function getOrganizationSet() {
            return organizationService.getOrganizationSet().then(function (data) {
                return vm.organizationSet = data;
            });
        }
    };
})();