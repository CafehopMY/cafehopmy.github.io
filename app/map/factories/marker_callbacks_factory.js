angular.module('cafehopApp.factories').factory('MarkerCallbacks', ['MapDefaults', function(MapDefaults) {
    var callbacks = {
        map                 : null,
        allowMouseover      : true,
        currMouseoverId     : -1,
        latLngChangeCallback: null,
        showWindow          : null,

        disableMouseover: function(){
            this.allowMouseover = false;
        },

        enableMouseover: function(){
            this.allowMouseover = true;
        },

        hideWindowMarker: function(){
            this.map.showWindow = false;
        },

        currentMarkerDragStart: function(marker, event, model){
            this.disableMouseover();
            this.hideWindowMarker();
        },

        currentMarkerDragEnd: function(marker, event, model){
            var latlng = marker.getPosition();
            this.map.panTo(latlng);
            
            this.latLngChangeCallback(latlng);

            model.coords = {
                latitude: marker.getPosition().lat(),
                longitude: marker.getPosition().lng(),
            }

            this.enableMouseover();
        },

        onMarkerMouseover: function(marker, event, model){
            if(!this.allowMouseover){
                return;
            }
            if(model && model.isNotUser()){
                marker.setIcon(MapDefaults.icons.active);
                marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
                this.currMouseoverId = model.idKey;
                this.showWindow(model)
            }
        },

        onMarkerMouseout: function(marker, event, model){
            if(!this.allowMouseover){
                return;
            }
            if(model && model.isNotUser()){
                marker.setIcon(model.icon);
            }
        },

        getEvents: function(){
            return {
                dragend: this.currentMarkerDragEnd.bind(callbacks),
                dragstart: this.currentMarkerDragStart.bind(callbacks),
                mouseover: this.onMarkerMouseover.bind(callbacks),
                mouseout: this.onMarkerMouseout.bind(callbacks)
            }
        },

        init: function(o){
            this.map = o.map;
            this.latLngChangeCallback = o.llCallback;
            this.showWindow = o.showWindow;
            return this;
        }
    }
    return callbacks;
}]);