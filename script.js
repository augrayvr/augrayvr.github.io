(function(){
    var script = {
 "shadow": false,
 "start": "this.playAudioList([this.audio_73DE269F_5BDD_622C_41D0_AB5FF48CAFEF]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist,this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist,this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist,this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist,this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_73FA6E3F_5BC3_E26B_41C1_7C32EA126DDB",
  "this.Container_70AE2E3E_5BC5_E26D_41B4_148A9702E525",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_7E07AD25_5BCC_A61F_41C9_391F5C4D4A41",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 20,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "buttonToggleMute": [
  "this.IconButton_7E078D25_5BCC_A61F_41AA_144E751F30B8",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41"
 ],
 "definitions": [{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -68.19,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_46A8E002_5D20_6D94_41CC_3AF9E9C24F92",
 "idleSequence": "this.sequence_46A89003_5D20_6D95_41D0_E66F319A1D3B",
 "initialSequence": "this.sequence_46A89003_5D20_6D95_41D0_E66F319A1D3B"
},
{
 "thumbnailUrl": "media/photo_4FF5871A_5CE0_33B7_41B0_B0A41E472AC5_t.jpg",
 "label": "KS20050279_09",
 "duration": 5000,
 "id": "photo_4FF5871A_5CE0_33B7_41B0_B0A41E472AC5",
 "width": 750,
 "image": {
  "levels": [
   {
    "url": "media/photo_4FF5871A_5CE0_33B7_41B0_B0A41E472AC5.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 446
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "items": [
  {
   "camera": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1)",
   "media": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2)",
   "media": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 3)",
   "media": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 3, 4)",
   "media": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 4, 5)",
   "media": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 5, 6)",
   "media": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 6, 7)",
   "media": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 7, 8)",
   "media": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 8, 9)",
   "media": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 9, 10)",
   "media": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 10, 11)",
   "media": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 11, 12)",
   "media": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 12, 13)",
   "media": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 13, 14)",
   "media": "this.panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 14, 0)",
   "media": "this.album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_593619E6_5540_DAAA_41CA_78E42B436069_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "audio": {
  "mp3Url": "media/audio_46987423_58C4_A61B_41D1_69EACD5D33FC.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_46987423_58C4_A61B_41D1_69EACD5D33FC.ogg"
 },
 "data": {
  "label": "Drifting at 432 Hz - Unicorn Heads"
 },
 "class": "MediaAudio",
 "id": "audio_46987423_58C4_A61B_41D1_69EACD5D33FC",
 "autoplay": true
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -74.5,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4641BF3E_5D20_73EF_41C8_AB4A4FDC5DC0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_t.jpg",
 "class": "Panorama",
 "label": "013",
 "id": "panorama_593619E6_5540_DAAA_41CA_78E42B436069",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA",
   "backwardYaw": -13.23,
   "class": "AdjacentPanorama",
   "yaw": 21.85,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_423573E3_5943_A214_41BF_C9555453E1E3",
  "this.overlay_4236A130_5944_FE75_41A4_D56C44B086DF",
  "this.overlay_49C9C1A5_5D20_2E9D_41D3_15F579523C11"
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -20.88,
  "pitch": -0.28
 },
 "class": "PanoramaCamera",
 "id": "panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 67.98,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4623CEE6_5D20_729F_41BA_3452DF44B934",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 21.25,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_462D6EC3_5D20_7295_41A0_A96C64A8C2FA",
 "idleSequence": "this.sequence_462D0EC3_5D20_7295_41C0_24058F2AD755",
 "initialSequence": "this.sequence_462D0EC3_5D20_7295_41C0_24058F2AD755"
},
{
 "thumbnailUrl": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_t.jpg",
 "class": "Panorama",
 "label": "001",
 "id": "panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4",
   "backwardYaw": -112.02,
   "class": "AdjacentPanorama",
   "yaw": -158.75,
   "distance": 1
  },
  {
   "panorama": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60",
   "backwardYaw": -95.82,
   "class": "AdjacentPanorama",
   "yaw": -68.34,
   "distance": 1
  },
  {
   "panorama": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9",
   "backwardYaw": 86.61,
   "class": "AdjacentPanorama",
   "yaw": 21.54,
   "distance": 1
  },
  {
   "panorama": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100",
   "backwardYaw": 105.5,
   "class": "AdjacentPanorama",
   "yaw": 111.81,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5B0B7344_5540_4FEE_41B7_EE04F966B8AB",
  "this.overlay_445B1CE1_5540_5AA6_41CC_5FDFA9CC18B8",
  "this.overlay_45371D73_5540_3BA9_41D5_0216F115A280",
  "this.overlay_45F75870_5541_D9A7_41D1_2899BBD4AF24",
  "this.overlay_4565A50E_5540_CB7A_41B2_4ACDB69D03D6",
  "this.overlay_45862141_55C0_4BE6_41D1_29176C2797B7",
  "this.overlay_5A72E87D_5744_AEEF_41C9_E70E6EFA5D67",
  "this.overlay_5AB78857_574D_EE3B_41BB_7D30D7477886",
  "this.overlay_590EB6FC_5745_63ED_41C7_8BCE2988834A"
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "partial": false
},
{
 "class": "PlayList",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "items": [
  {
   "camera": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "media": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "media": "this.panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 0)",
   "media": "this.album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_t.jpg",
 "class": "Panorama",
 "label": "002",
 "id": "panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB",
   "backwardYaw": -158.75,
   "class": "AdjacentPanorama",
   "yaw": -112.02,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4F0F009E_58C3_9E2C_419A_D74F6C2F8D11",
  "this.overlay_4EA4FF08_58C7_6214_41C5_DFDE1F203ACC",
  "this.overlay_71DE4B92_5BC5_6235_41D2_FD75B07E0406",
  "this.overlay_75CCE776_5B44_A2FA_41B1_BBFFE537AB22"
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_t.jpg",
 "class": "Panorama",
 "label": "011",
 "id": "panorama_59272124_5540_4BAE_41D0_22B1D0373A60",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB",
   "backwardYaw": -68.34,
   "class": "AdjacentPanorama",
   "yaw": -95.82,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_439A2E8D_594C_A22F_41BB_0115867034A3",
  "this.overlay_43A5BB37_594D_627B_41D1_CF269E13B0F8",
  "this.overlay_44BC57C4_594C_A21D_41BD_3C0BE4E55D15",
  "this.overlay_442ECC12_5943_A634_41C6_EC7C022733FF",
  "this.overlay_4E49261F_5D20_15AC_41C7_2496B769CDCF",
  "this.overlay_4E53B59C_5D20_16B3_41CF_10BDCDB924B6",
  "this.overlay_4E7177C4_5D20_1293_41C4_84DB614A9BC5"
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "partial": false
},
{
 "closeButtonBorderSize": 0,
 "shadowBlurRadius": 6,
 "id": "window_47DAE391_57C5_A237_41C0_7F8C142F562B",
 "closeButtonPaddingLeft": 0,
 "width": 400,
 "closeButtonBorderRadius": 11,
 "closeButtonPaddingBottom": 0,
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#CC3300"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#666666",
 "titleTextDecoration": "none",
 "closeButtonRollOverBackgroundOpacity": 0,
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 0,
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 12,
 "closeButtonPaddingTop": 0,
 "title": "",
 "gap": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "closeButtonBackgroundColor": [
  "#FFFFFF"
 ],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "titleFontSize": "1.29vmin",
 "headerBorderSize": 0,
 "shadow": true,
 "titlePaddingRight": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "height": 700,
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverIconColor": "#CC0000",
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.image_uid47C94E24_5D20_7593_41BD_899DF9474207_0",
  "this.htmlText_47E4A391_57C5_A237_41A9_4F33E01CDC0A"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#333333"
 ],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "closeButtonPressedIconLineWidth": 2,
 "footerHeight": 5,
 "paddingLeft": 0,
 "footerBackgroundOpacity": 1,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderColor": "#000000",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconLineWidth": 2,
 "shadowVerticalLength": 0,
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "closeButtonRollOverBorderSize": 0,
 "class": "Window",
 "bodyPaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingTop": 5,
 "layout": "vertical",
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [
  0
 ],
 "headerPaddingTop": 10,
 "closeButtonPressedBackgroundOpacity": 0,
 "contentOpaque": false,
 "closeButtonIconLineWidth": 2,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window7324"
 }
},
{
 "thumbnailUrl": "media/photo_4816EB61_5D20_1395_41AB_B88BE20D610C_t.jpg",
 "label": "ocU62fasU",
 "duration": 5000,
 "id": "photo_4816EB61_5D20_1395_41AB_B88BE20D610C",
 "width": 824,
 "image": {
  "levels": [
   {
    "url": "media/photo_4816EB61_5D20_1395_41AB_B88BE20D610C.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 550
},
{
 "thumbnailUrl": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_t.jpg",
 "class": "Panorama",
 "label": "007",
 "id": "panorama_593F7413_5540_496A_413E_6F5B10A03282",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91",
   "backwardYaw": -6.82,
   "class": "AdjacentPanorama",
   "yaw": 177.13,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4DCD37DA_5CE0_32B7_41CF_32087B09890D",
  "this.overlay_401EE15C_58CD_7E2D_41B8_1F3658A4E5D9",
  "this.overlay_4062BA62_58C5_6215_41AF_25588B3AAA4A",
  "this.overlay_533C8B13_5CE0_13B5_41C9_2338B1C025F6",
  "this.overlay_4C212E09_5CE0_3595_41CF_070C68B9EEB5"
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "partial": false
},
{
 "items": [
  "this.albumitem_47C4DE2F_5D20_75ED_41CC_24F6829D156C"
 ],
 "change": "this.showComponentsWhileMouseOver(this.container_47C48E2F_5D20_75ED_41C5_1DD2F052DB21, [this.htmltext_47C56E30_5D20_75F3_41D2_06D5B4511700,this.component_47C58E31_5D20_75F5_41B4_8DE7934BBAA3,this.component_47C5AE31_5D20_75F5_41D2_03FB8FBAF73A], 2000)",
 "class": "PlayList",
 "id": "playList_53004A8F_5CE0_32AD_41B2_E3500D1E47BE"
},
{
 "thumbnailUrl": "media/photo_4A395F67_5D20_139D_41D5_E346A84AC666_t.jpg",
 "label": "HnSDpjxaS",
 "duration": 5000,
 "id": "photo_4A395F67_5D20_139D_41D5_E346A84AC666",
 "width": 825,
 "image": {
  "levels": [
   {
    "url": "media/photo_4A395F67_5D20_139D_41D5_E346A84AC666.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 550
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4659EF04_5D20_7393_4199_72143552B630",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_t.jpg",
 "class": "Panorama",
 "label": "005",
 "id": "panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB",
   "backwardYaw": 21.54,
   "class": "AdjacentPanorama",
   "yaw": 86.61,
   "distance": 1
  },
  {
   "panorama": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854",
   "backwardYaw": 87.8,
   "class": "AdjacentPanorama",
   "yaw": -68.1,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4677688C_5745_AE2C_41CB_3CF2ABD08FE7",
  "this.overlay_4732E978_57C4_EEF5_41CD_DBBC55FBE3FD",
  "this.overlay_46B6205B_57CF_BE34_41A9_7DB46F52319C",
  "this.overlay_46CD1E46_57CC_E21D_41D4_5D456A3FD88D",
  "this.overlay_461C0EE6_57C3_621D_41C1_E5C8EEE41BF1",
  "this.overlay_452A0516_5744_E63C_41CD_A9F621677D39",
  "this.overlay_795462C9_5B44_E214_41CC_0C6C931519F5",
  "this.overlay_7E6E4899_5BC4_EE37_41C6_410A45505106",
  "this.overlay_4BFB809E_5D21_EEAF_41D2_157999BE33AA"
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "partial": false
},
{
 "shadowBlurRadius": 6,
 "id": "window_4ADFE0DF_59CA_B37E_419E_2B8A80057616",
 "width": 400,
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 12,
 "title": "Information",
 "gap": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "titleFontSize": "2vmin",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titlePaddingRight": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.image_uid47C04E38_5D20_75F3_41CB_E5A3FE7AD2B9_0",
  "this.htmlText_4AD120E0_59CA_B342_41CE_A8610A84BFE1"
 ],
 "layout": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "paddingLeft": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "class": "Window",
 "bodyPaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingTop": 5,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Abril Fatface",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window10995"
 },
 "contentOpaque": false,
 "closeButtonIconLineWidth": 2,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "thumbnailUrl": "media/photo_49F1055A_5D20_17B7_41C4_7627E392B862_t.jpg",
 "label": "8cGlkenNS",
 "duration": 5000,
 "id": "photo_49F1055A_5D20_17B7_41C4_7627E392B862",
 "width": 825,
 "image": {
  "levels": [
   {
    "url": "media/photo_49F1055A_5D20_17B7_41C4_7627E392B862.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 550
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 110.15,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_46B8FFE2_5D20_7297_41D4_53B0B5E50B3B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/video_79203BAD_5B45_626F_41CC_A72479E40A56_t.jpg",
 "label": "university of washington _ most beautiful college campus _ cinematic video",
 "scaleMode": "fit_inside",
 "width": 1280,
 "loop": false,
 "id": "video_79203BAD_5B45_626F_41CC_A72479E40A56",
 "class": "Video",
 "height": 720,
 "video": {
  "mp4Url": "media/video_79203BAD_5B45_626F_41CC_A72479E40A56.mp4",
  "width": 1280,
  "class": "VideoResource",
  "height": 720
 }
},
{
 "buttonPause": "this.IconButton_7E07CD25_5BCC_A61F_4178_F6EBFB1B932D",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer",
 "buttonRestart": "this.IconButton_7E076D24_5BCC_A61D_41D0_0439B2EE6D64"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_59272124_5540_4BAE_41D0_22B1D0373A60_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5931D833_5543_F9A9_41C4_2721D9E92100_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "shadowBlurRadius": 6,
 "id": "window_4DD18A82_59DA_97C8_41C7_C866A0DE7EA3",
 "width": 400,
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 12,
 "title": "Information",
 "gap": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "titleFontSize": "2vmin",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titlePaddingRight": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_4DD3AA88_59DA_97C3_41D4_D4EB87C161CB"
 ],
 "layout": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "paddingLeft": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "class": "Window",
 "bodyPaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingTop": 5,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Abril Fatface",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window14221"
 },
 "contentOpaque": false,
 "closeButtonIconLineWidth": 2,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "class": "PlayList",
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "items": [
  {
   "camera": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, 1)",
   "media": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, 2)",
   "media": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, 3)",
   "media": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 3, 4)",
   "media": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 4, 5)",
   "media": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 5, 6)",
   "media": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 6, 7)",
   "media": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 7, 8)",
   "media": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 8, 9)",
   "media": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 9, 10)",
   "media": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 10, 11)",
   "media": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 11, 12)",
   "media": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 12, 13)",
   "media": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 13, 14)",
   "media": "this.panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 14, 0)",
   "media": "this.album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ]
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "camera": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512",
   "class": "PanoramaPlayListItem"
  },
  {
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 0)",
   "media": "this.album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0",
   "class": "PhotoAlbumPlayListItem"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -158.15,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_46FAD059_5D20_6DB4_41C7_C19CC7C81D7D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_t.jpg",
 "class": "Panorama",
 "label": "008",
 "id": "panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282",
   "backwardYaw": 177.13,
   "class": "AdjacentPanorama",
   "yaw": -6.82,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_405D923B_58C3_A26B_41CD_814691CB9520",
  "this.overlay_40504173_58C3_9EFB_41D5_950B0036432D",
  "this.overlay_40ACAE94_58BC_A23D_41C8_EFCF243BFBD6",
  "this.overlay_40BED69E_58BF_A22D_4190_C2129A76E2B0",
  "this.overlay_4DFC8F09_5CE0_1395_41A9_82616659E472"
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.2,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_411CA090_5D20_6EB3_41C8_F9DB57DB4EB7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "audio": {
  "mp3Url": "media/audio_73DE269F_5BDD_622C_41D0_AB5FF48CAFEF.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_73DE269F_5BDD_622C_41D0_AB5FF48CAFEF.ogg"
 },
 "data": {
  "label": "Drifting at 432 Hz - Unicorn Heads"
 },
 "class": "MediaAudio",
 "id": "audio_73DE269F_5BDD_622C_41D0_AB5FF48CAFEF",
 "autoplay": true
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 111.9,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_46649F77_5D20_727C_41C7_8720BC0AD2E1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 166.77,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_46752F58_5D20_73B3_4196_C28950D53057",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_t.jpg",
 "class": "Panorama",
 "label": "012",
 "id": "panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069",
   "backwardYaw": 21.85,
   "class": "AdjacentPanorama",
   "yaw": -13.23,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_41A8F246_594F_A21C_41D2_99B18F1BFA36",
  "this.overlay_41B8781D_594C_AE2C_41D3_BF84452415A2",
  "this.overlay_4192CA50_5943_6235_41A9_82FEDF3D78CA",
  "this.overlay_41D69A99_5945_A234_41A3_9DC06A74A5D3",
  "this.overlay_427D47E4_595F_621C_41D5_CEA418649303",
  "this.overlay_42931937_595C_AE7B_41D5_6EB10095AE20",
  "this.overlay_4912B2F7_5D20_727D_41B8_E0FA21EA1697"
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "partial": false
},
{
 "shadowBlurRadius": 6,
 "id": "window_4BE2419A_5D20_2EB7_41C7_6D2E17328C1E",
 "width": 400,
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 12,
 "title": "Information",
 "gap": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "titleFontSize": "2vmin",
 "headerBorderSize": 0,
 "shadow": true,
 "titlePaddingRight": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.image_uid47FE2E3A_5D20_75F7_41CD_BE0615E1B867_0",
  "this.htmlText_4BEC019A_5D20_2EB7_41D3_7E82F4449A03"
 ],
 "layout": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "paddingLeft": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "class": "Window",
 "bodyPaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingTop": 5,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Abril Fatface",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window25321"
 },
 "contentOpaque": false,
 "closeButtonIconLineWidth": 2,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "closeButtonBorderSize": 0,
 "shadowBlurRadius": 6,
 "id": "window_56BDFEDC_59C6_AF42_41CA_50F18CB5A74B",
 "closeButtonPaddingLeft": 0,
 "width": 400,
 "closeButtonBorderRadius": 11,
 "closeButtonPaddingBottom": 0,
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "closeButtonRollOverBackgroundOpacity": 0,
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 1,
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 12,
 "closeButtonPaddingTop": 0,
 "title": "w\u01dd\u026b\u01ddb\u0294altx\u02b7 \u2013 Intellectual House",
 "gap": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "titleFontSize": "2vmin",
 "headerBorderSize": 0,
 "shadow": true,
 "titlePaddingRight": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.image_uid47C6DE2B_5D20_7595_415F_6D42B2416666_0",
  "this.htmlText_56BC1EDD_59C6_AF42_41C1_B6FADFB4B426"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "closeButtonPressedIconLineWidth": 1,
 "footerHeight": 5,
 "paddingLeft": 0,
 "footerBackgroundOpacity": 1,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderColor": "#000000",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconLineWidth": 1,
 "shadowVerticalLength": 0,
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "closeButtonRollOverBorderSize": 0,
 "class": "Window",
 "bodyPaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "closeButtonPressedBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingTop": 5,
 "layout": "vertical",
 "footerBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "titleFontFamily": "Abril Fatface",
 "closeButtonIconColor": "#000000",
 "close": "this.resumeGlobalAudios('window_56BDFEDC_59C6_AF42_41CA_50F18CB5A74B')",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "closeButtonPressedBackgroundOpacity": 0,
 "contentOpaque": false,
 "closeButtonIconLineWidth": 2,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window3500"
 }
},
{
 "class": "PlayList",
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "items": [
  {
   "camera": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 0, 1)",
   "media": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 1, 2)",
   "media": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 2, 3)",
   "media": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 3, 4)",
   "media": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 4, 5)",
   "media": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 5, 6)",
   "media": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 6, 7)",
   "media": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 7, 8)",
   "media": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 8, 9)",
   "media": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 9, 10)",
   "media": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 10, 11)",
   "media": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 11, 12)",
   "media": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 12, 13)",
   "media": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 13, 14)",
   "media": "this.panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist, 14, 0)",
   "media": "this.album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ]
},
{
 "class": "PlayList",
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "items": [
  {
   "camera": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 0, 1)",
   "media": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 1, 2)",
   "media": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 2, 3)",
   "media": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 3, 4)",
   "media": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 4, 5)",
   "media": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 5, 6)",
   "media": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 6, 7)",
   "media": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 7, 8)",
   "media": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 8, 9)",
   "media": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 9, 10)",
   "media": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 10, 11)",
   "media": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 11, 12)",
   "media": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 12, 13)",
   "media": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 13, 14)",
   "media": "this.panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 14, 0)",
   "media": "this.album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ]
},
{
 "thumbnailUrl": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_t.jpg",
 "class": "Panorama",
 "label": "014",
 "id": "panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_42E5E8C4_5944_EE1D_41B5_3310676FA975",
  "this.overlay_435D8386_5944_A21D_4192_FB19B860676C",
  "this.overlay_486EB776_5D20_727F_41D2_CF5ADBCBF85C"
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 39.38,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_46DB501E_5D20_6DAF_41CA_91A2C9747DDD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "playList_47F5EE48_5D20_7593_41D5_9E176C9D98B4",
 "items": [
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_47F5EE48_5D20_7593_41D5_9E176C9D98B4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_47F5EE48_5D20_7593_41D5_9E176C9D98B4, 0)",
   "player": "this.MainViewerVideoPlayer",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_79203BAD_5B45_626F_41CC_A72479E40A56",
   "class": "VideoPlayListItem"
  }
 ]
},
{
 "thumbnailUrl": "media/photo_4ADE3946_5D20_3F9F_41D3_1F442757F8B3_t.jpg",
 "label": "nxdBDpZ1F",
 "duration": 5000,
 "id": "photo_4ADE3946_5D20_3F9F_41D3_1F442757F8B3",
 "width": 825,
 "image": {
  "levels": [
   {
    "url": "media/photo_4ADE3946_5D20_3F9F_41D3_1F442757F8B3.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 550
},
{
 "thumbnailUrl": "media/photo_4A16BB42_5D20_1397_41A9_0F76DE58637B_t.jpg",
 "label": "N4M7NwcDs",
 "duration": 5000,
 "id": "photo_4A16BB42_5D20_1397_41A9_0F76DE58637B",
 "width": 734,
 "image": {
  "levels": [
   {
    "url": "media/photo_4A16BB42_5D20_1397_41A9_0F76DE58637B.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 550
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_t.jpg",
 "class": "Panorama",
 "label": "009",
 "id": "panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_41C8F77F_5945_E2EC_41C7_DA2BCBC93F8D",
  "this.overlay_41A2B140_5944_BE15_41D2_ED30686AE6A3",
  "this.overlay_4D010A77_5CE0_327D_41B4_360EA3D846D6"
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "partial": false
},
{
 "shadowBlurRadius": 6,
 "id": "window_4E494C92_5CE0_76B7_41C4_22751CB903B5",
 "width": 400,
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 12,
 "title": "Information",
 "gap": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "titleFontSize": "2vmin",
 "headerBorderSize": 0,
 "shadow": true,
 "titlePaddingRight": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.image_uid47FB8E43_5D20_7595_41C9_D54770D0AE09_0",
  "this.htmlText_4E4B9C93_5CE0_76B5_41CF_ED5D3B546A28"
 ],
 "layout": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "paddingLeft": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "class": "Window",
 "bodyPaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingTop": 5,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Abril Fatface",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window10868"
 },
 "contentOpaque": false,
 "closeButtonIconLineWidth": 2,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "thumbnailUrl": "media/photo_4B03E559_5D20_37B5_41D5_E1F2EB5DE5AB_t.jpg",
 "label": "7944672706_2d1a03dc20_b",
 "duration": 5000,
 "id": "photo_4B03E559_5D20_37B5_41D5_E1F2EB5DE5AB",
 "width": 1024,
 "image": {
  "levels": [
   {
    "url": "media/photo_4B03E559_5D20_37B5_41D5_E1F2EB5DE5AB.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 683
},
{
 "shadowBlurRadius": 6,
 "id": "window_4ED411DD_5CE0_2EAD_41BD_DB0F40729E58",
 "width": 400,
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 12,
 "title": "Information",
 "gap": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "titleFontSize": "2vmin",
 "headerBorderSize": 0,
 "shadow": true,
 "titlePaddingRight": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_4ED7D1DD_5CE0_2EAD_41D3_ABC7D82426C3"
 ],
 "layout": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "paddingLeft": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "class": "Window",
 "bodyPaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingTop": 5,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Abril Fatface",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window7498"
 },
 "contentOpaque": false,
 "closeButtonIconLineWidth": 2,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "shadowBlurRadius": 6,
 "id": "window_4E9BF38A_5D20_1297_41B4_AF69DE42F5E2",
 "width": 400,
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 12,
 "title": "Information",
 "gap": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "titleFontSize": "2vmin",
 "headerBorderSize": 0,
 "shadow": true,
 "titlePaddingRight": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.image_uid47F90E45_5D20_759D_41CE_C0747D17A14D_0",
  "this.htmlText_4EA5A38B_5D20_1295_41D1_1FA980FD997B"
 ],
 "layout": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "paddingLeft": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "class": "Window",
 "bodyPaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingTop": 5,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Abril Fatface",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window15104"
 },
 "contentOpaque": false,
 "closeButtonIconLineWidth": 2,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "thumbnailUrl": "media/photo_4EE8DDA5_5D20_169D_41B2_40663694360A_t.jpg",
 "label": "1t5jW2CVJ",
 "duration": 5000,
 "id": "photo_4EE8DDA5_5D20_169D_41B2_40663694360A",
 "width": 825,
 "image": {
  "levels": [
   {
    "url": "media/photo_4EE8DDA5_5D20_169D_41B2_40663694360A.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 550
},
{
 "buttonPause": "this.IconButton_7E07CD25_5BCC_A61F_4178_F6EBFB1B932D",
 "viewerArea": "this.MainViewer",
 "class": "PhotoAlbumPlayer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "buttonRestart": "this.IconButton_7E076D24_5BCC_A61D_41D0_0439B2EE6D64",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "shadowBlurRadius": 6,
 "id": "window_4D8A609E_5CE0_2EAF_41CF_271F20B27D7A",
 "width": 400,
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 12,
 "title": "Information",
 "gap": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "titleFontSize": "2vmin",
 "headerBorderSize": 0,
 "shadow": true,
 "titlePaddingRight": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_4D8CA09E_5CE0_2EAF_41D4_D8BB938F5AD4"
 ],
 "layout": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "paddingLeft": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "class": "Window",
 "bodyPaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingTop": 5,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Abril Fatface",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window5445"
 },
 "contentOpaque": false,
 "closeButtonIconLineWidth": 2,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "thumbnailUrl": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_t.jpg",
 "class": "Panorama",
 "label": "003",
 "id": "panorama_5931D833_5543_F9A9_41C4_2721D9E92100",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB",
   "backwardYaw": 111.81,
   "class": "AdjacentPanorama",
   "yaw": 105.5,
   "distance": 1
  },
  {
   "panorama": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A",
   "backwardYaw": -140.62,
   "class": "AdjacentPanorama",
   "yaw": -69.85,
   "distance": 1
  },
  {
   "panorama": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4E9179CE_58FC_AE2C_41B2_82471124C477",
  "this.overlay_4EE524A8_58FD_A616_41C6_3A594B7802A1",
  "this.overlay_4F3A9D43_58FC_E614_41CB_DC17C631E342",
  "this.overlay_4F7F9844_58FD_EE1D_41C5_428EBB3517F9",
  "this.overlay_4EDE400A_58C3_9E14_41CB_4D155D2A1C67",
  "this.overlay_4FA63A1D_58C4_A22F_4197_5F7306AF4AD6",
  "this.overlay_48ADE1C7_59CB_954E_41C6_582621747D77",
  "this.overlay_4BA988B3_59CA_93C5_41A6_BA1CC3BA5085"
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "partial": false
},
{
 "thumbnailUrl": "media/album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0_0_t.jpg",
 "label": "HnSDpjxaS",
 "duration": 5000,
 "id": "album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0_0",
 "width": 825,
 "image": {
  "levels": [
   {
    "url": "media/album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0_0.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 550
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_t.jpg",
 "class": "Panorama",
 "label": "004",
 "id": "panorama_59265448_5543_C9E7_41C0_2901F85C8C3A",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100",
   "backwardYaw": -69.85,
   "class": "AdjacentPanorama",
   "yaw": -140.62,
   "distance": 1
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4F7A1921_58C4_AE14_41D1_BB4420B92702",
  "this.overlay_4FAC585C_58C4_AE2C_41D3_5CB2E4A583B3",
  "this.overlay_4FCA471C_58C5_A22D_41D2_25C68E34623C",
  "this.overlay_4F81E729_58C3_6214_41C2_62FFC7E56D92",
  "this.overlay_4A858799_5D20_72B5_41C9_78CF529180C6",
  "this.overlay_4A36AD3D_59FD_72C2_41C8_B2C329622081",
  "this.overlay_4ADCBA4F_59CB_775E_41C9_D2F1A9D77229",
  "this.overlay_4AC54B41_59CA_9542_41D5_195AD549F5A5",
  "this.overlay_4DE80509_59CB_92C2_41C8_BF48EC90562A"
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_46974F96_5D20_72BF_419A_4357B9EEB2BF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/photo_49475095_59DA_93C2_41D1_3AD9B726CD08_t.jpg",
 "label": "Intellectual-House-cropped-1024x429",
 "duration": 5000,
 "id": "photo_49475095_59DA_93C2_41D1_3AD9B726CD08",
 "width": 1024,
 "image": {
  "levels": [
   {
    "url": "media/photo_49475095_59DA_93C2_41D1_3AD9B726CD08.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 429
},
{
 "shadowBlurRadius": 6,
 "id": "window_4B0ADA6D_59C5_9742_41BB_4E4032CDC7A4",
 "width": 400,
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 12,
 "title": "Information",
 "gap": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "titleFontSize": "2vmin",
 "bodyBackgroundOpacity": 1,
 "shadow": true,
 "titlePaddingRight": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.image_uid47C20E31_5D20_75F5_41D2_DF8D60085483_0",
  "this.htmlText_4B049A73_59C5_9746_41CC_AE31BB0B4ED0"
 ],
 "layout": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "paddingLeft": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "class": "Window",
 "bodyPaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingTop": 5,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Abril Fatface",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window8642"
 },
 "contentOpaque": false,
 "closeButtonIconLineWidth": 2,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "thumbnailUrl": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_t.jpg",
 "class": "Panorama",
 "label": "006",
 "id": "panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9",
   "backwardYaw": -68.1,
   "class": "AdjacentPanorama",
   "yaw": 87.8,
   "distance": 1
  },
  {
   "panorama": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4FD44DB7_58CC_E67B_4195_E897914F2E05",
  "this.overlay_4FB4CEAA_58CF_E215_41CF_F3D1DF2386D5",
  "this.overlay_403C9774_58CD_62FD_4176_357665585D7E",
  "this.overlay_402CAE1F_58C4_A22B_41D0_416B78F68526",
  "this.overlay_4AF40BC5_59C6_F542_41D2_95D522E3D4B2",
  "this.overlay_4AB1416C_59C5_7542_41C5_ECB784DAB6CF"
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_t.jpg",
 "class": "Panorama",
 "label": "010",
 "id": "panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4EB28615_5CE0_15BD_41D1_379BA45E159A",
  "this.overlay_4E18F6F7_5CE0_727D_41D1_732E5682014C",
  "this.overlay_4E7E6CE0_5CE0_F693_41C1_1781CA3A3250"
 ],
 "hfov": 360,
 "pitch": 0,
 "hfovMax": 130,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -158.46,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_46ED6075_5D20_6E7D_41B6_ECB0AD0D9CE9",
 "idleSequence": "this.sequence_46ED1075_5D20_6E7D_41D1_7BC76EA8405D",
 "initialSequence": "this.sequence_46ED1075_5D20_6E7D_41D1_7BC76EA8405D"
},
{
 "class": "PlayList",
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "items": [
  {
   "camera": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0, 1)",
   "media": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1, 2)",
   "media": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 2, 3)",
   "media": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 3, 4)",
   "media": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 4, 5)",
   "media": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 5, 6)",
   "media": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 6, 7)",
   "media": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 7, 8)",
   "media": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 8, 9)",
   "media": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 9, 10)",
   "media": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 10, 11)",
   "media": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 11, 12)",
   "media": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 12, 13)",
   "media": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 13, 14)",
   "media": "this.panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 14, 0)",
   "media": "this.album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 111.66,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4686DFB8_5D20_72F3_4196_F75437509216",
 "idleSequence": "this.sequence_4686EFB8_5D20_72F3_41C1_7FF7F640B251",
 "initialSequence": "this.sequence_4686EFB8_5D20_72F3_41C1_7FF7F640B251"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_593F7413_5540_496A_413E_6F5B10A03282_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "shadowBlurRadius": 6,
 "id": "window_49530E90_5D20_72B4_4193_EEF13EE2AEB8",
 "width": 400,
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 12,
 "title": "Information",
 "gap": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "titleFontSize": "2vmin",
 "headerBorderSize": 0,
 "shadow": true,
 "titlePaddingRight": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.image_uid47F46E47_5D20_759D_418E_499D5D68F300_0",
  "this.htmlText_49514E92_5D20_72B7_41C8_34A1CF88AF0B"
 ],
 "layout": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "paddingLeft": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "class": "Window",
 "bodyPaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingTop": 5,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Abril Fatface",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window19577"
 },
 "contentOpaque": false,
 "closeButtonIconLineWidth": 2,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "buttonPause": "this.IconButton_7E07CD25_5BCC_A61F_4178_F6EBFB1B932D",
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonZoomOut": "this.IconButton_7E077D24_5BCC_A61D_41D0_20D1CF782A82",
 "buttonPlayRight": "this.IconButton_7E079D25_5BCC_A61F_4192_0A3EDCB5D50A",
 "buttonMoveDown": "this.IconButton_7E07FD25_5BCC_A61F_41B4_7F412F91B2F0",
 "id": "MainViewerPanoramaPlayer",
 "buttonPlayLeft": "this.IconButton_7E071D24_5BCC_A61D_4151_907F9A50DBE6",
 "mouseControlMode": "drag_rotation",
 "buttonMoveRight": "this.IconButton_7E07ED25_5BCC_A61F_41CF_FEB2631C4B96",
 "touchControlMode": "drag_rotation",
 "buttonMoveUp": "this.IconButton_7E07DD25_5BCC_A61F_41AC_38CC77C26695",
 "buttonMoveLeft": "this.IconButton_7E070D25_5BCC_A61F_41B0_A10DF561C7FA",
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "buttonZoomIn": "this.IconButton_7E07BD25_5BCC_A61F_41C7_1F10790C3B5A",
 "buttonRestart": "this.IconButton_7E076D24_5BCC_A61D_41D0_0439B2EE6D64"
},
{
 "thumbnailUrl": "media/album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0_t.png",
 "label": "Photo Album HnSDpjxaS",
 "id": "album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0",
 "class": "PhotoAlbum",
 "playList": "this.album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0_AlbumPlayList"
},
{
 "thumbnailUrl": "media/photo_47F312E2_57C5_6215_41D3_C862012BE4BF_t.jpg",
 "label": "oN-MUb81y",
 "duration": 5000,
 "id": "photo_47F312E2_57C5_6215_41D3_C862012BE4BF",
 "width": 978,
 "image": {
  "levels": [
   {
    "url": "media/photo_47F312E2_57C5_6215_41D3_C862012BE4BF.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Photo",
 "height": 550
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.39,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_464D9F1E_5D20_73AF_41B3_517CF1AF54C8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.87,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_46CAC03E_5D20_6DEF_4191_392EC718BB1E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "items": [
  {
   "camera": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 0, 1)",
   "media": "this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 1, 2)",
   "media": "this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 2, 3)",
   "media": "this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 3, 4)",
   "media": "this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 4, 5)",
   "media": "this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 5, 6)",
   "media": "this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 6, 7)",
   "media": "this.panorama_593F7413_5540_496A_413E_6F5B10A03282",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 7, 8)",
   "media": "this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 8, 9)",
   "media": "this.panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 9, 10)",
   "media": "this.panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 10, 11)",
   "media": "this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 11, 12)",
   "media": "this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 12, 13)",
   "media": "this.panorama_593619E6_5540_DAAA_41CA_78E42B436069",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 13, 14)",
   "media": "this.panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist, 14, 0)",
   "media": "this.album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ]
},
{
 "closeButtonBorderSize": 0,
 "shadowBlurRadius": 6,
 "id": "window_48DF1FF8_59CB_6D42_4192_5CACF9EF6424",
 "closeButtonPaddingLeft": 0,
 "width": 400,
 "closeButtonBorderRadius": 11,
 "closeButtonPaddingBottom": 0,
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 0,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "closeButtonRollOverBackgroundOpacity": 1,
 "bodyPaddingLeft": 0,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 1,
 "closeButtonIconWidth": 20,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 20,
 "closeButtonPaddingTop": 0,
 "title": "",
 "gap": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "titleFontSize": "1.29vmin",
 "bodyBackgroundOpacity": 0,
 "shadow": true,
 "titlePaddingRight": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "headerBorderSize": 0,
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.container_47C48E2F_5D20_75ED_41C5_1DD2F052DB21"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPressedBackgroundColor": [],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "closeButtonPressedBorderColor": "#000000",
 "footerHeight": 5,
 "paddingLeft": 0,
 "footerBackgroundOpacity": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "closeButtonBorderColor": "#000000",
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "closeButtonRollOverIconLineWidth": 1,
 "shadowVerticalLength": 0,
 "headerPaddingRight": 0,
 "shadowHorizontalLength": 3,
 "closeButtonRollOverBorderSize": 0,
 "class": "Window",
 "bodyPaddingBottom": 0,
 "bodyBorderColor": "#000000",
 "closeButtonPressedIconLineWidth": 3,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingTop": 0,
 "layout": "vertical",
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "closeButtonIconColor": "#B2B2B2",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "closeButtonPressedBackgroundOpacity": 1,
 "contentOpaque": false,
 "closeButtonIconLineWidth": 2,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window6631"
 }
},
{
 "shadowBlurRadius": 6,
 "id": "window_493B1D2F_5D20_17ED_41D4_AD8B6BE51C34",
 "width": 400,
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 12,
 "title": "Information",
 "gap": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "titleFontSize": "2vmin",
 "headerBorderSize": 0,
 "shadow": true,
 "titlePaddingRight": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.image_uid47F56E48_5D20_7593_41CC_7883F6668290_0",
  "this.htmlText_493D6D30_5D20_17F3_41D2_1E268645AAEE"
 ],
 "layout": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "paddingLeft": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "class": "Window",
 "bodyPaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingTop": 5,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Abril Fatface",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window21134"
 },
 "contentOpaque": false,
 "closeButtonIconLineWidth": 2,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "shadowBlurRadius": 6,
 "id": "window_492FD247_5D20_2D9D_41B6_2234CEC0481B",
 "width": 400,
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "headerBackgroundOpacity": 1,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonPressedIconColor": "#FFFFFF",
 "titleTextDecoration": "none",
 "bodyPaddingLeft": 5,
 "minHeight": 20,
 "headerVerticalAlign": "middle",
 "modal": true,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "headerBackgroundColorDirection": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "scrollBarVisible": "rollOver",
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "closeButtonIconHeight": 12,
 "title": "Information",
 "gap": 10,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingRight": 0,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "titleFontSize": "2vmin",
 "headerBorderSize": 0,
 "shadow": true,
 "titlePaddingRight": 5,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "paddingTop": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontColor": "#000000",
 "height": 600,
 "shadowSpread": 1,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titlePaddingBottom": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.image_uid47F70E46_5D20_759F_41D2_25ED5AA8963B_0",
  "this.htmlText_492DA248_5D20_2D93_4198_C7B9C8B43453"
 ],
 "layout": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "backgroundOpacity": 1,
 "footerBackgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "titleFontWeight": "normal",
 "veilOpacity": 0.4,
 "footerHeight": 5,
 "paddingLeft": 0,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 500
 },
 "overflow": "scroll",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "headerPaddingLeft": 10,
 "shadowVerticalLength": 0,
 "headerPaddingRight": 10,
 "shadowHorizontalLength": 3,
 "class": "Window",
 "bodyPaddingBottom": 5,
 "bodyBorderColor": "#000000",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 500
 },
 "bodyPaddingTop": 5,
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Abril Fatface",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "data": {
  "name": "Window16697"
 },
 "contentOpaque": false,
 "closeButtonIconLineWidth": 2,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 10,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minHeight": 50,
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 13,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "shadow": false,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipFontWeight": "normal",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "paddingLeft": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "shadow": false,
 "children": [
  "this.Container_71E1A319_5BC3_6234_41C8_58FB71D80EA6"
 ],
 "height": "100%",
 "id": "Container_73FA6E3F_5BC3_E26B_41C1_7C32EA126DDB",
 "left": "0%",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Video"
 }
},
{
 "shadow": false,
 "children": [
  "this.Container_7E5165EF_5BC5_61EC_41C9_B123C6B3E096"
 ],
 "height": "100%",
 "id": "Container_70AE2E3E_5BC5_E26D_41B4_148A9702E525",
 "left": "0%",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container104836"
 }
},
{
 "shadow": false,
 "children": [
  "this.Image_7FF8DF8A_5B43_A215_419E_79E35DE6FCB8",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "backgroundOpacity": 1,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 67,
 "contentOpaque": false,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--BUTTON SET"
 }
},
{
 "shadow": false,
 "children": [
  "this.IconButton_7E077D24_5BCC_A61D_41D0_20D1CF782A82",
  "this.IconButton_7E076D24_5BCC_A61D_41D0_0439B2EE6D64",
  "this.IconButton_7E071D24_5BCC_A61D_4151_907F9A50DBE6",
  "this.IconButton_7E070D25_5BCC_A61F_41B0_A10DF561C7FA",
  "this.Container_7E073D25_5BCC_A61F_41C7_308B6A8B4D36",
  "this.IconButton_7E07ED25_5BCC_A61F_41CF_FEB2631C4B96",
  "this.IconButton_7E079D25_5BCC_A61F_4192_0A3EDCB5D50A",
  "this.IconButton_7E078D25_5BCC_A61F_41AA_144E751F30B8",
  "this.IconButton_7E07BD25_5BCC_A61F_41C7_1F10790C3B5A"
 ],
 "id": "Container_7E07AD25_5BCC_A61F_41C9_391F5C4D4A41",
 "left": "38.66%",
 "backgroundOpacity": 0,
 "width": 360,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "hidden",
 "minHeight": 20,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "85.14%",
 "class": "Container",
 "borderSize": 0,
 "minWidth": 20,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bottom": "1.2%",
 "gap": 4,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Container34593"
 }
},
{
 "shadow": false,
 "children": [
  "this.IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
  "this.IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
  "this.IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
  "this.IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "class": "Container",
 "paddingRight": 30,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "gap": 3,
 "scrollBarMargin": 2,
 "height": 90,
 "contentOpaque": false,
 "paddingTop": 0,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-button set container"
 }
},
{
 "shadow": false,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "---INFO photo"
 }
},
{
 "shadow": false,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "---PANORAMA LIST"
 }
},
{
 "shadow": false,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "---LOCATION"
 }
},
{
 "shadow": false,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "---FLOORPLAN"
 }
},
{
 "shadow": false,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "0%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "bottom": "0%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "---PHOTOALBUM"
 }
},
{
 "shadow": false,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "backgroundOpacity": 1,
 "width": 85,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "right": "0.42%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0.02
 ],
 "top": "7.32%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bottom": "59.13%",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#F7931E"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "visible": false,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-button set"
 }
},
{
 "shadow": false,
 "id": "IconButton_7E078D25_5BCC_A61F_41AA_144E751F30B8",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7E078D25_5BCC_A61F_41AA_144E751F30B8_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_7E078D25_5BCC_A61F_41AA_144E751F30B8_pressed.png",
 "height": 40,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7E078D25_5BCC_A61F_41AA_144E751F30B8.png",
 "cursor": "hand",
 "data": {
  "name": "Button34604"
 }
},
{
 "shadow": false,
 "fontFamily": "Arial",
 "pressedIconWidth": 30,
 "data": {
  "name": "Button Settings Mute"
 },
 "textDecoration": "none",
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "backgroundOpacity": 1,
 "width": 60,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 30,
 "iconWidth": 30,
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "layout": "horizontal",
 "paddingRight": 0,
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "height": 60,
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "shadow": false,
 "fontFamily": "Arial",
 "pressedIconWidth": 30,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "textDecoration": "none",
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "backgroundOpacity": 1,
 "width": 60,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 30,
 "iconWidth": 30,
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "layout": "horizontal",
 "paddingRight": 0,
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "height": 60,
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_46A89003_5D20_6D95_41D0_E66F319A1D3B",
 "restartMovementOnUserInteraction": false
},
{
 "items": [
  {
   "yaw": 21.85,
   "hfov": 18.63,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0_HS_0_0.png",
      "width": 336,
      "class": "ImageResourceLevel",
      "height": 107
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA, this.camera_46752F58_5D20_73B3_4196_C28950D53057); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_423573E3_5943_A214_41BF_C9555453E1E3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0_HS_0_0_0_map.gif",
      "width": 50,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.23,
   "hfov": 18.63
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0_HS_1_0.png",
      "width": 915,
      "class": "ImageResourceLevel",
      "height": 336
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.58,
   "yaw": 23.99,
   "hfov": 51.15,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4236A130_5944_FE75_41A4_D56C44B086DF",
 "data": {
  "label": "Drumheller Fountain"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0_HS_1_0_map.gif",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.58,
   "hfov": 51.15
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": 22.74,
   "hfov": 7.42,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0_HS_2_0.png",
      "width": 134,
      "class": "ImageResourceLevel",
      "height": 135
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_49530E90_5D20_72B4_4193_EEF13EE2AEB8, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_49C9C1A5_5D20_2E9D_41D3_15F579523C11",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593619E6_5540_DAAA_41CA_78E42B436069_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.2,
   "hfov": 7.42
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_462D0EC3_5D20_7295_41C0_24058F2AD755",
 "restartMovementOnUserInteraction": false
},
{
 "items": [
  {
   "yaw": -68.34,
   "hfov": 7.3,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_0_0.png",
      "width": 130,
      "class": "ImageResourceLevel",
      "height": 36
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_59272124_5540_4BAE_41D0_22B1D0373A60, this.camera_4659EF04_5D20_7393_4199_72143552B630); this.mainPlayList.set('selectedIndex', 10)",
   "toolTip": "Husky Den"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_5B0B7344_5540_4FEE_41B7_EE04F966B8AB",
 "data": {
  "label": "Husky Den_hotspot"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_0_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.47,
   "hfov": 7.3
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": 21.62,
   "hfov": 12.31,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_1_0.png",
      "width": 219,
      "class": "ImageResourceLevel",
      "height": 219
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_445B1CE1_5540_5AA6_41CC_5FDFA9CC18B8",
 "data": {
  "label": "Red Square"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.21,
   "hfov": 12.31
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": 21.54,
   "hfov": 7.3,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_2_0.png",
      "width": 130,
      "class": "ImageResourceLevel",
      "height": 36
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9, this.camera_464D9F1E_5D20_73AF_41B3_517CF1AF54C8); this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "Red Square"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_45371D73_5540_3BA9_41D5_0216F115A280",
 "data": {
  "label": "Red Square_hotspot"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.47,
   "hfov": 7.3
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": -68.16,
   "hfov": 13.19,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_3_0.png",
      "width": 235,
      "class": "ImageResourceLevel",
      "height": 235
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_45F75870_5541_D9A7_41D1_2899BBD4AF24",
 "data": {
  "label": "Husky Den"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.49,
   "hfov": 13.19
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": -158.75,
   "hfov": 7.3,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_4_0.png",
      "width": 130,
      "class": "ImageResourceLevel",
      "height": 36
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4, this.camera_4623CEE6_5D20_729F_41BA_3452DF44B934); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Husky Den"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4565A50E_5540_CB7A_41B2_4ACDB69D03D6",
 "data": {
  "label": "Intellectual House_hotspot"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.47,
   "hfov": 7.3
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": -158.41,
   "hfov": 12.31,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_5_0.png",
      "width": 219,
      "class": "ImageResourceLevel",
      "height": 219
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_45862141_55C0_4BE6_41D1_29176C2797B7",
 "data": {
  "label": "Intellectual House"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.05,
   "hfov": 12.31
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": 111.81,
   "hfov": 7.3,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_6_0.png",
      "width": 130,
      "class": "ImageResourceLevel",
      "height": 36
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100, this.camera_4641BF3E_5D20_73EF_41C8_AB4A4FDC5DC0); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "Red Square"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_5A72E87D_5744_AEEF_41C9_E70E6EFA5D67",
 "data": {
  "label": "Denny Hall_hotspot"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 111.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_6_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.47,
   "hfov": 7.3
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": 111.85,
   "hfov": 12.31,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_7_0.png",
      "width": 219,
      "class": "ImageResourceLevel",
      "height": 219
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_5AB78857_574D_EE3B_41BB_7D30D7477886",
 "data": {
  "label": "Denny Hall"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 111.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.05,
   "hfov": 12.31
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": -16.97,
   "hfov": 8,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_8_0.png",
      "width": 143,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.28,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_47DAE391_57C5_A237_41C0_7F8C142F562B, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_590EB6FC_5745_63ED_41C7_8BCE2988834A",
 "data": {
  "label": "Info"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB_0_HS_8_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.28,
   "hfov": 8
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": -112.02,
   "hfov": 10.85,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0_HS_0_0.png",
      "width": 197,
      "class": "ImageResourceLevel",
      "height": 184
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB, this.camera_462D6EC3_5D20_7295_41A0_A96C64A8C2FA); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4F0F009E_58C3_9E2C_419A_D74F6C2F8D11",
 "data": {
  "label": "The Quad_hospot"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -112.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.38,
   "hfov": 10.85
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": -111.69,
   "hfov": 27.41,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0_HS_1_0.png",
      "width": 511,
      "class": "ImageResourceLevel",
      "height": 419
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4EA4FF08_58C7_6214_41C5_DFDE1F203ACC",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -111.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.96,
   "hfov": 27.41
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": -69.09,
   "hfov": 11.81,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0_HS_2_0.png",
      "width": 210,
      "class": "ImageResourceLevel",
      "height": 188
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setComponentVisibility(this.Container_73FA6E3F_5BC3_E26B_41C1_7C32EA126DDB, true, 0, null, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_71DE4B92_5BC5_6235_41D2_FD75B07E0406",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.94,
   "hfov": 11.81
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": 45.89,
   "hfov": 7.53,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0_HS_3_0.png",
      "width": 134,
      "class": "ImageResourceLevel",
      "height": 135
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.26,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_56BDFEDC_59C6_AF42_41CA_50F18CB5A74B, null, true); this.pauseGlobalAudios('window_56BDFEDC_59C6_AF42_41CA_50F18CB5A74B')"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_75CCE776_5B44_A2FA_41B1_BBFFE537AB22",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 45.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593B4C6C_5543_D9BF_41D1_7362E2190DB4_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.26,
   "hfov": 7.53
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": 178.87,
   "hfov": 15.76,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0_HS_0_0.png",
      "width": 281,
      "class": "ImageResourceLevel",
      "height": 203
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_439A2E8D_594C_A22F_41BB_0115867034A3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 178.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0_HS_0_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.06,
   "hfov": 15.76
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0_HS_1_0.png",
      "width": 441,
      "class": "ImageResourceLevel",
      "height": 371
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.92,
   "yaw": -95.32,
   "hfov": 24.64,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_43A5BB37_594D_627B_41D1_CF269E13B0F8",
 "data": {
  "label": "The Quad"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0_HS_1_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.92,
   "hfov": 24.64
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": -95.82,
   "hfov": 15.76,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0_HS_2_0.png",
      "width": 281,
      "class": "ImageResourceLevel",
      "height": 203
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB, this.camera_4686DFB8_5D20_72F3_4196_F75437509216); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_44BC57C4_594C_A21D_41BD_3C0BE4E55D15",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -95.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0_HS_2_0_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.35,
   "hfov": 15.76
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0_HS_3_0.png",
      "width": 682,
      "class": "ImageResourceLevel",
      "height": 315
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.48,
   "yaw": 179.9,
   "hfov": 38,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_442ECC12_5943_A634_41C6_EC7C022733FF",
 "data": {
  "label": "Mary Gates Hall"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0_HS_3_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.48,
   "hfov": 38
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": -40.08,
   "hfov": 7.52,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0_HS_4_0.png",
      "width": 134,
      "class": "ImageResourceLevel",
      "height": 166
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.75,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4E49261F_5D20_15AC_41C7_2496B769CDCF",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0_HS_4_1_0_map.gif",
      "width": 67,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.75,
   "hfov": 7.52
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": -40.07,
   "hfov": 17.83,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0_HS_5_0.png",
      "width": 319,
      "class": "ImageResourceLevel",
      "height": 185
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4E53B59C_5D20_16B3_41CF_10BDCDB924B6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -40.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.76,
   "hfov": 17.83
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": -5.36,
   "hfov": 4.89,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0_HS_6_0.png",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 91
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_4E9BF38A_5D20_1297_41B4_AF69DE42F5E2, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4E7177C4_5D20_1293_41C4_84DB614A9BC5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59272124_5540_4BAE_41D0_22B1D0373A60_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.49,
   "hfov": 4.89
  }
 ],
 "rollOverDisplay": false
},
{
 "shadow": false,
 "id": "image_uid47C94E24_5D20_7593_41BD_899DF9474207_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "url": "media/photo_47F312E2_57C5_6215_41D3_C862012BE4BF.jpeg",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "class": "Image",
 "borderSize": 0,
 "minWidth": 0,
 "paddingRight": 0,
 "height": "33%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image29063"
 }
},
{
 "shadow": false,
 "id": "htmlText_47E4A391_57C5_A237_41A9_4F33E01CDC0A",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Featuring Gothic architecture, brick pathways and wide lawns, the Quad is one of the most beloved spaces on campus, especially when the Yoshino Cherry trees bloom in the spring. It\u2019s a popular place for students to study and connect, and home to many academic units in the arts, humanities and social sciences. Liberal arts majors at the UW give students the chance to explore the world through the lens of politics, economics, the arts, history, science, health care, race, gender, the environment and more. They teach students how to think about complex subjects and find a path forward, even when clear answers aren\u2019t obvious. Students develop the foundational skills and flexibility of mind to succeed even as the employment landscape changes.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Check out a <SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://www.youtube.com/watch?v=n5jt4yBrnn4\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><U>video of the 2020</U></A></SPAN> cherry blossoms.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Take a peek at a live \u201cblossom cam\u201d in the Quad.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Take the<SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://artsci.washington.edu/quiz/career\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><U> \u201cThere\u2019s a Job for That\u201d</U></A></SPAN> quiz.</SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText7325"
 },
 "height": "66%"
},
{
 "items": [
  {
   "yaw": 139.13,
   "hfov": 6.34,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0_HS_4_0.png",
      "width": 115,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4DCD37DA_5CE0_32B7_41CF_32087B09890D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 139.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.71,
   "hfov": 6.34
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": 177.13,
   "hfov": 11.1,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0_HS_0_0.png",
      "width": 205,
      "class": "ImageResourceLevel",
      "height": 84
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91, this.camera_46974F96_5D20_72BF_419A_4357B9EEB2BF); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_401EE15C_58CD_7E2D_41B8_1F3658A4E5D9",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.91,
   "hfov": 11.1
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": 175.99,
   "hfov": 25.29,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0_HS_1_0.png",
      "width": 456,
      "class": "ImageResourceLevel",
      "height": 385
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4062BA62_58C5_6215_41AF_25588B3AAA4A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 175.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.5,
   "hfov": 25.29
  }
 ],
 "rollOverDisplay": true
},
{
 "blending": 0,
 "class": "VideoPanoramaOverlay",
 "id": "overlay_533C8B13_5CE0_13B5_41C9_2338B1C025F6",
 "roll": -0.1,
 "loop": false,
 "image": {
  "levels": [
   {
    "url": "media/overlay_533C8B13_5CE0_13B5_41C9_2338B1C025F6_t.jpg",
    "width": 2,
    "class": "ImageResourceLevel",
    "height": 2
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 9.61,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "yaw": 139.15,
 "vfov": 13.76,
 "rotationY": -3.98,
 "rotationX": -8.1,
 "click": "if(this.overlay_533C8B13_5CE0_13B5_41C9_2338B1C025F6.get('state') != 'playing'){ this.overlay_533C8B13_5CE0_13B5_41C9_2338B1C025F6.play(); } else { this.overlay_533C8B13_5CE0_13B5_41C9_2338B1C025F6.stop(); }",
 "data": {
  "label": "Video"
 },
 "autoplay": false,
 "hfov": 24.12,
 "distance": 50,
 "enabledInCardboard": true,
 "stateChange": "if(this.overlay_533C8B13_5CE0_13B5_41C9_2338B1C025F6.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_533C8B13_5CE0_13B5_41C9_2338B1C025F6', [this.overlay_533C8B13_5CE0_13B5_41C9_2338B1C025F6]); } else { this.resumeGlobalAudios('overlay_533C8B13_5CE0_13B5_41C9_2338B1C025F6'); }",
 "video": {
  "mp4Url": "media/video_79203BAD_5B45_626F_41CC_A72479E40A56.mp4",
  "width": 1280,
  "class": "VideoResource",
  "height": 720
 }
},
{
 "items": [
  {
   "yaw": 139.35,
   "hfov": 25.22,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0_HS_3_0.png",
      "width": 458,
      "class": "ImageResourceLevel",
      "height": 263
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.42,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4C212E09_5CE0_3595_41CF_070C68B9EEB5",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 139.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593F7413_5540_496A_413E_6F5B10A03282_0_HS_3_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.42,
   "hfov": 25.22
  }
 ],
 "rollOverDisplay": true
},
{
 "media": "this.album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0",
 "player": "this.viewer_uid47C43E2F_5D20_75ED_4185_8DF794843E38PhotoAlbumPlayer",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0_AlbumPlayList, this.htmltext_47C56E30_5D20_75F3_41D2_06D5B4511700, this.albumitem_47C4DE2F_5D20_75ED_41CC_24F6829D156C); this.loopAlbum(this.playList_53004A8F_5CE0_32AD_41B2_E3500D1E47BE, 0)",
 "class": "PhotoAlbumPlayListItem",
 "id": "albumitem_47C4DE2F_5D20_75ED_41CC_24F6829D156C"
},
{
 "items": [
  {
   "yaw": 85.56,
   "hfov": 22.22,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_4_0.png",
      "width": 397,
      "class": "ImageResourceLevel",
      "height": 406
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4677688C_5745_AE2C_41CB_3CF2ABD08FE7",
 "data": {
  "label": "The Quad"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.91,
   "hfov": 22.22
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": 86.61,
   "hfov": 10.47,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_0_0.png",
      "width": 187,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB, this.camera_46ED6075_5D20_6E7D_41B6_ECB0AD0D9CE9); this.mainPlayList.set('selectedIndex', 0)",
   "toolTip": "The Quad"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4732E978_57C4_EEF5_41CD_DBBC55FBE3FD",
 "data": {
  "label": "The Quad_hotspot"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.92,
   "hfov": 10.47
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": -68.47,
   "hfov": 28.64,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_1_0.png",
      "width": 512,
      "class": "ImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.97,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_46B6205B_57CF_BE34_41A9_7DB46F52319C",
 "data": {
  "label": "Schmitz Hall"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.97,
   "hfov": 28.64
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": -68.1,
   "hfov": 10.4,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_2_0.png",
      "width": 187,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.9,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854, this.camera_411CA090_5D20_6EB3_41C8_F9DB57DB4EB7); this.mainPlayList.set('selectedIndex', 5)",
   "toolTip": "Schmitz Hall"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_46CD1E46_57CC_E21D_41D4_5D456A3FD88D",
 "data": {
  "label": "Schmitz Hall_hotspot"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -68.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.9,
   "hfov": 10.4
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": 136.11,
   "hfov": 10.48,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_3_0.png",
      "width": 187,
      "class": "ImageResourceLevel",
      "height": 104
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "toolTip": "Schmitz Hall"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_461C0EE6_57C3_621D_41C1_E5C8EEE41BF1",
 "data": {
  "label": "Mary Gates Hall_hotspot"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 136.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.37,
   "hfov": 10.48
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": 135.88,
   "hfov": 19.42,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_5_0.png",
      "width": 347,
      "class": "ImageResourceLevel",
      "height": 328
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.46,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_452A0516_5744_E63C_41CD_A9F621677D39",
 "data": {
  "label": "Mary Gates Hall"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.46,
   "hfov": 19.42
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": 54.39,
   "hfov": 6.42,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_7_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 115
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.6,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_795462C9_5B44_E214_41CC_0C6C931519F5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 54.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.6,
   "hfov": 6.42
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": 52.43,
   "hfov": 46.02,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_8_0.png",
      "width": 825,
      "class": "ImageResourceLevel",
      "height": 550
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.openLink('files/file_70D8C54C_5BC4_E62D_41CC_FD330B3015B0.jpeg', '_blank')"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_7E6E4899_5BC4_EE37_41C6_410A45505106",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_8_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.71,
   "hfov": 46.02
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": -112.88,
   "hfov": 6.66,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_9_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_4BE2419A_5D20_2EB7_41C7_6D2E17328C1E, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4BFB809E_5D21_EEAF_41D2_157999BE33AA",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -112.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.11,
   "hfov": 6.66
  }
 ],
 "rollOverDisplay": false
},
{
 "shadow": false,
 "id": "image_uid47C04E38_5D20_75F3_41CB_E5A3FE7AD2B9_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "url": "media/photo_4ADE3946_5D20_3F9F_41D3_1F442757F8B3.jpeg",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "class": "Image",
 "borderSize": 0,
 "minWidth": 0,
 "paddingRight": 0,
 "height": "45%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image29072"
 }
},
{
 "shadow": false,
 "id": "htmlText_4AD120E0_59CA_B342_41CE_A8610A84BFE1",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">The details of classrooms can vary greatly from building to building on the UW campus. You\u2019ll find lecture halls and labs, more traditional-feeling classrooms in the historic buildings and rooms like this active learning classroom that serve as a flexible learning space and are fully equipped with technology options.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"> </SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">But learning isn\u2019t limited to the classroom. The UW is a leader in research innovation. That means you won\u2019t just learn about your interests here; you\u2019ll get to apply them to issues and causes that matter. Gain work experience through an internship program, travel abroad to gain different perspectives or get hands-on experience on a research vessel. Through our experiential and outcomes-based programs, and with the support of your professors and peers, you\u2019ll transform your own ideas and inspiration into meaningful, measurable impact on the world around you. </SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText10996"
 },
 "height": "54%"
},
{
 "shadow": false,
 "id": "IconButton_7E07CD25_5BCC_A61F_4178_F6EBFB1B932D",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7E07CD25_5BCC_A61F_4178_F6EBFB1B932D_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_7E07CD25_5BCC_A61F_4178_F6EBFB1B932D_pressed.png",
 "height": 40,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7E07CD25_5BCC_A61F_4178_F6EBFB1B932D.png",
 "cursor": "hand",
 "data": {
  "name": "Button34600"
 }
},
{
 "shadow": false,
 "id": "IconButton_7E076D24_5BCC_A61D_41D0_0439B2EE6D64",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7E076D24_5BCC_A61D_41D0_0439B2EE6D64_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_7E076D24_5BCC_A61D_41D0_0439B2EE6D64_pressed.png",
 "height": 40,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7E076D24_5BCC_A61D_41D0_0439B2EE6D64.png",
 "cursor": "hand",
 "data": {
  "name": "Button34595"
 }
},
{
 "shadow": false,
 "id": "htmlText_4DD3AA88_59DA_97C3_41D4_D4EB87C161CB",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">At the UW, diversity, equity and inclusion is integral to excellence, and we strive to create welcoming and respectful learning environments and promote access, opportunity and justice for all. One of the groups that works on the front lines of that mission is located on the third floor of Schmitz Hall. The <SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://depts.washington.edu/reach/\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><U>Multicultural Outreach &amp; Recruitment</U></A></SPAN> (MOR) team works to identify, attract and recruit for historically underrepresented students of color (African American, Latino, American Indian/Alaska Native, Native Hawaiian/Pacific Islander and Southeast Asian) and students from low income or first-generation backgrounds. Through one-to-one outreach, school visits and larger events, MOR provides resources for underrepresented students to increase college access and empower them to reach their higher education goals, a level of support considered unique among public institutions nationwide. </SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Across the lobby, you\u2019ll find the UW\u2019s Office of Admissions. At the UW, we value the wide lens of our students\u2019 experiences, cultures, talents and sheer brain power. You aren\u2019t just a GPA and a set of numbers. We want to know more. Learn more about applying to the UW.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText14222"
 },
 "height": "100%"
},
{
 "items": [
  {
   "yaw": -139.71,
   "hfov": 14.7,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0_HS_0_0.png",
      "width": 272,
      "class": "ImageResourceLevel",
      "height": 134
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_405D923B_58C3_A26B_41CD_814691CB9520",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.51,
   "hfov": 14.7
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": -6.82,
   "hfov": 14.7,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0_HS_1_0.png",
      "width": 272,
      "class": "ImageResourceLevel",
      "height": 134
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_593F7413_5540_496A_413E_6F5B10A03282, this.camera_46CAC03E_5D20_6DEF_4191_392EC718BB1E); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_40504173_58C3_9EFB_41D5_950B0036432D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.51,
   "hfov": 14.7
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": -6.27,
   "hfov": 44.89,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0_HS_2_0.png",
      "width": 803,
      "class": "ImageResourceLevel",
      "height": 718
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_40ACAE94_58BC_A23D_41C8_EFCF243BFBD6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.71,
   "hfov": 44.89
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0_HS_3_0.png",
      "width": 641,
      "class": "ImageResourceLevel",
      "height": 377
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.5,
   "yaw": -138.42,
   "hfov": 35.07,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "toolTip": "Schmitz Hall"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_40BED69E_58BF_A22D_4190_C2129A76E2B0",
 "data": {
  "label": "  Schmitz Hall"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -138.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0_HS_3_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.5,
   "hfov": 35.07
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": 38.2,
   "hfov": 6.66,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0_HS_4_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_4D8A609E_5CE0_2EAF_41CF_271F20B27D7A, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4DFC8F09_5CE0_1395_41A9_82616659E472",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593E6F7C_5540_579E_41C2_8E7AC5708D91_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.59,
   "hfov": 6.66
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": -111.77,
   "hfov": 17.46,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0_HS_0_0.png",
      "width": 312,
      "class": "ImageResourceLevel",
      "height": 251
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_41A8F246_594F_A21C_41D2_99B18F1BFA36",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -111.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.84,
   "hfov": 17.46
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": 166.64,
   "hfov": 17.26,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0_HS_1_0.png",
      "width": 312,
      "class": "ImageResourceLevel",
      "height": 251
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_41B8781D_594C_AE2C_41D3_BF84452415A2",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.36,
   "hfov": 17.26
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0_HS_2_0.png",
      "width": 708,
      "class": "ImageResourceLevel",
      "height": 412
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.67,
   "yaw": 166.03,
   "hfov": 38.7,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4192CA50_5943_6235_41A9_82FEDF3D78CA",
 "data": {
  "label": "Mary Gates Hall"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0_HS_2_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.67,
   "hfov": 38.7
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0_HS_3_0.png",
      "width": 1008,
      "class": "ImageResourceLevel",
      "height": 503
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.27,
   "yaw": -109.32,
   "hfov": 56.2,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_41D69A99_5945_A234_41A3_9DC06A74A5D3",
 "data": {
  "label": "   Husky Union Building  "
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0_HS_3_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.27,
   "hfov": 56.2
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": -13.23,
   "hfov": 17.46,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0_HS_4_0.png",
      "width": 312,
      "class": "ImageResourceLevel",
      "height": 251
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_593619E6_5540_DAAA_41CA_78E42B436069, this.camera_46FAD059_5D20_6DB4_41C7_C19CC7C81D7D); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_427D47E4_595F_621C_41D5_CEA418649303",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -13.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0_HS_4_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.83,
   "hfov": 17.46
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0_HS_5_0.png",
      "width": 752,
      "class": "ImageResourceLevel",
      "height": 503
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.59,
   "yaw": -12.05,
   "hfov": 41.38,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_42931937_595C_AE7B_41D5_6EB10095AE20",
 "data": {
  "label": "   Husky Stadium/          \u000d        UW Station\u000d"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0_HS_5_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.59,
   "hfov": 41.38
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": -43.59,
   "hfov": 7.51,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0_HS_6_0.png",
      "width": 134,
      "class": "ImageResourceLevel",
      "height": 135
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_492FD247_5D20_2D9D_41B6_2234CEC0481B, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4912B2F7_5D20_727D_41B8_E0FA21EA1697",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5932DDA6_5540_3AAA_41C0_E40107FC59FA_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.95,
   "hfov": 7.51
  }
 ],
 "rollOverDisplay": false
},
{
 "shadow": false,
 "id": "image_uid47FE2E3A_5D20_75F7_41CD_BE0615E1B867_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "url": "media/photo_4A16BB42_5D20_1397_41A9_0F76DE58637B.jpeg",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "class": "Image",
 "borderSize": 0,
 "minWidth": 0,
 "paddingRight": 0,
 "height": "50%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image29073"
 }
},
{
 "shadow": false,
 "id": "htmlText_4BEC019A_5D20_2EB7_41D3_7E82F4449A03",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Although officially named Central Plaza, this open area connecting the arts at Meany Theater with Odegaard and Suzzallo libraries and the classrooms in Kane hall is more commonly referred to as Red Square after its red brick paving. Red Square is a popular spot for campus-wide events, student organization tables or a break and a bite to eat between classes. </SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText25322"
 },
 "height": "50%"
},
{
 "shadow": false,
 "id": "image_uid47C6DE2B_5D20_7595_415F_6D42B2416666_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "url": "media/photo_49475095_59DA_93C2_41D1_3AD9B726CD08.jpg",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "class": "Image",
 "borderSize": 0,
 "minWidth": 0,
 "paddingRight": 0,
 "height": "29%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image29064"
 }
},
{
 "shadow": false,
 "id": "htmlText_56BC1EDD_59C6_AF42_41C1_B6FADFB4B426",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Intellectual House is a longhouse-style facility on the UW Seattle campus. It provides a multi-service learning and gathering space for American Indian and Alaska Native students, faculty and staff, as well as others from various cultures and communities to come together in a welcoming environment to share knowledge.</SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText3501"
 },
 "height": "70%"
},
{
 "items": [
  {
   "yaw": 173.08,
   "hfov": 21.93,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0_HS_0_0.png",
      "width": 399,
      "class": "ImageResourceLevel",
      "height": 134
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.99,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_42E5E8C4_5944_EE1D_41B5_3310676FA975",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0_HS_0_0_0_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.99,
   "hfov": 21.93
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0_HS_1_0.png",
      "width": 915,
      "class": "ImageResourceLevel",
      "height": 372
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.09,
   "yaw": 174.72,
   "hfov": 50.96,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_435D8386_5944_A21D_4192_FB19B860676C",
 "data": {
  "label": "Drumheller Fountain"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0_HS_1_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.09,
   "hfov": 50.96
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": -4.15,
   "hfov": 10.91,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0_HS_2_0.png",
      "width": 197,
      "class": "ImageResourceLevel",
      "height": 179
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_493B1D2F_5D20_17ED_41D4_AD8B6BE51C34, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_486EB776_5D20_727F_41D2_CF5ADBCBF85C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5934F58C_5540_CB7F_41D0_28AB9B7BA512_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.36,
   "hfov": 10.91
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": 153.28,
   "hfov": 14.19,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0_HS_0_0.png",
      "width": 253,
      "class": "ImageResourceLevel",
      "height": 216
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.65,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_41C8F77F_5945_E2EC_41C7_DA2BCBC93F8D",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 153.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.65,
   "hfov": 14.19
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0_HS_1_0.png",
      "width": 535,
      "class": "ImageResourceLevel",
      "height": 372
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.14,
   "yaw": 154.19,
   "hfov": 29.98,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_41A2B140_5944_BE15_41D2_ED30686AE6A3",
 "data": {
  "label": "Blocked Out"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 154.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0_HS_1_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.14,
   "hfov": 29.98
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": 59.07,
   "hfov": 10.4,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0_HS_2_0.png",
      "width": 185,
      "class": "ImageResourceLevel",
      "height": 180
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_4ED411DD_5CE0_2EAD_41BD_DB0F40729E58, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4D010A77_5CE0_327D_41B4_360EA3D846D6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 59.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593B9ADE_5540_7E9A_41C3_A4E5B6DA992D_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.31,
   "hfov": 10.4
  }
 ],
 "rollOverDisplay": false
},
{
 "shadow": false,
 "id": "image_uid47FB8E43_5D20_7595_41C9_D54770D0AE09_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "url": "media/photo_4FF5871A_5CE0_33B7_41B0_B0A41E472AC5.jpg",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "class": "Image",
 "borderSize": 0,
 "minWidth": 0,
 "paddingRight": 0,
 "height": "39%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image29074"
 }
},
{
 "shadow": false,
 "id": "htmlText_4E4B9C93_5CE0_76B5_41CF_ED5D3B546A28",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://magazine.washington.edu/feature/what-began-as-a-protest-ends-in-common-ground/\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><U>Blocked Out</U></A></SPAN> is an art installation created in 2005 by two UW students and dedicated to those who have been historically excluded and exploited in society. At the heart of the piece is a granite block with bare footprints on top, resting on a circle of broken stones. Short, grass-covered berms emanate out from the block and encounter a flagstone path and semi-circular stone wall with a bench that resembles an ear when viewed from above. Blocked Out contains many elements of symbolism that are interpreted differently by individuals. However, it\u2019s widely accepted as a monument to those whose voices that have not historically been heard and to symbolize the listening ear of the UW</SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText10869"
 },
 "height": "60%"
},
{
 "shadow": false,
 "id": "htmlText_4ED7D1DD_5CE0_2EAD_41D3_ABC7D82426C3",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Mary Gates Hall is the UW\u2019s center for undergraduate learning. It\u2019s a place where students from diverse backgrounds come to learn, study, celebrate their accomplishments and plan their futures. It\u2019s home to resources such as the <SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"http://depts.washington.edu/uwdrs/\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><U>Career &amp; Internship Center</U></A></SPAN>, the <SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://expd.uw.edu/\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><U>Center for Experiential Learning and Diversity, Disability Resources for Students, First Year Programs</U></A></SPAN> and the <SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://www.washington.edu/omad/\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><U>Office of Minority Affairs and Diversity</U></A></SPAN> (OMA&amp;D).</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">The OMA&amp;D has its roots in student-led activism and society\u2019s call for equity and change and celebrated its 50th anniversary in 2018. OMA&amp;D works to advance diversity, equity and inclusion at the UW and provides programs and support for students, including community building, class selection, major planning, career exploration and connections to research and internship opportunities. OMA&amp;D programs, such as the <SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://depts.washington.edu/omadcs/eop/\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><U>Educational Opportunity Program, TRiO, College Assistance Migrant Program </U></A></SPAN>and the <SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://depts.washington.edu/omadcs/champions/\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><U>Champions Program</U></A></SPAN>, help students make the most of their Husky Experience.</SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText7499"
 },
 "height": "100%"
},
{
 "shadow": false,
 "id": "image_uid47F90E45_5D20_759D_41CE_C0747D17A14D_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "url": "media/photo_4EE8DDA5_5D20_169D_41B2_40663694360A.jpeg",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "class": "Image",
 "borderSize": 0,
 "minWidth": 0,
 "paddingRight": 0,
 "height": "44%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image29075"
 }
},
{
 "shadow": false,
 "id": "htmlText_4EA5A38B_5D20_1295_41D1_1FA980FD997B",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">The Husky Union Building, or HUB, as it\u2019s usually called, is a center of activity on campus. The <SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://huskylink.washington.edu/\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><U>UW\u2019s student organizations</U></A></SPAN> are coordinated here, and there are over 1,000 to choose from. From academic interests to hobbies to silly ways to reduce stress, you can find your community here. If you can\u2019t find an existing group that interests you, you can always start your own.</SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">The HUB is also home to the Husky Den food court, an extension of the University Bookstore, the ASUW Bike Shop, the Commuter &amp; Transfer Commons, the Q Center, Student Veteran Life, the Greek Life office and other resources for students. There\u2019s HUB Games, which features activities like Esports, table tennis, pool and even a bowling alley.</SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText15105"
 },
 "height": "55%"
},
{
 "shadow": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "backgroundOpacity": 0,
 "width": "14.22%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "minHeight": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "20%",
 "class": "IconButton",
 "borderSize": 0,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "paddingRight": 0,
 "bottom": "20%",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "cursor": "hand",
 "data": {
  "name": "IconButton <"
 }
},
{
 "shadow": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "backgroundOpacity": 0,
 "width": "14.22%",
 "right": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "minHeight": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "20%",
 "class": "IconButton",
 "borderSize": 0,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "paddingRight": 0,
 "bottom": "20%",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "cursor": "hand",
 "data": {
  "name": "IconButton >"
 }
},
{
 "shadow": false,
 "id": "htmlText_4D8CA09E_5CE0_2EAF_41D4_D8BB938F5AD4",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">At the intersection of 40th and Brooklyn, you\u2019ll find some gems of the UW. The UW has the nation\u2019s largest stand-alone cultural center \u2014 The Samuel E. Kelly Ethnic Cultural Center (ECC) \u2014 and it stands on one corner. Opposite the ECC is the<SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://depts.washington.edu/ecc/reservations/ecc-theatre/\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><U> Kelly ECC Theatre</U></A></SPAN>, which opened in 1972, offering an avenue for increased awareness of all cultures through the performing arts. It\u2019s approximately 5,000 square feet and provides an intimate setting with a capacity of 161 seats for theatrical, arts, music, spoken word, conferences and a host of artistic, cultural and social events. Next door to the Kelly ECC Theatre is the Instructional Center (IC). As the academic arm of the Office of Minority Affairs and Diversity (OMA&amp;D), the IC provides tutoring, writing and test prep assistance, study skills help and mentoring. </SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText5446"
 },
 "height": "100%"
},
{
 "items": [
  {
   "yaw": -179.88,
   "hfov": 21.5,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0_HS_0_0.png",
      "width": 399,
      "class": "ImageResourceLevel",
      "height": 134
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4E9179CE_58FC_AE2C_41B2_82471124C477",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0_HS_0_0_0_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.75,
   "hfov": 21.5
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": 105.39,
   "hfov": 34.95,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0_HS_1_0.png",
      "width": 628,
      "class": "ImageResourceLevel",
      "height": 651
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4EE524A8_58FD_A616_41C6_3A594B7802A1",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.74,
   "hfov": 34.95
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": 105.5,
   "hfov": 21.5,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0_HS_2_0.png",
      "width": 399,
      "class": "ImageResourceLevel",
      "height": 134
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5A09D17D_5540_4B9E_41C7_064539FB74FB, this.camera_46A8E002_5D20_6D94_41CC_3AF9E9C24F92); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4F3A9D43_58FC_E614_41CB_DC17C631E342",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0_HS_2_0_0_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.76,
   "hfov": 21.5
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": -70.48,
   "hfov": 36.55,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0_HS_3_0.png",
      "width": 660,
      "class": "ImageResourceLevel",
      "height": 393
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4F7F9844_58FD_EE1D_41C5_428EBB3517F9",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -70.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0_HS_3_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.36,
   "hfov": 36.55
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": -69.85,
   "hfov": 21.5,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0_HS_4_0.png",
      "width": 399,
      "class": "ImageResourceLevel",
      "height": 134
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_59265448_5543_C9E7_41C0_2901F85C8C3A, this.camera_46DB501E_5D20_6DAF_41CA_91A2C9747DDD); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4EDE400A_58C3_9E14_41CB_4D155D2A1C67",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0_HS_4_0_0_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.75,
   "hfov": 21.5
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": -179.99,
   "hfov": 35,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0_HS_5_0.png",
      "width": 628,
      "class": "ImageResourceLevel",
      "height": 700
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4FA63A1D_58C4_A22F_4197_5F7306AF4AD6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.98,
   "hfov": 35
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": -72.53,
   "hfov": 69.62,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0_HS_6_0.png",
      "width": 1423,
      "class": "ImageResourceLevel",
      "height": 551
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.33,
   "roll": 0,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupMedia(this.window_48DF1FF8_59CB_6D42_4192_5CACF9EF6424, this.album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0, this.playList_53004A8F_5CE0_32AD_41B2_E3500D1E47BE, '90%', '90%', false, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_48ADE1C7_59CB_954E_41C6_582621747D77",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0_HS_6_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 77
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.33,
   "hfov": 69.62
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": -47.58,
   "hfov": 6.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0_HS_7_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 115
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_4B0ADA6D_59C5_9742_41BB_4E4032CDC7A4, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4BA988B3_59CA_93C5_41A6_BA1CC3BA5085",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -47.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_5931D833_5543_F9A9_41C4_2721D9E92100_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.44,
   "hfov": 6.43
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": -140.62,
   "hfov": 16.21,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0_HS_0_0.png",
      "width": 290,
      "class": "ImageResourceLevel",
      "height": 242
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.26,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5931D833_5543_F9A9_41C4_2721D9E92100, this.camera_46B8FFE2_5D20_7297_41D4_53B0B5E50B3B); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4F7A1921_58C4_AE14_41D1_BB4420B92702",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -140.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.26,
   "hfov": 16.21
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": 40.37,
   "hfov": 27.96,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0_HS_1_0.png",
      "width": 511,
      "class": "ImageResourceLevel",
      "height": 576
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4FAC585C_58C4_AE2C_41D3_5CB2E4A583B3",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 40.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.64,
   "hfov": 27.96
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": 40.14,
   "hfov": 16.21,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0_HS_2_0.png",
      "width": 290,
      "class": "ImageResourceLevel",
      "height": 242
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.26,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4FCA471C_58C5_A22D_41D2_25C68E34623C",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 40.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.26,
   "hfov": 16.21
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": -139.87,
   "hfov": 28.04,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0_HS_3_0.png",
      "width": 511,
      "class": "ImageResourceLevel",
      "height": 511
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4F81E729_58C3_6214_41C2_62FFC7E56D92",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -139.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.86,
   "hfov": 28.04
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": 85.42,
   "hfov": 9.8,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0_HS_7_0.png",
      "width": 175,
      "class": "ImageResourceLevel",
      "height": 158
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.1,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4A858799_5D20_72B5_41C9_78CF529180C6",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0_HS_7_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.1,
   "hfov": 9.8
  }
 ],
 "rollOverDisplay": false
},
{
 "blending": 0,
 "class": "VideoPanoramaOverlay",
 "id": "overlay_4A36AD3D_59FD_72C2_41C8_B2C329622081",
 "roll": -2.83,
 "loop": false,
 "image": {
  "levels": [
   {
    "url": "media/overlay_4A36AD3D_59FD_72C2_41C8_B2C329622081_t.jpg",
    "width": 2,
    "class": "ImageResourceLevel",
    "height": 2
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.53,
 "useHandCursor": true,
 "videoVisibleOnStop": false,
 "yaw": 84.23,
 "vfov": 16.36,
 "rotationY": -42.59,
 "rotationX": 6.01,
 "click": "if(this.overlay_4A36AD3D_59FD_72C2_41C8_B2C329622081.get('state') != 'playing'){ this.overlay_4A36AD3D_59FD_72C2_41C8_B2C329622081.play(); } else { this.overlay_4A36AD3D_59FD_72C2_41C8_B2C329622081.stop(); }",
 "data": {
  "label": "Video"
 },
 "autoplay": false,
 "hfov": 28.13,
 "distance": 50,
 "enabledInCardboard": true,
 "stateChange": "if(this.overlay_4A36AD3D_59FD_72C2_41C8_B2C329622081.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_4A36AD3D_59FD_72C2_41C8_B2C329622081', [this.overlay_4A36AD3D_59FD_72C2_41C8_B2C329622081]); } else { this.resumeGlobalAudios('overlay_4A36AD3D_59FD_72C2_41C8_B2C329622081'); }",
 "video": {
  "mp4Url": "media/video_79203BAD_5B45_626F_41CC_A72479E40A56.mp4",
  "width": 1280,
  "class": "VideoResource",
  "height": 720
 }
},
{
 "items": [
  {
   "yaw": 65.57,
   "hfov": 11.8,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0_HS_4_0.png",
      "width": 210,
      "class": "ImageResourceLevel",
      "height": 248
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_4ADFE0DF_59CA_B37E_419E_2B8A80057616, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4ADCBA4F_59CB_775E_41C9_D2F1A9D77229",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 65.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.41,
   "hfov": 11.8
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": -55.39,
   "hfov": 17.54,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0_HS_5_0.png",
      "width": 314,
      "class": "ImageResourceLevel",
      "height": 279
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4AC54B41_59CA_9542_41D5_195AD549F5A5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0_HS_5_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.3,
   "hfov": 17.54
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": -53.79,
   "hfov": 72.26,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0_HS_6_0.png",
      "width": 1296,
      "class": "ImageResourceLevel",
      "height": 949
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4DE80509_59CB_92C2_41C8_BF48EC90562A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_59265448_5543_C9E7_41C0_2901F85C8C3A_0_HS_6_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.15,
   "hfov": 72.26
  }
 ],
 "rollOverDisplay": true
},
{
 "shadow": false,
 "id": "image_uid47C20E31_5D20_75F5_41D2_DF8D60085483_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "url": "media/photo_4A395F67_5D20_139D_41D5_E346A84AC666.jpeg",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "class": "Image",
 "borderSize": 0,
 "minWidth": 0,
 "paddingRight": 0,
 "height": "45%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image29071"
 }
},
{
 "shadow": false,
 "id": "htmlText_4B049A73_59C5_9746_41CC_AE31BB0B4ED0",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Denny Hall is the oldest building on the current UW campus. The UW was first established in 1861 in downtown Seattle. However, as the UW, as well as the city around it, continued to grow, it became obvious that the location wasn\u2019t going to work. When the campus was moved to its current location in 1895, it was moved into Denny Hall. Back then, Denny Hall had everything \u2014 the library, lecture halls, administrative offices and even a gym in the basement. As the UW expanded, more buildings were added to campus, of course, and now Denny is primarily classrooms and faculty offices.</SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText8643"
 },
 "height": "54%"
},
{
 "items": [
  {
   "yaw": 87.8,
   "hfov": 22.97,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0_HS_0_0.png",
      "width": 412,
      "class": "ImageResourceLevel",
      "height": 377
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_59019EC7_5543_D6EA_41B5_F8DDC85FF6B9, this.camera_46649F77_5D20_727C_41C7_8720BC0AD2E1); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4FD44DB7_58CC_E67B_4195_E897914F2E05",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.47,
   "hfov": 22.97
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": 150.61,
   "hfov": 22.97,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0_HS_1_0.png",
      "width": 412,
      "class": "ImageResourceLevel",
      "height": 377
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4FB4CEAA_58CF_E215_41CF_F3D1DF2386D5",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.47,
   "hfov": 22.97
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": 88.94,
   "hfov": 39.56,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0_HS_2_0.png",
      "width": 713,
      "class": "ImageResourceLevel",
      "height": 871
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.09,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_403C9774_58CD_62FD_4176_357665585D7E",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.09,
   "hfov": 39.56
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": 148.35,
   "hfov": 54.6,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0_HS_3_0.png",
      "width": 996,
      "class": "ImageResourceLevel",
      "height": 951
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_402CAE1F_58C4_A22B_41D0_416B78F68526",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 148.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.86,
   "hfov": 54.6
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": -58.83,
   "hfov": 11.01,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0_HS_4_0.png",
      "width": 196,
      "class": "ImageResourceLevel",
      "height": 204
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.openLink('https://www.washington.edu/boundless/', '_blank')"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4AF40BC5_59C6_F542_41D2_95D522E3D4B2",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.83,
   "image": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0_HS_4_0_0_map.gif",
      "width": 15,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.77,
   "hfov": 11.01
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": 34.97,
   "hfov": 7.94,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0_HS_5_0.png",
      "width": 141,
      "class": "ImageResourceLevel",
      "height": 147
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_4DD18A82_59DA_97C8_41C7_C866A0DE7EA3, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4AB1416C_59C5_7542_41C5_ECB784DAB6CF",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 34.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_590778C9_5540_3AE6_41D0_CB2DBADB8854_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.36,
   "hfov": 7.94
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "yaw": -134.41,
   "hfov": 21.97,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0_HS_0_0.png",
      "width": 399,
      "class": "ImageResourceLevel",
      "height": 134
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4EB28615_5CE0_15BD_41D1_379BA45E159A",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0_HS_0_0_0_map.gif",
      "width": 47,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.49,
   "hfov": 21.97
  }
 ],
 "rollOverDisplay": false
},
{
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0_HS_1_0.png",
      "width": 426,
      "class": "ImageResourceLevel",
      "height": 377
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.64,
   "yaw": -133.96,
   "hfov": 23.69,
   "distance": 50
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4E18F6F7_5CE0_727D_41D1_732E5682014C",
 "data": {
  "label": "     Home"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -133.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0_HS_1_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.64,
   "hfov": 23.69
  }
 ],
 "rollOverDisplay": true
},
{
 "items": [
  {
   "yaw": 137.92,
   "hfov": 13.05,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0_HS_2_0.png",
      "width": 237,
      "class": "ImageResourceLevel",
      "height": 210
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_4E494C92_5CE0_76B7_41C4_22751CB903B5, null, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "id": "overlay_4E7E6CE0_5CE0_F693_41C1_1781CA3A3250",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.92,
   "image": {
    "levels": [
     {
      "url": "media/panorama_593F64FF_5540_4A9A_41D5_070E1CB9D277_0_HS_2_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.37,
   "hfov": 13.05
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_46ED1075_5D20_6E7D_41D1_7BC76EA8405D",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "yawDelta": 18.5,
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_4686EFB8_5D20_72F3_41C1_7FF7F640B251",
 "restartMovementOnUserInteraction": false
},
{
 "shadow": false,
 "id": "image_uid47F46E47_5D20_759D_418E_499D5D68F300_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "url": "media/photo_4816EB61_5D20_1395_41AB_B88BE20D610C.jpeg",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "class": "Image",
 "borderSize": 0,
 "minWidth": 0,
 "paddingRight": 0,
 "height": "50%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image29077"
 }
},
{
 "shadow": false,
 "id": "htmlText_49514E92_5D20_72B7_41C8_34A1CF88AF0B",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">At the south end of Rainier Vista sits the Montlake Triangle, from which there is easy access to the Link Lightrail station and Husky Stadium. The Link Lightrail station runs all the way to Sea-Tac airport, with stops in different neighborhoods and downtown along the way. Access to the Link and other public transportation is included in the student fees, making it easy and convenient for students to get to a job or internship, or to just explore the city. </SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">\ufeffHusky Stadium is home to the UW football program and known as the loudest college football stadium in the nation, reaching 133.6 decibels during a game against Nebraska in 1992. Game days are popular events for students and non-students alike. </SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Also at this end of campus is the Intramural Activities (IMA) building, which is the primary fitness center on campus. Students and staff have access to workout machines and weights, a pool, indoor track and courts for basketball, tennis, racquetball and beach volleyball. There are dance and yoga studios, and even a climbing wall. The IMA also hosts over 42 club sports and intramurals to fit every level.</SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText19578"
 },
 "height": "50%"
},
{
 "shadow": false,
 "fontFamily": "Arial",
 "pressedIconWidth": 30,
 "data": {
  "name": "Button Settings HS"
 },
 "textDecoration": "none",
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "backgroundOpacity": 1,
 "width": 60,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 30,
 "iconWidth": 30,
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "rollOverIconWidth": 30,
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "layout": "horizontal",
 "rollOverIconHeight": 30,
 "paddingRight": 0,
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "height": 60,
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "shadow": false,
 "fontFamily": "Arial",
 "data": {
  "name": "Button settings VR"
 },
 "textDecoration": "none",
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "backgroundOpacity": 1,
 "width": 60,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 30,
 "iconWidth": 30,
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "layout": "horizontal",
 "paddingRight": 0,
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "height": 60,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "shadow": false,
 "id": "IconButton_7E077D24_5BCC_A61D_41D0_20D1CF782A82",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7E077D24_5BCC_A61D_41D0_20D1CF782A82_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_7E077D24_5BCC_A61D_41D0_20D1CF782A82_pressed.png",
 "height": 32,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7E077D24_5BCC_A61D_41D0_20D1CF782A82.png",
 "cursor": "hand",
 "data": {
  "name": "Button34594"
 }
},
{
 "shadow": false,
 "id": "IconButton_7E079D25_5BCC_A61F_4192_0A3EDCB5D50A",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7E079D25_5BCC_A61F_4192_0A3EDCB5D50A_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_7E079D25_5BCC_A61F_4192_0A3EDCB5D50A_pressed.png",
 "height": 40,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7E079D25_5BCC_A61F_4192_0A3EDCB5D50A.png",
 "cursor": "hand",
 "data": {
  "name": "Button34603"
 }
},
{
 "shadow": false,
 "id": "IconButton_7E07FD25_5BCC_A61F_41B4_7F412F91B2F0",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7E07FD25_5BCC_A61F_41B4_7F412F91B2F0_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_7E07FD25_5BCC_A61F_41B4_7F412F91B2F0_pressed.png",
 "height": 32,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7E07FD25_5BCC_A61F_41B4_7F412F91B2F0.png",
 "cursor": "hand",
 "data": {
  "name": "Button34601"
 }
},
{
 "shadow": false,
 "id": "IconButton_7E071D24_5BCC_A61D_4151_907F9A50DBE6",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7E071D24_5BCC_A61D_4151_907F9A50DBE6_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_7E071D24_5BCC_A61D_4151_907F9A50DBE6_pressed.png",
 "height": 40,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7E071D24_5BCC_A61D_4151_907F9A50DBE6.png",
 "cursor": "hand",
 "data": {
  "name": "Button34596"
 }
},
{
 "shadow": false,
 "id": "IconButton_7E07ED25_5BCC_A61F_41CF_FEB2631C4B96",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7E07ED25_5BCC_A61F_41CF_FEB2631C4B96_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_7E07ED25_5BCC_A61F_41CF_FEB2631C4B96_pressed.png",
 "height": 32,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7E07ED25_5BCC_A61F_41CF_FEB2631C4B96.png",
 "cursor": "hand",
 "data": {
  "name": "Button34602"
 }
},
{
 "shadow": false,
 "id": "IconButton_7E07DD25_5BCC_A61F_41AC_38CC77C26695",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7E07DD25_5BCC_A61F_41AC_38CC77C26695_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_7E07DD25_5BCC_A61F_41AC_38CC77C26695_pressed.png",
 "height": 32,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7E07DD25_5BCC_A61F_41AC_38CC77C26695.png",
 "cursor": "hand",
 "data": {
  "name": "Button34599"
 }
},
{
 "shadow": false,
 "id": "IconButton_7E070D25_5BCC_A61F_41B0_A10DF561C7FA",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7E070D25_5BCC_A61F_41B0_A10DF561C7FA_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_7E070D25_5BCC_A61F_41B0_A10DF561C7FA_pressed.png",
 "height": 32,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7E070D25_5BCC_A61F_41B0_A10DF561C7FA.png",
 "cursor": "hand",
 "data": {
  "name": "Button34597"
 }
},
{
 "shadow": false,
 "fontFamily": "Arial",
 "pressedIconWidth": 30,
 "data": {
  "name": "Button Settings Gyro"
 },
 "textDecoration": "none",
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "backgroundOpacity": 1,
 "width": 60,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 30,
 "iconWidth": 30,
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "rollOverIconWidth": 30,
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "layout": "horizontal",
 "rollOverIconHeight": 30,
 "paddingRight": 0,
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "height": 60,
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "shadow": false,
 "id": "IconButton_7E07BD25_5BCC_A61F_41C7_1F10790C3B5A",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7E07BD25_5BCC_A61F_41C7_1F10790C3B5A_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_7E07BD25_5BCC_A61F_41C7_1F10790C3B5A_pressed.png",
 "height": 32,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7E07BD25_5BCC_A61F_41C7_1F10790C3B5A.png",
 "cursor": "hand",
 "data": {
  "name": "Button34605"
 }
},
{
 "class": "PhotoPlayList",
 "id": "album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0_AlbumPlayList",
 "items": [
  {
   "media": "this.album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "targetPosition": {
     "x": "0.47",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.56"
    },
    "easing": "linear",
    "duration": 5000,
    "scaleMode": "fit_outside"
   }
  }
 ]
},
{
 "shadow": false,
 "children": [
  "this.viewer_uid47C43E2F_5D20_75ED_4185_8DF794843E38",
  {
   "shadow": false,
   "children": [
    "this.htmltext_47C56E30_5D20_75F3_41D2_06D5B4511700"
   ],
   "height": "30%",
   "scrollBarWidth": 7,
   "left": 0,
   "backgroundOpacity": 0.3,
   "layout": "vertical",
   "right": 0,
   "borderRadius": 0,
   "paddingLeft": 0,
   "paddingBottom": 0,
   "overflow": "scroll",
   "minHeight": 20,
   "propagateClick": false,
   "verticalAlign": "bottom",
   "backgroundColorRatios": [],
   "class": "Container",
   "paddingRight": 0,
   "borderSize": 0,
   "minWidth": 20,
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "bottom": 0,
   "backgroundColorDirection": "vertical",
   "gap": 10,
   "scrollBarMargin": 2,
   "backgroundColor": [],
   "contentOpaque": true,
   "paddingTop": 0,
   "horizontalAlign": "left",
   "scrollBarOpacity": 0.5,
   "data": {
    "name": "Container29067"
   }
  },
  "this.component_47C58E31_5D20_75F5_41B4_8DE7934BBAA3",
  "this.component_47C5AE31_5D20_75F5_41D2_03FB8FBAF73A"
 ],
 "height": "100%",
 "id": "container_47C48E2F_5D20_75ED_41C5_1DD2F052DB21",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 20,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [],
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [],
 "contentOpaque": false,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container29066"
 }
},
{
 "shadow": false,
 "id": "image_uid47F56E48_5D20_7593_41CC_7883F6668290_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "url": "media/photo_4B03E559_5D20_37B5_41D5_E1F2EB5DE5AB.jpg",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "class": "Image",
 "borderSize": 0,
 "minWidth": 0,
 "paddingRight": 0,
 "height": "46%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image29078"
 }
},
{
 "shadow": false,
 "id": "htmlText_493D6D30_5D20_17F3_41D2_1E268645AAEE",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://www.washington.edu/ceremony/tradition/symbols-meanings/four-columns/\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><U>The four columns</U></A></SPAN> in Sylvan Grove were part of the UW\u2019s first building constructed in 1861 in downtown Seattle and hold special meaning for the UW. When the UW moved to its current location, only the cedar columns survived demolition. After a few relocations around campus, they finally settled in their current Sylvan Grove location in 1921. Soon after that, a former head of the History Department and one of the UW\u2019s first graduates, Edmond S. Meany, gave each of the columns a name: Loyalty, Industry, Faith and Efficiency, or \u201cLIFE.\u201d Now, as part of their orientation process, students consider their future at the UW and touch the column that represents a value that resonates with them. Then, at graduation, they touch the columns one more time to close out their academic journey. Sylvan Grove is a popular place for all kinds of ceremonies on campus, including weddings.</SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText21135"
 },
 "height": "53%"
},
{
 "shadow": false,
 "id": "image_uid47F70E46_5D20_759F_41D2_25ED5AA8963B_0",
 "backgroundOpacity": 0,
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "url": "media/photo_49F1055A_5D20_17B7_41C4_7627E392B862.jpeg",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "class": "Image",
 "borderSize": 0,
 "minWidth": 0,
 "paddingRight": 0,
 "height": "45%",
 "horizontalAlign": "center",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image29076"
 }
},
{
 "shadow": false,
 "id": "htmlText_492DA248_5D20_2D93_4198_C7B9C8B43453",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingBottom": 10,
 "minHeight": 0,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Drumheller Fountain is the centerpiece of Rainier Vista, perfectly framed by rose gardens, a long walkway of trees and academic buildings and Mount Rainier in the distance. Traditionally referred to as \u201cFrosh Pond,\u201d it got its nickname from an unsanctioned early tradition in which older students would throw first-year students into the fountain. Fortunately, the practice is out of fashion (and against policy), but the name is still heard from time to time. </SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">The fountain holds approximately one million gallons of water, which is used for several university operations, including storing water for the <SPAN STYLE=\"color:#f3a22e;\"><A HREF=\"https://green.uw.edu/blog/2015-01/tour-beating-heart-uws-facilities-services\" TARGET=\"_blank\" STYLE=\"text-decoration:none; color:inherit;\"><U>campus power plant</U></A></SPAN>. The fountain is a popular place for local families of ducks, and facilities brings out a ramp every year so the ducklings don\u2019t get stuck. Though it was originally ignored in the planning of the UW, Rainier Vista is arguably the best view on campus on a clear day. As a protected airspace, no one can build anything that may obstruct the view of Mount Rainier from Red Square.</SPAN></DIV></div>",
 "paddingTop": 10,
 "data": {
  "name": "HTMLText16698"
 },
 "height": "54%"
},
{
 "shadow": false,
 "children": [
  "this.WebFrame_7E221EC0_5BCC_A214_41C3_D94213EF169B",
  "this.IconButton_7119DA98_5BCD_6235_41D5_7EAD0C774CC4"
 ],
 "height": "54.317%",
 "id": "Container_71E1A319_5BC3_6234_41C8_58FB71D80EA6",
 "backgroundOpacity": 0.3,
 "width": "57.663%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "right": "19.85%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bottom": "20.55%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container109807"
 }
},
{
 "shadow": false,
 "children": [
  "this.Image_7E4C0E92_5BC4_A234_41BA_CA8494C76D1E",
  "this.HTMLText_7E0AF8A3_5BFD_AE1B_41AF_3DACA1A3168A",
  "this.IconButton_71E66DF4_5BFD_61FC_41D5_CE9D31E7F496"
 ],
 "height": "59.344%",
 "id": "Container_7E5165EF_5BC5_61EC_41C9_B123C6B3E096",
 "left": "29.01%",
 "backgroundOpacity": 0.3,
 "width": "41.194%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "18.02%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container104916"
 }
},
{
 "shadow": false,
 "maxHeight": 100,
 "maxWidth": 488,
 "id": "Image_7FF8DF8A_5B43_A215_419E_79E35DE6FCB8",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "18.577%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "url": "skin/Image_7FF8DF8A_5B43_A215_419E_79E35DE6FCB8.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0%",
 "class": "Image",
 "borderSize": 0,
 "minWidth": 1,
 "paddingRight": 0,
 "click": "this.openLink('https://admit.washington.edu/', '_blank')",
 "height": "100%",
 "paddingTop": 0,
 "horizontalAlign": "center",
 "cursor": "hand",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image93639"
 }
},
{
 "shadow": false,
 "children": [
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
  "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
  "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
  "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
  "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "backgroundOpacity": 0,
 "width": 1199,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingBottom": 0,
 "minHeight": 1,
 "propagateClick": true,
 "verticalAlign": "middle",
 "top": "0%",
 "class": "Container",
 "paddingRight": 15,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "scrollBarMargin": 2,
 "height": 60,
 "contentOpaque": false,
 "paddingTop": 0,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-button set container"
 }
},
{
 "shadow": false,
 "children": [
  "this.IconButton_7E07DD25_5BCC_A61F_41AC_38CC77C26695",
  "this.IconButton_7E07CD25_5BCC_A61F_4178_F6EBFB1B932D",
  "this.IconButton_7E07FD25_5BCC_A61F_41B4_7F412F91B2F0"
 ],
 "id": "Container_7E073D25_5BCC_A61F_41C7_308B6A8B4D36",
 "backgroundOpacity": 0,
 "width": 40,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "hidden",
 "minHeight": 20,
 "propagateClick": false,
 "verticalAlign": "middle",
 "class": "Container",
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "gap": 4,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "height": "100%",
 "data": {
  "name": "Container34598"
 }
},
{
 "shadow": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "height": 44,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
 "cursor": "hand",
 "data": {
  "name": "IconButton Info"
 }
},
{
 "shadow": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "height": 44,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8.png",
 "cursor": "hand",
 "data": {
  "name": "IconButton Thumblist"
 }
},
{
 "shadow": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "height": 44,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "cursor": "hand",
 "data": {
  "name": "IconButton Location"
 }
},
{
 "shadow": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "height": 44,
 "paddingTop": 0,
 "visible": false,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA.png",
 "cursor": "hand",
 "data": {
  "name": "IconButton Photoalbum"
 }
},
{
 "shadow": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B",
 "backgroundOpacity": 0,
 "width": 44,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "height": 44,
 "paddingTop": 0,
 "visible": false,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7B206C51_3AA0_A251_41A3_B3DB657BC52B.png",
 "cursor": "hand",
 "data": {
  "name": "IconButton Floorplan"
 }
},
{
 "shadow": false,
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93",
 "backgroundOpacity": 0,
 "width": 44,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 44,
 "paddingTop": 0,
 "visible": false,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93.png",
 "cursor": "hand",
 "data": {
  "name": "IconButton Video"
 }
},
{
 "shadow": true,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "right": "15%",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowHorizontalLength": 0,
 "top": "10%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "shadow": false,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "backgroundOpacity": 0,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "right": "15%",
 "overflow": "visible",
 "paddingBottom": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": "10%",
 "class": "Container",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "paddingRight": 20,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 20,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 }
},
{
 "shadow": true,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "layout": "absolute",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "right": "15%",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowHorizontalLength": 0,
 "top": "10%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "shadow": true,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "backgroundOpacity": 1,
 "layout": "horizontal",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "right": "15%",
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowHorizontalLength": 0,
 "top": "10%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "horizontalAlign": "left",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "shadow": false,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "backgroundOpacity": 0,
 "layout": "vertical",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "right": "15%",
 "overflow": "visible",
 "paddingBottom": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": "10%",
 "class": "Container",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "paddingRight": 20,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "bottom": "80%",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 20,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 }
},
{
 "shadow": true,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "layout": "absolute",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "right": "15%",
 "overflow": "visible",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowHorizontalLength": 0,
 "top": "10%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "shadow": true,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "right": "15%",
 "overflow": "visible",
 "paddingBottom": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bottom": "10%",
 "shadowHorizontalLength": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "contentOpaque": false,
 "paddingTop": 0,
 "shadowVerticalLength": 0,
 "horizontalAlign": "center",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "buttonPause": "this.IconButton_7E07CD25_5BCC_A61F_4178_F6EBFB1B932D",
 "viewerArea": "this.viewer_uid47C43E2F_5D20_75ED_4185_8DF794843E38",
 "class": "PhotoAlbumPlayer",
 "id": "viewer_uid47C43E2F_5D20_75ED_4185_8DF794843E38PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "buttonRestart": "this.IconButton_7E076D24_5BCC_A61D_41D0_0439B2EE6D64",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid47C43E2F_5D20_75ED_4185_8DF794843E38",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minHeight": 50,
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "shadow": false,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipFontWeight": "normal",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "paddingLeft": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea29065"
 }
},
{
 "shadow": false,
 "id": "htmltext_47C56E30_5D20_75F3_41D2_06D5B4511700",
 "backgroundOpacity": 0.7,
 "width": "100%",
 "scrollBarWidth": 10,
 "paddingBottom": 5,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "class": "HTMLText",
 "paddingRight": 10,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "minWidth": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "html": "",
 "paddingTop": 5,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "data": {
  "name": "HTMLText29068"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "id": "component_47C58E31_5D20_75F5_41B4_8DE7934BBAA3",
 "left": 10,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "45%",
 "class": "IconButton",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "transparencyActive": false,
 "minWidth": 0,
 "mode": "push",
 "paddingRight": 0,
 "borderSize": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0_AlbumPlayList, -1)",
 "paddingTop": 0,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "horizontalAlign": "center",
 "iconURL": "skin/album_left.png",
 "cursor": "hand",
 "data": {
  "name": "IconButton29069"
 }
},
{
 "shadow": false,
 "id": "component_47C5AE31_5D20_75F5_41D2_03FB8FBAF73A",
 "backgroundOpacity": 0,
 "right": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "45%",
 "class": "IconButton",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "transparencyActive": false,
 "minWidth": 0,
 "mode": "push",
 "paddingRight": 0,
 "borderSize": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_4B85B319_59CA_B6C2_41CF_8E3B239A33C0_AlbumPlayList, 1)",
 "paddingTop": 0,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "horizontalAlign": "center",
 "iconURL": "skin/album_right.png",
 "cursor": "hand",
 "data": {
  "name": "IconButton29070"
 }
},
{
 "shadow": false,
 "insetBorder": false,
 "id": "WebFrame_7E221EC0_5BCC_A214_41C3_D94213EF169B",
 "left": "0%",
 "backgroundOpacity": 1,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "url": "//www.youtube.com/embed/wnUto6yuloU?v=wnUto6yuloU",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "class": "WebFrame",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "data": {
  "name": "WebFrame109848"
 },
 "height": "100%"
},
{
 "shadow": false,
 "maxHeight": 256,
 "maxWidth": 256,
 "id": "IconButton_7119DA98_5BCD_6235_41D5_7EAD0C774CC4",
 "backgroundOpacity": 0,
 "width": 72,
 "right": "0%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_7119DA98_5BCD_6235_41D5_7EAD0C774CC4_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0%",
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_73FA6E3F_5BC3_E26B_41C1_7C32EA126DDB, false, 0, null, null, false)",
 "height": 67,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7119DA98_5BCD_6235_41D5_7EAD0C774CC4.png",
 "cursor": "hand",
 "data": {
  "name": "IconButton110980"
 }
},
{
 "shadow": false,
 "maxHeight": 550,
 "maxWidth": 825,
 "id": "Image_7E4C0E92_5BC4_A234_41BA_CA8494C76D1E",
 "left": "9.55%",
 "backgroundOpacity": 0,
 "width": "80.82%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "url": "skin/Image_7E4C0E92_5BC4_A234_41BA_CA8494C76D1E.jpeg",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "2.76%",
 "class": "Image",
 "borderSize": 0,
 "minWidth": 1,
 "paddingRight": 0,
 "height": "64.825%",
 "paddingTop": 0,
 "horizontalAlign": "center",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image104956"
 }
},
{
 "shadow": false,
 "id": "HTMLText_7E0AF8A3_5BFD_AE1B_41AF_3DACA1A3168A",
 "left": "14.2%",
 "backgroundOpacity": 0,
 "width": "70.278%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 20,
 "paddingBottom": 20,
 "minHeight": 1,
 "propagateClick": false,
 "class": "HTMLText",
 "borderSize": 0,
 "minWidth": 1,
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bottom": "0.15%",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:53px;\"><B>Information</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">At the University of Washington, we aim to be the greatest public university in the world \u2014 as measured by our impact. Join us to unleash potential, create beauty and spark action. Together, we can create a world of good.</SPAN></SPAN></DIV></div>",
 "paddingTop": 20,
 "data": {
  "name": "HTMLText53815"
 },
 "height": "31.125%"
},
{
 "shadow": false,
 "maxHeight": 256,
 "maxWidth": 256,
 "id": "IconButton_71E66DF4_5BFD_61FC_41D5_CE9D31E7F496",
 "backgroundOpacity": 0,
 "width": 62,
 "right": "0.44%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_71E66DF4_5BFD_61FC_41D5_CE9D31E7F496_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0%",
 "class": "IconButton",
 "paddingRight": 0,
 "borderSize": 0,
 "transparencyActive": false,
 "minWidth": 1,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_70AE2E3E_5BC5_E26D_41B4_148A9702E525, false, 0, null, null, false)",
 "height": 61,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_71E66DF4_5BFD_61FC_41D5_CE9D31E7F496.png",
 "cursor": "hand",
 "data": {
  "name": "IconButton106201"
 }
},
{
 "shadow": false,
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "popUpShadowBlurRadius": 6,
 "arrowColor": "#FFFFFF",
 "textDecoration": "none",
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "popUpShadowColor": "#000000",
 "backgroundOpacity": 1,
 "width": 135,
 "popUpBorderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "popUpFontColor": "#FFFFFF",
 "borderRadius": 0,
 "paddingLeft": 15,
 "popUpShadowSpread": 1,
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "minHeight": 1,
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "arrowBeforeLabel": false,
 "popUpBackgroundColor": "#F7931E",
 "class": "DropDown",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "popUpGap": 2,
 "minWidth": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "label": "RECEPTION",
 "paddingRight": 15,
 "popUpBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "popUpPaddingBottom": 10,
 "fontColor": "#FFFFFF",
 "height": 60,
 "popUpShadow": false,
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "DropDown 1"
 },
 "fontStyle": "normal",
 "fontWeight": "bold"
},
{
 "shadow": false,
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "popUpShadowBlurRadius": 6,
 "arrowColor": "#FFFFFF",
 "textDecoration": "none",
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
 "popUpShadowColor": "#000000",
 "backgroundOpacity": 1,
 "width": 110,
 "popUpBorderRadius": 5,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "popUpFontColor": "#FFFFFF",
 "borderRadius": 0,
 "paddingLeft": 15,
 "popUpShadowSpread": 1,
 "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "minHeight": 1,
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "arrowBeforeLabel": false,
 "popUpBackgroundColor": "#F7931E",
 "class": "DropDown",
 "paddingRight": 15,
 "borderSize": 0,
 "popUpGap": 2,
 "minWidth": 1,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "label": "ROOMS",
 "selectedPopUpBackgroundColor": "#CE6700",
 "height": "100%",
 "popUpBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "popUpPaddingBottom": 10,
 "fontColor": "#FFFFFF",
 "backgroundColor": [
  "#F7931E"
 ],
 "popUpShadow": false,
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "DropDown 2"
 },
 "fontStyle": "normal",
 "fontWeight": "bold"
},
{
 "shadow": false,
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "popUpShadowBlurRadius": 6,
 "arrowColor": "#FFFFFF",
 "textDecoration": "none",
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
 "popUpShadowColor": "#000000",
 "backgroundOpacity": 1,
 "width": 138,
 "popUpBorderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "popUpFontColor": "#FFFFFF",
 "borderRadius": 0,
 "paddingLeft": 15,
 "popUpShadowSpread": 1,
 "playList": "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "minHeight": 1,
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "arrowBeforeLabel": false,
 "popUpBackgroundColor": "#F7931E",
 "class": "DropDown",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "popUpGap": 2,
 "minWidth": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "label": "AMENITIES",
 "paddingRight": 15,
 "popUpBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "popUpPaddingBottom": 10,
 "fontColor": "#FFFFFF",
 "height": 60,
 "popUpShadow": false,
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "DropDown 3"
 },
 "fontStyle": "normal",
 "fontWeight": "bold"
},
{
 "shadow": false,
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "popUpShadowBlurRadius": 6,
 "arrowColor": "#FFFFFF",
 "textDecoration": "none",
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
 "popUpShadowColor": "#000000",
 "backgroundOpacity": 1,
 "width": 130,
 "popUpBorderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "popUpFontColor": "#FFFFFF",
 "borderRadius": 0,
 "paddingLeft": 15,
 "popUpShadowSpread": 1,
 "playList": "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "minHeight": 1,
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "arrowBeforeLabel": false,
 "popUpBackgroundColor": "#F7931E",
 "class": "DropDown",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "popUpGap": 2,
 "minWidth": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "label": "SPORTS AREA",
 "paddingRight": 15,
 "popUpBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "popUpPaddingBottom": 10,
 "fontColor": "#FFFFFF",
 "height": 60,
 "popUpShadow": false,
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "DropDown 4"
 },
 "fontStyle": "normal",
 "fontWeight": "bold"
},
{
 "shadow": false,
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "popUpShadowBlurRadius": 6,
 "arrowColor": "#FFFFFF",
 "textDecoration": "none",
 "id": "DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09",
 "popUpShadowColor": "#000000",
 "backgroundOpacity": 1,
 "width": 152,
 "popUpBorderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "popUpFontColor": "#FFFFFF",
 "borderRadius": 0,
 "paddingLeft": 15,
 "popUpShadowSpread": 1,
 "playList": "this.DropDown_057B3A27_3AA3_A1F2_41C0_6BB995D79A09_playlist",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "minHeight": 1,
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "backgroundColorRatios": [
  0
 ],
 "arrowBeforeLabel": false,
 "popUpBackgroundColor": "#F7931E",
 "class": "DropDown",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "popUpGap": 2,
 "minWidth": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "label": "SWIMMING POOL",
 "paddingRight": 15,
 "popUpBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "popUpPaddingBottom": 10,
 "fontColor": "#FFFFFF",
 "height": 60,
 "popUpShadow": false,
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "DropDown 5"
 },
 "fontStyle": "normal",
 "fontWeight": "bold"
},
{
 "shadow": false,
 "fontFamily": "Montserrat",
 "popUpShadowOpacity": 0,
 "popUpShadowBlurRadius": 6,
 "arrowColor": "#FFFFFF",
 "textDecoration": "none",
 "id": "DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE",
 "popUpShadowColor": "#000000",
 "backgroundOpacity": 1,
 "width": 136,
 "popUpBorderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "popUpPaddingLeft": 15,
 "popUpFontColor": "#FFFFFF",
 "borderRadius": 0,
 "paddingLeft": 15,
 "popUpShadowSpread": 1,
 "playList": "this.DropDown_05784A29_3AA3_A1FE_41B1_E2305F2F53BE_playlist",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "minHeight": 1,
 "propagateClick": false,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColorRatios": [
  0
 ],
 "arrowBeforeLabel": false,
 "popUpBackgroundColor": "#F7931E",
 "class": "DropDown",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "popUpGap": 2,
 "minWidth": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "label": "RESTAURANTS",
 "paddingRight": 15,
 "popUpBackgroundOpacity": 1,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "popUpPaddingBottom": 10,
 "fontColor": "#FFFFFF",
 "height": 60,
 "popUpShadow": false,
 "popUpPaddingTop": 10,
 "paddingTop": 0,
 "visible": false,
 "data": {
  "name": "DropDown 6"
 },
 "fontStyle": "normal",
 "fontWeight": "bold"
},
{
 "shadow": false,
 "fontFamily": "Arial",
 "data": {
  "name": "Button Settings"
 },
 "textDecoration": "none",
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "backgroundOpacity": 1,
 "width": 69,
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 17,
 "iconWidth": 17,
 "minHeight": 1,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Button",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FF9400"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "mode": "toggle",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "fontSize": 12,
 "layout": "horizontal",
 "paddingRight": 0,
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "height": 55,
 "fontColor": "#FFFFFF",
 "paddingTop": 0,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "shadow": false,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundOpacity": 1,
 "width": "85%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-left"
 }
},
{
 "shadow": false,
 "height": "100%",
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "backgroundOpacity": 1,
 "width": 8,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#F7931E"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "orange line"
 }
},
{
 "shadow": false,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundOpacity": 1,
 "width": "50%",
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingBottom": 20,
 "borderRadius": 0,
 "paddingLeft": 50,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "paddingRight": 50,
 "borderSize": 0,
 "minWidth": 460,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 20,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51,
 "data": {
  "name": "-right"
 }
},
{
 "shadow": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "class": "IconButton",
 "borderSize": 0,
 "minWidth": 50,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "height": "75%",
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "cursor": "hand",
 "data": {
  "name": "X"
 }
},
{
 "shadow": false,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 140,
 "contentOpaque": false,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 }
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "borderRadius": 5,
 "itemLabelGap": 7,
 "paddingBottom": 70,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemBackgroundColorDirection": "vertical",
 "minHeight": 1,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "verticalAlign": "middle",
 "itemPaddingBottom": 3,
 "itemThumbnailHeight": 125,
 "scrollBarColor": "#F7931E",
 "minWidth": 1,
 "itemLabelFontStyle": "normal",
 "selectedItemLabelFontColor": "#F7931E",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "paddingRight": 70,
 "itemOpacity": 1,
 "itemMode": "normal",
 "gap": 26,
 "scrollBarOpacity": 0.5,
 "itemLabelFontFamily": "Montserrat",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadowColor": "#F7931E",
 "itemMaxWidth": 1000,
 "itemMaxHeight": 1000,
 "itemThumbnailWidth": 220,
 "shadow": false,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "paddingTop": 10,
 "itemHorizontalAlign": "center",
 "height": "92%",
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadow": true,
 "backgroundOpacity": 0,
 "itemThumbnailShadow": false,
 "rollOverItemLabelFontColor": "#F7931E",
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 0,
 "paddingLeft": 70,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemWidth": 220,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemBackgroundColorRatios": [],
 "class": "ThumbnailGrid",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "bottom": -0.2,
 "itemThumbnailOpacity": 1,
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadow": true,
 "itemHeight": 160,
 "itemVerticalAlign": "top",
 "itemLabelFontSize": 13,
 "data": {
  "name": "ThumbnailList"
 },
 "itemMinWidth": 50,
 "itemThumbnailScaleMode": "fit_outside"
},
{
 "shadow": false,
 "insetBorder": false,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "backgroundOpacity": 1,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "url": "https://www.google.com/maps/place/University+of+Washington+College+of+Engineering/@47.6526095,-122.3070986,15.79z/data=!4m9!1m2!2m1!1suniversity+of+washington!3m5!1s0x54901492bfc00001:0xb3ce61ae7533b833!8m2!3d47.654606!4d-122.3046453!15sChh1bml2ZXJzaXR5IG9mIHdhc2hpbmd0b26SAQdjb2xsZWdl",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "class": "WebFrame",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "data": {
  "name": "WebFrame48191"
 },
 "height": "100%"
},
{
 "shadow": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "backgroundOpacity": 0,
 "width": "25%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "class": "IconButton",
 "borderSize": 0,
 "minWidth": 50,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "height": "75%",
 "paddingTop": 0,
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "cursor": "hand",
 "data": {
  "name": "X"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minHeight": 1,
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 12,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "shadow": false,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipFontWeight": "normal",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "paddingLeft": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "shadow": false,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "backgroundOpacity": 0,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "class": "Container",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 140,
 "contentOpaque": false,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "header"
 }
},
{
 "shadow": false,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container photo"
 }
},
{
 "shadow": false,
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpeg",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0%",
 "class": "Image",
 "borderSize": 0,
 "minWidth": 1,
 "paddingRight": 0,
 "height": "100%",
 "paddingTop": 0,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "data": {
  "name": "photo"
 }
},
{
 "shadow": false,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "height": 60,
 "contentOpaque": false,
 "paddingTop": 20,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 }
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F"
 ],
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundOpacity": 0.3,
 "width": "100%",
 "layout": "vertical",
 "scrollBarWidth": 10,
 "paddingBottom": 30,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 520,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 100,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79,
 "data": {
  "name": "Container text"
 }
},
{
 "shadow": false,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundOpacity": 0.3,
 "width": 370,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 40,
 "contentOpaque": false,
 "paddingTop": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container space"
 }
},
{
 "shadow": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "backgroundOpacity": 0,
 "width": "100%",
 "right": 20,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": 20,
 "class": "IconButton",
 "borderSize": 0,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "height": "36.14%",
 "paddingTop": 0,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "cursor": "hand",
 "data": {
  "name": "IconButton X"
 }
},
{
 "shadow": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "backgroundOpacity": 0,
 "width": "100%",
 "right": 20,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": 20,
 "class": "IconButton",
 "borderSize": 0,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "height": "36.14%",
 "paddingTop": 0,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "cursor": "hand",
 "data": {
  "name": "IconButton X"
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minHeight": 1,
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 12,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "shadow": false,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipFontWeight": "normal",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "paddingLeft": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "transitionMode": "blending",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "shadow": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "backgroundOpacity": 0,
 "width": "10%",
 "right": 20,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": 20,
 "class": "IconButton",
 "borderSize": 0,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "height": "10%",
 "paddingTop": 0,
 "horizontalAlign": "right",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "cursor": "hand",
 "data": {
  "name": "IconButton X"
 }
},
{
 "shadow": false,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "paddingBottom": 20,
 "minHeight": 1,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarColor": "#F7931E",
 "minWidth": 1,
 "paddingRight": 10,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:7.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.61vh;font-family:'Montserrat';\"><B>UNIVERSITY of </B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.61vh;font-family:'Montserrat';\"><B>WASHINGTON</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.86vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.86vh;font-family:'Montserrat';\"><B>We want to learn about you.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.87vh;font-family:Arial, Helvetica, sans-serif;\">At the University of Washington, we aim to be the greatest public university in the world \u2014 as measured by our impact. Join us to unleash potential, create beauty and spark action. Together, we can create a world of good.</SPAN></DIV></div>",
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 },
 "height": "52.669%"
}],
 "class": "Player",
 "paddingRight": 0,
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.5,
 "gap": 10,
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "scripts": {
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "existsKey": function(key){  return key in window; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
