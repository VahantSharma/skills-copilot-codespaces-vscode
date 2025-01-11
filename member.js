function skillsMember(){
return{
restrict: 'E',
templateUrl: 'modules/skills/views/member.html',
controller: 'SkillsMemberaController',
controllerAs: 'vm',
bindToController: true,
scope:{
    member: '='
}
};
}