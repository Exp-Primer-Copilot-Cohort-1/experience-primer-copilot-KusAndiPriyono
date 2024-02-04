function skillsMember() {
    return {
        templateUrl: 'app/members/member.html',
        controller: 'MemberController',
        restrict: 'E',
        scope: {
            member: '='
        },
    }
}