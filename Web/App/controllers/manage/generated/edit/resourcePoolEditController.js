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

    var controllerId = 'resourcePoolEditController';
    angular.module('main')
        .controller(controllerId, ['resourcePoolFactory',
            'userFactory',
            'logger',
            '$location',
            '$routeParams',
            resourcePoolEditController]);

    function resourcePoolEditController(resourcePoolFactory,
		userFactory,
		logger,
		$location,
		$routeParams) {
        logger = logger.forSource(controllerId);

        var isNew = $location.path() === '/manage/generated/resourcePool/new';
        var isSaving = false;

        // Controller methods (alphabetically)
        var vm = this;
        vm.userSet = [];
        vm.cancelChanges = cancelChanges;
        vm.isSaveDisabled = isSaveDisabled;
        vm.entityErrors = [];
        vm.resourcePool = null;
        vm.saveChanges = saveChanges;
        vm.hasChanges = hasChanges;

        initialize();

        /*** Implementations ***/

        function cancelChanges() {

            $location.path('/manage/generated/resourcePool');

            //if (resourcePoolFactory.hasChanges()) {
            //    resourcePoolFactory.rejectChanges();
            //    logWarning('Discarded pending change(s)', null, true);
            //}
        }

        function hasChanges() {
            return resourcePoolFactory.hasChanges();
        }

        function initialize() {

            userFactory.getUserSet(false)
                .then(function (data) {
                    vm.userSet = data;
                });

            if (isNew) {
                // TODO For development enviroment, create test entity?
            }
            else {
                resourcePoolFactory.getResourcePool($routeParams.Id)
                    .then(function (data) {
                        vm.resourcePool = data;
                    })
                    .catch(function (error) {
                        // TODO User-friendly message?
                    });
            }
        };

        function isSaveDisabled() {
            return isSaving ||
                (!isNew && !resourcePoolFactory.hasChanges());
        }

        function saveChanges() {

            if (isNew) {
                resourcePoolFactory.createResourcePool(vm.resourcePool);
            }

            isSaving = true;
            resourcePoolFactory.saveChanges()
                .then(function (result) {
                    $location.path('/manage/generated/resourcePool');
                })
                .catch(function (error) {
                    // Conflict (Concurrency exception)
                    if (typeof error.status !== 'undefined' && error.status === '409') {
                        // TODO Try to recover!
                    } else if (typeof error.entityErrors !== 'undefined') {
                        vm.entityErrors = error.entityErrors;
                    }
                })
                .finally(function () {
                    isSaving = false;
                });
        }
    };
})();