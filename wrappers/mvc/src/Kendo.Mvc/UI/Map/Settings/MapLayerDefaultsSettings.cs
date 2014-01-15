namespace Kendo.Mvc.UI
{
    using System;
    using System.Linq;
    using System.Collections.Generic;
    using System.Web.Routing;
    using Kendo.Mvc.Extensions;

    public class MapLayerDefaultsSettings : JsonObject
    {
        public MapLayerDefaultsSettings()
        {
            //>> Initialization
        
            Bing = new MapLayerDefaultsBingSettings();
                
            Shape = new MapLayerDefaultsShapeSettings();
                
            Tile = new MapLayerDefaultsTileSettings();
                
        //<< Initialization

            
        }

        

        //>> Fields
        
        public MapLayerDefaultsShapeSettings Shape
        {
            get;
            private set;
        }
        
        public MapLayerDefaultsTileSettings Tile
        {
            get;
            private set;
        }
        
        public MapLayerDefaultsBingSettings Bing
        {
            get;
            private set;
        }
        
        //<< Fields

        protected override void Serialize(IDictionary<string, object> json)
        {
            //>> Serialization
        
            var shape = Shape.ToJson();
            if (shape.Any())
            {
                json["shape"] = shape;
            }
                
            var tile = Tile.ToJson();
            if (tile.Any())
            {
                json["tile"] = tile;
            }
                
            var bing = Bing.ToJson();
            if (bing.Any())
            {
                json["bing"] = bing;
            }
                
        //<< Serialization
        }
    }
}
