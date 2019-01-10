import {Deck} from '@deck.gl/core';
import {ScatterplotLayer} from '@deck.gl/layers';

const INITIAL_VIEW_STATE = {
  latitude: 37.78,
  longitude: -122.45,
  zoom: 3
};

const deckgl = new Deck({
  canvas: 'my-deck-canvas',
  initialViewState: INITIAL_VIEW_STATE,
  controller: true,
  layers: [
    new ScatterplotLayer({
      data: [
        {position: [-122.45, 37.8], color: [255, 0, 0], radius: 100}
      ]
    })
  ]
});
