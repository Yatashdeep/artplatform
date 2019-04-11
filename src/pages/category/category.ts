import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
   catsound=[]
   subcat=[]
   count=0
   count1=0

   catshow1:boolean
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 

this.catshow1=false
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
    this.catsound=[

      {
       'category':'Music',
      'img':'assets/tree-cat/music.png',
     'form':[{'artform':'Rock','img':'assets/tree-cat/rock.png'},
     {'artform':'Pop','img':'assets/tree-cat/pop.png'},{'artform':'Hip Hop','img':'assets/tree-cat/hip-hop.png'},
     {'artform':'Electronic','img':'assets/tree-cat/electronics.png'},
     {'artform':'Accoustic','img':'assets/tree-cat/acoustic.png'},
     {'artform':'ACappela','img':'assets/tree-cat/capella.png'},
     {'artform':'Jazz','img':'assets/tree-cat/jazz.png'}
     ,{'artform':'Reggae','img':'assets/tree-cat/reggae.png'},
     {'artform':'Metal','img':'assets/tree-cat/metal.png'},
     {'artform':'Classical','img':'assets/tree-cat/classical.png'},
     {'artform':'DJ','img':'assets/tree-cat/dj.png'},
     {'artform':'Instrumental','img':'assets/tree-cat/instrumental.png'},
     {'artform':'Others','img':'assets/tree-cat/others (2).png'},
     {'artform':'Covers','img':'assets/tree-cat/covers.png'},
     {'artform':'Castlepalooza','img':'assets/tree-cat/castle.png'}],
    'artform':'assets/profile/02_1_music.png'
   },
    {
     'category':'Dance',
     'img':'assets/tree-cat/dance.png',
     'form':[{'artform':'Rock','img':'assets/tree-cat/rock.png'},
     {'artform':'Pop','img':'assets/tree-cat/pop.png'},{'artform':'Hip Hop','img':'assets/tree-cat/hip-hop.png'},
     {'artform':'Electronic','img':'assets/tree-cat/electronics.png'},
     {'artform':'Accoustic','img':'assets/tree-cat/acoustic.png'},
     {'artform':'ACappela','img':'assets/tree-cat/capella.png'},
     {'artform':'Jazz','img':'assets/tree-cat/jazz.png'}
     ,{'artform':'Reggae','img':'assets/tree-cat/reggae.png'},
     {'artform':'Metal','img':'assets/tree-cat/metal.png'},
     {'artform':'Classical','img':'assets/tree-cat/classical.png'},
     {'artform':'DJ','img':'assets/tree-cat/dj.png'},
     {'artform':'Instrumental','img':'assets/tree-cat/instrumental.png'},
     {'artform':'Others','img':'assets/tree-cat/others (2).png'},
     {'artform':'Covers','img':'assets/tree-cat/covers.png'},
     {'artform':'Castlepalooza','img':'assets/tree-cat/castle.png'}],
      // 'form':['Hip Hop','Body Pop','BBoy/Breakdance','Irish','Salsa','Ballet','Trap Dance','Jazz','Modern','Swing','Belly','Country','Others'],
      'artform':'assets/profile/dance.png'
   },
    {
     'category':'Film',
     'img':'assets/tree-cat/film.png',
     'form':[{'artform':'Rock','img':'assets/tree-cat/rock.png'},
     {'artform':'Pop','img':'assets/tree-cat/pop.png'},{'artform':'Hip Hop','img':'assets/tree-cat/hip-hop.png'},
     {'artform':'Electronic','img':'assets/tree-cat/electronics.png'},
     {'artform':'Accoustic','img':'assets/tree-cat/acoustic.png'},
     {'artform':'ACappela','img':'assets/tree-cat/capella.png'},
     {'artform':'Jazz','img':'assets/tree-cat/jazz.png'}
     ,{'artform':'Reggae','img':'assets/tree-cat/reggae.png'},
     {'artform':'Metal','img':'assets/tree-cat/metal.png'},
     {'artform':'Classical','img':'assets/tree-cat/classical.png'},
     {'artform':'DJ','img':'assets/tree-cat/dj.png'},
     {'artform':'Instrumental','img':'assets/tree-cat/instrumental.png'},
     {'artform':'Others','img':'assets/tree-cat/others (2).png'},
     {'artform':'Covers','img':'assets/tree-cat/covers.png'},
     {'artform':'Castlepalooza','img':'assets/tree-cat/castle.png'}],
    //  'form':['Show Reel','Documentary','Movie Script','TV Script','Unreleases Films','Others'],
     'artform':'assets/profile/film.png'
    },
    {
     'category':'Photography',
     'img':'assets/tree-cat/camera.png',
     'form':[{'artform':'Rock','img':'assets/tree-cat/rock.png'},
     {'artform':'Pop','img':'assets/tree-cat/pop.png'},{'artform':'Hip Hop','img':'assets/tree-cat/hip-hop.png'},
     {'artform':'Electronic','img':'assets/tree-cat/electronics.png'},
     {'artform':'Accoustic','img':'assets/tree-cat/acoustic.png'},
     {'artform':'ACappela','img':'assets/tree-cat/capella.png'},
     {'artform':'Jazz','img':'assets/tree-cat/jazz.png'}
     ,{'artform':'Reggae','img':'assets/tree-cat/reggae.png'},
     {'artform':'Metal','img':'assets/tree-cat/metal.png'},
     {'artform':'Classical','img':'assets/tree-cat/classical.png'},
     {'artform':'DJ','img':'assets/tree-cat/dj.png'},
     {'artform':'Instrumental','img':'assets/tree-cat/instrumental.png'},
     {'artform':'Others','img':'assets/tree-cat/others (2).png'},
     {'artform':'Covers','img':'assets/tree-cat/covers.png'},
     {'artform':'Castlepalooza','img':'assets/tree-cat/castle.png'}],
    //  'form':['Aerial','Action','Animal','Architecture','Black and White','Commercial','Panoramic','Sports','Nature','Potrait','Long Exposure','Others'],
     'artform':'assets/profile/photography.png'
    },
    {
     'category':'Literature',
     'img':'assets/tree-cat/literature.png',
     'form':[{'artform':'Rock','img':'assets/tree-cat/rock.png'},
     {'artform':'Pop','img':'assets/tree-cat/pop.png'},{'artform':'Hip Hop','img':'assets/tree-cat/hip-hop.png'},
     {'artform':'Electronic','img':'assets/tree-cat/electronics.png'},
     {'artform':'Accoustic','img':'assets/tree-cat/acoustic.png'},
     {'artform':'ACappela','img':'assets/tree-cat/capella.png'},
     {'artform':'Jazz','img':'assets/tree-cat/jazz.png'}
     ,{'artform':'Reggae','img':'assets/tree-cat/reggae.png'},
     {'artform':'Metal','img':'assets/tree-cat/metal.png'},
     {'artform':'Classical','img':'assets/tree-cat/classical.png'},
     {'artform':'DJ','img':'assets/tree-cat/dj.png'},
     {'artform':'Instrumental','img':'assets/tree-cat/instrumental.png'},
     {'artform':'Others','img':'assets/tree-cat/others (2).png'},
     {'artform':'Covers','img':'assets/tree-cat/covers.png'},
     {'artform':'Castlepalooza','img':'assets/tree-cat/castle.png'}],
    //  'form':['Novel','Movie Script','TV Script','Comedy','Journalistic','Factual','Education','Poetry','Others'],
     'artform':'assets/profile/literature.png'
    },
    {
     'category':'Art',
     'img':'assets/tree-cat/art.png',
     'form':[{'artform':'Rock','img':'assets/tree-cat/rock.png'},
     {'artform':'Pop','img':'assets/tree-cat/pop.png'},{'artform':'Hip Hop','img':'assets/tree-cat/hip-hop.png'},
     {'artform':'Electronic','img':'assets/tree-cat/electronics.png'},
     {'artform':'Accoustic','img':'assets/tree-cat/acoustic.png'},
     {'artform':'ACappela','img':'assets/tree-cat/capella.png'},
     {'artform':'Jazz','img':'assets/tree-cat/jazz.png'}
     ,{'artform':'Reggae','img':'assets/tree-cat/reggae.png'},
     {'artform':'Metal','img':'assets/tree-cat/metal.png'},
     {'artform':'Classical','img':'assets/tree-cat/classical.png'},
     {'artform':'DJ','img':'assets/tree-cat/dj.png'},
     {'artform':'Instrumental','img':'assets/tree-cat/instrumental.png'},
     {'artform':'Others','img':'assets/tree-cat/others (2).png'},
     {'artform':'Covers','img':'assets/tree-cat/covers.png'},
     {'artform':'Castlepalooza','img':'assets/tree-cat/castle.png'}],
    //  'form':['Art','Design','Crafts','Others'],
     'artform':'assets/profile/art.png'
    },
    {
     'category':'Freestyle',
     'img':'assets/tree-cat/freestyle.png',
     'form':[{'artform':'Rock','img':'assets/tree-cat/rock.png'},
     {'artform':'Pop','img':'assets/tree-cat/pop.png'},{'artform':'Hip Hop','img':'assets/tree-cat/hip-hop.png'},
     {'artform':'Electronic','img':'assets/tree-cat/electronics.png'},
     {'artform':'Accoustic','img':'assets/tree-cat/acoustic.png'},
     {'artform':'ACappela','img':'assets/tree-cat/capella.png'},
     {'artform':'Jazz','img':'assets/tree-cat/jazz.png'}
     ,{'artform':'Reggae','img':'assets/tree-cat/reggae.png'},
     {'artform':'Metal','img':'assets/tree-cat/metal.png'},
     {'artform':'Classical','img':'assets/tree-cat/classical.png'},
     {'artform':'DJ','img':'assets/tree-cat/dj.png'},
     {'artform':'Instrumental','img':'assets/tree-cat/instrumental.png'},
     {'artform':'Others','img':'assets/tree-cat/others (2).png'},
     {'artform':'Covers','img':'assets/tree-cat/covers.png'},
     {'artform':'Castlepalooza','img':'assets/tree-cat/castle.png'}],
    //  'form':['Breakdance','Body Pop','BMX','Skateboarding','juggling','Parkour','Graffiti','Beatbox','Watersports','Rap','Skiing','Turntabilism','Football','Others'],
     'artform':'assets/profile/freestyle.png'
    },
    {
     'category':'Personality',
     'img':'assets/tree-cat/personality.png',
     'form':[{'artform':'Rock','img':'assets/tree-cat/rock.png'},
     {'artform':'Pop','img':'assets/tree-cat/pop.png'},{'artform':'Hip Hop','img':'assets/tree-cat/hip-hop.png'},
     {'artform':'Electronic','img':'assets/tree-cat/electronics.png'},
     {'artform':'Accoustic','img':'assets/tree-cat/acoustic.png'},
     {'artform':'ACappela','img':'assets/tree-cat/capella.png'},
     {'artform':'Jazz','img':'assets/tree-cat/jazz.png'}
     ,{'artform':'Reggae','img':'assets/tree-cat/reggae.png'},
     {'artform':'Metal','img':'assets/tree-cat/metal.png'},
     {'artform':'Classical','img':'assets/tree-cat/classical.png'},
     {'artform':'DJ','img':'assets/tree-cat/dj.png'},
     {'artform':'Instrumental','img':'assets/tree-cat/instrumental.png'},
     {'artform':'Others','img':'assets/tree-cat/others (2).png'},
     {'artform':'Covers','img':'assets/tree-cat/covers.png'},
     {'artform':'Castlepalooza','img':'assets/tree-cat/castle.png'}],
    //  'form':['Presenter','TV Presenter','Comedian','Radio Presenter','Event Presenter','Commentator','Impersonator','Mime','Others'],
     'artform':'assets/profile/personality.png'
    },
    {
     'category':'Other',
     'img':'assets/tree-cat/others.png',
     'form':[{'artform':'Rock','img':'assets/tree-cat/rock.png'},
     {'artform':'Pop','img':'assets/tree-cat/pop.png'},{'artform':'Hip Hop','img':'assets/tree-cat/hip-hop.png'},
     {'artform':'Electronic','img':'assets/tree-cat/electronics.png'},
     {'artform':'Accoustic','img':'assets/tree-cat/acoustic.png'},
     {'artform':'ACappela','img':'assets/tree-cat/capella.png'},
     {'artform':'Jazz','img':'assets/tree-cat/jazz.png'}
     ,{'artform':'Reggae','img':'assets/tree-cat/reggae.png'},
     {'artform':'Metal','img':'assets/tree-cat/metal.png'},
     {'artform':'Classical','img':'assets/tree-cat/classical.png'},
     {'artform':'DJ','img':'assets/tree-cat/dj.png'},
     {'artform':'Instrumental','img':'assets/tree-cat/instrumental.png'},
     {'artform':'Others','img':'assets/tree-cat/others (2).png'},
     {'artform':'Covers','img':'assets/tree-cat/covers.png'},
     {'artform':'Castlepalooza','img':'assets/tree-cat/castle.png'}],
    //  'form':['Animal Trick','Street Perform','Synchronised Act','Magician','Mime','Modeling','Others'],
     'artform':'assets/profile/others_bg.png'
    }
   
   
   
   
   
   ]
   this.subcat=[
     {
       'category':'Indie Rock',
       'img':'assets/tree-cat/rock2.png',
      },
      {
       'category':'Hard Rock',
       'img':'assets/tree-cat/hard_rock.png',
      },
      {
       'category':'Grunge',
       'img':'assets/tree-cat/grunge.png',
      },
      {
       'category':'Country Rock',
       'img':'assets/tree-cat/country_rock.png',
      },
   
      {
       'category':'Punk',
       'img':'assets/tree-cat/punk.png',
      },
      {
       'category':'Instrumental Rock',
       'img':'assets/tree-cat/instrumental_rock.png',
      },
      {
       'category':'Accoustic',
       'img':'assets/tree-cat/acoustic.png',
      },
   
      {
       'category':'Electronic',
       'img':'assets/tree-cat/electronics2.png',
      },
      {
       'category':'Post Rock',
       'img':'assets/tree-cat/post_rock.png',
      },
      {
       'category':'Other',
       'img':'assets/tree-cat/others (2).png',
      }
   
   
   
   
   
   
   
   ]
  }
  cattap(id)
  {
    if(this.count%2==0)
    {
    var y=document.getElementById('showall').style.display='block'
    var z=document.getElementById('tickshow').style.display='block'
    var x=document.getElementById('tickshow4').style.display='block'
    } 
    else{
      var y=document.getElementById('showall').style.display='none'
      var z=document.getElementById('tickshow').style.display='none'
      var x=document.getElementById('tickshow4').style.display='none'
     
    }
    this.count++ 
  }
  showsubcat(id){
    if(this.count1%2==0)
    {
    var y=document.getElementById('showsub-cat').style.display='block'
    var z=document.getElementById('tickshow2').style.display='block'
    var z=document.getElementById('tickshow3').style.display='block'
    this.catshow1=true
    } 
    else{
      var y=document.getElementById('showsub-cat').style.display='none'
      var z=document.getElementById('tickshow2').style.display='none'
      var z=document.getElementById('tickshow3').style.display='none'
      this.catshow1=false
    }
    this.count1++ 
  }
}
