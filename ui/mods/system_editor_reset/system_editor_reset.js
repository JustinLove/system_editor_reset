(function() {
  model.savedSelectedPlanetIndex = ko.observable(-1).extend({session: 'savedSelectedPlanetIndex'})
  
  if (model.savedSelectedPlanetIndex() != -1) {
    setTimeout(function() {
      model.selectedPlanetIndex(model.savedSelectedPlanetIndex())
      model.savedSelectedPlanetIndex(-1)
      model.transitionInToPlanetEditor()
      model.update_planet()
    }, 2000)
  }

  model.api_game_debug_reloadScene = api.game.debug.reloadScene
  api.game.debug.reloadScene = function() {
    api.game.setUnitSpecTag(''); // Terrain reloading magic ju-ju
    model.savedSelectedPlanetIndex(model.selectedPlanetIndex())
    model.api_game_debug_reloadScene.apply(this, arguments)
  };
})()
