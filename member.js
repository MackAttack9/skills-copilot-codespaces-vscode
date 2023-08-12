function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills-member.html',
    scope: {
      member: '=',
      skills: '='
    },
    controller: function($scope) {
      $scope.getSkillName = function(id) {
        var skill = _.find($scope.skills, function(skill) {
          return skill.id === id;
        });

        return skill.name;
      };
    }
  };
}